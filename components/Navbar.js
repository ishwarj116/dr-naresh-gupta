'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { site } from '../lib/siteConfig';
import { PhoneIcon } from './Icons';

const pages = [
  { href: '/', label: 'मुखपृष्ठ', match: 'home' },
  { href: '/homeopathy', label: 'होम्योपैथी', match: 'homeopathy' },
  { href: '/medicines', label: 'औषधियाँ', match: 'medicines' },
];

const sectionsByPage = {
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
};

export default function Navbar() {
  const pathname = usePathname() || '/';
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
            <span className="brand-name">{site.doctorName}</span>
            <span className="brand-sub">होम्योपैथिक चिकित्सक</span>
          </span>
        </Link>
        <a className="btn btn-solid topbar-call" href={`tel:${site.phone}`}>
          <PhoneIcon /> कॉल करें
        </a>
      </div>

      <nav className="subnav-wrap" aria-label="मुख्य मेन्यू">
        <div className="container subnav">
          {pages.map((p) => (
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
          {sectionsByPage[current].map((l) => (
            <Link className="pill" key={l.href + l.label} href={l.href}>
              {l.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
