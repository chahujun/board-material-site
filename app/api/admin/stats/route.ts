import { NextRequest, NextResponse } from "next/server";
import { getStats } from "@/lib/kv-data";
import { checkAuth } from "@/app/api/admin/login/route";

// GET /api/admin/stats — Dashboard statistics
export async function GET(request: NextRequest) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const stats = await getStats();
    return NextResponse.json(stats);
  } catch (err) {
    console.error("Stats error:", err);
    return NextResponse.json({ error: "Failed to fetch stats" }, { status: 500 });
  }
}
