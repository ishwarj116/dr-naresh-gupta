'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { site } from '../lib/siteConfig';
import { useLang } from '../lib/i18n';
import { PhoneIcon, WhatsAppIcon } from './Icons';

const T = {
  hi: {
    brandName: 'डॉ. नरेश कुमार गुप्ता',
    brandSub: 'प्रमाणित होम्योपैथिक चिकित्सक',
    call: 'कॉल करें',
    menuOpen: 'मेन्यू खोलें',
    menuClose: 'मेन्यू बंद करें',
    links: [
      { href: '/', label: 'मुखपृष्ठ', match: 'home' },
      { href: '/homeopathy', label: 'होम्योपैथी', match: 'homeopathy' },
      { href: '/medicines', label: 'औषधियाँ', match: 'medicines' },
      { href: '/#specialties', label: 'रोग व उपचार' },
      { href: '/#testimonials', label: 'रोगियों के अनुभव' },
      { href: '/#contact', label: 'संपर्क' },
    ],
  },
  en: {
    brandName: 'Dr. Naresh Kumar Gupta',
    brandSub: 'Certified Homeopathic Physician',
    call: 'Call Now',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    links: [
      { href: '/', label: 'Home', match: 'home' },
      { href: '/homeopathy', label: 'Homeopathy', match: 'homeopathy' },
      { href: '/medicines', label: 'Medicines', match: 'medicines' },
      { href: '/#specialties', label: 'Conditions' },
      { href: '/#testimonials', label: 'Patient Stories' },
      { href: '/#contact', label: 'Contact' },
    ],
  },
};

export default function Navbar() {
  const pathname = usePathname() || '/';
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const t = T[lang];
  const current = pathname.includes('/homeopathy')
    ? 'homeopathy'
    : pathname.includes('/medicines')
      ? 'medicines'
      : pathname.includes('/privacy')
        ? 'privacy'
        : 'home';

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  const navLinks = (extraClass = '') =>
    t.links.map((l) => (
      <Link
        key={l.href}
        className={
          l.match && l.match === current
            ? `${extraClass} nav-link nav-active`
            : `${extraClass} nav-link`
        }
        href={l.href}
        onClick={close}
      >
        {l.label}
      </Link>
    ));

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

        <nav className="nav-desktop" aria-label="Main menu">
          {navLinks()}
        </nav>

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
          <button
            type="button"
            className={open ? 'nav-burger is-open' : 'nav-burger'}
            aria-label={open ? t.menuClose : t.menuOpen}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div
        className={open ? 'drawer-backdrop open' : 'drawer-backdrop'}
        onClick={close}
        aria-hidden="true"
      />
      <aside className={open ? 'drawer open' : 'drawer'} aria-label="Menu">
        <div className="drawer-head">
          <span className="brand-mark">ॐ</span>
          <button
            type="button"
            className="drawer-close"
            aria-label={t.menuClose}
            onClick={close}
          >
            ✕
          </button>
        </div>
        <nav className="drawer-nav" aria-label="Menu links">
          {navLinks('drawer-link')}
        </nav>
        <div className="drawer-cta">
          <a className="btn btn-solid" href={`tel:${site.phone}`} onClick={close}>
            <PhoneIcon /> {t.call}
          </a>
          <a
            className="btn btn-outline"
            href={site.waHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
          >
            <WhatsAppIcon /> WhatsApp
          </a>
        </div>
      </aside>
    </header>
  );
}
