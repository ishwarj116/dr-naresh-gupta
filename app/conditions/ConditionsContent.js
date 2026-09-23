'use client';

import { useState } from 'react';
import Link from 'next/link';
import { site } from '../../lib/siteConfig';
import { useLang } from '../../lib/i18n';
import { categories, conditions } from '../../lib/conditions';
import { PhoneIcon, WhatsAppIcon } from '../../components/Icons';

const UI = {
  hi: {
    crumbHome: 'मुखपृष्ठ',
    crumbHere: 'रोग व उपचार',
    h1: 'रोग व उपचार',
    lead: 'डॉक्टर साहब को जिन रोगों के उपचार का विशेष अनुभव है, उन्हें श्रेणी के अनुसार यहाँ संजोया गया है। नीचे से अपनी श्रेणी चुनें।',
    all: 'सभी',
    ctaHeading: 'अपनी समस्या के बारे में परामर्श लें',
    ctaSub: `${site.doctorName} · रामपुर (रोशन बाग़) एवं सेक्टर 14, गुरुग्राम`,
    call: 'कॉल करें',
    wa: 'WhatsApp',
    note: 'यह सूची केवल जानकारी हेतु है। किसी भी रोग की सही दवा परामर्श के बाद ही तय होती है; परिणाम रोगी की स्थिति के अनुसार भिन्न हो सकते हैं।',
  },
  en: {
    crumbHome: 'Home',
    crumbHere: 'Conditions Treated',
    h1: 'Conditions Treated',
    lead: 'The conditions Dr. Gupta has particular experience with, organised by category. Choose a category below.',
    all: 'All',
    ctaHeading: 'Consult about your problem',
    ctaSub: `${site.doctorName} · Roshan Bagh, Rampur and Sector 14, Gurugram`,
    call: 'Call Now',
    wa: 'WhatsApp',
    note: 'This list is for information only. The right medicine for any condition is decided only after consultation; results vary from patient to patient.',
  },
};

export default function ConditionsContent() {
  const { lang } = useLang();
  const [active, setActive] = useState('all');
  const t = UI[lang];

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="crumbs">
            <Link href="/">{t.crumbHome}</Link> <span aria-hidden="true">›</span>{' '}
            {t.crumbHere}
          </p>
          <h1>{t.h1}</h1>
          <p className="lead">{t.lead}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="filter-tabs" role="tablist" aria-label={t.crumbHere}>
            <button
              type="button"
              className={active === 'all' ? 'chip chip-on' : 'chip'}
              onClick={() => setActive('all')}
            >
              {t.all}
            </button>
            {categories.map((cat) => (
              <button
                type="button"
                key={cat.id}
                className={active === cat.id ? 'chip chip-on' : 'chip'}
                onClick={() => setActive(cat.id)}
              >
                <span aria-hidden="true">{cat.icon}</span> {cat[lang]}
              </button>
            ))}
          </div>

          {categories.map((cat) => {
            if (active !== 'all' && active !== cat.id) return null;
            const items = conditions.filter((c) => c.cat === cat.id);
            return (
              <div className="cond-group" id={cat.id} key={cat.id}>
                <h2>
                  <span aria-hidden="true">{cat.icon}</span> {cat[lang]}
                </h2>
                <div className="cards">
                  {items.map((c) => (
                    <article className="card" id={c.id} key={c.id}>
                      <span className="card-icon" aria-hidden="true">
                        {c.icon}
                      </span>
                      <h3>{c[lang].title}</h3>
                      <p className="cond-short">{c[lang].short}</p>
                      <p>{c[lang].detail}</p>
                    </article>
                  ))}
                </div>
              </div>
            );
          })}

          <p className="fineprint">{t.note}</p>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-inner">
          <div>
            <h2>{t.ctaHeading}</h2>
            <p>{t.ctaSub}</p>
          </div>
          <div className="hero-actions">
            <a className="btn btn-light" href={`tel:${site.phone}`}>
              <PhoneIcon /> {t.call}
            </a>
            <a
              className="btn btn-light-outline"
              href={site.waHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon /> {t.wa}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
