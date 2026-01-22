"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, Settings, Shield, Eye } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  accessibility: boolean;
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always enabled
    analytics: false,
    marketing: false,
    accessibility: true,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Delay showing banner by 1 second for better UX
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      accessibility: true,
    };
    savePreferences(allAccepted);
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    const onlyNecessary: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      accessibility: true,
    };
    savePreferences(onlyNecessary);
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    savePreferences(preferences);
    setShowBanner(false);
    setShowSettings(false);
  };

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem("cookie-consent", JSON.stringify(prefs));
    localStorage.setItem("cookie-consent-date", new Date().toISOString());

    // Update Google Consent Mode
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        'analytics_storage': prefs.analytics ? 'granted' : 'denied',
        'ad_storage': prefs.analytics ? 'granted' : 'denied',
        'ad_user_data': prefs.analytics ? 'granted' : 'denied',
        'ad_personalization': prefs.marketing ? 'granted' : 'denied'
      });
    }

    // Apply accessibility preferences
    if (prefs.accessibility) {
      document.documentElement.setAttribute("data-accessibility-enabled", "true");
    }
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === "necessary") return; // Can't disable necessary cookies
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <>
          {/* Miniature Banner (Only shown if NOT in settings mode) */}
          {!showSettings && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="fixed z-[50] 
                bottom-0 left-0 w-full md:w-auto md:bottom-4 md:right-4 
                bg-[#0B0F1A]/95 backdrop-blur-md border-t md:border border-[#FF3B3B]/20 
                rounded-t-xl md:rounded-xl shadow-2xl overflow-hidden md:max-w-[320px]"
              role="dialog"
              aria-label="הודעת עוגיות">
              
              <div className="p-3 md:p-4 flex flex-row items-center justify-between gap-3 md:gap-4 md:flex-col md:items-stretch">
                
                {/* Text Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <Cookie className="w-4 h-4 text-[#FF3B3B]" />
                    <span className="text-sm font-bold text-white">עוגיות</span>
                  </div>
                  <p className="text-xs text-gray-400 leading-tight line-clamp-2 md:line-clamp-none">
                    אנו משתמשים בעוגיות לשיפור החוויה שלך. למידע נוסף: <Link href="/privacy-policy" className="underline hover:text-[#FF3B3B]">מדיניות פרטיות</Link>.
                  </p>
                  <button 
                    onClick={() => setShowSettings(true)}
                    className="text-[10px] text-gray-500 underline mt-1 hover:text-[#FF3B3B] transition-colors md:hidden">
                    הגדרות
                  </button>
                </div>

                {/* Actions */}
                <div className="flex flex-row items-center gap-2 flex-shrink-0">
                  
                  {/* Desktop: Settings Link */}
                  <button 
                    onClick={() => setShowSettings(true)}
                    className="hidden md:block text-xs text-gray-500 hover:text-white transition-colors underline decoration-dotted">
                    הגדרות
                  </button>

                  <Button
                    onClick={handleAcceptAll}
                    size="sm"
                    className="h-8 px-3 bg-[#FF3B3B] hover:bg-[#FF3B3B]/90 text-white text-xs font-bold rounded-lg transition-all shadow-[0_0_10px_rgba(255,59,59,0.2)]">
                    אשר הכל
                  </Button>
                  
                  <Button
                    onClick={handleRejectAll}
                    variant="outline"
                    size="sm"
                    className="h-8 px-3 bg-transparent border-white/20 text-gray-300 hover:text-white hover:bg-white/10 text-xs font-normal rounded-lg">
                    דחה הכל
                  </Button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Settings Modal (Centered Overlay) */}
          {showSettings && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
              
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="w-full max-w-lg bg-[#0B0F1A] border border-[#FF3B3B]/30 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
                
                {/* Header */}
                <div className="p-4 border-b border-white/10 flex items-center justify-between bg-[#151B2E]">
                  <h2 className="text-lg font-bold text-white flex items-center gap-2">
                    <Settings className="w-5 h-5 text-[#FF3B3B]" />
                    הגדרות עוגיות
                  </h2>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowSettings(false)}
                    className="h-8 w-8 text-gray-400 hover:text-white rounded-full">
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                {/* Content */}
                <div className="p-4 overflow-y-auto space-y-3 custom-scrollbar">
                  <p className="text-sm text-gray-400 mb-4">
                    בחרו אילו עוגיות תרצו לאשר. לפרטים נוספים עיינו ב<Link href="/privacy-policy" className="text-[#FF3B3B] hover:underline">מדיניות הפרטיות</Link>. עוגיות חיוניות תמיד פעילות.
                  </p>

                  {/* Options */}
                  {[
                    { key: 'necessary', label: 'חיוניות', icon: Shield, desc: 'נדרש לתפעול האתר', active: true, disabled: true },
                    { key: 'accessibility', label: 'נגישות', icon: Eye, desc: 'שיפור חווית שימוש', active: preferences.accessibility },
                    { key: 'analytics', label: 'אנליטיקס', icon: Eye, desc: 'ניתוח שימוש באתר', active: preferences.analytics },
                    { key: 'marketing', label: 'שיווק', icon: Eye, desc: 'התאמת תוכן שיווקי', active: preferences.marketing },
                  ].map((item) => (
                    <div key={item.key} className="bg-white/5 rounded-lg p-3 border border-white/5 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <item.icon className={`w-5 h-5 ${item.key === 'necessary' ? 'text-green-500' : 'text-gray-400'}`} />
                        <div>
                          <div className="text-sm font-medium text-white">{item.label}</div>
                          <div className="text-xs text-gray-500">{item.desc}</div>
                        </div>
                      </div>
                      
                      {item.disabled ? (
                         <div className="text-[10px] bg-green-500/20 text-green-400 px-2 py-1 rounded border border-green-500/30">
                           תמיד פעיל
                         </div>
                      ) : (
                        <button
                          onClick={() => togglePreference(item.key as keyof CookiePreferences)}
                          className={`relative w-10 h-6 rounded-full transition-colors duration-300 ${
                            item.active ? "bg-[#FF3B3B]" : "bg-gray-700"
                          }`}>
                          <span className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
                            item.active ? "translate-x-4" : ""
                          }`} />
                        </button>
                      )}
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-white/10 bg-[#151B2E] flex gap-3 flex-wrap">
                   <Button
                    onClick={handleSavePreferences}
                    className="flex-1 bg-[#FF3B3B] hover:bg-[#FF3B3B]/90 text-white h-10 rounded-lg text-sm min-w-[100px]">
                    שמור בחירות
                  </Button>
                  <Button
                    onClick={handleAcceptAll}
                    variant="outline"
                    className="flex-1 bg-transparent border-white/20 text-white hover:bg-white/5 h-10 rounded-lg text-sm min-w-[100px]">
                    אשר הכל
                  </Button>
                  <Button
                    onClick={handleRejectAll}
                    variant="ghost"
                    className="flex-1 text-gray-400 hover:text-white hover:bg-white/5 h-10 rounded-lg text-sm min-w-[100px]">
                    דחה הכל
                  </Button>
                </div>

              </motion.div>
            </motion.div>
          )}
        </>
      )}
    </AnimatePresence>
  );
}