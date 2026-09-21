'use client';

import Link from 'next/link';
import { useLang } from '../lib/i18n';

const T = {
  hi: {
    h1: 'पृष्ठ नहीं मिला',
    p: 'क्षमा करें, आप जिस पृष्ठ को खोज रहे हैं वह उपलब्ध नहीं है। हो सकता है लिंक पुराना हो गया हो।',
    home: '← मुखपृष्ठ पर जाएँ',
  },
  en: {
    h1: 'Page Not Found',
    p: 'Sorry, the page you are looking for is not available. The link may be outdated.',
    home: '← Go to Home',
  },
};

export default function NotFound() {
  const { lang } = useLang();
  const t = T[lang];
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>404 · {t.h1}</h1>
          <p className="lead">{t.p}</p>
        </div>
      </section>
      <section className="section">
        <div className="container narrow">
          <Link className="btn btn-solid" href="/">
            {t.home}
          </Link>
        </div>
      </section>
    </main>
  );
}
