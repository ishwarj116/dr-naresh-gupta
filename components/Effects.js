'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const REVEAL_SELECTORS = [
  '.section h2',
  '.section-sub',
  '.card',
  '.why-item',
  '.testimonial-card',
  '.book-card',
  '.faq-item',
  '.process-steps li',
  '.split-photo',
  '.checklist li',
  '.myth-card',
  '.stat',
  '.timings',
  '.contact-line',
].join(',');

export default function Effects() {
  const pathname = usePathname();

  useEffect(() => {
    const cleanup = [];
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const topbar = document.querySelector('.topbar');
    const onScroll = () =>
      topbar && topbar.classList.toggle('scrolled', window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    cleanup.push(() => window.removeEventListener('scroll', onScroll));

    if (!reduce) {
      // stagger-दार reveal: एक ही parent के अंदर के तत्व क्रम से उभरते हैं
      const els = Array.from(document.querySelectorAll(REVEAL_SELECTORS)).filter(
        (el) => !el.classList.contains('did-reveal')
      );
      const siblingCount = new Map();
      els.forEach((el) => {
        const n = siblingCount.get(el.parentElement) || 0;
        siblingCount.set(el.parentElement, n + 1);
        el.style.transitionDelay = `${Math.min(n, 8) * 70}ms`;
        el.classList.add('reveal');
      });
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (!e.isIntersecting) return;
            io.unobserve(e.target);
            e.target.classList.add('in-view');
            setTimeout(() => {
              e.target.classList.remove('reveal', 'in-view');
              e.target.classList.add('did-reveal');
              e.target.style.transitionDelay = '';
            }, 1400);
          });
        },
        { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
      );
      els.forEach((el) => io.observe(el));
      cleanup.push(() => io.disconnect());

      // आँकड़े गिनती के साथ उभरते हैं (51+ आदि)
      const sio = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (!e.isIntersecting) return;
            sio.unobserve(e.target);
            const m = e.target.textContent.match(/^(\d+)(.*)$/);
            if (!m) return;
            const target = Number(m[1]);
            const suffix = m[2];
            const t0 = performance.now();
            const dur = 1300;
            const tick = (t) => {
              const p = Math.min(1, (t - t0) / dur);
              const eased = 1 - Math.pow(1 - p, 3);
              e.target.textContent = Math.round(target * eased) + suffix;
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          });
        },
        { threshold: 0.4 }
      );
      document.querySelectorAll('.stat-num').forEach((el) => sio.observe(el));
      cleanup.push(() => sio.disconnect());

      // हीरो फ़ोटो पर 3D झुकाव (सिर्फ़ माउस वाले डिवाइस)
      if (window.matchMedia('(hover: hover)').matches) {
        const fig = document.querySelector('.hero-photo');
        const img = fig && fig.querySelector('img');
        if (fig && img) {
          const move = (ev) => {
            const r = fig.getBoundingClientRect();
            const x = (ev.clientX - r.left) / r.width - 0.5;
            const y = (ev.clientY - r.top) / r.height - 0.5;
            img.style.setProperty('--ry', `${(x * 7).toFixed(2)}deg`);
            img.style.setProperty('--rx', `${(-y * 7).toFixed(2)}deg`);
          };
          const leave = () => {
            img.style.setProperty('--rx', '0deg');
            img.style.setProperty('--ry', '0deg');
          };
          fig.addEventListener('pointermove', move);
          fig.addEventListener('pointerleave', leave);
          cleanup.push(() => {
            fig.removeEventListener('pointermove', move);
            fig.removeEventListener('pointerleave', leave);
          });
        }
      }
    }

    return () => cleanup.forEach((f) => f());
  }, [pathname]);

  return null;
}
