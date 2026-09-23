'use client';

import Link from 'next/link';
import { useLang } from '../lib/i18n';
import { categories, conditions } from '../lib/conditions';

// होमपेज पर रोगों का सारांश: पाँच श्रेणी-कार्ड, हर कार्ड में उसके रोगों के नाम।
export default function ConditionCategories() {
  const { lang } = useLang();
  return (
    <div className="cat-cards">
      {categories.map((cat) => {
        const items = conditions.filter((c) => c.cat === cat.id);
        return (
          <Link className="cat-card" href={`/conditions#${cat.id}`} key={cat.id}>
            <span className="cat-icon" aria-hidden="true">
              {cat.icon}
            </span>
            <h3>{cat[lang]}</h3>
            <p className="cat-sub">{lang === 'hi' ? cat.hiSub : cat.enSub}</p>
            <div className="cat-tags">
              {items.map((c) => (
                <span className="cat-tag" key={c.id}>
                  {c[lang].title}
                </span>
              ))}
            </div>
            <span className="cat-more">
              {lang === 'hi' ? 'पूरा विवरण देखें →' : 'View all →'}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
