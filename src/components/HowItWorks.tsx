"use client";

import { motion } from "framer-motion";
import { Smartphone, MapPin, Truck, UserPlus, Menu, Search } from "lucide-react";
import { howItWorksSteps } from "@/data/howItWorksSteps";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 px-4 relative overflow-hidden bg-gradient-to-b from-[#0B0F1A] via-[#151B2E] to-[#0B0F1A]">
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12">

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            איך זה <span className="text-[#FF3B3B] neon-glow">עובד?</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400">
            שישה צעדים פשוטים לשירות גרירה מהיר
          </p>
        </motion.div>

        {/* Vertical Curved Line - Desktop (Connects all 6 steps) */}
        <div className="hidden lg:block absolute left-1/2 top-[200px] -translate-x-1/2 pointer-events-none z-0" style={{ height: 'calc(100% - 250px)' }}>
          <svg className="w-[600px] h-full" preserveAspectRatio="none" viewBox="0 0 600 1000">
            {/* Main vertical curved path - YOUR EXACT PATH */}
            <motion.path
              d="M 300,0 Q 50,170 300,330 Q 550,500 300,670 Q 50,835 300,1000"
              stroke="url(#lineGradient)"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.8 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 2.5, ease: "easeInOut" }} />

            
            {/* Animated glow effect following the curved path */}
            <motion.path
              d="M 300,0 Q 50,170 300,330 Q 550,500 300,670 Q 50,835 300,1000"
              stroke="#FF3B3B"
              strokeWidth="12"
              strokeLinecap="round"
              fill="none"
              filter="blur(8px)"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.4 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 2.5, ease: "easeInOut", delay: 0.2 }} />

            
            {/* Electric Energy Flow - Moving along the vertical path */}
            <motion.circle
              r="6"
              fill="#FFE600"
              filter="blur(4px)"
              animate={{
                offsetDistance: ["0%", "100%"],
                opacity: [0, 1, 1, 0.5, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                offsetPath: "path('M 300,0 Q 50,170 300,330 Q 550,500 300,670 Q 50,835 300,1000')"
              }} />

            
            {/* Electric Spark Effect 1 - Follows vertical curved path */}
            <motion.circle
              r="5"
              fill="#FFE600"
              filter="blur(3px)"
              animate={{
                offsetDistance: ["0%", "100%"],
                opacity: [0, 0.8, 1, 0.6, 0]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: 0.5,
                ease: "linear"
              }}
              style={{
                offsetPath: "path('M 300,0 Q 50,170 300,330 Q 550,500 300,670 Q 50,835 300,1000')"
              }} />

            
            {/* Electric Spark Effect 2 - Red sparks */}
            <motion.circle
              r="4"
              fill="#FF3B3B"
              filter="blur(3px)"
              animate={{
                offsetDistance: ["10%", "110%"],
                opacity: [0, 0.9, 0.7, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 1,
                ease: "linear"
              }}
              style={{
                offsetPath: "path('M 300,0 Q 50,170 300,330 Q 550,500 300,670 Q 50,835 300,1000')"
              }} />

            
            {/* Additional white energy pulse */}
            <motion.circle
              r="3"
              fill="#FFFFFF"
              filter="blur(2px)"
              animate={{
                offsetDistance: ["5%", "105%"],
                opacity: [0, 0.6, 0.4, 0]
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                delay: 1.5,
                ease: "linear"
              }}
              style={{
                offsetPath: "path('M 300,0 Q 50,170 300,330 Q 550,500 300,670 Q 50,835 300,1000')"
              }} />

            
            {/* Pulsating outer glow */}
            <motion.path
              d="M 300,0 Q 50,170 300,330 Q 550,500 300,670 Q 50,835 300,1000"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              animate={{
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }} />

            
            {/* Gradient definition */}
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FF3B3B" stopOpacity="0.9" />
                <stop offset="25%" stopColor="#FF6B6B" stopOpacity="0.7" />
                <stop offset="50%" stopColor="#FF3B3B" stopOpacity="0.9" />
                <stop offset="75%" stopColor="#FF6B6B" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#FF3B3B" stopOpacity="0.9" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Steps Layout */}
        <div className="relative space-y-20 lg:space-y-32">
          {howItWorksSteps.map((step, index) => {
            const isEven = index % 2 === 0;
            const screenIndex = index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`
                }>

                {/* Phone Mockup with Pop Animation */}
                <motion.div
                  initial={{ scale: 0, rotateY: isEven ? -180 : 180 }}
                  whileInView={{ scale: 1, rotateY: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1 + 0.2,
                    type: "spring",
                    stiffness: 200,
                    damping: 20
                  }}
                  whileHover={{ scale: 1.05, rotateY: isEven ? 5 : -5 }}
                  className="relative w-[220px] h-[440px] flex-shrink-0"
                  style={{ perspective: 1000 }}>

                  {/* Phone Frame */}
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black rounded-[2.5rem] shadow-2xl border-4 border-gray-800 overflow-hidden">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-b-3xl z-20" />
                    
                    {/* Screen Content */}
                    <div className="absolute inset-2 bg-gradient-to-b from-[#0B0F1A] to-[#151B2E] rounded-[2rem] overflow-hidden">
                      {/* Step 1: Splash Screen */}
                      {screenIndex === 0 &&
                      <div className="w-full h-full flex flex-col items-center justify-center p-6 relative">
                          <motion.div
                          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                          transition={{ duration: 3, repeat: Infinity }}
                          className="absolute inset-0 bg-[#FF3B3B] blur-3xl" />

                          
                          <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.5, type: "spring" }}
                          className="relative z-10 mb-6">

                            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#FF3B3B] to-[#CC2E2E] flex items-center justify-center shadow-xl shadow-[#FF3B3B]/50">
                              <Smartphone className="w-10 h-10 text-white" strokeWidth={2} />
                            </div>
                          </motion.div>
                          
                          <motion.h3
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.7 }}
                          className="text-2xl font-bold text-white mb-2 relative z-10">

                            MoveUP
                          </motion.h3>
                          
                          <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.9 }}
                          className="text-[#FF3B3B] text-xs font-medium relative z-10">

                            גרירת אופנועים מהירה
                          </motion.p>
                          
                          <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.1 }}
                          className="mt-10 relative z-10">

                            <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-7 h-7 border-3 border-[#FF3B3B] border-t-transparent rounded-full" />

                          </motion.div>
                        </div>
                      }
                      
                      {/* Step 2: Login/Register */}
                      {screenIndex === 1 &&
                      <div className="w-full h-full flex flex-col p-5 relative">
                          <div className="flex-1 flex flex-col justify-center">
                            <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-center mb-6">

                              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-[#FF3B3B]/20 flex items-center justify-center">
                                <UserPlus className="w-8 h-8 text-[#FF3B3B]" />
                              </div>
                              <h3 className="text-white font-bold text-lg mb-1">ברוכים הבאים</h3>
                              <p className="text-gray-400 text-xs">הירשם כדי להמשיך</p>
                            </motion.div>
                            
                            <div className="space-y-3">
                              <div className="h-10 bg-[#1a2332] rounded-xl border border-[#FF3B3B]/30 flex items-center px-3">
                                <div className="text-gray-500 text-xs">שם מלא</div>
                              </div>
                              <div className="h-10 bg-[#1a2332] rounded-xl border border-[#FF3B3B]/30 flex items-center px-3">
                                <div className="text-gray-500 text-xs">מספר טלפון</div>
                              </div>
                              <motion.button
                              whileHover={{ scale: 1.02 }}
                              className="w-full h-11 bg-[#FF3B3B] text-white rounded-xl font-bold text-sm shadow-lg shadow-[#FF3B3B]/30">

                                המשך
                              </motion.button>
                            </div>
                          </div>
                          
                          <div className="text-center text-xs text-gray-500 pb-2">
                            כבר רשום? <span className="text-[#FF3B3B]">התחבר</span>
                          </div>
                        </div>
                      }
                      
                      {/* Step 3: Main Menu */}
                      {screenIndex === 2 &&
                      <div className="w-full h-full flex flex-col">
                          <div className="p-4 bg-[#0B0F1A]/90 backdrop-blur border-b border-[#FF3B3B]/20">
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="text-white font-bold text-sm">שלום, משתמש</div>
                                <div className="text-gray-400 text-xs">איזה שירות תרצה?</div>
                              </div>
                              <Menu className="w-5 h-5 text-[#FF3B3B]" />
                            </div>
                          </div>
                          
                          <div className="flex-1 p-4 space-y-3">
                            <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="p-4 bg-gradient-to-br from-[#FF3B3B] to-[#CC2E2E] rounded-2xl shadow-lg shadow-[#FF3B3B]/30">

                              <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                                  <Truck className="w-6 h-6 text-white" />
                                </div>
                                <div className="flex-1 text-right">
                                  <div className="text-white font-bold text-sm">גרירת אופנוע</div>
                                  <div className="text-white/70 text-xs">30 דקות הגעה</div>
                                </div>
                              </div>
                            </motion.div>
                            
                            <div className="p-4 bg-[#1a2332] rounded-2xl border border-[#FF3B3B]/20">
                              <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-xl bg-[#FF3B3B]/20 flex items-center justify-center">
                                  <MapPin className="w-6 h-6 text-[#FF3B3B]" />
                                </div>
                                <div className="flex-1 text-right">
                                  <div className="text-white font-bold text-sm">שירותי דרך</div>
                                  <div className="text-gray-400 text-xs">עזרה במקום</div>
                                </div>
                              </div>
                            </div>
                            
                            <div className="p-4 bg-[#1a2332] rounded-2xl border border-[#FF3B3B]/20">
                              <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-xl bg-[#FF3B3B]/20 flex items-center justify-center">
                                  <Smartphone className="w-6 h-6 text-[#FF3B3B]" />
                                </div>
                                <div className="flex-1 text-right">
                                  <div className="text-white font-bold text-sm">צור קשר</div>
                                  <div className="text-gray-400 text-xs">שירות לקוחות</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      }
                      
                      {/* Step 4: Location Picker */}
                      {screenIndex === 3 &&
                      <div className="w-full h-full relative">
                          <div className="absolute inset-0 opacity-30">
                            <div className="w-full h-full bg-[#1a2332]" style={{
                            backgroundImage: `
                                linear-gradient(rgba(255,59,59,0.1) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(255,59,59,0.1) 1px, transparent 1px)
                              `,
                            backgroundSize: '30px 30px'
                          }} />
                          </div>
                          
                          <div className="absolute inset-0 flex flex-col">
                            <div className="p-3 bg-[#0B0F1A]/90 backdrop-blur">
                              <div className="text-white font-medium text-xs">בחר מיקום</div>
                            </div>
                            
                            <div className="flex-1 relative flex items-center justify-center">
                              <motion.div
                              animate={{ scale: [1, 2, 2], opacity: [0.5, 0, 0] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="absolute w-16 h-16 rounded-full bg-[#FF3B3B]" />

                              <motion.div
                              animate={{ scale: [1, 1.5, 1.5], opacity: [0.5, 0, 0] }}
                              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                              className="absolute w-16 h-16 rounded-full bg-[#FF3B3B]" />

                              
                              <motion.div
                              animate={{ y: [0, -8, 0] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="relative z-10">

                                <MapPin className="w-10 h-10 text-[#FF3B3B] drop-shadow-[0_0_10px_rgba(255,59,59,0.8)]" fill="#FF3B3B" />
                              </motion.div>
                            </div>
                            
                            <div className="p-3">
                              <motion.button
                              whileHover={{ scale: 1.02 }}
                              className="w-full py-3 bg-[#FF3B3B] text-white rounded-xl font-bold text-xs shadow-lg shadow-[#FF3B3B]/30">

                                אישור מיקום
                              </motion.button>
                            </div>
                          </div>
                        </div>
                      }
                      
                      {/* Step 5: Searching/Radar */}
                      {screenIndex === 4 &&
                      <div className="w-full h-full flex flex-col items-center justify-center p-5 relative">
                          <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                          className="relative mb-6">

                            <div className="w-32 h-32 rounded-full border-4 border-[#FF3B3B]/30 relative">
                              <motion.div
                              animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.3, 0.7, 0.3] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="absolute inset-0 rounded-full bg-[#FF3B3B] blur-xl" />

                              <div className="absolute inset-0 flex items-center justify-center">
                                <Search className="w-12 h-12 text-[#FF3B3B]" />
                              </div>
                            </div>
                            
                            <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0"
                            style={{ transformOrigin: "center" }}>

                              <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#FF3B3B] to-transparent absolute top-1/2 left-0" />
                            </motion.div>
                          </motion.div>
                          
                          <motion.h3
                          animate={{ opacity: [1, 0.5, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          className="text-white font-bold text-base mb-2">

                            מחפש גרר זמין...
                          </motion.h3>
                          
                          <p className="text-gray-400 text-xs text-center">
                            אנחנו מאתרים את הגרר<br />הקרוב ביותר אליך
                          </p>
                          
                          <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1 }}
                          className="mt-6 flex items-center gap-2">

                            <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 0.8, repeat: Infinity, delay: 0 }}
                            className="w-2 h-2 rounded-full bg-[#FF3B3B]" />

                            <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
                            className="w-2 h-2 rounded-full bg-[#FF3B3B]" />

                            <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }}
                            className="w-2 h-2 rounded-full bg-[#FF3B3B]" />

                          </motion.div>
                        </div>
                      }
                      
                      {/* Step 6: Tracking */}
                      {screenIndex === 5 &&
                      <div className="w-full h-full relative">
                          <div className="absolute inset-0 opacity-20">
                            <div className="w-full h-full bg-[#1a2332]" style={{
                            backgroundImage: `
                                linear-gradient(rgba(255,59,59,0.1) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(255,59,59,0.1) 1px, transparent 1px)
                              `,
                            backgroundSize: '30px 30px'
                          }} />
                          </div>
                          
                          <div className="absolute inset-0 flex flex-col">
                            <div className="m-3 p-3 bg-[#0B0F1A]/90 backdrop-blur rounded-xl border border-[#FF3B3B]/30">
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-8 h-8 rounded-full bg-[#FF3B3B] flex items-center justify-center">
                                  <Truck className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                  <div className="text-white font-bold text-xs">הגרר בדרך</div>
                                  <div className="text-gray-400 text-[10px]">15-20 דקות</div>
                                </div>
                              </div>
                              
                              <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                                <motion.div
                                initial={{ width: "0%" }}
                                animate={{ width: "60%" }}
                                transition={{ duration: 2, delay: 0.5 }}
                                className="h-full bg-gradient-to-r from-[#FF3B3B] to-[#FF6B6B]" />

                              </div>
                            </div>
                            
                            <div className="flex-1 relative flex items-center justify-center">
                              <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
                                <motion.path
                                d="M 40,160 Q 100,80 160,120"
                                stroke="#FF3B3B"
                                strokeWidth="2"
                                fill="none"
                                strokeDasharray="4,4"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 2, delay: 0.3 }} />

                              </svg>
                              
                              <div className="absolute top-1/4 right-1/4">
                                <MapPin className="w-8 h-8 text-blue-500" fill="#3B82F6" />
                              </div>
                              
                              <motion.div
                              animate={{
                                x: [0, 30, 60],
                                y: [0, -20, -5]
                              }}
                              transition={{ duration: 3, repeat: Infinity }}
                              className="absolute bottom-1/3 left-1/4">

                                <div className="w-10 h-10 rounded-full bg-[#FF3B3B] flex items-center justify-center shadow-lg shadow-[#FF3B3B]/50">
                                  <Truck className="w-5 h-5 text-white" />
                                </div>
                              </motion.div>
                            </div>
                            
                            <div className="p-3">
                              <div className="text-center text-xs text-gray-400">
                                הגרר בדרך למיקומך
                              </div>
                            </div>
                          </div>
                        </div>
                      }
                    </div>
                  </div>
                  
                  {/* Animated glow */}
                  <motion.div
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    className="absolute inset-0 rounded-[2.5rem] bg-[#FF3B3B] blur-xl -z-10" />

                  
                  {/* Step number badge */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1 + 0.3,
                      type: "spring",
                      stiffness: 200
                    }}
                    className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-white flex items-center justify-center z-30 shadow-xl">

                    <span className="text-[#FF3B3B] font-bold text-xl">{step.step}</span>
                  </motion.div>
                </motion.div>

                {/* Text Content */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
                  className={`flex-1 text-right lg:text-${isEven ? 'right' : 'left'}`}>

                  <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-400 text-lg md:text-xl leading-relaxed whitespace-pre-line text-right">
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>);

          })}
        </div>
      </div>
    </section>);

}