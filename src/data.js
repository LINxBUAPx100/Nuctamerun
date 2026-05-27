// ============================================================
// data.js — TODOS los textos y contenido editable del sitio
// Riders Media | Proyecto: Desafío de Nuctameron
// ============================================================

export const siteConfig = {
  brand: "Desafío de Nuctameron",
  tagline: "Psicoterapia Holística & Sabiduría Ancestral",
  terapeuta: "Irene Soto",
  // ⚠️ REEMPLAZAR con datos reales al momento del despliegue
  whatsapp: "529981234567",
  whatsappMessage: "Hola Irene, me interesa agendar una consulta.",
  calendlyUrl: "https://calendly.com/tu-usuario", // ← reemplazar con tu Calendly
  email: "contacto@desafiodenuctameron.com",
  instagram: "https://instagram.com/desafiodenuctameron",
  facebook: "https://facebook.com/desafiodenuctameron",
};

export const nav = {
  links: [
    { label: "Inicio", href: "#inicio" },
    { label: "Mi Camino", href: "#sobre-mi" },
    { label: "Servicios", href: "#servicios" },
    { label: "Ceremonias", href: "#ceremonias" },
    { label: "Sabiduría", href: "#blog" },
    { label: "Contacto", href: "#contacto" },
  ],
  ctaLabel: "Agenda tu Consulta",
};

export const hero = {
  eyebrow: "Psicoterapia Holística · Numerología · Tarot · Astrología · Kabbalah",
  headline: "Descubre tu propósito.\nSana tu historia.",
  subheadline:
    "Muchas personas cargan con heridas que no comprenden, buscando respuestas en lugares equivocados. A través de la sabiduría holística y las ciencias del alma, te acompaño a descifrar los patrones de tu vida, liberar lo que ya no te sirve y alinearte con tu misión.",
  ctaPrimary: { label: "Agenda tu Consulta — $700 MXN", href: "#servicios" },
  ctaSecondary: { label: "Conoce mi historia", href: "#sobre-mi" },
  stats: [
    { value: "28+", label: "Años de práctica" },
    { value: "500+", label: "Vidas transformadas" },
    { value: "4", label: "Disciplinas integradas" },
  ],
};

export const about = {
  eyebrow: "El Viaje de Nuctameron",
  headline: "Quien ha cruzado el fuego puede guiar a otros a través de él",
  story: [
    "Nuctameron no es solo un nombre. Es el registro de un desafío: la travesía interior que cada alma enfrenta cuando la vida la lleva a sus límites más profundos.",
    "Irene Soto llegó a la psicoterapia holística no desde los libros, sino desde la propia experiencia de haberse reconstruido. Después de atravesar pruebas que pusieron a prueba su fe, su identidad y su fortaleza, encontró en la numerología, el tarot, la astrología y la kabbalah no herramientas de adivinación, sino mapas del alma.",
    "Hoy, con más de una década acompañando a personas, Irene integra el rigor de la psicoterapia con la profundidad de las tradiciones esotéricas. Su metodología no promete magia instantánea: ofrece comprensión real, herramientas concretas y un espacio sagrado para que el cambio genuino ocurra.",
    "Si sientes que hay algo en ti que todavía no ha podido desplegarse, probablemente ya es tiempo de que lo conozcas.",
  ],
  credentials: [
    "Psicoterapeuta Holística certificada",
    "Numeróloga con enfoque terapéutico",
    "Lectora de Tarot e intérprete astrológica",
    "Facilitadora de Ceremonias de Fuego y Retiros de Transformación",
    "Maestra de Kabbalah aplicada",
  ],
};

export const services = {
  eyebrow: "Consultas y Disciplinas",
  headline: "Un espacio para cada etapa de tu transformación",
  intro:
    "Cada disciplina actúa como un lente diferente para leer tu historia. Juntas, construyen una visión completa de quién eres y hacia dónde vas.",
  featured: {
    tag: "Servicio de Entrada",
    name: "Consulta de Alineación",
    duration: "60 minutos",
    price: "$700 MXN",
    description:
      "Una sesión privada y personalizada donde integramos las disciplinas más pertinentes para tu momento actual. Analizamos tu mapa numerológico, tu carta natal o la tirada de Tarot que mejor responda a lo que estás viviendo. Recibes claridad, orientación y herramientas concretas para las semanas siguientes.",
    includes: [
      "Análisis de tu perfil numerológico o carta astral",
      "Lectura de Tarot enfocada en tu situación actual",
      "Plan de acción holístico personalizado",
      "Sesión por videollamada (Google Meet o Zoom)",
      "Confirmación automática de cita y enlace de sesión",
    ],
    ctaLabel: "Reservar mi Consulta",
  },
  disciplines: [
    {
      icon: "◈",
      name: "Numerología",
      tagline: "El lenguaje matemático del destino",
      description:
        "Tu fecha de nacimiento y tu nombre contienen un código único que revela tus dones innatos, tus ciclos vitales y los patrones que se repiten en tu vida. La numerología no predice: descifra.",
      bullets: [
        "Número de vida y misión de alma",
        "Ciclos personales anuales y mensuales",
        "Compatibilidades en relaciones y negocios",
      ],
    },
    {
      icon: "♡",
      name: "Tarot Terapéutico",
      tagline: "Espejo del inconsciente en 78 arquetipos",
      description:
        "El tarot no adivina el futuro: refleja tu estado interior, tus bloqueos inconscientes y las fuerzas en movimiento en tu vida. Cada tirada es una conversación profunda entre tu mente consciente y tu sabiduría más honda.",
      bullets: [
        "Lecturas temáticas: amor, propósito, carrera",
        "Integración con sesión terapéutica",
        "Enfoque en empoderamiento, no en dependencia",
      ],
    },
    {
      icon: "⊕",
      name: "Astrología",
      tagline: "Tu carta natal como manual de instrucciones",
      description:
        "La posición de los astros en el momento de tu nacimiento crea un mapa único de tu psicología, tus dones y tus áreas de aprendizaje. La astrología moderna es una herramienta de autoconocimiento profunda y precisa.",
      bullets: [
        "Lectura de carta natal completa",
        "Tránsitos actuales y su impacto personal",
        "Astrología de relaciones (sinastría)",
      ],
    },
    {
      icon: "❋",
      name: "Kabbalah",
      tagline: "La ciencia de la luz y la transformación del alma",
      description:
        "La Kabbalah es el sistema de sabiduría más antiguo del mundo occidental. A través del Árbol de la Vida, exploramos los niveles del alma, los bloqueos kármicos y el camino hacia la plenitud espiritual y material.",
      bullets: [
        "Lectura del Árbol de la Vida personal",
        "Trabajo con sephiroth y canales de energía",
        "Integración con disciplinas complementarias",
      ],
    },
  ],
};

export const ceremonies = {
  eyebrow: "Experiencias Grupales",
  headline: "Ceremonias y Retiros de Transformación",
  intro:
    "Existen momentos en que el cambio necesita más que una conversación: necesita un rito. Las ceremonias de fuego y los retiros de transformación son espacios colectivos donde el alma suelta lo que ya no necesita y recibe lo que estaba esperando.",
  items: [
    {
      type: "Ceremonia",
      name: "Ceremonia de Fuego Sagrado",
      description:
        "Una experiencia ritual de liberación y renacimiento. A través del fuego como elemento purificador, los participantes sueltan contratos emocionales, creencias limitantes y patrones heredados que les impiden avanzar. Guiada con intención y seguridad, cada ceremonia es única e irrepetible.",
      details: [
        "Grupos de hasta 12 personas",
        "Duración: 3 a 4 horas",
        "Incluye preparación energética previa",
        "Sede: Quintana Roo y localidades acordadas",
      ],
      cta: "Pre-registrarme",
    },
    {
      type: "Retiro",
      name: "Retiro de Alineación Profunda",
      description:
        "Una inmersión de fin de semana donde integramos numerología, constelaciones simbólicas, meditación guiada y ceremonias de tierra. Diseñado para personas que sienten que necesitan un punto de quiebre consciente: un antes y un después.",
      details: [
        "Formato: viernes noche a domingo mediodía",
        "Grupos pequeños e íntimos (máx. 8 personas)",
        "Alojamiento y alimentación incluidos (próximas fechas)",
        "Sede principal: Riviera Maya, Quintana Roo",
      ],
      cta: "Solicitar información",
    },
  ],
  ctaNote:
    "Las fechas de las próximas ceremonias y retiros se publican con anticipación. Déjanos tus datos para recibir notificaciones prioritarias.",
};

export const blog = {
  eyebrow: "El Oráculo",
  headline: "Sabiduría para el camino",
  intro:
    "Lecturas, reflexiones y guías para quienes están en el proceso de descubrirse. Publicaciones regulares sobre los temas que más importan en el camino del autoconocimiento.",
  posts: [
    {
      category: "Protección Energética",
      title: "¿Cómo saber si estoy siendo afectado por energías externas?",
      excerpt:
        "Señales que tu cuerpo y tu mente envían cuando hay interferencias energéticas en tu campo, y los primeros pasos para identificarlas y trabajarlas.",
      readTime: "6 min de lectura",
    },
    {
      category: "Dones Divinos",
      title: "Cómo descubrir tus dones: lo que tu número de vida revela",
      excerpt:
        "Tu fecha de nacimiento no es un accidente. Contiene el código de tus capacidades naturales, los talentos que viniste a desarrollar y la forma en que mejor sirves al mundo.",
      readTime: "8 min de lectura",
    },
    {
      category: "Misión de Vida",
      title: "¿Cuál es tu misión en esta encarnación? Tres mapas para descubrirla",
      excerpt:
        "Numerología, carta natal y kabbalah coinciden en algo: cada persona trae un propósito específico. Aprende a leer los tres sistemas y encuentra los puntos de convergencia de tu misión.",
      readTime: "10 min de lectura",
    },
    {
      category: "Relaciones",
      title: "Vínculos kármicos y almas gemelas: qué dice tu numerología relacional",
      excerpt:
        "No todas las relaciones intensas son de amor romántico, y no todas las relaciones de amor romántico son positivas. La numerología te ayuda a entender el verdadero propósito de cada vínculo.",
      readTime: "7 min de lectura",
    },
    {
      category: "Ciclos Vitales",
      title: "El Año Personal: cómo navegar tu ciclo numerológico actual",
      excerpt:
        "Cada año vivimos un ciclo numerológico diferente que marca el tono de nuestras experiencias. Conocer el tuyo te da una ventaja enorme para tomar decisiones alineadas.",
      readTime: "5 min de lectura",
    },
    {
      category: "Kabbalah",
      title: "Los 10 sephiroth y cómo se manifiestan en tu vida cotidiana",
      excerpt:
        "El Árbol de la Vida no es una abstracción mística: es un mapa funcional de cómo la energía fluye (o se bloquea) en tus relaciones, trabajo, salud y espiritualidad.",
      readTime: "9 min de lectura",
    },
  ],
};

export const testimonials = {
  eyebrow: "Voces del Camino",
  headline: "Lo que dicen quienes ya dieron el paso",
  items: [
    {
      text: "Llegué a Irene en uno de los momentos más confusos de mi vida. En una sola sesión de numerología entendí patrones que había repetido por 15 años. Fue como que alguien encendiera la luz en una habitación que siempre había estado a oscuras.",
      author: "Mariana G.",
      location: "Cancún, Q. Roo",
      service: "Consulta de Numerología",
    },
    {
      text: "La ceremonia de fuego fue una de las experiencias más poderosas de mi vida. No soy una persona 'espiritual' en el sentido convencional, pero lo que viví esa noche fue completamente real y transformador. Salí siendo otra persona.",
      author: "Roberto T.",
      location: "Playa del Carmen, Q. Roo",
      service: "Ceremonia de Fuego Sagrado",
    },
    {
      text: "Tenía mucho escepticismo cuando mi hermana me recomendó ir. Lo que me sorprendió fue la seriedad y el enfoque terapéutico de Irene. No es adivinación: es un trabajo profundo y honesto. Ya llevo tres sesiones y el cambio es visible.",
      author: "Claudia M.",
      location: "Ciudad de México",
      service: "Consulta de Alineación",
    },
    {
      text: "Mi carta natal con Irene fue reveladora. Entendí por qué ciertas áreas de mi vida siempre han sido más difíciles, y más importante, entendí qué hacer con eso. La astrología en sus manos es una herramienta de crecimiento real.",
      author: "Andrea P.",
      location: "Mérida, Yucatán",
      service: "Lectura Astral",
    },
  ],
};

export const contact = {
  eyebrow: "Primer Paso",
  headline: "Comienza tu transformación hoy",
  intro:
    "Puedes agendar tu consulta directamente usando el calendario, o si prefieres hablar antes de decidir, escríbeme por WhatsApp. No hay preguntas incómodas.",
  form: {
    namePlaceholder: "Tu nombre completo",
    emailPlaceholder: "Tu correo electrónico",
    servicePlaceholder: "¿Qué servicio te interesa?",
    messagePlaceholder: "Cuéntame brevemente qué te trae aquí...",
    submitLabel: "Enviar mensaje",
  },
  serviceOptions: [
    "Consulta de Alineación ($700 MXN)",
    "Numerología",
    "Tarot Terapéutico",
    "Astrología / Carta Natal",
    "Kabbalah",
    "Ceremonia de Fuego",
    "Retiro de Transformación",
    "Otro / Tengo una pregunta",
  ],
  infoBlocks: [
    {
      label: "Consultas en línea",
      value: "Todo México y Latinoamérica",
    },
    {
      label: "Ceremonias presenciales",
      value: "Quintana Roo y sedes alternas",
    },
    {
      label: "Respuesta por WhatsApp",
      value: "En menos de 24 horas",
    },
  ],
};

export const footer = {
  tagline: "Psicoterapia Holística · Numerología · Tarot · Astrología · Kabbalah",
  copy: `© ${new Date().getFullYear()} Desafío de Nuctameron. Irene Soto. Todos los derechos reservados.`,
  developerCredit: "Sitio desarrollado por Riders Media",
  developerUrl: "https://www.riders.media",
  legalNote:
    "Los servicios ofrecidos tienen carácter de orientación y acompañamiento holístico. No sustituyen tratamiento médico, psicológico o psiquiátrico profesional.",
};
