"use client";

import { motion } from "framer-motion";

// Custom Icons Components
const ClockIcon = () =>
<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="32" cy="32" r="28" stroke="#FF3B3B" strokeWidth="3" fill="none" />
    <circle cx="32" cy="32" r="24" stroke="#FF3B3B" strokeWidth="2" opacity="0.3" fill="none" />
    <path d="M32 16V32L42 42" stroke="#FF3B3B" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="32" cy="32" r="3" fill="#FF3B3B" />
    <text x="32" y="12" textAnchor="middle" fill="#FF3B3B" fontSize="8" fontWeight="bold">24/7</text>
  </svg>;


const ZapIcon = () =>
<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M35 8L18 36H32L29 56L46 28H32L35 8Z" fill="#FF3B3B" stroke="#FF3B3B" strokeWidth="2" strokeLinejoin="round" />
    <path d="M35 8L18 36H32L29 56L46 28H32L35 8Z" fill="none" stroke="#FF3B3B" strokeWidth="1" opacity="0.5" transform="scale(1.1) translate(-1.6, -1.6)" />
  </svg>;


const ShieldIcon = () =>
<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M32 8L12 16V28C12 42 20 52 32 56C44 52 52 42 52 28V16L32 8Z" stroke="#FF3B3B" strokeWidth="3" fill="none" strokeLinejoin="round" />
    <path d="M32 12L16 18V28C16 40 22 48 32 52C42 48 48 40 48 28V18L32 12Z" stroke="#FF3B3B" strokeWidth="2" opacity="0.3" fill="none" strokeLinejoin="round" />
    <path d="M24 30L30 36L42 24" stroke="#FF3B3B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>;


const TrophyIcon = () =>
<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M16 12H48V28C48 36 42 42 32 42C22 42 16 36 16 28V12Z" stroke="#FF3B3B" strokeWidth="3" fill="none" strokeLinejoin="round" />
    <rect x="28" y="42" width="8" height="8" stroke="#FF3B3B" strokeWidth="3" fill="none" />
    <rect x="20" y="50" width="24" height="4" fill="#FF3B3B" rx="2" />
    <path d="M16 12H12C10 12 8 14 8 16V20C8 24 10 26 14 26H16" stroke="#FF3B3B" strokeWidth="3" strokeLinecap="round" />
    <path d="M48 12H52C54 12 56 14 56 16V20C56 24 54 26 50 26H48" stroke="#FF3B3B" strokeWidth="3" strokeLinecap="round" />
    <circle cx="32" cy="24" r="6" fill="#FF3B3B" opacity="0.3" />
    <text x="32" y="28" textAnchor="middle" fill="#FF3B3B" fontSize="10" fontWeight="bold">1</text>
  </svg>;


const MapPinIcon = () =>
<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M32 8C22 8 14 16 14 26C14 36 32 56 32 56C32 56 50 36 50 26C50 16 42 8 32 8Z" stroke="#FF3B3B" strokeWidth="3" fill="none" strokeLinejoin="round" />
    <circle cx="32" cy="26" r="8" stroke="#FF3B3B" strokeWidth="3" fill="none" />
    <circle cx="32" cy="26" r="4" fill="#FF3B3B" />
    <path d="M14 50H50" stroke="#FF3B3B" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
    <path d="M18 54H46" stroke="#FF3B3B" strokeWidth="2" strokeLinecap="round" opacity="0.2" />
  </svg>;


const SmartphoneIcon = () =>
<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="18" y="8" width="28" height="48" rx="4" stroke="#FF3B3B" strokeWidth="3" fill="none" />
    <rect x="22" y="12" width="20" height="36" rx="2" stroke="#FF3B3B" strokeWidth="2" opacity="0.3" fill="none" />
    <circle cx="32" cy="52" r="2" fill="#FF3B3B" />
    <path d="M28 24L36 32L28 40" stroke="#FF3B3B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>;


const CreditCardIcon = () =>
<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="8" y="18" width="48" height="28" rx="4" stroke="#FF3B3B" strokeWidth="3" fill="none" />
    <rect x="8" y="24" width="48" height="8" fill="#FF3B3B" opacity="0.3" />
    <line x1="14" y1="38" x2="26" y2="38" stroke="#FF3B3B" strokeWidth="3" strokeLinecap="round" />
    <line x1="32" y1="38" x2="38" y2="38" stroke="#FF3B3B" strokeWidth="3" strokeLinecap="round" />
    <circle cx="48" cy="40" r="4" stroke="#FF3B3B" strokeWidth="2" fill="none" />
    <circle cx="48" cy="40" r="2" fill="#FF3B3B" />
  </svg>;


const StarIcon = () =>
<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M32 8L38 26H58L42 38L48 56L32 44L16 56L22 38L6 26H26L32 8Z" fill="#FF3B3B" stroke="#FF3B3B" strokeWidth="2" strokeLinejoin="round" />
    <path d="M32 8L38 26H58L42 38L48 56L32 44L16 56L22 38L6 26H26L32 8Z" fill="none" stroke="#FF3B3B" strokeWidth="1.5" opacity="0.4" transform="scale(0.85) translate(4.8, 4.8)" />
    <circle cx="32" cy="32" r="8" fill="#0B0F1A" opacity="0.8" />
    <text x="32" y="37" textAnchor="middle" fill="#FF3B3B" fontSize="10" fontWeight="bold">4.8</text>
  </svg>;


const benefits = [
{
  Icon: ClockIcon,
  title: "זמינות 24/7",
  description: "אנחנו כאן בשבילך בכל שעה, בכל יום בשנה",
  details: [
  "שירות ללא הפסקה בכל שעות היממה",
  "זמינות גם בשבתות וחגים",
  "צוות תמיכה מקצועי תמיד זמין"],

  gradient: "from-red-500 to-pink-500"
},
{
  Icon: ZapIcon,
  title: "תגובה מהירה",
  description: "\u05D6\u05DE\u05DF \u05D4\u05D2\u05E2\u05D4 \u05DE\u05DE\u05D5\u05E6\u05E2 \u05E9\u05DC 30 \u05D3\u05E7\u05D5\u05EA \u05D1\u05DC\u05D1\u05D3",
  details: [
  "מערך גררים רחב בכל הארץ",
  "מעקב בזמן אמת אחר הגרר",
  "התראות מיידיות על מצב הפניה"],

  gradient: "from-orange-500 to-red-500"
},
{
  Icon: ShieldIcon,
  title: "ביטוח מלא",
  description: "האופנוע שלך מבוטח במלואו במהלך הגרירה",
  details: [
  "כיסוי ביטוחי מקיף לכל נזק",
  "אחריות מלאה על הרכב",
  "שקט נפשי מובטח"],

  gradient: "from-red-500 to-rose-500"
},
{
  Icon: TrophyIcon,
  title: "מקצועיות",
  description: "צוות מיומן ומקצועי עם ניסיון רב",
  details: [
  "גררים מוסמכים ומנוסים",
  "ציוד מתקדם ואמין",
  "טיפול מקצועי בכל סוג אופנוע"],

  gradient: "from-pink-500 to-red-500"
},
{
  Icon: MapPinIcon,
  title: "כיסוי ארצי",
  description: "שירות בכל רחבי הארץ מצפון ועד דרום",
  details: [
  "נוכחות בכל האזורים",
  "גרירה בין ערים ויישובים",
  "שירות גם באזורים מרוחקים"],

  gradient: "from-red-500 to-orange-500"
},
{
  Icon: SmartphoneIcon,
  title: "תקשורת קלה",
  description: "ממשק פשוט וידידותי להזמנת שירות",
  details: [
  "הזמנה ב-3 קליקים בלבד",
  "עדכונים אוטומטיים בוואטסאפ",
  "תמיכה טלפונית זמינה תמיד"],

  gradient: "from-pink-500 to-purple-500"
},
{
  Icon: CreditCardIcon,
  title: "מחירים שקופים",
  description: "ללא עלויות נסתרות או הפתעות לא נעימות",
  details: [
  "תמחור הוגן וברור מראש",
  "אפשרויות תשלום גמישות",
  "קבלה מפורטת לכל שירות"],

  gradient: "from-red-500 to-pink-500"
}];


export default function Benefits() {
  return (
    <section className="py-12 md:py-24 px-4 relative bg-gradient-to-b from-[#0B0F1A] via-[#151B2E] to-[#0B0F1A]">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
            למה <span className="text-[#FF3B3B] neon-glow">MoveUP?</span>
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-400 mb-3 md:mb-4">
            היתרונות שלנו הופכים אותנו למובילים בתחום
          </p>
          <p className="text-base md:text-lg text-gray-500 max-w-3xl mx-auto px-4">
            אנחנו מספקים את השירות הטוב ביותר בשוק: מהיר, אמין ומקצועי. אלפי לקוחות בוחרים בנו
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8" style={{ perspective: "1000px" }}>
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.Icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  rotateY: 5,
                  rotateX: -5,
                  z: 50,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
                style={{ transformStyle: "preserve-3d" }}>
                {/* Card */}
                <div className="relative bg-gradient-to-br from-[#1F2937] to-[#151B2E] rounded-3xl p-6 md:p-8 border border-[#FF3B3B]/20 hover:border-[#FF3B3B] transition-all duration-300 overflow-hidden shadow-2xl hover:shadow-[0_20px_60px_rgba(255,59,59,0.4)] min-h-[350px] md:min-h-[400px] !w-full !h-full">
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  {/* 3D Glow effect layers */}
                  <div
                    className="absolute -top-20 -right-20 w-40 h-40 bg-[#FF3B3B]/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ transform: "translateZ(20px)" }} />
                  <div
                    className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#FF3B3B]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ transform: "translateZ(10px)" }} />

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col" style={{ transform: "translateZ(30px)" }}>
                    {/* Icon */}
                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        rotateY: 360,
                        transition: { duration: 0.6 }
                      }}
                      className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center mb-4 md:mb-6 group-hover:shadow-2xl transition-shadow duration-300 p-3"
                      style={{ transformStyle: "preserve-3d" }}>
                      <IconComponent />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3" style={{ transform: "translateZ(20px)" }}>
                      {benefit.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed mb-4 md:mb-6 text-base md:text-lg whitespace-pre-line" style={{ transform: "translateZ(15px)" }}>
                      {benefit.description}
                    </p>

                    {/* Details List */}
                    <ul className="space-y-2 md:space-y-3 flex-1">
                      {benefit.details.map((detail, idx) =>
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + idx * 0.1 }}
                        className="flex items-start gap-2 md:gap-3"
                        style={{ transform: "translateZ(10px)" }}>

                          <div className="w-2 h-2 rounded-full bg-[#FF3B3B] mt-2 flex-shrink-0" />
                          <span className="text-gray-300 text-xs md:text-sm leading-relaxed">{detail}</span>
                        </motion.li>
                      )}
                    </ul>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF3B3B] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ transform: "translateZ(5px)" }} />
                </div>
              </motion.div>);

          })}
        </div>
      </div>
    </section>);

}