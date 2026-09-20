'use client';

import { useState } from 'react';
import Link from 'next/link';
import { site } from '../lib/siteConfig';

const links = [
  { href: '/#about', label: 'परिचय' },
  { href: '/homeopathy', label: 'होम्योपैथी' },
  { href: '/#specialties', label: 'रोग व उपचार' },
  { href: '/#process', label: 'चिकित्सा-पद्धति' },
  { href: '/#faq', label: 'प्रश्न-उत्तर' },
  { href: '/#contact', label: 'संपर्क' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

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

        <nav className={open ? 'nav nav-open' : 'nav'} aria-label="मुख्य मेन्यू">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <a
            className="btn btn-solid nav-call-mobile"
            href={`tel:${site.phone}`}
            onClick={() => setOpen(false)}
          >
            📞 {site.phoneDisplay}
          </a>
        </nav>

        <div className="topbar-actions">
          <a className="btn btn-solid topbar-call" href={`tel:${site.phone}`}>
            📞 कॉल करें
          </a>
          <button
            type="button"
            className="nav-toggle"
            aria-label={open ? 'मेन्यू बंद करें' : 'मेन्यू खोलें'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  );
}
