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
    challenge:
      'PDG Industrial necesitaba transmitir 20 años de liderazgo técnico en fabricación de tableros eléctricos bajo normas IEC 61439 e ISO 9001. El desafío principal radicaba en organizar una amplia variedad de servicios técnicos e insumos para dos tipos de usuarios: ingenieros de planta (buscando especificaciones exactas) y gerentes comerciales (buscando tiempos de entrega y presupuestos ágiles).',
    process:
      'Se realizó una investigación de usuarios con contratistas e ingenieros, definiendo una arquitectura visual en modo oscuro industrial con tipografías de alto impacto (estilo técnico) y acentos en naranja institucional. Se diseñó un sistema modular de tarjetas de proyectos, widgets de telemetría en tiempo real y una estructura clara de 3 pilares de servicios.',
    solution:
      'Una plataforma integral que combina catálogo técnico de tableros, prueba social cuantificable (+500 tableros, 150+ clientes en 10 provincias) y un flujo directo de solicitud de presupuestos con respuesta garantizada en 48 horas.',
    gallery: [
      {
        src: 'pdg-1.jpg',
        title: '01. Pantalla Principal y Telemetría Técnica',
        category: 'Hero & Propuesta de Valor',
        description: 'Jerarquía tipográfica brutalista con datos de telemetría industrial activa (380V ONLINE, PLC S7-1500 RUN) para generar validación técnica inmediata desde el primer segundo.'
      },
      {
        src: 'pdg-2.jpg',
        title: '02. Institucional y Certificaciones Normativas',
        category: 'Quiénes Somos & Confianza',
        description: 'Sección de respaldo operativo que destaca el cumplimiento de normas internacionales (IEC 61439, ISO 9001) y soporte 24/7 en planta.'
      },
      {
        src: 'pdg-3.jpg',
        title: '03. Servicios Diseñados para Producción Continua',
        category: 'Arquitectura de Servicios',
        description: 'Organización tripartita de servicios: Tableros Eléctricos, Suministro de Materiales y Asesoramiento Técnico con desglose claro de componentes y normas.'
      },
      {
        src: 'pdg-4.jpg',
        title: '04. Casos que Prendieron la Industria Argentina',
        category: 'Prueba Social y Métricas',
        description: 'Módulo de impacto cuantitativo mostrando +500 tableros entregados, 150+ clientes activos y presencia en 10 provincias para infundir confianza comercial.'
      },
      {
        src: 'pdg-5.jpg',
        title: '05. Catálogo de Proyectos y Tableros Destacados',
        category: 'Grilla de Casos Reales',
        description: 'Filtro visual de proyectos clasificados por industria (Saneamiento, Salud, Agua Potable) con acceso directo a fichas técnicas de montaje.'
      },
      {
        src: 'pdg-6.jpg',
        title: '06. Detalle Técnico de Producto (Tablero de Bombeo)',
        category: 'Ficha Técnica Modal',
        description: 'Visor fotográfico detallado de tableros fabricados en taller (Tablero Bombeo Aguas Negras 2025) con descripción de bombas sumergibles, arranque automático y protecciones.'
      },
      {
        src: 'pdg-7.jpg',
        title: '07. Conversión y Solicitud Directa de Presupuesto',
        category: 'Sección de Contacto',
        description: 'Cierre enfocado en la conversión rápida mediante canal directo de WhatsApp y formulario de cotización técnica en 48 horas hábiles.'
      }
    ]
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


