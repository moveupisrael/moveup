"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaAppStore, FaGooglePlay } from "react-icons/fa";
import { Button } from "./ui/button";
import { SwipeablePhoneScreens } from "./AppScreens";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set slower playback speed (0.5 = half speed)
    video.playbackRate = 0.5;

    const handleTimeUpdate = () => {
      // Stop video at 4.0 seconds
      if (video.currentTime >= 3.0) {
        video.pause();
        video.removeEventListener("timeupdate", handleTimeUpdate);
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center py-8 md:py-10 lg:pt-0">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          poster="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/3c0eaa90-435b-42c3-b17c-2215692d066d/visual-edit-uploads/1763070139429-cbami611nlb.png"
        >
          <source
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/3c0eaa90-435b-42c3-b17c-2215692d066d/generated_videos/static-fixed-camera-shot-of-a-motorcycle-d5a5ea60-20251107143444.mp4"
            type="video/mp4" />
        </video>
        
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F1A]/60 via-[#0B0F1A]/70 to-[#0B0F1A]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo - Unique for each screen size */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative mx-auto mb-2 lg:mb-0">

            {/* Mobile Logo (< 640px) */}
            <div className="block sm:hidden relative w-64 h-64 mx-auto">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/ChatGPT-Image-Oct-28-2025-09_29_13-PM-1-1762532506193.png"
                alt="MoveUP Logo - Mobile"
                fill
                sizes="256px"
                className="object-contain !w-full !h-[381px] !max-w-full"
                priority />
            </div>

            {/* Tablet Logo (640px - 1024px) */}
            <div className="hidden sm:block lg:hidden relative w-80 h-80 mx-auto">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/ChatGPT-Image-Oct-28-2025-09_29_13-PM-1-1762532506193.png"
                alt="MoveUP Logo - Tablet"
                fill
                sizes="320px"
                className="object-contain !w-full !h-[469px] !max-w-full" />
            </div>

            {/* Desktop Logo (>= 1024px) */}
            <div className="hidden lg:block relative mx-auto lg:mt-0 w-[500px] h-[500px]">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/3c0eaa90-435b-42c3-b17c-2215692d066d/visual-edit-uploads/1763070139429-cbami611nlb.png"
                alt="MoveUP Logo - Desktop"
                fill
                sizes="500px"
                className="object-contain !w-full !h-[705px] !max-w-full" />
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-2">
           גרירה בלחיצת כפתור
            <br />
            <span className="text-[#FF3B3B] neon-glow">הגרר הקרוב ביותר בדרך אלייך</span>
          </motion.h1>

          {/* Value Prop */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-300 mb-4 font-medium">
            גרירה מהירה • ביטוח מלא • מחיר שקוף
          </motion.p>

          {/* Download Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <Link href="/join-waitlist" className="inline-block">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-black hover:bg-black/90 text-white text-lg px-8 py-7 lg:px-12 lg:py-9 lg:text-xl rounded-2xl border-2 border-white/30 transition-all duration-300 hover:scale-105 hover:border-white/60 flex items-center gap-3 shadow-xl">
                <FaAppStore className="size-8 lg:size-10" />
                <div className="text-right">
                  <div className="text-xs text-gray-400 lg:text-sm">הורד מ</div>
                  <div className="font-bold text-lg lg:text-xl">App Store</div>
                </div>
              </Button>
            </Link>
            <Link href="/join-waitlist" className="inline-block">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#FF3B3B] hover:bg-[#FF3B3B]/90 text-white text-lg px-8 py-7 lg:px-12 lg:py-9 lg:text-xl rounded-2xl border-2 border-[#FF3B3B] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,59,59,0.6)] flex items-center gap-3 shadow-xl">
                <FaGooglePlay className="size-8 lg:size-10" />
                <div className="text-right">
                  <div className="text-xs text-white/80 lg:text-sm">הורד מ</div>
                  <div className="font-bold text-lg lg:text-xl">Google Play</div>
                </div>
              </Button>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm md:text-base text-gray-300">
            <div className="px-4 py-2 bg-white/5 rounded-full border border-[#FF3B3B]/30">
              <span>ביטוח מלא כלול</span>
            </div>
            <div className="px-4 py-2 bg-white/5 rounded-full border border-[#FF3B3B]/30">
              <span>שירות 24/7</span>
            </div>
            <div className="px-4 py-2 bg-white/5 rounded-full border border-[#FF3B3B]/30">
              <span>גרריסט בזמן אמת</span>
            </div>
          </motion.div>

          {/* Promo Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-4">
            <div className="group relative px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-all duration-300 cursor-pointer w-full max-w-2xl mx-auto text-center">
              {/* Floating Label */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0B0F1A] px-3">
                <span className="text-[#FF3B3B] text-xs font-bold tracking-widest border border-[#FF3B3B] px-2 py-0.5 rounded uppercase">
                  השקה
                </span>
              </div>

              {/* Main Text */}
              <h2 className="text-2xl md:text-3xl font-light text-white mb-1">
                השקה <span className="font-bold text-[#FF3B3B]">רשמית</span>
              </h2>
              <p className="text-gray-400 text-sm font-light">
                הטבות בלעדיות שמורות ל-100 הלקוחות הראשונים בלבד*
              </p>

              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#FF3B3B] transition-all duration-500 group-hover:w-1/3" />
            </div>
          </motion.div>

          {/* App Screens Showcase - Below Promo Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12">
            <SwipeablePhoneScreens />
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B0F1A] to-transparent z-5 pointer-events-none" />
    </section>);

}