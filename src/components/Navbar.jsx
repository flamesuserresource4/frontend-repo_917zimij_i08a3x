import { useState, useEffect } from 'react';

const links = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        scrolled ? 'backdrop-blur supports-[backdrop-filter]:bg-white/5 border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="font-semibold tracking-tight text-white">
          <span className="rounded bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
            YourName
          </span>
          <span className="ml-2 text-sm text-white/60">Portfolio</span>
        </a>

        <div className="hidden gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/80 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="rounded-full bg-white/10 px-4 py-2 text-sm text-white shadow-sm ring-1 ring-white/20 transition hover:bg-white/20"
        >
          Let’s talk
        </a>
      </nav>
    </header>
  );
}
