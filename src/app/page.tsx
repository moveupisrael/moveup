import HeroSection from "@/components/HeroSection";
import dynamic from "next/dynamic";


// Lazy load components that are below the fold
const HowItWorks = dynamic(() => import("@/components/HowItWorks"));
const Benefits = dynamic(() => import("@/components/Benefits"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const ContactForm = dynamic(() => import("@/components/ContactForm"));
const Footer = dynamic(() => import("@/components/Footer"));
const CookieConsent = dynamic(() => import("@/components/CookieConsent"));

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B0F1A] via-[#151B2E] to-[#0B0F1A]">
      <HeroSection />
      <HowItWorks />
      <Benefits />
      <Testimonials />
      <ContactForm />
      <Footer />
      <CookieConsent />

    </div>
  );
}