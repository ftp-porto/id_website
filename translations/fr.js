window.FTP_TRANSLATIONS = window.FTP_TRANSLATIONS || {};

window.FTP_TRANSLATIONS.fr = {
  meta: {
    title: "FTP Lab — Là Où la Recherche Devient Réalité",
    description:
      "Un parcours piloté par le scroll au cœur du laboratoire R&D de FTP. Cinq projets internationaux. Douze spécialistes. De Porto vers le monde.",
  },
  ui: {
    themeToggle: "Basculer mode clair / sombre",
    languageLabel: "Choisir la langue",
    languageNames: {
      en: "English",
      pt: "Português",
      es: "Español",
      fr: "Français",
    },
    nav: {
      top: "Haut",
      solutions: "Solutions",
      projects: "Projets",
      team: "Équipe",
      blog: "Blog",
      about: "À propos",
      contact: "Contact",
    },
  },
  labels: {
    liveDemo: "Démo en direct",
    visitAcademy: "Visiter Academy ↗",
    talkToUs: "Parlons-en →",
    solutionBlocks: {
      what: "Ce Que Cela Fait",
      why: "Pourquoi C'est Important",
      key: "Capacités Clés",
      how: "Comment Cela Fonctionne",
      adapt: "Conçu pour S'Adapter",
    },
    problem: "Problème",
    solution: "Solution",
  },
  hud: {
    scanning: "ANALYSE",
    coords: "N 41.21° · W 8.55°",
    location: "PORTO / PT",
    stageLabels: [
      "TRAJET NEURONAL · ENTRÉE",
      "ÉVEIL · CORTEX",
      "MANIFESTE · PROFOND",
      "LE LAB · NOYAU",
      "PROJET · EARS",
      "PROJET · EXPAI",
      "PROJET · ELFMO",
      "PROJET · CAPE",
      "PROJET · OMD",
      "ATLAS · 5 VILLES",
      "LES ESPRITS",
      "INVITATION",
    ],
  },
  journey: {
    awakening: {
      kicker: ["R&D", "Studio", "Depuis 1999"],
      titleHtml:
        '<span class="display__line"><span data-cue>De la</span> <span data-cue>recherche</span></span><span class="display__line"><span data-cue>à la</span> <em data-cue>réalité.</em></span>',
      ledeHtml:
        "Nous sommes <strong>FTP</strong> — un laboratoire portugais qui transforme la recherche scientifique en systèmes d'entreprise appliqués et à fort impact.",
    },
    manifesto: {
      chapter: "/ Chapitre 01 · Manifeste",
      bodyHtml:
        "Nous ne construisons pas seulement du logiciel. Nous construisons la couche invisible où la <em>recherche</em> devient un bouton que l'on peut presser, une décision qu'une machine peut <em>expliquer</em>, un coût qui disparaît en silence.",
      signature: "— FTP / Département R&D · Porto",
    },
    lab: {
      chapter: "/ Chapitre 02 · Le Lab",
      titleHtml: "Un <em>laboratoire</em><br/>à la forme d'une entreprise.",
      stats: [
        { value: "27", suffix: "ans", label: "depuis 1999" },
        { value: "5", suffix: "projets", label: "consortia R&D actifs" },
        { value: "8", suffix: "pays", label: "PT · TR · KR · ES · RO" },
        { value: "5", suffix: "articles", label: "IEEE · Procedia · 2025–26" },
      ],
    },
    projects: [
      {
        chapter: "/ Chapitre 03 · Projet I sur V",
        tag: "ITEA · Norte 2030 · 10 partenaires",
        status: "En cours · 2023–2026",
        title: "EARS",
        sub: "Recommandation Intelligente pour Services à Distance",
        bodyHtml:
          "Un cadre de recommandation fédéré et explicable qui apprend dans <em>neuf secteurs</em> — IT, santé, justice, e-commerce, télémarketing, industrie, logistique, électronique et logiciel — et <em>explique</em> chaque suggestion qu'il produit. Open-source. Privacy by design.",
        chips: [
          "Systèmes de Recommandation",
          "IA Explicable",
          "Apprentissage Fédéré",
          "Context-Aware",
        ],
      },
      {
        chapter: "/ Projet II sur V",
        tag: "ITEA 4 · Smart Industry · 10 partenaires",
        status: "En cours · 2024–2026",
        title: "EXPAI",
        sub: "Smart Industry · IA Explicable pour le Contrôle Industriel",
        bodyHtml:
          "Réduire l'écart entre l'<em>IA boîte noire</em> et les environnements industriels de haute précision. Vision par ordinateur sur flux de capteurs, retopologie 3D automatique et robots mobiles autonomes, le tout sous une couche XAI qui rend chaque décision <em>auditable</em>.",
        chips: ["XAI", "Vision par Ordinateur", "Robotique AMR", "Retopologie 3D"],
      },
      {
        chapter: "/ Projet III sur V",
        tag: "ITEA · Norte 2030 · 14 partenaires",
        status: "En cours · 2024–2027",
        title: "ELFMO",
        sub: "Enterprise Large Foundation Models",
        bodyHtml:
          "Un cadre d'ingénierie fondé sur le risque qui permet aux entreprises d'adopter des <em>foundation models</em> sans perdre le contrôle des données, de la propriété intellectuelle ou de la conformité. Intégration ERP modulaire. Chatbot spécialisé Cegid PHC. Des modèles fondation intégrés aux systèmes déjà utilisés par l'entreprise.",
        chips: ["IA Générative", "Adaptation LFM", "Intégration ERP", "RGPD · AI Act"],
      },
      {
        chapter: "/ Projet IV sur V",
        tag: "ITEA 4 · 15 partenaires · 5 pays",
        status: "En cours · 2024–2027",
        title: "CAPE",
        sub: "Assistant Cognitif pour Environnements Phygital",
        bodyHtml:
          "Une plateforme retail qui combine IA, IoT, blockchain et deep learning — cinq cas d'usage allant de la <em>sécurité intelligente en fabrication</em> aux opérations magasin, au bien-être des collaborateurs et au commerce personnalisé.",
        chips: ["IoT", "Blockchain", "Deep Learning", "Vision par Ordinateur"],
      },
      {
        chapter: "/ Projet V sur V",
        tag: "Cross-domain · 8 partenaires",
        status: "Terminé · 2022–2023",
        title: "OMD",
        sub: "Gestion Cognitive de la Demande de Services",
        bodyHtml:
          "Compréhension de la voix et du texte appliquée à un cas réel d'e-commerce avec Nimco, entreprise portugaise de chaussures. Preuve qu'une <em>gestion de service pilotée par le NLP</em> peut dépasser un ticketing fondé sur des règles.",
        chips: ["NLP", "ML", "Speech-to-Text"],
      },
    ],
    atlas: {
      chapter: "/ Chapitre 04 · Atlas",
      titleHtml: "De Porto<br/>vers le <em>monde</em>.",
      pins: [
        { city: "Porto", label: "Siège" },
        { city: "Madrid", label: "EXPAI" },
        { city: "Bucarest", label: "OMD · EARS" },
        { city: "Ankara", label: "EARS · EXPAI" },
        { city: "Daegu", label: "plénière EXPAI" },
        { city: "Canada", label: "" },
        { city: "Ukraine", label: "" },
        { city: "Grande-Bretagne", label: "" },
      ],
      copy:
        "Plénières à Ankara (nov. '25) et Daegu (avr. '26). Prochaine étape : une démonstration unifiée pour la revue ITEA.",
    },
    minds: {
      chapter: "/ Chapitre 05 · Les Esprits",
      titleHtml: "Les personnes<br/>qui portent la <em>réflexion</em>.",
      quotes: [
        {
          quote:
            "Les entreprises qui intègrent l'IA appliquée ne réagissent pas au marché — elles l'anticipent.",
          captionHtml: "<strong>Fábio</strong> · <span>Directeur de Département</span>",
        },
        {
          quote: "Avec l'IA, la limite n'est plus le temps — c'est l'imagination.",
          captionHtml: "<strong>Teixeira</strong> · R&amp;D · ELFMO",
        },
        {
          quote:
            "L'innovation naît lorsque nous transformons l'effort récurrent en solutions durables.",
          captionHtml: "<strong>Cruz</strong> · R&amp;D · Vision par Ordinateur",
        },
        {
          quote:
            "Mélanger un peu de magie avec beaucoup d'intelligence pour construire l'avenir.",
          captionHtml: "<strong>Mariana</strong> · R&amp;D · 3D Graphics &amp; EXPAI",
        },
        {
          quote:
            "Du chaos des idées à l'élégance des résultats — en leur donnant des ailes.",
          captionHtml: "<strong>Isabel</strong> · <span>Project Manager</span>",
        },
      ],
    },
    invite: {
      chapter: "/ Chapitre Final · Invitation",
      titleHtml:
        '<span data-cue>Là où la</span><span data-cue>confiance</span><em data-cue>numérique</em><span data-cue>commence.</span>',
      lede: "Continuez à descendre — le laboratoire, en détail.",
    },
  },
  innovation: {
    kicker: "/ Lignes d'Innovation",
    items: [
      "Vision par Ordinateur",
      "Automatisation Intelligente",
      "Analyse de Données",
      "Digital Twins",
      "Systèmes Prédictifs",
      "R&D Appliquée",
      "3D & Informatique Graphique",
    ],
  },
  solutions: {
    header: {
      kicker: "/ Solutions & Services",
      titleHtml: "Des solutions innovantes &amp; des services <em>professionnels</em>.",
      lede:
        "Nous accélérons la transformation numérique grâce à une IA avancée et à une ingénierie logicielle spécialisée. Cinq moteurs transversaux à tout secteur, prêts à entrer dans une activité réelle.",
    },
    items: [
      {
        id: "sol-recommender",
        ariaLabel: "Recommandeur Hybride Explicable — démo en direct",
        title: "Recommandeur Hybride Explicable",
        tag: "e-commerce · cross-domain · WordPress",
        lead:
          "Un système hybride de recommandation explicable qui fournit des suggestions personnalisées avec un raisonnement clair et fondé sur les données.",
        intro: [
          "Notre système est conçu pour délivrer des recommandations très pertinentes, mais aussi des <em>explications claires et utiles</em> derrière chaque décision.",
          "Dans beaucoup de systèmes, la recommandation apparaît comme une sortie opaque. Ici, nous combinons modélisation avancée et explicabilité intégrée pour que chaque résultat soit <em>précis et interprétable</em>.",
        ],
        blocks: [
          {
            key: "what",
            content: [
              { type: "p", html: "Le système analyse plusieurs couches de signaux utilisateur et produit afin de générer des recommandations personnalisées, notamment :" },
              {
                type: "ul",
                items: [
                  "Historique d'interaction",
                  "Schémas d'achat et de conversion",
                  "Signaux collaboratifs entre utilisateurs similaires",
                ],
              },
              { type: "p", html: "Chaque résultat est accompagné d'une courte explication en langage naturel, ancrée dans les données utilisées pour le ranking." },
            ],
          },
          {
            key: "why",
            content: [
              { type: "p", html: "Comprendre <em>pourquoi</em> quelque chose est recommandé renforce la confiance, améliore l'expérience et soutient de meilleures décisions. Le système garantit que :" },
              {
                type: "ul",
                items: [
                  "Les recommandations restent cohérentes et justifiables",
                  "Les explications reflètent le comportement réel du modèle",
                  "Les sorties peuvent être validées et inspirer confiance",
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
                  "Recommandations personnalisées basées sur comportement et contexte",
                  "Explicabilité intégrée avec raisonnement fondé sur la preuve",
                  "Modélisation hybride combinant données historiques, comportementales et collaboratives",
                  "Sortie en langage naturel avec explications lisibles",
                  "Architecture réutilisable et agnostique au domaine",
                ],
              },
            ],
          },
          {
            key: "how",
            content: [
              { type: "p", html: "Le système utilise un modèle hybride pour classer les items à partir de plusieurs sources de signal. Un modèle de langage traduit l'évidence structurée en explications courtes, garantissant des recommandations <em>pilotées par les données</em> et <em>compréhensibles</em>." },
            ],
          },
          {
            key: "adapt",
            content: [
              { type: "p", html: "Cette solution agit comme une couche de base pour des produits spécifiques. Son design modulaire permet l'intégration dans différentes plateformes sans perdre ni performance ni explicabilité." },
            ],
          },
        ],
        chips: [
          "Systèmes de Recommandation",
          "IA Explicable",
          "Modélisation Hybride",
          "Sortie en Langage Naturel",
          "Agnostique au Domaine",
        ],
      },
      {
        id: "sol-emotion",
        ariaLabel: "Reconnaissance Multimodale des Émotions — démo en direct",
        title: "Reconnaissance Multimodale des Émotions",
        tag: "expérience client · workplace",
        lead:
          "Prosodie de la voix, micro-expressions faciales et contenu parlé fusionnés dans un profil émotionnel unifié — en temps réel, respectueux de la vie privée et prêt pour le federated learning.",
        intro: [
          "Notre système lit le <em>signal complet</em> qu'une personne envoie : sa voix, les mouvements de son visage et ce qu'elle dit. Au lieu de s'appuyer sur un seul canal, il fusionne audio, vidéo et texte dans un état émotionnel cohérent.",
          "L'architecture est conçue pour les contextes sensibles : l'inférence peut tourner en edge, les modèles sont <em>federated-ready</em> et le même moteur fonctionne en relation client comme en environnement de travail.",
        ],
        blocks: [
          {
            key: "what",
            content: [
              {
                type: "ul",
                items: [
                  "Analyse le ton, le rythme et la prosodie de la voix",
                  "Lit les expressions et micro-expressions faciales",
                  "Traite le contenu parlé et les métadonnées contextuelles",
                  "Prédit catégorie et intensité émotionnelle",
                ],
              },
            ],
          },
          {
            key: "why",
            content: [
              { type: "p", html: "Améliore la satisfaction client en adaptant les réponses au <em>contexte émotionnel</em> en temps réel. Détecte tôt le stress, l'inconfort et le désengagement. Soutient le bien-être des collaborateurs via un suivi continu et volontaire." },
            ],
          },
          {
            key: "key",
            content: [
              {
                type: "ul",
                items: [
                  "Détection multimodale sur audio, vidéo et texte",
                  "Inférence en temps réel pour interactions en direct",
                  "Prêt pour l'apprentissage fédéré sans centraliser les données",
                  "Conception orientée vie privée avec traitement local",
                  "Taxonomies émotionnelles configurables selon le domaine",
                ],
              },
            ],
          },
          {
            key: "how",
            content: [
              { type: "p", html: "Trois encodeurs spécialisés extraient en parallèle les signaux de voix, de visage et de texte. Une couche de fusion les combine dans un <em>embedding émotionnel unifié</em>, ensuite transformé en prédictions de catégorie et d'intensité." },
            ],
          },
          {
            key: "adapt",
            content: [
              { type: "p", html: "Le moteur peut s'intégrer à un centre de contact, une expérience retail, un programme de bien-être interne ou une étude clinique. Le même noyau s'adapte avec un fine-tuning léger et alimente déjà une partie de notre travail dans <em>EARS</em>." },
            ],
          },
        ],
        chips: [
          "Détection Multimodale",
          "Inférence en Temps Réel",
          "Prêt pour l'Apprentissage Fédéré",
          "Privacy-Aware",
          "Audio · Vidéo · Texte",
        ],
      },
      {
        id: "sol-erp",
        ariaLabel: "Assistant Virtuel ERP — démo en direct",
        title: "Assistant Virtuel ERP",
        tag: "Cegid PHC · Sage · Cegid Primavera",
        lead:
          "Une interface conversationnelle intelligente qui simplifie la manière dont les entreprises interagissent avec leurs systèmes de gestion — factures, rapports, prévisions et réponses, sans menus.",
        intro: [
          "Notre Assistant Virtuel ERP transforme l'ERP d'un <em>outil guidé par menus</em> en un <em>partenaire conversationnel</em>. Au lieu de naviguer entre formulaires et rapports, l'utilisateur pose une question et le système répond à partir de ses propres données.",
          "L'assistant se connecte directement à Cegid PHC, Sage, Cegid Primavera et à d'autres ERP, en combinant <em>compréhension du langage naturel</em> et logique métier spécifique pour garantir des réponses contextuelles et opérationnellement justes.",
        ],
        blocks: [
          {
            key: "what",
            content: [
              {
                type: "ul",
                items: [
                  "Génère automatiquement factures et documents financiers",
                  "Produit des rapports périodiques et synthèses de performance",
                  "Fournit des prévisions IA à partir de l'historique",
                  "Répond aux questions métier en langage naturel",
                ],
              },
            ],
          },
          {
            key: "why",
            content: [
              { type: "p", html: "Réduit le temps consacré aux tâches administratives répétitives. Rend les données accessibles aux <em>utilisateurs non techniques</em>. Permet des décisions plus rapides et mieux informées. Fournit des <em>insights proactifs</em> au lieu d'un reporting réactif." },
            ],
          },
          {
            key: "key",
            content: [
              {
                type: "ul",
                items: [
                  "Couche NLP au-dessus de l'ERP — parlez à votre activité en langage simple",
                  "Génération automatique de documents",
                  "Prévision IA entraînée sur l'historique du client",
                  "Agrégation de données entre modules et systèmes",
                  "Connecteurs API ERP personnalisés — Cegid PHC, Sage, Cegid Primavera et plus",
                ],
              },
            ],
          },
          {
            key: "how",
            content: [
              { type: "p", html: "Une couche de langage naturel interprète l'intention, la mappe vers les opérations natives de l'ERP et orchestre les bons modules pour répondre ou agir. Les prévisions et synthèses sont produites par des modèles entraînés sur les données réelles du client." },
            ],
          },
          {
            key: "adapt",
            content: [
              { type: "p", html: "Construit comme une couche modulaire au-dessus de l'ERP existant, il étend les capacités sans perturber l'opération. Nouveaux connecteurs, règles et sources de données peuvent être ajoutés progressivement." },
            ],
          },
        ],
        chips: [
          "NLP sur ERP",
          "Documents Automatiques",
          "Prévision IA",
          "Agrégation Multi-source",
          "API ERP Personnalisée",
        ],
      },
      {
        id: "sol-agents",
        ariaLabel: "Systèmes d'Agents Autonomes — démo en direct",
        title: "Systèmes d'Agents Autonomes",
        tag: "automatisation · orchestration",
        lead:
          "Des systèmes à base d'IA qui exécutent des tâches de manière autonome, prennent des décisions éclairées et coordonnent les opérations avec une intervention humaine minimale.",
        intro: [
          "Nos Systèmes d'Agents Autonomes transforment des automatisations isolées en une <em>force de travail coordonnée et orientée objectif</em>. Chaque agent prend en charge une partie de l'opération — il planifie, utilise les bons outils et s'ajuste grâce au feedback.",
          "Les agents collaborent via une couche partagée d'orchestration qui suit l'état, gère les handoffs et résout les conflits. Le résultat ressemble davantage à une <em>équipe</em> qu'à un simple script.",
        ],
        blocks: [
          {
            key: "what",
            content: [
              {
                type: "ul",
                items: [
                  "Planifie, exécute et ajuste les actions selon le feedback",
                  "Opère sur plusieurs systèmes et APIs",
                  "Gère des chaînes de tâches séquentielles et conditionnelles",
                  "Apprend et s'améliore via le feedback contextuel",
                ],
              },
            ],
          },
          {
            key: "why",
            content: [
              { type: "p", html: "S'adapte dynamiquement au contexte <em>sans intervention manuelle</em>. Intègre plusieurs systèmes dans des workflows unifiés. Agit de manière proactive et réduit la charge opérationnelle ainsi que les erreurs humaines." },
            ],
          },
          {
            key: "key",
            content: [
              {
                type: "ul",
                items: [
                  "Exécution autonome de tâches longues et multi-step",
                  "Intégration API avec services internes et externes",
                  "Workflows avec branching et reprise",
                  "Apprentissage adaptatif à partir des résultats et du feedback humain",
                  "Comportement self-managing dans la répartition du travail",
                ],
              },
            ],
          },
          {
            key: "how",
            content: [
              { type: "p", html: "Un orchestrateur central décompose l'objectif en tâches et les confie à des agents spécialisés. Chaque agent raisonne sur ses outils, appelle des APIs et remonte ses résultats. L'orchestrateur maintient une <em>mémoire partagée</em> de l'état et des outcomes." },
            ],
          },
          {
            key: "adapt",
            content: [
              { type: "p", html: "Il s'agit d'un framework modulaire : de nouveaux agents, outils et domaines peuvent être ajoutés sans réécrire le noyau. Le même moteur est réutilisé dans le support, les opérations, le back-office et dans <em>EARS</em> et <em>ELFMO</em>." },
            ],
          },
        ],
        chips: [
          "Exécution Autonome",
          "Intégration API",
          "Workflows Multi-Step",
          "Apprentissage Adaptatif",
          "Self-Managing",
        ],
      },
      {
        id: "sol-retopo",
        ariaLabel: "Convertisseur de Rétopologie — démo en direct",
        title: "Convertisseur de Rétopologie",
        tag: "pipelines 3D · jeux · visualisation industrielle",
        lead:
          "Transforme des modèles high-poly en maillages low-poly optimisés tout en préservant les détails essentiels et la fidélité visuelle. Topologie propre basée sur des quads, adaptée à l'animation et au temps réel.",
        intro: [
          "Notre Convertisseur de Rétopologie prend une géométrie dense issue de sculpture ou de scan et la reconstruit en topologie <em>propre et prête pour l'animation</em> — automatiquement.",
          "Le système a été pensé pour les pipelines de production : les studios injectent des assets bruts et récupèrent des maillages prêts pour le rigging, le baking, le rendu temps réel ou la simulation industrielle, sans semaines de nettoyage manuel.",
        ],
        blocks: [
          {
            key: "what",
            content: [
              {
                type: "ul",
                items: [
                  "Réduit automatiquement la complexité du maillage",
                  "Préserve la géométrie et la forme essentielles",
                  "Maintient la fidélité visuelle d'un bout à l'autre",
                  "Génère une topologie propre basée sur des quads",
                ],
              },
            ],
          },
          {
            key: "why",
            content: [
              { type: "p", html: "Réduit le temps de production et l'effort manuel. Garantit une <em>qualité topologique cohérente</em> sur l'ensemble du pipeline. Permet d'itérer et de monter en charge plus rapidement en gaming, cinéma et visualisation industrielle." },
            ],
          },
          {
            key: "key",
            content: [
              {
                type: "ul",
                items: [
                  "Rétopologie entièrement automatique",
                  "Sortie en quads adaptée à l'animation et à la subdivision",
                  "Préservation de la géométrie et de la silhouette entre LODs",
                  "Prêt pour les moteurs temps réel — Unreal, Unity et web 3D",
                  "Traitement par lots pour bibliothèques d'assets",
                ],
              },
            ],
          },
          {
            key: "how",
            content: [
              { type: "p", html: "Le pipeline analyse la courbure, les lignes caractéristiques et le flux topologique du maillage d'entrée, puis génère une nouvelle <em>surface dominée par les quads</em> alignée sur ces caractéristiques. UVs et normales sont transférés depuis la source pour conserver l'apparence originale avec un poids bien moindre." },
            ],
          },
          {
            key: "adapt",
            content: [
              { type: "p", html: "Le convertisseur est modulaire : il peut s'intégrer à des workflows DCC comme Blender, Maya ou Houdini, ou être consommé comme service dans des pipelines propriétaires. Le même moteur soutient les travaux menés dans <em>EXPAI</em> et d'autres projets." },
            ],
          },
        ],
        chips: [
          "Rétopologie Automatique",
          "Sortie en Quads",
          "Préservation Géométrique",
          "Prêt pour le Temps Réel",
        ],
      },
    ],
    experts: {
      kicker: "/ Services Experts",
      academy: {
        title: "FTP Academy",
        cta: "Visiter Academy ↗",
        paragraphs: [
          "Une plateforme d'apprentissage innovante pensée pour faire grandir les professionnels de demain. Des programmes de formation de haute qualité sur plusieurs domaines technologiques, avec apprentissage pratique, progression continue et parcours adaptés.",
          "Ouverte aux candidats de 18 à 40 ans. Pas de prérequis académiques stricts pour les formations d'initiation. Ce qui compte : un réel intérêt pour la technologie, la motivation d'apprendre et l'envie d'évoluer.",
        ],
        chips: ["Apprentissage Pratique", "Parcours Adaptés", "Certification DGERT", "Mentorat"],
      },
      appstudio: {
        title: "Appstudio",
        cta: "Voir les détails →",
        paragraphs: [
          "L'environnement dédié de FTP pour concevoir, prototyper et livrer rapidement des applications métier sur mesure. Des composants modulaires et des pratiques modernes de développement transforment des besoins complexes en produits numériques fonctionnels.",
          "Des outils internes aux portails clients et applications mobiles. Nous combinons briques réutilisables et logique métier sur mesure afin que chaque application s'intègre à l'opération et grandisse avec elle.",
        ],
        capabilities: [
          { title: "Outils internes & dashboards", text: "Des applications opérationnelles qui fluidifient le quotidien." },
          { title: "Bots d'automatisation & notifications", text: "Des agents intelligents qui surveillent les données et agissent." },
          { title: "Portails clients & web apps", text: "Des expériences à votre marque pour vos clients." },
          { title: "Applications mobiles", text: "Des apps iOS et Android connectées à votre stack." },
          { title: "Intégrations ERP", text: "Cegid PHC et d'autres systèmes reliés à votre écosystème numérique." },
          { title: "Workflows pilotés par la donnée", text: "Des pipelines qui transforment la donnée en action." },
        ],
      },
      processTitle: "Notre façon de travailler",
      steps: [
        { title: "Découverte", text: "Nous nous asseyons avec votre équipe pour comprendre le processus, les points de friction et l'objectif." },
        { title: "Prototype", text: "Nous transformons rapidement l'idée en prototype fonctionnel pour réagir sur du concret." },
        { title: "Construire & itérer", text: "Nous affinons la solution avec un feedback continu jusqu'à un vrai ajustement terrain." },
        { title: "Déployer & accompagner", text: "Nous livrons, formons votre équipe et restons proches pour faire évoluer la solution." },
      ],
      trustedTitle: "/ Choisis par des Entreprises de Référence",
    },
  },
  appstudioPage: {
    meta: {
      title: "Appstudio — Des applications sur mesure, conçues pour votre activité",
      description:
        "Explorez Appstudio, le service FTP pour outils internes, dashboards, automatisations, portails, applications mobiles et workflows reliés à votre ERP.",
    },
    backButton: "Retour",
    backLabel: "Retour à FTP Lab",
    backToSolutions: "Retour aux services",
    heroTitle: "Des applications sur mesure, conçues pour votre activité",
    heroText:
      "Des outils internes et bots intelligents aux dashboards et portails clients, nous concevons et construisons des logiciels sur mesure adaptés à la façon dont votre équipe travaille vraiment.",
    snapshotTitle: "Ce que couvre Appstudio",
    overviewTitle: "Qu'est-ce qu'Appstudio ?",
    overviewText:
      "Appstudio est le service de développement d'applications sur mesure de FTP. Nous nous associons à chaque client pour concevoir, prototyper et livrer des logiciels personnalisés — des applications modelées sur leurs processus, leurs données et leurs objectifs, plutôt que de forcer l'entreprise à s'adapter à un produit générique.",
    overviewText2:
      "Chaque projet est unique. Nous combinons des pratiques de développement modernes avec des briques réutilisables pour avancer rapidement sans compromis sur la qualité, l'évolutivité ou la maintenabilité.",
    capabilitiesTitle: "Ce que nous pouvons construire",
    exampleLabel: "Cas d'usage",
    exampleTitle: "Bot de suivi commercial",
    exampleText:
      "Imaginez un bot qui surveille votre CRM et identifie les prospects à qui un suivi a été promis mais qui n'ont jamais été recontactés. Le bot envoie une notification au commercial responsable pour lui rappeler d'appeler ou de rendre visite au client. Si le commercial n'agit toujours pas dans un délai défini, la dirigeante de l'entreprise reçoit une notification pour reprendre la conversation avant que l'opportunité ne soit perdue.",
    exampleText2:
      "C'est exactement le type de petite application ciblée qui récupère discrètement du chiffre d'affaires et responsabilise vos équipes — c'est précisément à cela que sert Appstudio.",
    ctaTitle: "Une idée en tête ?",
    ctaText:
      "Dites-nous le problème que vous souhaitez résoudre. Nous vous aiderons à le transformer en application réelle.",
    ctaButton: "Parlez-nous",
  },
  projects: {
    header: {
      kicker: "/ Projets Internationaux de R&D",
      titleHtml: "Cinq projets.<br/>Cinq pays. <em>Une même impulsion de consortium.</em>",
      lede:
        "Les collaborations internationales actives et récentes du laboratoire — le problème que chacune voulait résoudre et la solution que nous avons mise en œuvre.",
    },
    items: [
      {
        id: "omd",
        statusClass: "done",
        title: "OMD",
        subtitle: "Gestion Cognitive de la Demande de Services",
        status: "Terminé · 2022–2023",
        meta: "Cross-domain · 8 partenaires",
        problemHtml:
          "Les organisations de services font face à une complexité croissante dans la gestion des demandes sur plusieurs canaux et domaines. Les systèmes traditionnels d'e-commerce, de ticketing et de support souffrent d'allocation inefficace, de coûts élevés, d'un NLP limité et de bases de connaissance fragmentées.",
        solutionHtml:
          "Une plateforme cognitive cross-domain de gestion de services, fondée sur ML, Deep Learning, NLP et optimisation. Cas réel avec <a href=\"https://www.nm4y.com\" target=\"_blank\" rel=\"noopener\">Nimco</a> — chatbot texte + voix qui comprend les demandes, extrait l'intention, applique un filtrage ML et recommande des chaussures avec un raisonnement personnalisé.",
        chips: ["NLP", "ML", "Speech-to-Text", "Optimization"],
        partnersPrefix: "Partenaires :",
      },
      {
        id: "ears",
        statusClass: "ongoing",
        featured: true,
        title: "EARS",
        subtitle: "Recommandation Intelligente pour Services à Distance",
        status: "En cours · 2023–2026",
        meta: "NORTE2030-FEDER-00542300 · ITEA 21017",
        problemHtml:
          "Les outils actuels de Service Desk Management restent trop centrés sur le secteur IT, et l'intégration de l'IA, du ML, du DL et du NLP en est encore à ses débuts. Il manque un framework capable d'adapter la gestion de service à la santé, au e-commerce, au marketing et aux ventes.",
        solutionHtml:
          "Un framework innovant pour allouer automatiquement l'agent le plus adapté à chaque demande, en optimisant le support à distance sur plusieurs domaines. Recommandeurs multi-domaines, IA explicable, profils avancés client/agent avec signaux émotionnels et comportementaux, et workflows dynamiques. Validé dans neuf secteurs. Des composants publiés en open source.",
        chips: [
          "Systèmes de Recommandation",
          "IA Explicable",
          "User Modeling",
          "Context-Aware",
          "Systèmes Adaptatifs",
        ],
        partnersPrefix: "Partenaires (10) :",
      },
      {
        id: "expai",
        statusClass: "ongoing",
        title: "EXPAI",
        subtitle: "SmartIndustry · IA Explicable pour le Contrôle Industriel",
        status: "En cours · 2024–2026",
        meta: "ITEA 4 · Smart Industry",
        problemHtml:
          "La transition vers la Smart Industry se heurte à des obstacles critiques : des systèmes d'IA perçus comme des \"boîtes noires\", une modélisation 3D traditionnelle produisant une géométrie lourde pour le temps réel, et une faible intégration entre données capteurs, robotique autonome et outils de conception.",
        solutionHtml:
          "Un framework XAI qui favorise un environnement numérique flexible, contrôlé et transparent. Collecte centralisée de capteurs, Vision par ordinateur qui rend les décisions lisibles, retopologie automatique et modélisation procédurale pour une géométrie prête pour le temps réel, et opération optimisée des AMR.",
        chips: [
          "IA Explicable",
          "Vision par Ordinateur",
          "Maintenance Prédictive",
          "Détection d'Anomalies",
          "Robotique AMR",
          "Retopologie 3D",
        ],
        partnersPrefix: "Partenaires (10) :",
      },
      {
        id: "elfmo",
        statusClass: "ongoing",
        title: "ELFMO",
        subtitle: "Enterprise Large Foundation Models",
        status: "En cours · 2024–2027",
        meta: "ITEA · Norte 2030",
        problemHtml:
          "Les entreprises veulent exploiter le potentiel transformateur de l'IA générative et des LFMs comme GPT, Bard ou Falcon, mais se heurtent à des coûts élevés, à une forte allocation de ressources et à des exigences strictes de conformité. Sécurité, propriété intellectuelle, biais, transparence et alignement avec le RGPD et l'AI Act compliquent une adoption fiable — et les ERP monolithiques freinent l'intégration de l'IA.",
        solutionHtml:
          "Un cadre d'ingénierie fondé sur le risque pour une adoption rapide, informée et fiable des LFMs en environnement d'entreprise. Méthodes, outils, benchmarks sectoriels, infrastructures open-source et évaluation alignée avec le RGPD et l'AI Act. Cas national : une plateforme modulaire d'intégration, du monolithe vers les microservices, avec un chatbot spécialisé Cegid PHC.",
        chips: [
          "IA Générative",
          "Adaptation LFM",
          "Intégration ERP (Cegid PHC)",
          "Monolithe Modulaire → Microservices",
          "IA Open-source",
          "RGPD · AI Act",
        ],
        partnersPrefix: "Partenaires (14) :",
      },
      {
        id: "cape",
        statusClass: "ongoing",
        title: "CAPE",
        subtitle: "Assistant Cognitif pour Environnements Phygital",
        status: "En cours · 2024–2027",
        meta: "NORTE0230-FEDER-01241200 · ITEA 4",
        problemHtml:
          "Le secteur retail est essentiel à l'économie européenne, mais il fait face à des défis majeurs de durabilité, de numérisation et de compétences. Les systèmes mono-modaux et les expériences statiques en magasin ne délivrent pas les interactions adaptatives et personnalisées attendues aujourd'hui.",
        solutionHtml:
          "Une initiative qui transforme l'expérience d'achat et l'environnement de travail du retail grâce à l'IA, la blockchain, l'IoT et le deep learning. Expériences personnalisées, robots et kiosques optimisés, gestion innovante des ressources, suivi des collaborateurs et engagement client sur cinq cas d'usage.",
        chips: [
          "Intelligence Artificielle",
          "Blockchain",
          "IoT",
          "Deep Learning",
          "Vision par Ordinateur",
          "Systèmes de Recommandation",
        ],
        partnersPrefix: "Partenaires (15) :",
      },
    ],
  },
  papers: {
    kicker: "/ Publié · 2025–2026",
    titleHtml: "Évalué par les pairs. <em>Reproductible.</em>",
    lede:
      "Le travail du laboratoire est vérifié au seul endroit qui compte vraiment — par d'autres laboratoires. Une sélection non exhaustive des 18 derniers mois.",
    backedBy: "Soutenu par",
    euLabel: "Union Européenne",
  },
  team: {
    kicker: "/ L'Équipe du Lab",
    titleHtml:
      "Les esprits qui relient<br/><em>découverte scientifique</em> et <em>réalité d'entreprise</em>.",
    groupTitle: "Une équipe. Neuf profils singuliers.",
    groupBody:
      "Commencez par la photo de groupe puis cliquez sur un visage ci-dessous pour ouvrir la vidéo et la citation de cette personne.",
    groupButton: "Retour à la photo de groupe",
    groupAlt: "Photo de groupe de l'équipe FTP AI Lab",
    memberRailTitle: "Rencontrez l'équipe",
    memberStripLabel: "Sélecteur de l'équipe",
    scrollPrevLabel: "Faire défiler l'équipe vers la gauche",
    scrollNextLabel: "Faire défiler l'équipe vers la droite",
    members: [
      {
        lead: true,
        role: "Directeur de Département",
        name: "Fábio",
        spec: "Leadership & Stratégie de Département",
        quote:
          "Les entreprises qui intègrent l'IA appliquée ne réagissent pas au marché — elles l'anticipent.",
      },
      {
        role: "Technical Lead",
        name: "André",
        spec: "FTP Academia & Stratégie Exécutive",
        quote: "Les limites façonnent la vision. La direction transforme l'imagination en réalité.",
      },
      {
        role: "Project Manager",
        name: "Isabel",
        spec: "About Us, Blog & Gestion Générale",
        quote:
          "Du chaos des idées à l'élégance des résultats — en leur donnant des ailes.",
      },
      {
        role: "Développeur R&D",
        name: "Teixeira",
        spec: "IA & Projet ELFMO",
        quote: "Avec l'IA, la limite n'est plus le temps — c'est l'imagination.",
      },
      {
        role: "Développeur R&D",
        name: "Couto",
        spec: "IA & Projet ELFMO",
      },
      {
        role: "Développeur R&D",
        name: "Cruz",
        spec: "Vision par Ordinateur & E-commerce",
        quote:
          "L'innovation naît lorsque nous transformons l'effort récurrent en solutions durables.",
      },
      {
        role: "Développeur R&D",
        name: "Gaspar",
        spec: "Automatisation ERP & EARS",
        quote: "Quand tout le monde pense pareil, alors plus personne ne pense.",
      },
      {
        role: "Développeur R&D",
        name: "Mariana",
        spec: "3D Graphics & EXPAI",
        quote:
          "Mélanger un peu de magie avec beaucoup d'intelligence pour construire l'avenir.",
      },
      {
        role: "Développeur R&D",
        name: "Tiago",
        spec: "Support Technique & Développement",
      },
    ],
  },
  blog: {
    kicker: "/ FTP Insights & Innovation",
    titleHtml: "Notes de terrain depuis les <em>frontières</em>.",
    lede:
      "Nous explorons l'IA, les collaborations internationales de R&D et la technologie industrielle — directement depuis les consortia.",
    posts: [
      {
        featured: true,
        category: "Projets Internationaux",
        slug: "ears-ankara-review",
        cardDate: "2025-11-05",
        date: "04–05 nov. 2025 · Ankara, Türkiye",
        cardTitle: "Innovation à Ankara",
        title: "Projet EARS — Réunion plénière à Ankara",
        cardLead: "Points forts de notre participation internationale et des échanges technologiques en Turquie.",
        lead: "Les 4 et 5 novembre 2025, Ankara a été le point de rencontre du consortium international du projet EARS — Environment Adaptive Recommendation System. Dans les installations du partenaire ARD Group, dans la capitale turque, les équipes se sont réunies pour deux journées de travail concentré, où les progrès techniques ont laissé place à des décisions concrètes et où l'alignement stratégique a gagné la solidité que seule la présence physique permet.",
        paragraphs: [],
        detail: {
          date: "04–05 nov. 2025 · Ankara, Türkiye",
          title: "Projet EARS — Réunion plénière à Ankara",
          lead: "Les 4 et 5 novembre 2025, Ankara a été le point de rencontre du consortium international du projet EARS — Environment Adaptive Recommendation System. Dans les installations du partenaire ARD Group, dans la capitale turque, les équipes se sont réunies pour deux journées de travail concentré, où les progrès techniques ont laissé place à des décisions concrètes et où l'alignement stratégique a gagné la solidité que seule la présence physique permet.",
          paragraphs: [
            "Le monde numérique est, par nature, dynamique. Les contextes changent, les utilisateurs évoluent et les besoins se transforment à un rythme que les systèmes traditionnels suivent difficilement. EARS est né précisément pour répondre à ce défi : développer un système de recommandation capable d'interpréter des données en temps réel, de s'adapter à des environnements complexes et d'améliorer continuellement l'expérience de ses utilisateurs.",
            "Pour y parvenir, le projet combine des technologies d'Intelligence Artificielle, l'intégration de données et des modèles de recommandation avancés, validés dans différents cas d'usage par un consortium de partenaires internationaux aux compétences complémentaires. Une approche qui reconnaît que les solutions véritablement robustes se construisent en collaboration.",
            "FTP a joué un rôle particulièrement important dans cette plénière, en tant que leader du WP5 — Integration, Pilots and Validation — qui garantit que tout ce qui est développé dans le projet trouve, en effet, une application dans le monde réel. La réunion à Ankara a été l'occasion d'évaluer l'avancement des activités en cours, de clarifier les questions techniques encore ouvertes et de préparer les prochaines étapes de développement, d'intégration et de démonstration.",
            "Certaines questions résistent aux appels vidéo et aux fils d'e-mails. La complexité technique d'EARS — avec de multiples partenaires, des composants technologiques interdépendants et des cas d'usage distincts — exige, à certains moments, la même table et le même espace. Ankara a été ce moment : deux jours durant lesquels les doutes ont été levés en quelques minutes, des décisions en attente depuis des semaines ont été prises ensemble, et l'articulation entre les équipes a gagné une fluidité que la distance permet rarement.",
            "Cette plénière, plus qu'un point d'étape technique, a été un moment de consolidation des relations qui soutiennent le projet, renforçant la communication, alignant les attentes et créant les conditions humaines pour que les prochaines étapes se déroulent avec davantage de confiance et d'efficacité.",
            "EARS rappelle que l'innovation technologique comporte toujours deux dimensions inséparables : la qualité des solutions développées et la capacité des personnes qui les développent à travailler ensemble, à aligner leurs visions et à transformer les connaissances techniques en résultats ayant un impact réel. Ankara a renforcé ces deux dimensions.",
            "Parce qu'innover, c'est aussi intégrer — technologies, données, perspectives et personnes.",
          ],
        },
        tag: "EARS · ITEA",
      },
      {
        featured: true,
        category: "Projets Internationaux",
        date: "15 avr. 2026 · Daegu, Corée du Sud",
        title: "Plénière EXPAI en Corée",
        lead:
          "Entre le 13 et le 15 avril, Daegu a ouvert les portes du projet EXPAI au monde. Dans les locaux de Nanosystems, les consortia portugais, coréen et espagnol se sont réunis pour une plénière bien au-delà d'un simple agenda technique.",
        paragraphs: [
          "Des avancées majeures ont été discutées : la trajectoire portugaise sur la rétopologie automatique, le potentiel de combiner capteurs LiDAR coréens et scanners 3D portugais, l'interopérabilité des données entre partenaires, des APIs communes et l'intégration de tous les cas d'usage dans la plateforme du consortium espagnol.",
          "À travers tous ces progrès, l'Explainable AI (XAI) s'affirme comme un axe stratégique du consortium — des systèmes non seulement intelligents, mais aussi transparents, interprétables et réellement utiles.",
        ],
        tag: "EXPAI · ITEA 4",
      },
      {
        category: "GenAI",
        cardDate: "2025-05-28",
        date: "26–28 mai 2025 · Porto",
        title: "ELFMO à Porto",
        cardLead:
          "Trois jours de travail, de partage et de vision commune à Porto avec les partenaires internationaux du projet ELFMo.",
        lead:
          "Du 26 au 28 mai 2025, FTP et l'ISEP ont accueilli à Porto les partenaires venus de Finlande, de Belgique et d'Espagne pour une nouvelle plénière du projet européen ELFMo.",
        paragraphs: [],
        detail: {
          date: "26–28 mai 2025 · Porto",
          title: "ELFMO à Porto",
          lead:
            "Du 26 au 28 mai 2025, FTP et l'ISEP ont accueilli à Porto les partenaires venus de Finlande, de Belgique et d'Espagne pour une nouvelle plénière du projet européen ELFMo.",
          paragraphs: [
            "Il existe des villes dont l'énergie et l'identité ont le pouvoir d'inspirer. Du 26 au 28 mai, Porto a été le théâtre d'un nouveau moment marquant du projet européen ELFMo — Engineering Large Foundation Models for Enterprise Integration — lorsque FTP et l'ISEP ont reçu les partenaires internationaux de Finlande, de Belgique et d'Espagne pour trois jours de travail, de partage et de vision commune.",
            "ELFMo répond à une urgence que les organisations connaissent bien : la pression croissante pour intégrer les technologies d'Intelligence Artificielle, en particulier les Large Foundation Models, dans leurs processus métier, sans compromettre la sécurité, la confidentialité ni la conformité légale. Le potentiel de ces technologies est immense, mais les défis le sont tout autant : transparence des systèmes, protection des données, intégration aux infrastructures existantes et alignement avec le cadre réglementaire européen.",
            "C'est pour répondre à ces enjeux, avec rigueur et responsabilité, que le consortium travaille. L'objectif est clair : développer des méthodologies, des outils et des bonnes pratiques permettant aux entreprises d'adopter des solutions d'IA de manière durable, sûre et réellement efficace.",
            "Tout au long de la plénière, les partenaires ont présenté les avancées réalisées, partagé les résultats, confronté leurs points de vue et tracé le chemin des prochaines étapes. Les sessions techniques et de gestion de projet ont été complétées par un événement de dissémination, où chaque organisation a eu l'occasion de présenter ses domaines d'expertise et sa contribution singulière au projet — un moment qui a renforcé non seulement la connaissance mutuelle, mais aussi le sentiment d'un objectif collectif qui distingue les meilleurs consortia européens.",
            "Il existe une dimension des projets internationaux qui est rarement mise en avant, mais qui détermine en grande partie leur réussite : les relations entre les personnes qui les construisent. Réunir des équipes de quatre pays, avec des cultures, des langues et des façons de travailler différentes, est un exercice permanent d'adaptation et d'écoute. C'est précisément pour cela que les rencontres en présentiel sont irremplaçables — non comme un simple rituel d'agenda, mais comme l'espace où la confiance se construit, où les malentendus se dissipent et où les idées les plus inattendues peuvent émerger.",
            "Avec cette conviction, FTP a voulu aller au-delà de l'agenda technique. À la fin de la première journée de travail, les partenaires internationaux ont été invités à découvrir Porto autrement, lors d'une visite informelle de quelques lieux emblématiques de l'Invicta, entre histoires, curiosités et cette hospitalité que la ville offre à celles et ceux qui la découvrent pour la première fois. Un geste simple, mais avec un impact qu'aucune plateforme numérique ne peut reproduire : faire en sorte que chaque partenaire se sente non seulement collaborateur du projet, mais partie prenante de quelque chose de plus grand.",
            "Cette plénière a représenté une étape importante dans la consolidation d'ELFMo, tant par les résultats techniques obtenus que par le renforcement de l'esprit d'équipe qui soutient un projet de cette envergure. Pour FTP, ce fut aussi une affirmation de son rôle de partenaire actif dans un consortium européen d'innovation : capable de mener des conversations difficiles, d'accueillir avec générosité et de démontrer, concrètement, que la technologie la plus avancée ne produit un impact réel que lorsqu'il existe de la confiance entre les personnes qui la développent.",
            "Parce que l'innovation ne naît pas seulement de la technologie. Elle naît de la collaboration, de la proximité et de la capacité à construire ensemble des solutions qu'aucun partenaire ne pourrait atteindre seul.",
          ],
        },
        tag: "ELFMO · GenAI",
      },
    ],
  },
  about: {
    kicker: "/ À propos",
    titleHtml:
      "Innover à l'intersection de<br/><em>la gestion d'entreprise</em> &amp; <em>l'intelligence artificielle</em>.",
    whoTitle: "Qui Nous Sommes",
    whoHtml:
      "FTP est une entreprise technologique portugaise basée à Porto, avec une équipe pluridisciplinaire d'environ 30 spécialistes. Fondée en 1999 pour implémenter et supporter le logiciel de gestion Cegid PHC, elle a évolué vers un fournisseur technologique global. Notre portefeuille couvre aujourd'hui <strong>l'intelligence artificielle</strong>, <strong>le développement logiciel sur mesure</strong>, <strong>la cybersécurité</strong> et <strong>l'administration d'infrastructures</strong>.",
    missionTitle: "Notre Mission",
    missionHtml:
      "Transformer la recherche scientifique et académique en <em>solutions d'entreprise</em> appliquées et à fort impact.",
    stats: [
      { value: "~30", label: "Spécialistes" },
      { value: "Global", label: "Présence" },
      { value: "IA & R&D", label: "Focus" },
      { value: "Full-Stack", label: "Services" },
    ],
    securityTitle: "Excellence Opérationnelle & Sécurité",
    securityHtml:
      "FTP a évolué vers un cadre mature et documenté de sécurité de l'information, aligné sur les principes ISO/IEC 27001 et le RGPD. Pour FTP, la sécurité est une priorité stratégique qui garantit confiance contractuelle et résilience opérationnelle à ses clients.",
    securityBadges: ["ISO/IEC 27001", "RGPD", "AI Act aware", "PME Líder", "DGERT certified"],
    reachTitle: "Portée Globale",
    reachHtml:
      "De Porto vers le monde. Des consortia actifs de R&D et des plénières terrain en <strong>Portugal</strong>, <strong>Türkiye</strong>, <strong>Corée du Sud</strong>, <strong>Espagne</strong>, <strong>Roumanie</strong>, <strong>Belgique</strong> et <strong>Finlande</strong>.",
    reachBadges: ["Porto · Siège", "Ankara · EARS", "Daegu · EXPAI", "Helsinki · ELFMO", "Madrid · EXPAI"],
  },
  precontact: {
    kicker: "/ Confiance Entreprise",
    lines: ["IA", "FIABLE"],
    strapHtml: "Là où naît la confiance numérique. Grandir ensemble.",
  },
  contact: {
    kicker: "/ Collaborons",
    titleHtml: "Lancez un partenariat avec le<br/><em>FTP AI Lab</em>.",
    lede:
      "Prenez contact avec l'équipe du FTP AI Lab. Nous sommes prêts à construire le futur ensemble.",
    formTitle: "Démarrer un Partenariat",
    fields: {
      firstName: "Prénom",
      lastName: "Nom",
      organization: "Organisation",
      email: "Email",
      subject: "Sujet",
      message: "Message",
    },
    subjectPlaceholder: "Sélectionnez un sujet…",
    subjects: {
      partnership: "Partenariat",
      rd: "Demande R&D",
      solutions: "Solutions",
    },
    sendMessage: "Envoyer le Message",
    info: {
      general: "Informations Générales",
      location: "Notre Localisation",
      channels: "Canaux",
      addressLines: [
        "Rua Professor Correia de Sá 56",
        "4445-570 Ermesinde",
        "Porto · Portugal",
      ],
    },
    strapHtml: "<em>Là où la confiance numérique commence.</em> Grandir <em>ensemble</em>.",
  },
  footer: {
    brandSuffix: "· Lab",
    taglineHtml:
      "Digital Innovation Studio.<br/>Une maison portugaise de R&amp;D construisant, avec discrétion, la couche invisible.",
    blogTitle: "Derniers Articles du Blog",
    blogLinks: [
      "Innovation à Ankara · EARS",
      "Expansion en Corée du Sud · EXPAI",
      "ELFMO à Porto",
    ],
    referencesTitle: "Références Institutionnelles",
    references: ["ITEA ↗", "ANI · Agência Nacional de Inovação ↗", "Union Européenne ↗"],
    papersTitle: "Derniers Articles",
    legalRightsHtml:
      '© <span data-year>2026</span> FTP — Soluções Empresariais. Tous droits réservés.',
    legalLanguages: "FR · PT · EN · ES",
    legalStandards: "ISO/IEC 27001 · RGPD · AI Act aware",
    legalOrigin: "Fait à Porto.",
  },
};
