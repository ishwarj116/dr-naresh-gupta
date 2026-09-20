'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { site } from '../lib/siteConfig';

const homeSections = [
  { href: '/#about', label: 'परिचय' },
  { href: '/#specialties', label: 'रोग व उपचार' },
  { href: '/#process', label: 'चिकित्सा-पद्धति' },
  { href: '/#testimonials', label: 'रोगियों के अनुभव' },
  { href: '/#faq', label: 'प्रश्न-उत्तर' },
  { href: '/#contact', label: 'संपर्क' },
];

const homeopathySections = [
  { href: '/homeopathy#hahnemann', label: 'डॉ. हानेमान' },
  { href: '/homeopathy#books', label: 'प्रमुख ग्रंथ' },
  { href: '/homeopathy#india', label: 'भारत में' },
  { href: '/homeopathy#myths', label: 'मिथक बनाम सच' },
  { href: '/#contact', label: 'संपर्क' },
];

export default function Navbar() {
  const pathname = usePathname() || '/';
  const onHomeopathy = pathname.includes('/homeopathy');
  const sections = onHomeopathy ? homeopathySections : homeSections;

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
          📞 कॉल करें
        </a>
      </div>

      <nav className="subnav-wrap" aria-label="मुख्य मेन्यू">
        <div className="container subnav">
          <Link
            className={onHomeopathy ? 'pill pill-page' : 'pill pill-page pill-active'}
            href="/"
          >
            🏠 मुखपृष्ठ
          </Link>
          <Link
            className={onHomeopathy ? 'pill pill-page pill-active' : 'pill pill-page'}
            href="/homeopathy"
          >
            📖 होम्योपैथी
          </Link>
          <span className="pill-divider" aria-hidden="true" />
          {sections.map((l) => (
            <Link className="pill" key={l.href + l.label} href={l.href}>
              {l.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
