import { NextRequest, NextResponse } from "next/server";

const MAKE_WEBHOOK_URL = "https://hook.eu1.make.com/8kqxwxr5ucek7hl6n6o8ebos0gpv4ec3";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { identifier } = body as { identifier: string };

    if (!identifier) {
      return NextResponse.json({ error: "Email or phone is required" }, { status: 400 });
    }

    const isEmail = identifier.includes("@");
    
    // Construct the payload for Make.com
    // We send both keys to ensure the schema is compatible with the general 'lead' structure,
    // allowing the Make router to inspect either field.
    const makePayload = {
      site_email: isEmail ? identifier : "",
      site_phone: !isEmail ? identifier : "",
      request_type: "delete_user"
    };

    console.log('📤 Sending unsubscribe request to Make.com:', makePayload);

    const makeResponse = await fetch(MAKE_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(makePayload),
    });

    if (!makeResponse.ok) {
      console.error('⚠️ Make.com webhook failed:', makeResponse.statusText);
      return NextResponse.json({ error: "Failed to process request" }, { status: 502 });
    }

    return NextResponse.json({ success: true, message: "Unsubscribe request sent successfully" });

  } catch (error: any) {
    console.error("❌ Error in unsubscribe API:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
}