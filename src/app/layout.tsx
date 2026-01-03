import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import { Toaster } from "@/components/ui/sonner";
import LeadPopup from "@/components/LeadPopup";

export const metadata: Metadata = {
  title: "MoveUP - אפליקציית גרירות | גרר לאופנועים | תיקון דרך",
  description: "MoveUP היא אפליקציית גרירות מהירה לאופנועים. הזמינו גרר לאופנועים, תיקון דרך לאופנועים ושירותי חילוץ בקליק. זמינות 24/7, מחיר שקוף והגעה מהירה.",
  keywords: ["אפליקציית גרירות", "גרר", "גרר לאופנועים", "תיקון דרך לאופנועים", "גרירת אופנועים", "שירותי דרך לאופנועים", "חילוץ אופנועים", "גרר אופנוע", "תיקון פנצ'ר לאופנוע"],
  authors: [{ name: "MoveUP Team" }],
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: "MoveUP - אפליקציית שירותי דרך וגרירה לאופנועים",
    description: "נתקעתם? הזמינו שירות דרך או גרירה בקליק דרך אפליקציית MoveUP. שירות מהיר 24/7.",
    type: "website",
    locale: "he_IL",
  }
};

export default function RootLayout({
  children


}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="he" dir="rtl" className="!opacity-100">
      <body className="antialiased !opacity-100">
        <GoogleAnalytics />
        <ErrorReporter />
        {/* EqualWeb Accessibility Widget */}
        <Script
          id="equalweb-widget"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
/*
Want to customize your button? visit our documentation page:
https://login.equalweb.com/custom-button
*/
window.interdeal = {
    get sitekey (){ return "343e34f3b79eac8df445d8ed53e17dba"} ,
    get domains(){
        return {
            "js": "https://cdn.equalweb.com/",
            "acc": "https://access.equalweb.com/"
        }
    },
    "Position": "left",
    "Menulang": "HE",
    "draggable": true,
    "btnStyle": {
        "vPosition": [
            "20%",
            "80%"
        ],
        "margin": [
            "0",
            "0"
        ],
        "scale": [
            "0.5",
            "0.5"
        ],
        "color": {
            "main": "#e82424",
            "second": "#ffffff"
        },
        "icon": {
            "outline": false,
            "outlineColor": "#ffffff",
            "type":  12 ,
            "shape": "semicircle"
        }
    },
                                  
};

(function(doc, head, body){
    var coreCall             = doc.createElement('script');
    coreCall.src             = window.interdeal.domains.js + 'core/5.2.0/accessibility.js';
    coreCall.defer           = true;
    coreCall.integrity       = 'sha512-fHF4rKIzByr1XeM6stpnVdiHrJUOZsKN2/Pm0jikdTQ9uZddgq15F92kUptMnyYmjIVNKeMIa67HRFnBNTOXsQ==';
    coreCall.crossOrigin     = 'anonymous';
    coreCall.setAttribute('data-cfasync', true );
    body? body.appendChild(coreCall) : head.appendChild(coreCall);
})(document, document.head, document.body);
`
          }}
        />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "MoveUP", "version": "1.0.0", "service": "גרירה מהירה"}' />

        <Script
          id="json-ld-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "SoftwareApplication",
                  "name": "MoveUP",
                  "applicationCategory": "UtilitiesApplication",
                  "operatingSystem": "iOS, Android",
                  "description": "אפליקציית גרירות מהירה להזמנת שירותי דרך וגרירה בקליק.",
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "ILS"
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.8",
                    "ratingCount": "150"
                  }
                },
                {
                  "@type": "EmergencyService",
                  "name": "MoveUP - שירותי גרירה וחילוץ",
                  "description": "שירותי גרר לאופנועים, תיקון דרך לאופנועים ושירותי חילוץ 24/7.",
                  "areaServed": {
                    "@type": "Country",
                    "name": "Israel"
                  },
                  "availableLanguage": "Hebrew",
                  "image": "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/3c0eaa90-435b-42c3-b17c-2215692d066d/visual-edit-uploads/1763070139429-cbami611nlb.png",
                  "telephone": "+972557714690",
                  "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                      "Sunday",
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday"
                    ],
                    "opens": "00:00",
                    "closes": "23:59"
                  }
                }
              ]
            })
          }}
        />

        {children}
        <Toaster />
        <LeadPopup />
        <VisualEditsMessenger />
      </body>
    </html>);


}
