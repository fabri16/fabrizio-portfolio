export type ProjectGalleryItem = {
  src: string;
  title: string;
  category: string;
  description: string;
};

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
  behanceUrl?: string;
  projectUrl?: string;
  gallery?: ProjectGalleryItem[];
  challenge?: string;
  process?: string;
  solution?: string;
};

export const projects: Project[] = [
  {
    id: 'pdg-industrial',
    index: '01',
    title: 'PDG Industrial',
    discipline: 'UX/UI · UX Research · Arquitectura de Información',
    year: '2026',
    description:
      'Diseño y desarrollo de la plataforma web corporativa para PDG Industrial. Una solución digital centrada en clarificar la oferta técnica de tableros eléctricos, comunicar solidez operativa y optimizar la generación de cotizaciones.',
    accent: '#e88325',
    secondary: '#121418',
    label: 'Industria / Producto digital',
    image: 'pdg-1.jpg',
    behanceUrl: 'https://www.behance.net/gallery/245625419/PDG-Industrial-Redeseno-UXUI',
    projectUrl: 'https://pdgindustrialvcp.com/',
    challenge:
      'PDG Industrial necesitaba transmitir 20 años de liderazgo técnico en fabricación de tableros eléctricos bajo normas IEC 61439 e ISO 9001. El desafío principal radicaba en organizar una amplia variedad de servicios técnicos e insumos para dos tipos de usuarios: ingenieros de planta (buscando especificaciones exactas) y gerentes comerciales (buscando tiempos de entrega y presupuestos ágiles).',
    process:
      'Se realizó una investigación de usuarios con contratistas e ingenieros, definiendo una arquitectura visual en modo oscuro industrial con tipografías de alto impacto (estilo técnico) y acentos en naranja institucional. Se diseñó un sistema modular de tarjetas de proyectos, widgets de telemetría en tiempo real y una estructura clara de 3 pilares de servicios.',
    solution:
      'Una plataforma integral que combina catálogo técnico de tableros, prueba social cuantificable (+500 tableros, 150+ clientes en 10 provincias) y un flujo directo de solicitud de presupuestos con respuesta garantizada en 48 horas.'
  },
  {
    id: 'tricount-research',
    index: '02',
    title: 'Tricount Research',
    discipline: 'UX Research',
    year: '2026',
    description:
      'Investigación sobre el reparto de gastos, fricciones interpersonales y la transparencia financiera al dividir deudas compartidas.',
    accent: '#5468ff',
    secondary: '#111a4d',
    label: 'Fintech / Investigación',
    image: 'tricount-cover.jpg',
    behanceUrl: 'https://www.behance.net/gallery/245626243/Tricount-UX-Research',
    challenge:
      'Comprender el contexto, ordenar la información y detectar por qué las personas evitan hablar de dinero compartido, encontrando las fricciones de usabilidad al dividir deudas grupales.',
    process:
      'Realización de entrevistas cuantitativas y cualitativas en profundidad, mapas de empatía, benchmarking competitivo, definición de arquetipos y diseño de flujos ágiles de pago.',
    solution:
      'Insights accionables e hipótesis de diseño que resolvieron cómo automatizar recordatorios de pago informales y transparentar el saldo neto acumulado.'
  },
  {
    id: 'falta-1',
    index: '03',
    title: 'Falta 1',
    discipline: 'Product Design · UX/UI · Coderhouse',
    year: '2026',
    description:
      'Aplicación móvil integral para conectar jugadores de fútbol amateur con complejos deportivos. Permite encontrar predios cercanos, reservar turnos en menos de 3 clics y armar partidos abiertos.',
    accent: '#39a96b',
    secondary: '#0b2f1f',
    label: 'SportsTech / App móvil',
    image: 'falta1-1.jpg',
    behanceUrl: 'https://www.behance.net/gallery/245627123/Falta-1-Proyecto-UxUi-Coderhouse',
    challenge:
      'Las personas que juegan al fútbol amateur sufren constantes fricciones: llamadas telefónicas canceladas, falta de visibilidad en horarios disponibles de canchas y partidos cancelados a último momento cuando falta un jugador ("falta 1"). Por el lado de los administradores de predios, la gestión manual genera cancelaciones sin cobrar y franjas horarias ociosas.',
    process:
      'Investigación completa de UX Research en Coderhouse: entrevistas en profundidad a jugadores y dueños de complejos, encuestas a comunidades locales, mapas de empatía y benchmarking. Se definieron dos user personas (Jugador de fin de semana y Administrador de predio) y se prototipó un sistema de diseño dinámico con componentes modulares en Figma.',
    solution:
      'Falta 1 resuelve el problema en dos frentes: para jugadores, un flujo de reserva ágil en 3 pasos con geolocalización y sistema de partidos abiertos para unirse cuando falta alguien; para dueños, un dashboard de gestión de reservas, calendario interactivo y control de señas en tiempo real.'
  },
  {
    id: 'te-veo-optica',
    index: '04',
    title: 'Te Veo Óptica',
    discipline: 'Branding · E-commerce · Tiendanube',
    year: '2026',
    description:
      'Creación integral de la identidad visual de la marca y desarrollo completo de su plataforma de e-commerce sobre Tiendanube, optimizando la experiencia de compra y el catálogo digital.',
    accent: '#243b6b',
    secondary: '#121b31',
    label: 'E-commerce / Identidad',
    image: 'teveo-cover.jpg',
    behanceUrl: 'https://www.behance.net/gallery/245628105/Te-Veo-Optica-E-commerce',
    projectUrl: 'https://teveooptica.com/',
    challenge:
      'Crear una experiencia de compra online ágil y de alta confianza para productos ópticos y lentes de sol, trasladando la profesionalidad y asesoramiento de una óptica física al entorno digital.',
    process:
      'Diseño conceptual del logotipo e identidad visual, paleta tipográfica y cromática, estructuración de las categorías del catálogo y configuración personalizada de pasarelas de pago y logística en Tiendanube.',
    solution:
      'Una plataforma de e-commerce moderna, fluida y con conversión optimizada, complementada por una identidad de marca coherente y de gran impacto visual.'
  }
];
