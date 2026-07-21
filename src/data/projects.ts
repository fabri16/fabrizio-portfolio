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
  image?: string;
  mockupImages?: string[];
  challenge?: string;
  process?: string;
  solution?: string;
};

export const projects: Project[] = [
  {
    id: 'pdg-industrial',
    index: '01',
    title: 'PDG Industrial',
    discipline: 'UX/UI · UX Research · Web',
    year: '2026',
    description:
      'Diseño y desarrollo de la plataforma web de soluciones eléctricas industriales. Estructura clara para tableros eléctricos, casos en producción y canal directo de cotización.',
    accent: '#e88325',
    secondary: '#121418',
    label: 'Industria / Producto digital',
    image: 'pdg-1.jpg',
    mockupImages: ['pdg-1.jpg', 'pdg-2.jpg', 'pdg-3.jpg'],
    challenge:
      'Explicar servicios técnicos complejos (tableros de bombeo de aguas negras, hospitalarios y potabilizadoras) de manera clara para ingenieros y decisores comerciales, jerarquizando datos de impacto.',
    process:
      'Arquitectura de información técnica, UI en modo oscuro de alto contraste con acentos naranja industrial, telemetría en tiempo real y flujo directo a cotización.',
    solution:
      'Una plataforma robusta e intuitiva que destaca los +500 tableros entregados, 20 años de trayectoria y facilita solicitudes de presupuesto en 48hs.'
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
    label: 'Fintech / Investigación',
    challenge:
      'Comprender el contexto, ordenar la información y transformar una necesidad compleja en una experiencia fácil de entender y usar.',
    process:
      'Investigación, análisis competitivo, arquitectura de información, wireframes, iteraciones visuales y validación de los puntos críticos.',
    solution:
      'Un sistema coherente y escalable que prioriza claridad, jerarquía visual y acciones concretas para usuarios y objetivos de negocio.'
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
    label: 'SportsTech / App móvil',
    challenge:
      'Simplificar el flujo de reserva de complejos deportivos reduciendo pasos a menos de 3 clics y habilitando partidos abiertos entre comunidades.',
    process:
      'Investigación con jugadores y administradores, prototipado de alta fidelidad, diseño del sistema de componentes y validación de usabilidad.',
    solution:
      'Aplicación ágil y moderna con mapa interactivo, disponibilidad en tiempo real y confirmación instantánea de turnos.'
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
    label: 'Estudio creativo / Identidad',
    challenge:
      'Crear una marca que comunique precisión arquitectónica y sensibilidad estética sin caer en clichés tradicionales.',
    process:
      'Estrategia de marca, universo cromático, grilla tipográfica técnica y diseño de aplicaciones impresas y digitales.',
    solution:
      'Un sistema de identidad modular y atemporal adaptado a publicaciones editoriales, señalética y plataformas web.'
  }
];

