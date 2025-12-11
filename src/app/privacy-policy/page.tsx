"use client";

import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Lock, Eye, Database, Mail } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B0F1A] via-[#151B2E] to-[#0B0F1A] text-gray-200">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header / Nav */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link href="/">
            <Button variant="ghost" className="text-gray-400 hover:text-[#FF3B3B] hover:bg-white/5 gap-2">
              <ArrowRight className="w-4 h-4" />
              חזרה לדף הבית
            </Button>
          </Link>
        </motion.div>

        {/* Title Section */}
        <motion.div 
          {...fadeInUp}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FF3B3B]/10 mb-4 border border-[#FF3B3B]/20 shadow-[0_0_20px_rgba(255,59,59,0.2)]">
            <Shield className="w-8 h-8 text-[#FF3B3B]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white">מדיניות פרטיות</h1>
          <p className="text-gray-400 text-lg">עודכן לאחרונה: 11 בדצמבר, 2024</p>
        </motion.div>

        {/* Content */}
        <div className="space-y-12 bg-[#151B2E]/50 backdrop-blur-sm p-8 rounded-3xl border border-white/5 shadow-xl">
          
          {/* Section 1: Introduction */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <Eye className="w-6 h-6 text-[#FF3B3B]" />
              1. כללי
            </h2>
            <p className="leading-relaxed text-gray-300">
              ב-MoveUP ("אנחנו", "החברה"), אנו מכבדים את הפרטיות שלך ומחויבים להגן על המידע האישי שאתה משתף איתנו. 
              מדיניות זו מתארת כיצד אנו אוספים, משתמשים ושומרים על המידע שלך בעת השימוש באתר ובשירותים שלנו.
            </p>
          </motion.section>

          {/* Section 2: Information We Collect */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <Database className="w-6 h-6 text-[#FF3B3B]" />
              2. מידע שאנו אוספים
            </h2>
            <p className="leading-relaxed text-gray-300">
              אנו אוספים מידע שאתה מספק לנו באופן ישיר, כגון:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mr-4">
              <li>שם מלא</li>
              <li>מספר טלפון</li>
              <li>כתובת אימייל</li>
              <li>סוג משתמש (גרריסט/אופנוען)</li>
              <li>תוכן הודעות הפנייה</li>
            </ul>
          </motion.section>

          {/* Section 3: Use of Information */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <Lock className="w-6 h-6 text-[#FF3B3B]" />
              3. שימוש במידע
            </h2>
            <p className="leading-relaxed text-gray-300">
              אנו משתמשים במידע שנאסף למטרות הבאות:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mr-4">
              <li>יצירת קשר ומענה לפניותיך.</li>
              <li>חיבור בין נותני שירות ללקוחות.</li>
              <li>שיפור השירותים וחווית המשתמש באתר.</li>
              <li>שליחת עדכונים שיווקיים (רק אם אישרת זאת במפורש).</li>
            </ul>
          </motion.section>

          {/* Section 4: Third Parties */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <Shield className="w-6 h-6 text-[#FF3B3B]" />
              4. שיתוף מידע עם צד שלישי
            </h2>
            <p className="leading-relaxed text-gray-300">
              איננו מוכרים את המידע שלך לצדדים שלישיים. אנו עשויים לשתף מידע עם ספקי שירות טכנולוגיים (כגון שירותי אחסון, שליחת הודעות WhatsApp או מערכות CRM) אך ורק לצורך מתן השירות ותפעול האתר.
            </p>
          </motion.section>

          {/* Section 5: Cookies */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <Eye className="w-6 h-6 text-[#FF3B3B]" />
              5. עוגיות (Cookies)
            </h2>
            <p className="leading-relaxed text-gray-300">
              האתר משתמש ב"עוגיות" לצורך תפעולו השוטף והתקין, ובכלל זה כדי לאסוף נתונים סטטיסטיים אודות השימוש באתר, לאימות פרטים, וכדי להתאים את האתר להעדפותיך האישיות. ניתן לשנות את הגדרות העוגיות בכל עת דרך תפריט העוגיות באתר.
            </p>
          </motion.section>

          {/* Section 6: Contact */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-4 border-t border-white/10 pt-8 mt-8"
          >
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <Mail className="w-6 h-6 text-[#FF3B3B]" />
              צור קשר
            </h2>
            <p className="leading-relaxed text-gray-300">
              בכל שאלה בנוגע למדיניות פרטיות זו, ניתן לפנות אלינו בכתובת המייל:
              <a href="mailto:info@moveeup.co.il" className="text-[#FF3B3B] hover:underline mr-1">info@moveeup.co.il</a>
            </p>
          </motion.section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
