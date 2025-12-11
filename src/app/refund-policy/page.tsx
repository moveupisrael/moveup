import { ArrowRight, RefreshCw, DollarSign, FileText } from "lucide-react";
import Link from "next/link";

export default function RefundPolicyPage() {
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
              <RefreshCw className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            מדיניות החזרים <span className="text-[#FF3B3B]">וביטולים</span>
          </h1>
          <p className="text-gray-400 text-lg">MoveUp: עודכן לאחרונה, נובמבר 2025</p>
          <p className="text-gray-500 text-sm mt-2">
            בעלים ומפעיל:   – עוסק מורשה מס' 207059395
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-gradient-to-br from-[#FF3B3B]/10 to-[#CC2E2E]/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[#FF3B3B]/30 mb-8">
          <p className="text-gray-300 leading-relaxed">
            האפליקציה MoveUp משמשת כפלטפורמה לתיווך בין לקוחות הזקוקים לשירותי גרירה ו/או שירותי דרך לבין נותני שירות (גרריסטים ועסקים עצמאיים).
          </p>
          <p className="text-gray-300 leading-relaxed mt-4">
            מסמך זה נועד להסדיר את מדיניות הביטולים, ההחזרים והשינויים ברכישות שבוצעו באמצעות האפליקציה. השימוש באפליקציה וביצוע רכישה דרכה מהווים הסכמה מלאה לתנאים המפורטים להלן.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {/* Section 1 */}
          <section className="bg-gradient-to-br from-[#1F2937]/60 to-[#151B2E]/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[#FF3B3B]/20">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <DollarSign className="w-6 h-6 text-[#FF3B3B]" />
              1. רכישת חבילות נקודות
            </h2>
            <div className="space-y-3 text-gray-300 leading-relaxed">
              <p><strong className="text-white">1.1.</strong> לקוחות האפליקציה רוכשים חבילות נקודות המשמשות כתשלום בעבור שירותי גרירה ושירותי דרך שונים הניתנים דרך האפליקציה.</p>
              <p><strong className="text-white">1.2.</strong> הרכישה מתבצעת באמצעות מערכת סליקה מאובטחת (API) בהתאם לתנאי חברות האשראי.</p>
              <p><strong className="text-white">1.3.</strong> עם השלמת תהליך התשלום, הנקודות נזקפות לחשבון המשתמש באופן אוטומטי.</p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="bg-gradient-to-br from-[#1F2937]/60 to-[#151B2E]/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[#FF3B3B]/20">
            <h2 className="text-2xl font-bold text-white mb-4">2. ביטול עסקה לפי חוק הגנת הצרכן</h2>
            <div className="space-y-3 text-gray-300 leading-relaxed">
              <p><strong className="text-white">2.1.</strong> בהתאם לחוק הגנת הצרכן, התשמ"א–1981 (להלן: "החוק"), ניתן לבטל עסקה תוך 14 ימים ממועד הרכישה, בתנאי שלא נעשה כל שימוש בנקודות.</p>
              <p><strong className="text-white">2.2.</strong> לאחר שנעשה שימוש כלשהו בנקודות, לא ניתן לבטל את העסקה או לקבל החזר כספי בגין יתרת הנקודות שנותרה.</p>
              <p><strong className="text-white">2.3.</strong> בקשת ביטול תוגש בכתב בלבד לכתובת הדוא"ל: <span className="text-[#FF3B3B]">info@moveeup.co.il</span></p>
              <p><strong className="text-white">2.4.</strong> עם קבלת הבקשה, החברה תבדוק את זכאות הלקוח להחזר בהתאם להוראות החוק, ותשיב בתוך 7 ימי עסקים.</p>
              <p><strong className="text-white">2.5.</strong> במקרה של ביטול עסקה כדין, יוחזר ללקוח סכום הרכישה בניכוי דמי ביטול בשיעור של עד 5% מסכום העסקה או 100 ש"ח, הנמוך מביניהם, כמותר בחוק.</p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="bg-gradient-to-br from-[#1F2937]/60 to-[#151B2E]/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[#FF3B3B]/20">
            <h2 className="text-2xl font-bold text-white mb-4">3. ביטולים ביוזמת החברה</h2>
            <div className="space-y-3 text-gray-300 leading-relaxed">
              <p><strong className="text-white">3.1.</strong> החברה שומרת לעצמה את הזכות לבטל כל רכישה או עסקה במקרים הבאים:</p>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li>תשלום שבוצע באופן שגוי או חשוד כהונאה;</li>
                <li>תקלה טכנית במערכת הסליקה או ברישום ההזמנה;</li>
                <li>שימוש לרעה באפליקציה או הפרת תנאי השימוש;</li>
                <li>דרישה רשמית של חברת האשראי או רגולטור מוסמך.</li>
              </ul>
              <p><strong className="text-white">3.2.</strong> במקרה כזה, הלקוח יקבל הודעה על הביטול וזיכוי כספי מלא בהתאם למצב העסקה.</p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="bg-gradient-to-br from-[#1F2937]/60 to-[#151B2E]/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[#FF3B3B]/20">
            <h2 className="text-2xl font-bold text-white mb-4">4. חיובים שגויים או כפולים</h2>
            <div className="space-y-3 text-gray-300 leading-relaxed">
              <p><strong className="text-white">4.1.</strong> לקוח הסבור כי חויב בטעות רשאי לפנות לשירות הלקוחות של החברה תוך 7 ימי עסקים ממועד החיוב.</p>
              <p><strong className="text-white">4.2.</strong> החברה תבדוק את המקרה מול מערכת הסליקה ותשיב ללקוח תוך 14 יום.</p>
              <p><strong className="text-white">4.3.</strong> אם יימצא כי החיוב שגוי – יבוצע החזר כספי מלא לאמצעי התשלום שבו בוצעה העסקה.</p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="bg-gradient-to-br from-[#1F2937]/60 to-[#151B2E]/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[#FF3B3B]/20">
            <h2 className="text-2xl font-bold text-white mb-4">5. החזרים כספיים</h2>
            <div className="space-y-3 text-gray-300 leading-relaxed">
              <p><strong className="text-white">5.1.</strong> החזרים יתבצעו באותה צורת תשלום שבה בוצעה העסקה המקורית (כרטיס אשראי / העברה בנקאית).</p>
              <p><strong className="text-white">5.2.</strong> מועד ההחזר בפועל עשוי להשתנות בהתאם למדיניות חברת האשראי ומשך העיבוד שלה (בדרך כלל עד 14 ימי עסקים).</p>
              <p><strong className="text-white">5.3.</strong> החברה אינה אחראית לעיכובים הנובעים מגורמים חיצוניים כגון חברת אשראי, בנק, או גוף סליקה צד שלישי.</p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="bg-gradient-to-br from-[#1F2937]/60 to-[#151B2E]/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[#FF3B3B]/20">
            <h2 className="text-2xl font-bold text-white mb-4">6. שימוש לרעה במדיניות ההחזרים</h2>
            <div className="space-y-3 text-gray-300 leading-relaxed">
              <p><strong className="text-white">6.1.</strong> החברה שומרת לעצמה את הזכות להגביל או למנוע רכישות עתידיות מלקוחות שמנצלים לרעה את מדיניות ההחזרים.</p>
              <p><strong className="text-white">6.2.</strong> כל ניסיון להונאה, התחזות או חיוב כפול במזיד עלול להביא לחסימת המשתמש ולנקיטת צעדים משפטיים.</p>
            </div>
          </section>

          {/* Section 7 */}
          <section className="bg-gradient-to-br from-[#1F2937]/60 to-[#151B2E]/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[#FF3B3B]/20">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <FileText className="w-6 h-6 text-[#FF3B3B]" />
              7. שונות
            </h2>
            <div className="space-y-3 text-gray-300 leading-relaxed">
              <p><strong className="text-white">7.1.</strong> החברה רשאית לעדכן את מדיניות ההחזרים והביטולים בכל עת, לפי שיקול דעתה הבלעדי וללא הודעה מוקדמת.</p>
              <p><strong className="text-white">7.2.</strong> נוסח המדיניות המחייב הוא זה המופיע באפליקציה במועד הרכישה.</p>
              <p><strong className="text-white">7.3.</strong> בכל מקרה של סתירה בין מסמך זה לבין החוק – הוראות החוק תגברנה.</p>
            </div>
          </section>

          {/* Section 8 */}
          <section className="bg-gradient-to-br from-[#1F2937]/60 to-[#151B2E]/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[#FF3B3B]/20">
            <h2 className="text-2xl font-bold text-white mb-4">8. דין וסמכות שיפוט</h2>
            <div className="space-y-3 text-gray-300 leading-relaxed">
              <p>על מדיניות זו יחולו אך ורק דיני מדינת ישראל, וכל מחלוקת הנובעת ממנה תידון בבתי המשפט המוסמכים בעיר תל אביב–יפו בלבד.</p>
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-gradient-to-br from-[#FF3B3B]/10 to-[#CC2E2E]/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[#FF3B3B]/30">
            <h2 className="text-2xl font-bold text-white mb-4">ליצירת קשר</h2>
            <div className="space-y-3 text-gray-300 leading-relaxed">
      
              <p className="flex items-center gap-2">
                ✉️ <strong className="text-white">דוא"ל:</strong> info@moveeup.co.il
              </p>
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
