import { NextRequest, NextResponse } from "next/server";
import { createFollowUp, updateInquiry } from "@/lib/kv-data";
import { checkAuth } from "@/app/api/admin/login/route";

// POST /api/admin/follow-ups — Add a follow-up record
export async function POST(request: NextRequest) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();

  if (!body.inquiryId || !body.contactMethod || !body.summary) {
    return NextResponse.json(
      { error: "inquiryId, contactMethod and summary are required." },
      { status: 400 }
    );
  }

  const followUp = await createFollowUp({
    inquiry_id: parseInt(body.inquiryId),
    contact_method: body.contactMethod,
    contact_date: body.contactDate || new Date().toISOString(),
    summary: body.summary,
    next_action: body.nextAction || null,
    next_action_date: body.nextActionDate || null,
  });

  // Optionally update inquiry status
  if (body.updateStatus) {
    await updateInquiry(parseInt(body.inquiryId), { status: body.updateStatus });
  }

  return NextResponse.json({ success: true, followUp });
}
