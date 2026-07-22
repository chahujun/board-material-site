import { NextRequest, NextResponse } from "next/server";
import { getServerClient, isServerConfigured } from "@/lib/supabase";
import { checkAuth } from "@/app/api/admin/login/route";

// POST /api/admin/follow-ups — Add a follow-up record
export async function POST(request: NextRequest) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!isServerConfigured()) {
    return NextResponse.json({ error: "Database not configured" }, { status: 503 });
  }

  const body = await request.json();

  if (!body.inquiryId || !body.contactMethod || !body.summary) {
    return NextResponse.json(
      { error: "inquiryId, contactMethod and summary are required." },
      { status: 400 }
    );
  }

  const supabase = getServerClient();

  const { data, error } = await supabase
    .from("follow_ups")
    .insert({
      inquiry_id: body.inquiryId,
      contact_method: body.contactMethod,
      contact_date: body.contactDate || new Date().toISOString(),
      summary: body.summary,
      next_action: body.nextAction || null,
      next_action_date: body.nextActionDate || null,
      created_by: "admin",
    })
    .select()
    .single();

  if (error) {
    console.error("Follow-up insert error:", error);
    return NextResponse.json({ error: "Failed to add follow-up" }, { status: 500 });
  }

  // Optionally update inquiry status if provided
  if (body.updateStatus) {
    await supabase
      .from("inquiries")
      .update({ status: body.updateStatus })
      .eq("id", body.inquiryId);
  }

  return NextResponse.json({ success: true, followUp: data });
}
