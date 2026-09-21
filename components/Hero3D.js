'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

// three.js हीरो बैकग्राउंड: धीरे-धीरे साँस लेती हुई शांत 3D तरंगें
// (सौम्य हरे रंग की wireframe लहरें + हल्की सुनहरी परत), माउस पैरालैक्स के साथ।
// ऑफ़-स्क्रीन/छिपे टैब में रुक जाता है; reduced-motion पर नहीं चलता।
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
    const camera = new THREE.PerspectiveCamera(55, w / h, 1, 200);
    camera.position.set(0, 7, 26);

    const makeWave = (color, opacity, yOffset) => {
      const geo = new THREE.PlaneGeometry(150, 70, 90, 34);
      const mat = new THREE.MeshBasicMaterial({
        color,
        wireframe: true,
        transparent: true,
        opacity,
        depthWrite: false,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.rotation.x = -Math.PI / 2.4;
      mesh.position.y = yOffset;
      scene.add(mesh);
      return { geo, mat, mesh, base: geo.attributes.position.array.slice() };
    };

    const waveGreen = makeWave('#7aa266', 0.3, -9);
    const waveGold = makeWave('#b8894a', 0.14, -11.5);
    const waves = [waveGreen, waveGold];

    let mx = 0;
    let my = 0;
    let raf = 0;
    let running = true;
    let t = 0;

    const animateWave = ({ geo, base }, tt, amp, f1, f2) => {
      const pos = geo.attributes.position.array;
      for (let i = 0; i < pos.length; i += 3) {
        const x = base[i];
        const y = base[i + 1];
        pos[i + 2] =
          Math.sin(x * f1 + tt) * Math.cos(y * f2 + tt * 0.7) * amp +
          Math.sin((x + y) * 0.05 + tt * 0.5) * amp * 0.6;
      }
      geo.attributes.position.needsUpdate = true;
    };

    const tick = () => {
      if (!running) return;
      t += 0.012;
      animateWave(waveGreen, t, 2.3, 0.14, 0.18);
      animateWave(waveGold, t * 0.8 + 2, 2.8, 0.11, 0.15);
      camera.position.x += (mx * 5 - camera.position.x) * 0.04;
      camera.position.y += (7 - my * 3 - camera.position.y) * 0.04;
      camera.lookAt(0, -2, 0);
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
      waves.forEach(({ geo, mat }) => {
        geo.dispose();
        mat.dispose();
      });
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={ref} className="hero-canvas" aria-hidden="true" />;
}
