"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";

function PrivacyPolicyContent() {
  return (
    <div className="min-h-screen bg-white text-black py-12 px-4 sm:px-6 lg:px-8" dir="rtl">
      <div className="max-w-4xl mx-auto">
        {/* Navigation */}
        <div className="mb-12 border-b border-gray-100 pb-6">
          <Link href="/">
            <Button variant="ghost" className="text-gray-600 hover:text-black gap-2 p-0 h-auto font-medium transition-colors">
              <ArrowRight className="w-4 h-4 ml-1" />
              חזרה לדף הבית
            </Button>
          </Link>
        </div>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">מדיניות פרטיות - MoveUP</h1>
          <p className="text-gray-500 font-medium">עודכן לאחרונה: 11 בדצמבר 2025</p>
        </header>

        {/* Content */}
        <div className="space-y-10 text-lg leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold mb-4 border-r-4 border-black pr-4">1. כללי</h2>
            <p className="mb-4">
              חברת MoveUP (להלן: “החברה”) מכבדת את פרטיות המשתמשים ורואה בהגנה על מידע אישי ערך עליון.מדיניות פרטיות זו מפרטת את האופן שבו החברה אוספת, משתמשת, שומרת ומשתפת מידע אישי, הן במסגרת השימוש באתר החברה והן במסגרת השימוש באפליקציית MoveUP.
            </p>
            <p className="mb-2 font-semibold">מדיניות זו חלה על:</p>
            <ul className="list-disc list-inside mr-4 space-y-1">
              <li>השימוש באתר האינטרנט של החברה</li>
              <li>הרשמה מוקדמת, דיוור ועדכונים לקראת השקת השירות</li>
              <li>השימוש באפליקציית MoveUP במכשירי iOS ו-Android</li>
            </ul>
            <p className="mt-4">השימוש באתר ו/או באפליקציה מהווה הסכמה למדיניות פרטיות זו.</p>
          </section>

          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <h2 className="text-2xl font-bold">פרק א': מדיניות פרטיות - אתר האינטרנט</h2>
          </div>

          <section>
            <h2 className="text-2xl font-bold mb-4 border-r-4 border-black pr-4">2. איסוף מידע באתר</h2>
            <p className="mb-4">
              המידע הנאסף באתר נמסר על ידך באופן וולונטרי ומרצונך החופשי, וכולל:
            </p>
            <ul className="list-disc list-inside mr-4 space-y-1 mb-4">
              <li>שם מלא</li>
              <li>מספר טלפון</li>
              <li>כתובת אימייל (ככל שנמסרת)</li>
              <li>סוג משתמש (גרריסט / אופנוען) – לצורכי פילוח סטטיסטי ושיווקי בלבד</li>
            </ul>
            <p className="mb-2 font-semibold">בנוסף, נאסף מידע טכני אנונימי באמצעות כלים סטטיסטיים, כגון:</p>
            <ul className="list-disc list-inside mr-4 space-y-1">
              <li>סוג דפדפן ומערכת הפעלה</li>
              <li>כתובת IP מקוצרת</li>
              <li>נתוני גלישה כלליים (דפים נצפים, זמן שהייה)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 border-r-4 border-black pr-4">3. מטרות השימוש במידע באתר</h2>
            <p className="mb-4 font-semibold">המידע הנאסף באתר ישמש אך ורק למטרות הבאות:</p>
            <ul className="list-disc list-inside mr-4 space-y-1 mb-6">
              <li>שליחת עדכונים, חדשות ומידע אודות השקת האפליקציה והשירות</li>
              <li>יצירת קשר ראשוני עם נרשמים</li>
              <li>דיוור שיווקי ופרסומי מטעם החברה</li>
            </ul>
            <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100">
              <p className="font-bold text-xl mb-2">הבהרה חשובה:</p>
              <p className="mb-2">מסירת פרטים באתר אינה מהווה הרשמה לאפליקציה או לשירותי גרירה בפועל.</p>
              <p className="mb-2">ההרשמה באתר מיועדת לקבלת עדכונים ותוכן שיווקי בלבד.</p>
              <p>בכל הודעה שיווקית תינתן אפשרות הסרה פשוטה וברורה מרשימת התפוצה.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 border-r-4 border-black pr-4">4. שימוש בספקי צד ג' באתר (תיקון 13)</h2>
            <p className="mb-4 font-semibold">לצורך תפעול האתר, החברה נעזרת בספקים הבאים, תוך העברת מידע מינימלי בלבד:</p>
            <ul className="list-disc list-inside mr-4 space-y-2">
              <li><span className="font-bold">Google Analytics</span> - ניתוח סטטיסטי של השימוש באתר (נתונים אנונימיים)</li>
              <li><span className="font-bold">Make.com</span> - אוטומציה לקליטת פרטי פניות והעברתם למערכת הניהול</li>
              <li><span className="font-bold">GreenAPI (WhatsApp)</span> - שליחת הודעות אישור ותקשורת ראשונית</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 border-r-4 border-black pr-4">5. עוגיות (Cookies)</h2>
            <p className="mb-4 font-semibold">האתר עושה שימוש בעוגיות לצורך תפעולו התקין, אבטחת מידע וניתוח סטטיסטי:</p>
            <ul className="list-disc list-inside mr-4 space-y-1 mb-4">
              <li>עוגיות חיוניות</li>
              <li>עוגיות אנליטיות</li>
              <li>עוגיות שיווק (ככל שיופעלו בעתיד)</li>
            </ul>
            <p>ניתן לשנות או לחסום עוגיות דרך הגדרות הדפדפן או סרגל העוגיות באתר.</p>
          </section>

          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <h2 className="text-2xl font-bold">פרק ב': מדיניות פרטיות - אפליקציית MoveUP</h2>
          </div>

          <section>
            <h2 className="text-2xl font-bold mb-4 border-r-4 border-black pr-4">6. איסוף מידע באפליקציה</h2>
            <p className="mb-4 font-semibold">בעת השימוש באפליקציה, נאסף מידע אישי ותפעולי, לרבות:</p>
            <ul className="list-disc list-inside mr-4 space-y-1 mb-4">
              <li>שם מלא ופרטי קשר</li>
              <li>מספר טלפון מאומת</li>
              <li>פרטי רכב</li>
              <li>מיקום גיאוגרפי (GPS) בזמן אמת</li>
              <li>היסטוריית קריאות ושירותים</li>
              <li>נתוני מכשיר (Device ID, מערכת הפעלה, גרסת אפליקציה)</li>
              <li>נתוני שימוש ופעילות באפליקציה</li>
            </ul>
            <p>איסוף המידע מתבצע אך ורק לאחר קבלת הרשאות מתאימות ממערכת ההפעלה.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 border-r-4 border-black pr-4">7. מטרות השימוש במידע באפליקציה</h2>
            <p className="mb-4 font-semibold">המידע שנאסף באפליקציה משמש לצורך:</p>
            <ul className="list-disc list-inside mr-4 space-y-1">
              <li>איתור משתמש ומתן שירותי דרך וגרירה</li>
              <li>חיבור בין משתמשים לנותני שירות רלוונטיים</li>
              <li>ניהול קריאות שירות והיסטוריית פעילות</li>
              <li>גבייה, סליקה והפקת מסמכים חשבונאיים</li>
              <li>שיפור השירות, אבטחה ומניעת שימוש לרעה</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 border-r-4 border-black pr-4">8. תשלומים וסליקה</h2>
            <p className="mb-4">
              תשלומים עבור שירותים מתבצעים אך ורק דרך האפליקציה באמצעות ספקי סליקה מורשים, לרבות:
            </p>
            <ul className="list-disc list-inside mr-4 space-y-1 mb-4">
              <li>ריווחית</li>
              <li>Upay</li>
            </ul>
            <p>החברה אינה שומרת פרטי כרטיסי אשראי. נתוני התשלום מעובדים ומאובטחים ישירות אצל ספקי סליקה בהתאם לתקנים המחייבים (PCI-DSS).</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 border-r-4 border-black pr-4">9. שיתוף מידע עם צדדים שלישיים</h2>
            <p className="mb-4 font-semibold">במסגרת הפעלת האפליקציה, ייתכן שיתוף מידע עם:</p>
            <ul className="list-disc list-inside mr-4 space-y-1 mb-4">
              <li>נותני שירות (גרריסטים) - אך ורק המידע הנדרש לביצוע השירות</li>
              <li>ספקי סליקה ותשלום</li>
              <li>ספקי תשתית, אחסון, אבטחה ותמיכה טכנית</li>
            </ul>
            <p className="mb-4">
              החברה לא תמכור, תשכיר או תעביר מידע אישי לגורם מסחרי חיצוני שאינו קשור ישירות למתן השירות.
            </p>
            <p>על אף האמור, החברה רשאית להעביר מידע אם תידרש לכך על פי דין, צו שיפוטי או דרישה של רשות מוסמכת.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 border-r-4 border-black pr-4">10. שמירת מידע</h2>
            <p>המידע האישי יישמר במאגרי החברה כל עוד הוא נדרש לצורך מתן השירות, עמידה בדרישות חוק או הגנה על זכויות החברה, ולאחר מכן יימחק או יעבור אנונימיזציה.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 border-r-4 border-black pr-4">11. זכויות המשתמש</h2>
            <p className="mb-4 font-semibold">בהתאם לחוק הגנת הפרטיות, התשמ"א-1981 (כולל תיקון 13), עומדות לרשותך הזכויות הבאות:</p>
            <ul className="list-disc list-inside mr-4 space-y-1">
              <li>זכות עיון במידע</li>
              <li>זכות תיקון מידע שגוי או חסר</li>
              <li>זכות מחיקה, בכפוף לדין</li>
              <li>זכות הסרה מדיוור שיווקי</li>
            </ul>
          </section>

          <section className="border-t border-gray-100 pt-10">
            <h2 className="text-2xl font-bold mb-4 border-r-4 border-black pr-4">12. יצירת קשר</h2>
            <p className="mb-4">למימוש זכויותיך, בירורים או בקשות בנוגע לפרטיות, ניתן לפנות אלינו:</p>
            <div className="space-y-1 font-medium">
              <p className="font-bold text-xl">MoveUP</p>
              <p>ישראל</p>
              <p>דוא"ל: <a href="mailto:info@moveeup.co.il" className="text-black underline underline-offset-4 decoration-1 hover:decoration-2 transition-all">info@moveeup.co.il</a></p>
            </div>
          </section>
        </div>

        {/* Footer spacing */}
        <div className="mt-20 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} MoveUP. כל הזכויות שמורות.
        </div>
      </div>
    </div>
  );
}

export default function PrivacyPolicy() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <PrivacyPolicyContent />
    </Suspense>
  );
}