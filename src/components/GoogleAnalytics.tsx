"use client";

import Script from "next/script";
import { useEffect } from "react";

export default function GoogleAnalytics() {
  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (consent) {
      const prefs = JSON.parse(consent);

      // Update consent mode based on user preferences
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('consent', 'update', {
          'analytics_storage': prefs.analytics ? 'granted' : 'denied',
          'ad_storage': prefs.analytics ? 'granted' : 'denied',
          'ad_user_data': prefs.analytics ? 'granted' : 'denied',
          'ad_personalization': prefs.analytics ? 'granted' : 'denied'
        });
      }
    }
  }, []);

  return (
    <>
      <Script
        id="google-consent-init"
        strategy="beforeInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}

          // Set default consent to 'denied' as a placeholder
          gtag('consent', 'default', {
            'analytics_storage': 'denied',
            'ad_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied',
            'wait_for_update': 500
          });
        `}
      </Script>
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
        `}
      </Script>
    </>
  );
}
