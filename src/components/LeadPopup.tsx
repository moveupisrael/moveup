"use client";

import { useState, useEffect, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Rocket, X, Truck, Bike, Send, Facebook, Instagram } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "sonner";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

function LeadPopupContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
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
    // Only run this logic on the home page
    if (pathname !== "/") return;

    // 0. Check if returning from Privacy Policy (Immediate Open)
    const restorePopup = searchParams.get("restore_popup");
    if (restorePopup === "true") {
        // Even if restoring, check if already submitted
        const hasSubmitted = localStorage.getItem(SUBMITTED_KEY);
        if (!hasSubmitted) {
            setIsOpen(true);
        }
        return;
    }

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
  }, [pathname, searchParams]);

  // Prevent scrolling when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    // Mark as seen now (expires in 24h logic is handled by the check above)
    localStorage.setItem(STORAGE_KEY, new Date().toISOString());
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("היי, אשמח לשמוע פרטים נוספים על ההצטרפות ל-MoveUP 🚀");
    window.open(`https://wa.me/972557714690?text=${message}`, "_blank");
  };

  const handlePolicyClick = (e: React.MouseEvent) => {
    // Just close the popup so user can view the page
    setIsOpen(false);
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
        // Google Ads Conversion Tracking
        if (typeof window !== "undefined" && (window as any).gtag) {
          (window as any).gtag("event", "conversion", {
            send_to: "AW-17817974748/YAt8CL6thdUbENzvorBC"
          });
        }
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

  // If not on home page, don't render anything
  if (pathname !== "/" && !isOpen) return null;

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
            className="relative w-full max-w-md bg-[#0B0F1A] border-2 border-[#FF3B3B]/40 rounded-2xl shadow-[0_0_40px_rgba(255,59,59,0.15)] overflow-hidden max-h-[90vh] flex flex-col">
            
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 left-4 text-gray-400 hover:text-white transition-colors z-10 p-1 hover:bg-white/10 rounded-full">
              <X className="w-5 h-5" />
            </button>

            {/* Header / Graphic */}
            <div className="bg-gradient-to-b from-[#FF3B3B]/10 to-transparent p-4 text-center pt-8 shrink-0">
              <div className="w-12 h-12 mx-auto bg-[#FF3B3B]/20 rounded-full flex items-center justify-center mb-2 shadow-[0_0_20px_rgba(255,59,59,0.3)]">
                <Rocket className="w-6 h-6 text-[#FF3B3B]" />
              </div>
              <h2 className="text-xl font-bold text-white mb-1">
                הרשמה מוקדמת ל - 🚀 MoveUp
              </h2>
              <p className="text-gray-300 text-xs leading-relaxed px-4">
                הרשמה מוקדמת לפני השקת האפליקציה. מצטרפים עכשיו, נכנסים לקהילות ייעודיות ומקבלים הטבות, עדיפות ושימוש מוקדם באפליקציה.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-4 pt-0 space-y-3 overflow-y-auto custom-scrollbar">
              
              {/* User Type Selection */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, userType: "Service Provider" })}
                  className={`flex flex-col items-center justify-center gap-1 p-2 rounded-xl border-2 transition-all duration-300 ${
                    formData.userType === "Service Provider"
                      ? "bg-[#FF3B3B]/10 border-[#FF3B3B] text-white shadow-[0_0_10px_rgba(255,59,59,0.2)]"
                      : "bg-[#151B2E] border-transparent hover:border-[#FF3B3B]/30 text-gray-400 hover:bg-[#FF3B3B]/5"
                  }`}>
                  <Truck className={`w-5 h-5 ${formData.userType === "Service Provider" ? "text-[#FF3B3B]" : "text-gray-500"}`} />
                  <span className="text-xs font-bold">אני גרריסט</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, userType: "Vehicle Owner" })}
                  className={`flex flex-col items-center justify-center gap-1 p-2 rounded-xl border-2 transition-all duration-300 ${
                    formData.userType === "Vehicle Owner"
                      ? "bg-[#FF3B3B]/10 border-[#FF3B3B] text-white shadow-[0_0_10px_rgba(255,59,59,0.2)]"
                      : "bg-[#151B2E] border-transparent hover:border-[#FF3B3B]/30 text-gray-400 hover:bg-[#FF3B3B]/5"
                  }`}>
                  <Bike className={`w-5 h-5 ${formData.userType === "Vehicle Owner" ? "text-[#FF3B3B]" : "text-gray-500"}`} />
                  <span className="text-xs font-bold">אני לקוח</span>
                </button>
              </div>

              {/* Inputs */}
              <div className="space-y-2">
                <div>
                  <Input
                    placeholder="שם מלא"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-[#151B2E] border-[#FF3B3B]/20 text-white placeholder:text-gray-500 focus:border-[#FF3B3B] h-10 text-right text-sm"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="טלפון נייד"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-[#151B2E] border-[#FF3B3B]/20 text-white placeholder:text-gray-500 focus:border-[#FF3B3B] h-10 text-right text-sm"
                    required
                  />
                </div>
              </div>

              {/* Consent Checkbox */}
              <div className="flex items-start gap-2 pt-1">
                <Checkbox 
                  id="popup-terms" 
                  checked={isAgreed}
                  onCheckedChange={(checked) => setIsAgreed(checked as boolean)}
                  className="mt-0.5 w-3.5 h-3.5 border-gray-500 data-[state=checked]:bg-[#FF3B3B] data-[state=checked]:border-[#FF3B3B]"
                />
                <label 
                  htmlFor="popup-terms" 
                  className="text-[10px] text-gray-400 leading-tight cursor-pointer select-none text-right"
                >
                  אני מאשר/ת כי מסירת הפרטים תלויה ברצוני ובהסכמתי בלבד (לא חלה חובה חוקית). ידוע לי כי המידע יישמר במאגר החברה, ישמש ליצירת קשר, דיוור ותפעול שירות, ועשוי להיות מועבר לספקי שירות טכנולוגיים (כגון Make/WhatsApp) לצורך כך. עומדת לרשותי זכות העיון במידע וזכות לבקש את תיקונו לפי חוק הגנת הפרטיות ולפי <Link href="/privacy-policy?origin=popup" className="text-[#FF3B3B] hover:underline mx-1 relative z-10" onClick={handlePolicyClick}>מדיניות הפרטיות</Link>.
                </label>
              </div>

              {/* Disclaimer Line */}
              <div className="text-[10px] text-gray-500 text-center font-medium">
                לא שירות חירום • הרשמה מוקדמת בלבד
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting || !isAgreed}
                className="w-full bg-[#FF3B3B] hover:bg-[#FF3B3B]/90 text-white font-bold h-10 rounded-xl text-base shadow-[0_0_20px_rgba(255,59,59,0.4)] transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:shadow-none">
                {isSubmitting ? (
                  <span className="animate-pulse">שולח...</span>
                ) : (
                  <>
                    להרשמה מוקדמת <Send className="w-4 h-4 mr-2" />
                  </>
                )}
              </Button>

              {/* Social Row (WhatsApp + Socials) */}
              <div className="flex items-center gap-2 mt-2">
                {/* Compacted WhatsApp Button */}
                <button
                  type="button"
                  onClick={handleWhatsAppClick}
                  className="flex-1 flex items-center justify-center gap-2 text-xs text-gray-200 bg-[#25D366]/10 border border-[#25D366]/20 hover:bg-[#25D366]/20 hover:border-[#25D366]/40 transition-all duration-300 py-2.5 rounded-xl group"
                >
                  <svg className="w-4 h-4 fill-[#25D366] group-hover:scale-110 transition-transform" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span className="font-semibold text-white">וואטסאפ</span>
                </button>

                {/* Social Buttons */}
                <div className="flex items-center gap-2">
                  <a
                    href="https://www.facebook.com/share/1SJH9LN4rn/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#151B2E] border border-[#FF3B3B]/20 text-[#1877F2] hover:bg-[#1877F2]/10 hover:border-[#1877F2] transition-all duration-300"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/moveup.israel?igsh=MW0wN3J4dGR0YnJ0eQ%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#151B2E] border border-[#FF3B3B]/20 text-[#C13584] hover:bg-[#C13584]/10 hover:border-[#C13584] transition-all duration-300"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@moveup.israel?_r=1&_t=ZS-91syJXnOkp5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#151B2E] border border-[#FF3B3B]/20 text-[#69C9D0] hover:bg-[#69C9D0]/10 hover:border-[#69C9D0] transition-all duration-300"
                  >
                    <FaTiktok className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </form>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default function LeadPopup() {
  return (
    <Suspense fallback={null}>
      <LeadPopupContent />
    </Suspense>
  );
}
