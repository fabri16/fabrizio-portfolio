import { ScrollWrite } from './ScrollWrite';

const services = [
  ['01', 'UX/UI Design', 'Diseño y rediseño de sitios, aplicaciones y productos digitales centrados en necesidades reales.'],
  ['02', 'UX Research', 'Entrevistas, benchmarking, análisis heurístico y pruebas para convertir evidencia en decisiones.'],
  ['03', 'Branding', 'Identidades visuales y sistemas gráficos coherentes para marcas nuevas o en transformación.'],
  ['04', 'Diseño web', 'Landing pages, portfolios y sitios institucionales con foco en claridad, posicionamiento y conversión.']
];

export function Services() {
  return (
    <section id="servicios" className="section services-section">
      <div className="section-heading section-heading-no-label">
        <h2><ScrollWrite from="rgba(255,255,255,.2)" to="rgba(255,255,255,1)">Cómo puedo ayudarte.</ScrollWrite></h2>
      </div>
      <div className="services-grid">
        {services.map(([number, title, description]) => (
          <article key={number} className="service-card">
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
