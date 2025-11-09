import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 20%'] });
  const cardY = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const cardOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={ref} id="about" className="relative z-10 mx-auto max-w-5xl px-6 py-24">
      <motion.div
        className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur"
        style={{ y: cardY, opacity: cardOpacity }}
      >
        <h2 className="text-3xl font-semibold text-white">About</h2>
        <p className="mt-4 text-white/80">
          I’m a creative developer blending design, 3D, and engineering to craft premium web
          experiences. My work focuses on performance, accessibility, and playful interactions that
          feel intuitive and refined. I thrive at the intersection of aesthetics and systems — from
          component libraries to high-fidelity visual effects.
        </p>
        <ul className="mt-6 grid gap-3 text-white/80 sm:grid-cols-2">
          <li>• 6+ years building products end‑to‑end</li>
          <li>• Strong in React, TypeScript, WebGL</li>
          <li>• Motion design and micro‑interactions</li>
          <li>• Product thinking and UX strategy</li>
        </ul>
      </motion.div>
    </section>
  );
}
