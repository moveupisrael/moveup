"use client";

import { motion, useMotionValue, useTransform, PanInfo } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

// Splash Screen Component - iPhone Style with Video
export function SplashScreen() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    v.muted = true;
    v.playsInline = true;
    v.playbackRate = 1.0;

    const offset = 0.1; // כמה שניות לפני הסוף לעצור
    const RESTART_AFTER_MS = 5000; // אחרי כמה זמן להריץ שוב (10 שניות)
    const RESTART_FROM: "start" | "freeze" = "start"; // מאיפה להתחיל שוב
    const epsilon = 0.03;

    let stopTime = 0;
    let restartTO: ReturnType<typeof setTimeout> | null = null;

    const freezeAt = (t: number) => {
      v.pause();
      const lock = () => {
        v.pause();
        v.removeEventListener("seeked", lock);
      };
      v.addEventListener("seeked", lock);
      v.currentTime = t;

      // הפעלה מחדש אחרי N שניות
      if (restartTO) clearTimeout(restartTO);
      restartTO = setTimeout(() => {
        v.currentTime = RESTART_FROM === "start" ? 0 : t; // מהתחלה או מהפריים הקפוא
        v.play().catch(() => {});
      }, RESTART_AFTER_MS);
    };

    const onLoadedMeta = () => {
      stopTime = Math.max(0, (v.duration || 0) - offset);
    };

    const onTimeUpdate = () => {
      if (!stopTime) return;
      if (v.currentTime >= stopTime - epsilon) {
        freezeAt(stopTime);
        v.removeEventListener("timeupdate", onTimeUpdate);
      }
    };

    const onEnded = () => freezeAt(Math.max(0, (v.duration || 0) - offset));
    const onVisibility = () => {
      if (document.hidden) v.pause();
    };

    v.addEventListener("loadedmetadata", onLoadedMeta, { once: true });
    v.addEventListener("timeupdate", onTimeUpdate);
    v.addEventListener("ended", onEnded);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      v.removeEventListener("timeupdate", onTimeUpdate);
      v.removeEventListener("ended", onEnded);
      document.removeEventListener("visibilitychange", onVisibility);
      if (restartTO) clearTimeout(restartTO);
    };
  }, []);

  return (
    <div className="relative w-[280px] h-[600px] bg-black rounded-[50px] overflow-hidden border-[12px] border-gray-900 shadow-2xl">
      {/* iPhone Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140px] h-[30px] bg-black rounded-b-3xl z-50" />

      {/* Video Content */}
      <div className="flex flex-col items-center justify-center h-full relative">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover">
          <source
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/123-1762526958709.mp4"
            type="video/mp4" />

        </video>

        {/* Dark overlay for better visibility */}
        <div className="absolute inset-0 bg-black/30 !w-[287px] !h-[591px]" />

        {/* Logo on top of video */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-32 h-32 mb-8 z-10">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/ChatGPT-Image-Oct-28-2025-09_29_13-PM-1762474560391.png?width=8000&height=8000&resize=contain"
            alt="MoveUP Logo"
            fill
            sizes="(max-width: 768px) 150px, 200px"
            className="object-contain !opacity-0"
            priority
            quality={80}
          />

        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-4xl font-bold text-white mb-2 z-10 !opacity-0">
          Move<span className="text-[#FF3B3B]">UP</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-gray-200 text-sm z-10 !opacity-0">
          גרירה מהירה ובטוחה
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-20 flex gap-2 z-10">
          <div className="w-2 h-2 rounded-full bg-[#FF3B3B] animate-pulse" style={{ animationDelay: "0s" }} />
          <div className="w-2 h-2 rounded-full bg-[#FF3B3B] animate-pulse" style={{ animationDelay: "0.2s" }} />
          <div className="w-2 h-2 rounded-full bg-[#FF3B3B] animate-pulse" style={{ animationDelay: "0.4s" }} />
        </motion.div>
      </div>

      {/* iPhone Home Indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full z-50" />
    </div>);

}

// Radar/Searching Screen Component - iPhone Style
export function RadarScreen() {
  return (
    <div className="relative w-[280px] h-[600px] bg-[#0B0E18] rounded-[50px] overflow-hidden border-[12px] border-gray-900 shadow-2xl">
      {/* iPhone Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140px] h-[30px] bg-black rounded-b-3xl z-50" />
      
      {/* Status Bar */}
      <div className="absolute top-0 left-0 right-0 h-12 flex items-center justify-between px-6 pt-2 z-40 text-white text-xs">
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <span>📶</span>
          <span>📡</span>
          <span>🔋</span>
        </div>
      </div>

      {/* Header */}
      <div className="absolute top-14 w-full flex justify-center z-20">
        <h1 className="text-3xl font-bold text-white">
          Move<span className="text-[#FF3B3B]">UP</span>
        </h1>
      </div>

      {/* Screen Content */}
      <div className="flex flex-col items-center justify-center h-full p-6">
        {/* Radar Animation */}
        <div className="relative w-52 h-52 mb-8">
          {/* Radar Circles */}
          <div className="absolute inset-0 rounded-full border border-white/10" />
          <div className="absolute inset-[12.5%] rounded-full border border-white/10" />
          <div className="absolute inset-[25%] rounded-full border border-white/10" />
          <div className="absolute inset-[37.5%] rounded-full border border-white/10" />
          <div className="absolute inset-[50%] rounded-full border border-white/10" />

          {/* Radar Sweep */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background:
              "conic-gradient(from 180deg at 50% 50%, rgba(255, 64, 64, 0) 0%, rgba(255, 64, 64, 0.4) 30%, rgba(255, 64, 64, 0) 60%, rgba(255, 64, 64, 0) 100%)"
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }} />


          {/* Center Dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-5 h-5 rounded-full bg-[#FF3B3B] shadow-[0_0_15px_rgba(255,64,64,0.5)]">
              <motion.div
                className="absolute inset-0 rounded-full bg-[#FF3B3B]/80"
                animate={{ scale: [0.5, 1.2, 0.5], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2.5, repeat: Infinity }} />

            </div>
          </div>
        </div>

        {/* Text */}
        <h2 className="text-3xl font-extrabold text-white text-center mb-3">
          מאתרים פתרון בדרך אליך.
        </h2>
        <p className="text-base text-gray-400 text-center">
          החיפוש עשוי להימשך מספר רגעים
        </p>
      </div>

      {/* Bottom Info */}
      <div className="absolute bottom-14 w-full px-6 z-20">
        <div className="flex justify-between text-xs text-white/50">
          <div className="flex flex-col items-start gap-1">
            <span>סוג רכב: פרטי</span>
            <span>מיקום: תל אביב-יפו</span>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span>שירות: גרירה</span>
            <span>חיפוש ברדיוס: 25 ק"מ</span>
          </div>
        </div>
      </div>
      
      {/* iPhone Home Indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full z-50" />
    </div>);

}

// Driver Tracking Screen Component - iPhone Style
export function TrackingScreen() {
  return (
    <div className="relative w-[280px] h-[600px] rounded-[50px] overflow-hidden border-[12px] border-gray-900 shadow-2xl bg-[#0B0E18]">
      {/* Background Image - Optimized */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/3c0eaa90-435b-42c3-b17c-2215692d066d/visual-edit-uploads/1763060259887-nnphmbngug.png"
          alt="Map Background"
          fill
          sizes="(max-width: 768px) 100vw, 300px"
          className="object-cover"
          priority
          quality={80}
        />
      </div>

      {/* iPhone Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140px] h-[30px] bg-black rounded-b-3xl z-50" />
      
      {/* Status Bar */}
      <div className="absolute top-0 left-0 right-0 h-12 flex items-center justify-between px-6 pt-2 z-40 text-white text-xs">
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <span className="!opacity-0">📶</span>
          <span className="!opacity-0">📡</span>
          <span className="!opacity-0">🔋</span>
        </div>
      </div>
      
      {/* Map Background */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-[0.7]"
        style={{
          backgroundImage: `url("https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/screen-1763062348374.png?width=8000&height=8000&resize=contain")`
        }} />


      {/* Content Overlay */}
      <div className="relative h-full flex flex-col !opacity-0 !bg-cover !bg-center !bg-none !opacity-[0.94] !bg-cover !bg-center !opacity-100 !bg-cover !bg-center !opacity-100 !bg-[url(https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/3c0eaa90-435b-42c3-b17c-2215692d066d/visual-edit-uploads/1763060398024-s1gitkf2yo.png)] !bg-cover !bg-center">
        {/* Header Status */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-4 pt-14 !opacity-100">
          <div className="bg-[#252D42]/90 backdrop-blur-sm rounded-lg p-3 text-center shadow-lg flex items-center justify-center !opacity-0">
            <p className="text-green-400 font-bold text-base">הגרריסט בדרך אליך</p>
          </div>
        </motion.div>

        {/* Map Controls */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-10">
          <div className="flex flex-col gap-0.5">
            <button className="w-10 h-10 bg-[#252D42]/90 backdrop-blur-sm rounded-t-lg flex items-center justify-center text-white shadow-lg !opacity-0">
              <span className="text-xl">+</span>
            </button>
            <button className="w-10 h-10 bg-[#252D42]/90 backdrop-blur-sm rounded-b-lg flex items-center justify-center text-white shadow-lg !opacity-0">
              <span className="text-xl">−</span>
            </button>
          </div>
          <button className="w-10 h-10 bg-[#252D42]/90 backdrop-blur-sm rounded-lg flex items-center justify-center text-white shadow-lg !opacity-0">
            <span className="text-lg !opacity-0">⊙</span>
          </button>
        </motion.div>

        {/* Bottom Info Card */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-auto p-4 pb-6">
          <div className="bg-[#252D42]/90 backdrop-blur-sm rounded-xl p-4 shadow-lg !opacity-0">
            {/* ETA */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-gray-400 text-sm font-normal !opacity-0">זמן הגעה משוער</p>
                <p className="text-white text-2xl font-bold !opacity-0">30 דקות</p>
              </div>
              <img
                alt="Driver's profile picture"
                className="h-14 w-14 rounded-full object-cover border-2 border-cyan-400/50 !opacity-0"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7ItJ41eRPUwuuFQEE41dF7gIdSwwt4pJOv1VqXApZQOlnk8lcbU1N7oFZhgzSW61NZLmLgryB9Vq9up7MViNOrEBoW4zdKB14v9ydPVkU2Kzc12SEGpcjbkK6GykzYIXmnbL5s_99PP7ju-8w8iA7ZIJ1_oc93QqEpm_CKSdW4GfPwoUgvCmL5qP-NdYtrsa-fe2VVg5hqkZKHutpeAMxVUKwa6nIuClbYrZHNzny-jbVosb8Oi5N-Dy11O4BQ5S5Fsj7w2DZmD0" />

            </div>

            <div className="h-px bg-white/10 mb-4" />

            {/* Driver Info */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-4 mb-3">
              <span className="text-gray-400 text-2xl !opacity-0">👤</span>
              <p className="text-white text-base !opacity-0">דוד לוי</p>
            </motion.div>

            {/* Vehicle Info */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-4 mb-4">
              <span className="text-gray-400 text-2xl !opacity-0">🚚</span>
              <p className="text-white text-base !opacity-0">גרר שטוח: פורד F-350</p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="space-y-3">
              <button className="w-full h-12 bg-[#252D42]/90 text-white rounded-lg font-bold text-sm shadow-lg backdrop-blur-sm border border-white/20 !opacity-0">
                צור קשר עם הגרריסט
              </button>
              <button className="w-full h-12 bg-[#FF4B5C] text-white rounded-lg font-bold text-sm shadow-lg !opacity-0">
                ביטול קריאה
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* iPhone Home Indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full z-50" />
    </div>);

}

// NEW: Swipeable Screens Container
export function SwipeablePhoneScreens() {
  return (
    <div className="relative flex flex-col items-center gap-6 w-full">
      {/* Scrollable Container */}
      <div className="relative w-full overflow-x-scroll scrollbar-hide" style={{ WebkitOverflowScrolling: 'touch' }}>
        <div className="flex gap-12 px-4 pb-2 !bg-none !bg-cover !bg-center" style={{ width: 'max-content', minWidth: '100%' }}>
          <div className="flex-shrink-0">
            <SplashScreen />
          </div>
          <div className="flex-shrink-0">
            <RadarScreen />
          </div>
          <div className="flex-shrink-0">
            <TrackingScreen />
          </div>
        </div>
      </div>

      {/* Labels for each screen */}
      <div className="hidden md:flex gap-12 items-center justify-center text-sm text-white/60">
        <span className="w-[280px] text-center">מסך פתיחה</span>
        <span className="w-[280px] text-center">חיפוש גרריסט</span>
        <span className="w-[280px] text-center">מעקב בזמן אמת</span>
      </div>

      {/* Swipe Hint (only shows on mobile) */}
      <div className="text-sm text-white/50 text-center md:hidden">
        החלק לצפייה במסכים נוספים
      </div>
    </div>);

}