export type Project = {
  id: string;
  index: string;
  title: string;
  discipline: string;
  year: string;
  description: string;
  accent: string;
  secondary: string;
  label: string;
};

export const projects: Project[] = [
  {
    id: 'pdg-industrial',
    index: '01',
    title: 'PDG Industrial',
    discipline: 'UX/UI · UX Research',
    year: '2026',
    description:
      'Rediseño integral de una plataforma industrial para mejorar la navegación, explicar servicios complejos y aumentar las consultas comerciales.',
    accent: '#e88325',
    secondary: '#1f232b',
    label: 'Industria / Producto digital'
  },
  {
    id: 'tricount-research',
    index: '02',
    title: 'Tricount Research',
    discipline: 'UX Research',
    year: '2026',
    description:
      'Investigación sobre reparto de gastos, transparencia de deudas y fricciones entre personas al dividir consumos compartidos.',
    accent: '#5468ff',
    secondary: '#111a4d',
    label: 'Fintech / Investigación'
  },
  {
    id: 'reserva-canchas',
    index: '03',
    title: 'Reserva de Canchas',
    discipline: 'Product Design · UX/UI',
    year: '2026',
    description:
      'Experiencia móvil para conectar jugadores con complejos deportivos mediante reservas rápidas, perfiles y partidos abiertos.',
    accent: '#39a96b',
    secondary: '#0b2f1f',
    label: 'SportsTech / App móvil'
  },
  {
    id: 'idea',
    index: '04',
    title: 'IDEA',
    discipline: 'Branding · Dirección de arte',
    year: '2026',
    description:
      'Identidad para un estudio que conecta branding e interiorismo mediante un sistema visual técnico, flexible y contemporáneo.',
    accent: '#243b6b',
    secondary: '#121b31',
    label: 'Estudio creativo / Identidad'
  }
];
