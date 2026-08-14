import { About } from './components/About';
import { Contact } from './components/Contact';
import { CustomCursor } from './components/CustomCursor';
import { Hero } from './components/Hero';
import { Process } from './components/Process';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { SpatialHeader } from './components/SpatialHeader';
import { SecondaryTextReveal } from './components/SecondaryTextReveal';
import { useLenis } from 'lenis/react';

export default function App() {
  const lenis = useLenis();
  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (lenis) {
      lenis.scrollTo('#inicio', { duration: 0.8 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <SecondaryTextReveal />
      <CustomCursor />
      <SpatialHeader />
      <main>
        <Hero />
        <Projects />
        <Services />
        <About />
        <Process />
        <Contact />
      </main>
      <footer className="site-footer">
        <span>© 2026 Fabrizio Graziano</span>
        <a href="#inicio" onClick={handleScrollToTop}>Volver arriba ↑</a>
      </footer>
    </>
  );
}
