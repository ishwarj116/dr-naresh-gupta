'use client';

import { useEffect, useRef } from 'react';

// हीरो सेक्शन की पृष्ठभूमि: हल्के चमकते कण (होम्योपैथिक गोलियों जैसे)
// ऊपर की ओर तैरते हैं। हल्का माउस-पैरालैक्स। reduced-motion पर बंद।
export default function HeroCanvas() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = canvas.getContext('2d');
    const parent = canvas.parentElement;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let raf = 0;
    let running = true;
    let mx = 0;

    const resize = () => {
      w = parent.offsetWidth;
      h = parent.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const COLORS = [
      'rgba(122, 162, 102, ',
      'rgba(184, 137, 74, ',
      'rgba(86, 122, 80, ',
      'rgba(255, 255, 255, ',
    ];

    const spawn = (anywhere) => ({
      x: Math.random() * w,
      y: anywhere ? Math.random() * h : h + 24,
      r: 3 + Math.random() * 15,
      s: 0.12 + Math.random() * 0.4,
      drift: (Math.random() - 0.5) * 0.25,
      a: 0.07 + Math.random() * 0.18,
      c: COLORS[Math.floor(Math.random() * COLORS.length)],
      wob: Math.random() * Math.PI * 2,
    });

    let ps = Array.from(
      { length: Math.min(40, Math.max(16, Math.floor(w / 26))) },
      () => spawn(true)
    );

    const tick = () => {
      if (!running) return;
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < ps.length; i++) {
        const p = ps[i];
        p.wob += 0.012;
        p.y -= p.s;
        p.x += p.drift + Math.sin(p.wob) * 0.22 + mx * 0.5;
        if (p.y < -30 || p.x < -50 || p.x > w + 50) ps[i] = spawn(false);
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
        g.addColorStop(0, `${p.c}${p.a})`);
        g.addColorStop(1, `${p.c}0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };

    const setRunning = (v) => {
      const was = running;
      running = v && !document.hidden;
      if (!was && running) tick();
      if (!running) cancelAnimationFrame(raf);
    };

    const io = new IntersectionObserver(([e]) => setRunning(e.isIntersecting));
    io.observe(canvas);
    const onVis = () => setRunning(true);
    document.addEventListener('visibilitychange', onVis);
    const onMove = (e) => {
      const r = parent.getBoundingClientRect();
      mx = (e.clientX - r.left) / r.width - 0.5;
    };
    parent.addEventListener('pointermove', onMove);
    const onResize = () => {
      resize();
      ps = ps.map(() => spawn(true));
    };
    window.addEventListener('resize', onResize);

    tick();

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      document.removeEventListener('visibilitychange', onVis);
      parent.removeEventListener('pointermove', onMove);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return <canvas ref={ref} className="hero-canvas" aria-hidden="true" />;
}
