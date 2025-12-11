"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaWhatsapp, FaArrowRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function JoinWaitlistPage() {
  const whatsappNumber = "972557714690";
  const message = encodeURIComponent("היי MoveUp, אשמח לקבל עדכון כשהאפליקציה עולה לאוויר!");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#0B0F1A] text-white px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#FF3B3B]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#FF3B3B]/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-2xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Icon or Logo Placeholder could go here */}
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            אנחנו כבר <span className="text-[#FF3B3B]">כמעט שם...</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-lg mx-auto">
            האפליקציה בשלבי סיום ועולה לאוויר בקרוב. הצטרפו לרשימת ההמתנה וקבלו עדכון אישי בוואטסאפ ברגע שאנחנו באוויר.
          </p>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <Button
              asChild
              className="bg-[#25D366] hover:bg-[#25D366]/90 text-white text-lg px-8 py-8 md:px-10 md:py-8 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] transition-all duration-300 border border-[#25D366]/50"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                <FaWhatsapp className="w-7 h-7" />
                <span className="font-semibold">עדכנו אותי בוואטסאפ</span>
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-16"
        >
            <Link 
                href="/"
                className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors duration-300 text-sm font-medium group"
            >
                <FaArrowRight className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                חזרה לדף הבית
            </Link>
        </motion.div>
      </div>
    </main>
  );
}
