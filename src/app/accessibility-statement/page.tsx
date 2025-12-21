"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AccessibilityStatementPage() {
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
          <h1 className="text-3xl md:text-4xl font-bold mb-4">הצהרת נגישות - MoveUP</h1>
          <p className="text-gray-500 font-medium">עודכן לאחרונה: דצמבר 2025</p>
        </header>

        {/* Content */}
        <div className="space-y-10 text-lg leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold mb-4 border-r-4 border-black pr-4">מחויבות לנגישות</h2>
            <div className="space-y-3">
              <p>אנו ב-MoveUp רואים חשיבות רבה במתן שירות שוויוני לכלל הלקוחות והגולשים ובשיפור השירות הניתן ללקוחות עם מוגבלות.</p>
              <p>אנו משקיעים משאבים רבים בהנגשת האתר והאפליקציה על מנת לאפשר חוויית גלישה נוחה וזמינה לכולם.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 border-r-4 border-black pr-4">תקינה ועמידה בדרישות החוק</h2>
            <div className="space-y-3">
              <p>האתר נבנה ומותאם בהתאם להוראות הנגישות המופיעות ב:</p>
              <ul className="list-disc list-inside mr-4 space-y-1">
                <li>תקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע"ג-2013.</li>
                <li>תקן ישראלי ת"י 5568 לנגישות תכנים באינטרנט.</li>
                <li>הנחיות הארגון הבינלאומי W3C ברמת WCAG 2.1 Level AA.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 border-r-4 border-black pr-4">אמצעי נגישות באתר</h2>
            <div className="space-y-3">
              <p>באתר מוטמע רכיב נגישות המאפשר לגולשים להתאים את האתר לצרכיהם האישיים.</p>
              <p>בין האפשרויות הקיימות:</p>
              <ul className="list-disc list-inside mr-4 space-y-1">
                <li>הגדלת טקסט והתאמת גופנים.</li>
                <li>שינוי ניגודיות (קונטרסט) וצבעים.</li>
                <li>הדגשת קישורים.</li>
                <li>תמיכה בקורא מסך.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 border-r-4 border-black pr-4">סייגים לנגישות</h2>
            <div className="space-y-3">
              <p>למרות מאמצינו להנגיש את כלל הדפים באתר, ייתכן שיתגלו חלקים שטרם הונגשו במלואם, או שנמצאים בתהליך הנגשה, או שקיימת מגבלה טכנולוגית המונעת את הנגשתם המלאה.</p>
              <p>אנו ממשיכים במאמצים לשפר את נגישות האתר כחלק ממחויבותנו לאפשר שימוש בו לכלל האוכלוסייה, כולל אנשים עם מוגבלויות.</p>
              <p>החברה ו/או מי מטעמה לא יישאו באחריות לכשלים זמניים בנגישות הנובעים מרכיבים חיצוניים או עדכוני מערכת.</p>
            </div>
          </section>

          <section className="border-t border-gray-100 pt-10">
            <h2 className="text-2xl font-bold mb-4 border-r-4 border-black pr-4">רכז נגישות ויצירת קשר</h2>
            <div className="space-y-3">
              <p>אם נתקלתם בבעיה, בקושי בגלישה, או שיש לכם הצעה לשיפור, נשמח לשמוע מכם.</p>
              <p>ניתן לפנות לרכז הנגישות או למוקד השירות שלנו:</p>
              <div className="mt-4 space-y-1 font-medium">
                 <p>טלפון/וואטסאפ: <a href="tel:+972557714690" className="text-black hover:underline transition-all">055-771-4690</a></p>
                <p>דוא"ל: <a href="mailto:info@moveeup.co.il" className="text-black underline underline-offset-4 decoration-1 hover:decoration-2 transition-all">info@moveeup.co.il</a></p>
              </div>
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