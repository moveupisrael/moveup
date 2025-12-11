import { NextRequest, NextResponse } from "next/server";

// קריאת משתני סביבה של GreenAPI (אופציונלי)
const greenApiId = process.env.GREEN_API_INSTANCE_ID || "";
const greenApiToken = process.env.GREEN_API_TOKEN || "";
const greenApiPhone = process.env.GREEN_API_ADMIN_PHONE || "";

const MAKE_WEBHOOK_URL = "https://hook.eu1.make.com/2rfayj1jwfgoh9wfx0nzo3uu99t4k7xg";

/** ממיר מספר ישראלי לפורמט chatId של WhatsApp (e.g. 9725XXXXXXX@c.us) */
function normalizeILToChatId(phone: string) {
  const digits = String(phone || "").replace(/[^\d]/g, ""); // ספרות בלבד

  if (!digits) return ""; // לא תקין

  // כבר בצורה בינ"ל
  if (digits.startsWith("972")) return `${digits}@c.us`;

  // מתחיל ב-0 (050.../02...) -> הופך ל-972
  if (digits.startsWith("0")) return `972${digits.slice(1)}@c.us`;

  // נתן 50XXXXXXX ללא 0/972 -> נניח ישראל
  if (digits.length === 9 || digits.length === 10) {
    const noLeadingZero = digits.replace(/^0/, "");
    return `972${noLeadingZero}@c.us`;
  }

  // fallback: כמו שהוא
  return `${digits}@c.us`;
}

/** שליחת הודעה ב-GreenAPI */
async function sendGreenMessage(opts: {
  instanceId: string;
  token: string;
  chatId: string;
  message: string;
}) {
  const { instanceId, token, chatId, message } = opts;
  const url = `https://api.green-api.com/waInstance${instanceId}/sendMessage/${token}`;

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chatId, message }),
  });

  const text = await res.text();
  if (!res.ok) {
    throw new Error(`GreenAPI error: ${text}`);
  }
  try {
    return JSON.parse(text);
  } catch {
    return { raw: text };
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message, userType } = body as {
      name: string;
      email: string;
      phone: string;
      message: string;
      userType: string;
    };

    // ולידציה בסיסית
    if (!name || !email || !phone || !message || !userType) {
      return NextResponse.json({ error: "כל השדות הינם חובה" }, { status: 400 });
    }

    // זמן ישראל
    const now = new Date();
    const nowIL = now.toLocaleString("he-IL", { timeZone: "Asia/Jerusalem" }); // להצגה

    // שליחה ל-Make.com Webhook
    let makeResultStatus = "not_sent";
    try {
      const makePayload = {
        site_title: name,
        type: userType,
        site_email: email,
        site_phone: phone,
        messege: message // Keep 'messege' typo as requested for backend compatibility
      };

      console.log('📤 Sending to Make.com:', makePayload);
      
      const makeResponse = await fetch(MAKE_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(makePayload)
      });

      if (makeResponse.ok) {
        makeResultStatus = "success";
        console.log('✅ Lead sent to Make.com successfully');
      } else {
        makeResultStatus = "failed";
        console.error('⚠️ Make.com webhook failed:', makeResponse.statusText);
      }
    } catch (makeError: any) {
      makeResultStatus = "error";
      console.error('⚠️ Make.com request error:', makeError);
      // ממשיכים גם אם Make נכשל כדי לשלוח וואטסאפ
    }

    // שליחת WhatsApp רק אם המשתנים מוגדרים
    let adminMessageId = null;
    let customerMessageId = null;

    if (greenApiId && greenApiToken && greenApiPhone) {
      // הודעה אליך (אדמין)
      const adminMsg = `
🔴 *ליד חדש מהאתר-MoveUP* 🔴

👤 *שם:* ${name}
🔰 *סוג לקוח:* ${userType}
📧 *אימייל:* ${email}
📱 *טלפון:* ${phone}

💬 *הודעה:*
${message}

⏰ התקבל ב-${nowIL}
${makeResultStatus === 'success' ? '✅ נשלח ל-CRM' : '⚠️ שגיאה בשליחה ל-CRM'}
      `.trim();

      // הודעת תודה ללקוח
      const customerMsg = `
היי ${name}! כאן *MoveUP* 🙌
קיבלנו את הפנייה שלך ונחזור אליך בהקדם (בד"כ תוך דקות).
אם דחוף, אפשר להשיב להודעה הזו כעת.

✅ סיכום:
• שם: ${name}
• סוג לקוח: ${userType}
• טלפון: ${phone}
• התקבל ב-${nowIL}

תודה שבחרת ב-MoveUP: גרירה מהירה, בטוחה ובמחיר שקוף.
      `.trim();

      // chatIds
      const adminChatId = normalizeILToChatId(greenApiPhone);
      const customerChatId = normalizeILToChatId(phone);

      if (adminChatId && customerChatId) {
        // שליחה במקביל
        const [adminRes, customerRes] = await Promise.all([
          sendGreenMessage({
            instanceId: greenApiId,
            token: greenApiToken,
            chatId: adminChatId,
            message: adminMsg,
          }).catch((err) => {
            console.error("Failed sending admin WA:", err.message);
            return null;
          }),
          sendGreenMessage({
            instanceId: greenApiId,
            token: greenApiToken,
            chatId: customerChatId,
            message: customerMsg,
          }).catch((err) => {
            console.error("Failed sending customer WA:", err.message);
            return null;
          }),
        ]);

        adminMessageId = adminRes?.idMessage ?? null;
        customerMessageId = customerRes?.idMessage ?? null;
      }
    } else {
      console.log('⚠️ GreenAPI not configured - skipping WhatsApp notifications');
    }

    // תשובה לפרונט - תמיד מחזיר הצלחה אם הליד התקבל (גם אם האינטגרציות נכשלו, אנחנו רוצים חווית משתמש חיובית ורישום בלוגים)
    return NextResponse.json({
      success: true,
      message: "הודעתך נשלחה בהצלחה!",
      adminMessageId,
      customerMessageId,
      makeResultStatus,
    });
  } catch (error: any) {
    console.error("❌ Error in send-lead API:", error);
    return NextResponse.json(
      { 
        error: "שגיאה בעיבוד הבקשה", 
        details: error.message 
      }, 
      { status: 500 }
    );
  }
}