window.FTP_TRANSLATIONS = window.FTP_TRANSLATIONS || {};

window.FTP_TRANSLATIONS.pt = {
  meta: {
    title: "FTP Lab — Onde a Investigação se Torna Realidade",
    description:
      "Uma viagem guiada pelo scroll ao laboratório de I&D da FTP. Cinco projetos internacionais. Doze especialistas. Do Porto para o mundo.",
  },
  ui: {
    themeToggle: "Alternar modo claro / escuro",
    languageLabel: "Selecionar idioma",
    languageNames: {
      en: "English",
      pt: "Português",
      es: "Español",
      fr: "Français",
    },
    nav: {
      top: "Topo",
      solutions: "Soluções",
      projects: "Projetos",
      team: "Equipa",
      blog: "Blog",
      about: "Sobre Nós",
      contact: "Contactos",
    },
  },
  labels: {
    liveDemo: "Demonstração ao vivo",
    visitAcademy: "Visitar Site da Academia ↗",
    talkToUs: "Entrar em Contacto →",
    solutionBlocks: {
      what: "O Que Faz",
      why: "Porque Importa",
      key: "Capacidades-Chave",
      how: "Como Funciona",
      adapt: "Pensado para Adaptação",
    },
    problem: "Problema",
    solution: "Solução",
  },
  hud: {
    scanning: "A ANALISAR",
    coords: "N 41.21° · W 8.55°",
    location: "PORTO / PT",
    stageLabels: [
      "PERCURSO NEURAL · ENTRADA",
      "DESPERTAR · CÓRTEX",
      "MANIFESTO · PROFUNDO",
      "O LAB · NÚCLEO",
      "PROJETO · EARS",
      "PROJETO · EXPAI",
      "PROJETO · ELFMO",
      "PROJETO · CAPE",
      "PROJETO · OMD",
      "ATLAS · 5 CIDADES",
      "AS MENTES",
      "CONVITE",
    ],
  },
  journey: {
    awakening: {
      kicker: ["I&D", "Studio", "Desde 1999"],
      titleHtml:
        '<span class="display__line"><span data-cue>Da</span> <span data-cue>investigação</span></span><span class="display__line"><span data-cue>para a</span> <em data-cue>realidade.</em></span>',
      ledeHtml:
        "Somos a <strong>FTP</strong> — um laboratório português que transforma investigação científica em sistemas empresariais aplicados e de elevado impacto.",
    },
    manifesto: {
      chapter: "/ Capítulo 01 · Manifesto",
      bodyHtml:
        "Nós não construímos apenas software. Construímos a camada invisível onde a <em>investigação</em> se torna num botão que se pode premir, numa decisão que uma máquina consegue <em>explicar</em>, num custo que desaparece em silêncio.",
      signature: "— FTP / Departamento de I&D · Porto",
    },
    lab: {
      chapter: "/ Capítulo 02 · O Lab",
      titleHtml: "Um <em>laboratório</em><br/>com forma de empresa.",
      stats: [
        { value: "27", suffix: "anos", label: "desde 1999" },
        { value: "5", suffix: "projetos", label: "consórcios ativos de I&D" },
        { value: "8", suffix: "países", label: "PT · TR · KR · ES · RO" },
        { value: "5", suffix: "artigos", label: "IEEE · Procedia · 2025–26" },
      ],
    },
    projects: [
      {
        chapter: "/ Capítulo 03 · Projeto I de V",
        tag: "ITEA · Norte 2030 · 10 parceiros",
        status: "Em curso · 2023–2026",
        title: "EARS",
        sub: "Recomendação Inteligente para Serviços Remotos",
        bodyHtml:
          "Uma estrutura federada e explicável de recomendação que aprende em <em>nove setores</em> — IT, saúde, justiça, e-commerce, telemarketing, indústria, logística, eletrónica e software — e <em>explica</em> cada sugestão que produz. Open-source. Privacidade desde a conceção.",
        chips: [
          "Sistemas de Recomendação",
          "IA Explicável",
          "Aprendizagem Federada",
          "Context-Aware",
        ],
      },
      {
        chapter: "/ Projeto II de V",
        tag: "ITEA 4 · Smart Industry · 10 parceiros",
        status: "Em curso · 2024–2026",
        title: "EXPAI",
        sub: "Smart Industry · IA Explicável para Controlo Industrial",
        bodyHtml:
          "A fechar a distância entre a <em>IA caixa-preta</em> e os ambientes industriais de alta precisão. Visão por Computador sobre fluxos de sensores, retopologia 3D automática, robôs móveis autónomos — tudo sob uma camada XAI que torna cada decisão <em>auditável</em>.",
        chips: ["XAI", "Visão por Computador", "Robótica AMR", "Retopologia 3D"],
      },
      {
        chapter: "/ Projeto III de V",
        tag: "ITEA · Norte 2030 · 14 parceiros",
        status: "Em curso · 2024–2027",
        title: "ELFMO",
        sub: "Enterprise Large Foundation Models",
        bodyHtml:
          "Um enquadramento de engenharia baseado em risco que permite às empresas adotar <em>foundation models</em> sem perder controlo sobre dados, propriedade intelectual ou conformidade. Integração modular com ERP. Chatbot especializado em Cegid PHC. Modelos fundacionais dentro dos sistemas que o negócio já utiliza.",
        chips: ["IA Generativa", "Adaptação LFM", "Integração ERP", "RGPD · AI Act"],
      },
      {
        chapter: "/ Projeto IV de V",
        tag: "ITEA 4 · 15 parceiros · 5 países",
        status: "Em curso · 2024–2027",
        title: "CAPE",
        sub: "Assistente Cognitivo para Ambientes Phygital",
        bodyHtml:
          "Uma plataforma de retalho que cruza IA, IoT, blockchain e deep learning — cinco casos de uso que vão da <em>segurança inteligente em fabrico</em> à operação de loja, bem-estar de colaboradores e comércio personalizado.",
        chips: ["IoT", "Blockchain", "Deep Learning", "Visão por Computador"],
      },
      {
        chapter: "/ Projeto V de V",
        tag: "Cross-domain · 8 parceiros",
        status: "Concluído · 2022–2023",
        title: "OMD",
        sub: "Gestão Cognitiva de Procura de Serviços",
        bodyHtml:
          "Compreensão de voz e texto aplicada a um caso real de e-commerce com a Nimco, empresa portuguesa de calçado. Prova de que a <em>gestão de serviço orientada por NLP</em> pode superar, em silêncio, o ticketing baseado em regras.",
        chips: ["NLP", "ML", "Speech-to-Text"],
      },
    ],
    atlas: {
      chapter: "/ Capítulo 04 · Atlas",
      titleHtml: "Do Porto<br/>para o <em>mundo</em>.",
      pins: [
        { city: "Porto", label: "Sede" },
        { city: "Madrid", label: "EXPAI" },
        { city: "Bucareste", label: "OMD · EARS" },
        { city: "Ancara", label: "EARS · EXPAI" },
        { city: "Daegu", label: "plenário EXPAI" },
        { city: "Canadá", label: "" },
        { city: "Ucrânia", label: "" },
        { city: "Grã-Bretanha", label: "" },
      ],
      copy:
        "Plenários em Ancara (nov. '25) e Daegu (abr. '26). Próxima paragem: uma demonstração unificada para revisão ITEA.",
    },
    minds: {
      chapter: "/ Capítulo 05 · As Mentes",
      titleHtml: "As pessoas<br/>por trás do <em>pensamento</em>.",
      quotes: [
        {
          quote:
            "As empresas que integram IA aplicada não reagem ao mercado — antecipam-no.",
          captionHtml: "<strong>Fábio</strong> · <span>Chefe de Departamento</span>",
        },
        {
          quote: "Com IA, o limite já não é o tempo — é a imaginação.",
          captionHtml: "<strong>Teixeira</strong> · I&amp;D · ELFMO",
        },
        {
          quote:
            "A inovação nasce quando transformamos esforço recorrente em soluções permanentes.",
          captionHtml: "<strong>Cruz</strong> · I&amp;D · Visão Computacional",
        },
        {
          quote:
            "Misturar um pouco de magia com muita inteligência para construir o futuro.",
          captionHtml: "<strong>Mariana</strong> · I&amp;D · 3D Graphics &amp; EXPAI",
        },
        {
          quote:
            "Do caos das ideias à elegância dos resultados — dando-lhes voo.",
          captionHtml: "<strong>Isabel</strong> · <span>Project Manager</span>",
        },
      ],
    },
    invite: {
      chapter: "/ Capítulo Final · Convite",
      titleHtml:
        '<span data-cue>Onde a</span><span data-cue>confiança</span><em data-cue>digital</em><span data-cue>começa.</span>',
      lede: "Continue a descer — o laboratório, em detalhe.",
    },
  },
  innovation: {
    kicker: "/ Linhas de Inovação",
    items: [
      "Visão por Computador",
      "Automação Inteligente",
      "Análise de Dados",
      "Digital Twins",
      "Sistemas Preditivos",
      "Projetos de I&D Aplicada",
      "3D & Computação Gráfica",
    ],
  },
  solutions: {
    header: {
      kicker: "/ Soluções & Serviços",
      titleHtml: "Soluções Inovadoras &amp; Serviços Profissionais",
      lede:
        "Impulsionando a transformação digital através de IA avançada e engenharia de software especializada.",
    },
    items: [
      {
        id: "sol-recommender",
        ariaLabel: "Recomendador Híbrido Explicável — demonstração ao vivo",
        title: "Recomendador Híbrido Explicável",
        tag: "e-commerce · cross-domain · WordPress",
        lead:
          "Um sistema híbrido de recomendação explicável que entrega sugestões personalizadas com raciocínio claro e baseado em evidência.",
        intro: [
          "O nosso sistema foi desenhado para oferecer recomendações altamente relevantes e, ao mesmo tempo, <em>explicações claras e úteis</em> para cada decisão.",
          "Em muitos sistemas, a recomendação surge como um resultado opaco. Aqui, combinamos modelação avançada com explicabilidade integrada para que cada saída seja <em>precisa e interpretável</em>.",
        ],
        blocks: [
          {
            key: "what",
            content: [
              {
                type: "p",
                html: "O sistema analisa várias camadas de sinais do utilizador e do produto para gerar recomendações personalizadas, incluindo:",
              },
              {
                type: "ul",
                items: [
                  "Histórico de interação",
                  "Padrões de compra e conversão",
                  "Sinais colaborativos entre utilizadores semelhantes",
                ],
              },
              {
                type: "p",
                html: "Cada resultado é acompanhado por uma explicação curta, em linguagem natural, ancorada nos dados usados no ranking.",
              },
            ],
          },
          {
            key: "why",
            content: [
              {
                type: "p",
                html: "Perceber <em>porque</em> algo é recomendado aumenta a confiança, melhora a experiência e apoia melhores decisões. O sistema garante que:",
              },
              {
                type: "ul",
                items: [
                  "As recomendações se mantêm consistentes e justificáveis",
                  "As explicações refletem o comportamento real do modelo",
                  "Os resultados podem ser validados e confiados",
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
                  "Recomendações personalizadas com base em comportamento e contexto",
                  "Explicabilidade integrada com raciocínio baseado em evidência",
                  "Modelo híbrido com dados históricos, comportamentais e colaborativos",
                  "Saída em linguagem natural com explicações legíveis",
                  "Arquitetura reutilizável e transversal ao domínio",
                ],
              },
            ],
          },
          {
            key: "how",
            content: [
              {
                type: "p",
                html: "O sistema usa um modelo híbrido para ordenar itens a partir de várias fontes de sinal. Um modelo de linguagem traduz a evidência estruturada em explicações curtas, garantindo recomendações <em>orientadas por dados</em> e <em>compreensíveis</em>.",
              },
            ],
          },
          {
            key: "adapt",
            content: [
              {
                type: "p",
                html: "Esta solução funciona como camada base para produtos específicos. O desenho modular permite integração em plataformas diferentes sem perder desempenho nem explicabilidade.",
              },
            ],
          },
        ],
        chips: [
          "Sistemas de Recomendação",
          "IA Explicável",
          "Modelação Híbrida",
          "Saída em Linguagem Natural",
          "Transversal ao Domínio",
        ],
      },
      {
        id: "sol-emotion",
        ariaLabel: "Reconhecimento Multimodal de Emoções — demonstração ao vivo",
        title: "Reconhecimento Multimodal de Emoções",
        tag: "experiência do cliente · workplace",
        lead:
          "Prosódia da voz, microexpressões faciais e conteúdo falado fundidos num perfil emocional unificado — em tempo real, com privacidade e pronto para federated learning.",
        intro: [
          "O nosso sistema lê o <em>sinal completo</em> que uma pessoa transmite: como soa, como o rosto se move e o que diz. Em vez de depender de um único canal, funde áudio, vídeo e texto num único estado emocional.",
          "A arquitetura foi desenhada para contextos sensíveis: a inferência pode correr no edge, os modelos são <em>federated-ready</em> e o mesmo motor funciona em cenários de atendimento e de ambiente de trabalho.",
        ],
        blocks: [
          {
            key: "what",
            content: [
              {
                type: "ul",
                items: [
                  "Analisa tom, ritmo e prosódia da voz",
                  "Lê expressões e microexpressões faciais",
                  "Processa conteúdo falado e metadados contextuais",
                  "Prevê categoria e intensidade emocional",
                ],
              },
            ],
          },
          {
            key: "why",
            content: [
              {
                type: "p",
                html: "Melhora a satisfação do cliente ao adaptar respostas ao <em>contexto emocional</em> em tempo real. Deteta stress, desconforto e desengajamento cedo. Apoia o bem-estar dos colaboradores com monitorização contínua e opt-in.",
              },
            ],
          },
          {
            key: "key",
            content: [
              {
                type: "ul",
                items: [
                  "Deteção multimodal em áudio, vídeo e texto",
                  "Inferência em tempo real para interações ao vivo",
                  "Pronto para aprendizagem federada sem centralizar dados",
                  "Desenho orientado à privacidade com processamento no dispositivo",
                  "Taxonomias emocionais configuráveis por setor",
                ],
              },
            ],
          },
          {
            key: "how",
            content: [
              {
                type: "p",
                html: "Três encoders especializados extraem sinais de voz, rosto e texto em paralelo. Uma camada de fusão combina tudo num <em>embedding emocional unificado</em>, que é depois convertido em previsões de categoria e intensidade.",
              },
            ],
          },
          {
            key: "adapt",
            content: [
              {
                type: "p",
                html: "Pode ser integrado num contact center, numa experiência de retalho, num programa de bem-estar interno ou num estudo clínico. O mesmo núcleo adapta-se com fine-tuning leve e já sustenta o nosso trabalho no <em>EARS</em>.",
              },
            ],
          },
        ],
        chips: [
          "Deteção Multimodal",
          "Inferência em Tempo Real",
          "Pronto para Aprendizagem Federada",
          "Privacy-Aware",
          "Áudio · Vídeo · Texto",
        ],
      },
      {
        id: "sol-erp",
        ariaLabel: "Assistente Virtual ERP — demonstração ao vivo",
        title: "Assistente Virtual ERP",
        tag: "Cegid PHC · Sage · Cegid Primavera",
        lead:
          "Uma interface conversacional inteligente que simplifica a forma como as empresas interagem com os seus sistemas de gestão — faturas, relatórios, previsões e respostas, sem menus.",
        intro: [
          "O nosso Assistente Virtual ERP transforma o ERP de uma <em>ferramenta orientada por menus</em> num <em>parceiro conversacional</em>. Em vez de navegar por formulários e relatórios, o utilizador pergunta e o sistema responde com base nos seus próprios dados.",
          "O assistente liga-se diretamente ao Cegid PHC, Sage, Cegid Primavera e outros ERPs, juntando <em>compreensão de linguagem natural</em> com lógica de negócio específica para garantir respostas contextuais e operacionalmente corretas.",
        ],
        blocks: [
          {
            key: "what",
            content: [
              {
                type: "ul",
                items: [
                  "Gera automaticamente faturas e documentos financeiros",
                  "Produz relatórios periódicos e resumos de desempenho",
                  "Entrega previsões com IA a partir de histórico",
                  "Responde a perguntas de negócio em linguagem natural",
                ],
              },
            ],
          },
          {
            key: "why",
            content: [
              {
                type: "p",
                html: "Reduz tempo gasto em tarefas administrativas repetitivas. Torna os dados acessíveis a <em>utilizadores não técnicos</em>. Permite decisões mais rápidas e informadas. Entrega <em>insights proativos</em> em vez de reporting reativo.",
              },
            ],
          },
          {
            key: "key",
            content: [
              {
                type: "ul",
                items: [
                  "Camada NLP sobre o ERP — fale com o negócio em linguagem simples",
                  "Geração automática de documentos",
                  "Previsão com IA treinada no histórico do cliente",
                  "Agregação de dados entre módulos e sistemas",
                  "Conectores API ERP personalizados — Cegid PHC, Sage, Cegid Primavera e mais",
                ],
              },
            ],
          },
          {
            key: "how",
            content: [
              {
                type: "p",
                html: "Uma camada de linguagem natural interpreta a intenção, mapeia-a para operações nativas do ERP e orquestra os módulos certos para responder ou agir. As previsões e os resumos são produzidos por modelos treinados nos próprios dados do cliente.",
              },
            ],
          },
          {
            key: "adapt",
            content: [
              {
                type: "p",
                html: "Construído como camada modular por cima do ERP existente, expande sem perturbar. Novos conectores, regras e fontes de dados podem ser acrescentados de forma incremental.",
              },
            ],
          },
        ],
        chips: [
          "NLP sobre ERP",
          "Documentos Automáticos",
          "Previsão com IA",
          "Agregação Multi-source",
          "API ERP Customizada",
        ],
      },
      {
        id: "sol-agents",
        ariaLabel: "Sistemas de Agentes Autónomos — demonstração ao vivo",
        title: "Sistemas de Agentes Autónomos",
        tag: "automação · orquestração",
        lead:
          "Sistemas com IA que executam tarefas de forma independente, tomam decisões informadas e coordenam operações com intervenção humana mínima.",
        intro: [
          "Os nossos Sistemas de Agentes Autónomos transformam automações isoladas numa <em>força de trabalho coordenada e orientada a objetivos</em>. Cada agente assume uma parte da operação — planeia, usa ferramentas e ajusta-se com base em feedback.",
          "Os agentes colaboram através de uma camada partilhada de orquestração que acompanha estado, handoffs e conflitos. O resultado é um sistema que funciona mais como uma <em>equipa</em> do que como um script.",
        ],
        blocks: [
          {
            key: "what",
            content: [
              {
                type: "ul",
                items: [
                  "Planeia, executa e ajusta ações com base em feedback",
                  "Opera em vários sistemas e APIs",
                  "Gere cadeias de tarefas sequenciais e condicionais",
                  "Aprende e melhora com feedback contextual",
                ],
              },
            ],
          },
          {
            key: "why",
            content: [
              {
                type: "p",
                html: "Adapta-se dinamicamente ao contexto <em>sem intervenção manual</em>. Integra sistemas em workflows unificados. Atua de forma proativa e reduz overhead operacional e erro humano.",
              },
            ],
          },
          {
            key: "key",
            content: [
              {
                type: "ul",
                items: [
                  "Execução autónoma de tarefas longas e multi-step",
                  "Integração por API com serviços internos e externos",
                  "Workflows com branching e recuperação",
                  "Aprendizagem adaptativa a partir de resultados e feedback humano",
                  "Comportamento self-managing na distribuição de trabalho",
                ],
              },
            ],
          },
          {
            key: "how",
            content: [
              {
                type: "p",
                html: "Um orquestrador central decompõe o objetivo em tarefas e entrega-as a agentes especializados. Cada agente raciocina sobre as suas ferramentas, chama APIs e reporta. O orquestrador mantém uma <em>memória partilhada</em> de estado e resultados.",
              },
            ],
          },
          {
            key: "adapt",
            content: [
              {
                type: "p",
                html: "É um framework modular: novos agentes, ferramentas e domínios podem ser acrescentados sem reescrever o núcleo. O mesmo motor é reutilizado em automações de suporte, operações e back-office, bem como no <em>EARS</em> e no <em>ELFMO</em>.",
              },
            ],
          },
        ],
        chips: [
          "Execução Autónoma",
          "Integração API",
          "Workflows Multi-Step",
          "Aprendizagem Adaptativa",
          "Self-Managing",
        ],
      },
      {
        id: "sol-retopo",
        ariaLabel: "Conversor de Retopologia — demonstração ao vivo",
        title: "Conversor de Retopologia",
        tag: "pipelines 3D · jogos · visualização industrial",
        lead:
          "Transforma modelos high-poly em malhas low-poly otimizadas, preservando detalhe essencial e fidelidade visual. Topologia limpa baseada em quads, adequada a animação e tempo real.",
        intro: [
          "O nosso Conversor de Retopologia pega em geometria densa, proveniente de scans ou escultura, e reconstrói-a como topologia <em>limpa e pronta para animação</em> — automaticamente.",
          "O sistema foi pensado para pipelines de produção: os estúdios podem inserir assets brutos e receber malhas prontas para rigging, baking, rendering em tempo real ou simulação industrial, sem semanas de limpeza manual.",
        ],
        blocks: [
          {
            key: "what",
            content: [
              {
                type: "ul",
                items: [
                  "Reduz automaticamente a complexidade da malha",
                  "Preserva geometria e forma essenciais",
                  "Mantém a fidelidade visual ao longo do processo",
                  "Gera topologia limpa baseada em quads",
                ],
              },
            ],
          },
          {
            key: "why",
            content: [
              {
                type: "p",
                html: "Corta tempo de produção e esforço manual. Garante <em>qualidade consistente de topologia</em> ao longo do pipeline. Permite iterar e escalar mais depressa em videojogos, cinema e visualização industrial.",
              },
            ],
          },
          {
            key: "key",
            content: [
              {
                type: "ul",
                items: [
                  "Retopologia totalmente automática",
                  "Saída em quads pronta para animação e subdivisão",
                  "Preservação de geometria e silhueta entre LODs",
                  "Pronto para motores em tempo real — Unreal, Unity e web 3D",
                  "Processamento em lote para bibliotecas de assets",
                ],
              },
            ],
          },
          {
            key: "how",
            content: [
              {
                type: "p",
                html: "O pipeline analisa curvatura, linhas de destaque e fluxo topológico da malha de entrada e gera uma nova <em>superfície dominante em quads</em> alinhada com essas características. UVs e normais são transferidos da fonte para manter o aspeto original com muito menos peso.",
              },
            ],
          },
          {
            key: "adapt",
            content: [
              {
                type: "p",
                html: "O conversor é modular: pode entrar em workflows DCC como Blender, Maya ou Houdini, ou ser chamado como serviço dentro de pipelines próprios. O mesmo motor sustenta trabalho no <em>EXPAI</em> e noutros projetos empresariais e de consumo.",
              },
            ],
          },
        ],
        chips: [
          "Retopologia Automática",
          "Saída em Quads",
          "Preservação de Geometria",
          "Pronto para Tempo Real",
        ],
      },
    ],
    experts: {
      kicker: "/ Serviços Especializados",
      academy: {
        title: "FTP Academy",
        cta: "Visitar Site da Academia ↗",
        paragraphs: [
          "A FTP Academia é uma plataforma de aprendizagem inovadora concebida para capacitar os profissionais do futuro. Construída sobre uma forte base de aprendizagem prática e desenvolvimento contínuo, a academia oferece programas de formação de alta qualidade em diversas áreas tecnológicas. Quer esteja a dar os primeiros passos no mundo digital ou seja um profissional experiente que procura expandir os seus conhecimentos, a FTP Academia disponibiliza percursos de aprendizagem personalizados para apoiar o seu crescimento.",
          "A nossa missão é tornar a educação acessível, relevante e alinhada com as exigências em constante evolução do mercado tecnológico. Combinamos conteúdos atualizados com experiência prática, garantindo que os formandos não só adquirem conhecimento como também desenvolvem as competências práticas necessárias para o aplicar em cenários reais. Orientados por uma equipa de instrutores altamente qualificados, os alunos beneficiam de apoio contínuo, mentoria e das ferramentas necessárias para transformar o potencial em resultados tangíveis.",
          "Na FTP Academia, acreditamos que a aprendizagem deve ser inclusiva e orientada para a oportunidade. Os nossos programas estão abertos a candidatos entre os 18 e os 40 anos, sem pré-requisitos académicos rigorosos para os cursos de nível iniciante. O que verdadeiramente importa é o interesse genuíno pela tecnologia e uma forte motivação para aprender e evoluir. Embora alguns cursos possam recomendar competências básicas de navegação na internet, a nossa abordagem garante que cada formando pode progredir ao seu próprio ritmo.",
          "Ao explorar o nosso catálogo de cursos, os alunos dão o primeiro passo para investir no seu futuro. Na FTP Academia, o conhecimento é mais do que um ativo — é o caminho para o sucesso, e estamos empenhados em percorrê-lo lado a lado com cada formando.",
        ],
        chips: ["Aprendizagem Prática", "Percursos Ajustados", "Certificação DGERT", "Mentoria"],
      },
      appstudio: {
        title: "Appstudio",
        cta: "Ver detalhes →",
        paragraphs: [
          "O Appstudio é o ambiente dedicado da FTP para conceber, prototipar e entregar aplicações de negócio personalizadas com rapidez. Construído em torno de componentes modulares e práticas modernas de desenvolvimento, permite à nossa equipa traduzir requisitos de negócio complexos em produtos digitais funcionais, sem os longos prazos tradicionalmente associados ao software à medida.",
          "Desde ferramentas internas e dashboards até portais para clientes e aplicações móveis, o Appstudio oferece uma base flexível que se adapta à realidade de cada cliente. Combinamos blocos reutilizáveis com lógica de negócio personalizada, garantindo que cada aplicação não só responde às necessidades operacionais da organização como também escala à medida que essas necessidades evoluem.",
          "A nossa abordagem é colaborativa e iterativa. Trabalhamos lado a lado com os stakeholders desde a fase inicial de descoberta, validando ideias através de protótipos rápidos e refinando a solução com feedback contínuo. Esta metodologia reduz o risco, encurta os ciclos de entrega e assegura que o produto final está verdadeiramente alinhado com as pessoas que o irão utilizar todos os dias.",
          "O Appstudio é mais do que um serviço de desenvolvimento — é um modelo de parceria. Ao combinar competência técnica, sensibilidade de design e um profundo conhecimento dos processos de negócio, ajudamos as organizações a transformar ideias em aplicações robustas e sustentáveis, que geram valor real e mensurável.",
        ],
        capabilities: [
          { title: "Ferramentas internas e dashboards", text: "Aplicações operacionais que tornam o dia a dia das suas equipas mais fluido." },
          { title: "Bots de automação e notificações", text: "Agentes inteligentes que monitorizam os seus dados e agem — alertas, seguimentos, escalonamentos." },
          { title: "Portais e aplicações web para clientes", text: "Experiências com a sua marca para os seus clientes interagirem com os seus serviços." },
          { title: "Aplicações móveis", text: "Apps iOS e Android ligadas aos seus sistemas existentes." },
          { title: "Integrações com o seu ERP", text: "Ligamos o Cegid PHC e outros sistemas ao resto da sua infraestrutura digital." },
          { title: "Workflows orientados por dados", text: "Pipelines que transformam dados operacionais em ações claras e concretas." },
        ],
      },
      processTitle: "Como trabalhamos",
      steps: [
        {
          title: "Descoberta",
          text: "Sentamo-nos com a sua equipa para compreender o processo, os pontos de dor e o objetivo.",
        },
        {
          title: "Protótipo",
          text: "Transformamos a ideia rapidamente num protótipo funcional para reagir a algo real.",
        },
        {
          title: "Construir & iterar",
          text: "Refinamos a solução com feedback contínuo até encaixar na operação.",
        },
        {
          title: "Lançar & apoiar",
          text: "Colocamos em produção, formamos a sua equipa e acompanhamos a evolução da aplicação.",
        },
      ],
      trustedTitle: "/ Clientes que Confiam em Nós",
    },
  },
  appstudioPage: {
    meta: {
      title: "Appstudio — Aplicações à medida construídas para o seu negócio",
      description:
        "Explore o Appstudio, o serviço da FTP para ferramentas internas, dashboards, automações, portais, apps móveis e workflows ligados ao ERP.",
    },
    backButton: "Voltar",
    backLabel: "Voltar ao FTP Lab",
    backToSolutions: "Voltar aos serviços",
    heroTitle: "Aplicações à medida, construídas para o seu negócio",
    heroText:
      "De ferramentas internas e bots inteligentes a dashboards e portais para clientes, desenhamos e construímos software à medida que se adapta à forma como a sua equipa realmente trabalha.",
    snapshotTitle: "O que o Appstudio cobre",
    overviewTitle: "O que é o Appstudio?",
    overviewText:
      "O Appstudio é o serviço de desenvolvimento de aplicações à medida da FTP. Trabalhamos em parceria com cada cliente para conceber, prototipar e entregar software personalizado — aplicações moldadas aos seus processos, dados e objetivos, em vez de forçar o negócio a adaptar-se a um produto genérico.",
    overviewText2:
      "Cada projeto é único. Combinamos práticas modernas de desenvolvimento com blocos reutilizáveis para avançar rapidamente sem comprometer qualidade, escalabilidade ou manutenção.",
    capabilitiesTitle: "O que podemos construir",
    exampleLabel: "Caso de uso",
    exampleTitle: "Bot de seguimento comercial",
    exampleText:
      "Imagine um bot que monitoriza o seu CRM e identifica potenciais clientes a quem foi prometido um contacto que nunca chegou a acontecer. O bot envia uma notificação ao comercial responsável a lembrar para ligar ou visitar o cliente. Se mesmo assim o comercial não agir num prazo definido, a dona da empresa recebe uma notificação para falar com ele e retomar o contacto antes que a oportunidade se perca.",
    exampleText2:
      "É exatamente este tipo de aplicação pequena e direcionada que recupera receita de forma silenciosa e mantém a equipa responsável — para isto serve o Appstudio.",
    ctaTitle: "Tem uma ideia em mente?",
    ctaText:
      "Diga-nos o problema que quer resolver. Ajudamo-lo a transformá-lo numa aplicação real.",
    ctaButton: "Fale connosco",
  },
  projects: {
    header: {
      kicker: "/ Projetos Internacionais de I&D",
      titleHtml: "Cinco projetos.<br/>Cinco países. <em>Um pulso de consórcio.</em>",
      lede:
        "As colaborações internacionais ativas e recentes do laboratório — o problema que cada uma quis resolver e a solução que colocámos no terreno.",
    },
    items: [
      {
        id: "omd",
        statusClass: "done",
        title: "OMD",
        subtitle: "Gestão Cognitiva de Procura de Serviços",
        status: "Concluído · 2022–2023",
        meta: "Cross-domain · 8 parceiros",
        problemHtml:
          "As organizações de serviços modernas enfrentam uma complexidade crescente na gestão de pedidos recebidos através de múltiplos canais e domínios. Os sistemas tradicionais de e-commerce, ticketing e suporte enfrentam dificuldades com: alocação ineficiente de pedidos aos produtos, serviços ou especialistas certos; custos operacionais elevados devido a tratamento repetido e atrasos; falta de priorização e encaminhamento inteligentes; capacidade limitada para compreender a intenção do utilizador em linguagem natural (texto e voz); e bases de conhecimento fragmentadas entre departamentos e setores. À medida que o suporte remoto se torna o padrão em várias indústrias, existe uma forte necessidade de um sistema inteligente e adaptativo que otimize a gestão da procura de serviços de ponta a ponta.",
        solutionHtml:
          'A framework OMD é uma plataforma cross-domain de gestão cognitiva de serviços que utiliza IA para otimizar a forma como os pedidos são recebidos, interpretados, encaminhados e resolvidos. No seu núcleo, integra Machine Learning avançado, Deep Learning, Processamento de Linguagem Natural e técnicas de otimização para automatizar e melhorar as operações de serviço. Caso de uso (<a href="https://www.nm4y.com" target="_blank" rel="noopener">Nimco</a>): um caso de uso real foi desenvolvido para a Nimco, empresa portuguesa que opera uma plataforma de e-commerce focada na venda de calçado. A solução implementou um chatbot com IA, com entrada por texto e voz, capaz de compreender as questões dos clientes em linguagem natural, extrair intenção e requisitos de produto usando modelos de NLP, aplicar filtragem baseada em ML para recomendar dinamicamente produtos, fazer correspondência contextual e melhorar a descoberta de produtos e a conversão através de recomendações personalizadas. Este caso demonstrou como a gestão cognitiva de serviços pode ser estendida para além do suporte tradicional, para personalização e recomendação em e-commerce com IA.',
        chips: ["NLP", "ML", "Speech-to-Text", "Optimization"],
        partnersPrefix: "Parceiros:",
      },
      {
        id: "ears",
        statusClass: "ongoing",
        featured: true,
        title: "EARS",
        subtitle: "Recomendação Inteligente para Serviços Remotos",
        status: "Em curso · 2023–2026",
        meta: "NORTE2030-FEDER-00542300 · ITEA 21017",
        problemHtml:
          "A aceleração dos tempos de resposta, impulsionada pela pandemia e pelas novas exigências do mercado, levou as empresas a adotar soluções automáticas para a gestão proativa dos seus processos. As ferramentas de Service Desk Management (SDM) existentes estão predominantemente focadas no setor das Tecnologias de Informação e a integração de Inteligência Artificial, Machine Learning, Deep Learning e NLP ainda se encontra em estágios iniciais. Não existe atualmente uma framework capaz de oferecer soluções de SDM adaptáveis a diferentes domínios como saúde, comércio eletrónico, marketing ou vendas.",
        solutionHtml:
          "O EARS desenvolve uma framework inovadora para a atribuição automática e eficiente do agente mais adequado a cada pedido, otimizando o suporte remoto em múltiplos domínios. Introduz sistemas de recomendação multidomínio que aprendem tanto com os dados recolhidos como com os resultados de outros sistemas de recomendação, com técnicas de IA explicável que tornam cada sugestão transparente e confiável. A plataforma processa e classifica pedidos, faz profiling avançado de clientes e agentes com base em sinais emocionais e comportamentais, constrói workflows dinâmicos para equipas de suporte e deteta tópicos, emoções e tendências a partir de dados não estruturados. O impacto é validado em nove setores — suporte de TI, justiça, saúde, eletrónica de consumo, comércio eletrónico, telemarketing, indústria, logística e desenvolvimento de software — e vários componentes são disponibilizados como código aberto para acelerar a adoção do Cognitive Service Management (CSM).",
        chips: [
          "Sistemas de Recomendação",
          "IA Explicável",
          "User Modeling",
          "Context-Aware",
          "Sistemas Adaptativos",
        ],
        partnersPrefix: "Parceiros (10):",
      },
      {
        id: "expai",
        statusClass: "ongoing",
        title: "EXPAI",
        subtitle: "SmartIndustry · IA Explicável para Controlo Industrial",
        status: "Em curso · 2024–2026",
        meta: "ITEA 4 · Smart Industry",
        problemHtml:
          "Atualmente, a transição para a Indústria Inteligente enfrenta obstáculos críticos que limitam o potencial da automação. O principal problema reside nos sistemas de Inteligência Artificial convencionais, muitas vezes vistos como 'caixas-pretas' cujas decisões são difíceis de interpretar por operadores humanos, o que gera insegurança em ambientes industriais de alta precisão. Além disso, existe uma lacuna na otimização de componentes complexos: o processo tradicional de design e modelação 3D de peças, como as escovas de carvão, é frequentemente ineficiente, resultando em modelos geométricos pesados que dificultam a simulação em tempo real e a manutenção preditiva eficaz. A falta de integração fluida entre dados de sensores, robótica autónoma e ferramentas de design impede que as empresas alcancem os níveis desejados de produtividade e redução de custos.",
        solutionHtml:
          "Para endereçar estes desafios, o projeto EXPAI apresenta uma solução baseada numa framework de IA Explicável (XAI) que promove um ambiente digital flexível, controlado e totalmente transparente. A plataforma centraliza a recolha e análise de dados de sensores, aplicando técnicas de Visão Computacional que tornam a tomada de decisão da IA compreensível. No campo do design industrial, a solução introduz a retopologia automática e a modelação procedural, permitindo transformar digitalizações 3D de alta resolução em modelos otimizados para performance em tempo real. Esta abordagem não só melhora a precisão geométrica dos componentes, como também automatiza ajustes de design e otimiza a operação de robôs móveis autónomos (AMRs), garantindo que a inovação tecnológica se traduz em ganhos diretos na eficiência da linha de produção e na fiabilidade dos sistemas.",
        chips: [
          "IA Explicável",
          "Visão por Computador",
          "Manutenção Preditiva",
          "Deteção de Anomalias",
          "Robótica AMR",
          "Retopologia 3D",
        ],
        partnersPrefix: "Parceiros (10):",
      },
      {
        id: "elfmo",
        statusClass: "ongoing",
        title: "ELFMO",
        subtitle: "Enterprise Large Foundation Models",
        status: "Em curso · 2024–2027",
        meta: "ITEA · Norte 2030",
        problemHtml:
          "As empresas querem aproveitar o potencial transformador da IA Generativa e dos Modelos de Fundação de Grande Escala (LFMs), como GPT, BARD ou FALCON, mas enfrentam custos substanciais, elevada alocação de recursos e requisitos de conformidade rigorosos. Preocupações com segurança de dados, propriedade intelectual, viés, justiça, suscetibilidade a erros, transparência e alinhamento com as regulamentações europeias (GDPR, AI Act) dificultam uma adoção fiável. Além disso, os sistemas ERP monolíticos tradicionais (Cegid PHC, Cegid Primavera, Sage X3, SAP, Microsoft Dynamics 365) limitam a personalização, escalabilidade e integração de novas capacidades de IA.",
        solutionHtml:
          "O ELFMO disponibiliza uma framework de engenharia e integração baseada em riscos que permite uma adoção rápida, informada e confiável dos LFMs em ambiente empresarial. Fornece métodos, ferramentas, benchmarks setoriais e infraestruturas open-source para a adaptação fiável dos modelos a tarefas específicas, com procedimentos de avaliação baseados em evidências e alinhados com o GDPR e o AI Act. O caso de uso nacional desenvolve uma plataforma integradora modular — evoluindo de monolítico modular para microserviços — que se conecta a ERPs existentes e adiciona capacidades de IA, e-commerce e gestão automatizada, incluindo um chatbot especializado para Cegid PHC suportado por uma API ERP personalizada.",
        chips: [
          "IA Generativa",
          "Adaptação LFM",
          "Integração ERP (Cegid PHC)",
          "Monólito Modular → Microserviços",
          "IA Open-source",
          "RGPD · AI Act",
        ],
        partnersPrefix: "Parceiros (14):",
      },
      {
        id: "cape",
        statusClass: "ongoing",
        title: "CAPE",
        subtitle: "Assistente Cognitivo para Ambientes Phygital",
        status: "Em curso · 2024–2027",
        meta: "NORTE0230-FEDER-01241200 · ITEA 4",
        problemHtml:
          "O setor do comércio a retalho desempenha um papel crucial na economia da União Europeia, mas enfrenta desafios significativos nas áreas de sustentabilidade, digitalização e competências. Sistemas de modalidade única e experiências estáticas em loja têm dificuldade em entregar interações personalizadas e adaptativas que clientes e colaboradores esperam.",
        solutionHtml:
          "O CAPE é uma iniciativa inovadora para transformar a experiência de compra e melhorar o ambiente de trabalho no retalho, através da adoção de Inteligência Artificial, Blockchain, Internet das Coisas e Aprendizagem Profunda. Cria experiências personalizadas, otimiza o desempenho de robôs e quiosques e desenvolve soluções inovadoras para gestão de recursos, rastreamento de funcionários e envolvimento do cliente. Os cinco casos de uso focam-se na melhoria da experiência do consumidor, recomendação personalizada de produtos, satisfação dos funcionários, segurança no fabrico inteligente e otimização das operações de loja.",
        chips: [
          "Inteligência Artificial",
          "Blockchain",
          "IoT",
          "Deep Learning",
          "Visão por Computador",
          "Sistemas de Recomendação",
        ],
        partnersPrefix: "Parceiros (15):",
      },
    ],
  },
  papers: {
    kicker: "/ Publicações & Conferências",
    titleHtml: "Publicações &amp; Conferências",
    lede: "",
    backedBy: "Apoiado por",
    euLabel: "União Europeia",
  },
  team: {
    kicker: "/ A Equipa do Lab",
    titleHtml:
      "As mentes que ligam<br/><em>descoberta científica</em> e <em>realidade empresarial</em>.",
    groupTitle: "Uma equipa. Nove perfis individuais.",
    groupBody:
      "Comece pela foto de grupo e clique numa das caras abaixo para abrir o vídeo e a frase dessa pessoa.",
    groupButton: "Voltar à foto de grupo",
    groupAlt: "Foto de grupo da equipa FTP AI Lab",
    memberRailTitle: "Conheça a Equipa",
    memberStripLabel: "Seletor da equipa",
    scrollPrevLabel: "Deslizar equipa para a esquerda",
    scrollNextLabel: "Deslizar equipa para a direita",
    members: [
      {
        lead: true,
        role: "Diretor de Departamento",
        name: "Fábio",
        spec: "Liderança & Estratégia de Departamento",
        quote:
          "As empresas que integram IA aplicada não reagem ao mercado — antecipam-no.",
      },
      {
        role: "Technical Lead",
        name: "André",
        spec: "FTP Academia & Estratégia Executiva",
        quote: "Os limites moldam a visão. A direção transforma imaginação em realidade.",
      },
      {
        role: "Gestora de Projeto",
        name: "Isabel",
        spec: "About Us, Blog & Gestão Geral",
        quote:
          "Do caos das ideias à elegância dos resultados — dando-lhes voo.",
      },
      {
        role: "Developer de I&D",
        name: "Teixeira",
        spec: "IA & Projeto ELFMO",
        quote: "Com IA, o limite já não é o tempo — é a imaginação.",
      },
      {
        role: "Developer de I&D",
        name: "Couto",
        spec: "IA & Projeto ELFMO",
      },
      {
        role: "Developer de I&D",
        name: "Cruz",
        spec: "Visão Computacional & E-commerce",
        quote:
          "A inovação nasce quando transformamos esforço recorrente em soluções permanentes.",
      },
      {
        role: "Developer de I&D",
        name: "Gaspar",
        spec: "Automação ERP & EARS",
        quote: "Quando todos pensam igual, então ninguém está a pensar.",
      },
      {
        role: "Developer de I&D",
        name: "Mariana",
        spec: "3D Graphics & EXPAI",
        quote:
          "Misturar um pouco de magia com muita inteligência para construir o futuro.",
      },
      {
        role: "Developer de I&D",
        name: "Tiago",
        spec: "Suporte Técnico & Desenvolvimento",
      },
    ],
  },
  blog: {
    kicker: "/ Blog",
    titleHtml: "FTP Insights &amp; Inovação",
    lede:
      "Explorando as fronteiras da IA, colaborações internacionais de I&D e tecnologia industrial.",
    posts: [
      {
        featured: true,
        category: "Projetos Internacionais",
        slug: "ears-ankara-review",
        cardDate: "2025-11-05",
        date: "04–05 nov. 2025 · Ancara, Türkiye",
        cardTitle: "Inovação em Ancara",
        title: "Projeto EARS — Reunião Plenária em Ancara",
        cardLead: "Destaques da nossa participação internacional e troca tecnológica na Turquia.",
        lead: "Nos dias 4 e 5 de novembro de 2025, Ancara foi o ponto de encontro do consórcio internacional do projeto EARS — Environment Adaptive Recommendation System. Nas instalações do parceiro ARD Group, na capital turca, as equipas reuniram-se para dois dias de trabalho focado, em que o progresso técnico deu lugar a decisões concretas e o alinhamento estratégico ganhou a solidez que só a presença permite.",
        paragraphs: [],
        detail: {
          date: "04–05 nov. 2025 · Ancara, Türkiye",
          title: "Projeto EARS — Reunião Plenária em Ancara",
          lead: "Nos dias 4 e 5 de novembro de 2025, Ancara foi o ponto de encontro do consórcio internacional do projeto EARS — Environment Adaptive Recommendation System. Nas instalações do parceiro ARD Group, na capital turca, as equipas reuniram-se para dois dias de trabalho focado, em que o progresso técnico deu lugar a decisões concretas e o alinhamento estratégico ganhou a solidez que só a presença permite.",
          paragraphs: [
            "O mundo digital é, por natureza, dinâmico. Os contextos mudam, os utilizadores evoluem e as necessidades transformam-se a um ritmo que os sistemas tradicionais dificilmente acompanham. O EARS nasce precisamente para responder a este desafio: desenvolver um sistema de recomendação capaz de interpretar dados em tempo real, adaptar-se a ambientes complexos e melhorar continuamente a experiência dos seus utilizadores.",
            "Para o conseguir, o projeto combina tecnologias de Inteligência Artificial, integração de dados e modelos de recomendação avançados, validados em diferentes casos de uso por um consórcio de parceiros internacionais com competências complementares. Uma abordagem que reconhece que soluções verdadeiramente robustas constroem-se em colaboração.",
            "A FTP marcou presença neste plenário com particular relevância, enquanto líder do WP5 — Integration, Pilots and Validation — que assegura que tudo o que é desenvolvido no projeto encontra, de facto, aplicação no mundo real. A reunião em Ancara foi uma oportunidade para avaliar o progresso das atividades em curso, clarificar questões técnicas em aberto e preparar os marcos seguintes de desenvolvimento, integração e demonstração.",
            "Há questões que resistem às videochamadas e aos fios de e-mail. A complexidade técnica do EARS — com múltiplos parceiros, componentes tecnológicos interdependentes e casos de uso distintos — exige, em determinados momentos, a mesma mesa e o mesmo espaço. Ancara foi esse momento: dois dias em que dúvidas se resolveram em minutos, decisões que aguardavam semanas foram tomadas em conjunto e a articulação entre equipas ganhou uma fluidez que a distância raramente permite.",
            "Este plenário, mais do que um ponto de situação técnica, foi um momento de consolidação das relações que sustentam o projeto, reforçando a comunicação, alinhando expectativas e criando as condições humanas para que as próximas etapas decorram com maior confiança e eficácia.",
            "O EARS é um lembrete de que a inovação tecnológica tem sempre duas dimensões inseparáveis: a qualidade das soluções que se desenvolvem e a capacidade das pessoas que as desenvolvem de trabalharem juntas, alinharem visões e transformarem conhecimento técnico em resultados com impacto real. Ancara reforçou ambas.",
            "Porque inovar é, também, integrar — tecnologias, dados, perspetivas e pessoas.",
          ],
        },
        tag: "EARS · ITEA",
      },
      {
        featured: true,
        category: "Projetos Internacionais",
        cardDate: "2026-04-15",
        date: "15 abr. 2026 · Daegu, Coreia do Sul",
        cardTitle: "Expansão na Coreia do Sul",
        title: "Plenário EXPAI na Coreia",
        cardLead: "Insights da nossa jornada e parcerias tecnológicas no mercado coreano.",
        lead:
          "Entre os dias 13 e 15 de Abril, Daegu abriu as portas do projeto EXPAI ao mundo. Nas instalações da Nanosystems, na Coreia do Sul, os consórcios de Portugal, Coreia do Sul e Espanha reuniram-se num plenário que foi muito mais do que uma agenda técnica — foi um encontro de mentes, culturas e ambições partilhadas.",
        paragraphs: [],
        detail: {
          date: "15 abr. 2026 · Daegu, Coreia do Sul",
          title: "Plenário EXPAI na Coreia",
          lead:
            "Entre os dias 13 e 15 de Abril, Daegu abriu as portas do projeto EXPAI ao mundo. Nas instalações da Nanosystems, na Coreia do Sul, os consórcios de Portugal, Coreia do Sul e Espanha reuniram-se num plenário que foi muito mais do que uma agenda técnica — foi um encontro de mentes, culturas e ambições partilhadas.",
        },
        tag: "EXPAI · ITEA 4",
      },
      {
        category: "GenAI",
        cardDate: "2025-05-28",
        date: "26–28 mai. 2025 · Porto",
        title: "ELFMO no Porto",
        cardLead:
          "Três dias de trabalho, partilha e visão comum no Porto com os parceiros internacionais do projeto ELFMo.",
        lead:
          "Entre 26 e 28 de maio de 2025, a FTP e o ISEP receberam no Porto os parceiros da Finlândia, da Bélgica e da Espanha para mais um plenário do projeto europeu ELFMo.",
        paragraphs: [],
        detail: {
          date: "26–28 mai. 2025 · Porto",
          title: "ELFMO no Porto",
          lead:
            "Entre 26 e 28 de maio de 2025, a FTP e o ISEP receberam no Porto os parceiros da Finlândia, da Bélgica e da Espanha para mais um plenário do projeto europeu ELFMo.",
          paragraphs: [
            "Há cidades que, pela sua energia e identidade, têm o dom de inspirar. O Porto foi, entre os dias 26 e 28 de maio, o palco de mais um momento marcante do projeto europeu ELFMo — Engineering Large Foundation Models for Enterprise Integration, quando a FTP e o ISEP receberam os parceiros internacionais da Finlândia, da Bélgica e da Espanha para três dias de trabalho, partilha e visão comum.",
            "O ELFMo nasce de uma urgência que as organizações conhecem bem: a pressão crescente para integrar tecnologias de Inteligência Artificial, em particular os Large Foundation Models, nos seus processos de negócio, sem comprometer a segurança, a privacidade ou a conformidade legal. Porque o potencial destas tecnologias é imenso, os desafios são igualmente reais: transparência dos sistemas, proteção de dados, integração com infraestruturas existentes e alinhamento com o quadro regulatório europeu.",
            "É para responder a estas questões, com rigor e responsabilidade, que o consórcio trabalha. O objetivo é claro: desenvolver metodologias, ferramentas e boas práticas que permitam às empresas adotar soluções de IA de forma sustentável, segura e verdadeiramente eficaz.",
            "Ao longo do plenário, os parceiros apresentaram os avanços alcançados, partilharam resultados, confrontaram perspetivas e traçaram o caminho para as próximas etapas. As sessões técnicas e de gestão de projeto foram complementadas por um evento de disseminação, onde cada organização teve espaço para apresentar as suas áreas de especialização e o seu contributo singular para o projeto, um momento que reforçou não apenas o conhecimento mútuo, mas também o sentido de propósito coletivo que distingue os melhores consórcios europeus.",
            "Existe uma dimensão dos projetos internacionais que raramente é valorizada, mas que determina, em grande medida, o seu sucesso: as relações entre as pessoas que os constroem. Reunir equipas de quatro países, com culturas, linguagens e formas de trabalhar distintas, é um exercício permanente de adaptação e escuta. E é precisamente por isso que os encontros presenciais são insubstituíveis, não como ritual de calendário, mas como espaço onde a confiança se constrói, os mal-entendidos se resolvem e as ideias mais inesperadas têm espaço para emergir.",
            "Com esta convicção, a FTP quis ir além da agenda técnica. No final do primeiro dia de trabalhos, os parceiros internacionais foram convidados a descobrir o Porto de uma forma diferente, numa visita informal pelos lugares mais emblemáticos da Invicta, entre histórias, curiosidades e aquela hospitalidade que a cidade oferece a quem a visita pela primeira vez. Um gesto simples, mas com um impacto que nenhuma plataforma digital consegue replicar: o de fazer com que cada parceiro se sinta não apenas um colaborador de projeto, mas parte de algo maior.",
            "Este plenário representou um passo relevante na consolidação do ELFMo, tanto nos resultados técnicos alcançados como no reforço do espírito de equipa que sustenta um projeto desta envergadura. Para a FTP, foi também uma afirmação do seu papel enquanto parceiro ativo num consórcio europeu de inovação: capaz de liderar conversas difíceis, de acolher com generosidade e de demonstrar, na prática, que a tecnologia mais avançada só gera impacto real quando existe confiança entre as pessoas que a desenvolvem.",
            "Porque a inovação não nasce apenas da tecnologia. Nasce da colaboração, da proximidade e da capacidade de construir, juntos, soluções que nenhum parceiro conseguiria alcançar sozinho.",
          ],
        },
        tag: "ELFMO · GenAI",
      },
    ],
  },
  about: {
    kicker: "/ Sobre Nós",
    titleHtml: "Sobre a FTP",
    lede: "Inovando na interseção da Gestão Empresarial e da Inteligência Artificial.",
    whoTitle: "Quem Somos",
    whoHtml:
      "A FTP é uma empresa portuguesa de tecnologia sediada no Porto, com uma equipa multidisciplinar de aproximadamente 30 especialistas. Fundada originalmente para implementar e dar suporte ao software de gestão Cegid PHC, a FTP evoluiu para um fornecedor global de tecnologia. O nosso portfólio abrange agora <strong>Inteligência Artificial</strong>, <strong>Desenvolvimento de Software à Medida</strong>, <strong>Cibersegurança</strong> e <strong>Administração de Infraestruturas</strong>.",
    missionTitle: "A Nossa Missão",
    missionHtml:
      "Transformar a investigação científica e académica em soluções empresariais aplicadas e de alto impacto.",
    stats: [
      { value: "~30", label: "Especialistas" },
      { value: "Global", label: "Presença" },
      { value: "IA & I&D", label: "Foco" },
      { value: "Full-Stack", label: "Serviços" },
    ],
    securityTitle: "Excelência Operacional & Segurança",
    securityHtml:
      "A FTP transitou para um quadro de segurança da informação maduro e documentado, alinhado com os princípios da ISO/IEC 27001 e conformidade com o RGPD. Para a FTP, a segurança é uma prioridade estratégica que garante confiança contratual e resiliência operacional para os nossos clientes.",
    securityBadges: ["ISO/IEC 27001", "RGPD", "AI Act aware", "PME Líder", "DGERT certified"],
    reachTitle: "Alcance Global",
    reachHtml:
      "Do Porto para o mundo: Descubra os nossos projetos em Ancara, Coreia do Sul e mais além.",
    reachBadges: ["Porto · Sede", "Ancara · EARS", "Daegu · EXPAI", "Helsínquia · ELFMO", "Madrid · EXPAI"],
  },
  precontact: {
    kicker: "/ Confiança Empresarial",
    lines: ["IA", "SEGURA"],
    strapHtml: "Onde a confiança digital começa. A crescer juntos.",
  },
  contact: {
    kicker: "/ Contactos",
    titleHtml: "Vamos Colaborar",
    lede:
      "Entre em contacto com a equipa do FTP AI Lab. Estamos prontos para construir o futuro juntos.",
    formTitle: "Iniciar Parceria",
    fields: {
      firstName: "Primeiro Nome",
      lastName: "Apelido",
      organization: "Organização",
      email: "Email",
      subject: "Assunto",
      message: "Mensagem",
    },
    subjectPlaceholder: "Selecione um assunto…",
    subjects: {
      partnership: "Parceria",
      rd: "Investigação & Desenvolvimento",
      solutions: "Soluções",
    },
    sendMessage: "Enviar Mensagem",
    info: {
      general: "Informação Geral",
      location: "A Nossa Localização",
      channels: "Canais",
      addressLines: [
        "Rua Professor Correia de Sá 56",
        "4445-570 Ermesinde",
        "Porto · Portugal",
      ],
    },
    strapHtml: "Onde a confiança digital começa. A crescer juntos.",
  },
  footer: {
    brandSuffix: "· Lab",
    taglineHtml: "Estúdio de Inovação Digital",
    blogTitle: "Últimas Publicações do Blog",
    blogLinks: [
      "Inovação em Ancara",
      "Expansão na Coreia do Sul",
      "ELFMO no Porto",
    ],
    referencesTitle: "Referências Institucionais",
    references: ["ITEA ↗", "ANI ↗", "União Europeia ↗"],
    papersTitle: "Últimos Artigos",
    paperLinks: [
      {
        href: "https://doi.org/10.1016/j.procs.2026.03.021",
        title: "Federated Learning com Blockchain em Sistemas de Recomendação (2026)",
      },
      {
        href: "https://doi.org/10.1109/IWIS66215.2025.11142401",
        title: "Mecanismos de Segurança para Recomendações baseadas em FL (2025)",
      },
      {
        href: "https://doi.org/10.1109/BigData66926.2025.11402459",
        title: "Privacidade Diferencial Local vs Servidor em Recomendações (2025)",
      },
    ],
    legalRightsHtml:
      '© <span data-year>2026</span> FTP. Todos os direitos reservados.',
    legalLanguages: "PT · EN · ES · FR",
    legalStandards: "ISO/IEC 27001 · RGPD · AI Act aware",
    legalOrigin: "Feito no Porto.",
  },
};
