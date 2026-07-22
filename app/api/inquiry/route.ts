import { NextRequest, NextResponse } from "next/server";
import { getServerClient, isServerConfigured } from "@/lib/supabase";

// POST /api/inquiry — Public endpoint for website inquiry form submission
export async function POST(request: NextRequest) {
  try {
    if (!isServerConfigured()) {
      return NextResponse.json(
        { error: "Inquiry system is not configured. Please contact us directly." },
        { status: 503 }
      );
    }

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

    const supabase = getServerClient();

    const { data, error } = await supabase
      .from("inquiries")
      .insert({
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
        status: "new",
        priority: "normal",
        source: "website",
        ip_address: ip,
        user_agent: userAgent,
      })
      .select("id")
      .single();

    if (error) {
      console.error("Inquiry insert error:", error);
      return NextResponse.json(
        { error: "Failed to submit inquiry. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      inquiryId: data.id,
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
