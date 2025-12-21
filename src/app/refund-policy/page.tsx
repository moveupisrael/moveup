"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-black py-12 px-4 sm:px-6 lg:px-8 font-sans" dir="rtl">
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
          <h1 className="text-3xl md:text-4xl font-bold mb-4">מדיניות החזרים וביטולים MoveUP</h1>
          <p className="text-gray-500 font-medium">עודכן לאחרונה: נובמבר 2025</p>
          <p className="text-gray-400 text-sm mt-2">מפעיל: MoveUP עוסק מורשה מס’ 207059395</p>
        </header>

        {/* Introduction */}
        <div className="mb-10 text-lg leading-relaxed">
          <p>מסמך זה מסדיר את מדיניות הביטולים, ההחזרים והשינויים בעסקאות שבוצעו באמצעות אפליקציית MoveUP, ומהווה חלק בלתי נפרד מתנאי השימוש של החברה.</p>
        </div>

        {/* Content */}
        <div className="space-y-10 text-lg leading-relaxed">
          <section className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <h2 className="text-2xl font-bold">חלק א’: מדיניות החזרים - אתר האינטרנט</h2>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 border-r-4 border-black pr-4">1. היעדר רכישות באתר</h2>
            <div className="space-y-3">
              <p><strong>1.1.</strong> אתר MoveUP משמש להצגת מידע, הרשמה מוקדמת וקבלת עדכונים בלבד.</p>
              <p><strong>1.2.</strong> לא ניתן לבצע רכישות, תשלומים או הזמנת שירותים דרך האתר.</p>
              <p><strong>1.3.</strong> לפיכך, לא חלה מדיניות החזרים או ביטולים על שימוש באתר עצמו.</p>
            </div>
          </section>

          <section className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <h2 className="text-2xl font-bold">חלק ב’: מדיניות החזרים וביטולים - אפליקציית MoveUP</h2>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 border-r-4 border-black pr-4">2. רכישת חבילות נקודות</h2>
            <div className="space-y-3">
              <p><strong>2.1.</strong> רכישת חבילות נקודות באפליקציה מהווה רכישה של אמצעי תשלום דיגיטלי לצורך הזמנת שירותי דרך וגרירה.</p>
              <p><strong>2.2.</strong> הרכישה מתבצעת באמצעות מערכות סליקה מאובטחות, לרבות ריווחית ו-Upay.</p>
              <p><strong>2.3.</strong> עם השלמת התשלום, הנקודות נזקפות לחשבון המשתמש באופן אוטומטי.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 border-r-4 border-black pr-4">3. ביטול עסקה לפי חוק הגנת הצרכן</h2>
            <div className="space-y-3">
              <p><strong>3.1.</strong> בהתאם לחוק הגנת הצרכן, התשמ״א 1981, ניתן לבטל רכישת חבילת נקודות בתוך 14 ימים ממועד הרכישה, ובלבד שלא נעשה כל שימוש בנקודות.</p>
              <p><strong>3.2.</strong> לאחר שימוש כלשהו בנקודות, לרבות הזמנת שירות או חלק ממנו, לא ניתן לבטל את העסקה ולא יינתן החזר בגין נקודות שלא נוצלו.</p>
              <p><strong>3.3.</strong> בקשת ביטול תוגש בכתב בלבד לכתובת: <a href="mailto:info@moveeup.co.il" className="underline">info@moveeup.co.il</a></p>
              <p><strong>3.4.</strong> החברה תבחן את הבקשה ותשיב בתוך עד 7 ימי עסקים.</p>
              <p><strong>3.5.</strong> במקרה של ביטול כדין, יוחזר ללקוח סכום העסקה בניכוי דמי ביטול בשיעור של עד 5% מסכום העסקה או 100 ₪ - הנמוך מביניהם, בהתאם לחוק.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 border-r-4 border-black pr-4">4. ביטול קריאת שירות</h2>
            <div className="space-y-3">
              <p><strong>4.1.</strong> הזמנת שירות דרך האפליקציה נחשבת לביצוע שימוש בנקודות.</p>
              <p><strong>4.2.</strong> ביטול קריאת שירות לאחר שיבוץ נותן שירות, יציאתו לדרך או תחילת ביצוע השירות, לא מזכה בהחזר, כולו או חלקו, אלא אם הוצג אחרת באפליקציה במפורש.</p>
              <p><strong>4.3.</strong> במקרים חריגים של אי יכולת לספק את השירות, החברה רשאית, אך לא חייבת, לזכות את המשתמש בנקודות או בהחזר כספי.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 border-r-4 border-black pr-4">5. ביטולים ביוזמת החברה</h2>
            <div className="space-y-3">
              <p><strong>5.1.</strong> החברה רשאית לבטל עסקה או רכישה במקרים הבאים:</p>
              <ul className="list-disc list-inside mr-4 space-y-1">
                <li>חשד להונאה או תשלום שגוי</li>
                <li>תקלה טכנית במערכת הסליקה</li>
                <li>שימוש בניגוד לתנאי השימוש</li>
                <li>דרישה של חברת האשראי או רשות מוסמכת</li>
              </ul>
              <p><strong>5.2.</strong> במקרה כזה, יבוצע זיכוי בהתאם למצב העסקה ולדין.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 border-r-4 border-black pr-4">6. חיובים שגויים או כפולים</h2>
            <div className="space-y-3">
              <p><strong>6.1.</strong> משתמש הסבור כי חויב בטעות יפנה לשירות הלקוחות בתוך 7 ימי עסקים ממועד החיוב.</p>
              <p><strong>6.2.</strong> החברה תבדוק את הפנייה ותשיב בתוך עד 14 יום.</p>
              <p><strong>6.3.</strong> אם יימצא כי החיוב שגוי, יבוצע החזר מלא לאמצעי התשלום המקורי.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 border-r-4 border-black pr-4">7. החזרים כספיים</h2>
            <div className="space-y-3">
              <p><strong>7.1.</strong> החזרים יבוצעו באותו אמצעי תשלום שבו בוצעה העסקה.</p>
              <p><strong>7.2.</strong> מועד הזיכוי בפועל תלוי בחברת האשראי ועשוי להימשך עד 14 ימי עסקים.</p>
              <p><strong>7.3.</strong> החברה אינה אחראית לעיכובים הנובעים מגורמים חיצוניים.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 border-r-4 border-black pr-4">8. שימוש לרעה במדיניות</h2>
            <div className="space-y-3">
              <p><strong>8.1.</strong> החברה רשאית להגביל או לחסום משתמשים המנצלים לרעה את מדיניות ההחזרים.</p>
              <p><strong>8.2.</strong> ניסיון להונאה, התחזות או ניצול לרעה עלול להביא לחסימת החשבון ולנקיטת צעדים משפטיים.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 border-r-4 border-black pr-4">9. שינויים במדיניות</h2>
            <div className="space-y-3">
              <p><strong>9.1.</strong> החברה רשאית לעדכן מדיניות זו מעת לעת.</p>
              <p><strong>9.2.</strong> המדיניות המחייבת היא זו המופיעה באפליקציה במועד ביצוע העסקה.</p>
              <p><strong>9.3.</strong> במקרה של סתירה בין מסמך זה לבין הוראות הדין, הדין יגבר.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 border-r-4 border-black pr-4">10. דין וסמכות שיפוט</h2>
            <p>על מדיניות זו יחולו דיני מדינת ישראל בלבד.סמכות השיפוט הבלעדית נתונה לבתי המשפט המוסמכים במחוז תל אביב-יפו.</p>
          </section>

          <section className="border-t border-gray-100 pt-10">
            <h2 className="text-2xl font-bold mb-4 border-r-4 border-black pr-4">11. יצירת קשר</h2>
            <div className="space-y-1 font-medium">
              <p>לשאלות ובקשות בנושא החזרים וביטולים: 📧 <a href="mailto:info@moveeup.co.il" className="text-black underline underline-offset-4 decoration-1 hover:decoration-2 transition-all">info@moveeup.co.il</a></p>
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
