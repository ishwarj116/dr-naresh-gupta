'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import pelletsPour from '../public/pellets-pour.jpg';

// "जीवित फ़ोटो": पोस्टर की बोतल के मुँह से सफ़ेद गोलियाँ लगातार गिरती रहती हैं।
// canvas फ़ोटो के ऊपर है; गोलियाँ गुरुत्व से गिरकर ढेर के पास घुल जाती हैं।
// reduced-motion पर सिर्फ़ स्थिर फ़ोटो दिखती है।

// फ़ोटो के अनुपात में स्थितियाँ (0-1): बोतल का मुँह और ढेर
const MOUTH = { x: 0.415, y: 0.3 };
const PILE_Y = 0.82;

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
      x: MOUTH.x * w + (Math.random() - 0.5) * w * 0.012,
      y: MOUTH.y * h + Math.random() * h * 0.01,
      vx: (0.2 + Math.random() * 0.5) * (w / 900),
      vy: (0.4 + Math.random() * 0.8) * (h / 900),
      r0: (0.009 + Math.random() * 0.005) * w,
      a: 1,
      wob: Math.random() * Math.PI * 2,
      settled: false,
    });

    // फ़ोटो की असली गोलियों जैसी दिखावट: ऊपर-बाएँ हाइलाइट, गर्म धूसर किनारा,
    // कैमरे के पास आते-आते बड़ी होती हुई, ज़मीन के पास हल्की छाया
    const draw = (p) => {
      const prog = Math.min(
        1,
        Math.max(0, (p.y - MOUTH.y * h) / ((PILE_Y - MOUTH.y) * h))
      );
      const rad = p.r0 * (0.8 + 1.15 * prog);
      if (prog > 0.85 || p.settled) {
        const sh = ctx.createRadialGradient(
          p.x, p.y + rad * 0.9, 0,
          p.x, p.y + rad * 0.9, rad * 1.4
        );
        sh.addColorStop(0, `rgba(70,58,38,${0.22 * p.a})`);
        sh.addColorStop(1, 'rgba(70,58,38,0)');
        ctx.fillStyle = sh;
        ctx.beginPath();
        ctx.ellipse(p.x, p.y + rad * 0.9, rad * 1.4, rad * 0.5, 0, 0, Math.PI * 2);
        ctx.fill();
      }
      const g = ctx.createRadialGradient(
        p.x - rad * 0.38, p.y - rad * 0.42, rad * 0.1,
        p.x, p.y, rad
      );
      g.addColorStop(0, `rgba(255,255,255,${p.a})`);
      g.addColorStop(0.5, `rgba(248,246,240,${p.a})`);
      g.addColorStop(0.82, `rgba(228,223,209,${p.a})`);
      g.addColorStop(1, `rgba(196,189,170,${p.a})`);
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(p.x, p.y, rad, 0, Math.PI * 2);
      ctx.fill();
      const rim = ctx.createRadialGradient(
        p.x + rad * 0.3, p.y + rad * 0.35, rad * 0.4,
        p.x, p.y, rad
      );
      rim.addColorStop(0, 'rgba(0,0,0,0)');
      rim.addColorStop(1, `rgba(120,110,88,${0.18 * p.a})`);
      ctx.fillStyle = rim;
      ctx.beginPath();
      ctx.arc(p.x, p.y, rad, 0, Math.PI * 2);
      ctx.fill();
    };

    const tick = (t) => {
      if (!running) return;
      ctx.clearRect(0, 0, w, h);
      if (t - lastSpawn > 110 && ps.length < 30) {
        ps.push(spawn());
        if (Math.random() < 0.45) ps.push(spawn());
        lastSpawn = t;
      }
      const grav = 0.06 * (h / 900);
      ps.forEach((p) => {
        if (!p.settled) {
          p.wob += 0.1;
          p.vy += grav;
          p.x += p.vx + Math.sin(p.wob) * 0.25;
          p.y += p.vy;
          if (p.y >= PILE_Y * h + (Math.random() - 0.5) * h * 0.02) {
            p.settled = true;
          }
        } else {
          p.a -= 0.03;
        }
        draw(p);
      });
      ps = ps.filter((p) => p.a > 0);
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
