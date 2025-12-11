"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Rocket, X, Truck, Bike, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "sonner";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

export default function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    userType: "", // "Service Provider" or "Vehicle Owner"
  });

  // LocalStorage Keys
  const STORAGE_KEY = "moveup_lead_popup_seen";
  const SUBMITTED_KEY = "moveup_lead_popup_submitted";

  useEffect(() => {
    // 1. Check if user has already submitted or seen the popup recently
    const hasSubmitted = localStorage.getItem(SUBMITTED_KEY);
    const lastSeen = localStorage.getItem(STORAGE_KEY);

    if (hasSubmitted) return; // Never show if already submitted

    if (lastSeen) {
      const lastSeenDate = new Date(lastSeen);
      const now = new Date();
      const hoursDiff = (now.getTime() - lastSeenDate.getTime()) / (1000 * 60 * 60);
      
      if (hoursDiff < 24) return; // Don't show if seen in last 24h
    }

    // 2. Set timer for 8 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    // Mark as seen now (expires in 24h logic is handled by the check above)
    localStorage.setItem(STORAGE_KEY, new Date().toISOString());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isAgreed) {
      toast.error("יש לאשר את תנאי השימוש ומדיניות הפרטיות", { position: "top-center" });
      return;
    }

    if (!formData.name || !formData.phone || !formData.userType) {
      toast.error("אנא מלא את כל השדות ובחר סוג משתמש", { position: "top-center" });
      return;
    }

    setIsSubmitting(true);

    try {
      // Construct payload per specs
      const payload = {
        name: formData.name,
        phone: formData.phone,
        userType: formData.userType,
        email: "popup_lead@moveup.co.il", // Placeholder
        message: "ליד חדש מהפופאפ (המהפכה) 🚀", // Fixed message
      };

      const response = await fetch("/api/send-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("🚀 תודה! נצור איתך קשר בהקדם.", { position: "top-center" });
        localStorage.setItem(SUBMITTED_KEY, "true"); // Mark as permanently submitted
        setIsOpen(false);
      } else {
        toast.error(data.error || "שגיאה בשליחה. נסה שוב.", { position: "top-center" });
      }
    } catch (error) {
      console.error("Popup submit error:", error);
      toast.error("שגיאת תקשורת. נסה שוב.", { position: "top-center" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-md bg-[#0B0F1A] border-2 border-[#FF3B3B]/40 rounded-2xl shadow-[0_0_40px_rgba(255,59,59,0.15)] overflow-hidden">
            
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 left-4 text-gray-400 hover:text-white transition-colors z-10 p-1 hover:bg-white/10 rounded-full">
              <X className="w-5 h-5" />
            </button>

            {/* Header / Graphic */}
            <div className="bg-gradient-to-b from-[#FF3B3B]/10 to-transparent p-6 text-center pt-10">
              <div className="w-16 h-16 mx-auto bg-[#FF3B3B]/20 rounded-full flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(255,59,59,0.3)]">
                <Rocket className="w-8 h-8 text-[#FF3B3B]" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">
                אל תישארו מאחור!
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed px-4">
                המהפכה של MoveUP כבר כאן.
                <br />
                רוצים להיות הראשונים שמקבלים גישה והטבות בלעדיות?
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 pt-2 space-y-5">
              
              {/* User Type Selection */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, userType: "Service Provider" })}
                  className={`flex flex-col items-center justify-center gap-2 p-3 rounded-xl border-2 transition-all duration-300 ${
                    formData.userType === "Service Provider"
                      ? "bg-[#FF3B3B]/10 border-[#FF3B3B] text-white shadow-[0_0_10px_rgba(255,59,59,0.2)]"
                      : "bg-[#151B2E] border-transparent hover:border-[#FF3B3B]/30 text-gray-400 hover:bg-[#FF3B3B]/5"
                  }`}>
                  <Truck className={`w-6 h-6 ${formData.userType === "Service Provider" ? "text-[#FF3B3B]" : "text-gray-500"}`} />
                  <span className="text-sm font-bold">אני גרריסט</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, userType: "Vehicle Owner" })}
                  className={`flex flex-col items-center justify-center gap-2 p-3 rounded-xl border-2 transition-all duration-300 ${
                    formData.userType === "Vehicle Owner"
                      ? "bg-[#FF3B3B]/10 border-[#FF3B3B] text-white shadow-[0_0_10px_rgba(255,59,59,0.2)]"
                      : "bg-[#151B2E] border-transparent hover:border-[#FF3B3B]/30 text-gray-400 hover:bg-[#FF3B3B]/5"
                  }`}>
                  <Bike className={`w-6 h-6 ${formData.userType === "Vehicle Owner" ? "text-[#FF3B3B]" : "text-gray-500"}`} />
                  <span className="text-sm font-bold">אני אופנוען</span>
                </button>
              </div>

              {/* Inputs */}
              <div className="space-y-3">
                <div>
                  <Input
                    placeholder="שם מלא"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-[#151B2E] border-[#FF3B3B]/20 text-white placeholder:text-gray-500 focus:border-[#FF3B3B] h-11 text-right"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="טלפון נייד"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-[#151B2E] border-[#FF3B3B]/20 text-white placeholder:text-gray-500 focus:border-[#FF3B3B] h-11 text-right"
                    required
                  />
                </div>
              </div>

              {/* Consent Checkbox */}
              <div className="flex items-start gap-2 pt-2">
                <Checkbox 
                  id="popup-terms" 
                  checked={isAgreed}
                  onCheckedChange={(checked) => setIsAgreed(checked as boolean)}
                  className="mt-1 border-gray-500 data-[state=checked]:bg-[#FF3B3B] data-[state=checked]:border-[#FF3B3B]"
                />
                <label 
                  htmlFor="popup-terms" 
                  className="text-xs text-gray-400 leading-tight cursor-pointer select-none"
                >
                  אני מאשר/ת קבלת עדכונים מ-MoveUP בהתאם ל
                  <Link href="/privacy-policy" target="_blank" className="text-[#FF3B3B] hover:underline mx-1">
                    מדיניות הפרטיות
                  </Link>
                </label>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting || !isAgreed}
                className="w-full bg-[#FF3B3B] hover:bg-[#FF3B3B]/90 text-white font-bold h-12 rounded-xl text-lg shadow-[0_0_20px_rgba(255,59,59,0.4)] transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:shadow-none">
                {isSubmitting ? (
                  <span className="animate-pulse">שולח...</span>
                ) : (
                  <>
                    אני בפנים! <Send className="w-4 h-4 mr-2" />
                  </>
                )}
              </Button>
            </form>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}