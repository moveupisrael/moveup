"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white text-black py-12 px-4 sm:px-6 lg:px-8" dir="rtl">
      <div className="max-w-4xl mx-auto">
        {/* Navigation */}
        <div className="mb-12 border-b border-gray-100 pb-6">
          <Link href="/">
            <Button variant="ghost" className="text-gray-600 hover:text-black gap-2 p-0 h-auto font-medium transition-colors">
              <ArrowRight className="w-4 h-4 ml-1" />
              חזרה לאתר
            </Button>
          </Link>
        </div>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">תקנון ותנאי שימוש MoveUP</h1>
          <p className="text-gray-500 font-medium">עודכן לאחרונה: נובמבר 2025</p>
        </header>

        {/* Content */}
        <div className="space-y-10 text-lg leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold mb-4 border-r-4 border-black pr-4">1. כללי והגדרות</h2>
            <div className="space-y-3">
              <p><strong>1.1.</strong> החברה- / “MoveUP” עוסק מורשה מס’ 207059395.</p>
              <p><strong>1.2.</strong> האתר- אתר האינטרנט של MoveUP, המשמש להצגת מידע והרשמה מוקדמת בלבד.</p>
              <p><strong>1.3.</strong> האפליקציה- אפליקציית MoveUP למכשירי iOS ו-Android.</p>
              <p><strong>1.4.</strong> משתמש- כל אדם העושה שימוש באתר ו/או באפליקציה.</p>
              <p><strong>1.5.</strong> לקוח- משתמש הרשום לאפליקציה לצורך קבלת שירות.</p>
              <p><strong>1.6.</strong> נותן שירות- גרריסט, עסק או ספק חיצוני הרשום ומאושר במערכת.</p>
              <p>השימוש באתר ו/או באפליקציה מהווה הסכמה מלאה ומחייבת לתנאי שימוש אלו ולמדיניות הפרטיות של החברה.</p>
            </div>
          </section>

          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <h2 className="text-2xl font-bold">חלק א’: תנאי שימוש - אתר האינטרנט</h2>
          </div>

          <section>
            <h2 className="text-2xl font-bold mb-4 border-r-4 border-black pr-4">2. מטרת האתר</h2>
            <div className="space-y-3">
              <p><strong>2.1.</strong> האתר נועד לצורכי מידע כללי, הצגת השירות והרשמה מוקדמת לקבלת עדכונים.</p>
              <p><strong>2.2.</strong> האתר אינו מספק שירותי גרירה או שירותי דרך בפועל.</p>
              <p><strong>2.3.</strong> לא ניתן לבצע הזמנת שירות או תשלום דרך האתר.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 border-r-4 border-black pr-4">3. הרשמה ודיוור</h2>
            <div className="space-y-3">
              <p><strong>3.1.</strong> מסירת פרטים באתר הינה וולונטרית ונועדה לקבלת מידע ועדכונים בלבד.</p>
              <p><strong>3.2.</strong> הרשמה באתר אינה מהווה הרשמה לאפליקציה ואינה יוצרת התחייבות למתן שירות.</p>
              <p><strong>3.3.</strong> ניתן להסיר את הפרטים מרשימת הדיוור בכל עת.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 border-r-4 border-black pr-4">4. אחריות והגבלות באתר</h2>
            <div className="space-y-3">
              <p><strong>4.1.</strong> המידע באתר מוצג כפי שהוא (AS IS) וללא התחייבות לדיוק או זמינות.</p>
              <p><strong>4.2.</strong> החברה אינה אחראית לכל נזק הנובע מהסתמכות על מידע המופיע באתר.</p>
            </div>
          </section>

          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <h2 className="text-2xl font-bold">חלק ב’: תנאי שימוש- אפליקציית MoveUP</h2>
          </div>

          <section>
            <h2 className="text-2xl font-bold mb-4 border-r-4 border-black pr-4">5. מהות השירות</h2>
            <div className="space-y-3">
              <p><strong>5.1.</strong> MoveUP מפעילה פלטפורמה טכנולוגית לתיווך בין לקוחות הזקוקים לשירותי דרך וגרירה לבין נותני שירות עצמאיים.</p>
              <p><strong>5.1.</strong> החברה אינה מספקת שירותי גרירה בעצמה ואינה מעסיקה את נותני השירות.</p>
              <p><strong>5.3.</strong> נותני השירות פועלים כקבלנים עצמאיים והאחריות לביצוע השירות חלה על פיהם בלבד.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 border-r-4 border-black pr-4">6. רישום ושימוש באפליקציה</h2>
            <div className="space-y-3">
              <p><strong>6.1.</strong> השימוש באפליקציה מותנה ביצירת חשבון ומסירת פרטים נכונים ומעודכנים.</p>
              <p><strong>6.2.</strong> החברה רשאית לאשר, להגביל או להסיר משתמשים או נותני שירות לפי שיקול דעתה הסביר.</p>
              <p><strong>6.3.</strong> השימוש באפליקציה מיועד לפעילות בישראל בלבד.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 border-r-4 border-black pr-4">7. מיקום והרשאות</h2>
            <div className="space-y-3">
              <p><strong>7.1.</strong> האפליקציה עושה שימוש במידע מיקום (GPS) לצורך איתור הלקוח, חיבור לנותן שירות ומתן השירות.</p>
              <p><strong>7.2.</strong> איסוף המידע מתבצע רק לאחר אישור המשתמש ובהתאם להגדרות המכשיר.</p>
              <p><strong>7.3.</strong> פרטי איסוף והשימוש במידע מוסדרים במדיניות הפרטיות של החברה.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 border-r-4 border-black pr-4">8. תשלומים, נקודות וסליקה</h2>
            <div className="space-y-3">
              <p><strong>8.1.</strong> תשלומים עבור שירותים מתבצעים אך ורק דרך האפליקציה.</p>
              <p><strong>8.2.</strong> התשלום מבוצע באמצעות ספקי סליקה מורשים, לרבות ריווחית ו-Upay.</p>
              <p><strong>8.3.</strong> החברה אינה שומרת פרטי אמצעי תשלום.</p>
              <p><strong>8.4.</strong> ייתכן שימוש במנגנון נקודות או חבילות, בהתאם למוצג באפליקציה במועד ההזמנה.</p>
              <p><strong>8.5.</strong> תנאי ביטול, שינוי או החזר יוצגו למשתמש לפני ביצוע התשלום ובהתאם להוראות הדין.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 border-r-4 border-black pr-4">9. דירוגים ומשוב</h2>
            <div className="space-y-3">
              <p><strong>9.1.</strong> משתמשים רשאים לדרג נותני שירות.</p>
              <p><strong>9.2.</strong> החברה רשאית לעשות שימוש בדירוגים לצורכי בקרה, איכות ושיבוץ שירותים.</p>
              <p><strong>9.3.</strong> אין בדירוגים התחייבות לאיכות או זמינות שירות עתידית.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 border-r-4 border-black pr-4">10. אחריות והגבלת אחריות</h2>
            <div className="space-y-3">
              <p><strong>10.1.</strong> השירות ניתן כפי שהוא (AS IS).</p>
              <p><strong>10.2.</strong> החברה אינה אחראית לעיכובים, תקלות, נזקים או מחלוקות הנובעים מביצוע השירות על ידי נותני השירות.</p>
              <p><strong>10.3.</strong> אחריות לנזקי רכוש, גוף או עיכוב חלה על נותן השירות בלבד, בכפוף לדין.</p>
              <p><strong>10.4.</strong> אין באמור כדי לגרוע מאחריות שאינה ניתנת להתניה על פי חוק.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 border-r-4 border-black pr-4">11. שימוש אסור</h2>
            <div className="space-y-3">
              <p><strong>11.1.</strong> חל איסור על שימוש לרעה באפליקציה, התחזות, מסירת מידע כוזב או ניסיון לפגיעה במערכת.</p>
              <p><strong>11.2.</strong> החברה רשאית להשעה או לחסום משתמשים במקרה של הפרת תנאים.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 border-r-4 border-black pr-4">12. קניין רוחני</h2>
            <div className="space-y-3">
              <p><strong>12.1.</strong> כל הזכויות באפליקציה, באתר, בעיצוב, בתוכן ובקוד שייכות לחברה.</p>
              <p><strong>12.2.</strong> אין לעשות כל שימוש מסחרי ללא אישור מראש ובכתב.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 border-r-4 border-black pr-4">13. שינויים והפסקת שירות</h2>
            <div className="space-y-3">
              <p><strong>13.1.</strong> החברה רשאית לעדכן את תנאי השימוש מעת לעת.</p>
              <p><strong>13.2.</strong> המשך שימוש באפליקציה לאחר עדכון מהווה הסכמה לתנאים המעודכנים.</p>
              <p><strong>13.3.</strong> החברה רשאית להפסיק את פעילות האפליקציה, זמנית או קבועה, משיקולים תפעוליים או משפטיים.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 border-r-4 border-black pr-4">14. דין וסמכות שיפוט</h2>
            <p>על תנאי שימוש אלו יחולו דיני מדינת ישראל בלבד.סמכות השיפוט הבלעדית נתונה לבתי המשפט המוסמכים במחוז תל אביב-יפו.</p>
          </section>

          <section className="border-t border-gray-100 pt-10">
            <h2 className="text-2xl font-bold mb-4 border-r-4 border-black pr-4">15. יצירת קשר</h2>
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
