import { BookOpen, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollWrite } from './ScrollWrite';

const education = [
  { period: '2014 — 2020', title: 'Técnico Electrónico', place: 'Instituto Técnico Salesiano Villada', detail: 'Formación técnica en electrónica, sistemas, resolución de problemas y trabajo aplicado.' },
  { period: '2021 — 2024', title: 'Diseño Gráfico', place: 'Instituto Superior Mariano Moreno', detail: 'Formación profesional en comunicación visual, identidad, editorial, publicidad y diseño digital.' },
  { period: '2025 — 2026', title: 'UX/UI inicial y avanzado', place: 'Coderhouse', detail: 'Diseño de interfaces, arquitectura de información, prototipado, sistemas de diseño y validación.' },
  { period: '2026', title: 'UX Research', place: 'Coderhouse', detail: 'Investigación cualitativa, definición de hipótesis, instrumentos, análisis de patrones y comunicación de hallazgos.' },
  { period: '2026', title: 'UX Writing', place: 'Coderhouse', detail: 'Voz y tono, microcopy, diseño de contenido y escritura centrada en las personas.' }
];

export function About() {
  return (
    <section id="sobre-mi" className="section about-section">
      <div className="section-heading section-heading-no-label">
        <h2 className="forced-heading"><ScrollWrite>Diseño con criterio visual y</ScrollWrite><br /><ScrollWrite>pensamiento estratégico.</ScrollWrite></h2>
      </div>
      <div className="about-grid">
        <p className="about-lead">Soy diseñador gráfico especializado en <strong>UX/UI</strong> y experiencias digitales. Combino investigación, comunicación visual y diseño de interfaces para crear soluciones coherentes, funcionales y con identidad.</p>
        <div className="about-copy">
          <p>Me interesa entender qué necesitan las personas, detectar <strong>oportunidades</strong> y transformar esos hallazgos en experiencias simples, atractivas y medibles.</p>
          <p>Mi perfil reúne diseño, investigación y una base técnica que me permite abordar cada proyecto con una mirada <strong>integral</strong>.</p>
          <div className="skill-list">{['Figma', 'FigJam', 'Illustrator', 'Photoshop', 'After Effects', 'HTML/CSS', 'Research', 'UX Writing'].map((skill) => <span key={skill}>{skill}</span>)}</div>
        </div>
      </div>
      <div className="education-block">
        <div className="education-heading">
          <p>Formación académica</p>
          <h3>Aprendizaje técnico, visual y centrado en las personas.</h3>
          <div className="academic-icons" aria-hidden="true">
            <motion.div className="graduation-icon" animate={{ y: [-8, 8, -8], rotate: [-3, 3, -3] }} transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}>
              <GraduationCap size={72} strokeWidth={1.45} />
            </motion.div>
            <motion.div className="graduation-icon academic-icon-secondary" animate={{ y: [7, -7, 7], rotate: [3, -3, 3] }} transition={{ duration: 7.2, repeat: Infinity, ease: 'easeInOut' }}>
              <BookOpen size={64} strokeWidth={1.4} />
            </motion.div>
          </div>
        </div>
        <div className="education-list">
          {education.map((item, index) => (
            <motion.article key={item.title} className="education-item" initial={{ opacity: 0, x: index % 2 === 0 ? 54 : -54 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .55, ease: [0.22, 1, 0.36, 1] }}>
              <span>{item.period}</span><div><h4>{item.title}</h4><p className="education-place">{item.place}</p><p>{item.detail}</p></div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
