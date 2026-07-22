import { NextRequest, NextResponse } from "next/server";
import { getServerClient, isServerConfigured, STATUS_LABELS } from "@/lib/supabase";
import { checkAuth } from "@/app/api/admin/login/route";

// GET /api/admin/inquiries — List inquiries with filters
export async function GET(request: NextRequest) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!isServerConfigured()) {
    return NextResponse.json({ error: "Database not configured" }, { status: 503 });
  }

  const { searchParams } = new URL(request.url);
  const status = searchParams.get("status") || "all";
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "20");
  const search = searchParams.get("search") || "";
  const offset = (page - 1) * limit;

  const supabase = getServerClient();

  let query = supabase
    .from("inquiries")
    .select("*", { count: "exact" })
    .order("created_at", { ascending: false })
    .range(offset, offset + limit - 1);

  if (status !== "all") {
    query = query.eq("status", status);
  }

  if (search) {
    query = query.or(
      `full_name.ilike.%${search}%,email.ilike.%${search}%,company.ilike.%${search}%,country.ilike.%${search}%,product_code.ilike.%${search}%`
    );
  }

  const { data, error, count } = await query;

  if (error) {
    console.error("Inquiries query error:", error);
    return NextResponse.json({ error: "Failed to fetch inquiries" }, { status: 500 });
  }

  return NextResponse.json({
    inquiries: data || [],
    total: count || 0,
    page,
    limit,
    totalPages: Math.ceil((count || 0) / limit),
    statusLabels: STATUS_LABELS,
  });
}
