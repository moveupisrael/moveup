import { NextRequest, NextResponse } from "next/server";

const MAKE_WEBHOOK_URL = "https://hook.eu1.make.com/8kqxwxr5ucek7hl6n6o8ebos0gpv4ec3";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body as { email: string };

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Construct the payload for Make.com
    const makePayload = {
      site_email: email,
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
      // We might still want to return success to the user if the request was accepted/queued,
      // but here we'll return an error if the webhook explicitly fails.
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
