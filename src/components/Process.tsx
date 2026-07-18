import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { ScrollWrite } from './ScrollWrite';

const steps = [
  { number: '01', title: 'Descubrimiento', summary: 'Objetivos, contexto, audiencia y necesidades.', detail: 'Empezamos con una conversación profunda para comprender el negocio, el problema, los usuarios y qué resultado tiene que generar el proyecto. Definimos alcance, prioridades y criterios de éxito.' },
  { number: '02', title: 'Investigación', summary: 'Usuarios, competencia, oportunidades y prioridades.', detail: 'Recolecto evidencia mediante benchmarking, entrevistas, análisis heurístico o pruebas. Los hallazgos se convierten en insights concretos y decisiones justificadas.' },
  { number: '03', title: 'Diseño', summary: 'Estructura, flujos, identidad, interfaz y prototipo.', detail: 'Traduzco la estrategia en arquitectura, wireframes y una propuesta visual coherente. Iteramos desde lo esencial hasta llegar a una experiencia clara y consistente.' },
  { number: '04', title: 'Validación', summary: 'Pruebas, ajustes, refinamiento y entrega final.', detail: 'Probamos los puntos críticos, corregimos fricciones y documento la solución para facilitar su implementación, continuidad y medición.' }
];

export function Process() {
  const [active, setActive] = useState<string | null>('01');
  return (
    <section className="section process-section">
      <div className="section-heading section-heading-no-label">
        <h2><ScrollWrite>Una forma clara de trabajar.</ScrollWrite></h2>
      </div>
      <ol className="process-list">
        {steps.map((step) => {
          const isOpen = active === step.number;
          return (
            <li key={step.number} className={isOpen ? 'is-open' : ''}>
              <button type="button" className="process-trigger" onClick={() => setActive(isOpen ? null : step.number)} aria-expanded={isOpen}>
                <span>{step.number}</span><h3>{step.title}</h3><p>{step.summary}</p><ChevronDown className="process-chevron" size={22} />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && <motion.div className="process-detail" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: .28 }}><p>{step.detail}</p></motion.div>}
              </AnimatePresence>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
