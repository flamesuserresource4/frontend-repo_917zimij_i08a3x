import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Contact() {
  const [status, setStatus] = useState('');
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 20%'] });
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! I will get back to you shortly.');
  };

  return (
    <section ref={ref} id="contact" className="relative z-10 mx-auto max-w-4xl px-6 py-24">
      <motion.div
        className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur"
        style={{ y, opacity }}
      >
        <h2 className="text-3xl font-semibold text-white">Let’s build something great</h2>
        <p className="mt-2 text-white/80">Tell me about your project and timeline.</p>

        <form onSubmit={onSubmit} className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <input
            className="rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 outline-none ring-0 focus:border-white/30"
            placeholder="Name"
            required
          />
          <input
            type="email"
            className="rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 outline-none ring-0 focus:border-white/30"
            placeholder="Email"
            required
          />
          <input
            className="sm:col-span-2 rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 outline-none ring-0 focus:border-white/30"
            placeholder="Company / Organization"
          />
          <textarea
            rows={5}
            className="sm:col-span-2 rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 outline-none ring-0 focus:border-white/30"
            placeholder="Project details"
            required
          />
          <div className="sm:col-span-2 flex items-center justify-between">
            <button
              type="submit"
              className="rounded-full bg-white px-5 py-2 text-sm font-medium text-gray-900 transition hover:bg-white/90"
            >
              Send message
            </button>
            {status && <p className="text-sm text-emerald-300">{status}</p>}
          </div>
        </form>
      </motion.div>

      <motion.footer
        className="mt-10 flex items-center justify-between text-sm text-white/60"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <p>© {new Date().getFullYear()} YourName • All rights reserved</p>
        <a href="#" className="hover:text-white">Back to top ↑</a>
      </motion.footer>
    </section>
  );
}
