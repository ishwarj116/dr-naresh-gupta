'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import pelletsPour from '../public/pellets-pour.jpg';

// "जीवित फ़ोटो": पोस्टर की बोतल के मुँह से सफ़ेद गोलियाँ लगातार गिरती रहती हैं।
// canvas फ़ोटो के ऊपर है; गोलियाँ गुरुत्व से गिरकर ढेर के पास घुल जाती हैं।
// reduced-motion पर सिर्फ़ स्थिर फ़ोटो दिखती है।

// फ़ोटो के अनुपात में बोतल के मुँह की स्थिति (0-1)
const MOUTH = { x: 0.44, y: 0.52 };
const END_Y = 1.04;

export default function PouringBottle({ alt }) {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let raf = 0;
    let running = true;
    let lastSpawn = 0;
    let ps = [];
    const stars = Array.from({ length: 26 }, () => ({
      fx: Math.random(),
      fy: Math.random(),
      s: 0.007 + Math.random() * 0.011,
      sp: 0.6 + Math.random() * 1.8,
      ph: Math.random() * Math.PI * 2,
      gold: Math.random() < 0.4,
    }));

    const drawStar = (x, y, r, color) => {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(x, y - r);
      ctx.quadraticCurveTo(x, y, x + r, y);
      ctx.quadraticCurveTo(x, y, x, y + r);
      ctx.quadraticCurveTo(x, y, x - r, y);
      ctx.quadraticCurveTo(x, y, x, y - r);
      ctx.closePath();
      ctx.fill();
    };

    const resize = () => {
      w = wrap.offsetWidth;
      h = wrap.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);

    const spawn = () => ({
      x: MOUTH.x * w + (Math.random() - 0.5) * w * 0.05,
      y: MOUTH.y * h + (Math.random() - 0.5) * h * 0.025,
      vx: (0.25 + Math.random() * 0.55) * (w / 900),
      vy: (0.5 + Math.random() * 0.9) * (h / 900),
      r0: (0.010 + Math.random() * 0.006) * w,
      a: 1,
      wob: Math.random() * Math.PI * 2,
    });

    // फ़ोटो की असली गोलियों जैसी दिखावट: ऊपर-बाएँ हाइलाइट, गर्म धूसर किनारा,
    // कैमरे के पास आते-आते बड़ी होती हुई, ज़मीन के पास हल्की छाया
    const draw = (p) => {
      const prog = Math.min(
        1,
        Math.max(0, (p.y - MOUTH.y * h) / ((END_Y - MOUTH.y) * h))
      );
      const rad = p.r0 * (0.85 + 1.0 * prog);
      // पीछे हल्की छाया, ताकि हल्की पृष्ठभूमि पर गोली उभरे
      const sx = p.x + rad * 0.28;
      const sy = p.y + rad * 0.5;
      const sh = ctx.createRadialGradient(sx, sy, rad * 0.2, sx, sy, rad * 1.2);
      sh.addColorStop(0, 'rgba(88,82,64,0.30)');
      sh.addColorStop(1, 'rgba(88,82,64,0)');
      ctx.fillStyle = sh;
      ctx.beginPath();
      ctx.arc(sx, sy, rad * 1.2, 0, Math.PI * 2);
      ctx.fill();
      // ठोस, अपारदर्शी मैट गोली (बोतल की असली गोलियों जैसी)
      const g = ctx.createRadialGradient(
        p.x - rad * 0.35, p.y - rad * 0.4, rad * 0.08,
        p.x, p.y, rad
      );
      g.addColorStop(0, '#ffffff');
      g.addColorStop(0.45, '#faf7f0');
      g.addColorStop(0.8, '#ece6d7');
      g.addColorStop(1, '#c9c1ab');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(p.x, p.y, rad, 0, Math.PI * 2);
      ctx.fill();
      // नीचे-दाएँ गहराती छाया से गोलाई का एहसास
      const rim = ctx.createRadialGradient(
        p.x + rad * 0.35, p.y + rad * 0.4, rad * 0.35,
        p.x, p.y, rad
      );
      rim.addColorStop(0, 'rgba(0,0,0,0)');
      rim.addColorStop(0.85, 'rgba(0,0,0,0)');
      rim.addColorStop(1, 'rgba(105,95,72,0.34)');
      ctx.fillStyle = rim;
      ctx.beginPath();
      ctx.arc(p.x, p.y, rad, 0, Math.PI * 2);
      ctx.fill();
    };

    const tick = (t) => {
      if (!running) return;
      ctx.clearRect(0, 0, w, h);
      // टिमटिमाते तारे: अनियमित रूप से जगमगाते-बुझते
      const ts = t / 1000;
      stars.forEach((st) => {
        let a = Math.sin(ts * st.sp + st.ph);
        a = a > 0 ? a * a * 0.85 : 0;
        if (a < 0.04) return;
        const sx = st.fx * w;
        const sy = st.fy * h;
        const sr = st.s * w * (0.75 + 0.5 * a);
        const glow = ctx.createRadialGradient(sx, sy, 0, sx, sy, sr * 2.2);
        glow.addColorStop(0, `rgba(255,252,240,${a * 0.35})`);
        glow.addColorStop(1, 'rgba(255,252,240,0)');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(sx, sy, sr * 2.2, 0, Math.PI * 2);
        ctx.fill();
        drawStar(
          sx,
          sy,
          sr,
          st.gold ? `rgba(222,190,130,${a})` : `rgba(255,255,255,${a})`
        );
      });
      if (t - lastSpawn > 110 && ps.length < 30) {
        ps.push(spawn());
        if (Math.random() < 0.45) ps.push(spawn());
        lastSpawn = t;
      }
      const grav = 0.06 * (h / 900);
      ps.forEach((p) => {
        p.wob += 0.1;
        p.vy += grav;
        p.x += p.vx + Math.sin(p.wob) * 0.25;
        p.y += p.vy;
        draw(p);
      });
      ps = ps.filter((p) => p.y < h + p.r0 * 4);
      raf = requestAnimationFrame(tick);
    };

    const setRunning = (v) => {
      const was = running;
      running = v && !document.hidden;
      if (!was && running) raf = requestAnimationFrame(tick);
      if (!running) cancelAnimationFrame(raf);
    };
    const io = new IntersectionObserver(([e]) => setRunning(e.isIntersecting));
    io.observe(wrap);
    const onVis = () => setRunning(true);
    document.addEventListener('visibilitychange', onVis);

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      document.removeEventListener('visibilitychange', onVis);
    };
  }, []);

  return (
    <div className="pour-wrap" ref={wrapRef}>
      <Image src={pelletsPour} alt={alt} sizes="(min-width: 720px) 480px, 92vw" />
      <canvas ref={canvasRef} className="pour-canvas" aria-hidden="true" />
    </div>
  );
}
