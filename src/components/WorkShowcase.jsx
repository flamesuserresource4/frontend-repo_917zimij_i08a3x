import { useEffect, useState } from 'react';

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

  return (
    <section id="work" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">Selected Work</h2>
          <p className="mt-2 max-w-xl text-white/70">
            A glimpse of interfaces and experiences I’ve crafted recently.
          </p>
        </div>
        <a href="#contact" className="text-sm text-cyan-300 hover:text-cyan-200">
          Start a project →
        </a>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {workItems.map((item) => (
          <article
            key={item.title}
            className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 ${
              mounted ? 'shadow-[0_0_0_1px_rgba(255,255,255,0.06)]' : ''
            }`}
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
          </article>
        ))}
      </div>
    </section>
  );
}
