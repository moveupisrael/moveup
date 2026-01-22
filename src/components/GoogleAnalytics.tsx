"use client";

import Script from "next/script";
import { useState, useEffect } from "react";

export default function GoogleAnalytics() {
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (consent) {
      const prefs = JSON.parse(consent);
      if (prefs.analytics) {
        setConsentGiven(true);
      }
    }
  }, []);

  if (!consentGiven) return null;

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-ZE52X70Z57"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-ZE52X70Z57');
                  `}</Script>
    </>
  );
}
