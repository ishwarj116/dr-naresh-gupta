'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

// three.js से बना हीरो बैकग्राउंड: गहराई (depth) में तैरते चमकते कण,
// माउस से हल्का पैरालैक्स। ऑफ़-स्क्रीन/छिपे टैब में रुक जाता है।
export default function Hero3D() {
  const ref = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const mount = ref.current;
    if (!mount) return;
    const parent = mount.parentElement;
    let w = parent.offsetWidth;
    let h = parent.offsetHeight;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(w, h);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, w / h, 1, 120);
    camera.position.z = 30;

    // गोल, धुँधले कण की स्प्राइट-टेक्सचर
    const c = document.createElement('canvas');
    c.width = c.height = 64;
    const cx = c.getContext('2d');
    const grad = cx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(0.45, 'rgba(255,255,255,0.45)');
    grad.addColorStop(1, 'rgba(255,255,255,0)');
    cx.fillStyle = grad;
    cx.fillRect(0, 0, 64, 64);
    const tex = new THREE.CanvasTexture(c);

    const palette = [
      new THREE.Color('#7aa266'),
      new THREE.Color('#56724f'),
      new THREE.Color('#b8894a'),
      new THREE.Color('#e9d5a9'),
      new THREE.Color('#ffffff'),
    ];

    const N = 150;
    const positions = new Float32Array(N * 3);
    const colors = new Float32Array(N * 3);
    const speeds = new Float32Array(N);
    const phases = new Float32Array(N);
    const X = 42;
    const Y = 20;
    const Z = 26;
    for (let i = 0; i < N; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 2 * X;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 2 * Y;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2 * Z;
      const col = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;
      speeds[i] = 0.008 + Math.random() * 0.025;
      phases[i] = Math.random() * Math.PI * 2;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const mat = new THREE.PointsMaterial({
      size: 1.7,
      map: tex,
      transparent: true,
      opacity: 0.55,
      vertexColors: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });

    const points = new THREE.Points(geo, mat);
    scene.add(points);

    let mx = 0;
    let my = 0;
    let raf = 0;
    let running = true;
    let t = 0;

    const tick = () => {
      if (!running) return;
      t += 0.008;
      const pos = geo.attributes.position.array;
      for (let i = 0; i < N; i++) {
        pos[i * 3 + 1] += speeds[i];
        pos[i * 3] += Math.sin(t * 2 + phases[i]) * 0.01;
        if (pos[i * 3 + 1] > Y) {
          pos[i * 3 + 1] = -Y;
          pos[i * 3] = (Math.random() - 0.5) * 2 * X;
        }
      }
      geo.attributes.position.needsUpdate = true;
      points.rotation.y = Math.sin(t * 0.4) * 0.05;
      camera.position.x += (mx * 4 - camera.position.x) * 0.05;
      camera.position.y += (-my * 2.5 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };

    const setRunning = (v) => {
      const was = running;
      running = v && !document.hidden;
      if (!was && running) tick();
      if (!running) cancelAnimationFrame(raf);
    };

    const io = new IntersectionObserver(([e]) => setRunning(e.isIntersecting));
    io.observe(mount);
    const onVis = () => setRunning(true);
    document.addEventListener('visibilitychange', onVis);

    const onMove = (e) => {
      const r = parent.getBoundingClientRect();
      mx = (e.clientX - r.left) / r.width - 0.5;
      my = (e.clientY - r.top) / r.height - 0.5;
    };
    parent.addEventListener('pointermove', onMove);

    const onResize = () => {
      w = parent.offsetWidth;
      h = parent.offsetHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', onResize);

    tick();

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      document.removeEventListener('visibilitychange', onVis);
      parent.removeEventListener('pointermove', onMove);
      window.removeEventListener('resize', onResize);
      geo.dispose();
      mat.dispose();
      tex.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={ref} className="hero-canvas" aria-hidden="true" />;
}
