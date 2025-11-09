import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkShowcase from './components/WorkShowcase';
import About from './components/About';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-gray-950 text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_60%)]" />
      <Navbar />
      <main>
        <Hero />
        <WorkShowcase />
        <About />
        <Contact />
      </main>
    </div>
  );
}
