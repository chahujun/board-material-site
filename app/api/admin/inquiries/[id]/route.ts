import { NextRequest, NextResponse } from "next/server";
import { getServerClient, isServerConfigured } from "@/lib/supabase";
import { checkAuth } from "@/app/api/admin/login/route";

// GET /api/admin/inquiries/[id] — Get inquiry detail with follow-ups
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!isServerConfigured()) {
    return NextResponse.json({ error: "Database not configured" }, { status: 503 });
  }

  const { id } = await params;
  const supabase = getServerClient();

  // Get inquiry
  const { data: inquiry, error: inquiryError } = await supabase
    .from("inquiries")
    .select("*")
    .eq("id", id)
    .single();

  if (inquiryError || !inquiry) {
    return NextResponse.json({ error: "Inquiry not found" }, { status: 404 });
  }

  // Get follow-ups
  const { data: followUps, error: followUpError } = await supabase
    .from("follow_ups")
    .select("*")
    .eq("inquiry_id", id)
    .order("contact_date", { ascending: false });

  if (followUpError) {
    console.error("Follow-ups query error:", followUpError);
  }

  return NextResponse.json({
    inquiry,
    followUps: followUps || [],
  });
}

// PATCH /api/admin/inquiries/[id] — Update inquiry status/priority
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!isServerConfigured()) {
    return NextResponse.json({ error: "Database not configured" }, { status: 503 });
  }

  const { id } = await params;
  const body = await request.json();

  const updates: Record<string, unknown> = {};
  if (body.status) updates.status = body.status;
  if (body.priority) updates.priority = body.priority;
  if (body.source) updates.source = body.source;

  const supabase = getServerClient();
  const { data, error } = await supabase
    .from("inquiries")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error("Inquiry update error:", error);
    return NextResponse.json({ error: "Failed to update inquiry" }, { status: 500 });
  }

  return NextResponse.json({ success: true, inquiry: data });
}
