import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLenis } from 'lenis/react';

const links = [
  ['Proyectos', '#proyectos'],
  ['Servicios', '#servicios'],
  ['Sobre mí', '#sobre-mi'],
  ['Contacto', '#contacto']
];

export function SpatialHeader() {
  const [open, setOpen] = useState(false);
  const lenis = useLenis();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    if (lenis) {
      lenis.scrollTo(href, { 
        duration: 0.8, 
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) 
      });
    } else {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="spatial-header">
      <a 
        href="#inicio" 
        className="brand-mark" 
        aria-label="Volver al inicio"
        onClick={(e) => handleNavClick(e, '#inicio')}
      >
        FG<span>.</span>
      </a>
      <nav className="desktop-nav" aria-label="Navegación principal">
        {links.map(([label, href]) => (
          <a 
            key={href} 
            href={href}
            onClick={(e) => handleNavClick(e, href)}
          >
            {label}
          </a>
        ))}
      </nav>
      <a 
        href="#contacto" 
        className="availability-pill"
        onClick={(e) => handleNavClick(e, '#contacto')}
      >
        <span /> Disponible
      </a>
      <button
        type="button"
        className="mobile-menu-button"
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.nav
            className="mobile-nav"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {links.map(([label, href]) => (
              <a 
                key={href} 
                href={href} 
                onClick={(e) => handleNavClick(e, href)}
              >
                {label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
