import { NextRequest, NextResponse } from "next/server";
import { listInquiries, STATUS_LABELS } from "@/lib/kv-data";
import { checkAuth } from "@/app/api/admin/login/route";

// GET /api/admin/inquiries — List inquiries with filters
export async function GET(request: NextRequest) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const status = searchParams.get("status") || "all";
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "20");
  const search = searchParams.get("search") || "";

  try {
    const { inquiries, total } = await listInquiries({ status, search, page, limit });

    return NextResponse.json({
      inquiries,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      statusLabels: STATUS_LABELS,
    });
  } catch (err) {
    console.error("Inquiries list error:", err);
    return NextResponse.json({ error: "Failed to fetch inquiries" }, { status: 500 });
  }
}
