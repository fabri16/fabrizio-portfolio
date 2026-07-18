import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const links = [
  ['Proyectos', '#proyectos'],
  ['Servicios', '#servicios'],
  ['Sobre mí', '#sobre-mi'],
  ['Contacto', '#contacto']
];

export function SpatialHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="spatial-header">
      <a href="#inicio" className="brand-mark" aria-label="Volver al inicio">
        FG<span>.</span>
      </a>
      <nav className="desktop-nav" aria-label="Navegación principal">
        {links.map(([label, href]) => (
          <a key={href} href={href}>{label}</a>
        ))}
      </nav>
      <a href="#contacto" className="availability-pill">
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
              <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
