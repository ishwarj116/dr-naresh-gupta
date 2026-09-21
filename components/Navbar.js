'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { site } from '../lib/siteConfig';
import { useLang } from '../lib/i18n';
import { PhoneIcon } from './Icons';

const T = {
  hi: {
    brandName: 'डॉ. नरेश कुमार गुप्ता',
    brandSub: 'प्रमाणित होम्योपैथिक चिकित्सक',
    call: 'कॉल करें',
    pages: [
      { href: '/', label: 'मुखपृष्ठ', match: 'home' },
      { href: '/homeopathy', label: 'होम्योपैथी', match: 'homeopathy' },
      { href: '/medicines', label: 'औषधियाँ', match: 'medicines' },
    ],
    sections: {
      home: [
        { href: '/#about', label: 'परिचय' },
        { href: '/#specialties', label: 'रोग व उपचार' },
        { href: '/#process', label: 'चिकित्सा-पद्धति' },
        { href: '/#testimonials', label: 'रोगियों के अनुभव' },
        { href: '/#faq', label: 'प्रश्न-उत्तर' },
        { href: '/#contact', label: 'संपर्क' },
      ],
      homeopathy: [
        { href: '/homeopathy#hahnemann', label: 'डॉ. हानेमान' },
        { href: '/homeopathy#books', label: 'प्रमुख ग्रंथ' },
        { href: '/homeopathy#india', label: 'भारत में' },
        { href: '/homeopathy#myths', label: 'मिथक बनाम सच' },
        { href: '/#contact', label: 'संपर्क' },
      ],
      medicines: [
        { href: '/medicines#range', label: 'अनेक औषधियाँ' },
        { href: '/medicines#sources', label: 'स्रोत' },
        { href: '/medicines#forms', label: 'रूप' },
        { href: '/medicines#rules', label: 'दवा के नियम' },
        { href: '/#contact', label: 'संपर्क' },
      ],
    },
  },
  en: {
    brandName: 'Dr. Naresh Kumar Gupta',
    brandSub: 'Certified Homeopathic Physician',
    call: 'Call Now',
    pages: [
      { href: '/', label: 'Home', match: 'home' },
      { href: '/homeopathy', label: 'Homeopathy', match: 'homeopathy' },
      { href: '/medicines', label: 'Medicines', match: 'medicines' },
    ],
    sections: {
      home: [
        { href: '/#about', label: 'About' },
        { href: '/#specialties', label: 'Conditions' },
        { href: '/#process', label: 'Our Approach' },
        { href: '/#testimonials', label: 'Patient Stories' },
        { href: '/#faq', label: 'FAQ' },
        { href: '/#contact', label: 'Contact' },
      ],
      homeopathy: [
        { href: '/homeopathy#hahnemann', label: 'Dr. Hahnemann' },
        { href: '/homeopathy#books', label: 'Key Books' },
        { href: '/homeopathy#india', label: 'In India' },
        { href: '/homeopathy#myths', label: 'Myths & Facts' },
        { href: '/#contact', label: 'Contact' },
      ],
      medicines: [
        { href: '/medicines#range', label: 'Wide Range' },
        { href: '/medicines#sources', label: 'Sources' },
        { href: '/medicines#forms', label: 'Forms' },
        { href: '/medicines#rules', label: 'How to Take' },
        { href: '/#contact', label: 'Contact' },
      ],
    },
  },
};

export default function Navbar() {
  const pathname = usePathname() || '/';
  const { lang, setLang } = useLang();
  const t = T[lang];
  const current = pathname.includes('/homeopathy')
    ? 'homeopathy'
    : pathname.includes('/medicines')
      ? 'medicines'
      : 'home';

  return (
    <header className="topbar">
      <div className="container topbar-inner">
        <Link className="brand" href="/">
          <span className="brand-mark">ॐ</span>
          <span>
            <span className="brand-name">{t.brandName}</span>
            <span className="brand-sub">{t.brandSub}</span>
          </span>
        </Link>
        <div className="topbar-actions">
          <button
            type="button"
            className="lang-toggle"
            onClick={() => setLang(lang === 'hi' ? 'en' : 'hi')}
            aria-label={lang === 'hi' ? 'Switch to English' : 'हिन्दी में देखें'}
          >
            {lang === 'hi' ? 'English' : 'हिन्दी'}
          </button>
          <a className="btn btn-solid topbar-call" href={`tel:${site.phone}`}>
            <PhoneIcon /> {t.call}
          </a>
        </div>
      </div>

      <nav className="subnav-wrap" aria-label="Main menu">
        <div className="container subnav">
          {t.pages.map((p) => (
            <Link
              key={p.href}
              className={
                current === p.match ? 'pill pill-page pill-active' : 'pill pill-page'
              }
              href={p.href}
            >
              {p.label}
            </Link>
          ))}
          <span className="pill-divider" aria-hidden="true" />
          {t.sections[current].map((l) => (
            <Link className="pill" key={l.href + l.label} href={l.href}>
              {l.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
