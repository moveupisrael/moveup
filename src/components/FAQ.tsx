"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Users, User, Truck, HelpCircle } from "lucide-react";
import { useState } from "react";
import { faqCategories } from "@/data/faqData";

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "users":
        return Users;
      case "user":
        return User;
      case "truck":
        return Truck;
      default:
        return HelpCircle;
    }
  };

  return (
    <section id="faq" className="py-16 md:py-24 px-4 relative overflow-hidden bg-gradient-to-b from-[#151B2E] via-[#0B0F1A] to-[#151B2E]">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#FF3B3B]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#FF3B3B]/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block mb-4">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#FF3B3B] to-[#CC2E2E] rounded-2xl flex items-center justify-center shadow-xl shadow-[#FF3B3B]/50">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            שאלות <span className="text-[#FF3B3B] neon-glow">ותשובות</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            כל מה שרצית לדעת על MoveUp – לפני השקת האפליקציה
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row gap-4 mb-12 justify-center">
          {faqCategories.map((category, index) => {
            const Icon = getIcon(category.icon);
            return (
              <motion.button
                key={index}
                onClick={() => {
                  setActiveCategory(index);
                  setOpenQuestion(null);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  activeCategory === index
                    ? "bg-gradient-to-r from-[#FF3B3B] to-[#CC2E2E] text-white shadow-xl shadow-[#FF3B3B]/50"
                    : "bg-[#1F2937]/60 text-gray-400 hover:bg-[#1F2937] hover:text-white border border-[#FF3B3B]/20"
                }`}>
                <Icon className="w-5 h-5" />
                <span className="text-sm md:text-base">{category.title}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Category Description */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="text-center mb-8">
            <p className="text-gray-400 text-base md:text-lg">
              {faqCategories[activeCategory].description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* FAQ Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="space-y-4">
            {faqCategories[activeCategory].items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#1F2937]/80 to-[#151B2E]/80 backdrop-blur-lg rounded-2xl border border-[#FF3B3B]/20 overflow-hidden hover:border-[#FF3B3B]/40 transition-all duration-300">
                {/* Question */}
                <button
                  onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-right group">
                  <span className="text-white font-semibold text-base md:text-lg flex-1 group-hover:text-[#FF3B3B] transition-colors">
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openQuestion === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}>
                    <ChevronDown className={`w-6 h-6 ${openQuestion === index ? "text-[#FF3B3B]" : "text-gray-400"} group-hover:text-[#FF3B3B] transition-colors`} />
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {openQuestion === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}>
                      <div className="px-6 pb-5 pt-2 border-t border-[#FF3B3B]/10">
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed whitespace-pre-line">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center">
          <div className="bg-gradient-to-br from-[#FF3B3B]/10 to-[#CC2E2E]/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-[#FF3B3B]/30 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#FF3B3B]/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#FF3B3B]/20 rounded-full blur-3xl" />

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                לא מצאת את מה שחיפשת?
              </h3>
              <p className="text-gray-400 text-base md:text-lg mb-6">
                צוות התמיכה שלנו זמין 24/7 לענות על כל שאלה
              </p>
              <motion.a
                href="/#contact-form"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#FF3B3B] to-[#CC2E2E] text-white font-bold rounded-full shadow-xl shadow-[#FF3B3B]/50 hover:shadow-2xl hover:shadow-[#FF3B3B]/60 transition-all duration-300">
                <span>צור קשר</span>
                <motion.span
                  animate={{ x: [0, -5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}>
                  ←
                </motion.span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}