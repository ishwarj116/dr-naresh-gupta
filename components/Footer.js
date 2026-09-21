'use client';

import Link from 'next/link';
import { useLang } from '../lib/i18n';

const T = {
  hi: {
    links: [
      { href: '/#about', label: 'परिचय' },
      { href: '/homeopathy', label: 'होम्योपैथी' },
      { href: '/medicines', label: 'औषधियाँ' },
      { href: '/#specialties', label: 'रोग व उपचार' },
      { href: '/#process', label: 'चिकित्सा-पद्धति' },
      { href: '/#faq', label: 'प्रश्न-उत्तर' },
      { href: '/#contact', label: 'संपर्क' },
      { href: '/privacy', label: 'गोपनीयता नीति' },
    ],
    certified: 'डॉ. नरेश कुमार गुप्ता, प्रमाणित एवं पंजीकृत होम्योपैथिक चिकित्सक',
    clinic: 'गुप्ता होम्योपैथिक क्लिनिक · आदर्श कॉलोनी, रामपुर (उ.प्र.) · सेक्टर 14, गुरुग्राम',
    disclaimer:
      'यह वेबसाइट केवल सामान्य जानकारी हेतु है। किसी भी रोग की चिकित्सा के लिए कृपया चिकित्सक से व्यक्तिगत परामर्श अवश्य लें।',
  },
  en: {
    links: [
      { href: '/#about', label: 'About' },
      { href: '/homeopathy', label: 'Homeopathy' },
      { href: '/medicines', label: 'Medicines' },
      { href: '/#specialties', label: 'Conditions Treated' },
      { href: '/#process', label: 'Our Approach' },
      { href: '/#faq', label: 'FAQ' },
      { href: '/#contact', label: 'Contact' },
      { href: '/privacy', label: 'Privacy Policy' },
    ],
    certified: 'Dr. Naresh Kumar Gupta, certified & registered homeopathic physician',
    clinic: 'Gupta Homeopathic Clinic · Adarsh Colony, Rampur (UP) · Sector 14, Gurugram',
    disclaimer:
      'This website is for general information only. Please consult a qualified physician in person for the treatment of any illness.',
  },
};

export default function Footer() {
  const { lang } = useLang();
  const t = T[lang];
  return (
    <footer className="footer">
      <div className="container">
        <nav className="footer-links" aria-label="Footer menu">
          {t.links.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
        </nav>
        <p className="footer-cert">{t.certified}</p>
        <p>
          © {new Date().getFullYear()} {t.clinic}
        </p>
        <p className="disclaimer">{t.disclaimer}</p>
      </div>
    </footer>
  );
}
