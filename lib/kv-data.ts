/**
 * Vercel KV Data Layer
 * 
 * Zero-config: Just click "Create Database" in Vercel Dashboard > Storage
 * Environment variables (KV_REST_API_URL, KV_REST_API_TOKEN) are auto-injected.
 * No external registration, no SQL, no manual env vars.
 */

import { kv } from "@vercel/kv";

// ===== Types =====
export interface Inquiry {
  id: number;
  full_name: string;
  company: string | null;
  email: string;
  phone: string | null;
  country: string | null;
  category: string | null;
  product_code: string | null;
  product_name: string | null;
  quantity: string | null;
  color: string | null;
  delivery_date: string | null;
  message: string | null;
  status: string;
  priority: string;
  source: string;
  ip_address: string | null;
  user_agent: string | null;
  created_at: string;
  updated_at: string;
}

export interface FollowUp {
  id: number;
  inquiry_id: number;
  contact_method: string;
  contact_date: string;
  summary: string;
  next_action: string | null;
  next_action_date: string | null;
  created_by: string;
  created_at: string;
}

// ===== KV Key Helpers =====
const INQUIRY_KEY = (id: number) => `inquiry:${id}`;
const INQUIRY_LIST_KEY = "inquiries:list"; // sorted set: score=timestamp, member=id
const FOLLOWUP_KEY = (id: number) => `followup:${id}`;
const FOLLOWUP_LIST_KEY = (inquiryId: number) => `inquiry:${inquiryId}:followups`;
const COUNTER_KEY = "counter:inquiries";
const FOLLOWUP_COUNTER_KEY = "counter:followups";

// ===== Inquiry CRUD =====

export async function createInquiry(data: Omit<Inquiry, "id" | "created_at" | "updated_at" | "status" | "priority" | "source">): Promise<Inquiry> {
  const id = await kv.incr(COUNTER_KEY);
  const now = new Date().toISOString();

  const inquiry: Inquiry = {
    ...data,
    id,
    status: "new",
    priority: "normal",
    source: "website",
    created_at: now,
    updated_at: now,
  };

  // Store inquiry data
  await kv.set(INQUIRY_KEY(id), JSON.stringify(inquiry));
  // Add to sorted set (score = timestamp for sorting)
  await kv.zadd(INQUIRY_LIST_KEY, { score: Date.now(), member: String(id) });

  return inquiry;
}

export async function getInquiry(id: number): Promise<Inquiry | null> {
  const raw = await kv.get<string>(INQUIRY_KEY(id));
  if (!raw) return null;
  return JSON.parse(raw);
}

export async function updateInquiry(id: number, updates: Partial<Pick<Inquiry, "status" | "priority" | "source">>): Promise<Inquiry | null> {
  const inquiry = await getInquiry(id);
  if (!inquiry) return null;

  const updated: Inquiry = {
    ...inquiry,
    ...updates,
    updated_at: new Date().toISOString(),
  };

  await kv.set(INQUIRY_KEY(id), JSON.stringify(updated));
  return updated;
}

export async function listInquiries(options: {
  status?: string;
  search?: string;
  page?: number;
  limit?: number;
}): Promise<{ inquiries: Inquiry[]; total: number }> {
  const { status = "all", search = "", page = 1, limit = 20 } = options;

  // Get all inquiry IDs (sorted by time, newest first)
  const allIds = await kv.zrange(INQUIRY_LIST_KEY, 0, -1, { rev: true });
  
  if (allIds.length === 0) {
    return { inquiries: [], total: 0 };
  }

  // Fetch all inquiries
  const inquiries: Inquiry[] = [];
  for (const idStr of allIds) {
    const id = parseInt(idStr as string);
    const inq = await getInquiry(id);
    if (inq) inquiries.push(inq);
  }

  // Filter by status
  let filtered = inquiries;
  if (status !== "all") {
    filtered = filtered.filter((i) => i.status === status);
  }

  // Filter by search
  if (search) {
    const s = search.toLowerCase();
    filtered = filtered.filter(
      (i) =>
        i.full_name.toLowerCase().includes(s) ||
        i.email.toLowerCase().includes(s) ||
        (i.company || "").toLowerCase().includes(s) ||
        (i.country || "").toLowerCase().includes(s) ||
        (i.product_code || "").toLowerCase().includes(s)
    );
  }

  const total = filtered.length;
  const offset = (page - 1) * limit;
  const paged = filtered.slice(offset, offset + limit);

  return { inquiries: paged, total };
}

// ===== Follow-up CRUD =====

export async function createFollowUp(data: {
  inquiry_id: number;
  contact_method: string;
  contact_date: string;
  summary: string;
  next_action: string | null;
  next_action_date: string | null;
}): Promise<FollowUp> {
  const id = await kv.incr(FOLLOWUP_COUNTER_KEY);
  const now = new Date().toISOString();

  const followUp: FollowUp = {
    id,
    inquiry_id: data.inquiry_id,
    contact_method: data.contact_method,
    contact_date: data.contact_date,
    summary: data.summary,
    next_action: data.next_action,
    next_action_date: data.next_action_date,
    created_by: "admin",
    created_at: now,
  };

  await kv.set(FOLLOWUP_KEY(id), JSON.stringify(followUp));
  await kv.zadd(FOLLOWUP_LIST_KEY(data.inquiry_id), { score: Date.now(), member: String(id) });

  return followUp;
}

export async function listFollowUps(inquiryId: number): Promise<FollowUp[]> {
  const ids = await kv.zrange(FOLLOWUP_LIST_KEY(inquiryId), 0, -1, { rev: true });
  const followUps: FollowUp[] = [];
  for (const idStr of ids) {
    const id = parseInt(idStr as string);
    const raw = await kv.get<string>(FOLLOWUP_KEY(id));
    if (raw) followUps.push(JSON.parse(raw));
  }
  return followUps;
}

// ===== Stats =====

export async function getStats(): Promise<{
  total: number;
  statusCounts: Record<string, number>;
  trend: Record<string, number>;
  topCountries: [string, number][];
  topCategories: [string, number][];
  conversionRate: string;
  recentCount: number;
}> {
  const allIds = await kv.zrange(INQUIRY_LIST_KEY, 0, -1, { rev: true });
  const inquiries: Inquiry[] = [];

  for (const idStr of allIds) {
    const id = parseInt(idStr as string);
    const inq = await getInquiry(id);
    if (inq) inquiries.push(inq);
  }

  const total = inquiries.length;
  const statusCounts: Record<string, number> = {};
  const statuses = ["new", "contacted", "quoted", "sample", "negotiation", "won", "lost"];
  statuses.forEach((s) => (statusCounts[s] = 0));
  inquiries.forEach((i) => {
    statusCounts[i.status] = (statusCounts[i.status] || 0) + 1;
  });

  // 7-day trend
  const trend: Record<string, number> = {};
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    trend[d.toISOString().split("T")[0]] = 0;
  }
  const sevenDaysAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
  inquiries.forEach((i) => {
    const ts = new Date(i.created_at).getTime();
    if (ts > sevenDaysAgo) {
      const dateKey = i.created_at.split("T")[0];
      if (trend[dateKey] !== undefined) trend[dateKey]++;
    }
  });

  // Top countries
  const countryCounts: Record<string, number> = {};
  inquiries.forEach((i) => {
    if (i.country) countryCounts[i.country] = (countryCounts[i.country] || 0) + 1;
  });
  const topCountries = Object.entries(countryCounts).sort((a, b) => b[1] - a[1]).slice(0, 5);

  // Top categories
  const categoryCounts: Record<string, number> = {};
  inquiries.forEach((i) => {
    if (i.category) categoryCounts[i.category] = (categoryCounts[i.category] || 0) + 1;
  });
  const topCategories = Object.entries(categoryCounts).sort((a, b) => b[1] - a[1]).slice(0, 5);

  const won = statusCounts["won"] || 0;
  const conversionRate = total ? ((won / total) * 100).toFixed(1) : "0";
  const recentCount = Object.values(trend).reduce((a, b) => a + b, 0);

  return { total, statusCounts, trend, topCountries, topCategories, conversionRate, recentCount };
}

// ===== Constants =====
export const STATUS_LABELS: Record<string, string> = {
  new: "New Inquiry",
  contacted: "Contacted",
  quoted: "Quoted",
  sample: "Sample Sent",
  negotiation: "Negotiation",
  won: "Won",
  lost: "Lost",
};

export const STATUS_OPTIONS = [
  { value: "new", label: "New", color: "#3b82f6" },
  { value: "contacted", label: "Contacted", color: "#06b6d4" },
  { value: "quoted", label: "Quoted", color: "#8b5cf6" },
  { value: "sample", label: "Sample Sent", color: "#f59e0b" },
  { value: "negotiation", label: "Negotiation", color: "#ec4899" },
  { value: "won", label: "Won", color: "#10b981" },
  { value: "lost", label: "Lost", color: "#ef4444" },
];

export const PRIORITY_OPTIONS = [
  { value: "high", label: "High", color: "#ef4444" },
  { value: "normal", label: "Normal", color: "#3b82f6" },
  { value: "low", label: "Low", color: "#8b9199" },
];

export const CONTACT_METHODS = [
  { value: "email", label: "Email" },
  { value: "phone", label: "Phone" },
  { value: "whatsapp", label: "WhatsApp" },
  { value: "wechat", label: "WeChat" },
  { value: "video_call", label: "Video Call" },
  { value: "visit", label: "Visit" },
  { value: "other", label: "Other" },
];
