import { ArrowRight, Scale, Shield, FileText } from "lucide-react";
import Link from "next/link";

export default function TermsPage() {
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
              <Scale className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            תקנון ותנאי <span className="text-[#FF3B3B]">שימוש</span>
          </h1>
          <p className="text-gray-400 text-lg">MoveUp: עודכן לאחרונה, נובמבר 2025</p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {/* Section 1 */}
          <section className="bg-gradient-to-br from-[#1F2937]/60 to-[#151B2E]/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[#FF3B3B]/20">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <FileText className="w-6 h-6 text-[#FF3B3B]" />
              1. הגדרות כלליות
            </h2>
            <div className="space-y-3 text-gray-300 leading-relaxed">
              <p><strong className="text-white">1.1.</strong> "החברה" או "MoveUp" – עוסק מורשה מס' 207059395   .</p>
              <p><strong className="text-white">1.2.</strong> "האפליקציה" – אפליקציית MoveUp המשמשת כפלטפורמת תיווך בין משתמשים הזקוקים לשירותי גרירה ו/או שירותי דרך לבין נותני שירות (גרריסטים/עסקים).</p>
              <p><strong className="text-white">1.3.</strong> "לקוח" – כל אדם או עסק שנרשם לאפליקציה לצורך קבלת שירות.</p>
              <p><strong className="text-white">1.4.</strong> "נותן שירות" – כל גרריסט, עסק או ספק חיצוני שנרשם לאפליקציה ומאושר על-ידי החברה לספק שירותים ללקוחות.</p>
              <p><strong className="text-white">1.5.</strong> "נקודות" – יחידות ערך הניתנות לרכישה באפליקציה ומשמשות את הלקוח לתשלום עבור שירותים.</p>
              <p><strong className="text-white">1.6.</strong> "שירותי דרך" – לרבות גרירה, התנעה, תיקון פנצ'ר, החלפת מצבר, או כל שירות דומה.</p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="bg-gradient-to-br from-[#1F2937]/60 to-[#151B2E]/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[#FF3B3B]/20">
            <h2 className="text-2xl font-bold text-white mb-4">2. קבלת תנאים ושינויים</h2>
            <div className="space-y-3 text-gray-300 leading-relaxed">
              <p><strong className="text-white">2.1.</strong> השימוש באפליקציה מהווה הסכמה מלאה לכל תנאי התקנון.</p>
              <p><strong className="text-white">2.2.</strong> החברה רשאית לעדכן את התקנון בכל עת לפי שיקול דעתה הבלעדי, ללא הודעה מוקדמת.</p>
              <p><strong className="text-white">2.3.</strong> נוסח התקנון המחייב הוא זה המופיע באפליקציה במועד השימוש.</p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="bg-gradient-to-br from-[#1F2937]/60 to-[#151B2E]/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[#FF3B3B]/20">
            <h2 className="text-2xl font-bold text-white mb-4">3. אופן השימוש באפליקציה</h2>
            <div className="space-y-3 text-gray-300 leading-relaxed">
              <p><strong className="text-white">3.1.</strong> השימוש מיועד ללקוחות פרטיים ולעסקים הפועלים בישראל בלבד.</p>
              <p><strong className="text-white">3.2.</strong> לקוחות רוכשים חבילות נקודות המשמשות אותם להזמנת שירותים דרך האפליקציה.</p>
              <p><strong className="text-white">3.3.</strong> כל נותן שירות חייב להירשם לאפליקציה, להמתין לאישור החברה, ורק לאחר מכן רשאי לספק שירותים דרך המערכת.</p>
              <p><strong className="text-white">3.4.</strong> החברה רשאית לסרב לאשר או להסיר כל נותן שירות לפי שיקול דעתה, ללא צורך בהנמקה.</p>
              <p><strong className="text-white">3.5.</strong> דירוגי הלקוחות הם חלק בלתי נפרד מהמערכת. החברה רשאית לשקול דירוגים אלו לצורך חלוקת עבודה עתידית בין נותני השירות.</p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="bg-gradient-to-br from-[#1F2937]/60 to-[#151B2E]/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[#FF3B3B]/20">
            <h2 className="text-2xl font-bold text-white mb-4">4. סליקה ותשלומים</h2>
            <div className="space-y-3 text-gray-300 leading-relaxed">
              <p><strong className="text-white">4.1.</strong> רכישת נקודות מתבצעת דרך מערכת סליקה מאובטחת (API) באפליקציה.</p>
              <p><strong className="text-white">4.2.</strong> המחירים והעמלות עשויים להשתנות בכל עת ללא הודעה מראש.</p>
              <p><strong className="text-white">4.3.</strong> החברה רשאית לעכב או לקזז תשלומים במקרים של תלונות, נזקים או חריגות מדיניות.</p>
              <p><strong className="text-white">4.4.</strong> אין החזר כספי על נקודות שלא נוצלו, אלא אם החברה קבעה אחרת בכתב.</p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="bg-gradient-to-br from-[#1F2937]/60 to-[#151B2E]/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[#FF3B3B]/20">
            <h2 className="text-2xl font-bold text-white mb-4">5. אחריות וסמכויות</h2>
            <div className="space-y-3 text-gray-300 leading-relaxed">
              <p><strong className="text-white">5.1.</strong> נותני השירות הם קבלנים עצמאיים, ואינם עובדים, שותפים או נציגים של החברה.</p>
              <p><strong className="text-white">5.2.</strong> החברה משמשת פלטפורמת תיווך בלבד ואינה אחראית לביצוע השירות בפועל, לאיכות השירות, לעיכובים, לנזקים, או לכל פגיעה הנובעת מהשירות.</p>
              <p><strong className="text-white">5.3.</strong> כל אחריות בגין נזק לרכוש, עיכוב, תאונה, או כל נזק אחר תחול על נותן השירות בלבד.</p>
              <p><strong className="text-white">5.4.</strong> הלקוח מאשר כי לא תהיה לו כל טענה או דרישה כלפי החברה בגין פעולות או מחדלים של נותני השירות.</p>
              <p><strong className="text-white">5.5.</strong> החברה רשאית להשעות, להגביל או להפסיק את פעילותו של משתמש או נותן שירות בכל עת, אם מצאה כי הופרו תנאי התקנון.</p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="bg-gradient-to-br from-[#1F2937]/60 to-[#151B2E]/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[#FF3B3B]/20">
            <h2 className="text-2xl font-bold text-white mb-4">6. התנהלות אסורה</h2>
            <div className="space-y-3 text-gray-300 leading-relaxed">
              <p><strong className="text-white">6.1.</strong> המשתמש מתחייב שלא לבצע שימוש לרעה באפליקציה, לרבות התחזות, מסירת מידע כוזב, או ביצוע תשלום במרמה.</p>
              <p><strong className="text-white">6.2.</strong> כל שימוש אסור או בלתי חוקי באפליקציה עלול להביא להשעיה מיידית ולנקיטת צעדים משפטיים.</p>
            </div>
          </section>

          {/* Section 7 */}
          <section className="bg-gradient-to-br from-[#1F2937]/60 to-[#151B2E]/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[#FF3B3B]/20">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Shield className="w-6 h-6 text-[#FF3B3B]" />
              7. מדיניות פרטיות
            </h2>
            <div className="space-y-3 text-gray-300 leading-relaxed">
              <p><strong className="text-white">7.1.</strong> החברה מכבדת את פרטיות המשתמשים ופועלת בהתאם לחוק הגנת הפרטיות, תשמ"א-1981.</p>
              <p><strong className="text-white">7.2.</strong> בעת ההרשמה נאספים פרטים כגון שם, טלפון, אימייל, מיקום, ופרטי תשלום.</p>
              <p><strong className="text-white">7.3.</strong> הנתונים נשמרים במערכות מאובטחות ומשמשים לצורך תפעול השירות, ניהול תשלומים, שיפור חוויית המשתמש, ועמידה בדרישות החוק.</p>
              <p><strong className="text-white">7.4.</strong> החברה רשאית לשתף מידע עם נותני השירות אך ורק לצורך מתן השירות בפועל.</p>
              <p><strong className="text-white">7.5.</strong> לא יימסר מידע אישי לצדדים שלישיים שאינם קשורים למתן השירות, אלא לפי דרישת חוק או צו שיפוטי.</p>
              <p><strong className="text-white">7.6.</strong> המשתמש רשאי לבקש לעיין, לעדכן או למחוק את פרטיו לפי החוק.</p>
            </div>
          </section>

          {/* Section 8 */}
          <section className="bg-gradient-to-br from-[#1F2937]/60 to-[#151B2E]/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[#FF3B3B]/20">
            <h2 className="text-2xl font-bold text-white mb-4">8. הגבלת אחריות</h2>
            <div className="space-y-3 text-gray-300 leading-relaxed">
              <p><strong className="text-white">8.1.</strong> החברה לא תישא בכל אחריות לנזקים ישירים, עקיפים, כספיים או תוצאתיים שנגרמו עקב שימוש באפליקציה.</p>
              <p><strong className="text-white">8.2.</strong> השירות ניתן "כפי שהוא" (As Is), והחברה אינה מתחייבת לזמינות רציפה, ללא תקלות או שגיאות.</p>
              <p><strong className="text-white">8.3.</strong> החברה רשאית להפסיק את פעילות האפליקציה באופן זמני או קבוע לפי שיקול דעתה.</p>
            </div>
          </section>

          {/* Section 9 */}
          <section className="bg-gradient-to-br from-[#1F2937]/60 to-[#151B2E]/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[#FF3B3B]/20">
            <h2 className="text-2xl font-bold text-white mb-4">9. זכויות קניין רוחני</h2>
            <div className="space-y-3 text-gray-300 leading-relaxed">
              <p><strong className="text-white">9.1.</strong> כל הזכויות באפליקציה, בעיצוב, בלוגו, בתוכן ובקוד המקור שייכות לחברה בלבד.</p>
              <p><strong className="text-white">9.2.</strong> אין להעתיק, לשכפל, לפרסם, להפיץ או לעשות שימוש מסחרי ללא אישור מראש ובכתב מהחברה.</p>
            </div>
          </section>

          {/* Section 10 */}
          <section className="bg-gradient-to-br from-[#1F2937]/60 to-[#151B2E]/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[#FF3B3B]/20">
            <h2 className="text-2xl font-bold text-white mb-4">10. דין וסמכות שיפוט</h2>
            <div className="space-y-3 text-gray-300 leading-relaxed">
              <p><strong className="text-white">10.1.</strong> על התקנון יחולו אך ורק דיני מדינת ישראל.</p>
              <p><strong className="text-white">10.2.</strong> סמכות השיפוט הבלעדית בכל סכסוך הנוגע לתקנון זה תהיה בבתי המשפט בעיר תל אביב-יפו בלבד.</p>
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-gradient-to-br from-[#FF3B3B]/10 to-[#CC2E2E]/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[#FF3B3B]/30">
            <h2 className="text-2xl font-bold text-white mb-4">11. יצירת קשר</h2>
            <div className="space-y-3 text-gray-300 leading-relaxed">
              <p>לכל שאלה, פנייה או בירור ניתן ליצור קשר עם MoveUp:</p>
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
