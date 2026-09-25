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
  '.value-item',
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
      // stagger-दार reveal: एक ही parent के अंदर के तत्व क्रम से उभरते हैं।
      // फ़्लिकर से बचाव: जो तत्व पहले से स्क्रीन पर दिख रहे हैं, उन्हें कभी
      // छिपाया नहीं जाता; सिर्फ़ नीचे (fold के बाद) वाले तत्व reveal होते हैं।
      const vh = window.innerHeight;
      const els = [];
      const siblingCount = new Map();
      document.querySelectorAll(REVEAL_SELECTORS).forEach((el) => {
        if (el.classList.contains('did-reveal')) return;
        if (el.getBoundingClientRect().top < vh - 40) {
          el.classList.add('did-reveal');
          return;
        }
        const n = siblingCount.get(el.parentElement) || 0;
        siblingCount.set(el.parentElement, n + 1);
        el.style.setProperty('--rd', `${Math.min(n, 8) * 70}ms`);
        el.classList.add('reveal');
        els.push(el);
      });
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (!e.isIntersecting) return;
            io.unobserve(e.target);
            e.target.classList.add('in-view');
          });
        },
        { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
      );
      els.forEach((el) => io.observe(el));
      cleanup.push(() => io.disconnect());

      // आँकड़े गिनती के साथ उभरते हैं (45+ आदि)
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

      // FAQ (details) का खुलना-बंद होना ऊँचाई-एनीमेशन के साथ
      document.querySelectorAll('.faq-item').forEach((det) => {
        const summary = det.querySelector('summary');
        const content = det.querySelector('p');
        if (!summary || !content) return;
        const onClick = (ev) => {
          ev.preventDefault();
          if (det.dataset.animating) return;
          det.dataset.animating = '1';
          content.style.overflow = 'hidden';
          if (det.open) {
            const hgt = content.offsetHeight;
            const anim = content.animate(
              [
                { height: `${hgt}px`, opacity: 1 },
                { height: '0px', opacity: 0 },
              ],
              { duration: 260, easing: 'ease' }
            );
            anim.onfinish = () => {
              det.open = false;
              content.style.overflow = '';
              delete det.dataset.animating;
            };
          } else {
            det.open = true;
            const hgt = content.offsetHeight;
            const anim = content.animate(
              [
                { height: '0px', opacity: 0 },
                { height: `${hgt}px`, opacity: 1 },
              ],
              { duration: 320, easing: 'cubic-bezier(0.22, 0.61, 0.36, 1)' }
            );
            anim.onfinish = () => {
              content.style.overflow = '';
              delete det.dataset.animating;
            };
          }
        };
        summary.addEventListener('click', onClick);
        cleanup.push(() => summary.removeEventListener('click', onClick));
      });

      // परिचय की तैरती गोलियाँ माउस के साथ हिलती हैं (गहराई के अनुसार अलग-अलग)
      const globuleHost = document.querySelector('.has-globules');
      if (globuleHost && window.matchMedia('(hover: hover)').matches) {
        const layers = globuleHost.querySelectorAll('.fg-layer');
        const onGlobMove = (ev) => {
          const r = globuleHost.getBoundingClientRect();
          const gx = (ev.clientX - r.left) / r.width - 0.5;
          const gy = (ev.clientY - r.top) / r.height - 0.5;
          layers.forEach((layer) => {
            const d = Number(layer.dataset.depth) || 16;
            layer.style.transform = `translate(${(-gx * d).toFixed(1)}px, ${(-gy * d).toFixed(1)}px)`;
          });
        };
        const onGlobLeave = () => {
          layers.forEach((layer) => {
            layer.style.transform = '';
          });
        };
        globuleHost.addEventListener('pointermove', onGlobMove);
        globuleHost.addEventListener('pointerleave', onGlobLeave);
        cleanup.push(() => {
          globuleHost.removeEventListener('pointermove', onGlobMove);
          globuleHost.removeEventListener('pointerleave', onGlobLeave);
        });
      }

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
