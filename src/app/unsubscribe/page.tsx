"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, Trash2, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function UnsubscribePage() {
  const [identifier, setIdentifier] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("/api/unsubscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setIsSuccess(true);
      setIdentifier("");
    } catch (err: any) {
      setError("אירעה שגיאה בעת שליחת הבקשה. אנא נסה שנית מאוחר יותר.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#0B0F1A] text-white px-4 relative overflow-hidden" dir="rtl">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#FF3B3B]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#FF3B3B]/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-[#111625] border-[#FF3B3B]/20 shadow-[0_0_40px_rgba(255,59,59,0.05)]">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto w-12 h-12 bg-[#FF3B3B]/10 rounded-full flex items-center justify-center mb-4 text-[#FF3B3B]">
                <Trash2 size={24} />
              </div>
              <CardTitle className="text-2xl font-bold text-white">מחיקת פרטים והסרה</CardTitle>
              <CardDescription className="text-gray-400 text-base">
                הזן את כתובת האימייל או הטלפון שלך כדי למחוק את פרטיך מהמערכת.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-500/10 border border-green-500/20 rounded-lg p-6 text-center"
                >
                  <div className="mx-auto w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-3 text-green-500">
                    <CheckCircle size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-green-500 mb-1">הבקשה התקבלה בהצלחה</h3>
                  <p className="text-sm text-gray-300">
                    פרטיך ימחקו מהמערכת בהקדם האפשרי.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Input
                      type="text"
                      placeholder="אימייל או מספר טלפון"
                      required
                      value={identifier}
                      onChange={(e) => setIdentifier(e.target.value)}
                      className="bg-[#0B0F1A] border-[#FF3B3B]/20 text-white placeholder:text-gray-600 focus-visible:ring-[#FF3B3B]/50 h-12"
                    />
                  </div>

                  <Alert variant="destructive" className="bg-[#FF3B3B]/5 border-[#FF3B3B]/20 text-[#FF3B3B]">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle className="mr-2 font-bold text-sm">שים לב</AlertTitle>
                    <AlertDescription className="mr-6 text-xs text-gray-400">
                      הפעולה תמחק את כל פרטיך מהמערכת לצמיתות ולא ניתן יהיה לשחזר אותם.
                    </AlertDescription>
                  </Alert>

                  {error && (
                    <div className="text-sm text-red-500 text-center bg-red-500/10 p-2 rounded">
                      {error}
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full bg-[#FF3B3B] hover:bg-[#FF3B3B]/90 text-white font-medium h-12 text-base shadow-[0_0_20px_rgba(255,59,59,0.2)] hover:shadow-[0_0_30px_rgba(255,59,59,0.4)] transition-all"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                        מעבד בקשה...
                      </>
                    ) : (
                      "מחק אותי"
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
            <CardFooter className="justify-center pt-2 pb-6">
              <p className="text-xs text-gray-600">
                MoveUp - גרירה מהירה, בטוחה ובמחיר שקוף
              </p>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </main>
  );
}