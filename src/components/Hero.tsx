import { useRef } from 'react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { useLenis } from 'lenis/react';

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-3, 3]), { stiffness: 90, damping: 20 });
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [2.5, -2.5]), { stiffness: 90, damping: 20 });
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 34]);
  const photoScale = useTransform(scrollYProgress, [0, 1], [1, 0.97]);
  const lenis = useLenis();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    if (lenis) {
      lenis.scrollTo(target, { duration: 0.8 });
    } else {
      const el = document.querySelector(target);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      id="inicio"
      className="hero-section"
      onPointerMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        mouseX.set((event.clientX - bounds.left) / bounds.width - 0.5);
        mouseY.set((event.clientY - bounds.top) / bounds.height - 0.5);
      }}
      onPointerLeave={() => { mouseX.set(0); mouseY.set(0); }}
    >
      <div className="grain" aria-hidden="true" />

      <div className="hero-copy">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          Diseñador gráfico · UX/UI · Research
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Diseño experiencias
          <span>claras, útiles</span>
          y memorables.
        </motion.h1>
        <motion.div className="hero-intro" initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
          <p>Soy Fabrizio Graziano. Conecto <strong>investigación</strong>, estrategia y diseño visual para crear marcas y productos digitales con identidad.</p>
          <div className="hero-actions">
            <a 
              href="#proyectos" 
              className="primary-button"
              onClick={(e) => handleScrollTo(e, '#proyectos')}
            >
              Ver proyectos <ArrowDownRight size={18} />
            </a>
            <a 
              href="#contacto" 
              className="secondary-button"
              onClick={(e) => handleScrollTo(e, '#contacto')}
            >
              Hablemos <ArrowUpRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.figure className="portrait-stage" style={{ rotateX, rotateY, y: photoY, scale: photoScale }}>
        <div className="portrait-halo" aria-hidden="true" />
        <motion.div className="portrait-frame" animate={{ y: [-7, 7, -7] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}>
          <img src="fabrizio-photo.png" alt="Retrato de Fabrizio Graziano" draggable={false} />
          <div className="portrait-caption"><span>Fabrizio Graziano</span><small>Diseñador UX/UI</small></div>
        </motion.div>
      </motion.figure>

      <div className="hero-footer-line">
        <span>Córdoba, Argentina</span>
        <span>Disponible para freelance y oportunidades remotas</span>
      </div>
    </section>
  );
}
