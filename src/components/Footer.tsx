"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { FaTiktok } from "react-icons/fa";

const footerLinks = {
  company: [
  { name: "אודות", href: "#about" },
  { name: "השירות שלנו", href: "#services" },
  { name: "המלצות", href: "#testimonials" },
  { name: "צור קשר", href: "#contact-form" }],

  legal: [
  { name: "מדיניות פרטיות", href: "/privacy-policy" },
  { name: "תנאי שימוש", href: "/terms" },
  { name: "מדיניות החזרים", href: "/refund-policy" },
  { name: "הצהרת נגישות", href: "/accessibility-statement" }],

  support: [
  { name: "מרכז תמיכה", href: "#contact-form" },
  { name: "שירות לקוחות 24/7", href: "#contact-form" },
  { name: "איך זה עובד", href: "#how-it-works" }]

};

const socialLinks = [
{ icon: Facebook, href: "https://www.facebook.com/share/1SJH9LN4rn/?mibextid=wwXIfr", label: "Facebook" },
{ icon: Instagram, href: "https://www.instagram.com/moveup.israel?igsh=MW0wN3J4dGR0YnJ0eQ%3D%3D&utm_source=qr", label: "Instagram" },
{ icon: FaTiktok, href: "https://www.tiktok.com/@moveup.israel?_r=1&_t=ZS-91syJXnOkp5", label: "TikTok" }];


export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#0B0F1A] to-black border-t border-[#FF3B3B]/20">
      {/* Top decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF3B3B] to-transparent" />

      <div className="container mx-auto px-4 py-12 md:py-16 max-w-screen-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}>

              {/* Footer Logo - Unique for each screen size */}
              <div className="mb-6">
                {/* Mobile Logo (< 640px) */}
                <div className="block sm:hidden relative w-32 h-32 mx-auto md:mx-0">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/ChatGPT-Image-Oct-28-2025-09_29_13-PM-1-1762532506193.png"
                    alt="MoveUP Logo - Mobile"
                    fill
                    className="object-contain !w-full !h-[217px] !max-w-full" />
                </div>

                {/* Tablet Logo (640px - 1024px) */}
                <div className="hidden sm:block lg:hidden relative w-40 h-40 mx-auto md:mx-0">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/ChatGPT-Image-Oct-28-2025-09_29_13-PM-1-1762532506193.png"
                    alt="MoveUP Logo - Tablet"
                    fill
                    className="object-contain" />
                </div>

                {/* Desktop Logo (>= 1024px) */}
                <div className="hidden lg:block relative w-56 h-56">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/3c0eaa90-435b-42c3-b17c-2215692d066d/visual-edit-uploads/1763067946633-t98nq1l69tf.png"
                    alt="MoveUP Logo - Desktop"
                    fill
                    className="object-contain" />
                </div>
              </div>

              <p className="text-gray-400 leading-relaxed mb-6 max-w-sm !whitespace-pre-line !whitespace-pre-line">שירות דרך וגרירה מהיר ואמין לדו גלגלי בכל רחבי הארץ. זמינים 24/7 לשירותך.

              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
       
                <div className="flex items-center gap-3 text-gray-400 hover:text-[#FF3B3B] transition-colors">
                  <Mail className="w-5 h-5 text-[#FF3B3B]" />
                  <span> info@moveeup.co.il</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400 hover:text-[#FF3B3B] transition-colors">
                  <MapPin className="w-5 h-5 text-[#FF3B3B]" />
                  <span>תל אביב, ישראל</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}>

            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              החברה
              <span className="absolute bottom-0 right-0 w-1/2 h-0.5 bg-[#FF3B3B]" />
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) =>
              <li key={link.name}>
                  <a
                  href={link.href}
                  className="text-gray-400 hover:text-[#FF3B3B] transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#FF3B3B] transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              )}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}>

            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              משפטי
              <span className="absolute bottom-0 right-0 w-1/2 h-0.5 bg-[#FF3B3B]" />
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) =>
              <li key={link.name}>
                  <a
                  href={link.href}
                  className="text-gray-400 hover:text-[#FF3B3B] transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#FF3B3B] transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              )}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}>

            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              תמיכה
              <span className="absolute bottom-0 right-0 w-1/2 h-0.5 bg-[#FF3B3B]" />
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) =>
              <li key={link.name}>
                  <a
                  href={link.href}
                  className="text-gray-400 hover:text-[#FF3B3B] transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#FF3B3B] transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              )}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-[#FF3B3B]/20">

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <p className="text-gray-400 text-sm text-center md:text-right">
              © {new Date().getFullYear()} MoveUP. כל הזכויות שמורות.
              *בכפוף לתקנון
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) =>
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-[#1F2937] border border-[#FF3B3B]/30 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#FF3B3B]/20 hover:border-[#FF3B3B] transition-all duration-300"
                aria-label={social.label}>
                  <social.icon className="w-5 h-5" />
                </motion.a>
              )}
            </div>

            {/* Back to Top Button */}
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="px-8 py-3 rounded-full border-2 border-[#FF3B3B] text-[#FF3B3B] hover:bg-[#FF3B3B] hover:text-white transition-all duration-300 text-base font-bold">
              חזרה למעלה
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF3B3B]/50 to-transparent" />
    </footer>);

}