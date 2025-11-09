import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const workItems = [
  {
    title: 'Immersive Dashboard',
    tags: ['3D', 'UX', 'Frontend'],
    image:
      'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Realtime Data Viz',
    tags: ['WebGL', 'React', 'D3'],
    image:
      'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Ecommerce Motion',
    tags: ['Animation', 'Next.js'],
    image:
      'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function WorkShowcase() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const yHeading = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const bgShift = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section ref={ref} id="work" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          y: bgShift,
          background:
            'radial-gradient(1200px 400px at 20% 0%, rgba(168,85,247,0.12), transparent 70%), radial-gradient(1000px 400px at 90% 100%, rgba(59,130,246,0.12), transparent 70%)',
        }}
      />

      <div className="relative mb-10 flex items-end justify-between">
        <motion.div style={{ y: yHeading }}>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">Selected Work</h2>
          <p className="mt-2 max-w-xl text-white/70">
            A glimpse of interfaces and experiences I’ve crafted recently.
          </p>
        </motion.div>
        <motion.a
          href="#contact"
          className="text-sm text-cyan-300 hover:text-cyan-200"
          whileHover={{ x: 2 }}
        >
          Start a project →
        </motion.a>
      </div>

      <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {workItems.map((item, i) => (
          <motion.article
            key={item.title}
            className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 ${
              mounted ? 'shadow-[0_0_0_1px_rgba(255,255,255,0.06)]' : ''
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.08 }}
            whileHover={{ y: -4 }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 p-4">
              <h3 className="text-lg font-medium text-white">{item.title}</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {item.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-white ring-1 ring-white/15 backdrop-blur"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
