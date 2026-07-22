import { NextRequest, NextResponse } from "next/server";
import { createInquiry } from "@/lib/kv-data";

// POST /api/inquiry — Public endpoint for website inquiry form submission
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.fullName || !body.email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    // Extract client info
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0].trim() : null;
    const userAgent = request.headers.get("user-agent") || null;

    const inquiry = await createInquiry({
      full_name: body.fullName,
      company: body.company || null,
      email: body.email,
      phone: body.phone || null,
      country: body.country || null,
      category: body.category || null,
      product_code: body.productCode || null,
      product_name: body.productName || null,
      quantity: body.quantity || null,
      color: body.color || null,
      delivery_date: body.deliveryDate || null,
      message: body.message || null,
      ip_address: ip,
      user_agent: userAgent,
    });

    return NextResponse.json({
      success: true,
      inquiryId: inquiry.id,
      message: "Inquiry submitted successfully. We will respond within one business day.",
    });
  } catch (err) {
    console.error("Inquiry API error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
