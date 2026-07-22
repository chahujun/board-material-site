import { NextRequest, NextResponse } from "next/server";
import { getServerClient, isServerConfigured } from "@/lib/supabase";
import { checkAuth } from "@/app/api/admin/login/route";

// GET /api/admin/stats — Dashboard statistics
export async function GET(request: NextRequest) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!isServerConfigured()) {
    return NextResponse.json({ error: "Database not configured" }, { status: 503 });
  }

  const supabase = getServerClient();

  // Total count
  const { count: total } = await supabase
    .from("inquiries")
    .select("*", { count: "exact", head: true });

  // Count by status
  const statuses = ["new", "contacted", "quoted", "sample", "negotiation", "won", "lost"];
  const statusCounts: Record<string, number> = {};
  for (const status of statuses) {
    const { count } = await supabase
      .from("inquiries")
      .select("*", { count: "exact", head: true })
      .eq("status", status);
    statusCounts[status] = count || 0;
  }

  // Recent 7 days trend
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
  const { data: recentInquiries } = await supabase
    .from("inquiries")
    .select("created_at")
    .gte("created_at", sevenDaysAgo.toISOString())
    .order("created_at", { ascending: true });

  // Group by date
  const trend: Record<string, number> = {};
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const dateKey = d.toISOString().split("T")[0];
    trend[dateKey] = 0;
  }
  (recentInquiries || []).forEach((item: { created_at: string }) => {
    const dateKey = item.created_at.split("T")[0];
    if (trend[dateKey] !== undefined) {
      trend[dateKey] += 1;
    }
  });

  // Top countries
  const { data: countryData } = await supabase
    .from("inquiries")
    .select("country")
    .not("country", "is", null);

  const countryCounts: Record<string, number> = {};
  (countryData || []).forEach((item: { country: string }) => {
    if (item.country) {
      countryCounts[item.country] = (countryCounts[item.country] || 0) + 1;
    }
  });
  const topCountries = Object.entries(countryCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  // Top product categories
  const { data: categoryData } = await supabase
    .from("inquiries")
    .select("category")
    .not("category", "is", null);

  const categoryCounts: Record<string, number> = {};
  (categoryData || []).forEach((item: { category: string }) => {
    if (item.category) {
      categoryCounts[item.category] = (categoryCounts[item.category] || 0) + 1;
    }
  });
  const topCategories = Object.entries(categoryCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  // Conversion rate
  const won = statusCounts["won"] || 0;
  const conversionRate = total ? ((won / total) * 100).toFixed(1) : "0";

  return NextResponse.json({
    total: total || 0,
    statusCounts,
    trend,
    topCountries,
    topCategories,
    conversionRate,
    recentCount: (recentInquiries || []).length,
  });
}
