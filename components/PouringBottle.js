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
      r: (0.011 + Math.random() * 0.007) * w,
      a: 1,
      wob: Math.random() * Math.PI * 2,
      settled: false,
    });

    const draw = (p) => {
      const g = ctx.createRadialGradient(
        p.x - p.r * 0.35,
        p.y - p.r * 0.4,
        p.r * 0.15,
        p.x,
        p.y,
        p.r
      );
      g.addColorStop(0, `rgba(255,255,255,${p.a})`);
      g.addColorStop(0.75, `rgba(246,244,238,${p.a})`);
      g.addColorStop(1, `rgba(205,200,185,${p.a * 0.9})`);
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    };

    const tick = (t) => {
      if (!running) return;
      ctx.clearRect(0, 0, w, h);
      if (t - lastSpawn > 150 && ps.length < 22) {
        ps.push(spawn());
        if (Math.random() < 0.3) ps.push(spawn());
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
