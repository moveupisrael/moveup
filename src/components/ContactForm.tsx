"use client";

import { motion } from "framer-motion";
import { Mail, Phone, User, MessageSquare, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    userType: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.userType) {
      toast.error("אנא בחר סוג משתמש (גרריסט או אופנוען)", {
        duration: 4000,
        position: "top-center"
      });
      return;
    }

    if (!isAgreed) {
      toast.error("יש לאשר את תנאי השימוש ומדיניות הפרטיות", {
        duration: 4000,
        position: "top-center"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      // ✅ בדיקה רק של response.ok - מספיק להצלחה
      if (response.ok) {
        toast.success("🎉 הודעתך נשלחה בהצלחה! ניצור איתך קשר בקרוב.", {
          duration: 5000,
          position: "top-center"
        });
        setFormData({ name: "", email: "", phone: "", message: "", userType: "" });
        setIsAgreed(false);
      } else {
        toast.error(data.error || "❌ שגיאה בשליחת ההודעה. אנא נסה שוב.", {
          duration: 4000,
          position: "top-center"
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("❌ שגיאת חיבור. אנא בדוק את החיבור לאינטרנט ונסה שוב.", {
        duration: 4000,
        position: "top-center"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePhoneClick = (phone: string) => {
    const cleanPhone = phone.replace(/[^\d]/g, "");
    const whatsappUrl = `https://wa.me/972${cleanPhone.startsWith("0") ? cleanPhone.slice(1) : cleanPhone}`;

    // Handle iframe compatibility
    const isInIframe = window.self !== window.top;
    if (isInIframe) {
      window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url: whatsappUrl } }, "*");
    } else {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="contact-form" className="py-12 md:py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16">

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            צור <span className="text-[#FF3B3B] neon-glow">קשר</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400">
            נשמח לעזור ולענות על כל שאלה
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}>

          <form
            onSubmit={handleSubmit}
            className="bg-gradient-to-br from-[#1F2937]/80 to-[#151B2E]/80 backdrop-blur-lg rounded-2xl md:rounded-3xl p-6 md:p-12 border border-[#FF3B3B]/30 shadow-2xl relative overflow-hidden">

            {/* Background glow */}
            <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#FF3B3B]/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-[#FF3B3B]/10 rounded-full blur-3xl" />

            <div className="relative z-10 space-y-4 md:space-y-6">
              
              {/* User Type Selection */}
              <div className="space-y-2">
                <label className="text-white text-sm font-medium flex items-center gap-2">
                  <User className="w-4 h-4 text-[#FF3B3B]" />
                  אני...
                </label>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, userType: "Service Provider" })}
                    className={`flex-1 py-3 rounded-md border transition-all duration-300 font-medium ${
                      formData.userType === "Service Provider"
                        ? "bg-[#FF3B3B] border-[#FF3B3B] text-white shadow-[0_0_15px_rgba(255,59,59,0.5)]"
                        : "bg-[#0B0F1A]/50 border-[#FF3B3B]/30 text-gray-300 hover:bg-[#FF3B3B]/10"
                    }`}
                  >
                    אני גרריסט
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, userType: "Vehicle Owner" })}
                    className={`flex-1 py-3 rounded-md border transition-all duration-300 font-medium ${
                      formData.userType === "Vehicle Owner"
                        ? "bg-[#FF3B3B] border-[#FF3B3B] text-white shadow-[0_0_15px_rgba(255,59,59,0.5)]"
                        : "bg-[#0B0F1A]/50 border-[#FF3B3B]/30 text-gray-300 hover:bg-[#FF3B3B]/10"
                    }`}
                  >
                    אני אופנוען
                  </button>
                </div>
              </div>

              {/* Name Field */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-white text-sm font-medium flex items-center gap-2">
                  <User className="w-4 h-4 text-[#FF3B3B]" />
                  שם מלא
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="הזן את שמך המלא"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-[#0B0F1A]/50 border-[#FF3B3B]/30 text-white placeholder:text-gray-500 focus:border-[#FF3B3B] focus:ring-[#FF3B3B] transition-all duration-300 h-12 text-right"
                  required
                  disabled={isSubmitting} />

              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-white text-sm font-medium flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#FF3B3B]" />
                  אימייל
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-[#0B0F1A]/50 border-[#FF3B3B]/30 text-white placeholder:text-gray-500 focus:border-[#FF3B3B] focus:ring-[#FF3B3B] transition-all duration-300 h-12 text-right"
                  required
                  disabled={isSubmitting} />

              </div>

              {/* Phone Field */}
              <div className="space-y-2">
                <label htmlFor="phone" className="text-white text-sm font-medium flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#FF3B3B]" />
                  טלפון
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="050-0000000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-[#0B0F1A]/50 border-[#FF3B3B]/30 text-white placeholder:text-gray-500 focus:border-[#FF3B3B] focus:ring-[#FF3B3B] transition-all duration-300 h-12 text-right"
                  required
                  disabled={isSubmitting} />

              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-white text-sm font-medium flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#FF3B3B]" />
                  הודעה
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="כתוב את הודעתך כאן..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-[#0B0F1A]/50 border-[#FF3B3B]/30 text-white placeholder:text-gray-500 focus:border-[#FF3B3B] focus:ring-[#FF3B3B] transition-all duration-300 min-h-[120px] md:min-h-[150px] resize-none text-right"
                  required
                  disabled={isSubmitting} />

              </div>

              {/* Consent Checkbox */}
              <div className="flex items-start gap-2 pt-2 pb-2">
                <Checkbox 
                  id="contact-terms" 
                  checked={isAgreed}
                  onCheckedChange={(checked) => setIsAgreed(checked as boolean)}
                  className="mt-1 border-gray-500 data-[state=checked]:bg-[#FF3B3B] data-[state=checked]:border-[#FF3B3B]"
                />
                <label 
                  htmlFor="contact-terms" 
                  className="text-sm text-gray-400 leading-tight cursor-pointer select-none"
                >
                  אני מאשר/ת קבלת עדכונים מ-MoveUP בהתאם ל
                  <Link href="/privacy-policy" target="_blank" className="text-[#FF3B3B] hover:underline mx-1">
                    מדיניות הפרטיות
                  </Link>
                </label>
              </div>

              {/* Submit Button */}
              <motion.div
                whileHover={{ scale: (isSubmitting || !isAgreed) ? 1 : 1.02 }}
                whileTap={{ scale: (isSubmitting || !isAgreed) ? 1 : 0.98 }}>

                <Button
                  type="submit"
                  disabled={isSubmitting || !isAgreed}
                  className="w-full bg-[#FF3B3B] hover:bg-[#FF3B3B]/90 text-white text-base md:text-lg py-5 md:py-6 rounded-full neon-border transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:shadow-none">

                  {isSubmitting ?
                  <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      שולח...
                    </> :

                  <>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      שלח הודעה
                    </>
                  }
                </Button>
              </motion.div>
            </div>
          </form>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <motion.div
              whileHover={{ y: -5 }}
              onClick={() => handlePhoneClick("0557714690")}
              className="bg-gradient-to-br from-[#1F2937]/60 to-[#151B2E]/60 backdrop-blur-sm rounded-2xl p-6 border border-[#FF3B3B]/20 text-center cursor-pointer transition-all hover:border-[#FF3B3B]/50 hover:shadow-lg hover:shadow-[#FF3B3B]/20">

              <svg className="w-8 h-8 text-[#25D366] mx-auto mb-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <h4 className="text-white font-semibold mb-1">WhatsApp</h4>
              <p className="text-gray-400 text-sm" dir="ltr"></p>
              <p className="text-[#25D366] text-xs mt-2">לחץ לשליחת הודעה</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-[#1F2937]/60 to-[#151B2E]/60 backdrop-blur-sm rounded-2xl p-6 border border-[#FF3B3B]/20 text-center">

              <Mail className="w-8 h-8 text-[#FF3B3B] mx-auto mb-3" />
              <h4 className="text-white font-semibold mb-1">אימייל</h4>
              <p className="text-gray-400 text-sm !whitespace-pre-line">info@moveeup.co.il</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-[#1F2937]/60 to-[#151B2E]/60 backdrop-blur-sm rounded-2xl p-6 border border-[#FF3B3B]/20 text-center">

              <MessageSquare className="w-8 h-8 text-[#FF3B3B] mx-auto mb-3" />
              <h4 className="text-white font-semibold mb-1">שעות פעילות</h4>
              <p className="text-gray-400 text-sm">24/7</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>);

}