import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Supabase client utilities
 * 
 * Environment variables needed:
 * - NEXT_PUBLIC_SUPABASE_URL
 * - NEXT_PUBLIC_SUPABASE_ANON_KEY
 * - SUPABASE_SERVICE_ROLE_KEY (server-side only, bypasses RLS)
 */

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

// Browser-side client (respects RLS, anon access)
export function getBrowserClient(): SupabaseClient {
  return createClient(supabaseUrl, supabaseAnonKey);
}

// Server-side client (bypasses RLS, for admin API routes only)
export function getServerClient(): SupabaseClient {
  return createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}

// Check if Supabase is configured
export function isSupabaseConfigured(): boolean {
  return !!(supabaseUrl && supabaseAnonKey);
}

export function isServerConfigured(): boolean {
  return !!(supabaseUrl && supabaseServiceKey);
}

// Types
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

export type InquiryStatus =
  | "new"
  | "contacted"
  | "quoted"
  | "sample"
  | "negotiation"
  | "won"
  | "lost";

export type PriorityLevel = "high" | "normal" | "low";

export const STATUS_LABELS: Record<string, string> = {
  new: "New Inquiry",
  contacted: "Contacted",
  quoted: "Quoted",
  sample: "Sample Sent",
  negotiation: "Negotiation",
  won: "Won",
  lost: "Lost",
};

export const STATUS_COLORS: Record<string, string> = {
  new: "#3b82f6",
  contacted: "#06b6d4",
  quoted: "#8b5cf6",
  sample: "#f59e0b",
  negotiation: "#ec4899",
  won: "#10b981",
  lost: "#ef4444",
};

export const PRIORITY_LABELS: Record<string, string> = {
  high: "High",
  normal: "Normal",
  low: "Low",
};

export const CONTACT_METHODS = [
  "email",
  "phone",
  "whatsapp",
  "wechat",
  "video_call",
  "visit",
  "other",
];
