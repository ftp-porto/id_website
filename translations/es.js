window.FTP_TRANSLATIONS = window.FTP_TRANSLATIONS || {};

window.FTP_TRANSLATIONS.es = {
  meta: {
    title: "FTP Lab — Donde la Investigación se Convierte en Realidad",
    description:
      "Un recorrido guiado por scroll dentro del laboratorio de I+D de FTP. Cinco proyectos internacionales. Doce especialistas. De Oporto al mundo.",
  },
  ui: {
    themeToggle: "Cambiar modo claro / oscuro",
    languageLabel: "Seleccionar idioma",
    languageNames: {
      en: "English",
      pt: "Português",
      es: "Español",
      fr: "Français",
    },
    nav: {
      top: "Inicio",
      solutions: "Soluciones",
      projects: "Proyectos",
      team: "Equipo",
      blog: "Blog",
      about: "Sobre",
      contact: "Contacto",
    },
  },
  labels: {
    liveDemo: "Demo en vivo",
    visitAcademy: "Visitar Academy ↗",
    talkToUs: "Habla con nosotros →",
    solutionBlocks: {
      what: "Qué Hace",
      why: "Por Qué Importa",
      key: "Capacidades Clave",
      how: "Cómo Funciona",
      adapt: "Diseñado para Adaptarse",
    },
    problem: "Problema",
    solution: "Solución",
  },
  hud: {
    scanning: "ESCANEANDO",
    coords: "N 41.21° · W 8.55°",
    location: "PORTO / PT",
    stageLabels: [
      "RUTA NEURONAL · ENTRADA",
      "DESPERTAR · CÓRTEX",
      "MANIFIESTO · PROFUNDO",
      "EL LAB · NÚCLEO",
      "PROYECTO · EARS",
      "PROYECTO · EXPAI",
      "PROYECTO · ELFMO",
      "PROYECTO · CAPE",
      "PROYECTO · OMD",
      "ATLAS · 5 CIUDADES",
      "LAS MENTES",
      "INVITACIÓN",
    ],
  },
  journey: {
    awakening: {
      kicker: ["I+D", "Studio", "Desde 1999"],
      titleHtml:
        '<span class="display__line"><span data-cue>De la</span> <span data-cue>investigación</span></span><span class="display__line"><span data-cue>a la</span> <em data-cue>realidad.</em></span>',
      ledeHtml:
        "Somos <strong>FTP</strong> — un laboratorio portugués que transforma la investigación científica en sistemas empresariales aplicados y de alto impacto.",
    },
    manifesto: {
      chapter: "/ Capítulo 01 · Manifiesto",
      bodyHtml:
        "No solo construimos software. Construimos la capa invisible donde la <em>investigación</em> se convierte en un botón que puedes pulsar, en una decisión que una máquina puede <em>explicar</em>, en un coste que desaparece silenciosamente.",
      signature: "— FTP / Departamento de I+D · Porto",
    },
    lab: {
      chapter: "/ Capítulo 02 · El Lab",
      titleHtml: "Un <em>laboratorio</em><br/>con forma de empresa.",
      stats: [
        { value: "27", suffix: "años", label: "desde 1999" },
        { value: "5", suffix: "proyectos", label: "consorcios activos de I+D" },
        { value: "8", suffix: "países", label: "PT · TR · KR · ES · RO" },
        { value: "5", suffix: "papers", label: "IEEE · Procedia · 2025–26" },
      ],
    },
    projects: [
      {
        chapter: "/ Capítulo 03 · Proyecto I de V",
        tag: "ITEA · Norte 2030 · 10 socios",
        status: "En curso · 2023–2026",
        title: "EARS",
        sub: "Recomendación Inteligente para Servicios Remotos",
        bodyHtml:
          "Un marco federado y explicable de recomendación que aprende en <em>nueve sectores</em> — IT, salud, justicia, e-commerce, telemarketing, industria, logística, electrónica y software — y <em>explica</em> cada sugerencia que produce. Open-source. Privacidad desde el diseño.",
        chips: [
          "Sistemas de Recomendación",
          "IA Explicable",
          "Aprendizaje Federado",
          "Context-Aware",
        ],
      },
      {
        chapter: "/ Proyecto II de V",
        tag: "ITEA 4 · Smart Industry · 10 socios",
        status: "En curso · 2024–2026",
        title: "EXPAI",
        sub: "Smart Industry · IA Explicable para Control Industrial",
        bodyHtml:
          "Cerrando la brecha entre la <em>IA de caja negra</em> y los entornos industriales de alta precisión. Visión por Computador sobre flujos de sensores, retopología 3D automática y robots móviles autónomos, todo bajo una capa XAI que hace cada decisión <em>auditable</em>.",
        chips: ["XAI", "Visión por Computador", "Robótica AMR", "Retopología 3D"],
      },
      {
        chapter: "/ Proyecto III de V",
        tag: "ITEA · Norte 2030 · 14 socios",
        status: "En curso · 2024–2027",
        title: "ELFMO",
        sub: "Enterprise Large Foundation Models",
        bodyHtml:
          "Un marco de ingeniería basado en riesgo que permite a las empresas adoptar <em>foundation models</em> sin perder el control de datos, propiedad intelectual o cumplimiento. Integración modular con ERP. Chatbot especializado en PHC. Modelos fundacionales viviendo dentro de los sistemas que el negocio ya utiliza.",
        chips: ["IA Generativa", "Adaptación LFM", "Integración ERP", "RGPD · AI Act"],
      },
      {
        chapter: "/ Proyecto IV de V",
        tag: "ITEA 4 · 15 socios · 5 países",
        status: "En curso · 2024–2027",
        title: "CAPE",
        sub: "Asistente Cognitivo para Entornos Phygital",
        bodyHtml:
          "Una plataforma de retail que combina IA, IoT, blockchain y deep learning — cinco casos de uso que van desde la <em>seguridad inteligente en fabricación</em> hasta operaciones de tienda, bienestar del empleado y comercio personalizado.",
        chips: ["IoT", "Blockchain", "Deep Learning", "Visión por Computador"],
      },
      {
        chapter: "/ Proyecto V de V",
        tag: "Cross-domain · 8 socios",
        status: "Finalizado · 2022–2023",
        title: "OMD",
        sub: "Gestión Cognitiva de la Demanda de Servicios",
        bodyHtml:
          "Comprensión de voz y texto aplicada a un caso real de e-commerce con Nimco, empresa portuguesa de calzado. Demostración de que la <em>gestión de servicio basada en NLP</em> puede superar al ticketing basado en reglas.",
        chips: ["NLP", "ML", "Speech-to-Text"],
      },
    ],
    atlas: {
      chapter: "/ Capítulo 04 · Atlas",
      titleHtml: "De Oporto<br/>al <em>mundo</em>.",
      pins: [
        { city: "Porto", label: "Sede" },
        { city: "Madrid", label: "EXPAI" },
        { city: "Bucarest", label: "OMD · EARS" },
        { city: "Ankara", label: "EARS · EXPAI" },
        { city: "Daegu", label: "plenario EXPAI" },
        { city: "Canadá", label: "" },
        { city: "Ucrania", label: "" },
        { city: "Gran Bretaña", label: "" },
      ],
      copy:
        "Plenarios en Ankara (nov. '25) y Daegu (abr. '26). Próxima parada: una demo unificada para la revisión ITEA.",
    },
    minds: {
      chapter: "/ Capítulo 05 · Las Mentes",
      titleHtml: "Las personas<br/>que hacen el <em>pensamiento</em>.",
      quotes: [
        {
          quote:
            "Las empresas que integran IA aplicada no reaccionan al mercado — lo anticipan.",
          captionHtml: "<strong>Fábio</strong> · <span>Director de Departamento</span>",
        },
        {
          quote: "Con IA, el límite ya no es el tiempo — es la imaginación.",
          captionHtml: "<strong>Teixeira</strong> · I&amp;D · ELFMO",
        },
        {
          quote:
            "La innovación nace cuando convertimos el esfuerzo recurrente en soluciones permanentes.",
          captionHtml: "<strong>Cruz</strong> · I&amp;D · Visión por Computador",
        },
        {
          quote:
            "Mezclar un poco de magia con mucha inteligencia para construir el futuro.",
          captionHtml: "<strong>Mariana</strong> · I&amp;D · 3D Graphics &amp; EXPAI",
        },
        {
          quote:
            "Del caos de las ideas a la elegancia de los resultados — haciéndolos volar.",
          captionHtml: "<strong>Isabel</strong> · <span>Project Manager</span>",
        },
      ],
    },
    invite: {
      chapter: "/ Capítulo Final · Invitación",
      titleHtml:
        '<span data-cue>Donde la</span><span data-cue>confianza</span><em data-cue>digital</em><span data-cue>empieza.</span>',
      lede: "Sigue bajando — el laboratorio, en detalle.",
    },
  },
  innovation: {
    kicker: "/ Líneas de Innovación",
    items: [
      "Visión por Computador",
      "Automatización Inteligente",
      "Analítica de Datos",
      "Digital Twins",
      "Sistemas Predictivos",
      "I+D Aplicada",
      "3D & Gráficos por Computador",
    ],
  },
  solutions: {
    header: {
      kicker: "/ Soluciones & Servicios",
      titleHtml: "Soluciones innovadoras &amp; servicios <em>profesionales</em>.",
      lede:
        "Impulsamos la transformación digital mediante IA avanzada e ingeniería de software especializada. Cinco motores transversales a cualquier sector, listos para entrar en un negocio real.",
    },
    items: [
      {
        id: "sol-recommender",
        ariaLabel: "Recomendador Híbrido Explicable — demo en vivo",
        title: "Recomendador Híbrido Explicable",
        tag: "e-commerce · cross-domain · WordPress",
        lead:
          "Un sistema híbrido de recomendación explicable que ofrece sugerencias personalizadas con razonamiento claro y basado en evidencia.",
        intro: [
          "Nuestro sistema está diseñado para ofrecer recomendaciones altamente relevantes y también <em>explicaciones claras y útiles</em> detrás de cada decisión.",
          "En muchos sistemas, la recomendación aparece como una salida opaca. Aquí combinamos modelado avanzado con explicabilidad integrada para que cada resultado sea <em>preciso e interpretable</em>.",
        ],
        blocks: [
          {
            key: "what",
            content: [
              { type: "p", html: "El sistema analiza múltiples capas de señales de usuario y producto para generar recomendaciones personalizadas, incluyendo:" },
              {
                type: "ul",
                items: [
                  "Histórico de interacción",
                  "Patrones de compra y conversión",
                  "Señales colaborativas entre usuarios similares",
                ],
              },
              { type: "p", html: "Cada resultado viene acompañado de una explicación breve en lenguaje natural, anclada en los datos usados durante el ranking." },
            ],
          },
          {
            key: "why",
            content: [
              { type: "p", html: "Entender <em>por qué</em> algo se recomienda aumenta la confianza, mejora la experiencia y apoya mejores decisiones. El sistema garantiza que:" },
              {
                type: "ul",
                items: [
                  "Las recomendaciones siguen siendo consistentes y justificables",
                  "Las explicaciones reflejan el comportamiento real del modelo",
                  "Las salidas pueden validarse y generar confianza",
                ],
              },
            ],
          },
          {
            key: "key",
            content: [
              {
                type: "ul",
                items: [
                  "Recomendaciones personalizadas basadas en comportamiento y contexto",
                  "Explicabilidad integrada con razonamiento basado en evidencia",
                  "Modelado híbrido con datos históricos, conductuales y colaborativos",
                  "Salida en lenguaje natural con explicaciones legibles",
                  "Arquitectura reutilizable y agnóstica al dominio",
                ],
              },
            ],
          },
          {
            key: "how",
            content: [
              { type: "p", html: "El sistema utiliza un modelo híbrido para ordenar ítems desde varias fuentes de señal. Un modelo de lenguaje traduce la evidencia estructurada en explicaciones breves, garantizando recomendaciones <em>basadas en datos</em> y <em>comprensibles</em>." },
            ],
          },
          {
            key: "adapt",
            content: [
              { type: "p", html: "Esta solución funciona como capa base para productos específicos. Su diseño modular permite integrarse en plataformas distintas sin perder rendimiento ni explicabilidad." },
            ],
          },
        ],
        chips: [
          "Sistemas de Recomendación",
          "IA Explicable",
          "Modelado Híbrido",
          "Salida en Lenguaje Natural",
          "Agnóstico al Dominio",
        ],
      },
      {
        id: "sol-emotion",
        ariaLabel: "Reconocimiento Multimodal de Emociones — demo en vivo",
        title: "Reconocimiento Multimodal de Emociones",
        tag: "experiencia del cliente · workplace",
        lead:
          "Prosodia de voz, microexpresiones faciales y contenido hablado fusionados en un perfil emocional unificado — en tiempo real, con privacidad y listo para federated learning.",
        intro: [
          "Nuestro sistema lee la <em>señal completa</em> que una persona emite: cómo suena, cómo se mueve su cara y qué dice. En lugar de depender de un solo canal, fusiona audio, vídeo y texto en un único estado emocional.",
          "La arquitectura está diseñada para contextos sensibles: la inferencia puede ejecutarse en el edge, los modelos son <em>federated-ready</em> y el mismo motor funciona tanto en atención al cliente como en entornos de trabajo.",
        ],
        blocks: [
          {
            key: "what",
            content: [
              {
                type: "ul",
                items: [
                  "Analiza tono, ritmo y prosodia de voz",
                  "Lee expresiones y microexpresiones faciales",
                  "Procesa contenido hablado y metadatos contextuales",
                  "Predice categoría e intensidad emocional",
                ],
              },
            ],
          },
          {
            key: "why",
            content: [
              { type: "p", html: "Mejora la satisfacción del cliente adaptando respuestas al <em>contexto emocional</em> en tiempo real. Detecta estrés, incomodidad o desconexión de forma temprana. Apoya el bienestar del empleado mediante monitorización continua y voluntaria." },
            ],
          },
          {
            key: "key",
            content: [
              {
                type: "ul",
                items: [
                  "Detección multimodal en audio, vídeo y texto",
                  "Inferencia en tiempo real para interacciones en vivo",
                  "Lista para aprendizaje federado sin centralizar datos",
                  "Diseño orientado a la privacidad con procesamiento local",
                  "Taxonomías emocionales configurables por dominio",
                ],
              },
            ],
          },
          {
            key: "how",
            content: [
              { type: "p", html: "Tres encoders especializados extraen señales de voz, rostro y texto en paralelo. Una capa de fusión las combina en un <em>embedding emocional unificado</em>, que luego se transforma en predicciones de categoría e intensidad." },
            ],
          },
          {
            key: "adapt",
            content: [
              { type: "p", html: "Puede integrarse en un contact center, una experiencia retail, un programa interno de bienestar o un estudio clínico. El mismo núcleo se adapta mediante fine-tuning ligero y ya sustenta parte de nuestro trabajo en <em>EARS</em>." },
            ],
          },
        ],
        chips: [
          "Detección Multimodal",
          "Inferencia en Tiempo Real",
          "Lista para Aprendizaje Federado",
          "Privacy-Aware",
          "Audio · Vídeo · Texto",
        ],
      },
      {
        id: "sol-erp",
        ariaLabel: "Asistente Virtual ERP — demo en vivo",
        title: "Asistente Virtual ERP",
        tag: "PHC · Sage · Primavera",
        lead:
          "Una interfaz conversacional inteligente que simplifica cómo las empresas interactúan con sus sistemas de gestión — facturas, informes, previsiones y respuestas, sin menús.",
        intro: [
          "Nuestro Asistente Virtual ERP convierte el ERP de una <em>herramienta guiada por menús</em> en un <em>socio conversacional</em>. En lugar de navegar por formularios e informes, el usuario pregunta y el sistema responde con base en sus propios datos.",
          "El asistente se conecta directamente a PHC, Sage, Primavera y otros ERPs, combinando <em>comprensión del lenguaje natural</em> con lógica de negocio específica para asegurar respuestas contextuales y operativamente correctas.",
        ],
        blocks: [
          {
            key: "what",
            content: [
              {
                type: "ul",
                items: [
                  "Genera automáticamente facturas y documentos financieros",
                  "Produce informes periódicos y resúmenes de desempeño",
                  "Ofrece previsiones con IA a partir de datos históricos",
                  "Responde preguntas de negocio en lenguaje natural",
                ],
              },
            ],
          },
          {
            key: "why",
            content: [
              { type: "p", html: "Reduce tiempo dedicado a tareas administrativas repetitivas. Hace los datos accesibles a <em>usuarios no técnicos</em>. Permite decisiones más rápidas e informadas. Entrega <em>insights proactivos</em> en lugar de reporting reactivo." },
            ],
          },
          {
            key: "key",
            content: [
              {
                type: "ul",
                items: [
                  "Capa NLP sobre el ERP — habla con tu negocio en lenguaje simple",
                  "Generación automática de documentos",
                  "Predicción con IA entrenada sobre el histórico del cliente",
                  "Agregación de datos entre módulos y sistemas",
                  "Conectores API ERP personalizados — PHC, Sage, Primavera y más",
                ],
              },
            ],
          },
          {
            key: "how",
            content: [
              { type: "p", html: "Una capa de lenguaje natural interpreta la intención, la mapea a operaciones nativas del ERP y orquesta los módulos adecuados para responder o actuar. Las previsiones y resúmenes se producen con modelos entrenados sobre los datos reales del cliente." },
            ],
          },
          {
            key: "adapt",
            content: [
              { type: "p", html: "Construido como capa modular sobre el ERP existente, amplía capacidades sin interrumpir la operación. Nuevos conectores, reglas y fuentes de datos pueden añadirse de forma incremental." },
            ],
          },
        ],
        chips: [
          "NLP sobre ERP",
          "Documentos Automáticos",
          "Predicción con IA",
          "Agregación Multi-source",
          "API ERP Personalizada",
        ],
      },
      {
        id: "sol-agents",
        ariaLabel: "Sistemas de Agentes Autónomos — demo en vivo",
        title: "Sistemas de Agentes Autónomos",
        tag: "automatización · orquestación",
        lead:
          "Sistemas con IA que ejecutan tareas de forma independiente, toman decisiones informadas y coordinan operaciones con mínima intervención humana.",
        intro: [
          "Nuestros Sistemas de Agentes Autónomos convierten automatizaciones aisladas en una <em>fuerza de trabajo coordinada y orientada a objetivos</em>. Cada agente se encarga de una parte de la operación — planifica, usa herramientas y se ajusta con base en feedback.",
          "Los agentes colaboran a través de una capa compartida de orquestación que gestiona estado, handoffs y conflictos. El resultado es un sistema que se comporta más como un <em>equipo</em> que como un script.",
        ],
        blocks: [
          {
            key: "what",
            content: [
              {
                type: "ul",
                items: [
                  "Planifica, ejecuta y ajusta acciones con feedback",
                  "Opera sobre múltiples sistemas y APIs",
                  "Gestiona cadenas de tareas secuenciales y condicionales",
                  "Aprende y mejora mediante feedback contextual",
                ],
              },
            ],
          },
          {
            key: "why",
            content: [
              { type: "p", html: "Se adapta dinámicamente al contexto <em>sin intervención manual</em>. Integra sistemas en workflows unificados. Actúa de forma proactiva y reduce overhead operativo y error humano." },
            ],
          },
          {
            key: "key",
            content: [
              {
                type: "ul",
                items: [
                  "Ejecución autónoma de tareas largas y multi-step",
                  "Integración por API con servicios internos y externos",
                  "Workflows con branching y recuperación",
                  "Aprendizaje adaptativo a partir de resultados y feedback humano",
                  "Comportamiento self-managing en la asignación de trabajo",
                ],
              },
            ],
          },
          {
            key: "how",
            content: [
              { type: "p", html: "Un orquestador central descompone el objetivo en tareas y las distribuye entre agentes especializados. Cada agente razona sobre sus herramientas, llama APIs y reporta resultados. El orquestador mantiene una <em>memoria compartida</em> de estado y outcomes." },
            ],
          },
          {
            key: "adapt",
            content: [
              { type: "p", html: "Es un framework modular: nuevos agentes, herramientas y dominios pueden añadirse sin reescribir el núcleo. El mismo motor se reutiliza en soporte, operaciones, back-office y dentro de <em>EARS</em> y <em>ELFMO</em>." },
            ],
          },
        ],
        chips: [
          "Ejecución Autónoma",
          "Integración API",
          "Workflows Multi-Step",
          "Aprendizaje Adaptativo",
          "Self-Managing",
        ],
      },
      {
        id: "sol-retopo",
        ariaLabel: "Conversor de Retopología — demo en vivo",
        title: "Conversor de Retopología",
        tag: "pipelines 3D · videojuegos · visualización industrial",
        lead:
          "Transforma modelos high-poly en mallas low-poly optimizadas, preservando detalle esencial y fidelidad visual. Topología limpia basada en quads, apta para animación y tiempo real.",
        intro: [
          "Nuestro Conversor de Retopología toma geometría densa procedente de escultura o escaneo y la reconstruye como topología <em>limpia y lista para animación</em> — de forma automática.",
          "El sistema fue diseñado para pipelines de producción: los estudios pueden introducir assets en bruto y obtener mallas listas para rigging, baking, rendering en tiempo real o simulación industrial, sin semanas de limpieza manual.",
        ],
        blocks: [
          {
            key: "what",
            content: [
              {
                type: "ul",
                items: [
                  "Reduce automáticamente la complejidad de la malla",
                  "Preserva la geometría y la forma esenciales",
                  "Mantiene la fidelidad visual de extremo a extremo",
                  "Genera topología limpia basada en quads",
                ],
              },
            ],
          },
          {
            key: "why",
            content: [
              { type: "p", html: "Reduce tiempo de producción y esfuerzo manual. Garantiza <em>calidad topológica consistente</em> a lo largo del pipeline. Permite iterar y escalar más rápido en gaming, cine y visualización industrial." },
            ],
          },
          {
            key: "key",
            content: [
              {
                type: "ul",
                items: [
                  "Retopología totalmente automática",
                  "Salida en quads apta para animación y subdivisión",
                  "Preservación de geometría y silueta entre LODs",
                  "Lista para motores en tiempo real — Unreal, Unity y web 3D",
                  "Procesamiento por lotes para bibliotecas de assets",
                ],
              },
            ],
          },
          {
            key: "how",
            content: [
              { type: "p", html: "El pipeline analiza curvatura, líneas destacadas y flujo topológico de la malla de entrada y genera una nueva <em>superficie dominante en quads</em> alineada con esas características. UVs y normales se transfieren desde la fuente para mantener el aspecto original con mucho menos peso." },
            ],
          },
          {
            key: "adapt",
            content: [
              { type: "p", html: "El conversor es modular: puede integrarse en workflows DCC como Blender, Maya o Houdini, o consumirse como servicio en pipelines propios. El mismo motor sustenta trabajo en <em>EXPAI</em> y otros proyectos empresariales y de consumo." },
            ],
          },
        ],
        chips: [
          "Retopología Automática",
          "Salida en Quads",
          "Preservación Geométrica",
          "Lista para Tiempo Real",
        ],
      },
    ],
    experts: {
      kicker: "/ Servicios Especializados",
      academy: {
        title: "FTP Academy",
        cta: "Visitar Academy ↗",
        paragraphs: [
          "Una plataforma de aprendizaje innovadora pensada para impulsar a los profesionales del mañana. Programas formativos de alta calidad en múltiples áreas tecnológicas, con aprendizaje práctico, evolución continua y recorridos adaptados.",
          "Abierta a candidatos entre 18 y 40 años. Sin requisitos académicos rígidos para cursos de iniciación. Lo importante es el interés real por la tecnología, la motivación para aprender y la voluntad de evolucionar.",
        ],
        chips: ["Aprendizaje Práctico", "Recorridos a Medida", "Certificación DGERT", "Mentoría"],
      },
      appstudio: {
        title: "Appstudio",
        cta: "Ver detalles →",
        paragraphs: [
          "El entorno dedicado de FTP para diseñar, prototipar y entregar aplicaciones de negocio a medida con rapidez. Componentes modulares y prácticas modernas de desarrollo convierten requisitos complejos en productos digitales funcionales.",
          "Desde herramientas internas hasta portales de cliente y apps móviles. Combinamos bloques reutilizables con lógica de negocio personalizada para que cada aplicación encaje con la operación y crezca con ella.",
        ],
        capabilities: [
          { title: "Herramientas internas & dashboards", text: "Apps operativas que simplifican el día a día." },
          { title: "Bots de automatización & notificaciones", text: "Agentes inteligentes que monitorizan datos y actúan." },
          { title: "Portales de cliente & web apps", text: "Experiencias con tu marca para tus clientes." },
          { title: "Aplicaciones móviles", text: "Apps iOS y Android conectadas a tu stack." },
          { title: "Integraciones ERP", text: "PHC y otros sistemas conectados a tu ecosistema digital." },
          { title: "Workflows guiados por datos", text: "Pipelines que convierten datos en acción." },
        ],
      },
      processTitle: "Cómo trabajamos",
      steps: [
        { title: "Descubrimiento", text: "Nos sentamos con tu equipo para entender el proceso, los puntos de dolor y el objetivo." },
        { title: "Prototipo", text: "Convertimos la idea rápidamente en un prototipo funcional para reaccionar sobre algo real." },
        { title: "Construir & iterar", text: "Refinamos la solución con feedback continuo hasta que encaje con la operación." },
        { title: "Desplegar & acompañar", text: "Entregamos, formamos al equipo y seguimos cerca para evolucionar contigo." },
      ],
      trustedTitle: "/ Elegidos por Empresas de Referencia",
    },
  },
  appstudioPage: {
    meta: {
      title: "Appstudio — Aplicaciones a medida construidas en torno a tu negocio",
      description:
        "Explora Appstudio, el servicio de FTP para herramientas internas, dashboards, automatizaciones, portales, apps móviles y flujos conectados al ERP.",
    },
    backButton: "Volver",
    backLabel: "Volver a FTP Lab",
    backToSolutions: "Volver a servicios",
    heroTitle: "Aplicaciones a medida, construidas en torno a tu negocio",
    heroText:
      "Desde herramientas internas y bots inteligentes hasta dashboards y portales para clientes, diseñamos y construimos software a medida que se adapta a la forma real en que trabaja tu equipo.",
    snapshotTitle: "Qué cubre Appstudio",
    overviewTitle: "¿Qué es Appstudio?",
    overviewText:
      "Appstudio es el servicio de desarrollo de aplicaciones a medida de FTP. Colaboramos con cada cliente para diseñar, prototipar y entregar software personalizado — aplicaciones moldeadas en torno a sus procesos, datos y objetivos, en lugar de obligar al negocio a adaptarse a un producto genérico.",
    overviewText2:
      "Cada proyecto es único. Combinamos prácticas modernas de desarrollo con bloques reutilizables para avanzar rápido sin comprometer la calidad, la escalabilidad o la mantenibilidad.",
    capabilitiesTitle: "Lo que podemos construir",
    exampleLabel: "Caso de uso",
    exampleTitle: "Bot de seguimiento comercial",
    exampleText:
      "Imagina un bot que vigila tu CRM e identifica a los clientes potenciales a los que se prometió un seguimiento pero nunca recibieron respuesta. El bot envía una notificación al comercial responsable recordándole llamar o visitar al cliente. Si el comercial sigue sin actuar en un plazo definido, la dueña de la empresa recibe una notificación para retomar la conversación antes de perder la oportunidad.",
    exampleText2:
      "Es justo el tipo de aplicación pequeña y específica que recupera ingresos de forma silenciosa y mantiene al equipo responsable — para esto está hecho Appstudio.",
    ctaTitle: "¿Tienes una idea en mente?",
    ctaText:
      "Cuéntanos el problema que quieres resolver. Te ayudamos a convertirlo en una aplicación real.",
    ctaButton: "Habla con nosotros",
  },
  projects: {
    header: {
      kicker: "/ Proyectos Internacionales de I+D",
      titleHtml: "Cinco proyectos.<br/>Cinco países. <em>Un mismo pulso de consorcio.</em>",
      lede:
        "Las colaboraciones internacionales activas y recientes del laboratorio — el problema que cada una quiso resolver y la solución que entregamos.",
    },
    items: [
      {
        id: "omd",
        statusClass: "done",
        title: "OMD",
        subtitle: "Gestión Cognitiva de la Demanda de Servicios",
        status: "Finalizado · 2022–2023",
        meta: "Cross-domain · 8 socios",
        problemHtml:
          "Las organizaciones de servicios afrontan complejidad creciente al gestionar peticiones en múltiples canales y dominios. Los sistemas tradicionales de e-commerce, ticketing y soporte sufren por asignación ineficiente, altos costes operativos, NLP limitado y bases de conocimiento fragmentadas.",
        solutionHtml:
          'Una plataforma cognitiva cross-domain para gestión de servicios, apoyada en ML, Deep Learning, NLP y optimización. Caso real con <a href="https://www.nm4y.com" target="_blank" rel="noopener">Nimco</a> — chatbot con texto y voz que comprende solicitudes, extrae intención, aplica filtrado por ML y recomienda calzado con razonamiento personalizado.',
        chips: ["NLP", "ML", "Speech-to-Text", "Optimization"],
        partnersPrefix: "Socios:",
      },
      {
        id: "ears",
        statusClass: "ongoing",
        featured: true,
        title: "EARS",
        subtitle: "Recomendación Inteligente para Servicios Remotos",
        status: "En curso · 2023–2026",
        meta: "NORTE2030-FEDER-00542300 · ITEA 21017",
        problemHtml:
          "Las herramientas actuales de Service Desk Management siguen demasiado centradas en el sector IT, y la integración de IA, ML, DL y NLP aún está en fase temprana. Falta un framework capaz de adaptar la gestión de servicio entre salud, e-commerce, marketing y ventas.",
        solutionHtml:
          "Un framework innovador para asignar automáticamente el agente más adecuado a cada solicitud, optimizando el soporte remoto en múltiples dominios. Recomendadores multi-dominio, IA explicable, perfiles avanzados de cliente y agente con señales emocionales y conductuales, y workflows dinámicos. Validado en nueve sectores. Componentes liberados como open source.",
        chips: [
          "Sistemas de Recomendación",
          "IA Explicable",
          "User Modeling",
          "Context-Aware",
          "Sistemas Adaptativos",
        ],
        partnersPrefix: "Socios (10):",
      },
      {
        id: "expai",
        statusClass: "ongoing",
        title: "EXPAI",
        subtitle: "SmartIndustry · IA Explicable para Control Industrial",
        status: "En curso · 2024–2026",
        meta: "ITEA 4 · Smart Industry",
        problemHtml:
          'La transición hacia Smart Industry afronta obstáculos críticos: sistemas de IA vistos como "cajas negras", modelado 3D tradicional con geometría pesada para simulación en tiempo real, e integración débil entre datos de sensores, robótica autónoma y herramientas de diseño.',
        solutionHtml:
          "Un framework XAI que impulsa un entorno digital flexible, controlado y transparente. Recogida centralizada de sensores, Visión por Computador que vuelve comprensibles las decisiones, retopología automática y modelado procedural para geometría lista para tiempo real, y operación optimizada de AMR.",
        chips: [
          "IA Explicable",
          "Visión por Computador",
          "Mantenimiento Predictivo",
          "Detección de Anomalías",
          "Robótica AMR",
          "Retopología 3D",
        ],
        partnersPrefix: "Socios (10):",
      },
      {
        id: "elfmo",
        statusClass: "ongoing",
        title: "ELFMO",
        subtitle: "Enterprise Large Foundation Models",
        status: "En curso · 2024–2027",
        meta: "ITEA · Norte 2030",
        problemHtml:
          "Las empresas quieren el potencial transformador de la IA Generativa y los LFMs como GPT, Bard y Falcon, pero se enfrentan a costes altos, asignación intensa de recursos y exigencias de cumplimiento. Seguridad, propiedad intelectual, sesgo, transparencia y alineación con RGPD y AI Act dificultan una adopción fiable — y los ERPs monolíticos frenan la integración de IA.",
        solutionHtml:
          "Un framework de ingeniería basado en riesgo para una adopción rápida, informada y fiable de LFMs en entornos empresariales. Métodos, herramientas, benchmarks sectoriales, infraestructuras open-source y evaluación alineada con RGPD y AI Act. Caso nacional: una plataforma modular de integración, del monolito a microservicios, con chatbot especializado en PHC.",
        chips: [
          "IA Generativa",
          "Adaptación LFM",
          "Integración ERP (PHC)",
          "Monolito Modular → Microservicios",
          "IA Open-source",
          "RGPD · AI Act",
        ],
        partnersPrefix: "Socios (14):",
      },
      {
        id: "cape",
        statusClass: "ongoing",
        title: "CAPE",
        subtitle: "Asistente Cognitivo para Entornos Phygital",
        status: "En curso · 2024–2027",
        meta: "NORTE0230-FEDER-01241200 · ITEA 4",
        problemHtml:
          "El sector retail es clave para la economía europea, pero afronta retos relevantes de sostenibilidad, digitalización y capacidades. Los sistemas de modalidad única y las experiencias estáticas en tienda no entregan interacciones adaptativas y personalizadas.",
        solutionHtml:
          "Una iniciativa que transforma la experiencia de compra y el entorno de trabajo en retail mediante IA, Blockchain, IoT y Deep Learning. Experiencias personalizadas, robots y kioscos optimizados, gestión innovadora de recursos, seguimiento de empleados y engagement del cliente en cinco casos de uso.",
        chips: [
          "Inteligencia Artificial",
          "Blockchain",
          "IoT",
          "Deep Learning",
          "Visión por Computador",
          "Sistemas de Recomendación",
        ],
        partnersPrefix: "Socios (15):",
      },
    ],
  },
  papers: {
    kicker: "/ Publicado · 2025–2026",
    titleHtml: "Revisado por pares. <em>Reproducible.</em>",
    lede:
      "El trabajo del laboratorio se valida en el único lugar que realmente importa — por otros laboratorios. Una selección no exhaustiva de los últimos 18 meses.",
    backedBy: "Respaldado por",
    euLabel: "Unión Europea",
  },
  team: {
    kicker: "/ El Equipo del Lab",
    titleHtml:
      "Las mentes que unen<br/><em>descubrimiento científico</em> y <em>realidad empresarial</em>.",
    groupTitle: "Un equipo. Nueve perfiles distintos.",
    groupBody:
      "Empieza por la foto de grupo y haz clic en cualquier cara de abajo para abrir el vídeo y la frase de esa persona.",
    groupButton: "Volver a la foto de grupo",
    groupAlt: "Foto de grupo del equipo FTP AI Lab",
    memberRailTitle: "Conoce al equipo",
    memberStripLabel: "Selector del equipo",
    scrollPrevLabel: "Desplazar equipo hacia la izquierda",
    scrollNextLabel: "Desplazar equipo hacia la derecha",
    members: [
      {
        lead: true,
        role: "Director de Departamento",
        name: "Fábio",
        spec: "Liderazgo & Estrategia de Departamento",
        quote:
          "Las empresas que integran IA aplicada no reaccionan al mercado — lo anticipan.",
      },
      {
        role: "Technical Lead",
        name: "André",
        spec: "FTP Academia & Estrategia Ejecutiva",
        quote: "Los límites moldean la visión. La dirección transforma imaginación en realidad.",
      },
      {
        role: "Project Manager",
        name: "Isabel",
        spec: "About Us, Blog & Gestión General",
        quote:
          "Del caos de las ideas a la elegancia de los resultados — haciéndolos volar.",
      },
      {
        role: "Developer de I+D",
        name: "Teixeira",
        spec: "IA & Proyecto ELFMO",
        quote: "Con IA, el límite ya no es el tiempo — es la imaginación.",
      },
      {
        role: "Developer de I+D",
        name: "Couto",
        spec: "IA & Proyecto ELFMO",
      },
      {
        role: "Developer de I+D",
        name: "Cruz",
        spec: "Visión por Computador & E-commerce",
        quote:
          "La innovación nace cuando convertimos el esfuerzo recurrente en soluciones permanentes.",
      },
      {
        role: "Developer de I+D",
        name: "Gaspar",
        spec: "Automatización ERP & EARS",
        quote: "Cuando todos piensan igual, entonces nadie está pensando.",
      },
      {
        role: "Developer de I+D",
        name: "Mariana",
        spec: "3D Graphics & EXPAI",
        quote:
          "Mezclar un poco de magia con mucha inteligencia para construir el futuro.",
      },
      {
        role: "Developer de I+D",
        name: "Tiago",
        spec: "Soporte Técnico & Desarrollo",
      },
    ],
  },
  blog: {
    kicker: "/ FTP Insights & Innovación",
    titleHtml: "Notas de campo desde las <em>fronteras</em>.",
    lede:
      "Exploramos IA, colaboraciones internacionales de I+D y tecnología industrial — directamente desde los consorcios.",
    posts: [
      {
        featured: true,
        category: "Proyectos Internacionales",
        slug: "ears-ankara-review",
        cardDate: "2025-11-05",
        date: "04–05 nov. 2025 · Ankara, Türkiye",
        cardTitle: "Innovación en Ankara",
        title: "Proyecto EARS — Reunión plenaria en Ankara",
        cardLead: "Destacados de nuestra participación internacional e intercambio tecnológico en Turquía.",
        lead: "Los días 4 y 5 de noviembre de 2025, Ankara fue el punto de encuentro del consorcio internacional del proyecto EARS — Environment Adaptive Recommendation System. En las instalaciones del socio ARD Group, en la capital turca, los equipos se reunieron durante dos jornadas de trabajo concentrado, en las que el progreso técnico dio paso a decisiones concretas y el alineamiento estratégico ganó la solidez que solo la presencia permite.",
        paragraphs: [],
        detail: {
          date: "04–05 nov. 2025 · Ankara, Türkiye",
          title: "Proyecto EARS — Reunión plenaria en Ankara",
          lead: "Los días 4 y 5 de noviembre de 2025, Ankara fue el punto de encuentro del consorcio internacional del proyecto EARS — Environment Adaptive Recommendation System. En las instalaciones del socio ARD Group, en la capital turca, los equipos se reunieron durante dos jornadas de trabajo concentrado, en las que el progreso técnico dio paso a decisiones concretas y el alineamiento estratégico ganó la solidez que solo la presencia permite.",
          paragraphs: [
            "El mundo digital es, por naturaleza, dinámico. Los contextos cambian, los usuarios evolucionan y las necesidades se transforman a un ritmo que los sistemas tradicionales difícilmente consiguen seguir. EARS nace precisamente para responder a este desafío: desarrollar un sistema de recomendación capaz de interpretar datos en tiempo real, adaptarse a entornos complejos y mejorar continuamente la experiencia de sus usuarios.",
            "Para lograrlo, el proyecto combina tecnologías de Inteligencia Artificial, integración de datos y modelos avanzados de recomendación, validados en diferentes casos de uso por un consorcio de socios internacionales con competencias complementarias. Un enfoque que reconoce que las soluciones verdaderamente robustas se construyen en colaboración.",
            "FTP tuvo una presencia especialmente relevante en este plenario, como líder del WP5 — Integration, Pilots and Validation — que garantiza que todo lo que se desarrolla en el proyecto encuentre, de hecho, aplicación en el mundo real. La reunión en Ankara fue una oportunidad para evaluar el progreso de las actividades en curso, aclarar cuestiones técnicas abiertas y preparar los siguientes hitos de desarrollo, integración y demostración.",
            "Hay cuestiones que resisten a las videollamadas y a los hilos de correo. La complejidad técnica de EARS — con múltiples socios, componentes tecnológicos interdependientes y casos de uso distintos — exige, en determinados momentos, la misma mesa y el mismo espacio. Ankara fue ese momento: dos días en los que las dudas se resolvieron en minutos, se tomaron conjuntamente decisiones que llevaban semanas esperando y la articulación entre equipos ganó una fluidez que la distancia rara vez permite.",
            "Este plenario, más que un punto de situación técnica, fue un momento de consolidación de las relaciones que sostienen el proyecto, reforzando la comunicación, alineando expectativas y creando las condiciones humanas para que las próximas etapas avancen con mayor confianza y eficacia.",
            "EARS es un recordatorio de que la innovación tecnológica tiene siempre dos dimensiones inseparables: la calidad de las soluciones que se desarrollan y la capacidad de las personas que las desarrollan para trabajar juntas, alinear visiones y transformar el conocimiento técnico en resultados con impacto real. Ankara reforzó ambas.",
            "Porque innovar es también integrar — tecnologías, datos, perspectivas y personas.",
          ],
        },
        tag: "EARS · ITEA",
      },
      {
        featured: true,
        category: "Proyectos Internacionales",
        date: "15 abr. 2026 · Daegu, Corea del Sur",
        title: "Plenario EXPAI en Corea",
        lead:
          "Entre el 13 y el 15 de abril, Daegu abrió las puertas del proyecto EXPAI al mundo. En las instalaciones de Nanosystems, los consorcios portugués, coreano y español se reunieron en un plenario que fue mucho más que una agenda técnica.",
        paragraphs: [
          "Se discutieron avances relevantes: el camino de Portugal en retopología automática, el potencial de combinar sensores LiDAR coreanos con escáneres 3D portugueses, la interoperabilidad de datos entre socios, APIs comunes y la integración de todos los casos de uso en la plataforma del consorcio español.",
          "En todos estos avances, la Explainable AI (XAI) se afirma como eje estratégico del consorcio — sistemas no solo inteligentes, sino transparentes, interpretables y realmente útiles.",
        ],
        tag: "EXPAI · ITEA 4",
      },
      {
        category: "GenAI",
        cardDate: "2025-05-28",
        date: "26–28 may. 2025 · Porto",
        title: "ELFMO en Porto",
        cardLead:
          "Tres días de trabajo, intercambio y visión compartida en Oporto con los socios internacionales del proyecto ELFMo.",
        lead:
          "Del 26 al 28 de mayo de 2025, FTP y el ISEP recibieron en Oporto a los socios de Finlandia, Bélgica y España para un nuevo plenario del proyecto europeo ELFMo.",
        paragraphs: [],
        detail: {
          date: "26–28 may. 2025 · Porto",
          title: "ELFMO en Porto",
          lead:
            "Del 26 al 28 de mayo de 2025, FTP y el ISEP recibieron en Oporto a los socios de Finlandia, Bélgica y España para un nuevo plenario del proyecto europeo ELFMo.",
          paragraphs: [
            "Hay ciudades que, por su energía e identidad, tienen el don de inspirar. Oporto fue, entre el 26 y el 28 de mayo, el escenario de otro momento decisivo del proyecto europeo ELFMo — Engineering Large Foundation Models for Enterprise Integration — cuando FTP y el ISEP recibieron a los socios internacionales de Finlandia, Bélgica y España para tres días de trabajo, intercambio y visión compartida.",
            "ELFMo nace de una urgencia que las organizaciones conocen bien: la presión creciente para integrar tecnologías de Inteligencia Artificial, en particular los Large Foundation Models, en sus procesos de negocio, sin comprometer la seguridad, la privacidad ni el cumplimiento legal. El potencial de estas tecnologías es inmenso, pero los desafíos son igual de reales: transparencia de los sistemas, protección de datos, integración con infraestructuras existentes y alineación con el marco regulatorio europeo.",
            "Es para responder a estas cuestiones, con rigor y responsabilidad, que trabaja el consorcio. El objetivo es claro: desarrollar metodologías, herramientas y buenas prácticas que permitan a las empresas adoptar soluciones de IA de forma sostenible, segura y verdaderamente eficaz.",
            "A lo largo del plenario, los socios presentaron los avances alcanzados, compartieron resultados, contrastaron perspectivas y trazaron el camino para las próximas etapas. Las sesiones técnicas y de gestión del proyecto se complementaron con un evento de difusión, donde cada organización tuvo espacio para presentar sus áreas de especialización y su contribución singular al proyecto, un momento que reforzó no solo el conocimiento mutuo, sino también el sentido de propósito colectivo que distingue a los mejores consorcios europeos.",
            "Existe una dimensión de los proyectos internacionales que rara vez se valora, pero que determina en gran medida su éxito: las relaciones entre las personas que los construyen. Reunir equipos de cuatro países, con culturas, lenguas y formas de trabajar distintas, es un ejercicio permanente de adaptación y escucha. Y precisamente por eso los encuentros presenciales son insustituibles, no como un ritual de calendario, sino como el espacio donde se construye la confianza, se resuelven los malentendidos y las ideas más inesperadas encuentran lugar para surgir.",
            "Con esta convicción, FTP quiso ir más allá de la agenda técnica. Al final del primer día de trabajo, los socios internacionales fueron invitados a descubrir Oporto de una manera distinta, en una visita informal por algunos de los lugares más emblemáticos de la Invicta, entre historias, curiosidades y esa hospitalidad que la ciudad ofrece a quienes la visitan por primera vez. Un gesto sencillo, pero con un impacto que ninguna plataforma digital puede replicar: hacer que cada socio se sienta no solo colaborador del proyecto, sino parte de algo mayor.",
            "Este plenario representó un paso relevante en la consolidación de ELFMo, tanto por los resultados técnicos alcanzados como por el refuerzo del espíritu de equipo que sostiene un proyecto de esta envergadura. Para FTP, fue también una afirmación de su papel como socio activo en un consorcio europeo de innovación: capaz de liderar conversaciones difíciles, acoger con generosidad y demostrar, en la práctica, que la tecnología más avanzada solo genera impacto real cuando existe confianza entre las personas que la desarrollan.",
            "Porque la innovación no nace solo de la tecnología. Nace de la colaboración, de la cercanía y de la capacidad de construir juntos soluciones que ningún socio podría alcanzar por sí solo.",
          ],
        },
        tag: "ELFMO · GenAI",
      },
    ],
  },
  about: {
    kicker: "/ Sobre",
    titleHtml:
      "Innovando en la intersección entre<br/><em>Gestión Empresarial</em> &amp; <em>Inteligencia Artificial</em>.",
    whoTitle: "Quiénes Somos",
    whoHtml:
      "FTP es una empresa tecnológica portuguesa con sede en Oporto, con un equipo multidisciplinar de unos 30 especialistas. Fundada en 1999 para implantar y dar soporte al software de gestión PHC, evolucionó hasta convertirse en un proveedor tecnológico global. Nuestro portafolio incluye hoy <strong>Inteligencia Artificial</strong>, <strong>Desarrollo de Software a Medida</strong>, <strong>Ciberseguridad</strong> y <strong>Administración de Infraestructuras</strong>.",
    missionTitle: "Nuestra Misión",
    missionHtml:
      "Transformar la investigación científica y académica en <em>soluciones empresariales</em> aplicadas y de alto impacto.",
    stats: [
      { value: "~30", label: "Especialistas" },
      { value: "Global", label: "Presencia" },
      { value: "IA & I+D", label: "Foco" },
      { value: "Full-Stack", label: "Servicios" },
    ],
    securityTitle: "Excelencia Operativa & Seguridad",
    securityHtml:
      "FTP ha evolucionado hacia un marco maduro y documentado de seguridad de la información, alineado con los principios ISO/IEC 27001 y con el RGPD. Para FTP, la seguridad es una prioridad estratégica que garantiza confianza contractual y resiliencia operativa para sus clientes.",
    securityBadges: ["ISO/IEC 27001", "RGPD", "AI Act aware", "PME Líder", "DGERT certified"],
    reachTitle: "Alcance Global",
    reachHtml:
      "De Oporto al mundo. Consorcios activos de I+D y plenarios de trabajo en <strong>Portugal</strong>, <strong>Türkiye</strong>, <strong>Corea del Sur</strong>, <strong>España</strong>, <strong>Rumanía</strong>, <strong>Bélgica</strong> y <strong>Finlandia</strong>.",
    reachBadges: ["Porto · Sede", "Ankara · EARS", "Daegu · EXPAI", "Helsinki · ELFMO", "Madrid · EXPAI"],
  },
  precontact: {
    kicker: "/ Confianza Empresarial",
    lines: ["IA", "SEGURA"],
    strapHtml: "Donde empieza la confianza digital. Crecemos juntos.",
  },
  contact: {
    kicker: "/ Colaboremos",
    titleHtml: "Inicie una alianza con el<br/><em>FTP AI Lab</em>.",
    lede:
      "Póngase en contacto con el equipo del FTP AI Lab. Estamos listos para construir el futuro juntos.",
    formTitle: "Iniciar Alianza",
    fields: {
      firstName: "Nombre",
      lastName: "Apellido",
      organization: "Organización",
      email: "Email",
      subject: "Asunto",
      message: "Mensaje",
    },
    subjectPlaceholder: "Seleccione un asunto…",
    subjects: {
      partnership: "Alianza",
      rd: "Consulta de I+D",
      solutions: "Soluciones",
    },
    sendMessage: "Enviar Mensaje",
    info: {
      general: "Información General",
      location: "Nuestra Ubicación",
      channels: "Canales",
      addressLines: [
        "Rua Professor Correia de Sá 56",
        "4445-570 Ermesinde",
        "Porto · Portugal",
      ],
    },
    strapHtml: "<em>Donde la confianza digital empieza.</em> Crecer <em>juntos</em>.",
  },
  footer: {
    brandSuffix: "· Lab",
    taglineHtml:
      "Digital Innovation Studio.<br/>Una casa portuguesa de I&amp;D construyendo, con discreción, la capa invisible.",
    blogTitle: "Últimos Artículos del Blog",
    blogLinks: [
      "Innovación en Ankara · EARS",
      "Expansión en Corea del Sur · EXPAI",
      "ELFMO en Porto",
    ],
    referencesTitle: "Referencias Institucionales",
    references: ["ITEA ↗", "ANI · Agência Nacional de Inovação ↗", "Unión Europea ↗"],
    papersTitle: "Últimos Papers",
    legalRightsHtml:
      '© <span data-year>2026</span> FTP — Soluções Empresariais. Todos los derechos reservados.',
    legalLanguages: "ES · PT · EN · FR",
    legalStandards: "ISO/IEC 27001 · RGPD · AI Act aware",
    legalOrigin: "Hecho en Porto.",
  },
};
