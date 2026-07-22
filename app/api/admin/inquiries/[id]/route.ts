import { NextRequest, NextResponse } from "next/server";
import { getInquiry, updateInquiry, listFollowUps } from "@/lib/kv-data";
import { checkAuth } from "@/app/api/admin/login/route";

// GET /api/admin/inquiries/[id] — Get inquiry detail with follow-ups
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const inquiryId = parseInt(id);

  const inquiry = await getInquiry(inquiryId);
  if (!inquiry) {
    return NextResponse.json({ error: "Inquiry not found" }, { status: 404 });
  }

  const followUps = await listFollowUps(inquiryId);

  return NextResponse.json({ inquiry, followUps });
}

// PATCH /api/admin/inquiries/[id] — Update inquiry status/priority
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const inquiryId = parseInt(id);
  const body = await request.json();

  const updates: Record<string, string> = {};
  if (body.status) updates.status = body.status;
  if (body.priority) updates.priority = body.priority;
  if (body.source) updates.source = body.source;

  const inquiry = await updateInquiry(inquiryId, updates);
  if (!inquiry) {
    return NextResponse.json({ error: "Inquiry not found" }, { status: 404 });
  }

  return NextResponse.json({ success: true, inquiry });
}
