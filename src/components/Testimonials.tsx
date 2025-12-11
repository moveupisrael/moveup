"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, PanInfo } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, Shield, MessageSquareText, CheckCircle2 } from "lucide-react";

type Testimonial = {
  name: string;
  role: string;
  rating: number;
  text: string;
  image: string;
  city: string;
  date: string; // YYYY-MM-DD
  verified?: boolean;
  channel?: "" | "WhatsApp" | "";
};

const testimonials: Testimonial[] = [
{
  name: "דני כהן",
  role: "רוכב אופנוע · Yamaha MT-07",
  rating: 5,
  text:
  "נפצע לי הצמיג בדרך לאיילון. פתחתי את האפליקציה, הנהג התקשר אחרי 2 דקות והגיע ב-18 דק׳. העמסה נקייה, רצועות עם גומי, בלי שריטות. שילמתי באפליקציה, סגור עניין.",
  image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
  city: "ת״א",
  date: "2025-10-14",
  verified: true,
  channel: ""
},
{
  name: "מיכל לוי",
  role: "רוכבת · Honda PCX",
  rating: 5,
  text:
  "תקלה באמצע יציאה מהעבודה. קיבלתי ETA חי בזמן אמת ושיתוף מיקום לוואטסאפ לבן הזוג. היה חשוב לי עדינות, הורדה בחניה תת-קרקעית בלי טיפת בלאגן. שירות נדיר.",
  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
  city: "ר״ג",
  date: "2025-09-29",
  verified: true,
  channel: "WhatsApp"
},
{
  name: "אייל מזרחי",
  role: "שליח · KTM Duke 390",
  rating: 5,
  text:
  "זמן שווה כסף. הגיעו מהר, העתק קבלה למייל, והביאו ישירות למוסך הקבוע שלי. שמו מגן על הדיוק, בלי סימנים. אעבוד איתם שוב.",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
  city: "חולון",
  date: "2025-08-22",
  verified: true,
  channel: "Google"
},
{
  name: "רונית אברהם",
  role: "רוכבת · Vespa Primavera",
  rating: 5,
  text:
  "נתקעתי בלילה. ענו תוך 20 שניות בצ׳אט באפליקציה, שלחו נהגת(!), הרגשתי בטוח. מחיר שקוף מראש, אין אותיות קטנות. שאפו.",
  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
  city: "ירושלים",
  date: "2025-07-03",
  verified: true,
  channel: "App"
}];


export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const x = useMotionValue(0);
  const [dragDirection, setDragDirection] = useState<"left" | "right" | null>(null);

  const avgRating = useMemo(
    () => (testimonials.reduce((s, t) => s + t.rating, 0) / testimonials.length).toFixed(2),
    []
  );

  const next = () => setCurrentIndex((p) => (p + 1) % testimonials.length);
  const prev = () => setCurrentIndex((p) => (p - 1 + testimonials.length) % testimonials.length);

  // Auto-rotate every 6s, pause on hover/focus
  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(next, 6000);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentIndex, paused]);

  // Keyboard nav (RTL aware)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") prev(); // RTL: ימינה = אחורה
      if (e.key === "ArrowLeft") next(); // RTL: שמאלה = קדימה
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Handle swipe gestures
  const handleDragEnd = (_e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 50;

    // RTL: החלקה שמאלה = הבא, החלקה ימינה = הקודם
    if (info.offset.x < -swipeThreshold) {
      next(); // החלקה שמאלה = קדימה
    } else if (info.offset.x > swipeThreshold) {
      prev(); // החלקה ימינה = אחורה
    }

    setDragDirection(null);
  };

  const handleDrag = (_e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x < -20) {
      setDragDirection("left");
    } else if (info.offset.x > 20) {
      setDragDirection("right");
    }
  };

  const t = testimonials[currentIndex];

  return (
    <section
      dir="rtl"
      className="py-12 md:py-20 px-4 relative overflow-hidden bg-gradient-to-b from-[#0B0F1A] via-[#151B2E] to-[#0B0F1A] !w-full !h-40"
      aria-labelledby="testimonials-title"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}>

      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <Quote className="absolute top-10 left-10 w-20 h-20 md:w-28 md:h-28 text-[#FF3B3B] rotate-180" />
        <Quote className="absolute bottom-10 right-10 w-20 h-20 md:w-28 md:h-28 text-[#FF3B3B]" />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10 !opacity-0">
        {/* Header + Trust row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8">

          <h2 id="testimonials-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
            מה <span className="text-[#FF3B3B] neon-glow">הלקוחות</span> אומרים?
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-400">אלפי רוכבים בוחרים ב-MoveUP כשזה באמת דחוף</p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 md:gap-4 text-xs md:text-sm text-gray-300">
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 md:px-4 py-2">
              <Star className="w-4 h-4 text-[#FF3B3B] fill-[#FF3B3B]" />
              <span>דירוג ממוצע {avgRating}★ · {testimonials.length} ביקורות מאומתות</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 md:px-4 py-2">
              <Shield className="w-4 h-4" />
              <span className="hidden sm:inline">ביטוח מטען מלא · חשבונית דיגיטלית</span>
              <span className="sm:hidden">ביטוח מלא</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 md:px-4 py-2">
              <MessageSquareText className="w-4 h-4" />
              <span>מענה לצ׳אט: ~20שניות</span>
            </div>
          </div>
        </motion.div>

        {/* Carousel */}
        <div className="relative w-full max-w-3xl mx-auto" aria-roledescription="carousel">
          {/* Nav buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#FF3B3B]/20 hover:bg-[#FF3B3B]/40 border border-[#FF3B3B] flex items-center justify-center transition-all duration-300 hover:scale-110 -translate-x-2 md:-translate-x-16"
            aria-label="עדות קודמת">

            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#FF3B3B]/20 hover:bg-[#FF3B3B]/40 border border-[#FF3B3B] flex items-center justify-center transition-all duration-300 hover:scale-110 translate-x-2 md:translate-x-16"
            aria-label="עדות הבאה">

            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </button>

          {/* Swipe indicator hint (mobile only) */}
          <div className="md:hidden text-center mb-2">
            <p className="text-gray-500 text-xs">החלק שמאלה או ימינה</p>
          </div>

          {/* Card */}
          <div className="relative w-full min-h-[500px] md:min-h-[380px] touch-pan-y px-4 md:px-0">
            <AnimatePresence mode="wait">
              <motion.article
                key={currentIndex}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDrag={handleDrag}
                onDragEnd={handleDragEnd}
                style={{ x }}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dragDirection === "left" ? -80 : dragDirection === "right" ? 80 : -80 }}
                transition={{ duration: 0.45 }}
                className="absolute inset-0 bg-gradient-to-br from-[#1F2937] to-[#151B2E] rounded-2xl md:rounded-3xl p-6 md:p-10 border border-[#FF3B3B]/25 shadow-2xl overflow-hidden cursor-grab active:cursor-grabbing"
                aria-roledescription="slide"
                aria-label={`${t.name}, ${t.city}`}>

                {/* soft glow */}
                <div className="absolute -top-28 -left-28 w-56 h-56 bg-[#FF3B3B]/10 rounded-full blur-3xl" />

                <div className="relative z-10 flex flex-col h-full">
                  {/* tiny header row */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
                    <div className="flex flex-wrap items-center gap-2 text-white/70 text-xs md:text-sm">
                      <Quote className="w-4 h-4 md:w-5 md:h-5 text-[#FF3B3B]/70" />
                      <span className="opacity-0 w-6">{t.channel === "Google" ? "Google" : t.channel === "WhatsApp" ? "WhatsApp" : "App"}</span>
                      <span className="text-white/40">•</span>
                      <time dateTime={t.date}>{formatHebDate(t.date)}</time>
                      <span className="text-white/40">•</span>
                      <span>{t.city}</span>
                      {t.verified &&
                      <>
                          <span className="text-white/40">•</span>
                          <span className="inline-flex items-center gap-1 text-emerald-300 text-xs">
                            <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4" />
                            לקוח מאומת
                          </span>
                        </>
                      }
                    </div>

                    {/* rating */}
                    <div className="flex items-center gap-1" aria-label={`דירוג ${t.rating} מתוך 5`}>
                      {Array.from({ length: 5 }).map((_, i) =>
                      <Star key={i} className={`w-4 h-4 md:w-5 md:h-5 ${i < t.rating ? "text-[#FF3B3B] fill-[#FF3B3B]" : "text-white/20"}`} />
                      )}
                    </div>
                  </div>

                  {/* quote */}
                  <p className="text-base md:text-xl text-gray-100 leading-relaxed mb-4 md:mb-6 flex-grow">
                    &ldquo;{t.text}&rdquo;
                  </p>

                  {/* outcome bullets → נותן תחושת תוצאה מוחשית */}
                  <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs md:text-sm text-gray-300 mb-4 md:mb-6">
                    <li className="bg-white/5 rounded-lg px-2 md:px-3 py-2 border border-white/10 text-center">הגעה מהירה · ~30 דק׳</li>
                    <li className="bg-white/5 rounded-lg px-2 md:px-3 py-2 border border-white/10 text-center">מחיר שקוף מראש</li>
                    <li className="bg-white/5 rounded-lg px-2 md:px-3 py-2 border border-white/10 text-center">העמסה עדינה ללא שריטות</li>
                  </ul>

                  {/* bottom row: avatar + CTA */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-[#FF3B3B] flex-shrink-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={t.image} alt={t.name} className="w-full h-full object-cover" loading="lazy" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-sm md:text-base">{t.name}</h4>
                        <p className="text-gray-400 text-xs md:text-sm">{t.role}</p>
                      </div>
                    </div>

                    <a
                      href="#cta"
                      className="inline-flex items-center gap-2 bg-[#FF3B3B] hover:bg-[#ff3b3b]/90 text-white px-3 md:px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition whitespace-nowrap">

                      הזמן גרירה עכשיו
                      <ChevronLeft className="w-3 h-3 md:w-4 md:h-4 -scale-x-100" />
                    </a>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

          {/* Progress dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) =>
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex ? "w-8 bg-[#FF3B3B]" : "w-2 bg-white/20 hover:bg-white/40"}`
              }
              aria-label={`עבור לעדות ${idx + 1}`} />

            )}
          </div>
        </div>
      </div>

      {/* SEO: Review schema */}
      <script
        type="application/ld+json"
        // @ts-ignore
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "MoveUP – גרירת אופנועים",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: avgRating,
              reviewCount: testimonials.length
            },
            review: testimonials.map((r) => ({
              "@type": "Review",
              reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: "5" },
              author: { "@type": "Person", name: r.name },
              reviewBody: r.text,
              datePublished: r.date
            }))
          })
        }} />

    </section>);

}

/** עוזר קטן לפורמט תאריך אנושי */
function formatHebDate(iso: string) {
  try {
    const d = new Date(iso + "T12:00:00"); // הימנעות מהיסט אזורית
    return d.toLocaleDateString("he-IL", { year: "numeric", month: "long", day: "2-digit" });
  } catch {
    return iso;
  }
}