import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const ref = useRef(null);
  const { scrollY } = useScroll();

  // Parallax on headline and subcopy
  const titleY = useTransform(scrollY, [0, 400], [0, -60]);
  const copyY = useTransform(scrollY, [0, 400], [0, -30]);
  const ctaY = useTransform(scrollY, [0, 400], [0, -20]);

  return (
    <section ref={ref} className="relative min-h-[100vh] w-full overflow-hidden pt-20">
      {/* Ambient gradients that subtly shift with scroll */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 80% 10%, rgba(56,189,248,0.25), transparent 40%), radial-gradient(ellipse at 10% 90%, rgba(217,70,239,0.25), transparent 40%)', y: useTransform(scrollY, [0, 400], [0, -40]) }}
      />

      {/* Interactive Spline scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/a6HhFsV3-DN9Z-yP/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Foreground copy with parallax */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 py-24 md:py-32">
        <motion.span
          className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white ring-1 ring-white/20 backdrop-blur"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          Tech • Interactive • Modern
        </motion.span>

        <motion.h1
          className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl"
          style={{ y: titleY }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          I craft playful, modern web experiences that feel alive.
        </motion.h1>

        <motion.p
          className="max-w-2xl text-base text-white/80 md:text-lg"
          style={{ y: copyY }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.35 }}
        >
          Designer-turned-developer focused on 3D, motion, and delightful interfaces. I build fast, accessible products with a premium feel.
        </motion.p>

        <motion.div className="mt-2 flex flex-wrap gap-3" style={{ y: ctaY }}>
          <motion.a
            href="#work"
            className="rounded-full bg-white px-5 py-2 text-sm font-medium text-gray-900 transition hover:bg-white/90"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            View work
          </motion.a>
          <motion.a
            href="#contact"
            className="rounded-full bg-white/10 px-5 py-2 text-sm font-medium text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/20"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Get in touch
          </motion.a>
        </motion.div>

        {/* Subtle scroll hint */}
        <motion.div
          className="mt-10 flex items-center gap-2 text-white/60"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="h-5 w-3 rounded-full border border-white/30 p-0.5">
            <motion.div className="h-1.5 w-full rounded-full bg-white/70" animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }} />
          </div>
          <span className="text-sm">Scroll to explore</span>
        </motion.div>
      </div>
    </section>
  );
}
