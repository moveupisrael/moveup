import { Accessibility, ArrowRight, CheckCircle, AlertTriangle, Phone } from "lucide-react";
import Link from "next/link";

export default function AccessibilityStatementPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B0F1A] via-[#151B2E] to-[#0B0F1A]">
      {/* Header */}
      <div className="border-b border-[#FF3B3B]/20 bg-[#0B0F1A]/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-[#FF3B3B] transition-colors">
            <ArrowRight className="w-5 h-5" />
            <span>חזרה לדף הבית</span>
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 md:py-20 max-w-4xl">
        {/* Title Section */}
        <div className="text-center mb-12">
          <div className="inline-block mb-6">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#FF3B3B] to-[#CC2E2E] rounded-2xl flex items-center justify-center shadow-xl shadow-[#FF3B3B]/50">
              <Accessibility className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            הצהרת <span className="text-[#FF3B3B]">נגישות</span>
          </h1>
          <p className="text-gray-400 text-lg">MoveUp: עודכן לאחרונה, דצמבר 2025</p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {/* Commitment Section */}
          <section className="bg-gradient-to-br from-[#1F2937]/60 to-[#151B2E]/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[#FF3B3B]/20">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-[#FF3B3B]" />
              מחויבות לנגישות
            </h2>
            <div className="space-y-3 text-gray-300 leading-relaxed">
              <p>אנו ב-MoveUp רואים חשיבות רבה במתן שירות שוויוני לכלל הלקוחות והגולשים ובשיפור השירות הניתן ללקוחות עם מוגבלות.</p>
              <p>אנו משקיעים משאבים רבים בהנגשת האתר והאפליקציה על מנת לאפשר חוויית גלישה נוחה וזמינה לכולם.</p>
            </div>
          </section>

          {/* Standards Section */}
          <section className="bg-gradient-to-br from-[#1F2937]/60 to-[#151B2E]/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[#FF3B3B]/20">
            <h2 className="text-2xl font-bold text-white mb-4">תקינה ועמידה בדרישות החוק</h2>
            <div className="space-y-3 text-gray-300 leading-relaxed">
              <p>האתר נבנה ומותאם בהתאם להוראות הנגישות המופיעות ב:</p>
              <ul className="list-disc list-inside space-y-1 mr-4">
                <li>תקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע"ג-2013.</li>
                <li>תקן ישראלי ת"י 5568 לנגישות תכנים באינטרנט.</li>
                <li>הנחיות הארגון הבינלאומי W3C ברמת WCAG 2.1 Level AA.</li>
              </ul>
            </div>
          </section>

          {/* Tools Section */}
          <section className="bg-gradient-to-br from-[#1F2937]/60 to-[#151B2E]/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[#FF3B3B]/20">
            <h2 className="text-2xl font-bold text-white mb-4">אמצעי נגישות באתר</h2>
            <div className="space-y-3 text-gray-300 leading-relaxed">
              <p>באתר מוטמע רכיב נגישות (EqualWeb/UserWay) המאפשר לגולשים להתאים את האתר לצרכיהם האישיים.</p>
              <p>בין האפשרויות הקיימות:</p>
              <ul className="list-disc list-inside space-y-1 mr-4">
                <li>הגדלת טקסט והתאמת גופנים.</li>
                <li>שינוי ניגודיות (קונטרסט) וצבעים.</li>
                <li>הדגשת קישורים.</li>
                <li>תמיכה בקורא מסך.</li>
              </ul>
            </div>
          </section>

          {/* Disclaimer Section */}
          <section className="bg-gradient-to-br from-[#1F2937]/60 to-[#151B2E]/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[#FF3B3B]/20">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-[#FF3B3B]" />
              סייגים לנגישות
            </h2>
            <div className="space-y-3 text-gray-300 leading-relaxed">
              <p>למרות מאמצינו להנגיש את כלל הדפים באתר, ייתכן שיתגלו חלקים שטרם הונגשו במלואם, או שנמצאים בתהליך הנגשה, או שקיימת מגבלה טכנולוגית המונעת את הנגשתם המלאה.</p>
              <p>אנו ממשיכים במאמצים לשפר את נגישות האתר כחלק ממחויבותנו לאפשר שימוש בו לכלל האוכלוסייה, כולל אנשים עם מוגבלויות.</p>
              <p>החברה ו/או מי מטעמה לא יישאו באחריות לכשלים זמניים בנגישות הנובעים מרכיבים חיצוניים או עדכוני מערכת.</p>
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-gradient-to-br from-[#FF3B3B]/10 to-[#CC2E2E]/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[#FF3B3B]/30">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Phone className="w-6 h-6 text-[#FF3B3B]" />
              רכז נגישות ויצירת קשר
            </h2>
            <div className="space-y-3 text-gray-300 leading-relaxed">
              <p>אם נתקלתם בבעיה, בקושי בגלישה, או שיש לכם הצעה לשיפור, נשמח לשמוע מכם.</p>
              <p>ניתן לפנות לרכז הנגישות או למוקד השירות שלנו:</p>
              <div className="mt-4 space-y-2">
                 <p className="flex items-center gap-2">
                  <strong className="text-white">טלפון/וואטסאפ:</strong> 
                  <a href="https://wa.me/972557714690" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF3B3B] transition-colors">
                    055-771-4690
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <strong className="text-white">דוא"ל:</strong> info@moveeup.co.il
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Back Button */}
        <div className="mt-12 text-center">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#FF3B3B] to-[#CC2E2E] text-white font-bold rounded-full shadow-xl shadow-[#FF3B3B]/50 hover:shadow-2xl hover:shadow-[#FF3B3B]/60 transition-all duration-300">
            <ArrowRight className="w-5 h-5" />
            חזרה לדף הבית
          </Link>
        </div>
      </div>
    </div>
  );
}
