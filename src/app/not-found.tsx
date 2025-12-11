"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0B0F1A] flex items-center justify-center p-4">
      <div className="text-center space-y-8 max-w-lg mx-auto">
        
        {/* Icon & Glow */}
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-[#FF3B3B]/20 blur-3xl rounded-full" />
          <div className="relative bg-[#151B2E] p-6 rounded-full border-2 border-[#FF3B3B]/30 shadow-[0_0_30px_rgba(255,59,59,0.2)]">
            <AlertTriangle className="w-16 h-16 text-[#FF3B3B]" />
          </div>
        </div>

        {/* Text */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            404
          </h1>
          <h2 className="text-2xl font-semibold text-gray-200">
            העמוד לא נמצא
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            נראה שהגעתם לדרך ללא מוצא. <br />
            העמוד שחיפשתם הועבר, נמחק או שמעולם לא היה קיים.
          </p>
        </div>

        {/* Action */}
        <Link href="/">
          <Button 
            className="bg-[#FF3B3B] hover:bg-[#FF3B3B]/90 text-white px-8 py-6 text-lg rounded-xl shadow-[0_0_20px_rgba(255,59,59,0.4)] transition-all hover:scale-105"
          >
            <Home className="w-5 h-5 ml-2" />
            חזרה לדף הבית
          </Button>
        </Link>

      </div>
    </div>
  );
}
