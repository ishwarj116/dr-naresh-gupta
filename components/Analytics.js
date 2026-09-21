'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { analytics } from '../lib/siteConfig';

// Google tag (GA4 + Google Ads) और कॉल/WhatsApp क्लिक-कन्वर्ज़न ट्रैकिंग।
// IDs खाली हों तो कुछ भी लोड नहीं होता।
export default function Analytics() {
  const ids = [analytics.ga4, analytics.adsId].filter(Boolean);
  const primary = ids[0];

  useEffect(() => {
    if (!primary) return;
    const onClick = (e) => {
      const a = e.target && e.target.closest ? e.target.closest('a') : null;
      if (!a || typeof window.gtag !== 'function') return;
      const href = a.getAttribute('href') || '';
      if (href.startsWith('tel:')) {
        window.gtag('event', 'call_click', {
          event_category: 'contact',
          transport_type: 'beacon',
        });
        if (analytics.adsId && analytics.labels.call) {
          window.gtag('event', 'conversion', {
            send_to: `${analytics.adsId}/${analytics.labels.call}`,
          });
        }
      } else if (href.includes('wa.me')) {
        window.gtag('event', 'whatsapp_click', {
          event_category: 'contact',
          transport_type: 'beacon',
        });
        if (analytics.adsId && analytics.labels.whatsapp) {
          window.gtag('event', 'conversion', {
            send_to: `${analytics.adsId}/${analytics.labels.whatsapp}`,
          });
        }
      }
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, [primary]);

  if (!primary) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${primary}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
${ids.map((id) => `gtag('config', '${id}');`).join('\n')}`}
      </Script>
    </>
  );
}
