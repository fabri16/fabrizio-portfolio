import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { projects, type Project } from '../data/projects';
import { ScrollWrite } from './ScrollWrite';

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const savedScroll = useRef(0);

  useEffect(() => {
    if (!selected) return;
    savedScroll.current = window.scrollY;
    const body = document.body;
    body.style.position = 'fixed';
    body.style.top = `-${savedScroll.current}px`;
    body.style.width = '100%';
    body.style.overflow = 'hidden';

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelected(null);
    };
    window.addEventListener('keydown', closeOnEscape);

    return () => {
      window.removeEventListener('keydown', closeOnEscape);
      body.style.position = '';
      body.style.top = '';
      body.style.width = '';
      body.style.overflow = '';
      window.scrollTo(0, savedScroll.current);
    };
  }, [selected]);

  return (
    <section id="proyectos" className="section projects-section">
      <div className="section-heading section-heading-no-label">
        <h2 className="forced-heading"><ScrollWrite>Trabajo que convierte ideas</ScrollWrite><br /><ScrollWrite>en soluciones.</ScrollWrite></h2>
      </div>
      <div className="projects-stack">
        {projects.map((project, index) => (
          <article key={project.id} className="project-card" style={{ '--project-accent': project.accent, '--project-secondary': project.secondary, '--stack-index': index } as React.CSSProperties}>
            <div className="project-visual">
              <span className="project-number">{project.index}</span><span className="project-category">{project.label}</span>
              <div className="project-art" aria-hidden="true"><div className="project-window"><div className="window-bar"><i /><i /><i /></div><div className="window-grid"><span /><span /><span /><span /><span /><span /></div></div><div className="floating-panel panel-one" /><div className="floating-panel panel-two" /></div>
              <button type="button" className="project-open" onClick={() => setSelected(project)}>Ver caso <ArrowUpRight size={20} /></button>
            </div>
            <div className="project-meta"><div><p>{project.discipline} · {project.year}</p><h3>{project.title}</h3></div><p>{project.description}</p></div>
          </article>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div className="case-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(e) => { if (e.target === e.currentTarget) setSelected(null); }}>
            <motion.article className="case-modal" role="dialog" aria-modal="true" aria-label={`Caso de estudio ${selected.title}`} initial={{ opacity: 0, y: 40, scale: .97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 24, scale: .98 }} transition={{ duration: .32, ease: [0.22, 1, 0.36, 1] }} style={{ '--project-accent': selected.accent, '--project-secondary': selected.secondary } as React.CSSProperties}>
              <button className="case-close" type="button" onClick={() => setSelected(null)} aria-label="Cerrar caso"><X size={22} /></button>
              <div className="case-hero">
                <div><span>{selected.index} · {selected.label}</span><h2>{selected.title}</h2><p>{selected.description}</p></div>
                <div className="case-cover"><div className="project-window large"><div className="window-bar"><i /><i /><i /></div><div className="window-grid"><span /><span /><span /><span /><span /><span /></div></div></div>
              </div>
              <div className="case-details">
                <div><small>Rol</small><strong>{selected.discipline}</strong></div><div><small>Año</small><strong>{selected.year}</strong></div><div><small>Enfoque</small><strong>Investigación · Estrategia · Diseño</strong></div>
              </div>
              <div className="case-story">
                <section><span>01</span><h3>El desafío</h3><p>Comprender el contexto, ordenar la información y transformar una necesidad compleja en una experiencia fácil de entender y usar.</p></section>
                <section><span>02</span><h3>El proceso</h3><p>Investigación, análisis competitivo, arquitectura de información, wireframes, iteraciones visuales y validación de los puntos críticos.</p></section>
                <section><span>03</span><h3>La solución</h3><p>Un sistema coherente y escalable que prioriza claridad, jerarquía visual y acciones concretas para usuarios y objetivos de negocio.</p></section>
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
