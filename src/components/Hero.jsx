import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden pt-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.25),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(217,70,239,0.25),transparent_40%)]" />

      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 py-24 md:py-32">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white ring-1 ring-white/20 backdrop-blur">
          Tech • Interactive • Modern
        </span>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
          I craft playful, modern web experiences that feel alive.
        </h1>
        <p className="max-w-2xl text-base text-white/80 md:text-lg">
          Designer-turned-developer focused on 3D, motion, and delightful interfaces. I build fast, accessible products with a premium feel.
        </p>
        <div className="mt-2 flex flex-wrap gap-3">
          <a
            href="#work"
            className="rounded-full bg-white px-5 py-2 text-sm font-medium text-gray-900 transition hover:bg-white/90"
          >
            View work
          </a>
          <a
            href="#contact"
            className="rounded-full bg-white/10 px-5 py-2 text-sm font-medium text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/20"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
