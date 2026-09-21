'use client';

import Link from 'next/link';
import { site } from '../lib/siteConfig';
import { useLang } from '../lib/i18n';
import { PhoneIcon, WhatsAppIcon } from './Icons';

const T = {
  hi: {
    aboutHeading: 'डॉ. नरेश कुमार गुप्ता',
    aboutLine:
      'प्रमाणित एवं पंजीकृत होम्योपैथिक चिकित्सक। 51 वर्षों से जटिल एवं पुरानी बीमारियों की सौम्य होम्योपैथिक चिकित्सा।',
    linksHeading: 'पृष्ठ',
    links: [
      { href: '/doctor', label: 'डॉक्टर परिचय' },
      { href: '/homeopathy', label: 'होम्योपैथी क्या है' },
      { href: '/medicines', label: 'औषधियाँ' },
      { href: '/articles', label: 'स्वास्थ्य लेख' },
      { href: '/#specialties', label: 'रोग व उपचार' },
      { href: '/#faq', label: 'प्रश्न-उत्तर' },
      { href: '/privacy', label: 'गोपनीयता नीति' },
    ],
    contactHeading: 'संपर्क',
    clinics: [
      'रामपुर: राधा रोड, रोशन बाग़, SBI ADB बैंक के पास (उ.प्र.)',
      'गुरुग्राम: मकान नं. 303, सेक्टर 14 (हरियाणा)',
    ],
    hours: 'सोमवार - शनिवार: सुबह 10 - 2 · शाम 5 - 8 | रविवार अवकाश',
    clinic: 'गुप्ता होम्योपैथिक क्लिनिक',
    disclaimer:
      'यह वेबसाइट केवल सामान्य जानकारी हेतु है। किसी भी रोग की चिकित्सा के लिए कृपया चिकित्सक से व्यक्तिगत परामर्श अवश्य लें। उपचार के परिणाम रोगी की स्थिति के अनुसार भिन्न हो सकते हैं।',
  },
  en: {
    aboutHeading: 'Dr. Naresh Kumar Gupta',
    aboutLine:
      'Certified & registered homeopathic physician. Gentle homeopathic care for complex and chronic illnesses for 51 years.',
    linksHeading: 'Pages',
    links: [
      { href: '/doctor', label: 'About the Doctor' },
      { href: '/homeopathy', label: 'What is Homeopathy' },
      { href: '/medicines', label: 'Medicines' },
      { href: '/articles', label: 'Health Articles' },
      { href: '/#specialties', label: 'Conditions Treated' },
      { href: '/#faq', label: 'FAQ' },
      { href: '/privacy', label: 'Privacy Policy' },
    ],
    contactHeading: 'Contact',
    clinics: [
      'Rampur: Radha Road, Roshan Bagh, near SBI ADB Bank (UP)',
      'Gurugram: House No. 303, Sector 14 (Haryana)',
    ],
    hours: 'Mon - Sat: 10 am - 2 pm · 5 - 8 pm | Sunday closed',
    clinic: 'Gupta Homeopathic Clinic',
    disclaimer:
      'This website is for general information only. Please consult a qualified physician in person for the treatment of any illness. Treatment results vary from patient to patient.',
  },
};

export default function Footer() {
  const { lang } = useLang();
  const t = T[lang];
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-heading">{t.aboutHeading}</p>
          <p className="footer-text">{t.aboutLine}</p>
        </div>
        <nav aria-label="Footer menu">
          <p className="footer-heading">{t.linksHeading}</p>
          <ul className="footer-list">
            {t.links.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="footer-heading">{t.contactHeading}</p>
          <p className="footer-text">
            <a href={`tel:${site.phone}`} className="footer-phone">
              <PhoneIcon /> {site.phoneDisplay}
            </a>
            <br />
            <a
              href={site.waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-phone"
            >
              <WhatsAppIcon /> WhatsApp
            </a>
          </p>
          {t.clinics.map((c) => (
            <p className="footer-text" key={c.slice(0, 12)}>
              {c}
            </p>
          ))}
          <p className="footer-text">{t.hours}</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>
          © {new Date().getFullYear()} {t.clinic}
        </p>
        <p className="disclaimer">{t.disclaimer}</p>
      </div>
    </footer>
  );
}
