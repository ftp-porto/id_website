/* ============================================================
   FTP LAB — Immersive Scrollytelling
   Includes lightweight i18n support powered by static translation files.
   ============================================================ */
(() => {
  'use strict';

  const $ = (s, ctx = document) => ctx.querySelector(s);
  const $$ = (s, ctx = document) => Array.from(ctx.querySelectorAll(s));
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = window.matchMedia('(pointer: fine)').matches;
  const mobile = window.matchMedia('(max-width: 760px)').matches;

  const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));
  const slugifyLookup = (value) => String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  const escapeHtml = (value) => String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

  const LOCALE_KEY = 'ftp-locale';
  const SUPPORTED_LOCALES = ['en', 'pt', 'es', 'fr'];
  const LANGUAGE_FLAGS = {
    en: '<svg class="language-switcher__flag" viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><rect width="60" height="30" fill="#012169"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#ffffff" stroke-width="6"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" stroke-width="3"/><path d="M30,0 V30 M0,15 H60" stroke="#ffffff" stroke-width="10"/><path d="M30,0 V30 M0,15 H60" stroke="#C8102E" stroke-width="6"/></svg>',
    pt: '<svg class="language-switcher__flag" viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><rect width="12" height="20" fill="#006600"/><rect x="12" width="18" height="20" fill="#FF0000"/><circle cx="12" cy="10" r="4.4" fill="#FFCC00"/><circle cx="12" cy="10" r="2.9" fill="#ffffff"/><circle cx="12" cy="10" r="1.4" fill="#003399"/></svg>',
    es: '<svg class="language-switcher__flag" viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><rect width="30" height="20" fill="#AA151B"/><rect y="5" width="30" height="10" fill="#F1BF00"/></svg>',
    fr: '<svg class="language-switcher__flag" viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><rect width="10" height="20" fill="#002395"/><rect x="10" width="10" height="20" fill="#ffffff"/><rect x="20" width="10" height="20" fill="#ED2939"/></svg>',
  };
  const DEFAULT_STAGE_LABELS = [
    'NEURAL PATHWAY · ENTRY',
    'AWAKENING · CORTEX',
    'MANIFESTO · DEEP',
    'THE LAB · CORE',
    'PROJECT · EARS',
    'PROJECT · EXPAI',
    'PROJECT · ELFMO',
    'PROJECT · CAPE',
    'PROJECT · OMD',
    'ATLAS · 5 CITIES',
    'THE MINDS',
    'INVITATION',
  ];
  const JOURNEY_STAGE_LABEL_INDICES = [0, 1, 2, 3, 9, 10, 11];
  const JOURNEY_PROJECT_NAMES = ['EARS', 'EXPAI', 'ELFMO', 'CAPE', 'OMD'];
  const TEAM_MEMBER_ORDER = ['fabio', 'andre', 'isabel', 'teixeira', 'couto', 'cruz', 'gaspar', 'mariana', 'tiago'];
  const TEAM_GROUP_MEDIA = {
    image: 'Alters_Img/team.png',
  };
  const TEAM_MEMBER_MEDIA = {
    fabio: {
      image: 'Alters_Img/fabio.jpeg',
      poster: 'Alters_Img/fabio.jpeg',
      video: 'Alters_Img/fabio_video.mp4',
    },
    andre: {
      image: 'Alters_Img/andre.png',
      poster: 'Alters_Img/andre.png',
      video: 'Alters_Img/andre_video.mp4',
    },
    isabel: {
      image: 'Alters_Img/isabel.png',
      poster: 'Alters_Img/isabel.png',
      video: 'Alters_Img/isabel_video.mp4',
    },
    teixeira: {
      image: 'Alters_Img/teixeira.png',
      poster: 'Alters_Img/teixeira.png',
      video: 'Alters_Img/teixeira_video.mp4',
    },
    couto: {
      image: 'Alters_Img/couto.png',
      poster: 'Alters_Img/couto.png',
      video: 'Alters_Img/couto_video.mp4',
    },
    cruz: {
      image: 'Alters_Img/cruz.png',
      poster: 'Alters_Img/cruz.png',
      video: 'Alters_Img/cruz_video.mp4',
    },
    gaspar: {
      image: 'Alters_Img/gaspar.png',
      poster: 'Alters_Img/gaspar.png',
      video: 'Alters_Img/gaspar_video.mp4',
    },
    mariana: {
      image: 'Alters_Img/mariana.png',
      poster: 'Alters_Img/mariana.png',
      video: 'Alters_Img/mariana_video.mp4',
    },
    tiago: {
      image: 'Alters_Img/tiago.jpg',
      poster: 'Alters_Img/tiago.jpg',
      video: 'Alters_Img/tiago_video.mp4',
    },
  };
  const BLOG_POST_MEDIA = {
    'ears-ankara-review': [
      {
        src: 'assets/blog/ears/ears_1.jpg',
        alt: 'EARS consortium members during the Ankara review',
      },
      {
        src: 'assets/blog/ears/ears_2.jpg',
        alt: 'EARS workshop participants in the review room in Ankara',
      },
    ],
    'expai-korea-plenary': [
      {
        src: 'assets/blog/expai-korea/expai-korea-robot.jpeg',
        alt: 'EXPAI partners beside an autonomous mobile robot prototype',
      },
      {
        src: 'assets/blog/expai-korea/expai-korea-office.jpeg',
        alt: 'EXPAI consortium members during the Korea plenary visit',
      },
      {
        src: 'assets/blog/expai-korea/expai-korea-selfie.jpeg',
        alt: 'EXPAI partners outside Nanosystems in Daegu',
      },
    ],
    'elfmo-porto': [
      {
        src: 'assets/blog/elfmo/ELFMO_2.jpeg',
        alt: 'ELFMO participants with Porto skyline in the background',
      },
      {
        src: 'assets/blog/elfmo/ELFMO_1.jpeg',
        alt: 'ELFMO group during the Porto city visit',
      },
      {
        src: 'assets/blog/elfmo/ELFMO_3.jpeg',
        alt: 'ELFMO participants outside the Porto venue',
      },
    ],
  };
  const BLOG_POST_COVERS = {
    'ears-ankara-review': {
      src: 'assets/blog/ears/ears_2.jpg',
      alt: 'EARS workshop participants in the review room in Ankara',
    },
    'expai-korea-plenary': {
      src: 'assets/blog/expai-korea/expai-korea-office.jpeg',
      alt: 'EXPAI consortium members during the Korea plenary visit',
    },
    'elfmo-porto': {
      src: 'assets/blog/elfmo/ELFMO_3.jpeg',
      alt: 'ELFMO participants outside the Porto venue',
    },
  };
  const PROJECT_LOGOS = {
    omd: { src: 'assets/blog/omd.png', alt: 'OMD project logo' },
    ears: { src: 'assets/blog/ears.png', alt: 'EARS project logo' },
    expai: { src: 'assets/blog/expai.png', alt: 'EXPAI project logo' },
    elfmo: { src: 'assets/blog/elfmo.png', alt: 'ELFMO project logo' },
    cape: { src: 'assets/blog/cape.png', alt: 'CAPE project logo' },
  };
  const BLOG_POST_ENRICHMENTS = {
    en: {
      matchTitle: 'EXPAI Korea Plenary',
      slug: 'expai-korea-plenary',
      openPostLabel: 'Read More',
      closePostLabel: 'Close article',
      galleryLabel: 'Photo journal',
      detailParagraphs: [
        'Over three days of work, the partners discussed significant advances in the development of Artificial Intelligence models applied to real use cases. Portugal has been carving its own innovation path, with approaches focused on optimizing processes such as automatic retopology — still today a slow process dependent on manual intervention, but where AI promises to open new horizons. One of the most revealing moments of the plenary was precisely the discovery of the potential of combining distinct technologies: Korean LiDAR sensors and Portuguese 3D scanners, whose data fusion may give rise to more robust and complete solutions — a direct outcome of the dialogue that only physical presence enables.',
        'The meeting also deepened structural themes for the evolution of the project: data interoperability between partners, the development of common APIs, and the integration of all use cases into the platform developed by the Spanish consortium — a unified framework that will be at the center of the demonstration in the next ITEA review. Cross-cutting all these advances, Explainable AI (XAI) asserts itself as a strategic axis of the consortium, with the commitment to build systems that are not only intelligent, but also transparent, interpretable and truly useful to those who use them.',
        'But the true value of this plenary is measured beyond technical decisions. In an international and multidisciplinary project like EXPAI, physical presence is an advantage that cannot be improvised — it is what allows unblocking deadlocks that resist email exchanges, clarifying challenges in real time, and building joint solutions at the speed innovation demands. It is also in the corridors, in the conversations on the sidelines of meetings, and in sharing the same space that cultures are understood, trust relationships are consolidated, and the foundations of truly sustainable cooperation are built.',
        'The experience in Daegu reaffirms what EXPAI has been demonstrating throughout its journey: that innovation does not live only in algorithms. It also lives in the human relationships that sustain them.',
        'It is precisely this combination — of technology, knowledge and trust between partners — that turns challenges into opportunities and makes this consortium capable of going further, together.',
      ],
    },
    pt: {
      matchTitle: 'Plenário EXPAI na Coreia',
      slug: 'expai-korea-plenary',
      openPostLabel: 'Ler Mais',
      closePostLabel: 'Fechar artigo',
      galleryLabel: 'Galeria em Daegu',
      detailParagraphs: [
        'Ao longo de três dias de trabalho, os parceiros debateram avanços significativos no desenvolvimento de modelos de Inteligência Artificial aplicados a casos de uso reais. Portugal tem vindo a desenvolver um caminho próprio de inovação, com abordagens centradas na otimização de processos como a retopologia automática, ainda hoje um processo moroso e dependente de intervenção manual, mas onde a IA promete abrir novos horizontes. Um dos momentos mais reveladores do plenário foi precisamente a descoberta do potencial de combinar tecnologias distintas: os sensores LiDAR coreanos e os scanners 3D portugueses, cuja fusão de dados poderá dar origem a soluções mais robustas e completas, fruto direto do diálogo que só a presença permite.',
        'O encontro aprofundou também temas estruturantes para a evolução do projeto: a interoperabilidade de dados entre parceiros, o desenvolvimento de APIs comuns e a integração de todos os casos de uso na plataforma desenvolvida pelo consórcio espanhol, uma framework unificada que estará no centro da demonstração na próxima revisão ITEA. Transversal a todos estes avanços, a Explainable AI (XAI) afirma-se como um eixo estratégico do consórcio, com o compromisso de construir sistemas não apenas inteligentes, mas também transparentes, interpretáveis e verdadeiramente úteis para quem os utiliza.',
        'Mas o verdadeiro valor deste plenário mede-se para além das decisões técnicas. Num projeto internacional e multidisciplinar como o EXPAI, a presença física é uma vantagem que não se improvisa, é ela que permite desbloquear impasses que resistem às trocas de e-mail, clarificar desafios em tempo real e construir soluções conjuntas à velocidade que a inovação exige. É também nos corredores, nas conversas à margem das reuniões e na partilha do mesmo espaço que se compreendem culturas, se consolidam relações de confiança e se criam os alicerces de uma cooperação verdadeiramente sustentável.',
        'A experiência em Daegu reafirma aquilo que o EXPAI tem vindo a demonstrar ao longo do seu percurso: que a inovação não vive apenas nos algoritmos. Vive também nas relações humanas que os sustentam.',
        'É precisamente essa combinação, de tecnologia, conhecimento e confiança entre parceiros, que transforma desafios em oportunidades e que torna este consórcio capaz de ir mais longe, juntos.',
      ],
    },
    es: {
      matchTitle: 'Plenario EXPAI en Corea',
      slug: 'expai-korea-plenary',
      openPostLabel: 'Leer articulo completo',
      closePostLabel: 'Cerrar articulo',
      galleryLabel: 'Galeria en Daegu',
      detailParagraphs: [
        'Entre el 13 y el 15 de abril, Daegu abrio las puertas del proyecto EXPAI al mundo. En las instalaciones de Nanosystems, en Corea del Sur, los consorcios de Portugal, Corea del Sur y Espana se reunieron en un plenario que fue mucho mas que una agenda tecnica: fue un encuentro de mentes, culturas y ambiciones compartidas.',
        'A lo largo de tres dias de trabajo, los socios debatieron avances significativos en el desarrollo de modelos de Inteligencia Artificial aplicados a casos de uso reales. Portugal ha venido construyendo un camino propio de innovacion, con enfoques centrados en la optimizacion de procesos como la retopologia automatica, todavia hoy un proceso lento y dependiente de intervencion manual, pero en el que la IA empieza a abrir nuevos horizontes. Uno de los momentos mas reveladores del plenario fue precisamente descubrir el potencial de combinar tecnologias distintas: los sensores LiDAR coreanos y los escaneres 3D portugueses. Esa fusion de datos puede dar lugar a soluciones mas robustas y completas, fruto directo del dialogo que solo la presencia fisica permite.',
        'El encuentro tambien profundizo temas estructurales para la evolucion del proyecto: la interoperabilidad de datos entre socios, el desarrollo de APIs comunes y la integracion de todos los casos de uso en la plataforma desarrollada por el consorcio espanol. Ese marco unificado estara en el centro de la demostracion de la proxima revision ITEA. De forma transversal a todos estos avances, la Explainable AI (XAI) se afirma como un eje estrategico del consorcio, con el compromiso de construir sistemas no solo inteligentes, sino tambien transparentes, interpretables y verdaderamente utiles para quienes los utilizan.',
        'Pero el verdadero valor de este plenario va mas alla de las decisiones tecnicas. En un proyecto internacional y multidisciplinar como EXPAI, la presencia fisica es una ventaja que no se improvisa. Permite desbloquear puntos que resisten largas cadenas de correo, aclarar desafios en tiempo real y construir soluciones conjuntas a la velocidad que exige la innovacion. Tambien es en los pasillos, en las conversaciones al margen de las reuniones y en el hecho de compartir el mismo espacio donde se comprenden mejor las culturas, se consolidan relaciones de confianza y se construyen los cimientos de una cooperacion verdaderamente sostenible.',
        'La experiencia en Daegu reafirma lo que EXPAI ha venido demostrando a lo largo de su recorrido: que la innovacion no vive solo en los algoritmos. Tambien vive en las relaciones humanas que los sostienen. Es precisamente esa combinacion de tecnologia, conocimiento y confianza entre socios la que transforma desafios en oportunidades y hace posible que este consorcio llegue mas lejos, juntos.',
      ],
    },
    fr: {
      matchTitle: 'Pleniere EXPAI en Coree',
      slug: 'expai-korea-plenary',
      openPostLabel: 'Lire l article complet',
      closePostLabel: 'Fermer l article',
      galleryLabel: 'Galerie a Daegu',
      detailParagraphs: [
        'Du 13 au 15 avril, Daegu a ouvert les portes du projet EXPAI au monde. Dans les installations de Nanosystems, en Coree du Sud, les consortiums du Portugal, de Coree du Sud et d Espagne se sont reunis pour une pleniere qui allait bien au dela d un agenda technique. C etait une rencontre d esprits, de cultures et d ambitions partagees.',
        'Pendant trois jours de travail, les partenaires ont discute d avancees importantes dans le developpement de modeles d Intelligence Artificielle appliques a des cas d usage reels. Le Portugal poursuit sa propre trajectoire d innovation, avec des approches centrees sur l optimisation de processus tels que la retopologie automatique, encore aujourd hui une tache longue et dependante d une intervention manuelle, mais pour laquelle l IA commence a ouvrir de nouveaux horizons. L un des moments les plus revelateurs de la pleniere a ete la decouverte du potentiel de combinaison entre deux technologies distinctes: les capteurs LiDAR coreens et les scanners 3D portugais. Cette fusion de donnees peut donner naissance a des solutions plus robustes et plus completes, resultat direct d un dialogue que seule la presence physique permet.',
        'La rencontre a aussi approfondi des sujets structurants pour l evolution du projet: l interoperabilite des donnees entre partenaires, le developpement d API communes et l integration de tous les cas d usage dans la plateforme developpee par le consortium espagnol. Ce cadre unifie sera au coeur de la demonstration lors de la prochaine revue ITEA. A travers tous ces progres, l Explainable AI (XAI) s affirme comme un axe strategique du consortium, avec l engagement de construire des systemes non seulement intelligents, mais aussi transparents, interpretables et reellement utiles pour celles et ceux qui les utilisent.',
        'Mais la vraie valeur de cette pleniere depasse les decisions techniques. Dans un projet international et multidisciplinaire comme EXPAI, la presence physique est un avantage qui ne s improvise pas. Elle permet de debloquer des points qui resistent aux longues chaines d e-mails, de clarifier les enjeux en temps reel et de construire des solutions communes a la vitesse qu exige l innovation. C est aussi dans les couloirs, dans les conversations en marge des reunions et dans le fait de partager le meme espace que les cultures se comprennent mieux, que la confiance se consolide et que se construisent les bases d une cooperation veritablement durable.',
        'L experience de Daegu confirme ce que le projet EXPAI montre depuis le debut de son parcours: l innovation ne vit pas seulement dans les algorithmes. Elle vit aussi dans les relations humaines qui les soutiennent. C est precisement cette combinaison de technologie, de connaissance et de confiance entre partenaires qui transforme les defis en opportunites et permet a ce consortium d aller plus loin, ensemble.',
      ],
    },
  };

  const PAPER_ITEMS = [
    {
      year: '2026',
      title: 'A Literature Review about Federated Learning in Recommendation Systems',
      venue: 'IEEE · 2026',
      href: 'https://ieeexplore.ieee.org/document/11498129',
    },
    {
      year: '2026',
      title: 'A Blockchain-based Federated Learning Implementation Within a Recommendation System Landscape',
      venue: 'Procedia Computer Science · Procedia',
      href: 'https://doi.org/10.1016/j.procs.2026.03.021',
    },
    {
      year: '2025',
      title: 'Security-Enhancing Mechanisms to Strengthen Privacy on Federated Learning Based Recommendation Systems',
      venue: 'IEEE IWIS · IEEE',
      href: 'https://doi.org/10.1109/IWIS66215.2025.11142401',
    },
    {
      year: '2025',
      title: 'Literary Review for Enhanced Personalized Recommendations with Federated Learning and Multimodel Emotion Recognition',
      venue: 'IEEE IDSTA · IEEE',
      href: 'https://doi.org/10.1109/IDSTA66210.2025.11202847',
    },
    {
      year: '2025',
      title: 'Local Vs Server Differential Privacy Analysis Regarding the Trade-Off Between Security and Recommendation Quality',
      venue: 'IEEE BigData · IEEE',
      href: 'https://doi.org/10.1109/BigData66926.2025.11402459',
    },
  ];

  const ITEA_LOGO_SRC = 'assets/brands/itea-logo.png';

  const PROJECT_PARTNERS = {
    omd: 'BEIA · BigData · ISEP · Caretronic · Frontendart · ARD Group · Experteam · Hiperlink · European Union · ITEA 4 · Norte 2030 · Portugal 2030',
    ears: 'FTP · ISEP · BEIA SRL · DEXTROMEDICA · Glintt Healthcare · SQ1 Web Development · Adesso Turkey · ARD Grup · Doğuş Bilgi · Donanım Haber · European Union · ITEA 4 · Norte 2030 · Portugal 2030',
    expai: 'FTP · ISEP · Edgar Praça · KIRO · Nanosystems · Accuro Technology · BEIA SRL (Belgium) · Acd Bilgi Islem · ITEA · Norte 2030 · European Union · Portugal 2030',
    elfmo: 'FTP · ISEP · F-Secure · Granlund Oy · Nosto Solutions · Siili Solutions · Solita Oy · University of Helsinki · NannyML · Siemens Industry Software · CIC Consulting Informático · DEXTROMEDICA · ITEA · Norte 2030 · European Union · Portugal 2030',
    cape: 'FTP · ISEP · Sanimaia · IDB Inc. · KAIST · SmartCore · BEIA Consult · Enverse · DEFACTO · Doğuş Tekno · inosens · KoçSistem · Koçtaş · TAV Technologies · TEKNASYON · European Union · ITEA 4 · Norte 2030 · Portugal 2030',
  };

  const PROJECT_PARTNER_LOGOS = {
    omd: [
      { name: 'BEIA', src: 'assets/Projects/beia.png' },
      { name: 'BigData', src: 'assets/Projects/bigdata.png' },
      { name: 'ISEP', src: 'assets/Projects/isep.png' },
      { name: 'Caretronic', src: 'assets/Projects/caretronic.png' },
      { name: 'Frontendart', src: 'assets/Projects/frontendart.png' },
      { name: 'ARD Group', src: 'assets/Projects/ardgroup.png' },
      { name: 'Experteam', src: 'assets/Projects/experteam.png' },
      { name: 'Hiperlink', src: 'assets/Projects/hyperlink.png' },
      { name: 'European Union', src: 'assets/brands/eu-flag.png' },
      { name: 'ITEA 4', src: ITEA_LOGO_SRC },
      { name: 'Norte 2030', src: 'assets/Projects/norte2030.png' },
      { name: 'Portugal 2030', src: 'assets/brands/Portugal_2030.png' },
    ],
    ears: [
      { name: 'FTP', src: 'assets/ftp-logo.png' },
      { name: 'ISEP', src: 'assets/Projects/isep.png' },
      { name: 'BEIA SRL', src: 'assets/Projects/beia.png' },
      { name: 'DEXTROMEDICA', src: 'assets/Projects/elfmo/dextro.png' },
      { name: 'Glintt Healthcare', src: 'assets/Projects/glintt.png' },
      { name: 'SQ1 Web Development', src: 'assets/Projects/sq1.png' },
      { name: 'Adesso Turkey', src: 'assets/Projects/adesso.png' },
      { name: 'ARD Grup', src: 'assets/Projects/ardgroup.png' },
      { name: 'Dogus Bilgi', src: 'assets/Projects/dogus.png' },
      { name: 'Donanim Haber', src: 'assets/Projects/donanim.png' },
      { name: 'European Union', src: 'assets/brands/eu-flag.png' },
      { name: 'ITEA 4', src: ITEA_LOGO_SRC },
      { name: 'Norte 2030', src: 'assets/Projects/norte2030.png' },
      { name: 'Portugal 2030', src: 'assets/brands/Portugal_2030.png' },
    ],
    expai: [
      { name: 'FTP', src: 'assets/ftp-logo.png' },
      { name: 'ISEP', src: 'assets/Projects/isep.png' },
      { name: 'Edgar Praca', src: 'assets/Projects/expai/edgar-praca.png' },
      { name: 'KIRO', src: 'assets/Projects/expai/kiro.png' },
      { name: 'Nanosystems', src: 'assets/Projects/expai/nanosystems.png' },
      { name: 'Accuro Technology', src: 'assets/Projects/expai/accuro.png' },
      { name: 'BEIA SRL (Belgium)', src: 'assets/Projects/beia.png' },
      { name: 'ACD Bilgi Islem', src: 'assets/Projects/expai/acd-bilgi.png' },
      { name: 'ITEA', src: ITEA_LOGO_SRC },
      { name: 'Norte 2030', src: 'assets/Projects/norte2030.png' },
      { name: 'European Union', src: 'assets/brands/eu-flag.png' },
      { name: 'Portugal 2030', src: 'assets/brands/Portugal_2030.png' },
    ],
    elfmo: [
      { name: 'FTP', src: 'assets/ftp-logo.png' },
      { name: 'ISEP', src: 'assets/Projects/isep.png' },
      { name: 'F-Secure', src: 'assets/Projects/elfmo/f-secure.png' },
      { name: 'Granlund Oy', src: 'assets/Projects/elfmo/granlund.png' },
      { name: 'Nosto Solutions', src: 'assets/Projects/elfmo/nosto.png' },
      { name: 'Siili Solutions', src: 'assets/Projects/elfmo/siili.png' },
      { name: 'Solita Oy', src: 'assets/Projects/elfmo/solita.png' },
      { name: 'University of Helsinki', src: 'assets/Projects/elfmo/helsinki.png' },
      { name: 'NannyML', src: 'assets/Projects/elfmo/nannyml.png' },
      { name: 'Siemens Industry Software', src: 'assets/Projects/elfmo/siemens.png' },
      { name: 'CIC Consulting Informatico', src: 'assets/Projects/elfmo/cic.png' },
      { name: 'DEXTROMEDICA', src: 'assets/Projects/elfmo/dextro.png' },
      { name: 'ITEA', src: ITEA_LOGO_SRC },
      { name: 'Norte 2030', src: 'assets/Projects/norte2030.png' },
      { name: 'European Union', src: 'assets/brands/eu-flag.png' },
      { name: 'Portugal 2030', src: 'assets/brands/Portugal_2030.png' },
    ],
    cape: [
      { name: 'FTP', src: 'assets/ftp-logo.png' },
      { name: 'ISEP', src: 'assets/Projects/isep.png' },
      { name: 'Sanimaia', src: 'assets/Projects/cape/sanimaia.png' },
      { name: 'IDB Inc.', src: 'assets/Projects/cape/idb.png' },
      { name: 'KAIST', src: 'assets/Projects/cape/kaist.png' },
      { name: 'SmartCore', src: 'assets/Projects/cape/smartcore.png' },
      { name: 'BEIA Consult', src: 'assets/Projects/cape/beia-consult.png' },
      { name: 'Enverse', src: 'assets/Projects/cape/enverse.png' },
      { name: 'DEFACTO', src: 'assets/Projects/cape/defacto.png' },
      { name: 'Dogus Tekno', src: 'assets/Projects/cape/dogus.png' },
      { name: 'inosens', src: 'assets/Projects/cape/inosens.png' },
      { name: 'KocSistem', src: 'assets/Projects/cape/kocsistem.png' },
      { name: 'Koctas', src: 'assets/Projects/cape/koctas.png' },
      { name: 'TAV Technologies', src: 'assets/Projects/cape/tav.png' },
      { name: 'TEKNASYON', src: 'assets/Projects/cape/teknasyon.png' },
      { name: 'European Union', src: 'assets/brands/eu-flag.png' },
      { name: 'ITEA 4', src: ITEA_LOGO_SRC },
      { name: 'Norte 2030', src: 'assets/Projects/norte2030.png' },
      { name: 'Portugal 2030', src: 'assets/brands/Portugal_2030.png' },
    ],
  };

  const LIGHT_BG_LOGOS = new Set([
    'assets/Projects/glintt.png',
    'assets/Projects/sq1.png',
    'assets/Projects/adesso.png',
    'assets/Projects/dogus.png',
    'assets/Projects/donanim.png',
    'assets/Projects/expai/acd-bilgi.png',
    'assets/Projects/expai/edgar-praca.png',
    'assets/Projects/expai/kiro.png',
    'assets/Projects/elfmo/helsinki.png',
    'assets/Projects/elfmo/nosto.png',
    'assets/Projects/elfmo/siemens.png',
    'assets/Projects/elfmo/siili.png',
    'assets/Projects/cape/idb.png',
    'assets/Projects/cape/smartcore.png',
    'assets/Projects/cape/dogus.png',
    'assets/Projects/cape/kocsistem.png',
    'assets/Projects/cape/koctas.png',
    'assets/Projects/cape/sanimaia.png',
    'assets/Projects/cape/tav.png',
  ]);
  const THEME_PARTNER_LOGOS = new Map([
    ['assets/Projects/beia.png', { dark: 'assets/Projects/beia_darkmode.png' }],
    ['assets/Projects/bigdata.png', { light: 'assets/Projects/bigdata_whitemode.png' }],
    ['assets/Projects/caretronic.png', { dark: 'assets/Projects/caretronic_darkmode.png' }],
    ['assets/Projects/experteam.png', { light: 'assets/Projects/experteam_whitemode.png' }],
    ['assets/Projects/hyperlink.png', { light: 'assets/Projects/hyperlink_whitemode.png' }],
    ['assets/Projects/isep.png', { light: 'assets/Projects/isep_whitemode.png' }],
    ['assets/Projects/sq1.png', { dark: 'assets/Projects/sq1_darkmode.png' }],
    ['assets/Projects/cape/defacto.png', { dark: 'assets/Projects/cape/defacto_darkmode.png' }],
    ['assets/Projects/cape/kocsistem.png', { dark: 'assets/Projects/cape/kocsistem_darkmode.png' }],
    ['assets/Projects/cape/sanimaia.png', { dark: 'assets/Projects/cape/sanimaia_darkmode.png' }],
    ['assets/Projects/cape/teknasyon.png', { dark: 'assets/Projects/cape/teknasyon_darkmode.png' }],
    ['assets/Projects/elfmo/cic.png', { dark: 'assets/Projects/elfmo/cic_darkmode.png' }],
    ['assets/Projects/elfmo/helsinki.png', { dark: 'assets/Projects/elfmo/helsinki_darkmode.png' }],
  ]);

  const CLIENTS = [
    'Sanimaia',
    'Edgar Praça',
    'NorSafe',
    'Nimco',
    'Glintt Healthcare',
    'BEIA',
    'ARD Group',
    'KAIST',
  ];

  const TRUSTED_CLIENTS = [
    { name: 'Sanimaia', src: 'assets/clients/sanimaia-light.png' },
    { name: 'Edgar Praca', src: 'assets/clients/edgar-praca-light.png' },
    { name: 'NorSafe', src: 'assets/clients/norsafe-light.png' },
    { name: 'Nimco', src: 'assets/clients/nimco-light.png' },
    { name: 'Glintt Healthcare', src: 'assets/Projects/glintt.png' },
    { name: 'BEIA', src: 'assets/Projects/beia.png' },
    { name: 'ARD Group', src: 'assets/Projects/ardgroup.png' },
    { name: 'KAIST', src: 'assets/Projects/cape/kaist.png' },
  ];

  const FOOTER_PAPERS = [
    {
      href: 'https://doi.org/10.1016/j.procs.2026.03.021',
      title: 'Blockchain-based Federated Learning in Recommendation Systems (2026)',
    },
    {
      href: 'https://doi.org/10.1109/IWIS66215.2025.11142401',
      title: 'Security-Enhancing Mechanisms for FL-Based Recommendations (2025)',
    },
    {
      href: 'https://doi.org/10.1109/BigData66926.2025.11402459',
      title: 'Local Vs Server Differential Privacy in Recommendations (2025)',
    },
  ];

  const STAGE_RANGES = [
    [0.00, 0.06],
    [0.06, 0.17],
    [0.17, 0.31],
    [0.31, 0.43],
    [0.43, 0.57],
    [0.57, 0.71],
    [0.71, 0.90],
    [0.90, 1.01],
  ];
  /* Index of the "crossing" stage inside STAGE_RANGES — its label comes
     from t.journey.portal.label rather than the legacy 12-label list. */
  const PORTAL_STAGE_INDEX = 4;
  let currentTranslationData = null;
  let activeBlogPostSlug = null;
  let blogCloseTimer = 0;
  let blogLastTrigger = null;

  function renderListItems(items) {
    return items.map(item => `<li>${escapeHtml(item)}</li>`).join('');
  }

  function getActiveTheme() {
    return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }

  function getThemeAwarePartnerLogoSrc(src, theme = getActiveTheme()) {
    const themeSources = THEME_PARTNER_LOGOS.get(src);
    if (!themeSources) return src;
    return themeSources[theme] || src;
  }

  function getThemeAwarePartnerLogoAttrs(src) {
    const themeSources = THEME_PARTNER_LOGOS.get(src);
    if (!themeSources) return '';
    const lightSrc = themeSources.light || src;
    const darkSrc = themeSources.dark || src;
    return ` data-logo-dark-src="${escapeHtml(darkSrc)}" data-logo-light-src="${escapeHtml(lightSrc)}"`;
  }

  function syncThemeAwarePartnerLogos(scope = document) {
    const theme = getActiveTheme();
    $$('img[data-logo-dark-src][data-logo-light-src]', scope).forEach((img) => {
      const nextSrc = theme === 'light'
        ? img.getAttribute('data-logo-light-src')
        : img.getAttribute('data-logo-dark-src');
      if (nextSrc && img.getAttribute('src') !== nextSrc) {
        img.setAttribute('src', nextSrc);
      }
    });
  }

  function renderChips(items, className = 'chips') {
    return `<ul class="${className}">${renderListItems(items)}</ul>`;
  }

  function renderPartnerLogos(item) {
    const partners = PROJECT_PARTNER_LOGOS[item.id] || [];
    const cards = partners.map((partner) => {
      const hasMedia = Boolean(partner.src || partner.inlineSvg);
      const logoSrc = partner.src ? getThemeAwarePartnerLogoSrc(partner.src) : '';
      const logoAttrs = partner.src ? getThemeAwarePartnerLogoAttrs(partner.src) : '';
      const markClass = hasMedia && partner.panel
        ? 'partner-logo__mark partner-logo__mark--panel'
        : 'partner-logo__mark';
      const imgClass = logoSrc && LIGHT_BG_LOGOS.has(logoSrc)
        ? ' class="partner-logo__img partner-logo__img--knockout"'
        : ' class="partner-logo__img"';
      const mark = partner.inlineSvg
        ? `<span class="${markClass}" aria-hidden="true">${partner.inlineSvg}</span>`
        : partner.src
        ? `<span class="${markClass}"><img${imgClass}${logoAttrs} src="${escapeHtml(logoSrc)}" alt="${escapeHtml(partner.name)} logo" loading="lazy" decoding="async" /></span>`
        : `<span class="partner-logo__mark partner-logo__mark--text" aria-hidden="true">${escapeHtml(partner.text || partner.name)}</span>`;

      return [
        '<li class="partner-logo">',
        `  ${mark}`,
        `  <span class="partner-logo__name">${escapeHtml(partner.name)}</span>`,
        '</li>',
      ].join('');
    }).join('');

    return [
      '<div class="iproject__partners">',
      `  <strong>${escapeHtml(item.partnersPrefix)}</strong>`,
      `  <ul class="partner-logos" aria-label="${escapeHtml(item.title)} partners">${cards}</ul>`,
      '</div>',
    ].join('');
  }

  function renderFlow(content) {
    return content.map((part) => {
      if (part.type === 'p') return `<p>${part.html}</p>`;
      if (part.type === 'ul') return `<ul>${renderListItems(part.items)}</ul>`;
      return '';
    }).join('');
  }

  function renderMarqueeTrack(items, repeats = 2) {
    const repeated = [];
    for (let i = 0; i < repeats; i += 1) repeated.push(...items);
    return repeated.map((item, index) => {
      const bullet = index === repeated.length - 1 ? '' : '<i>·</i>';
      return `<span>${escapeHtml(item)}</span>${bullet}`;
    }).join('');
  }

  function renderTrustedTrack(items, repeats = 2) {
    const repeated = [];
    for (let i = 0; i < repeats; i += 1) repeated.push(...items);
    return repeated.map((item) => {
      const media = item.src
        ? `<span class="client-badge__logo"><img class="client-badge__img" src="${escapeHtml(item.src)}" alt="${escapeHtml(item.name)} logo" loading="lazy" decoding="async" /></span>`
        : `<span class="client-badge__word">${escapeHtml(item.name)}</span>`;
      const label = item.src
        ? `<span class="client-badge__name">${escapeHtml(item.name)}</span>`
        : '';

      return [
        '<span class="client-badge">',
        `  ${media}`,
        `  ${label}`,
        '</span>',
      ].join('');
    }).join('');
  }

  function renderPaperBackers(t) {
    const items = [
      { name: 'ITEA', href: 'https://itea4.org', src: ITEA_LOGO_SRC, className: 'referrer-badge referrer-badge--itea' },
      { name: 'ANI', href: 'https://www.ani.pt', src: 'assets/brands/ani-logo.png', className: 'referrer-badge referrer-badge--ani' },
      { name: t.papers.euLabel, href: 'https://european-union.europa.eu', src: 'assets/brands/eu-flag.png', className: 'referrer-badge referrer-badge--eu' },
    ];

    const logos = items.map((item) => (
      `<a class="${item.className}" href="${item.href}" target="_blank" rel="noopener" aria-label="${escapeHtml(item.name)}">` +
      (item.inlineSvg || `<img src="${escapeHtml(item.src)}" alt="${escapeHtml(item.name)} logo" loading="lazy" decoding="async" />`) +
      '</a>'
    )).join('');

    return [
      '<div class="referrers">',
      `  <span class="referrers__label">${escapeHtml(t.papers.backedBy)}</span>`,
      `  <div class="referrers__logos">${logos}<span class="referrer-badge referrer-badge--norte" aria-label="Norte 2030"><img src="assets/Projects/norte2030.png" alt="Norte 2030 logo" loading="lazy" decoding="async" /></span></div>`,
      '</div>',
    ].join('');
  }

  function renderInstitutionalReferenceItems(t) {
    const items = [
      { name: 'ITEA', href: 'https://itea4.org', src: ITEA_LOGO_SRC, className: 'referrer-badge referrer-badge--itea' },
      { name: 'ANI', href: 'https://www.ani.pt', src: 'assets/brands/ani-logo.png', className: 'referrer-badge referrer-badge--ani' },
      { name: t.papers.euLabel, href: 'https://european-union.europa.eu', src: 'assets/brands/eu-flag.png', className: 'referrer-badge referrer-badge--eu' },
    ];

    return items.map((item) => [
      '<li>',
      `  <a class="${item.className}" href="${item.href}" target="_blank" rel="noopener" aria-label="${escapeHtml(item.name)}">`,
      `    ${item.inlineSvg || `<img src="${escapeHtml(item.src)}" alt="${escapeHtml(item.name)} logo" loading="lazy" decoding="async" />`}`,
      '  </a>',
      '</li>',
    ].join('')).join('');
  }

  function renderSectionHeader(kicker, titleHtml, lede) {
    return [
      '<header class="sec__head">',
      `  <span class="chap-num chap-num--solo">${escapeHtml(kicker)}</span>`,
      `  <h2 class="sec__title">${titleHtml}</h2>`,
      lede ? `  <p class="sec__lede">${lede}</p>` : '',
      '</header>',
    ].join('');
  }

  function renderPrecontactLine(text, className = '', delayOffset = 0) {
    let step = 0;
    const chars = Array.from(String(text || '')).map((char) => {
      const delay = delayOffset + (step * 36);
      step += 1;

      if (char === ' ') {
        return '<span class="precontact__gap" aria-hidden="true">&nbsp;</span>';
      }

      return `<span class="precontact__char" aria-hidden="true" style="--char-delay:${delay}ms">${escapeHtml(char)}</span>`;
    }).join('');

    return {
      markup: `<span class="precontact__line ${className}" aria-hidden="true">${chars}</span>`,
      nextDelay: delayOffset + (step * 36),
    };
  }

  function renderPrecontactStrapHtml(html) {
    if (!html) return '';
    let delay = 1480;
    let out = '';
    let word = '';
    const flushWord = () => {
      if (!word) return;
      out += `<span class="precontact__strap-word">${word}</span>`;
      word = '';
    };
    let i = 0;
    while (i < html.length) {
      const ch = html[i];
      if (ch === '<') {
        const end = html.indexOf('>', i);
        if (end === -1) {
          word += html.slice(i);
          break;
        }
        flushWord();
        out += html.slice(i, end + 1);
        i = end + 1;
      } else if (ch === '&') {
        const end = html.indexOf(';', i);
        const entity = end !== -1 && end - i <= 10 ? html.slice(i, end + 1) : ch;
        word += `<span class="precontact__strap-char" style="--char-delay:${delay}ms">${entity}</span>`;
        delay += 28;
        i += entity.length;
      } else if (ch === ' ') {
        flushWord();
        out += '<span class="precontact__strap-gap">&nbsp;</span>';
        i += 1;
      } else {
        word += `<span class="precontact__strap-char" style="--char-delay:${delay}ms">${escapeHtml(ch)}</span>`;
        delay += 28;
        i += 1;
      }
    }
    flushWord();
    return out;
  }

  function renderPrecontactMarkup(t) {
    const precontact = t.precontact || {};
    const strapInner = precontact.strapHtml ? renderPrecontactStrapHtml(precontact.strapHtml) : '';

    const signatureLetters = [
      { key: 'f', label: 'F', delay: 520 },
      { key: 't', label: 'T', delay: 940 },
      { key: 'p', label: 'P', delay: 1360 },
    ].map(({ key, label, delay }) => (
      `<img class="precontact__letter precontact__letter--${key}" src="assets/letters/ftp-letter-${key}-blue.png" data-letter="${key}" alt="${label}" loading="lazy" decoding="async" style="--letter-delay:${delay}ms" />`
    )).join('');

    return [
      '<div class="precontact__shell">',
      '  <div class="precontact__signature" data-precontact-signature aria-hidden="true">',
      `    <div class="precontact__signature-row">${signatureLetters}</div>`,
      '  </div>',
      strapInner ? `  <p class="precontact__strap" data-precontact-strap>${strapInner}</p>` : '',
      '</div>',
    ].join('');
  }

  function withBlogEnhancements(data, locale) {
    const enrichment = BLOG_POST_ENRICHMENTS[locale] || BLOG_POST_ENRICHMENTS.en;
    if (!data || !data.blog || !Array.isArray(data.blog.posts) || !enrichment) return data;

    const posts = data.blog.posts.map((post, index) => {
      const title = String(post.title || '').toLowerCase();
      const tag = String(post.tag || '').toLowerCase();
      const fallbackSlug = slugifyLookup(post.title || post.tag) || `blog-post-${index + 1}`;
      const baseDetailParagraphs = Array.isArray(post?.detail?.paragraphs)
        ? post.detail.paragraphs.slice()
        : Array.isArray(post.paragraphs)
          ? post.paragraphs.slice()
          : [];
      const enhancedPost = {
        ...post,
        slug: post.slug || fallbackSlug,
        detail: {
          ...(post.detail || {}),
          paragraphs: baseDetailParagraphs,
        },
      };
      const canonicalSlug = title.includes('ears') || tag.includes('ears')
        ? 'ears-ankara-review'
        : title.includes('expai') || tag.includes('expai')
          ? 'expai-korea-plenary'
          : title.includes('elfmo') || tag.includes('elfmo')
            ? 'elfmo-porto'
            : '';
      if (!canonicalSlug) return enhancedPost;

      const detailParagraphs = canonicalSlug === 'expai-korea-plenary' && Array.isArray(enrichment.detailParagraphs)
        ? enrichment.detailParagraphs.slice()
        : baseDetailParagraphs;

      return {
        ...enhancedPost,
        slug: canonicalSlug,
        detail: {
          ...(enhancedPost.detail || {}),
          paragraphs: detailParagraphs,
        },
      };
    });

    return {
      ...data,
      blog: {
        ...data.blog,
        openPostLabel: enrichment.openPostLabel,
        closePostLabel: enrichment.closePostLabel,
        galleryLabel: enrichment.galleryLabel,
        posts,
      },
    };
  }

  function getBlogPostImages(post) {
    const detailImages = Array.isArray(post?.detail?.images)
      ? post.detail.images.filter(Boolean)
      : [];
    return detailImages.length ? detailImages : (BLOG_POST_MEDIA[post.slug] || []);
  }

  function renderSolutionBlocks(blocks, labels) {
    return blocks.map((block) => {
      const title = labels[block.key] || '';
      return [
        '<section class="solution__block">',
        `  <h4>${escapeHtml(title)}</h4>`,
        renderFlow(block.content),
        '</section>',
      ].join('');
    }).join('');
  }

  function resolveLocale() {
    const translations = window.FTP_TRANSLATIONS || {};

    try {
      const stored = localStorage.getItem(LOCALE_KEY);
      if (stored && translations[stored]) return stored;
    } catch (e) {}

    const htmlLang = (document.documentElement.lang || '').toLowerCase().split('-')[0];
    if (SUPPORTED_LOCALES.includes(htmlLang) && translations[htmlLang]) return htmlLang;

    const browserLang = (navigator.language || '').toLowerCase().split('-')[0];
    if (SUPPORTED_LOCALES.includes(browserLang) && translations[browserLang]) return browserLang;

    return translations.en ? 'en' : Object.keys(translations)[0];
  }

  function normalizeStageLabels(labels, portalLabel) {
    if (Array.isArray(labels) && labels.length === STAGE_RANGES.length) return labels;
    const picked = JOURNEY_STAGE_LABEL_INDICES.map((index) => labels[index] || DEFAULT_STAGE_LABELS[index]);
    picked.splice(PORTAL_STAGE_INDEX, 0, portalLabel || 'SYNAPSE · CROSSING');
    return picked;
  }

  function stripJourneyProjectNames(value) {
    let next = String(value || '');
    JOURNEY_PROJECT_NAMES.forEach((name) => {
      next = next.replace(new RegExp(`\\b${name}\\b`, 'gi'), '');
    });
    return next
      .replace(/\s*(?:\u00C2\u00B7|\u00B7|&amp;|&)\s*(?=(?:<\/[^>]+>|$))/gi, '')
      .replace(/\s{2,}/g, ' ')
      .replace(/\s+([,.;:!?])/g, '$1')
      .replace(/\s+<\/(em|figcaption|span)>/gi, '</$1>')
      .trim();
  }

  function buildJourneyMarkup(t) {
    const quoteMarkup = t.journey.minds.quotes.map((item) => [
      '<figure class="quote" data-quote>',
      `  <blockquote>${escapeHtml(item.quote)}</blockquote>`,
      `  <figcaption>${stripJourneyProjectNames(item.captionHtml)}</figcaption>`,
      '</figure>',
    ].join('')).join('');

    const atlasPins = t.journey.atlas.pins;
    const atlasPinClasses = ['pt', 'es', 'ro', 'tr', 'kr', 'ca', 'ua', 'gb'];
    const atlasPinFlags = {
      pt: 'assets/flags/pt.svg',
      es: 'assets/flags/es.svg',
      ro: 'assets/flags/ro.svg',
      tr: 'assets/flags/tr.svg',
      kr: 'assets/flags/kr.svg',
      ca: 'assets/flags/ca.svg',
      ua: 'assets/flags/ua.svg',
      gb: 'assets/flags/gb.svg',
    };
    const atlasPinModifiers = {
      pt: ' atlas__pin--up',
      ro: ' atlas__pin--up',
      ua: ' atlas__pin--up',
      gb: ' atlas__pin--up',
    };
    const atlasPinLinks = new Set(['pt', 'tr', 'kr']);
    const atlasPinMarkup = atlasPins.map((pin, index) => {
      const label = index === 0 ? pin.label : stripJourneyProjectNames(pin.label);
      const labelMarkup = label ? `<em>${escapeHtml(label)}</em>` : '';
      const cls = atlasPinClasses[index] || 'pt';
      const flag = atlasPinFlags[cls] || atlasPinFlags.pt;
      const mod = atlasPinModifiers[cls] || '';
      const isLink = atlasPinLinks.has(cls);
      const tag = isLink ? 'a' : 'span';
      const linkAttrs = isLink
        ? ` href="#blog" aria-label="Read the blog post related to ${escapeHtml(pin.city)}"`
        : '';
      const linkClass = isLink ? ' atlas__pin--link' : '';
      return `      <${tag} class="atlas__pin atlas__pin--${cls}${mod}${linkClass}"${linkAttrs}><i aria-hidden="true"><img src="${escapeHtml(flag)}" alt="" loading="lazy" decoding="async" /></i><b>${escapeHtml(pin.city)}</b>${labelMarkup}</${tag}>`;
    }).join('');

    return [
      '<article id="awakening-cue" class="chapter chapter--awakening" data-from="0.04" data-to="0.17">',
      `  <p class="kicker">${t.journey.awakening.kicker.map(item => `<span>${escapeHtml(item)}</span>`).join('')}</p>`,
      `  <h1 class="display">${t.journey.awakening.titleHtml}</h1>`,
      `  <p class="awakening__lede">${t.journey.awakening.ledeHtml}</p>`,
      '</article>',

      '<article id="manifesto-cue" class="chapter chapter--manifesto" data-from="0.17" data-to="0.31">',
      `  <span class="chap-num">${escapeHtml(t.journey.manifesto.chapter)}</span>`,
      '  <div class="manifesto-text" data-words>',
      `    <p>${t.journey.manifesto.bodyHtml}</p>`,
      '  </div>',
      `  <span class="chap-sig">${escapeHtml(t.journey.manifesto.signature)}</span>`,
      '</article>',

      '<article class="chapter chapter--lab" data-from="0.31" data-to="0.43">',
      `  <span class="chap-num">${escapeHtml(t.journey.lab.chapter)}</span>`,
      `  <h2 class="lab-title">${t.journey.lab.titleHtml}</h2>`,
      '  <div class="lab-stats">',
      t.journey.lab.stats.map((stat) => [
        '    <div class="lab-stat">',
        `      <strong data-counter="${escapeHtml(stat.value)}"><i>${'0'.repeat(String(stat.value).length)}</i></strong>`,
        `      <span class="lab-stat__sfx">${escapeHtml(stat.suffix)}</span>`,
        `      <span class="lab-stat__lbl">${escapeHtml(stat.label)}</span>`,
        '    </div>',
      ].join('')).join(''),
      '  </div>',
      '</article>',

      '<article class="chapter chapter--portal" data-from="0.43" data-to="0.57" data-depth="fly">',
      `  <h2 class="portal-title">${(t.journey.portal && t.journey.portal.titleHtml) || 'Inside the <em>mind</em>.'}</h2>`,
      '</article>',

      '<article class="chapter chapter--atlas" data-from="0.57" data-to="0.71">',
      `  <span class="chap-num">${escapeHtml(t.journey.atlas.chapter)}</span>`,
      `  <h2 class="atlas__title">${t.journey.atlas.titleHtml}</h2>`,
      '  <div class="atlas">',
      '    <div class="atlas__map">',
      '      <img class="atlas__world" src="assets/world-map.svg" alt="" aria-hidden="true" />',
      '      <svg viewBox="0 0 1000 500" preserveAspectRatio="none">',
      '        <g class="atlas__graticule">',
      '          <line x1="0" y1="250" x2="1000" y2="250"/>',
      '          <line x1="500" y1="0" x2="500" y2="500"/>',
      '        </g>',
      '        <g class="atlas__routes">',
      '          <path d="M476,136 Q483,148 490,138" pathLength="100"/>',
      '          <path d="M476,136 Q524,90 572,127" pathLength="100"/>',
      '          <path d="M476,136 Q533,85 591,139" pathLength="100"/>',
      '          <path d="M476,136 Q666,20 857,150" pathLength="100"/>',
      '          <path d="M476,136 Q383,48 290,124" pathLength="100"/>',
      '          <path d="M476,136 Q530,88 585,110" pathLength="100"/>',
      '          <path d="M476,136 Q489,93 500,107" pathLength="100"/>',
      '        </g>',
      '      </svg>',
      atlasPinMarkup,
      '    </div>',
      `    <div class="atlas__copy">${escapeHtml(t.journey.atlas.copy)}</div>`,
      '  </div>',
      '</article>',

      '<article id="minds-cue" class="chapter chapter--minds" data-from="0.71" data-to="0.90">',
      `  <span class="chap-num">${escapeHtml(t.journey.minds.chapter)}</span>`,
      `  <h2 class="minds-title">${t.journey.minds.titleHtml}</h2>`,
      `  <div class="quotes" data-quotes>${quoteMarkup}</div>`,
      '</article>',

      '<article class="chapter chapter--invite" data-from="0.90" data-to="1.00">',
      `  <span class="chap-num">${escapeHtml(t.journey.invite.chapter)}</span>`,
      `  <h2 class="invite-title">${t.journey.invite.titleHtml}</h2>`,
      `  <p class="invite-lede">${escapeHtml(t.journey.invite.lede)}</p>`,
      '  <span class="invite-arrow">↓</span>',
      '</article>',
    ].join('');
  }

  function renderSolutionsMarkup(t) {
    const labels = t.labels.solutionBlocks;

    const cards = t.solutions.items.map((item, index) => {
      const asset = String(index + 1).padStart(2, '0');
      const num = `/${String(index + 1).padStart(2, '0')}`;

      return [
        `<li class="solution solution--video" id="${escapeHtml(item.id)}">`,
        '  <figure class="solution__art solution__art--video">',
        `    <video src="assets/solutions/sol-${asset}.mp4" poster="assets/solutions/sol-${asset}.jpg" muted loop playsinline preload="metadata" aria-label="${escapeHtml(item.ariaLabel)}"></video>`,
        `    <span class="solution__art-badge"><i></i>${escapeHtml(t.labels.liveDemo)}</span>`,
        '  </figure>',
        '  <header>',
        `    <span class="solution__num">${num}</span>`,
        `    <h3>${escapeHtml(item.title)}</h3>`,
        `    <span class="solution__tag">${escapeHtml(item.tag)}</span>`,
        '  </header>',
        '  <div class="solution__scroll">',
        `    <p class="solution__lead">${escapeHtml(item.lead)}</p>`,
        item.intro.map(copy => `<p class="solution__intro">${copy}</p>`).join(''),
        renderSolutionBlocks(item.blocks, labels),
        renderChips(item.chips, 'chips chips--inline'),
        '  </div>',
        '</li>',
      ].join('');
    }).join('');

    const academy = t.solutions.experts.academy;
    const appstudio = t.solutions.experts.appstudio;
    const appstudioPreviewCaps = appstudio.capabilities.slice(0, 2);

    return [
      renderSectionHeader(
        t.solutions.header.kicker,
        t.solutions.header.titleHtml,
        t.solutions.header.lede
      ),
      `<ol class="solutions">${cards}</ol>`,
      '<div class="experts">',
      `  <span class="chap-num chap-num--solo">${escapeHtml(t.solutions.experts.kicker)}</span>`,
      '  <div class="experts__grid">',
      '    <article class="expert">',
      `      <img class="expert__image" src="assets/solutions/academy.png" alt="${escapeHtml(academy.title)}" loading="lazy" decoding="async" />`,
      '      <header>',
      `        <h3>${escapeHtml(academy.title)}</h3>`,
      '        <a class="expert__cta" href="https://academia.ftpporto.com" target="_blank" rel="noopener">',
      `          ${escapeHtml(academy.cta)}`,
      '        </a>',
      '      </header>',
      '      <div class="expert__intro">',
      academy.paragraphs.map(copy => `        <p>${escapeHtml(copy)}</p>`).join(''),
      '      </div>',
      `      ${renderChips(academy.chips)}`,
      '    </article>',
      '    <article class="expert" data-expert="appstudio">',
      `      <img class="expert__image" src="assets/solutions/appstudio.jpg" alt="${escapeHtml(appstudio.title)}" loading="lazy" decoding="async" />`,
      '      <header>',
      `        <h3>${escapeHtml(appstudio.title)}</h3>`,
      '      </header>',
      '      <div class="expert__intro">',
      appstudio.paragraphs.map(copy => `        <p>${escapeHtml(copy)}</p>`).join(''),
      '      </div>',
      '      <ul class="appstudio-caps">',
      appstudioPreviewCaps.map((cap) => [
        '        <li>',
        `          <strong>${escapeHtml(cap.title)}</strong> ${escapeHtml(cap.text)}`,
        '        </li>',
      ].join('')).join(''),
      '      </ul>',
      '    </article>',
      '  </div>',
      '  <div class="how-we-work">',
      `    <h4>${escapeHtml(t.solutions.experts.processTitle)}</h4>`,
      '    <ol>',
      t.solutions.experts.steps.map((step) => [
        '      <li>',
        `        <strong>${escapeHtml(step.title)}</strong>`,
        `        <span>${escapeHtml(step.text)}</span>`,
        '      </li>',
      ].join('')).join(''),
      '    </ol>',
      '  </div>',
      '</div>',
      '<div class="trusted">',
      `  <span class="chap-num chap-num--solo">${escapeHtml(t.solutions.experts.trustedTitle)}</span>`,
      '  <div class="marquee marquee--clients">',
      `    <div class="marquee__track">${renderTrustedTrack(TRUSTED_CLIENTS, 2)}</div>`,
      '  </div>',
      '</div>',
    ].join('');
  }

  function suppressAppstudioLinks(scope = document) {
    $$('[data-expert="appstudio"] h3 a', scope).forEach((link) => {
      const text = document.createElement('span');
      text.className = 'expert__title-text';
      text.textContent = link.textContent || '';
      link.replaceWith(text);
    });

    $$('[data-expert="appstudio"] .expert__cta', scope).forEach((cta) => cta.remove());
  }

  function renderProjectsMarkup(t) {
    const cards = t.projects.items.map((item) => {
      const statusClass = item.statusClass === 'done' ? 'status status--done' : 'status status--ongoing';
      const featuredClass = item.featured ? ' iproject--featured' : '';

      return [
        `<article class="iproject${featuredClass}" id="proj-${escapeHtml(item.id)}">`,
        '  <header>',
        '    <div class="iproject__title">',
        '      <div class="iproject__titlecopy">',
        `        <h3>${escapeHtml(item.title)}</h3>`,
        `        <span>${escapeHtml(item.subtitle)}</span>`,
        '      </div>',
        `      ${renderProjectLogoMarkup(item.id)}`,
        '    </div>',
        '    <div class="iproject__meta">',
        `      <span class="${statusClass}">${escapeHtml(item.status)}</span>`,
        `      <span>${escapeHtml(item.meta)}</span>`,
        '    </div>',
        '  </header>',
        '  <div class="iproject__body">',
        '    <div>',
        `      <h4>${escapeHtml(t.labels.problem)}</h4>`,
        `      <p>${item.problemHtml}</p>`,
        '    </div>',
        '    <div>',
        `      <h4>${escapeHtml(t.labels.solution)}</h4>`,
        `      <p>${item.solutionHtml}</p>`,
        '    </div>',
        '  </div>',
        '  <footer>',
        `    ${renderChips(item.chips)}`,
        `    ${renderPartnerLogos(item)}`,
        '  </footer>',
        '</article>',
      ].join('');
    }).join('');

    return [
      renderSectionHeader(
        t.projects.header.kicker,
        t.projects.header.titleHtml,
        t.projects.header.lede
      ),
      `<div class="iprojects">${cards}</div>`,
    ].join('');
  }

  function renderPapersMarkup(t) {
    return [
      renderSectionHeader(t.papers.kicker, t.papers.titleHtml, t.papers.lede),
      '<ul class="papers">',
      PAPER_ITEMS.map((paper) => [
        '  <li>',
        `    <div class="paper__year">${escapeHtml(paper.year)}</div>`,
        '    <div>',
        `      <h4>${escapeHtml(paper.title)}</h4>`,
        `      <span class="paper__venue">${escapeHtml(paper.venue)}</span>`,
        '    </div>',
        `    <a class="paper__doi" href="${paper.href}" target="_blank" rel="noopener">DOI ↗</a>`,
        '  </li>',
      ].join('')).join(''),
      '</ul>',
      '<div class="referrers">',
      `  <span class="referrers__label">${escapeHtml(t.papers.backedBy)}</span>`,
      '  <a href="https://itea4.org" target="_blank" rel="noopener">ITEA</a><i>·</i>',
      '  <a href="https://www.ani.pt" target="_blank" rel="noopener">ANI</a><i>·</i>',
      `  <a href="https://european-union.europa.eu" target="_blank" rel="noopener">${escapeHtml(t.papers.euLabel)}</a><i>·</i>`,
      '  <span>Norte 2030</span>',
      '</div>',
    ].join('');
  }

  function renderPapersMarkupWithBackerLogos(t) {
    return [
      renderSectionHeader(t.papers.kicker, t.papers.titleHtml, t.papers.lede),
      '<ul class="papers">',
      PAPER_ITEMS.map((paper) => [
        '  <li>',
        `    <div class="paper__year">${escapeHtml(paper.year)}</div>`,
        '    <div>',
        `      <h4>${escapeHtml(paper.title)}</h4>`,
        `      <span class="paper__venue">${escapeHtml(paper.venue)}</span>`,
        '    </div>',
        `    <a class="paper__doi" href="${paper.href}" target="_blank" rel="noopener">DOI ↗</a>`,
        '  </li>',
      ].join('')).join(''),
      '</ul>',
      renderPaperBackers(t),
    ].join('');
  }

  function getTeamMemberMedia(member, index) {
    const fallbackKey = slugifyLookup(member && member.name);
    const key = TEAM_MEMBER_ORDER[index] || fallbackKey;
    const media = TEAM_MEMBER_MEDIA[key] || TEAM_MEMBER_MEDIA[fallbackKey] || {};
    return {
      key,
      image: media.image || '',
      poster: media.poster || media.image || '',
      video: media.video || '',
    };
  }

  function getTeamMemberInitials(name) {
    const words = String(name || '').trim().split(/\s+/).filter(Boolean);
    if (!words.length) return 'AI';
    return words
      .slice(0, 2)
      .map((word) => Array.from(word)[0] || '')
      .join('')
      .toUpperCase();
  }

  function renderTeamPanelVisualMarkup(member, media, options = {}) {
    if (options.group) {
      return [
        '<figure class="team-panel__visual team-panel__visual--group">',
        `  <img class="team-panel__asset" src="${escapeHtml(TEAM_GROUP_MEDIA.image)}" alt="${escapeHtml(options.alt || 'Team group photo')}" loading="lazy" decoding="async" />`,
        '</figure>',
      ].join('');
    }

    const label = `${member.name} portrait`;
    const assetMarkup = media.video
      ? `<video class="team-panel__asset" autoplay muted loop playsinline preload="metadata"${media.poster ? ` poster="${escapeHtml(media.poster)}"` : ''} aria-label="${escapeHtml(label)} video"><source src="${escapeHtml(media.video)}" type="video/mp4" /></video>`
      : media.image
        ? `<img class="team-panel__asset" src="${escapeHtml(media.image)}" alt="${escapeHtml(label)}" loading="lazy" decoding="async" />`
        : `<span class="team-panel__fallback">${escapeHtml(getTeamMemberInitials(member.name))}</span>`;

    const visualClass = media.video
      ? 'team-panel__visual team-panel__visual--member team-panel__visual--video'
      : 'team-panel__visual team-panel__visual--member';

    return [
      `<figure class="${visualClass}">`,
      `  ${assetMarkup}`,
      '</figure>',
    ].join('');
  }

  function renderTeamOverviewPanel(t) {
    return [
      '<div class="team-panel team-panel--group" data-team-panel-state="group">',
      `  <div class="team-panel__media">${renderTeamPanelVisualMarkup({ name: 'Team' }, TEAM_GROUP_MEDIA, { group: true, alt: t.team.groupAlt })}</div>`,
      '  <div class="team-panel__body">',
      `    <span class="team-panel__eyebrow">${escapeHtml(t.team.kicker)}</span>`,
      `    <h3 class="team-panel__title">${escapeHtml(t.team.groupTitle || '')}</h3>`,
      t.team.groupBody ? `    <p class="team-panel__bodycopy">${escapeHtml(t.team.groupBody)}</p>` : '',
      '  </div>',
      '</div>',
    ].join('');
  }

  function renderTeamMemberPanel(member, index, t) {
    const media = getTeamMemberMedia(member, index);
    return [
      '<div class="team-panel team-panel--member" data-team-panel-state="member">',
      '  <div class="team-panel__body team-panel__body--full">',
      '    <div class="team-panel__actions">',
      `      <button type="button" class="team-panel__reset" data-team-reset>&larr; ${escapeHtml(t.team.groupButton || 'View group photo')}</button>`,
      '    </div>',
      '    <div class="team-panel__content">',
      `      <div class="team-panel__media">${renderTeamPanelVisualMarkup(member, media)}</div>`,
      '      <div class="team-panel__copy">',
      `        <span class="team-panel__eyebrow">${escapeHtml(member.role)}</span>`,
      `        <h3 class="team-panel__title">${escapeHtml(member.name)}</h3>`,
      `        <p class="team-panel__spec">${escapeHtml(member.spec)}</p>`,
      member.quote ? `        <blockquote class="team-panel__quote">${escapeHtml(member.quote)}</blockquote>` : '',
      '      </div>',
      '    </div>',
      '  </div>',
      '</div>',
    ].join('');
  }

  function renderTeamThumbMarkup(member, index) {
    const media = getTeamMemberMedia(member, index);
    const avatarMarkup = media.image
      ? `<img class="team-thumb__asset" src="${escapeHtml(media.image)}" alt="${escapeHtml(member.name)} portrait" loading="lazy" decoding="async" />`
      : `<span class="team-thumb__fallback">${escapeHtml(getTeamMemberInitials(member.name))}</span>`;

    return [
      `<button type="button" class="team-thumb" data-team-select="${index}" aria-pressed="false">`,
      `  <span class="team-thumb__avatar"${media.video ? ' data-has-video="true"' : ''}>`,
      `    ${avatarMarkup}`,
      media.video ? '    <span class="team-thumb__badge" aria-hidden="true"></span>' : '',
      '  </span>',
      `  <span class="team-thumb__name">${escapeHtml(member.name)}</span>`,
      '</button>',
    ].join('');
  }

  function renderTeamMarkup(t) {
    const thumbs = t.team.members.map((member, index) => renderTeamThumbMarkup(member, index)).join('');
    return [
      renderSectionHeader(t.team.kicker, t.team.titleHtml, t.team.lede || ''),
      '<div class="team-showcase" data-team-showcase>',
      `  <div class="team-showcase__panel" data-team-panel>${renderTeamOverviewPanel(t)}</div>`,
      '  <div class="team-showcase__rail">',
      `    <div class="team-showcase__rail-head"><span class="team-showcase__rail-title">${escapeHtml(t.team.memberRailTitle || 'Meet the Team')}</span></div>`,
      '    <div class="team-showcase__rail-track">',
      `      <div class="team-showcase__strip" data-team-strip role="group" aria-label="${escapeHtml(t.team.memberStripLabel || 'Team members')}">${thumbs}</div>`,
      '    </div>',
      '  </div>',
      '</div>',
    ].join('');
  }

  function setupTeamShowcase(t) {
    const showcase = $('[data-team-showcase]');
    if (!showcase || !t || !t.team || !Array.isArray(t.team.members)) return;

    const panel = $('[data-team-panel]', showcase);
    const strip = $('[data-team-strip]', showcase);
    const buttons = $$('[data-team-select]', showcase);
    if (!panel || !strip || !buttons.length) return;

    let activeIndex = null;

    const syncButtonState = () => {
      buttons.forEach((button, index) => {
        const active = index === activeIndex;
        button.classList.toggle('is-active', active);
        button.setAttribute('aria-pressed', active ? 'true' : 'false');
      });
    };

    const updatePanel = (index = null) => {
      activeIndex = Number.isInteger(index) ? index : null;
      panel.innerHTML = activeIndex === null
        ? renderTeamOverviewPanel(t)
        : renderTeamMemberPanel(t.team.members[activeIndex], activeIndex, t);

      syncButtonState();

      const video = $('video', panel);
      if (video) {
        const playPromise = video.play();
        if (playPromise && typeof playPromise.catch === 'function') {
          playPromise.catch(() => {});
        }
      }
    };

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        const index = Number(button.dataset.teamSelect);
        if (!Number.isInteger(index)) return;
        updatePanel(index);
      });
    });

    showcase.addEventListener('click', (event) => {
      if (!(event.target instanceof Element)) return;
      const resetButton = event.target.closest('[data-team-reset]');
      if (resetButton) updatePanel(null);
    });
    updatePanel(null);
  }

  function renderBlogMediaMarkup(images, galleryLabel) {
    if (!images.length) return '';

    const hero = images[0];
    const gallery = images.slice(1);
    const heroMarkup = hero ? [
      '<figure class="blog-detail__hero">',
      `  <img src="${escapeHtml(hero.src)}" alt="${escapeHtml(hero.alt || '')}" loading="lazy" decoding="async" />`,
      '</figure>',
    ].join('') : '';
    const galleryMarkup = gallery.length ? [
      '<div class="blog-detail__gallery-wrap">',
      `  <span class="blog-detail__gallery-label">${escapeHtml(galleryLabel)}</span>`,
      '  <div class="blog-detail__gallery">',
      gallery.map((image) => [
        '    <figure class="blog-detail__shot">',
        `      <img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.alt || '')}" loading="lazy" decoding="async" />`,
        '    </figure>',
      ].join('')).join(''),
      '  </div>',
      '</div>',
    ].join('') : '';

    return [
      '<div class="blog-detail__media">',
      heroMarkup,
      galleryMarkup,
      '</div>',
    ].join('');
  }

  function renderBlogCardCoverMarkup(post) {
    const cover = BLOG_POST_COVERS[post.slug] || getBlogPostImages(post)[0];
    if (!cover) return '';

    return [
      `<figure class="post__cover" data-blog-cover="${escapeHtml(post.slug || '')}">`,
      `  <img src="${escapeHtml(cover.src)}" alt="${escapeHtml(cover.alt || post.cardTitle || post.title || '')}" loading="lazy" decoding="async" />`,
      '</figure>',
    ].join('');
  }

  function renderProjectLogoMarkup(projectId) {
    const logo = PROJECT_LOGOS[projectId];
    if (!logo) return '';

    return [
      '<span class="iproject__logo" aria-hidden="true">',
      `  <img src="${escapeHtml(logo.src)}" alt="${escapeHtml(logo.alt || '')}" loading="lazy" decoding="async" />`,
      '</span>',
    ].join('');
  }

  function renderBlogPostDetailMarkup(post, blogCopy) {
    const detail = post.detail || {};
    const detailTitle = detail.title || post.title;
    const detailLead = detail.lead || post.lead;
    const detailDate = detail.date || post.date;
    const paragraphs = Array.isArray(detail.paragraphs)
      ? detail.paragraphs.map((copy) => `    <p>${escapeHtml(copy)}</p>`).join('')
      : '';
    const images = getBlogPostImages(post);
    const galleryLabel = detail.galleryLabel || blogCopy.galleryLabel || 'Photo gallery';
    const closeLabel = blogCopy.closePostLabel || 'Close article';

    return [
      `<button class="blog-detail__backdrop" type="button" data-blog-close aria-label="${escapeHtml(closeLabel)}"></button>`,
      '<article class="blog-detail__card" data-blog-detail-card tabindex="-1" role="dialog" aria-modal="true">',
      '  <div class="blog-detail__head">',
      '    <div class="blog-detail__meta">',
      `      <span class="blog-detail__cat">${escapeHtml(post.category)}</span>`,
      `      <span class="blog-detail__date">${escapeHtml(detailDate)}</span>`,
      '    </div>',
      `    <button class="blog-detail__close" type="button" data-blog-close>${escapeHtml(closeLabel)}</button>`,
      '  </div>',
      `  <h3 class="blog-detail__title">${escapeHtml(detailTitle)}</h3>`,
      detailLead ? `  <p class="blog-detail__lead">${escapeHtml(detailLead)}</p>` : '',
      `  ${renderBlogMediaMarkup(images, galleryLabel)}`,
      paragraphs ? `  <div class="blog-detail__body">${paragraphs}</div>` : '',
      '  <div class="blog-detail__foot">',
      `    <span class="blog-detail__tag">${escapeHtml(post.tag)}</span>`,
      '  </div>',
      '</article>',
    ].join('');
  }

  function renderBlogMarkup(t) {
    const cards = t.blog.posts.map((post) => {
      const hasDetail = Boolean(post.slug && post.detail);
      const classes = post.featured ? 'post post--featured' : 'post';
      const coverMarkup = renderBlogCardCoverMarkup(post);
      const cardTitle = post.cardTitle || post.title;
      const cardLead = post.cardLead || post.lead;
      const cardDate = post.cardDate || post.date;
      const content = [
        cardLead ? `    <p class="post__lead">${escapeHtml(cardLead)}</p>` : '',
        post.paragraphs.map(copy => `    <p>${escapeHtml(copy)}</p>`).join(''),
      ].filter(Boolean).join('');
      return [
        `<article class="${classes}${hasDetail ? ' post--detail' : ''}">`,
        coverMarkup ? `  ${coverMarkup}` : '',
        '  <div class="post__meta">',
        `    <span class="post__cat">${escapeHtml(post.category)}</span>`,
        `    <span class="post__date">${escapeHtml(cardDate)}</span>`,
        '  </div>',
        hasDetail
          ? `  <h3><button class="post__titlebtn" type="button" data-blog-open="${escapeHtml(post.slug)}" aria-expanded="false">${escapeHtml(cardTitle)}</button></h3>`
          : `  <h3>${escapeHtml(cardTitle)}</h3>`,
        `  <div class="post__body">${content}</div>`,
        `  <span class="post__tag">${escapeHtml(post.tag)}</span>`,
        hasDetail
          ? `  <button class="post__cta" type="button" data-blog-open="${escapeHtml(post.slug)}" aria-expanded="false">${escapeHtml(t.blog.openPostLabel || 'Read More')}</button>`
          : '',
        '</article>',
      ].join('');
    }).join('');

    return [
      renderSectionHeader(t.blog.kicker, t.blog.titleHtml, t.blog.lede),
      `<div class="blog-grid">${cards}</div>`,
    ].join('');
  }

  function ensureBlogDetailShell() {
    let shell = document.body.querySelector('[data-blog-detail-shell]');
    if (shell) return shell;

    shell = document.createElement('div');
    shell.className = 'blog-detail-shell';
    shell.dataset.blogDetailShell = '';
    shell.hidden = true;
    shell.setAttribute('aria-hidden', 'true');
    document.body.appendChild(shell);
    return shell;
  }

  function findBlogPostBySlug(slug) {
    const posts = currentTranslationData && currentTranslationData.blog && currentTranslationData.blog.posts;
    if (!slug || !Array.isArray(posts)) return null;
    return posts.find((post) => post.slug === slug) || null;
  }

  function syncBlogOpenStates() {
    $$('[data-blog-open]').forEach((control) => {
      const isActive = control.getAttribute('data-blog-open') === activeBlogPostSlug;
      control.setAttribute('aria-expanded', isActive ? 'true' : 'false');
    });
  }

  function closeBlogDetail(immediate = false) {
    const shell = $('[data-blog-detail-shell]');
    if (!shell) return;
    activeBlogPostSlug = null;
    document.body.classList.remove('is-blog-open');
    shell.classList.remove('is-open');
    shell.setAttribute('aria-hidden', 'true');
    if (blogCloseTimer) {
      clearTimeout(blogCloseTimer);
      blogCloseTimer = 0;
    }
    syncBlogOpenStates();

    const finalize = () => {
      shell.hidden = true;
      shell.innerHTML = '';
      if (blogLastTrigger && typeof blogLastTrigger.focus === 'function') {
        try { blogLastTrigger.focus({ preventScroll: true }); }
        catch (e) { blogLastTrigger.focus(); }
      }
      blogLastTrigger = null;
    };

    if (immediate || reduced) {
      finalize();
      return;
    }

    blogCloseTimer = window.setTimeout(() => {
      blogCloseTimer = 0;
      finalize();
    }, 900);
  }

  function syncBlogDetail() {
    const shell = ensureBlogDetailShell();
    if (!shell) return null;

    const post = findBlogPostBySlug(activeBlogPostSlug);
    if (!post || !post.detail) {
      closeBlogDetail(true);
      return null;
    }

    if (blogCloseTimer) {
      clearTimeout(blogCloseTimer);
      blogCloseTimer = 0;
    }
    shell.hidden = false;
    shell.innerHTML = renderBlogPostDetailMarkup(post, currentTranslationData.blog);
    shell.setAttribute('aria-hidden', 'false');
    syncBlogOpenStates();
    document.body.classList.add('is-blog-open');
    requestAnimationFrame(() => shell.classList.add('is-open'));

    return $('[data-blog-detail-card]', shell);
  }

  function setupBlogInteractions() {
    const blog = $('#blog');
    if (!blog) return;
    const shell = ensureBlogDetailShell();
    if (!shell) return;

    if (blog.dataset.bound !== 'true') {
      blog.addEventListener('click', (event) => {
        const openButton = event.target.closest('[data-blog-open]');
        if (openButton && blog.contains(openButton)) {
          event.preventDefault();
          blogLastTrigger = openButton;
          activeBlogPostSlug = openButton.getAttribute('data-blog-open');
          const detailCard = syncBlogDetail();
          if (detailCard) {
            requestAnimationFrame(() => {
              try { detailCard.focus({ preventScroll: true }); }
              catch (e) { detailCard.focus(); }
            });
          }
          return;
        }
      });

      document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && activeBlogPostSlug) {
          closeBlogDetail();
        }
      });

      blog.dataset.bound = 'true';
    }

    if (shell.dataset.bound !== 'true') {
      shell.addEventListener('click', (event) => {
        const closeButton = event.target.closest('[data-blog-close]');
        if (!closeButton || !shell.contains(closeButton)) return;
        event.preventDefault();
        closeBlogDetail();
      });

      shell.dataset.bound = 'true';
    }

    syncBlogDetail();
    syncBlogOpenStates();
  }

  let precontactObserver = null;
  function setupPrecontactWave() {
    const display = $('[data-precontact-display]');
    const strap = $('[data-precontact-strap]');
    const signature = $('[data-precontact-signature]');
    const targets = [display, strap, signature].filter(Boolean);

    if (precontactObserver) {
      precontactObserver.disconnect();
      precontactObserver = null;
    }

    targets.forEach((el) => el.classList.remove('is-in'));
    if (!targets.length) return;

    if (reduced) {
      targets.forEach((el) => el.classList.add('is-in'));
      return;
    }

    precontactObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        precontactObserver.unobserve(entry.target);
      });
    }, { threshold: 0.22, rootMargin: '0px 0px -10% 0px' });

    targets.forEach((el) => precontactObserver.observe(el));
  }

  function renderAboutMarkup(t) {
    return [
      renderSectionHeader(t.about.kicker, t.about.titleHtml, t.about.lede || ''),
      '<div class="about__grid">',
      '  <article class="about__who">',
      `    <span class="sec__kicker">${escapeHtml(t.about.whoTitle)}</span>`,
      `    <p>${t.about.whoHtml}</p>`,
      '  </article>',
      '  <aside class="about__mission">',
      `    <span class="sec__kicker">${escapeHtml(t.about.missionTitle)}</span>`,
      `    <blockquote>${t.about.missionHtml}</blockquote>`,
      '  </aside>',
      '</div>',
      '<ol class="about__stats">',
      t.about.stats.map((stat) => `<li><strong>${escapeHtml(stat.value)}</strong><span>${escapeHtml(stat.label)}</span></li>`).join(''),
      '</ol>',
      '<div class="about__split">',
      '  <article>',
      `    <span class="sec__kicker">${escapeHtml(t.about.securityTitle)}</span>`,
      `    <p>${escapeHtml(t.about.securityHtml)}</p>`,
      `    ${renderChips(t.about.securityBadges, 'badge-row')}`,
      '  </article>',
      '  <article>',
      `    <span class="sec__kicker">${escapeHtml(t.about.reachTitle)}</span>`,
      `    <p>${t.about.reachHtml}</p>`,
      `    ${renderChips(t.about.reachBadges, 'badge-row')}`,
      '  </article>',
      '</div>',
    ].join('');
  }

  function renderContactMarkup(t) {
    const f = t.contact.fields;
    const address = t.contact.info.addressLines.map((line) => escapeHtml(line)).join('<br/>');

    return [
      renderSectionHeader(t.contact.kicker, t.contact.titleHtml, t.contact.lede),
      '<div class="contact-grid">',
      '  <form class="contact-form" data-contact-form action="mailto:geral@ftpporto.com" method="post" enctype="text/plain">',
      `    <h3>${escapeHtml(t.contact.formTitle)}</h3>`,
      '    <div class="field-row">',
      '      <label class="field">',
      `        <span>${escapeHtml(f.firstName)}</span>`,
      '        <input type="text" name="firstName" required />',
      '      </label>',
      '      <label class="field">',
      `        <span>${escapeHtml(f.lastName)}</span>`,
      '        <input type="text" name="lastName" required />',
      '      </label>',
      '    </div>',
      '    <label class="field">',
      `      <span>${escapeHtml(f.organization)}</span>`,
      '      <input type="text" name="organization" />',
      '    </label>',
      '    <label class="field">',
      `      <span>${escapeHtml(f.email)}</span>`,
      '      <input type="email" name="email" required />',
      '    </label>',
      '    <label class="field">',
      `      <span>${escapeHtml(f.subject)}</span>`,
      '      <select name="subject" required>',
      `        <option value="">${escapeHtml(t.contact.subjectPlaceholder)}</option>`,
      `        <option value="Partnership">${escapeHtml(t.contact.subjects.partnership)}</option>`,
      `        <option value="R&D Inquiry">${escapeHtml(t.contact.subjects.rd)}</option>`,
      `        <option value="Solutions">${escapeHtml(t.contact.subjects.solutions)}</option>`,
      '      </select>',
      '    </label>',
      '    <label class="field">',
      `      <span>${escapeHtml(f.message)}</span>`,
      '      <textarea name="message" rows="5" required></textarea>',
      '    </label>',
      '    <button type="submit" class="btn btn--primary">',
      `      <span>${escapeHtml(t.contact.sendMessage)}</span>`,
      '      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
      '    </button>',
      '  </form>',
      '  <aside class="contact-info">',
      '    <div>',
      `      <span class="info__label">${escapeHtml(t.contact.info.general)}</span>`,
      '      <a class="info__line" href="tel:+351229774530">+351 229 774 530</a>',
      '      <a class="info__line" href="mailto:geral@ftpporto.com">geral@ftpporto.com</a>',
      '    </div>',
      '    <div>',
      `      <span class="info__label">${escapeHtml(t.contact.info.location)}</span>`,
      `      <address>${address}</address>`,
      '      <div class="contact-map">',
      '        <iframe',
      '          src="https://www.google.com/maps?q=Rua+Professor+Correia+de+S%C3%A1+56,+4445-570+Ermesinde,+Porto,+Portugal&z=17&output=embed"',
      '          title="FTP AI Lab location on Google Maps"',
      '          loading="lazy"',
      '          referrerpolicy="no-referrer-when-downgrade"',
      '          allowfullscreen></iframe>',
      '      </div>',
      '    </div>',
      '    <div>',
      `      <span class="info__label">${escapeHtml(t.contact.info.channels)}</span>`,
      '      <a class="info__line" href="https://ftpporto.com" target="_blank" rel="noopener">ftpporto.com ↗</a>',
      '      <a class="info__line" href="https://academia.ftpporto.com" target="_blank" rel="noopener">academia.ftpporto.com ↗</a>',
      '      <a class="info__line" href="https://www.linkedin.com/company/ftpporto/" target="_blank" rel="noopener">LinkedIn ↗</a>',
      '      <a class="info__line" href="https://www.instagram.com/ftpporto/" target="_blank" rel="noopener">Instagram ↗</a>',
      '      <a class="info__line" href="https://www.facebook.com/ftpporto/" target="_blank" rel="noopener">Facebook ↗</a>',
      '    </div>',
      '  </aside>',
      '</div>',
    ].join('');
  }

  function renderFooterMarkup(t) {
    const footerPapers = Array.isArray(t.footer.paperLinks) && t.footer.paperLinks.length
      ? t.footer.paperLinks
      : FOOTER_PAPERS;
    const paperLinks = footerPapers.map((paper) =>
      `<li><a href="${paper.href}" target="_blank" rel="noopener">${escapeHtml(paper.title)}</a></li>`
    ).join('');

    return [
      '<div class="foot__cols">',
      '  <div class="foot__col foot__col--brand">',
      `    <div class="foot__brand"><img class="foot__brand-logo" src="assets/ftp-logo.png" alt="FTP" width="56" height="22" loading="lazy" decoding="async" /><span class="foot__brand-suffix">${escapeHtml(t.footer.brandSuffix)}</span></div>`,
      `    <p class="foot__tagline">${t.footer.taglineHtml}</p>`,
      '    <ul class="foot__social">',
      '      <li><a href="https://www.linkedin.com/company/ftpporto/" target="_blank" rel="noopener">LinkedIn ↗</a></li>',
      '      <li><a href="https://www.instagram.com/ftpporto/" target="_blank" rel="noopener">Instagram ↗</a></li>',
      '      <li><a href="https://www.facebook.com/ftpporto/" target="_blank" rel="noopener">Facebook ↗</a></li>',
      '    </ul>',
      '  </div>',
      '  <div class="foot__col">',
      `    <h4>${escapeHtml(t.footer.blogTitle)}</h4>`,
      '    <ul>',
      t.footer.blogLinks.map(label => `      <li><a href="#blog">${escapeHtml(label)}</a></li>`).join(''),
      '    </ul>',
      '  </div>',
      '  <div class="foot__col">',
      `    <h4>${escapeHtml(t.footer.referencesTitle)}</h4>`,
      `    <ul class="foot__refs">${renderInstitutionalReferenceItems(t)}</ul>`,
      '  </div>',
      '  <div class="foot__col">',
      `    <h4>${escapeHtml(t.footer.papersTitle)}</h4>`,
      `    <ul>${paperLinks}</ul>`,
      '  </div>',
      '</div>',
      '<div class="foot__legal-row">',
      `  <span>${t.footer.legalRightsHtml}</span>`,
      `  <span>${escapeHtml(t.footer.legalLanguages)}</span>`,
      `  <span>${escapeHtml(t.footer.legalStandards)}</span>`,
      `  <span>${escapeHtml(t.footer.legalOrigin)}</span>`,
      '</div>',
    ].join('');
  }

  function applyTranslations(t, locale) {
    currentTranslationData = t;
    document.documentElement.lang = locale;
    document.title = t.meta.title;

    const description = $('meta[name="description"]');
    if (description) description.setAttribute('content', t.meta.description);

    const themeToggle = $('[data-theme-toggle]');
    if (themeToggle) {
      themeToggle.setAttribute('aria-label', t.ui.themeToggle);
      themeToggle.setAttribute('title', t.ui.themeToggle);
    }

    const navLabels = {
      top: t.ui.nav.top,
      solutions: t.ui.nav.solutions,
      projects: t.ui.nav.projects,
      team: t.ui.nav.team,
      blog: t.ui.nav.blog,
      about: t.ui.nav.about,
      contact: t.ui.nav.contact,
    };
    Object.entries(navLabels).forEach(([section, label]) => {
      const el = $(`.dotnav__item[data-section="${section}"] .dotnav__label`);
      if (el) el.textContent = label;
    });

    const brainLabels = {
      solutions: t.ui.nav.solutions,
      projects: t.ui.nav.projects,
    };
    Object.entries(brainLabels).forEach(([key, label]) => {
      const link = $(`[data-brain-cta="${key}"]`);
      if (!link) return;
      const text = $('.brain-cta__label', link);
      if (text) text.textContent = label;
      link.setAttribute('aria-label', label);
      link.removeAttribute('title');
    });

    const stageHud = $$('.stage__hud .hud-row--right .hud-mono');
    if (stageHud[0]) stageHud[0].textContent = t.hud.coords;
    if (stageHud[1]) stageHud[1].textContent = t.hud.location;
    const stageLabel = $('[data-stage-label]');
    if (stageLabel) stageLabel.textContent = t.hud.scanning;

    const chapters = $('[data-chapters]');
    if (chapters) chapters.innerHTML = buildJourneyMarkup(t);

    const innovation = $('.sec--innov');
    if (innovation) {
      innovation.innerHTML = [
        `  <span class="chap-num chap-num--solo sec__kicker-solo">${escapeHtml(t.innovation.kicker)}</span>`,
        '  <div class="marquee">',
        `    <div class="marquee__track">${renderMarqueeTrack(t.innovation.items, 2)}</div>`,
        '  </div>',
      ].join('');
    }

    const solutions = $('#solutions');
    if (solutions) {
      solutions.innerHTML = renderSolutionsMarkup(t);
      suppressAppstudioLinks(solutions);
    }

    const projects = $('#projects');
    if (projects) projects.innerHTML = renderProjectsMarkup(t);
    syncThemeAwarePartnerLogos(projects || document);

    const papers = $('#papers');
    if (papers) papers.innerHTML = renderPapersMarkupWithBackerLogos(t);

    const team = $('#team');
    if (team) team.innerHTML = renderTeamMarkup(t);

    const blog = $('#blog');
    if (blog) blog.innerHTML = renderBlogMarkup(t);
    setupBlogInteractions();

    const about = $('#about');
    if (about) about.innerHTML = renderAboutMarkup(t);

    const precontact = $('#precontact');
    if (precontact) precontact.innerHTML = renderPrecontactMarkup(t);

    const contact = $('#contact');
    if (contact) contact.innerHTML = renderContactMarkup(t);

    const footer = $('.foot');
    if (footer) footer.innerHTML = renderFooterMarkup(t);

    setupSolutionVideos();
    setupTeamShowcase(t);
    setupPrecontactWave();
  }

  let solutionVideoObserver = null;
  let solutionVideoCleanup = null;
  let solutionVideoSyncFrame = 0;
  function setupSolutionVideos() {
    const videos = $$('.solution__art--video video');
    if (solutionVideoCleanup) {
      solutionVideoCleanup();
      solutionVideoCleanup = null;
    }
    if (!videos.length) return;

    const getVisibilityThreshold = () => (
      window.matchMedia('(max-width: 900px)').matches ? 0.38 : 0.68
    );

    const stopVideo = (video) => {
      if (!video.paused) video.pause();
      video.dataset.started = 'false';
      try { video.currentTime = 0; } catch (e) {}
    };

    const startVideo = (video) => {
      if (video.dataset.started !== 'true') {
        try { video.currentTime = 0; } catch (e) {}
        video.dataset.started = 'true';
      }
      if (!video.paused) return;
      const playPromise = video.play();
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch(() => {});
      }
    };

    const isActuallyVisible = (video) => {
      if (document.hidden) return false;

      const rect = video.getBoundingClientRect();
      if (rect.width <= 0 || rect.height <= 0) return false;

      const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

      const visibleWidth = Math.max(0, Math.min(rect.right, viewportWidth) - Math.max(rect.left, 0));
      const visibleHeight = Math.max(0, Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0));
      if (!visibleWidth || !visibleHeight) return false;

      const visibleArea = visibleWidth * visibleHeight;
      const totalArea = rect.width * rect.height;
      if (!totalArea) return false;

      return (visibleArea / totalArea) >= getVisibilityThreshold();
    };

    const syncVideos = () => {
      solutionVideoSyncFrame = 0;
      videos.forEach((video) => {
        if (isActuallyVisible(video)) startVideo(video);
        else stopVideo(video);
      });
    };

    const scheduleSync = () => {
      if (solutionVideoSyncFrame) return;
      solutionVideoSyncFrame = requestAnimationFrame(syncVideos);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (solutionVideoSyncFrame) {
          cancelAnimationFrame(solutionVideoSyncFrame);
          solutionVideoSyncFrame = 0;
        }
        videos.forEach(stopVideo);
        return;
      }
      scheduleSync();
    };

    const FULLSCREEN_ICON = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="18" height="18"><path d="M4 9V4h5 M15 4h5v5 M20 15v5h-5 M9 20H4v-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

    const requestVideoFullscreen = (video) => {
      const req = video.requestFullscreen
        || video.webkitRequestFullscreen
        || video.webkitEnterFullscreen;
      if (!req) return;
      try { req.call(video); } catch (e) {}
    };

    videos.forEach((video) => {
      video.pause();
      video.removeAttribute('autoplay');
      video.dataset.started = 'false';
      try { video.currentTime = 0; } catch (e) {}

      const figure = video.closest('.solution__art--video');
      if (figure && !figure.querySelector('[data-solution-fullscreen]')) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'solution__art-fullscreen';
        btn.setAttribute('data-solution-fullscreen', '');
        btn.setAttribute('aria-label', 'View video in fullscreen');
        btn.title = 'Fullscreen';
        btn.innerHTML = FULLSCREEN_ICON;
        btn.addEventListener('click', (event) => {
          event.stopPropagation();
          if (document.fullscreenElement || document.webkitFullscreenElement) {
            (document.exitFullscreen || document.webkitExitFullscreen).call(document);
            return;
          }
          requestVideoFullscreen(video);
        });
        figure.appendChild(btn);

        const onFullscreenChange = () => {
          const fsEl = document.fullscreenElement || document.webkitFullscreenElement;
          if (fsEl === video) {
            video.controls = true;
          } else {
            video.controls = false;
          }
        };
        document.addEventListener('fullscreenchange', onFullscreenChange);
        document.addEventListener('webkitfullscreenchange', onFullscreenChange);
        video.addEventListener('webkitendfullscreen', () => { video.controls = false; });
      }
    });

    if ('IntersectionObserver' in window) {
      solutionVideoObserver = new IntersectionObserver(() => {
        scheduleSync();
      }, {
        threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
      });

      videos.forEach((video) => {
        solutionVideoObserver.observe(video.closest('.solution__art--video') || video);
      });
    }

    window.addEventListener('scroll', scheduleSync, { passive: true });
    window.addEventListener('resize', scheduleSync);
    window.addEventListener('orientationchange', scheduleSync);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    scheduleSync();

    solutionVideoCleanup = () => {
      if (solutionVideoObserver) {
        solutionVideoObserver.disconnect();
        solutionVideoObserver = null;
      }
      if (solutionVideoSyncFrame) {
        cancelAnimationFrame(solutionVideoSyncFrame);
        solutionVideoSyncFrame = 0;
      }
      window.removeEventListener('scroll', scheduleSync);
      window.removeEventListener('resize', scheduleSync);
      window.removeEventListener('orientationchange', scheduleSync);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      videos.forEach((video) => {
        video.pause();
        video.dataset.started = 'false';
        try { video.currentTime = 0; } catch (e) {}
      });
    };
  }

  function setupLanguageSwitcher(locale, t) {
    const switcher = $('[data-language-switcher]');
    if (!switcher) return;
    const btn = $('[data-language-select]', switcher);
    const menu = $('[data-language-menu]', switcher);
    const current = $('[data-language-current]', switcher);
    if (!btn || !menu || !current) return;

    switcher.setAttribute('aria-label', t.ui.languageLabel);
    btn.setAttribute('aria-label', t.ui.languageLabel);

    const renderFlagAndCode = (code) => {
      const flag = LANGUAGE_FLAGS[code] || '';
      const label = escapeHtml(code.toUpperCase());
      return `${flag}<span class="language-switcher__code">${label}</span>`;
    };

    current.innerHTML = renderFlagAndCode(locale);

    menu.innerHTML = SUPPORTED_LOCALES.map((code) => {
      const isActive = code === locale;
      return `<li role="option" class="language-switcher__item${isActive ? ' is-active' : ''}" data-language-option="${escapeHtml(code)}" aria-selected="${isActive}" tabindex="-1">${renderFlagAndCode(code)}</li>`;
    }).join('');

    if (switcher.dataset.bound === 'true') return;

    const closeMenu = () => {
      if (menu.hidden) return;
      menu.hidden = true;
      btn.setAttribute('aria-expanded', 'false');
    };
    const openMenu = () => {
      if (!menu.hidden) return;
      menu.hidden = false;
      btn.setAttribute('aria-expanded', 'true');
    };

    btn.addEventListener('click', (event) => {
      event.stopPropagation();
      if (menu.hidden) openMenu(); else closeMenu();
    });

    menu.addEventListener('click', (event) => {
      const item = event.target.closest('[data-language-option]');
      if (!item) return;
      const code = item.getAttribute('data-language-option');
      if (!code) return;
      if (code === locale) { closeMenu(); return; }
      try { localStorage.setItem(LOCALE_KEY, code); } catch (e) {}
      window.location.reload();
    });

    document.addEventListener('click', (event) => {
      if (!switcher.contains(event.target)) closeMenu();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && !menu.hidden) {
        closeMenu();
        btn.focus();
      }
    });

    switcher.dataset.bound = 'true';
  }


  function initI18n() {
    const locale = resolveLocale();
    const translations = window.FTP_TRANSLATIONS || {};
    const baseData = translations[locale] || translations.en || null;
    const data = withBlogEnhancements(baseData, locale);

    if (data) applyTranslations(data, locale);
    if (data) setupLanguageSwitcher(locale, data);

    return { locale, data };
  }

  const localeState = initI18n();
  const STAGE_LABELS = normalizeStageLabels(
    (localeState.data && localeState.data.hud && localeState.data.hud.stageLabels) || DEFAULT_STAGE_LABELS,
    localeState.data && localeState.data.journey && localeState.data.journey.portal && localeState.data.journey.portal.label
  );

  /* ---------- 1. THEME TOGGLE — light / dark, persisted ---------- */
  {
    const STORAGE_KEY = 'ftp-theme';
    const root = document.documentElement;

    const stored = (() => {
      try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
    })();
    if (stored === 'dark' || stored === 'light') {
      root.setAttribute('data-theme', stored);
    } else {
      root.setAttribute('data-theme', 'light');
    }
    syncThemeAwarePartnerLogos();

    const btn = $('[data-theme-toggle]');
    if (btn) {
      btn.addEventListener('click', () => {
        const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', next);
        syncThemeAwarePartnerLogos();
        try { localStorage.setItem(STORAGE_KEY, next); } catch (e) {}
      });
    }
  }

  /* ---------- 2. BRAIN FRAME SEQUENCE — scroll-scrubbed canvas ----------
     The clip flies toward the brain (0 → 104), tears through the cortex
     (104 → 176) and drifts inside the network (176 → 249). Scroll maps
     onto it piecewise so the crossing gets its own stretch of scroll and
     reads as a dive rather than a cut. Adjacent frames are cross-faded,
     so a smoothed, fractional index plays like video instead of stepping. */
  const FRAMES_PATH = 'frames';
  const FRAME_EXT = 'jpg';
  const FRAME_COUNT = 250;
  const FRAME_ASPECT = 16 / 9;
  const START_FRAME = 0;
  const FIRST_FRAME_OVERRIDE = null;
  const PORTAL_FROM = 0.43;
  const PORTAL_TO = 0.57;
  const FRAME_MAP = [
    [0, 0],
    [PORTAL_FROM, 104],
    [PORTAL_TO, 176],
    [1, FRAME_COUNT - 1],
  ];
  /* Frames ~1–68 carry ghosted UI from the source recording along the
     bottom edge; a floor fade (--mask) hides it until the camera is past. */
  const GHOST_FADE_IN = [0, 6];
  const GHOST_FADE_OUT = [60, 70];
  /* Small overscan crops the dark border baked into the frames. */
  const OVERSCAN = 1.045;
  const MOBILE_INSIDE_FRAME = 200;

  const canvas = $('[data-stage-canvas]');
  const ctx = canvas ? canvas.getContext('2d', { alpha: false }) : null;
  const brainCtasFrame = $('[data-brain-ctas-frame]');
  const frames = new Array(FRAME_COUNT);
  const cam = { scale: 1, x: 0, y: 0 };
  let firstFrameDrawn = false;
  let lastDrawKey = '';
  let lastFrame = START_FRAME;
  let canvasDpr = 1;

  function frameSrc(i) {
    if (i === 0 && FIRST_FRAME_OVERRIDE) return FIRST_FRAME_OVERRIDE;
    return `${FRAMES_PATH}/frame-${String(i).padStart(3, '0')}.${FRAME_EXT}`;
  }

  function frameForProgress(p) {
    for (let i = 1; i < FRAME_MAP.length; i += 1) {
      const [p0, f0] = FRAME_MAP[i - 1];
      const [p1, f1] = FRAME_MAP[i];
      if (p <= p1) return f0 + ((p - p0) / (p1 - p0)) * (f1 - f0);
    }
    return FRAME_COUNT - 1;
  }

  function ghostMaskForFrame(f) {
    if (f <= GHOST_FADE_IN[0] || f >= GHOST_FADE_OUT[1]) return 0;
    if (f < GHOST_FADE_IN[1]) return (f - GHOST_FADE_IN[0]) / (GHOST_FADE_IN[1] - GHOST_FADE_IN[0]);
    if (f > GHOST_FADE_OUT[0]) return (GHOST_FADE_OUT[1] - f) / (GHOST_FADE_OUT[1] - GHOST_FADE_OUT[0]);
    return 1;
  }

  /* Cover on landscape screens (no letterbox bars — you are IN the scene).
     On portrait phones the frame is widened past the viewport so the brain
     itself, not the empty space around it, fills the screen; the two CTAs
     are re-positioned for that crop in the mobile CSS. */
  function frameGeometry(w, h) {
    const ratio = w / h;
    let dw;
    if (ratio >= 1.2) dw = Math.max(w, h * FRAME_ASPECT);
    else if (ratio < 0.8) dw = w * 1.6;
    else dw = Math.min(w, h * FRAME_ASPECT);
    dw *= OVERSCAN;
    const dh = dw / FRAME_ASPECT;
    return { x: (w - dw) / 2, y: (h - dh) / 2, w: dw, h: dh };
  }

  function fitCanvas() {
    if (!canvas) return;
    canvasDpr = Math.min(window.devicePixelRatio || 1, 1.25);
    const w = canvas.clientWidth || innerWidth;
    const h = canvas.clientHeight || innerHeight;
    canvas.width = Math.round(w * canvasDpr);
    canvas.height = Math.round(h * canvasDpr);
    if (ctx) {
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
    }
    syncBrainCtasFrame();
    drawFrame(lastFrame, true);
  }

  function syncBrainCtasFrame() {
    if (!brainCtasFrame || !canvas) return;
    const g = frameGeometry(canvas.clientWidth || innerWidth, canvas.clientHeight || innerHeight);
    brainCtasFrame.style.left = `${g.x}px`;
    brainCtasFrame.style.top = `${g.y}px`;
    brainCtasFrame.style.width = `${g.w}px`;
    brainCtasFrame.style.height = `${g.h}px`;
  }

  let slowScrollFrame = 0;
  function cancelSlowScroll() {
    if (!slowScrollFrame) return;
    cancelAnimationFrame(slowScrollFrame);
    slowScrollFrame = 0;
  }

  function slowScrollTo(targetY) {
    cancelSlowScroll();

    const startY = window.scrollY;
    const maxY = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    const destY = clamp(targetY, 0, maxY);
    const distance = Math.abs(destY - startY);
    if (distance < 2 || reduced) {
      window.scrollTo(0, destY);
      return;
    }

    const duration = Math.min(3400, Math.max(2200, distance * 1.45));
    const startTime = performance.now();

    const tick = (now) => {
      const progress = clamp((now - startTime) / duration);
      const eased = easeInOut(progress);
      window.scrollTo(0, startY + ((destY - startY) * eased));

      if (progress < 1) {
        slowScrollFrame = requestAnimationFrame(tick);
      } else {
        slowScrollFrame = 0;
      }
    };

    slowScrollFrame = requestAnimationFrame(tick);
  }

  function bindSlowAnchorScroll(selector) {
    $$(selector).forEach((link) => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href') || '';
        if (!href.startsWith('#')) return;

        const target = document.querySelector(href);
        if (!target) return;

        e.preventDefault();
        slowScrollTo(target.offsetTop);
      });
    });
  }

  bindSlowAnchorScroll('[data-brain-cta]');
  bindSlowAnchorScroll('.brand');

  window.addEventListener('wheel', cancelSlowScroll, { passive: true });
  window.addEventListener('touchstart', cancelSlowScroll, { passive: true });

  function loadedFrame(i) {
    const img = frames[i];
    return img && img.complete && img.naturalWidth ? img : null;
  }

  function nearestLoadedFrame(i) {
    for (let d = 0; d < FRAME_COUNT; d += 1) {
      const a = loadedFrame(i - d);
      if (a) return a;
      const b = loadedFrame(i + d);
      if (b) return b;
    }
    return null;
  }

  function drawFrame(f, force = false) {
    if (!ctx || !canvas) return;
    const idx = clamp(f, 0, FRAME_COUNT - 1);
    const key = `${idx.toFixed(2)}|${cam.scale.toFixed(4)}|${cam.x.toFixed(1)}|${cam.y.toFixed(1)}`;
    if (!force && key === lastDrawKey) return;

    const i0 = Math.floor(idx);
    const t = idx - i0;
    const a = loadedFrame(i0) || nearestLoadedFrame(i0);
    if (!a) return;
    const b = t > 0.02 ? loadedFrame(Math.min(FRAME_COUNT - 1, i0 + 1)) : null;

    const cw = canvas.width;
    const ch = canvas.height;
    const g = frameGeometry(cw / canvasDpr, ch / canvasDpr);

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.globalAlpha = 1;
    ctx.fillStyle = '#0B0D10';
    ctx.fillRect(0, 0, cw, ch);
    /* Camera: scale about the viewport centre, then parallax offset. */
    ctx.setTransform(
      cam.scale * canvasDpr, 0, 0, cam.scale * canvasDpr,
      (cw / 2) * (1 - cam.scale) + cam.x * canvasDpr,
      (ch / 2) * (1 - cam.scale) + cam.y * canvasDpr
    );
    ctx.drawImage(a, g.x, g.y, g.w, g.h);
    if (b) {
      ctx.globalAlpha = t;
      ctx.drawImage(b, g.x, g.y, g.w, g.h);
      ctx.globalAlpha = 1;
    }
    /* When the frame does not fill the height (portrait), feather its
       top and bottom edges into the night so it never reads as a band. */
    if (g.y > 1) {
      const fade = g.h * 0.22;
      const top = ctx.createLinearGradient(0, g.y, 0, g.y + fade);
      top.addColorStop(0, '#0B0D10');
      top.addColorStop(1, 'rgba(11,13,16,0)');
      ctx.fillStyle = top;
      ctx.fillRect(g.x, g.y - 1, g.w, fade + 1);
      const bottom = ctx.createLinearGradient(0, g.y + g.h - fade, 0, g.y + g.h);
      bottom.addColorStop(0, 'rgba(11,13,16,0)');
      bottom.addColorStop(1, '#0B0D10');
      ctx.fillStyle = bottom;
      ctx.fillRect(g.x, g.y + g.h - fade, g.w, fade + 1);
    }
    lastDrawKey = key;
    lastFrame = idx;

    if (!firstFrameDrawn) {
      firstFrameDrawn = true;
      canvas.classList.add('is-ready');
    }
  }

  function loadFrame(i) {
    return new Promise((resolve) => {
      const img = new Image();
      img.decoding = 'async';
      img.onload = () => {
        /* Redraw if this frame is (or neighbours) what should be on screen. */
        if (i === START_FRAME || Math.abs(i - lastFrame) <= 1 || !firstFrameDrawn) drawFrame(lastFrame, true);
        resolve(img);
      };
      img.onerror = () => {
        if (i === 0 && FIRST_FRAME_OVERRIDE && img.src.endsWith(FIRST_FRAME_OVERRIDE)) {
          img.onerror = () => resolve(img);
          img.src = `${FRAMES_PATH}/frame-000.${FRAME_EXT}`;
          return;
        }
        resolve(img);
      };
      img.src = frameSrc(i);
      frames[i] = img;
    });
  }

  if (canvas && ctx) {
    fitCanvas();
    addEventListener('resize', fitCanvas);

    if (mobile) {
      /* Phones skip the 250-frame scrub (data + memory); they get the
         outside view and one inside view, swapped at the crossing. */
      loadFrame(START_FRAME).then(() => drawFrame(START_FRAME, true));
      loadFrame(MOBILE_INSIDE_FRAME);
    } else {
      /* Coarse skeleton first (every 10th frame + the crossing every 4th),
         so any scroll position has a nearby frame almost immediately. */
      const skeleton = new Set([FRAME_COUNT - 1]);
      for (let i = START_FRAME + 10; i < FRAME_COUNT; i += 10) skeleton.add(i);
      for (let i = 104; i <= 176; i += 4) skeleton.add(i);
      skeleton.delete(START_FRAME);

      const waves = [[START_FRAME], [...skeleton].sort((x, y) => x - y)];
      const rest = [];
      for (let i = START_FRAME + 1; i < FRAME_COUNT; i += 1) {
        if (!skeleton.has(i)) rest.push(i);
      }
      for (let i = 0; i < rest.length; i += 24) waves.push(rest.slice(i, i + 24));

      (async () => {
        for (const wave of waves) {
          await Promise.all(wave.map(loadFrame));
        }
      })();
    }
  }

  /* ---------- 3. CLOCK ---------- */
  {
    const clock = $('[data-clock]');
    if (clock) {
      const lisbonTime = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Europe/Lisbon',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      });
      const draw = () => {
        clock.textContent = `${lisbonTime.format(new Date())} LISBON`;
      };
      draw();
      setInterval(draw, 1000);
    }
  }

  /* ---------- 4. SCROLL PROGRESS BAR ---------- */
  const progressBar = $('[data-progress] i');

  /* ---------- 5. DOTNAV — track active section ---------- */
  const dotItems = $$('.dotnav__item');
  const navSectionEls = dotItems
    .map((item) => item.getAttribute('href') || '')
    .filter((href) => href.startsWith('#') && href !== '#top')
    .map((href) => {
      const id = href.slice(1);
      return { id, el: document.getElementById(id) };
    })
    .filter(({ el }) => Boolean(el));

  const journeySec = $('[data-journey]');
  function updateActiveDot() {
    if (!dotItems.length) return;
    const y = window.scrollY + window.innerHeight * 0.35;
    let active = 'top';
    for (const { id, el } of navSectionEls) {
      if (y >= el.offsetTop) active = id;
    }
    dotItems.forEach((d) => {
      d.classList.toggle('is-active', d.dataset.section === active);
    });
    if (journeySec) {
      const past = window.scrollY > journeySec.offsetTop + journeySec.offsetHeight - window.innerHeight * 0.5;
      document.body.classList.toggle('is-past-journey', past);
    }
  }
  document.addEventListener('scroll', updateActiveDot, { passive: true });
  window.addEventListener('resize', updateActiveDot);
  updateActiveDot();

  /* ---------- 7. MAGNETIC ELEMENTS ---------- */
  if (fine && !reduced) {
    $$('[data-magnet]').forEach((el) => {
      const strength = 0.28;
      el.addEventListener('mousemove', (e) => {
        const r = el.getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width / 2)) * strength;
        const dy = (e.clientY - (r.top + r.height / 2)) * strength;
        el.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
      });
      el.addEventListener('mouseleave', () => { el.style.transform = ''; });
    });
  }

  /* ---------- 8. ROW SPOTLIGHTS ---------- */
  $$('.row, .paper__doi').forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${e.clientX - r.left}px`);
      el.style.setProperty('--my', `${e.clientY - r.top}px`);
    });
  });

  /* ---------- 9. THE JOURNEY — main scrollytelling driver ----------
     One rAF loop owns the whole stage while it is on screen:
       · scroll progress is eased (inertia), so frames glide instead of step
       · the camera pushes in, punches through at the crossing, and leans
         with the pointer for depth
       · a synapse field streams toward the viewer; its speed follows the
         scroll velocity and turns into warp streaks at the crossing
       · chapters arrive out of focus from depth and leave past the camera
     Runtime values are written to the stage element only (never :root),
     so the rest of the page is not restyled on every frame. */
  const journey = $('[data-journey]');
  const stage = $('[data-stage]');
  const chapters = $$('.chapter');
  const chaptersWrap = $('[data-chapters]');
  const stageLabel = $('[data-stage-label]');
  const fxCanvas = $('[data-stage-fx]');
  const fx = fxCanvas ? fxCanvas.getContext('2d') : null;
  const cinematic = !reduced && !mobile;

  const manifesto = $('[data-words]');
  if (manifesto) {
    const walker = document.createTreeWalker(manifesto, NodeFilter.SHOW_TEXT);
    const texts = [];
    let n;
    while ((n = walker.nextNode())) texts.push(n);
    texts.forEach((textNode) => {
      const text = textNode.nodeValue;
      if (!/\S/.test(text)) return;
      const frag = document.createDocumentFragment();
      text.split(/(\s+)/).forEach((token) => {
        if (/^\s+$/.test(token)) {
          frag.appendChild(document.createTextNode(token));
        } else if (token.length) {
          const s = document.createElement('span');
          s.className = 'word';
          s.textContent = token;
          frag.appendChild(s);
        }
      });
      textNode.parentNode.replaceChild(frag, textNode);
    });
  }
  const manifestoWords = manifesto ? $$('.word', manifesto) : [];
  const manifestoChapter = manifesto ? manifesto.closest('.chapter') : null;

  const quoteEls = $$('[data-quote]');
  const mindsChapter = chapters.find(c => c.classList.contains('chapter--minds'));
  let activeQuote = -1;

  const counters = $$('[data-counter]');
  const counterFired = new Set();

  const chapterData = chapters.map((el) => ({
    el,
    from: parseFloat(el.dataset.from),
    to: parseFloat(el.dataset.to),
    fly: el.dataset.depth === 'fly',
    lab: el.classList.contains('chapter--lab'),
    shown: null,
  }));

  function easeInOut(t) { return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; }
  function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }
  function easeInCubic(t) { return t * t * t; }
  function smoothstep(a, b, v) { const t = clamp((v - a) / (b - a)); return t * t * (3 - 2 * t); }

  function fireCounter(el) {
    if (counterFired.has(el)) return;
    counterFired.add(el);
    const target = parseInt(el.dataset.counter, 10);
    const i = el.querySelector('i');
    if (!i) return;
    const dur = 1100 + target * 12;
    const start = performance.now();
    const fmt = String(target).length;

    const tick = (t) => {
      const p = clamp((t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = Math.floor(eased * target);
      i.textContent = String(val).padStart(fmt, '0');
      if (p < 1) requestAnimationFrame(tick);
      else i.textContent = String(target).padStart(fmt, '0');
    };

    requestAnimationFrame(tick);
  }

  /* Crossing intensity, 0 → 1 → 0 across the portal range. Peaks early
     (where the clip bursts through the surface) and decays slowly. */
  function portalAmount(p) {
    const u = (p - PORTAL_FROM) / (PORTAL_TO - PORTAL_FROM);
    if (u <= 0 || u >= 1) return 0;
    return u < 0.3 ? easeInOut(u / 0.3) : Math.pow(1 - (u - 0.3) / 0.7, 2);
  }

  /* --- layout cache (no getBoundingClientRect inside the loop) --- */
  let journeyTop = 0;
  let journeyTotal = 1;
  function measureJourney() {
    if (!journey) return;
    journeyTop = journey.getBoundingClientRect().top + scrollY;
    journeyTotal = Math.max(1, journey.offsetHeight - innerHeight);
  }
  function readProgress() {
    return clamp((scrollY - journeyTop) / journeyTotal);
  }

  /* --- synapse field --- */
  const stars = [];
  let fxW = 0;
  let fxH = 0;
  let fxDpr = 1;
  function spawnStar(star, anywhere) {
    star.x = (Math.random() * 2 - 1) * 1.1;
    star.y = (Math.random() * 2 - 1) * 0.7;
    star.z = anywhere ? 0.08 + Math.random() * 0.92 : 1;
    star.violet = Math.random() < 0.3;
    star.size = 0.5 + Math.random() * 1.3;
    star.fire = 0;
    return star;
  }
  function fitFx() {
    if (!fxCanvas || !fx) return;
    fxDpr = Math.min(window.devicePixelRatio || 1, 1.5);
    fxW = fxCanvas.clientWidth || innerWidth;
    fxH = fxCanvas.clientHeight || innerHeight;
    fxCanvas.width = Math.round(fxW * fxDpr);
    fxCanvas.height = Math.round(fxH * fxDpr);
    const want = Math.round(clamp((fxW * fxH) / 9000, 110, 260));
    while (stars.length < want) stars.push(spawnStar({}, true));
    stars.length = want;
  }

  function drawField(dt, speed, portal, p, vx, vy) {
    if (!fx) return;
    fx.setTransform(fxDpr, 0, 0, fxDpr, 0, 0);
    /* Clear fully at rest; at the crossing leave a little of the last
       frame behind so streaks smear like a long exposure. */
    fx.globalCompositeOperation = 'destination-out';
    fx.fillStyle = `rgba(0,0,0,${(1 - portal * 0.55).toFixed(3)})`;
    fx.fillRect(0, 0, fxW, fxH);
    fx.globalCompositeOperation = 'lighter';
    fx.lineCap = 'round';

    const focal = Math.min(fxW, fxH) * 0.62;
    const violetMix = 1 - smoothstep(0.40, PORTAL_TO, p);
    const intensity = 0.42 + portal * 0.58;
    const dz = speed * dt;
    const tail = clamp(speed, -2.2, 2.2) * 0.055;

    for (let i = 0; i < stars.length; i += 1) {
      const s = stars[i];
      s.z -= dz;
      if (s.z < 0.04) spawnStar(s, false);
      else if (s.z > 1.05) { spawnStar(s, true); s.z = 0.06 + Math.random() * 0.1; }
      if (s.fire > 0) s.fire = Math.max(0, s.fire - dt * 1.8);

      const sx = vx + (s.x / s.z) * focal;
      const sy = vy + (s.y / s.z) * focal;
      if (sx < -60 || sx > fxW + 60 || sy < -60 || sy > fxH + 60) {
        if (dz > 0) spawnStar(s, false);
        continue;
      }
      const tz = clamp(s.z + tail + 0.0025, 0.03, 1.2);
      const tx = vx + (s.x / tz) * focal;
      const ty = vy + (s.y / tz) * focal;

      const depth = clamp((1 - s.z) * 2.4) * clamp((s.z - 0.04) / 0.1);
      const alpha = depth * intensity * (0.55 + s.fire * 0.9);
      if (alpha < 0.02) continue;
      const width = clamp((s.size * 0.42) / s.z, 0.4, 3.4) * (1 + s.fire);
      const violet = s.violet && violetMix > 0.5;
      fx.strokeStyle = violet
        ? `rgba(206,160,255,${alpha.toFixed(3)})`
        : `rgba(128,206,255,${alpha.toFixed(3)})`;
      fx.lineWidth = width;
      fx.beginPath();
      fx.moveTo(tx, ty);
      fx.lineTo(sx + 0.01, sy);
      fx.stroke();
    }

    /* A neuron fires now and then: one star flares and decays. */
    if (Math.random() < dt * 3.2) {
      const s = stars[(Math.random() * stars.length) | 0];
      if (s) s.fire = 1;
    }
  }

  /* --- per-chapter depth choreography --- */
  function applyChapter(c, p) {
    const span = c.to - c.from;
    if (span <= 0) return;
    const cp = (p - c.from) / span;
    const el = c.el;
    let op;
    let scale;
    let blur;
    let ty = 0;

    if (cp <= 0 || cp >= 1) {
      op = 0;
      scale = 1;
      blur = 0;
    } else if (c.fly) {
      /* Fly-through: the line rushes toward the viewer and past them. */
      scale = 0.5 * Math.pow(5, cp);
      op = cp < 0.2 ? cp / 0.2 : cp > 0.55 ? clamp(1 - (cp - 0.55) / 0.3) : 1;
      blur = Math.max(0, scale - 1.3) * 5;
    } else {
      const enter = clamp(cp / 0.25);
      const exit = clamp((cp - 0.8) / 0.2);
      op = enter * (1 - exit);
      scale = 0.9 + 0.1 * easeOutCubic(enter) + 0.16 * easeInCubic(exit);
      blur = (1 - easeOutCubic(enter)) * 7 + exit * 9;
      ty = (1 - easeOutCubic(enter)) * 26;
    }

    el.style.setProperty('--cp', clamp(cp).toFixed(4));
    el.style.setProperty('--op', op.toFixed(4));
    if (op <= 0.001) {
      if (c.shown !== false) {
        el.style.visibility = 'hidden';
        el.style.opacity = '0';
        c.shown = false;
      }
      return;
    }
    if (c.shown !== true) {
      el.style.visibility = 'visible';
      c.shown = true;
    }
    el.style.opacity = op.toFixed(4);
    el.style.transform = cinematic ? `translate3d(0, ${ty.toFixed(1)}px, 0) scale(${scale.toFixed(4)})` : 'none';
    el.style.filter = cinematic && blur > 0.05 ? `blur(${blur.toFixed(2)}px)` : 'none';
    if (c.lab && op > 0.1) $$('[data-counter]', el).forEach(fireCounter);
  }

  let lastStageVars = '';
  let lastLabelIndex = -2;
  function renderJourney(p, dt, vel, now) {
    const portal = cinematic ? portalAmount(p) : 0;
    const f = frameForProgress(p);
    const mask = ghostMaskForFrame(f);

    /* camera */
    if (cinematic) {
      const jitter = portal * 2.6;
      cam.scale = 1 + 0.035 * smoothstep(0, PORTAL_FROM, p) + 0.12 * portal;
      cam.x = -pointer.x * 18 + Math.sin(now * 0.031) * jitter;
      cam.y = -pointer.y * 11 + Math.cos(now * 0.027) * jitter;
    }
    drawFrame(f);

    if (cinematic && fx) {
      const speed = 0.045 + clamp(vel * 7, -0.7, 1.3) + portal * 1.8;
      drawField(dt, speed, portal, p, fxW / 2 + pointer.x * 46, fxH / 2 + pointer.y * 28);
    }

    if (chaptersWrap && cinematic) {
      chaptersWrap.style.transform = `translate3d(${(pointer.x * -9).toFixed(1)}px, ${(pointer.y * -6).toFixed(1)}px, 0)`;
    }
    if (brainCtasFrame && cinematic && p < 0.2) {
      brainCtasFrame.style.transform = `translate3d(${cam.x.toFixed(1)}px, ${cam.y.toFixed(1)}px, 0)`;
    }

    const vars = `${p.toFixed(3)}|${portal.toFixed(3)}|${mask.toFixed(3)}`;
    if (stage && vars !== lastStageVars) {
      lastStageVars = vars;
      stage.style.setProperty('--p', p.toFixed(3));
      stage.style.setProperty('--portal', portal.toFixed(3));
      stage.style.setProperty('--mask', mask.toFixed(3));
      stage.classList.toggle('is-crossing', portal > 0.2);
      stage.classList.toggle('is-inside', p > PORTAL_TO - 0.04);
    }

    chapterData.forEach((c) => applyChapter(c, p));

    if (manifestoChapter && manifestoWords.length) {
      const from = parseFloat(manifestoChapter.dataset.from);
      const to = parseFloat(manifestoChapter.dataset.to);
      const inner = clamp((p - from - 0.02) / (to - from - 0.04));
      const cutoff = Math.floor(easeInOut(inner) * manifestoWords.length);
      for (let i = 0; i < manifestoWords.length; i += 1) {
        manifestoWords[i].classList.toggle('is-on', i <= cutoff);
      }
    }

    if (quoteEls.length && mindsChapter) {
      const from = parseFloat(mindsChapter.dataset.from);
      const to = parseFloat(mindsChapter.dataset.to);
      const inner = clamp((p - from) / (to - from));
      const idx = Math.min(quoteEls.length - 1, Math.floor(inner * quoteEls.length));
      if (idx !== activeQuote) {
        quoteEls.forEach((q, i) => {
          q.classList.remove('is-on', 'is-out');
          if (i === idx) q.classList.add('is-on');
          else if (i < idx) q.classList.add('is-out');
        });
        activeQuote = idx;
      }
    }

    if (stageLabel) {
      const foundIndex = STAGE_RANGES.findIndex(([a, b]) => p >= a && p < b);
      if (foundIndex !== lastLabelIndex) {
        lastLabelIndex = foundIndex;
        const nextLabel = STAGE_LABELS[foundIndex] || STAGE_LABELS[0];
        if (nextLabel) stageLabel.textContent = nextLabel;
      }
    }
  }

  /* --- pointer (eased) --- */
  const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
  if (cinematic && fine) {
    addEventListener('pointermove', (e) => {
      pointer.tx = (e.clientX / innerWidth) * 2 - 1;
      pointer.ty = (e.clientY / innerHeight) * 2 - 1;
    }, { passive: true });
    document.addEventListener('pointerleave', () => { pointer.tx = 0; pointer.ty = 0; });
  }

  /* --- loop --- */
  const loop = { p: 0, vel: 0, last: 0, raf: 0, visible: true };
  function frame(now) {
    loop.raf = 0;
    const dt = Math.min(0.05, loop.last ? (now - loop.last) / 1000 : 1 / 60);
    loop.last = now;

    const target = readProgress();
    const prev = loop.p;
    loop.p += (target - loop.p) * (1 - Math.pow(0.0009, dt));
    if (Math.abs(target - loop.p) < 0.00004) loop.p = target;
    loop.vel += (((loop.p - prev) / dt) - loop.vel) * 0.18;

    const ease = 1 - Math.pow(0.02, dt);
    pointer.x += (pointer.tx - pointer.x) * ease;
    pointer.y += (pointer.ty - pointer.y) * ease;

    renderJourney(loop.p, dt, loop.vel, now);

    if (loop.visible && !document.hidden) loop.raf = requestAnimationFrame(frame);
  }
  function startLoop() {
    if (loop.raf || !cinematic) return;
    loop.last = 0;
    loop.raf = requestAnimationFrame(frame);
  }

  function updateProgressBar() {
    if (!progressBar) return;
    const max = document.documentElement.scrollHeight - innerHeight;
    progressBar.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
  }

  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      updateProgressBar();
      /* Reduced motion on desktop: no inertia, no field — direct mapping. */
      if (journey && stage && !mobile && !cinematic) renderJourney(readProgress(), 0, 0, 0);
    });
  }

  measureJourney();
  fitFx();
  addEventListener('resize', () => { measureJourney(); fitFx(); onScroll(); });
  addEventListener('load', measureJourney);
  document.addEventListener('scroll', onScroll, { passive: true });

  if (journey && stage && cinematic) {
    loop.p = readProgress();
    if ('IntersectionObserver' in window) {
      new IntersectionObserver((entries) => {
        loop.visible = entries[0].isIntersecting;
        if (loop.visible) startLoop();
      }).observe(journey);
    }
    document.addEventListener('visibilitychange', () => { if (!document.hidden && loop.visible) startLoop(); });
    startLoop();
  } else if (journey && stage && !mobile) {
    renderJourney(readProgress(), 0, 0, 0);
  }
  updateProgressBar();

  /* ---------- 10. YEAR ---------- */
  const y = $('[data-year]');
  if (y) y.textContent = new Date().getFullYear();

  /* ---------- 11. KEYBOARD navigation between chapters ---------- */
  document.addEventListener('keydown', (e) => {
    if (e.target.closest('input, textarea, [contenteditable]')) return;
    if (!journey) return;
    const total = journey.offsetHeight - innerHeight;
    const jTop = scrollY + journey.getBoundingClientRect().top;
    const targets = chapters.map(c => parseFloat(c.dataset.from));

    if (e.key === 'j' || e.key === 'k' || e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      const dir = (e.key === 'j' || e.key === 'ArrowDown') ? 1 : -1;
      const p = clamp((scrollY - jTop) / total);
      let next;
      if (dir > 0) next = targets.find(v => v > p + 0.01);
      else next = [...targets].reverse().find(v => v < p - 0.01);
      if (next != null) {
        const targetY = jTop + next * total + 4;
        scrollTo({ top: targetY, behavior: 'smooth' });
        e.preventDefault();
      }
    }
  });

  /* ---------- 12. Mobile reveal-on-scroll for chapters ---------- */
  if (mobile && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('is-in');
      });
    }, { threshold: 0.18 });
    chapters.forEach(c => io.observe(c));

    if (manifesto && manifestoWords.length) {
      const ch = manifesto.closest('.chapter');
      const cio = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            manifestoWords.forEach((w, i) => {
              setTimeout(() => w.classList.add('is-on'), 80 + i * 30);
            });
            cio.disconnect();
          }
        });
      }, { threshold: 0.4 });
      cio.observe(ch);
    }

    /* The crossing on a phone: once the "inside the mind" line reaches
       mid-screen, the backdrop dissolves from the outer brain to its
       interior (and back when scrolling up). */
    const portalChapter = chapters.find(c => c.dataset.depth === 'fly');
    if (portalChapter && canvas && !reduced) {
      let inside = false;
      let swapTimer = 0;
      const setInside = (next) => {
        if (next === inside) return;
        inside = next;
        clearTimeout(swapTimer);
        canvas.style.opacity = '0';
        swapTimer = setTimeout(() => {
          drawFrame(inside ? MOBILE_INSIDE_FRAME : START_FRAME, true);
          canvas.style.opacity = '';
        }, 450);
      };
      new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const below = entry.boundingClientRect.top > innerHeight * 0.5;
          setInside(!below);
        });
      }, { rootMargin: '-50% 0px -50% 0px' }).observe(portalChapter);
    }

    quoteEls.forEach(q => q.classList.add('is-on'));
    counters.forEach((c) => {
      const cio = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            fireCounter(c);
            cio.disconnect();
          }
        });
      }, { threshold: 0.5 });
      cio.observe(c);
    });
  }

  /* ---------- 13. APPLE-STYLE INTERACTIVE LAYER ----------
     Scroll-triggered fade-and-lift for headings + cards across the
     post-journey page, plus subtle 3D mouse-tilt on cards. Built
     with vanilla IntersectionObserver / mousemove — no libraries. */
  if (!reduced) {
    /* --- 13.1 Scroll reveal -----------------------------------
       Auto-tags major content blocks with .reveal and observes
       each one. When 12% of the element is visible, .is-in is
       added → CSS handles the fade + lift transition.        */
    const REVEAL_SELECTORS = [
      '.sec__head',
      '.solution',
      '.iproject',
      '.member',
      '.post',
      '.papers li',
      '.about__who',
      '.about__mission',
      '.about__stats > li',
      '.about__split > article',
      '.experts__grid > article',
      '.how-we-work',
      '.contact-form',
      '.contact-info',
      '.foot__col',
    ].join(',');

    const revealEls = $$(REVEAL_SELECTORS);
    revealEls.forEach((el, i) => {
      el.classList.add('reveal');
      // light stagger for sibling groups so adjacent cards cascade
      const peers = el.parentElement
        ? Array.from(el.parentElement.children).filter(c => c.classList.contains('reveal'))
        : [];
      const peerIndex = peers.indexOf(el);
      if (peerIndex >= 0 && peerIndex < 6) {
        el.style.setProperty('--reveal-delay', `${peerIndex * 70}ms`);
      }
    });

    if (revealEls.length) {
      const revealObs = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            revealObs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
      revealEls.forEach(el => revealObs.observe(el));
    }

    /* --- 13.2 3D card tilt on hover -----------------------------
       Cards respond to mouse position with a soft perspective tilt
       and a subtle highlight shift. Pointer-fine only — disabled
       on touch and on the heavy video / journey cards.            */
    if (fine) {
      const TILT_SELECTORS = [
        '.iproject',
        '.member',
        '.post',
        '.papers li',
        '.expert',
        '.about__stats > li',
      ].join(',');
      $$(TILT_SELECTORS).forEach((card) => {
        card.classList.add('tilt-card');
        let raf = 0;
        const onMove = (e) => {
          const r = card.getBoundingClientRect();
          const mx = (e.clientX - r.left) / r.width  - 0.5;
          const my = (e.clientY - r.top)  / r.height - 0.5;
          cancelAnimationFrame(raf);
          raf = requestAnimationFrame(() => {
            const rx = (-my * 5).toFixed(2);
            const ry = ( mx * 7).toFixed(2);
            card.style.setProperty('--tilt-x', `${rx}deg`);
            card.style.setProperty('--tilt-y', `${ry}deg`);
            card.style.setProperty('--tilt-mx', `${(mx * 100).toFixed(1)}%`);
            card.style.setProperty('--tilt-my', `${(my * 100).toFixed(1)}%`);
          });
        };
        const onLeave = () => {
          cancelAnimationFrame(raf);
          card.style.setProperty('--tilt-x', '0deg');
          card.style.setProperty('--tilt-y', '0deg');
        };
        card.addEventListener('mousemove', onMove);
        card.addEventListener('mouseleave', onLeave);
      });
    }

    /* --- 13.3 Section-title scroll progress -------------------
       Each section title gets a "in-view" class when its parent
       section is centred — used to drive a subtle accent shimmer. */
    $$('.sec').forEach((sec) => {
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0.35) {
            sec.classList.add('is-active');
          }
        });
      }, { threshold: [0.35, 0.6] });
      obs.observe(sec);
    });
  }
})();
