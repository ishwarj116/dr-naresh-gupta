'use client';

import { site } from '../lib/siteConfig';
import { useLang } from '../lib/i18n';
import { PhoneIcon, WhatsAppIcon } from './Icons';

const T = {
  hi: { call: 'कॉल करें', wa: 'WhatsApp' },
  en: { call: 'Call Now', wa: 'WhatsApp' },
};

export default function CallBar() {
  const { lang } = useLang();
  const t = T[lang];
  return (
    <div className="callbar">
      <a href={`tel:${site.phone}`}>
        <PhoneIcon /> {t.call}
      </a>
      <a href={site.waHref} target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon /> {t.wa}
      </a>
    </div>
  );
}
