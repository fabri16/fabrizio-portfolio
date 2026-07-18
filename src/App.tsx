import { About } from './components/About';
import { Contact } from './components/Contact';
import { CustomCursor } from './components/CustomCursor';
import { Hero } from './components/Hero';
import { Process } from './components/Process';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { SpatialHeader } from './components/SpatialHeader';
import { SecondaryTextReveal } from './components/SecondaryTextReveal';

export default function App() {
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
        <a href="#inicio">Volver arriba ↑</a>
      </footer>
    </>
  );
}
