# FTP — Site Completo (Export)

> Exportação completa de todos os conteúdos do site FTP — páginas, traduções (EN/PT), projetos, papers, equipa, blogs, links institucionais e dados de contacto.

**Domínio:** https://ftpporto.com  ·  **Preview:** https://idwebsite.lovable.app  

**Empresa:** FTP — Porto, Portugal  ·  **Idiomas suportados no site:** EN · PT · FR · ES


---

## Índice

- 1. Estrutura do site & rotas
- 2. Navegação & ações globais
- 3. Página: Home (`/`)
- 4. Página: Solutions (`/solutions`)
- 5. Página: Academic (`/academic`)
- 6. Página: AppStudio (`/appstudio`)
- 7. Página: About (`/about`)
- 8. Página: Blog (`/blog`)
- 9. Artigo: EARS — Ankara Review (`/blog/ears-ankara-review`)
- 10. Artigo: EXPAI Korea Plenary (`/blog/south-korea-expansion`)
- 11. Página: Contacts (`/contacts`)
- 12. Footer global
- 13. Projetos internacionais (detalhe completo)
- 14. Papers & Conferências
- 15. Clientes (Solutions Marquee)
- 16. Linhas de Inovação (Marquee)
- 17. Equipa (Lab Team)
- 18. Links externos & redes sociais
- 19. Tabela completa de traduções (EN ↔ PT)

---

## 1. Estrutura do site & rotas

| Rota | Página | Ficheiro |
|---|---|---|
| `/` | Home | `src/pages/Index.tsx` |
| `/solutions` | Soluções & Serviços | `src/pages/Solutions.tsx` |
| `/academic` | Académico & Científico | `src/pages/Academic.tsx` |
| `/appstudio` | AppStudio (custom apps) | `src/pages/AppStudio.tsx` |
| `/about` | Sobre Nós | `src/pages/About.tsx` |
| `/blog` | Blog (lista) | `src/pages/Blog.tsx` |
| `/blog/ears-ankara-review` | Artigo: EARS Ankara | `src/pages/BlogArticleAnkara.tsx` |
| `/blog/south-korea-expansion` | Artigo: EXPAI Korea | `src/pages/BlogArticleKorea.tsx` |
| `/contacts` | Contactos | `src/pages/Contacts.tsx` |
| `*` | 404 Not Found | `src/pages/NotFound.tsx` |

## 2. Navegação & ações globais

**Itens de menu (HeroNav):**

| Chave | EN | PT | Link |
|---|---|---|---|
| `navHome` | Home | Início | `/` |
| `navSolutions` | Solutions | Soluções | `/solutions` |
| `navAcademic` | Academic | Académico | `/academic` |
| `navAbout` | About Us | Sobre Nós | `/about` |
| `navBlog` | Blog | Blog | `/blog` |
| `navContacts` | Contacts | Contactos | `/contacts` |

**Controlos globais:** Theme toggle (light/dark) · Language switcher (EN/PT/FR/ES) · Logo FTP (link para `/`)

## 3. Página: Home (`/`)

### Hero

- **Subtítulo (pill):** EN: *Digital Innovation Studio* — PT: *Estúdio de Inovação Digital*
- **Título principal:** EN: *Empowering Tomorrow's Businesses with Innovation, Intelligence & Technology* — PT: *Capacitando os Negócios de Amanhã com Inovação, Inteligência e Tecnologia*

### Cards do Hero (2 colunas)

**Solutions & Services** → `/solutions`
- EN: Cutting-edge digital solutions powered by AI, cloud infrastructure, and modern engineering to accelerate your business.
- PT: Soluções digitais de ponta impulsionadas por IA, infraestrutura cloud e engenharia moderna para acelerar o seu negócio.
- CTA: *Explore* / *Explorar*

**Academic & Scientific** → `/academic`
- EN: Advanced research tools, data analytics, and scientific computing platforms for academia and R&D institutions.
- PT: Ferramentas avançadas de investigação, análise de dados e plataformas de computação científica para academia e instituições de I&D.
- CTA: *Explore* / *Explorar*

### Secção: Latest Blog Posts

Título: EN *Latest Blog Posts* — PT *Últimas Publicações do Blog*  
Cards: ver secção Blog (8).

### Secção: Institutional References

Título: EN *Institutional References* — PT *Referências Institucionais*  
Logos com link:
- ITEA → https://itea4.org
- ANI → https://www.ani.pt
- European Union → https://european-union.europa.eu

### Secção: Latest Papers

Título: EN *Latest Papers* — PT *Últimos Artigos*  
Ver detalhe em (14).

## 4. Página: Solutions (`/solutions`)

**Hero label:** EN *Solutions & Services* / PT *Soluções & Serviços*  
**Hero título:** EN *Innovative Solutions & Professional Services* / PT *Soluções Inovadoras & Serviços Profissionais*  
**Hero texto:** EN *Driving digital transformation through advanced AI and specialized software engineering.* / PT *Impulsionando a transformação digital através de IA avançada e engenharia de software especializada.*

### Our Solutions / As Nossas Soluções

#### E-commerce Recommendation System / Sistema de Recomendação E-commerce
**Resumo (EN):** A hybrid explainable recommendation system that delivers personalized suggestions with clear, evidence-based reasoning behind every result.  
**Resumo (PT):** Um sistema híbrido de recomendação explicável que fornece sugestões personalizadas com raciocínio claro e baseado em evidências.

**Descrição completa (EN):**

Our Hybrid Explainable Recommendation System is designed to deliver not only highly relevant recommendations, but also clear and meaningful explanations behind each decision.

In many systems, recommendations are presented as opaque outputs — users see what is suggested, but not why. This solution addresses that gap by combining advanced recommendation modelling with built-in explainability, making every result both accurate and interpretable.

**What It Does**

The system analyses multiple layers of user and product signals to generate personalized recommendations, including:
• Historical interaction behaviour
• Purchase and conversion patterns
• Collaborative signals across similar users

Each result is accompanied by a short, natural-language explanation grounded in real data — derived directly from the evidence used during ranking.

**Why It Matters**

Understanding why something is recommended increases trust, improves user experience, and supports better decision-making. The system ensures that:
• Recommendations remain consistent and justifiable
• Explanations are aligned with actual model behaviour
• Outputs can be validated and trusted

**Key Capabilities**

• Personalized recommendations based on user behaviour and contextual signals
• Built-in explainability with evidence-based reasoning
• Hybrid modelling combining historical, behavioural, and collaborative data
• Natural-language output with human-readable explanations
• Reusable, domain-agnostic architecture

**How It Works**

The system uses a hybrid recommendation model to rank items based on multiple signal sources. An integrated language model translates structured evidence into short explanations, ensuring every recommendation is both data-driven and understandable.

**Designed for Adaptation**

This system serves as a foundational layer adaptable into project-specific solutions. Its modular design allows integration into different platforms while preserving both recommendation performance and explainability.

**Descrição completa (PT):**

O nosso Sistema Híbrido de Recomendação Explicável foi concebido para fornecer não apenas recomendações altamente relevantes, mas também explicações claras por trás de cada decisão.

Em muitos sistemas, as recomendações são apresentadas como resultados opacos. Esta solução aborda essa lacuna combinando modelação avançada de recomendação com explicabilidade integrada.

**O Que Faz**

O sistema analisa múltiplas camadas de sinais de utilizadores e produtos:
• Comportamento histórico de interação
• Padrões de compra e conversão
• Sinais colaborativos entre utilizadores semelhantes

Cada resultado é acompanhado por uma explicação em linguagem natural fundamentada em dados reais.

**Porque É Importante**

Compreender porque algo é recomendado aumenta a confiança e melhora a experiência:
• Recomendações consistentes e justificáveis
• Explicações alinhadas com o comportamento real do modelo
• Resultados validáveis e confiáveis

**Capacidades Principais**

• Recomendações personalizadas com explicabilidade integrada
• Modelação híbrida combinando dados históricos, comportamentais e colaborativos
• Saída em linguagem natural com explicações legíveis
• Arquitetura reutilizável e agnóstica de domínio

**Como Funciona**

O sistema usa um modelo híbrido de recomendação para classificar itens com base em múltiplas fontes de sinais. Um modelo de linguagem integrado traduz evidências estruturadas em explicações curtas.

**Concebido para Adaptação**

Este sistema serve como camada fundamental adaptável a soluções específicas. O seu design modular permite integração em diferentes plataformas preservando performance e explicabilidade.

---

#### Multimodal Emotion Recognition / Reconhecimento Emocional Multimodal
**Resumo (EN):** A multimodal system that combines voice, facial expressions, and speech content to deliver accurate, context-aware emotion interpretation.  
**Resumo (PT):** Um sistema multimodal que combina voz, expressões faciais e conteúdo de fala para interpretação emocional precisa e contextualizada.

**Descrição completa (EN):**

This system enhances customer experience and working conditions by enabling deeper understanding of human emotional responses in real-world interactions. It combines AI, audiovisual processing, and deep learning across multiple data modalities — voice, facial expressions, and spoken content — for accurate, context-aware emotion interpretation.

**What It Does**

The system captures and interprets emotional signals from multiple sources simultaneously:
• Analyzes voice tone, rhythm, and prosody
• Reads facial expressions and micro-expressions
• Processes spoken content and contextual metadata
• Fuses all signals into a unified emotional profile predicting both category and intensity

**Why It Matters**

Understanding human emotions in real-time interactions unlocks significant value:
• Improves customer satisfaction by adapting responses to emotional context
• Detects stress, discomfort, or disengagement early
• Supports employee well-being through continuous sentiment monitoring
• Enables data-driven decisions about service quality and team dynamics

**Key Capabilities**

• Multimodal detection across audio, video, and text
• Real-time and offline inference modes
• Privacy-aware architecture with federated learning support
• Scalable integration into existing platforms
• Emotion category and intensity prediction

**How It Works**

The system extracts features from speech tone and rhythm, facial expressions, transcribed content, and contextual metadata. These signals are fused through a deep learning pipeline into a unified model that predicts both the emotion category and its intensity in real time.

**Designed for Real-World Environments**

Built to operate in contact centers, healthcare, retail, and corporate settings, this system integrates seamlessly into existing workflows — providing actionable emotional intelligence without disrupting operations.

**Descrição completa (PT):**

Este sistema melhora a experiência do cliente e as condições de trabalho ao permitir uma compreensão mais profunda das respostas emocionais em interações reais. Combina IA, processamento audiovisual e deep learning em múltiplas modalidades — voz, expressões faciais e conteúdo falado.

**O Que Faz**

O sistema captura e interpreta sinais emocionais de múltiplas fontes simultaneamente:
• Analisa tom, ritmo e prosódia da voz
• Lê expressões faciais e micro-expressões
• Processa conteúdo falado e metadados contextuais
• Funde todos os sinais num perfil emocional unificado

**Porque É Importante**

Compreender emoções humanas em interações em tempo real desbloqueia valor significativo:
• Melhora a satisfação do cliente adaptando respostas ao contexto emocional
• Deteta stress, desconforto ou desengagement precocemente
• Apoia o bem-estar dos colaboradores
• Permite decisões baseadas em dados sobre qualidade de serviço

**Capacidades Principais**

• Deteção multimodal em áudio, vídeo e texto
• Inferência em tempo real e offline
• Arquitetura com suporte a federated learning
• Integração escalável em plataformas existentes
• Previsão de categoria e intensidade emocional

**Como Funciona**

Extrai características do tom e ritmo da fala, expressões faciais, conteúdo transcrito e metadados contextuais. Estes sinais são fundidos através de um pipeline de deep learning num modelo unificado que prevê categoria e intensidade emocional em tempo real.

**Concebido para Ambientes Reais**

Construído para operar em centros de contacto, saúde, retalho e ambientes corporativos, integrando-se perfeitamente nos workflows existentes — fornecendo inteligência emocional acionável sem perturbar operações.

---

#### ERP Virtual Assistant / Assistente Virtual ERP
**Resumo (EN):** An intelligent assistant that automates ERP tasks and delivers AI-powered business insights.  
**Resumo (PT):** Um assistente inteligente que automatiza tarefas ERP e fornece insights de negócio com IA.

**Descrição completa (EN):**

Our ERP Virtual Assistant is an intelligent conversational interface designed to simplify how businesses interact with their management systems. It bridges the gap between complex ERP data and everyday business operations.

**What It Does**

The assistant automates routine ERP tasks and provides actionable business insights:
• Generates invoices and financial documents automatically
• Produces periodic reports and performance summaries
• Delivers AI-powered forecasts based on historical data
• Answers business queries in natural language

**Why It Matters**

Traditional ERP systems require specialized knowledge and manual navigation. This assistant:
• Reduces time spent on repetitive administrative tasks
• Makes business data accessible to non-technical users
• Enables faster, data-informed decision-making
• Provides proactive insights instead of reactive reporting

**Key Capabilities**

• Natural language interaction with ERP data
• Automated invoice generation and document handling
• AI-driven business forecasting and trend analysis
• Multi-source data aggregation and correlation
• Personalized responses adapted to each business context

**How It Works**

The assistant uses multiple AI algorithms to process and combine data from various business sources. Through a conversational interface, it interprets user requests, queries the ERP system via a custom API, and delivers clear, actionable responses — all personalized to the specific business reality.

**Designed for Business Teams**

Whether you're a manager needing quick financial overviews or an operator processing daily transactions, the assistant adapts to your role and delivers the information you need — without navigating complex menus or generating manual reports.

**Descrição completa (PT):**

O nosso Assistente Virtual ERP é uma interface conversacional inteligente concebida para simplificar a forma como as empresas interagem com os seus sistemas de gestão.

**O Que Faz**

O assistente automatiza tarefas rotineiras de ERP e fornece insights acionáveis:
• Gera faturas e documentos financeiros automaticamente
• Produz relatórios periódicos e resumos de desempenho
• Entrega previsões baseadas em dados históricos com IA
• Responde a consultas de negócio em linguagem natural

**Porque É Importante**

Os sistemas ERP tradicionais requerem conhecimento especializado e navegação manual. Este assistente:
• Reduz tempo em tarefas administrativas repetitivas
• Torna dados empresariais acessíveis a utilizadores não-técnicos
• Permite decisões mais rápidas e informadas por dados
• Fornece insights proativos em vez de relatórios reativos

**Capacidades Principais**

• Interação em linguagem natural com dados ERP
• Geração automática de faturas e documentos
• Previsão de negócio e análise de tendências com IA
• Agregação e correlação de dados multi-fonte
• Respostas personalizadas adaptadas a cada contexto empresarial

**Como Funciona**

O assistente utiliza múltiplos algoritmos de IA para processar e combinar dados de várias fontes empresariais. Através de uma interface conversacional, interpreta pedidos, consulta o sistema ERP via API personalizada e entrega respostas claras e acionáveis.

**Concebido para Equipas de Negócio**

Seja gestor a precisar de resumos financeiros rápidos ou operador a processar transações diárias, o assistente adapta-se ao seu papel e entrega a informação necessária — sem navegar menus complexos ou gerar relatórios manuais.

---

#### Autonomous Agent Systems / Sistemas de Agentes Autónomos
**Resumo (EN):** AI-powered systems that execute tasks independently, make informed decisions, and coordinate operations with minimal human intervention.  
**Resumo (PT):** Sistemas com IA que executam tarefas de forma independente, tomam decisões informadas e coordenam operações com mínima intervenção humana.

**Descrição completa (EN):**

Our Autonomous Agent Systems are designed to execute tasks independently while interacting intelligently with their environment and other digital tools.

**What It Does**

Agents act as intelligent intermediaries between users and external tools, APIs, or applications:
• Plan, execute, and adjust actions based on feedback and evolving conditions
• Operate across multiple systems and platforms simultaneously
• Handle sequential and conditional task chains autonomously
• Learn and improve through contextual feedback

**Why It Matters**

In many digital systems, automation is limited to predefined scripts or human-triggered actions. Autonomous agents overcome this by:
• Dynamically adapting to context without manual intervention
• Integrating multiple systems into unified workflows
• Acting proactively rather than reactively
• Reducing operational overhead and human error

**Key Capabilities**

• Autonomous Task Execution — operate without continuous supervision
• Decision-Making Capability — act based on rules or learned behavior
• API and System Integration — connect with multiple tools and services
• Multi-Step Workflows — handle sequential and conditional task chains
• Adaptive Learning — improve through contextual feedback

**How It Works**

Agents use AI to interpret user goals, analyze available actions, and select the best execution strategy. Through API integration, they monitor outcomes and refine behavior accordingly, creating a continuous improvement loop.

**Designed for Scalable Automation**

From data management and process automation to personal assistance and system integration, these agents adapt to diverse use cases — connecting platforms like APIs, messaging services, and databases into intelligent, self-managing workflows.

**Descrição completa (PT):**

Os nossos Sistemas de Agentes Autónomos executam tarefas de forma independente, interagindo inteligentemente com o ambiente e ferramentas digitais.

**O Que Faz**

Os agentes atuam como intermediários inteligentes entre utilizadores e ferramentas externas, APIs ou aplicações:
• Planeiam, executam e ajustam ações com base em feedback
• Operam em múltiplos sistemas e plataformas simultaneamente
• Gerem cadeias de tarefas sequenciais e condicionais
• Aprendem e melhoram através de feedback contextual

**Porque É Importante**

Em muitos sistemas, a automação limita-se a scripts predefinidos. Os agentes autónomos superam isto:
• Adaptando-se dinamicamente ao contexto sem intervenção manual
• Integrando múltiplos sistemas em workflows unificados
• Agindo proativamente em vez de reativamente
• Reduzindo sobrecarga operacional e erro humano

**Capacidades Principais**

• Execução autónoma de tarefas sem supervisão contínua
• Tomada de decisão baseada em regras ou aprendizagem
• Integração com APIs e múltiplos serviços
• Workflows multi-passo sequenciais e condicionais
• Aprendizagem adaptativa através de feedback contextual

**Como Funciona**

Os agentes usam IA para interpretar objetivos, analisar ações disponíveis e selecionar a melhor estratégia de execução. Através de integração API, monitorizam resultados e refinam comportamento num ciclo de melhoria contínua.

**Concebido para Automação Escalável**

Desde gestão de dados e automação de processos a assistência pessoal e integração de sistemas, estes agentes adaptam-se a diversos casos de uso — conectando plataformas como APIs, serviços de mensagens e bases de dados em workflows inteligentes e autogeridos.

---

#### Retopology Converter / Retopology Converter
**Resumo (EN):** Transforms high-poly models into optimized low-poly meshes while preserving essential detail and visual fidelity.  
**Resumo (PT):** Transforma modelos high-poly em malhas low-poly otimizadas preservando detalhe essencial e fidelidade visual.

**Descrição completa (EN):**

Retopology Converter is designed to transform high-poly models into optimized low-poly meshes while preserving essential detail and visual fidelity.

In many 3D workflows, retopology is a time-consuming and manual process, often leading to inconsistent results. This solution addresses that challenge by combining intelligent automation with geometric optimization.

**What It Does**

The system analyzes the structure of a 3D mesh and automatically generates an optimized low-poly version, focusing on:
• Reducing mesh complexity
• Preserving core geometry and shape
• Maintaining visual fidelity

The converter generates clean, quad-based topology suitable for animation and real-time applications.

**Why It Matters**

Efficient retopology is critical for performance in games, simulations, and animation pipelines. Automating this process:
• Reduces production time and manual effort
• Ensures consistent topology quality
• Enables faster iteration and scalability

**Key Capabilities**

• Automated Retopology — high-poly to optimized low-poly without manual intervention
• Quad-Based Topology — clean, structured meshes for animation and deformation
• Geometry Preservation — maintains essential shape and features
• Adaptive Optimization — balances performance and visual quality
• Production-Ready Output — meshes ready for real-time engines and animation pipelines

**How It Works**

The system leverages AI and geometric optimization to analyze mesh structure. It identifies key features, surface continuity, and structural importance to guide the simplification process, selectively reducing complexity while preserving important details.

**Designed for 3D Production Pipelines**

Whether for game development, film production, or industrial visualization, this converter integrates into existing 3D workflows — enabling artists and studios to scale their output without sacrificing quality or spending hours on manual retopology.

**Descrição completa (PT):**

O Retopology Converter transforma modelos high-poly em malhas low-poly otimizadas preservando detalhe essencial e fidelidade visual.

Em muitos workflows 3D, a retopologia é um processo manual e demorado. Esta solução combina automação inteligente com otimização geométrica.

**O Que Faz**

O sistema analisa a estrutura de uma malha 3D e gera automaticamente uma versão low-poly otimizada:
• Redução da complexidade da malha
• Preservação da geometria e forma
• Manutenção da fidelidade visual

Gera topologia limpa baseada em quads para animação e aplicações em tempo real.

**Porque É Importante**

A retopologia eficiente é crítica para performance em jogos, simulações e pipelines de animação:
• Reduz tempo de produção e esforço manual
• Garante qualidade consistente de topologia
• Permite iteração mais rápida e escalabilidade

**Capacidades Principais**

• Retopologia automatizada sem intervenção manual
• Topologia baseada em quads para animação e deformação
• Preservação da geometria essencial
• Otimização adaptativa entre performance e qualidade
• Saída pronta para motores em tempo real e pipelines de animação

**Como Funciona**

O sistema utiliza IA e otimização geométrica para analisar a estrutura da malha, identificando características-chave e continuidade de superfície para guiar a simplificação.

**Concebido para Pipelines de Produção 3D**

Seja para desenvolvimento de jogos, produção cinematográfica ou visualização industrial, este conversor integra-se nos workflows 3D existentes — permitindo a artistas e estúdios escalar produção sem sacrificar qualidade.

---

### Expert Services / Serviços Especializados

#### FTP Academy (FTP Academy)
Website: https://academia.ftpporto.com  
CTA: *Visit Academy Website*

**EN:**

The FTP Academy is an innovative learning platform designed to empower the professionals of tomorrow. Built on a strong foundation of practical learning and continuous development, the academy offers high-quality training programs across a wide range of technology fields. Whether you are taking your first steps in the digital world or you are an experienced professional looking to expand your expertise, FTP Academy provides tailored learning paths to support your growth.

Our mission is to make education accessible, relevant, and aligned with the ever-evolving demands of the technology market. We combine up-to-date content with hands-on experience, ensuring that learners not only acquire knowledge but also develop the practical skills required to apply it in real-world scenarios. Guided by a team of highly qualified instructors, students benefit from continuous support, mentorship, and the tools needed to transform potential into tangible results.

At FTP Academy, we believe that learning should be inclusive and opportunity-driven. Our programs are open to candidates between 18 and 40 years old, with no strict academic prerequisites for beginner-level courses. What truly matters is a genuine interest in technology and a strong motivation to learn and evolve. While some courses may recommend basic internet navigation skills, our approach ensures that every learner can progress at their own pace.

By exploring our course catalogue, students take the first step toward investing in their future. At FTP Academy, knowledge is more than an asset — it is the pathway to success, and we are committed to walking that path alongside every learner.

**PT:**

A FTP Academia é uma plataforma de aprendizagem inovadora concebida para capacitar os profissionais do futuro. Construída sobre uma forte base de aprendizagem prática e desenvolvimento contínuo, a academia oferece programas de formação de alta qualidade em diversas áreas tecnológicas. Quer esteja a dar os primeiros passos no mundo digital ou seja um profissional experiente que procura expandir os seus conhecimentos, a FTP Academia disponibiliza percursos de aprendizagem personalizados para apoiar o seu crescimento.

A nossa missão é tornar a educação acessível, relevante e alinhada com as exigências em constante evolução do mercado tecnológico. Combinamos conteúdos atualizados com experiência prática, garantindo que os formandos não só adquirem conhecimento como também desenvolvem as competências práticas necessárias para o aplicar em cenários reais. Orientados por uma equipa de instrutores altamente qualificados, os alunos beneficiam de apoio contínuo, mentoria e das ferramentas necessárias para transformar o potencial em resultados tangíveis.

Na FTP Academia, acreditamos que a aprendizagem deve ser inclusiva e orientada para a oportunidade. Os nossos programas estão abertos a candidatos entre os 18 e os 40 anos, sem pré-requisitos académicos rigorosos para os cursos de nível iniciante. O que verdadeiramente importa é o interesse genuíno pela tecnologia e uma forte motivação para aprender e evoluir. Embora alguns cursos possam recomendar competências básicas de navegação na internet, a nossa abordagem garante que cada formando pode progredir ao seu próprio ritmo.

Ao explorar o nosso catálogo de cursos, os alunos dão o primeiro passo para investir no seu futuro. Na FTP Academia, o conhecimento é mais do que um ativo — é o caminho para o sucesso, e estamos empenhados em percorrê-lo lado a lado com cada formando.

#### Appstudio

Link interno: `/appstudio`  
**EN:**

Appstudio is FTP's dedicated environment for designing, prototyping and delivering custom business applications at speed. Built around modular components and modern development practices, it allows our team to translate complex business requirements into functional digital products without the long timelines traditionally associated with bespoke software.

From internal tools and dashboards to customer-facing portals and mobile applications, Appstudio provides a flexible foundation that adapts to each client's reality. We combine reusable building blocks with tailored business logic, ensuring that every application not only fits the operational needs of the organisation but also scales as those needs evolve.

Our approach is collaborative and iterative. We work closely with stakeholders from the early discovery phase, validating ideas through rapid prototypes and refining the solution through continuous feedback. This methodology reduces risk, shortens delivery cycles and ensures that the final product is genuinely aligned with the people who will use it every day.

Appstudio is more than a development service — it is a partnership model. By combining technical expertise, design sensitivity and a deep understanding of business processes, we help organisations turn ideas into robust, maintainable applications that create real, measurable value.

**PT:**

O Appstudio é o ambiente dedicado da FTP para conceber, prototipar e entregar aplicações de negócio personalizadas com rapidez. Construído em torno de componentes modulares e práticas modernas de desenvolvimento, permite à nossa equipa traduzir requisitos de negócio complexos em produtos digitais funcionais, sem os longos prazos tradicionalmente associados ao software à medida.

Desde ferramentas internas e dashboards até portais para clientes e aplicações móveis, o Appstudio oferece uma base flexível que se adapta à realidade de cada cliente. Combinamos blocos reutilizáveis com lógica de negócio personalizada, garantindo que cada aplicação não só responde às necessidades operacionais da organização como também escala à medida que essas necessidades evoluem.

A nossa abordagem é colaborativa e iterativa. Trabalhamos lado a lado com os stakeholders desde a fase inicial de descoberta, validando ideias através de protótipos rápidos e refinando a solução com feedback contínuo. Esta metodologia reduz o risco, encurta os ciclos de entrega e assegura que o produto final está verdadeiramente alinhado com as pessoas que o irão utilizar todos os dias.

O Appstudio é mais do que um serviço de desenvolvimento — é um modelo de parceria. Ao combinar competência técnica, sensibilidade de design e um profundo conhecimento dos processos de negócio, ajudamos as organizações a transformar ideias em aplicações robustas e sustentáveis, que geram valor real e mensurável.

### Clientes (marquee)

Heading: EN *Trusted by Leading Companies* / PT *Clientes que Confiam em Nós*  
Logos: Sanimaia · Edgar Praça · NorSafe · Nimco

### CTA final

- EN: *Contact Our Team* — Ready to transform your business? Let's discuss how our solutions can drive your success.  → botão *Get in Touch*  → `/contacts`
- PT: *Contacte a Nossa Equipa* — Pronto para transformar o seu negócio? Vamos discutir como as nossas soluções podem impulsionar o seu sucesso.  → botão *Entrar em Contacto*

## 5. Página: Academic (`/academic`)

**Hero label:** EN *Innovation Lines* / PT *Linhas de Inovação*  
**Hero título:** EN *Academic and Scientific Research* / PT *Investigação Académica e Científica*  
**Hero texto:** EN *Pioneering research at the intersection of artificial intelligence, data science, and engineering — delivering transformative solutions for industry and academia.* / PT *Investigação pioneira na interseção da inteligência artificial, ciência de dados e engenharia — oferecendo soluções transformadoras para a indústria e academia.*

Componentes: Innovation Marquee (16) → Projects Grid (13) → Papers Section (14) → Footer.

## 6. Página: AppStudio (`/appstudio`)

**Label:** EN *Appstudio* / PT *Appstudio*
**Hero título:** EN *Bespoke applications, built around your business* / PT *Aplicações à medida, construídas para o seu negócio*
**Hero texto:** EN *From internal tools and intelligent bots to dashboards and customer portals — we design and build custom software that fits the way your team actually works.* / PT *Desde ferramentas internas e bots inteligentes a dashboards e portais para clientes — desenhamos e construímos software à medida que se adapta à forma como a sua equipa realmente trabalha.*

### What is Appstudio? / O que é o Appstudio?

**EN:** Appstudio is FTP's custom application development service. We partner with each client to design, prototype and deliver tailor-made software — applications shaped around their processes, data and goals, instead of forcing the business to adapt to a generic product.  
Every project is unique. We combine modern development practices with reusable building blocks so we can move fast without compromising on quality, scalability or maintainability.

**PT:** O Appstudio é o serviço de desenvolvimento de aplicações à medida da FTP. Trabalhamos em parceria com cada cliente para conceber, prototipar e entregar software personalizado — aplicações moldadas aos seus processos, dados e objetivos, em vez de forçar o negócio a adaptar-se a um produto genérico.  
Cada projeto é único. Combinamos práticas modernas de desenvolvimento com blocos reutilizáveis para avançar rapidamente sem comprometer qualidade, escalabilidade ou manutenção.

### What we can build / O que podemos construir

- **Internal tools & dashboards / Ferramentas internas e dashboards** — EN: Operational apps that streamline how your teams work day-to-day. | PT: Aplicações operacionais que tornam o dia a dia das suas equipas mais fluido.
- **Automation bots & notifications / Bots de automação e notificações** — EN: Smart agents that monitor your data and act — alerts, follow-ups, escalations. | PT: Agentes inteligentes que monitorizam os seus dados e agem — alertas, seguimentos, escalonamentos.
- **Customer portals & web apps / Portais e aplicações web para clientes** — EN: Branded experiences for your clients to interact with your services. | PT: Experiências com a sua marca para os seus clientes interagirem com os seus serviços.
- **Mobile applications / Aplicações móveis** — EN: iOS and Android apps connected to your existing systems. | PT: Apps iOS e Android ligadas aos seus sistemas existentes.
- **Integrations with your ERP / Integrações com o seu ERP** — EN: Connect PHC and other systems to the rest of your digital stack. | PT: Ligamos o PHC e outros sistemas ao resto da sua infraestrutura digital.
- **Data-driven workflows / Workflows orientados por dados** — EN: Pipelines that turn raw operational data into clear, actionable steps. | PT: Pipelines que transformam dados operacionais em ações claras e concretas.

### Example use case: Sales follow-up bot / Bot de seguimento comercial

**EN:** Imagine a bot that watches your CRM and identifies prospects who were promised a follow-up but never received one. The bot pings the responsible salesperson with a reminder to call or visit the client. If the salesperson still doesn't act within a defined window, the company owner gets a notification so the conversation can be picked up before the opportunity is lost.

This is the kind of small, targeted application that quietly recovers revenue and keeps your team accountable — exactly what Appstudio is built for.

**PT:** Imagine um bot que monitoriza o seu CRM e identifica potenciais clientes a quem foi prometido um contacto que nunca chegou a acontecer. O bot envia uma notificação ao comercial responsável a lembrar para ligar ou visitar o cliente. Se mesmo assim o comercial não agir num prazo definido, a dona da empresa recebe uma notificação para falar com ele e retomar o contacto antes que a oportunidade se perca.

É exatamente este tipo de aplicação pequena e direcionada que recupera receita de forma silenciosa e mantém a equipa responsável — para isto serve o Appstudio.

### How we work / Como trabalhamos

1. **Discovery / Descoberta** — EN: We sit with your team to understand the process, the pain points and the goal. | PT: Sentamo-nos com a sua equipa para perceber o processo, as dores e o objetivo.
2. **Prototype / Protótipo** — EN: We turn the idea into a working prototype quickly so you can react to something real. | PT: Transformamos a ideia rapidamente num protótipo funcional para poder reagir a algo real.
3. **Build & iterate / Construir e iterar** — EN: We refine the solution with continuous feedback until it fits like a glove. | PT: Refinamos a solução com feedback contínuo até encaixar como uma luva.
4. **Deploy & support / Lançamento e apoio** — EN: We ship it, train your team and stay close to evolve the app as your business changes. | PT: Colocamos em produção, formamos a sua equipa e acompanhamos a evolução da aplicação.

### CTA
- EN: **Have an idea in mind?** — Tell us the problem you'd like to solve. We'll help you shape it into a real application. → *Talk to us* (`/contacts`)
- PT: **Tem uma ideia em mente?** — Diga-nos o problema que quer resolver. Ajudamo-lo a transformá-lo numa aplicação real. → *Fale connosco*

## 7. Página: About (`/about`)

**Hero label:** EN *About Us* / PT *Sobre Nós*
**Hero título:** EN *About FTP* / PT *Sobre a FTP*
**Hero texto:** EN *Innovating at the intersection of Enterprise Management and Artificial Intelligence.* / PT *Inovando na interseção da Gestão Empresarial e da Inteligência Artificial.*

### Who We Are / Quem Somos
**EN:** FTP is a Portuguese technology company based in Porto with a multidisciplinary team of approximately 30 specialists. Originally founded to implement and support PHC management software, FTP has evolved into a global technology provider. Our portfolio now spans Artificial Intelligence, Bespoke Software Development, Cybersecurity, and Infrastructure Administration.

**PT:** A FTP é uma empresa portuguesa de tecnologia sediada no Porto, com uma equipa multidisciplinar de aproximadamente 30 especialistas. Fundada originalmente para implementar e dar suporte ao software de gestão PHC, a FTP evoluiu para um fornecedor global de tecnologia. O nosso portfólio abrange agora Inteligência Artificial, Desenvolvimento de Software à Medida, Cibersegurança e Administração de Infraestruturas.

### Our Mission / A Nossa Missão
> EN: *To transform scientific research and academic investigation into applied, high-impact enterprise solutions.*
> PT: *Transformar a investigação científica e académica em soluções empresariais aplicadas e de alto impacto.*

### Stats

- EN: ~30 Specialists · PT: ~30 Especialistas
- EN: Global Presence · PT: Presença Global
- EN: AI & R&D Focus · PT: Foco em IA & I&D
- EN: Full-Stack Services · PT: Serviços Full-Stack

### The Lab Team / A Equipa do Lab
EN: The minds bridging the gap between scientific discovery and business reality.  
PT: As mentes que fazem a ponte entre a descoberta científica e a realidade empresarial.

Equipa detalhada na secção (17).

### Operational Excellence & Security / Excelência Operacional & Segurança
EN: FTP has transitioned to a mature, documented information security framework aligned with ISO/IEC 27001 principles and GDPR compliance. For FTP, security is a strategic priority that ensures contractual trust and operational resilience for our clients.

PT: A FTP transitou para um quadro de segurança da informação maduro e documentado, alinhado com os princípios da ISO/IEC 27001 e conformidade com o RGPD. Para a FTP, a segurança é uma prioridade estratégica que garante confiança contratual e resiliência operacional para os nossos clientes.

### Global Reach / Alcance Global
EN: From Porto to the world: Discover our projects in Ankara, South Korea, and beyond.
PT: Do Porto para o mundo: Descubra os nossos projetos em Ancara, Coreia do Sul e mais além.

## 8. Página: Blog (`/blog`)

**Hero título:** EN *FTP Insights & Innovation* / PT *FTP Insights & Inovação*
**Hero texto:** EN *Exploring the frontiers of AI, international R&D collaborations, and industrial technology.* / PT *Explorando as fronteiras da IA, colaborações internacionais de I&D e tecnologia industrial.*

**Filtros:** All · International Projects · GenAI

### Artigos

#### Innovation in Ankara / Inovação em Ancara
- **Categoria:** International Projects  
- **Data:** 2025-11-05  
- **Link:** `/blog/ears-ankara-review`
- **EN:** Highlights from our international participation and tech exchange in Turkey.
- **PT:** Destaques da nossa participação internacional e troca tecnológica na Turquia.

#### South Korea Expansion / Expansão na Coreia do Sul
- **Categoria:** International Projects  
- **Data:** 2026-04-15  
- **Link:** `/blog/south-korea-expansion`
- **EN:** Insights from our journey and technological partnerships in the Korean market.
- **PT:** Insights da nossa jornada e parcerias tecnológicas no mercado coreano.

#### ELFMO in Porto / ELFMO no Porto
- **Categoria:** GenAI  
- **Data:** 2025-01-20  
- **Link:** `(sem rota dedicada)`
- **EN:** How we are bringing Large Foundation Models to the local enterprise ecosystem.
- **PT:** Como estamos a trazer Large Foundation Models para o ecossistema empresarial local.

## 9. Artigo: EARS — Second Review in Ankara (`/blog/ears-ankara-review`)

- **Categoria:** International Projects · **Tag:** EARS  
- **Data:** 4–5 Nov 2025  
- **Local:** Ankara, Türkiye

**Título:** EARS Project — Second Review in Ankara

**Lead:** This week the second project review of the ITEA project EARS took place in Ankara.

**Corpo:**

> Knowledge is key to success, but digitalisation has created an information overload: an enormous amount of data across numerous categories and markets makes it difficult to find the right product or service.

> The EARS project addresses this challenge by creating a platform for cross-domain collaboration between recommendation systems, which will enable increased recommendation precision while preserving user privacy.

> Using a federated framework, standardised APIs, and explainable AI, the project aims to deliver faster and more relevant, personalised suggestions to users, and offer transparent explanations for recommendations to build trust and engagement.

> Diverse domains such as e-commerce, e-health and media can benefit from this solution.

**Imagens:** ankara-1.png (consórcio no ARDVENTURE Ecosystem); ankara-2.png (EARS Consortium Workshop, ARD Group).

## 10. Artigo: EXPAI Korea Plenary (`/blog/south-korea-expansion`)

- **Categoria:** International Projects · **Tag:** EXPAI  
- **Data:** 15 Apr 2026  
- **Local:** Daegu, South Korea

**Título:** EXPAI Korea Plenary

**Lead:** Between April 13 and 15, Daegu opened the doors of the EXPAI project to the world. At Nanosystems' facilities in South Korea, the Portuguese, Korean and Spanish consortia met for a plenary that was much more than a technical agenda — it was a meeting of minds, cultures and shared ambitions.

**Parágrafo 1:**

Over three days of work, the partners discussed significant advances in the development of Artificial Intelligence models applied to real use cases. Portugal has been carving its own innovation path, with approaches focused on optimizing processes such as automatic retopology — still today a slow process dependent on manual intervention, but where AI promises to open new horizons. One of the most revealing moments of the plenary was precisely the discovery of the potential of combining distinct technologies: Korean LiDAR sensors and Portuguese 3D scanners, whose data fusion may give rise to more robust and complete solutions — a direct outcome of the dialogue that only physical presence enables.

**Parágrafo 2:**

The meeting also deepened structural themes for the evolution of the project: data interoperability between partners, the development of common APIs, and the integration of all use cases into the platform developed by the Spanish consortium — a unified framework that will be at the center of the demonstration in the next ITEA review. Cross-cutting all these advances, Explainable AI (XAI) asserts itself as a strategic axis of the consortium, with the commitment to build systems that are not only intelligent, but also transparent, interpretable and truly useful to those who use them.

**Parágrafo 3:**

But the true value of this plenary is measured beyond technical decisions. In an international and multidisciplinary project like EXPAI, physical presence is an advantage that cannot be improvised — it is what allows unblocking deadlocks that resist email exchanges, clarifying challenges in real time, and building joint solutions at the speed innovation demands. It is also in the corridors, in the conversations on the sidelines of meetings, and in sharing the same space that cultures are understood, trust relationships are consolidated, and the foundations of truly sustainable cooperation are built.

**Parágrafo 4:**

The experience in Daegu reaffirms what EXPAI has been demonstrating throughout its journey: that innovation does not live only in algorithms. It also lives in the human relationships that sustain them.

**Parágrafo 5:**

It is precisely this combination — of technology, knowledge and trust between partners — that turns challenges into opportunities and makes this consortium capable of going further, together.

**Imagens:**
- EXPAI consortium group photo at Nanosystems facilities in Daegu, South Korea — *legenda:* The EXPAI consortium gathered at Nanosystems' facilities in Daegu, South Korea.
- Selfie of partners in front of the Roboscan Nanosystems building — *legenda:* Arriving at Roboscan Nanosystems — where the three-day plenary took place.
- Partners with an autonomous mobile robot in the Nanosystems warehouse — *legenda:* Live demo of an autonomous mobile robot — one of the technologies powering the EXPAI use cases.

## 11. Página: Contacts (`/contacts`)

**Label:** EN *Contacts* / PT *Contactos*
**Hero título:** EN *Let's Collaborate* / PT *Vamos Colaborar*
**Hero texto:** EN *Get in touch with the FTP AI Lab team. We're ready to build the future together.* / PT *Entre em contacto com a equipa do FTP AI Lab. Estamos prontos para construir o futuro juntos.*

### Formulário

Título: EN *Start a Partnership* / PT *Iniciar uma Parceria*  
CTA: EN *Start a partnership with the FTP AI Lab.* / PT *Inicie uma parceria com o FTP AI Lab.*

**Campos:**
- First Name / Primeiro Nome
- Last Name / Apelido
- Organization / Organização
- Email / Email
- Subject / Assunto
- Message / Mensagem

**Opções de Subject:** Partnership · R&D Inquiry · Solutions
**Botão submit:** EN *Send Message* / PT *Enviar Mensagem*
**Sucesso:** EN *Thank You!* — Your message has been received. Our team will get back to you shortly.
PT *Obrigado!* — A sua mensagem foi recebida. A nossa equipa entrará em contacto brevemente.

### Informação geral

- **Telefone:** +351 229 774 530 — `tel:+351229774530`
- **Email:** geral@ftpporto.com — `mailto:geral@ftpporto.com`
- **Morada:** Rua Professor Correia de Sá 56, 4445-570 Ermesinde, Portugal
- **Website:** https://ftpporto.com

### Mapa
Título: EN *Our Location* / PT *A Nossa Localização*

### CTA estratégico (FTP)
EN: *Where digital trust begins. Growing up together.*  
PT: *Onde a confiança digital começa. A crescer juntos.*

## 12. Footer global (AcademicFooter)

- **Tagline:** EN *Digital Innovation Studio* / PT *Estúdio de Inovação Digital*
- **Coluna 'Latest Blog Posts':** Innovation in Ankara · South Korea Expansion · ELFMO in Porto → `/blog`
- **Coluna 'Institutional References':** ITEA, ANI, European Union (links idem secção Home)
- **Coluna 'Latest Papers':**
  - Blockchain-based Federated Learning in Recommendation Systems (2026) → https://doi.org/10.1016/j.procs.2026.03.021
  - Security-Enhancing Mechanisms for FL-Based Recommendations (2025) → https://doi.org/10.1109/IWIS66215.2025.11142401
  - Local Vs Server Differential Privacy in Recommendations (2025) → https://doi.org/10.1109/BigData66926.2025.11402459
- **Copyright:** © {ano atual} FTP. All rights reserved. / Todos os direitos reservados.
- **Redes sociais:**
  - Instagram: https://www.instagram.com/ftpporto/
  - LinkedIn: https://www.linkedin.com/company/ftpporto/posts/?feedView=all
  - Facebook: https://www.facebook.com/ftpporto/?locale=pt_PT
  - Website: https://ftpporto.com/

## 13. Projetos internacionais (detalhe completo)

### OMD — Cognitive Service Demand Management

- **Status:** Finished  ·  **Período:** 2022 – 2023
- **Tecnologias:** Natural Language Processing (NLP), Machine Learning (ML), Speech-to-text / Voice Processing, Optimization Algorithms
- **Parceiros (8):** BEIA, BigData, ISEP, Caretronic, Frontendart, ARD Group, Experteam, Hiperlink

**Problema (EN):** Modern service organizations face increasing complexity in managing incoming requests across multiple channels and domains. Traditional e-commerce, ticketing and support systems struggle with: inefficient allocation of requests to the right products, services or experts; high operational costs due to repeated handling and delays; lack of intelligent prioritization and routing; limited ability to understand user intent in natural language (text and voice); and fragmented knowledge bases across departments and sectors. As remote support becomes the standard across industries, there is a strong need for an intelligent, adaptive system that can optimize service demand management end-to-end.

**Problema (PT):** As organizações de serviços modernas enfrentam uma complexidade crescente na gestão de pedidos recebidos através de múltiplos canais e domínios. Os sistemas tradicionais de e-commerce, ticketing e suporte enfrentam dificuldades com: alocação ineficiente de pedidos aos produtos, serviços ou especialistas certos; custos operacionais elevados devido a tratamento repetido e atrasos; falta de priorização e encaminhamento inteligentes; capacidade limitada para compreender a intenção do utilizador em linguagem natural (texto e voz); e bases de conhecimento fragmentadas entre departamentos e setores. À medida que o suporte remoto se torna o padrão em várias indústrias, existe uma forte necessidade de um sistema inteligente e adaptativo que otimize a gestão da procura de serviços de ponta a ponta.

**Solução (EN):** The OMD framework is a cross-domain cognitive service management platform that leverages AI to optimize how service requests are received, interpreted, routed, and resolved. At its core, the system integrates advanced Machine Learning, Deep Learning, Natural Language Processing, and optimization techniques to automate and enhance service operations. Use Case (Nimco — www.nm4y.com): a central real-world use case was developed for Nimco, an end-user company in Portugal operating an e-commerce platform focused on footwear retail. The solution implemented an AI-powered chatbot with text and voice input capabilities, designed to understand customer queries in natural language, extract intent and product requirements using NLP models, apply ML-based filtering to dynamically recommend footwear products, match users with the most relevant products based on contextual prompts, and improve product discovery and conversion rates through personalized recommendations. This use case demonstrated how cognitive service management can be extended beyond traditional support into AI-driven e-commerce personalization and product recommendation systems.

**Solução (PT):** A framework OMD é uma plataforma cross-domain de gestão cognitiva de serviços que utiliza IA para otimizar a forma como os pedidos são recebidos, interpretados, encaminhados e resolvidos. No seu núcleo, integra Machine Learning avançado, Deep Learning, Processamento de Linguagem Natural e técnicas de otimização para automatizar e melhorar as operações de serviço. Caso de uso (Nimco — www.nm4y.com): um caso de uso real foi desenvolvido para a Nimco, empresa portuguesa que opera uma plataforma de e-commerce focada na venda de calçado. A solução implementou um chatbot com IA, com entrada por texto e voz, capaz de compreender as questões dos clientes em linguagem natural, extrair intenção e requisitos de produto usando modelos de NLP, aplicar filtragem baseada em ML para recomendar dinamicamente produtos, fazer correspondência contextual e melhorar a descoberta de produtos e a conversão através de recomendações personalizadas. Este caso demonstrou como a gestão cognitiva de serviços pode ser estendida para além do suporte tradicional, para personalização e recomendação em e-commerce com IA.

---

### EARS — Intelligent Recommendation for Remote Services

- **Status:** Ongoing  ·  **Período:** 2023 – 2026
- **Referência:** NORTE2030-FEDER-00542300 · ITEA 21017
- **Categoria:** P2030 · ITEA · Norte 2030
- **Tecnologias:** Recommender Systems, Explainable AI (XAI), User Modeling, Context-Aware Computing, Adaptive Systems
- **Parceiros (10):** FTP, ISEP, BEIA SRL, DEXTROMEDICA, Glintt Healthcare, SQ1 Web Development, Adesso Turkey, ARD Grup, Doğuş Bilgi, Donanım Haber

**Problema (EN):** The acceleration of response times, driven by the pandemic and new market demands, has pushed organizations to adopt automated solutions for proactive process management. Existing Service Desk Management (SDM) tools are predominantly focused on the IT sector, and the integration of AI, Machine Learning, Deep Learning and NLP is still in its early stages. There is no framework today capable of delivering SDM solutions that adapt across domains such as healthcare, e-commerce, marketing or sales.

**Problema (PT):** A aceleração dos tempos de resposta, impulsionada pela pandemia e pelas novas exigências do mercado, levou as empresas a adotar soluções automáticas para a gestão proativa dos seus processos. As ferramentas de Service Desk Management (SDM) existentes estão predominantemente focadas no setor das Tecnologias de Informação e a integração de Inteligência Artificial, Machine Learning, Deep Learning e NLP ainda se encontra em estágios iniciais. Não existe atualmente uma framework capaz de oferecer soluções de SDM adaptáveis a diferentes domínios como saúde, comércio eletrónico, marketing ou vendas.

**Solução (EN):** EARS develops an innovative framework for the automatic and efficient allocation of the most suitable agent to each customer request, optimizing remote support across multiple domains. It introduces multi-domain recommendation systems that learn both from collected data and from the outputs of other recommenders, with explainable AI techniques that make every suggestion transparent and trustworthy. The platform processes and classifies requests, profiles clients and agents using emotional and behavioral signals, builds dynamic workflows for support teams, and detects topics, emotions and trends from unstructured data. Impact is validated in nine sectors — IT support, justice, health, consumer electronics, e-commerce, telemarketing, industry, logistics and software development — and several components are released as open source to accelerate the adoption of Cognitive Service Management (CSM).

**Solução (PT):** O EARS desenvolve uma framework inovadora para a atribuição automática e eficiente do agente mais adequado a cada pedido, otimizando o suporte remoto em múltiplos domínios. Introduz sistemas de recomendação multidomínio que aprendem tanto com os dados recolhidos como com os resultados de outros sistemas de recomendação, com técnicas de IA explicável que tornam cada sugestão transparente e confiável. A plataforma processa e classifica pedidos, faz profiling avançado de clientes e agentes com base em sinais emocionais e comportamentais, constrói workflows dinâmicos para equipas de suporte e deteta tópicos, emoções e tendências a partir de dados não estruturados. O impacto é validado em nove setores — suporte de TI, justiça, saúde, eletrónica de consumo, comércio eletrónico, telemarketing, indústria, logística e desenvolvimento de software — e vários componentes são disponibilizados como código aberto para acelerar a adoção do Cognitive Service Management (CSM).

---

### EXPAI — EXPAI SmartIndustry — Integrating AI into smart control systems, and increasing productivity for industrial areas

- **Status:** Ongoing  ·  **Período:** 2024 – 2026
- **Tecnologias:** Explainable AI (XAI), Computer Vision, Predictive Maintenance, Anomaly Detection, Autonomous Mobile Robots (AMR), 3D Retopology & Procedural Modeling
- **Parceiros (10):** FTP, ISEP, Edgar Praça, Lda, KIRO, Nanosystems Co., Ltd., Accuro Technology S.L., BEIA SRL (Belgium), Acd Bilgi Islem Ltd., ITEA, Norte 2030

**Problema (EN):** The transition to Smart Industry currently faces critical obstacles that limit the potential of automation. The main problem lies in conventional AI systems, often seen as 'black boxes' whose decisions are difficult for human operators to interpret, creating uncertainty in high-precision industrial environments. There is also a gap in the optimization of complex components: the traditional 3D design and modeling process for parts such as carbon brushes is often inefficient, resulting in heavy geometric models that hinder real-time simulation and effective predictive maintenance. The lack of seamless integration between sensor data, autonomous robotics and design tools prevents companies from reaching the desired levels of productivity and cost reduction.

**Problema (PT):** Atualmente, a transição para a Indústria Inteligente enfrenta obstáculos críticos que limitam o potencial da automação. O principal problema reside nos sistemas de Inteligência Artificial convencionais, muitas vezes vistos como 'caixas-pretas' cujas decisões são difíceis de interpretar por operadores humanos, o que gera insegurança em ambientes industriais de alta precisão. Além disso, existe uma lacuna na otimização de componentes complexos: o processo tradicional de design e modelação 3D de peças, como as escovas de carvão, é frequentemente ineficiente, resultando em modelos geométricos pesados que dificultam a simulação em tempo real e a manutenção preditiva eficaz. A falta de integração fluida entre dados de sensores, robótica autónoma e ferramentas de design impede que as empresas alcancem os níveis desejados de produtividade e redução de custos.

**Solução (EN):** EXPAI delivers a solution based on an Explainable AI (XAI) framework that promotes a flexible, controlled and fully transparent digital environment. The platform centralises sensor data collection and analysis, applying Computer Vision techniques that make AI decision-making understandable. In industrial design, the solution introduces automatic retopology and procedural modeling, transforming high-resolution 3D scans into models optimized for real-time performance. This approach improves the geometric accuracy of components, automates design adjustments and optimises the operation of autonomous mobile robots (AMRs), translating technological innovation into direct gains in production-line efficiency and system reliability.

**Solução (PT):** Para endereçar estes desafios, o projeto EXPAI apresenta uma solução baseada numa framework de IA Explicável (XAI) que promove um ambiente digital flexível, controlado e totalmente transparente. A plataforma centraliza a recolha e análise de dados de sensores, aplicando técnicas de Visão Computacional que tornam a tomada de decisão da IA compreensível. No campo do design industrial, a solução introduz a retopologia automática e a modelação procedural, permitindo transformar digitalizações 3D de alta resolução em modelos otimizados para performance em tempo real. Esta abordagem não só melhora a precisão geométrica dos componentes, como também automatiza ajustes de design e otimiza a operação de robôs móveis autónomos (AMRs), garantindo que a inovação tecnológica se traduz em ganhos diretos na eficiência da linha de produção e na fiabilidade dos sistemas.

---

### ELFMO — ELFMO — Enterprise Large Foundation Models

- **Status:** Ongoing  ·  **Período:** 2024 – 2027
- **Tecnologias:** Generative AI, Large Foundation Models (LFMs), ERP Integration (PHC), Modular Monolith / Microservices, Open-source AI, GDPR & AI Act Compliance
- **Parceiros (14):** FTP, ISEP, F-Secure, Granlund Oy, Nosto Solutions Oy, Siili Solutions Oyj, Solita Oy, University of Helsinki, NannyML, Siemens Industry Software NV, CIC Consulting Informático, DEXTROMEDICA S.L., ITEA, Norte 2030

**Problema (EN):** Companies want to harness the transformative potential of Generative AI and Large Foundation Models (LFMs) such as GPT, BARD or FALCON, but face substantial costs, heavy resource allocation and strict compliance requirements. Concerns around data security, intellectual property, bias, fairness, error susceptibility, transparency and alignment with European regulations (GDPR, AI Act) make reliable adoption difficult. In addition, traditional monolithic ERP systems (PHC, Primavera, Sage X3, SAP, Microsoft Dynamics 365) limit customisation, scalability and the seamless integration of new AI capabilities.

**Problema (PT):** As empresas querem aproveitar o potencial transformador da IA Generativa e dos Modelos de Fundação de Grande Escala (LFMs), como GPT, BARD ou FALCON, mas enfrentam custos substanciais, elevada alocação de recursos e requisitos de conformidade rigorosos. Preocupações com segurança de dados, propriedade intelectual, viés, justiça, suscetibilidade a erros, transparência e alinhamento com as regulamentações europeias (GDPR, AI Act) dificultam uma adoção fiável. Além disso, os sistemas ERP monolíticos tradicionais (PHC, Primavera, Sage X3, SAP, Microsoft Dynamics 365) limitam a personalização, escalabilidade e integração de novas capacidades de IA.

**Solução (EN):** ELFMO delivers a risk-based engineering and integration framework that enables fast, informed and trustworthy adoption of LFMs in enterprise environments. It provides methods, tools, sector benchmarks and open-source infrastructures for the reliable adaptation of foundation models to specific tasks, with evidence-based evaluation procedures aligned with the GDPR and the AI Act. The Portuguese national use case develops a modular integration platform — evolving from a modular monolith towards microservices — that connects to existing ERPs and adds AI, e-commerce and automated management capabilities, including a specialised PHC chatbot powered by a custom ERP API.

**Solução (PT):** O ELFMO disponibiliza uma framework de engenharia e integração baseada em riscos que permite uma adoção rápida, informada e confiável dos LFMs em ambiente empresarial. Fornece métodos, ferramentas, benchmarks setoriais e infraestruturas open-source para a adaptação fiável dos modelos a tarefas específicas, com procedimentos de avaliação baseados em evidências e alinhados com o GDPR e o AI Act. O caso de uso nacional desenvolve uma plataforma integradora modular — evoluindo de monolítico modular para microserviços — que se conecta a ERPs existentes e adiciona capacidades de IA, e-commerce e gestão automatizada, incluindo um chatbot especializado para PHC suportado por uma API ERP personalizada.

---

### CAPE — Cognitive Assistant for Phygital Environments

- **Status:** Ongoing  ·  **Período:** 2024 – 2027
- **Referência:** NORTE0230-FEDER-01241200 · ITEA 4 · Smart Industry
- **Categoria:** Norte 2030 · ITEA 4 · 15 partners · 5 countries
- **Tecnologias:** Artificial Intelligence, Blockchain, Internet of Things (IoT), Deep Learning, Computer Vision, Recommender Systems
- **Parceiros (15):** FTP, ISEP, Sanimaia, IDB Inc., KAIST, SmartCore, BEIA Consult International, Enverse, DEFACTO, Doğuş Tekno, inosens, KoçSistem, Koçtaş, TAV Technologies, TEKNASYON

**Problema (EN):** The retail sector plays a crucial role in the European Union's economy but faces significant challenges in sustainability, digitalisation and skills. Single-modality systems and static in-store experiences struggle to deliver the personalised, adaptive interactions that modern shoppers and employees expect.

**Problema (PT):** O setor do comércio a retalho desempenha um papel crucial na economia da União Europeia, mas enfrenta desafios significativos nas áreas de sustentabilidade, digitalização e competências. Sistemas de modalidade única e experiências estáticas em loja têm dificuldade em entregar interações personalizadas e adaptativas que clientes e colaboradores esperam.

**Solução (EN):** CAPE is an innovative initiative that transforms the shopping experience and improves the working environment in retail through Artificial Intelligence, Blockchain, Internet of Things and Deep Learning. It delivers personalised experiences, optimises the performance of robots and kiosks, and develops innovative solutions for resource management, employee tracking and customer engagement. Five use cases focus on improving consumer experience, personalised product recommendation, employee satisfaction, smart manufacturing safety and store operations optimisation.

**Solução (PT):** O CAPE é uma iniciativa inovadora para transformar a experiência de compra e melhorar o ambiente de trabalho no retalho, através da adoção de Inteligência Artificial, Blockchain, Internet das Coisas e Aprendizagem Profunda. Cria experiências personalizadas, otimiza o desempenho de robôs e quiosques e desenvolve soluções inovadoras para gestão de recursos, rastreamento de funcionários e envolvimento do cliente. Os cinco casos de uso focam-se na melhoria da experiência do consumidor, recomendação personalizada de produtos, satisfação dos funcionários, segurança no fabrico inteligente e otimização das operações de loja.

---

## 14. Papers & Conferências

| Título | Ano | Venue | Editor | DOI |
|---|---|---|---|---|
| A Blockchain-based Federated Learning Implementation Within a Recommendation System Landscape | 2026 | Procedia Computer Science | Procedia | <https://doi.org/10.1016/j.procs.2026.03.021> |
| Security-Enhancing Mechanisms to Strengthen Privacy on Federated Learning Based Recommendation Systems | 2025 | IEEE IWIS | IEEE | <https://doi.org/10.1109/IWIS66215.2025.11142401> |
| Literary Review for Enhanced Personalized Recommendations with Federated Learning and Multimodel Emotion Recognition | 2025 | IEEE IDSTA | IEEE | <https://doi.org/10.1109/IDSTA66210.2025.11202847> |
| Local Vs Server Differential Privacy Analysis Regarding the Trade-Off Between Security and Recommendation Quality | 2025 | IEEE BigData | IEEE | <https://doi.org/10.1109/BigData66926.2025.11402459> |

## 15. Clientes (Solutions Marquee)

- Sanimaia
- Edgar Praça
- NorSafe
- Nimco (e-commerce calçado — www.nm4y.com)

## 16. Linhas de Inovação (Marquee Académico)

- Computer Vision / Visão Computacional
- Intelligent Automation / Automação Inteligente
- Data Analytics / Análise de Dados
- Digital Twins / Gémeos Digitais
- Predictive Systems / Sistemas Preditivos
- Applied R&D Projects / Projetos de I&D Aplicada
- 3D & Computer Graphics / 3D & Computação Gráfica

## 17. Equipa (FTP Lab Team)

### Fábio
- **Role:** EN Department Head / PT Chefe de Departamento
- **Specialty:** EN Department Leadership & Strategy / PT Liderança & Estratégia de Departamento
- **Quote (EN):** *Companies that integrate applied AI don't react to the market — they anticipate it.*
- **Quote (PT):** *Empresas que integram IA aplicada não reagem ao mercado — antecipam-no.*
- **Easter egg:** 🚀 rocket

### André
- **Role:** EN Technical Lead / PT Technical Lead
- **Specialty:** EN FTP Academia & Executive Strategy / PT FTP Academia & Estratégia Executiva
- **Quote (EN):** *Limits shape vision. Direction transforms imagination into reality.*
- **Quote (PT):** *Os limites moldam a visão. A direção transforma a imaginação em realidade.*
- **Easter egg:** 🎲 modeling3d

### Isabel
- **Role:** EN Project Manager / PT Project Manager
- **Specialty:** EN About Us, Blog & General Management / PT About Us, Blog & Gestão Geral
- **Quote (EN):** *From the chaos of ideas to the elegance of outcomes, turning them into flight!*
- **Quote (PT):** *Do caos das ideias à elegância dos resultados, transformando-os em voo!*
- **Easter egg:** 🏃 running

### Teixeira
- **Role:** EN R&D Developer / PT R&D Developer
- **Specialty:** EN AI & ELFMO Project / PT IA & Projeto ELFMO
- **Quote (EN):** *With AI, the limit is no longer time — it is imagination.*
- **Quote (PT):** *Com a IA, o limite deixou de ser o tempo e passou a ser a imaginação.*
- **Easter egg:** 🏎️ cars

### Couto
- **Role:** EN R&D Developer / PT R&D Developer
- **Specialty:** EN AI & ELFMO Project / PT IA & Projeto ELFMO
- **Easter egg:** 🗳️ politics

### Cruz
- **Role:** EN R&D Developer / PT R&D Developer
- **Specialty:** EN Computer Vision & E-commerce / PT Visão Computacional & E-commerce
- **Quote (EN):** *Innovation is born when we turn recurring effort into permanent solutions.*
- **Quote (PT):** *A inovação nasce quando transformamos esforço recorrente em soluções permanentes.*
- **Easter egg:** 🍕 food

### Gaspar
- **Role:** EN R&D Developer / PT R&D Developer
- **Specialty:** EN ERP Automation & EARS / PT Automação ERP & EARS
- **Quote (EN):** *When all think alike, then no one is thinking.*
- **Quote (PT):** *Quando todos pensam igual, então ninguém está a pensar.*
- **Easter egg:** ⚽ football

### Mariana
- **Role:** EN R&D Developer / PT R&D Developer
- **Specialty:** EN 3D Graphics & EXPAI / PT Gráficos 3D & EXPAI
- **Quote (EN):** *Blending a little bit of magic with a lot of intelligence to build the future.*
- **Quote (PT):** *Misturar um pouco de magia com muita inteligência para construir o futuro.*
- **Easter egg:** 🦄 unicorn

### Tiago
- **Role:** EN R&D Developer / PT R&D Developer
- **Specialty:** EN Technical Support & Development / PT Suporte Técnico & Desenvolvimento
- **Easter egg:** —

## 18. Links externos & redes sociais

- **Website oficial:** <https://ftpporto.com>
- **FTP Academy:** <https://academia.ftpporto.com>
- **Instagram:** <https://www.instagram.com/ftpporto/>
- **LinkedIn:** <https://www.linkedin.com/company/ftpporto/posts/?feedView=all>
- **Facebook:** <https://www.facebook.com/ftpporto/?locale=pt_PT>
- **ITEA:** <https://itea4.org>
- **ANI — Agência Nacional de Inovação:** <https://www.ani.pt>
- **União Europeia:** <https://european-union.europa.eu>
- **Nimco (caso de uso OMD):** <https://www.nm4y.com>
- **Telefone:** <tel:+351229774530>
- **Email:** <mailto:geral@ftpporto.com>

## 19. Tabela completa de traduções (EN ↔ PT)

| Chave | EN | PT |
|---|---|---|
| `aboutGlobalReach` | Global Reach | Alcance Global |
| `aboutGlobalReachText` | From Porto to the world: Discover our projects in Ankara, South Korea, and beyond. | Do Porto para o mundo: Descubra os nossos projetos em Ancara, Coreia do Sul e mais além. |
| `aboutHeroText` | Innovating at the intersection of Enterprise Management and Artificial Intelligence. | Inovando na interseção da Gestão Empresarial e da Inteligência Artificial. |
| `aboutHeroTitle` | About FTP | Sobre a FTP |
| `aboutLabTeam` | The Lab Team | A Equipa do Lab |
| `aboutLabTeamDesc` | The minds bridging the gap between scientific discovery and business reality. | As mentes que fazem a ponte entre a descoberta científica e a realidade empresarial. |
| `aboutMission` | Our Mission | A Nossa Missão |
| `aboutMissionText` | To transform scientific research and academic investigation into applied, high-impact enterprise solutions. | Transformar a investigação científica e académica em soluções empresariais aplicadas e de alto impacto. |
| `aboutSecurity` | Operational Excellence & Security | Excelência Operacional & Segurança |
| `aboutSecurityText` | FTP has transitioned to a mature, documented information security framework aligned with ISO/IEC 27001 principles and GDPR compliance. For FTP, security is a strategic priority that ensures contractual trust and operational resilience for our clients. | A FTP transitou para um quadro de segurança da informação maduro e documentado, alinhado com os princípios da ISO/IEC 27001 e conformidade com o RGPD. Para a FTP, a segurança é uma prioridade estratégica que garante confiança contratual e resiliência operacional para os nossos clientes. |
| `aboutStat1` | ~30 Specialists | ~30 Especialistas |
| `aboutStat2` | Global Presence | Presença Global |
| `aboutStat3` | AI & R&D Focus | Foco em IA & I&D |
| `aboutStat4` | Full-Stack Services | Serviços Full-Stack |
| `aboutWhoWeAre` | Who We Are | Quem Somos |
| `aboutWhoWeAreText` | FTP is a Portuguese technology company based in Porto with a multidisciplinary team of approximately 30 specialists. Originally founded to implement and support PHC management software, FTP has evolved into a global technology provider. Our portfolio now spans Artificial Intelligence, Bespoke Software Development, Cybersecurity, and Infrastructure Administration. | A FTP é uma empresa portuguesa de tecnologia sediada no Porto, com uma equipa multidisciplinar de aproximadamente 30 especialistas. Fundada originalmente para implementar e dar suporte ao software de gestão PHC, a FTP evoluiu para um fornecedor global de tecnologia. O nosso portfólio abrange agora Inteligência Artificial, Desenvolvimento de Software à Medida, Cibersegurança e Administração de Infr… |
| `academicHeroText` | Pioneering research at the intersection of artificial intelligence, data science, and engineering — delivering transformative solutions for industry and academia. | Investigação pioneira na interseção da inteligência artificial, ciência de dados e engenharia — oferecendo soluções transformadoras para a indústria e academia. |
| `academicHeroTitle` | Academic and Scientific Research | Investigação Académica e Científica |
| `academyVisitWebsite` | Visit Academy Website | Visitar Site da Academia |
| `allRightsReserved` | All rights reserved. | Todos os direitos reservados. |
| `appliedRD` | Applied R&D Projects | Projetos de I&D Aplicada |
| `appstudioCap1Text` | Operational apps that streamline how your teams work day-to-day. | Aplicações operacionais que tornam o dia a dia das suas equipas mais fluido. |
| `appstudioCap1Title` | Internal tools & dashboards | Ferramentas internas e dashboards |
| `appstudioCap2Text` | Smart agents that monitor your data and act — alerts, follow-ups, escalations. | Agentes inteligentes que monitorizam os seus dados e agem — alertas, seguimentos, escalonamentos. |
| `appstudioCap2Title` | Automation bots & notifications | Bots de automação e notificações |
| `appstudioCap3Text` | Branded experiences for your clients to interact with your services. | Experiências com a sua marca para os seus clientes interagirem com os seus serviços. |
| `appstudioCap3Title` | Customer portals & web apps | Portais e aplicações web para clientes |
| `appstudioCap4Text` | iOS and Android apps connected to your existing systems. | Apps iOS e Android ligadas aos seus sistemas existentes. |
| `appstudioCap4Title` | Mobile applications | Aplicações móveis |
| `appstudioCap5Text` | Connect PHC and other systems to the rest of your digital stack. | Ligamos o PHC e outros sistemas ao resto da sua infraestrutura digital. |
| `appstudioCap5Title` | Integrations with your ERP | Integrações com o seu ERP |
| `appstudioCap6Text` | Pipelines that turn raw operational data into clear, actionable steps. | Pipelines que transformam dados operacionais em ações claras e concretas. |
| `appstudioCap6Title` | Data-driven workflows | Workflows orientados por dados |
| `appstudioCapabilitiesTitle` | What we can build | O que podemos construir |
| `appstudioCtaButton` | Talk to us | Fale connosco |
| `appstudioCtaText` | Tell us the problem you'd like to solve. We'll help you shape it into a real application. | Diga-nos o problema que quer resolver. Ajudamo-lo a transformá-lo numa aplicação real. |
| `appstudioCtaTitle` | Have an idea in mind? | Tem uma ideia em mente? |
| `appstudioExampleLabel` | Example use case | Caso de uso |
| `appstudioExampleText` | Imagine a bot that watches your CRM and identifies prospects who were promised a follow-up but never received one. The bot pings the responsible salesperson with a reminder to call or visit the client. If the salesperson still doesn't act within a defined window, the company owner gets a notification so the conversation can be picked up before the opportunity is lost. | Imagine um bot que monitoriza o seu CRM e identifica potenciais clientes a quem foi prometido um contacto que nunca chegou a acontecer. O bot envia uma notificação ao comercial responsável a lembrar para ligar ou visitar o cliente. Se mesmo assim o comercial não agir num prazo definido, a dona da empresa recebe uma notificação para falar com ele e retomar o contacto antes que a oportunidade se per… |
| `appstudioExampleText2` | This is the kind of small, targeted application that quietly recovers revenue and keeps your team accountable — exactly what Appstudio is built for. | É exatamente este tipo de aplicação pequena e direcionada que recupera receita de forma silenciosa e mantém a equipa responsável — para isto serve o Appstudio. |
| `appstudioExampleTitle` | Sales follow-up bot | Bot de seguimento comercial |
| `appstudioHeroLabel` | Appstudio | Appstudio |
| `appstudioHeroText` | From internal tools and intelligent bots to dashboards and customer portals — we design and build custom software that fits the way your team actually works. | Desde ferramentas internas e bots inteligentes a dashboards e portais para clientes — desenhamos e construímos software à medida que se adapta à forma como a sua equipa realmente trabalha. |
| `appstudioHeroTitle` | Bespoke applications, built around your business | Aplicações à medida, construídas para o seu negócio |
| `appstudioProcessTitle` | How we work | Como trabalhamos |
| `appstudioStep1Text` | We sit with your team to understand the process, the pain points and the goal. | Sentamo-nos com a sua equipa para perceber o processo, as dores e o objetivo. |
| `appstudioStep1Title` | Discovery | Descoberta |
| `appstudioStep2Text` | We turn the idea into a working prototype quickly so you can react to something real. | Transformamos a ideia rapidamente num protótipo funcional para poder reagir a algo real. |
| `appstudioStep2Title` | Prototype | Protótipo |
| `appstudioStep3Text` | We refine the solution with continuous feedback until it fits like a glove. | Refinamos a solução com feedback contínuo até encaixar como uma luva. |
| `appstudioStep3Title` | Build & iterate | Construir e iterar |
| `appstudioStep4Text` | We ship it, train your team and stay close to evolve the app as your business changes. | Colocamos em produção, formamos a sua equipa e acompanhamos a evolução da aplicação. |
| `appstudioStep4Title` | Deploy & support | Lançamento e apoio |
| `appstudioWhatText` | Appstudio is FTP's custom application development service. We partner with each client to design, prototype and deliver tailor-made software — applications shaped around their processes, data and goals, instead of forcing the business to adapt to a generic product. | O Appstudio é o serviço de desenvolvimento de aplicações à medida da FTP. Trabalhamos em parceria com cada cliente para conceber, prototipar e entregar software personalizado — aplicações moldadas aos seus processos, dados e objetivos, em vez de forçar o negócio a adaptar-se a um produto genérico. |
| `appstudioWhatText2` | Every project is unique. We combine modern development practices with reusable building blocks so we can move fast without compromising on quality, scalability or maintainability. | Cada projeto é único. Combinamos práticas modernas de desenvolvimento com blocos reutilizáveis para avançar rapidamente sem comprometer qualidade, escalabilidade ou manutenção. |
| `appstudioWhatTitle` | What is Appstudio? | O que é o Appstudio? |
| `backToBlog` | Back to Blog | Voltar ao Blog |
| `backToHome` | Back to Home | Voltar ao Início |
| `blogArticle1Desc` | Highlights from our international participation and tech exchange in Turkey. | Destaques da nossa participação internacional e troca tecnológica na Turquia. |
| `blogArticle1Title` | Innovation in Ankara | Inovação em Ancara |
| `blogArticle2Desc` | Insights from our journey and technological partnerships in the Korean market. | Insights da nossa jornada e parcerias tecnológicas no mercado coreano. |
| `blogArticle2Title` | South Korea Expansion | Expansão na Coreia do Sul |
| `blogArticle3Desc` | How we are bringing Large Foundation Models to the local enterprise ecosystem. | Como estamos a trazer Large Foundation Models para o ecossistema empresarial local. |
| `blogArticle3Title` | ELFMO in Porto | ELFMO no Porto |
| `blogHeroText` | Exploring the frontiers of AI, international R&D collaborations, and industrial technology. | Explorando as fronteiras da IA, colaborações internacionais de I&D e tecnologia industrial. |
| `blogHeroTitle` | FTP Insights & Innovation | FTP Insights & Inovação |
| `blogPost1` | AI-Driven ERP Transformation | Transformação ERP com IA |
| `blogPost2` | The Future of Digital Twins | O Futuro dos Gémeos Digitais |
| `blogPost3` | Computer Vision in Industry 4.0 | Visão Computacional na Indústria 4.0 |
| `brand` | NovaTech | NovaTech |
| `capeCategory` | Norte 2030 · ITEA 4 · 15 partners · 5 countries | Norte 2030 · ITEA 4 · 15 parceiros · 5 países |
| `capeFullName` | Cognitive Assistant for Phygital Environments | Assistente Cognitivo para Ambientes Figitais |
| `capeProblem` | The retail sector plays a crucial role in the European Union's economy but faces significant challenges in sustainability, digitalisation and skills. Single-modality systems and static in-store experiences struggle to deliver the personalised, adaptive interactions that modern shoppers and employees expect. | O setor do comércio a retalho desempenha um papel crucial na economia da União Europeia, mas enfrenta desafios significativos nas áreas de sustentabilidade, digitalização e competências. Sistemas de modalidade única e experiências estáticas em loja têm dificuldade em entregar interações personalizadas e adaptativas que clientes e colaboradores esperam. |
| `capeReference` | NORTE0230-FEDER-01241200 · ITEA 4 · Smart Industry | NORTE0230-FEDER-01241200 · ITEA 4 · Smart Industry |
| `capeSolution` | CAPE is an innovative initiative that transforms the shopping experience and improves the working environment in retail through Artificial Intelligence, Blockchain, Internet of Things and Deep Learning. It delivers personalised experiences, optimises the performance of robots and kiosks, and develops innovative solutions for resource management, employee tracking and customer engagement. Five use … | O CAPE é uma iniciativa inovadora para transformar a experiência de compra e melhorar o ambiente de trabalho no retalho, através da adoção de Inteligência Artificial, Blockchain, Internet das Coisas e Aprendizagem Profunda. Cria experiências personalizadas, otimiza o desempenho de robôs e quiosques e desenvolve soluções inovadoras para gestão de recursos, rastreamento de funcionários e envolviment… |
| `cardAcademicDesc` | Advanced research tools, data analytics, and scientific computing platforms for academia and R&D institutions. | Ferramentas avançadas de investigação, análise de dados e plataformas de computação científica para academia e instituições de I&D. |
| `cardAcademicTitle` | Academic & Scientific | Académico & Científico |
| `cardSolutionsDesc` | Cutting-edge digital solutions powered by AI, cloud infrastructure, and modern engineering to accelerate your business. | Soluções digitais de ponta impulsionadas por IA, infraestrutura cloud e engenharia moderna para acelerar o seu negócio. |
| `cardSolutionsTitle` | Solutions & Services | Soluções & Serviços |
| `catGenAI` | GenAI | GenAI |
| `catInternational` | International Projects | Projetos Internacionais |
| `computerVision` | Computer Vision | Visão Computacional |
| `contactAddress` | Rua Professor Correia de Sá 56, 4445-570 Ermesinde, Portugal | Rua Professor Correia de Sá 56, 4445-570 Ermesinde, Portugal |
| `contactCta` | Ready to transform your business? Let's discuss how our solutions can drive your success. | Pronto para transformar o seu negócio? Vamos discutir como as nossas soluções podem impulsionar o seu sucesso. |
| `contactFormCta` | Start a partnership with the FTP AI Lab. | Inicie uma parceria com o FTP AI Lab. |
| `contactFormTitle` | Start a Partnership | Iniciar uma Parceria |
| `contactInfoTitle` | General Information | Informação Geral |
| `contactMapTitle` | Our Location | A Nossa Localização |
| `contactOurTeam` | Contact Our Team | Contacte a Nossa Equipa |
| `contactsHeroText` | Get in touch with the FTP AI Lab team. We're ready to build the future together. | Entre em contacto com a equipa do FTP AI Lab. Estamos prontos para construir o futuro juntos. |
| `contactsHeroTitle` | Let's Collaborate | Vamos Colaborar |
| `contactsLabel` | Contacts | Contactos |
| `contactsStrategic` | Where digital trust begins. Growing up together. | Onde a confiança digital começa. A crescer juntos. |
| `dataAnalytics` | Data Analytics | Análise de Dados |
| `date` | Date | Data |
| `digitalTwins` | Digital Twins | Gémeos Digitais |
| `earsCategory` | P2030 · ITEA · Norte 2030 | P2030 · ITEA · Norte 2030 |
| `earsFullName` | Intelligent Recommendation for Remote Services | Recomendação Inteligente para Serviços Remotos |
| `earsProblem` | The acceleration of response times, driven by the pandemic and new market demands, has pushed organizations to adopt automated solutions for proactive process management. Existing Service Desk Management (SDM) tools are predominantly focused on the IT sector, and the integration of AI, Machine Learning, Deep Learning and NLP is still in its early stages. There is no framework today capable of deli… | A aceleração dos tempos de resposta, impulsionada pela pandemia e pelas novas exigências do mercado, levou as empresas a adotar soluções automáticas para a gestão proativa dos seus processos. As ferramentas de Service Desk Management (SDM) existentes estão predominantemente focadas no setor das Tecnologias de Informação e a integração de Inteligência Artificial, Machine Learning, Deep Learning e N… |
| `earsReference` | NORTE2030-FEDER-00542300 · ITEA 21017 | NORTE2030-FEDER-00542300 · ITEA 21017 |
| `earsSolution` | EARS develops an innovative framework for the automatic and efficient allocation of the most suitable agent to each customer request, optimizing remote support across multiple domains. It introduces multi-domain recommendation systems that learn both from collected data and from the outputs of other recommenders, with explainable AI techniques that make every suggestion transparent and trustworthy… | O EARS desenvolve uma framework inovadora para a atribuição automática e eficiente do agente mais adequado a cada pedido, otimizando o suporte remoto em múltiplos domínios. Introduz sistemas de recomendação multidomínio que aprendem tanto com os dados recolhidos como com os resultados de outros sistemas de recomendação, com técnicas de IA explicável que tornam cada sugestão transparente e confiáve… |
| `elfmoFullName` | ELFMO — Enterprise Large Foundation Models | ELFMO — Modelos de Fundação de Grande Escala para Empresas |
| `elfmoProblem` | Companies want to harness the transformative potential of Generative AI and Large Foundation Models (LFMs) such as GPT, BARD or FALCON, but face substantial costs, heavy resource allocation and strict compliance requirements. Concerns around data security, intellectual property, bias, fairness, error susceptibility, transparency and alignment with European regulations (GDPR, AI Act) make reliable … | As empresas querem aproveitar o potencial transformador da IA Generativa e dos Modelos de Fundação de Grande Escala (LFMs), como GPT, BARD ou FALCON, mas enfrentam custos substanciais, elevada alocação de recursos e requisitos de conformidade rigorosos. Preocupações com segurança de dados, propriedade intelectual, viés, justiça, suscetibilidade a erros, transparência e alinhamento com as regulamen… |
| `elfmoSolution` | ELFMO delivers a risk-based engineering and integration framework that enables fast, informed and trustworthy adoption of LFMs in enterprise environments. It provides methods, tools, sector benchmarks and open-source infrastructures for the reliable adaptation of foundation models to specific tasks, with evidence-based evaluation procedures aligned with the GDPR and the AI Act. The Portuguese nati… | O ELFMO disponibiliza uma framework de engenharia e integração baseada em riscos que permite uma adoção rápida, informada e confiável dos LFMs em ambiente empresarial. Fornece métodos, ferramentas, benchmarks setoriais e infraestruturas open-source para a adaptação fiável dos modelos a tarefas específicas, com procedimentos de avaliação baseados em evidências e alinhados com o GDPR e o AI Act. O c… |
| `expaiFullName` | EXPAI SmartIndustry — Integrating AI into smart control systems, and increasing productivity for industrial areas | EXPAI SmartIndustry — Integração de IA em sistemas de controlo inteligentes e aumento de produtividade em ambientes industriais |
| `expaiProblem` | The transition to Smart Industry currently faces critical obstacles that limit the potential of automation. The main problem lies in conventional AI systems, often seen as 'black boxes' whose decisions are difficult for human operators to interpret, creating uncertainty in high-precision industrial environments. There is also a gap in the optimization of complex components: the traditional 3D desi… | Atualmente, a transição para a Indústria Inteligente enfrenta obstáculos críticos que limitam o potencial da automação. O principal problema reside nos sistemas de Inteligência Artificial convencionais, muitas vezes vistos como 'caixas-pretas' cujas decisões são difíceis de interpretar por operadores humanos, o que gera insegurança em ambientes industriais de alta precisão. Além disso, existe uma … |
| `expaiSolution` | EXPAI delivers a solution based on an Explainable AI (XAI) framework that promotes a flexible, controlled and fully transparent digital environment. The platform centralises sensor data collection and analysis, applying Computer Vision techniques that make AI decision-making understandable. In industrial design, the solution introduces automatic retopology and procedural modeling, transforming hig… | Para endereçar estes desafios, o projeto EXPAI apresenta uma solução baseada numa framework de IA Explicável (XAI) que promove um ambiente digital flexível, controlado e totalmente transparente. A plataforma centraliza a recolha e análise de dados de sensores, aplicando técnicas de Visão Computacional que tornam a tomada de decisão da IA compreensível. No campo do design industrial, a solução intr… |
| `expertServices` | Expert Services | Serviços Especializados |
| `explore` | Explore | Explorar |
| `fieldEmail` | Email | Email |
| `fieldFirstName` | First Name | Primeiro Nome |
| `fieldLastName` | Last Name | Apelido |
| `fieldMessage` | Message | Mensagem |
| `fieldOrganization` | Organization | Organização |
| `fieldRequired` | This field is required | Este campo é obrigatório |
| `fieldSubject` | Subject | Assunto |
| `filterAll` | All | Todos |
| `finished` | Finished | Concluído |
| `footerPaper1` | Blockchain-based Federated Learning in Recommendation Systems (2026) | Federated Learning com Blockchain em Sistemas de Recomendação (2026) |
| `footerPaper2` | Security-Enhancing Mechanisms for FL-Based Recommendations (2025) | Mecanismos de Segurança para Recomendações baseadas em FL (2025) |
| `footerPaper3` | Local Vs Server Differential Privacy in Recommendations (2025) | Privacidade Diferencial Local vs Servidor em Recomendações (2025) |
| `formSuccess` | Message sent successfully! | Mensagem enviada com sucesso! |
| `formSuccessText` | Your message has been received. Our team will get back to you shortly. | A sua mensagem foi recebida. A nossa equipa entrará em contacto brevemente. |
| `formSuccessTitle` | Thank You! | Obrigado! |
| `getInTouch` | Get in Touch | Entrar em Contacto |
| `heroSubtitle` | Digital Innovation Studio | Estúdio de Inovação Digital |
| `heroTitle` | Empowering Tomorrow's Businesses with Innovation, Intelligence & Technology | Capacitando os Negócios de Amanhã com Inovação, Inteligência e Tecnologia |
| `innovationLines` | Innovation Lines | Linhas de Inovação |
| `institutionalReferences` | Institutional References | Referências Institucionais |
| `intelligentAutomation` | Intelligent Automation | Automação Inteligente |
| `internationalProjects` | International Projects | Projetos Internacionais |
| `koreaArticleLead` | Between April 13 and 15, Daegu opened the doors of the EXPAI project to the world. At Nanosystems' facilities in South Korea, the Portuguese, Korean and Spanish consortia met for a plenary that was much more than a technical agenda — it was a meeting of minds, cultures and shared ambitions. | Entre os dias 13 e 15 de Abril, Daegu abriu as portas do projeto EXPAI ao mundo. Nas instalações da Nanosystems, na Coreia do Sul, os consórcios de Portugal, Coreia do Sul e Espanha reuniram-se num plenário que foi muito mais do que uma agenda técnica — foi um encontro de mentes, culturas e ambições partilhadas. |
| `koreaArticleTitle` | EXPAI Korea Plenary | Plenário EXPAI na Coreia |
| `koreaImg1Alt` | EXPAI consortium group photo at Nanosystems facilities in Daegu, South Korea | Foto de grupo do consórcio EXPAI nas instalações da Nanosystems em Daegu, Coreia do Sul |
| `koreaImg1Caption` | The EXPAI consortium gathered at Nanosystems' facilities in Daegu, South Korea. | O consórcio EXPAI reunido nas instalações da Nanosystems em Daegu, Coreia do Sul. |
| `koreaImg2Alt` | Selfie of partners in front of the Roboscan Nanosystems building | Selfie dos parceiros em frente ao edifício da Roboscan Nanosystems |
| `koreaImg2Caption` | Arriving at Roboscan Nanosystems — where the three-day plenary took place. | Chegada à Roboscan Nanosystems — onde decorreu o plenário de três dias. |
| `koreaImg3Alt` | Partners with an autonomous mobile robot in the Nanosystems warehouse | Parceiros junto a um robô móvel autónomo no armazém da Nanosystems |
| `koreaImg3Caption` | Live demo of an autonomous mobile robot — one of the technologies powering the EXPAI use cases. | Demonstração ao vivo de um robô móvel autónomo — uma das tecnologias que sustentam os casos de uso do EXPAI. |
| `koreaPara1` | Over three days of work, the partners discussed significant advances in the development of Artificial Intelligence models applied to real use cases. Portugal has been carving its own innovation path, with approaches focused on optimizing processes such as automatic retopology — still today a slow process dependent on manual intervention, but where AI promises to open new horizons. One of the most … | Ao longo de três dias de trabalho, os parceiros debateram avanços significativos no desenvolvimento de modelos de Inteligência Artificial aplicados a casos de uso reais. Portugal tem vindo a desenvolver um caminho próprio de inovação, com abordagens centradas na otimização de processos como a retopologia automática, ainda hoje um processo moroso e dependente de intervenção manual, mas onde a IA pr… |
| `koreaPara2` | The meeting also deepened structural themes for the evolution of the project: data interoperability between partners, the development of common APIs, and the integration of all use cases into the platform developed by the Spanish consortium — a unified framework that will be at the center of the demonstration in the next ITEA review. Cross-cutting all these advances, Explainable AI (XAI) asserts i… | O encontro aprofundou também temas estruturantes para a evolução do projeto: a interoperabilidade de dados entre parceiros, o desenvolvimento de APIs comuns e a integração de todos os casos de uso na plataforma desenvolvida pelo consórcio espanhol, uma framework unificada que estará no centro da demonstração na próxima revisão ITEA. Transversal a todos estes avanços, a Explainable AI (XAI) afirma-… |
| `koreaPara3` | But the true value of this plenary is measured beyond technical decisions. In an international and multidisciplinary project like EXPAI, physical presence is an advantage that cannot be improvised — it is what allows unblocking deadlocks that resist email exchanges, clarifying challenges in real time, and building joint solutions at the speed innovation demands. It is also in the corridors, in the… | Mas o verdadeiro valor deste plenário mede-se para além das decisões técnicas. Num projeto internacional e multidisciplinar como o EXPAI, a presença física é uma vantagem que não se improvisa, é ela que permite desbloquear impasses que resistem às trocas de e-mail, clarificar desafios em tempo real e construir soluções conjuntas à velocidade que a inovação exige. É também nos corredores, nas conve… |
| `koreaPara4` | The experience in Daegu reaffirms what EXPAI has been demonstrating throughout its journey: that innovation does not live only in algorithms. It also lives in the human relationships that sustain them. | A experiência em Daegu reafirma aquilo que o EXPAI tem vindo a demonstrar ao longo do seu percurso: que a inovação não vive apenas nos algoritmos. Vive também nas relações humanas que os sustentam. |
| `koreaPara5` | It is precisely this combination — of technology, knowledge and trust between partners — that turns challenges into opportunities and makes this consortium capable of going further, together. | É precisamente essa combinação, de tecnologia, conhecimento e confiança entre parceiros, que transforma desafios em oportunidades e que torna este consórcio capaz de ir mais longe, juntos. |
| `latestBlogPosts` | Latest Blog Posts | Últimas Publicações do Blog |
| `latestPapers` | Latest Papers | Últimos Artigos |
| `navAbout` | About Us | Sobre Nós |
| `navAcademic` | Academic | Académico |
| `navBlog` | Blog | Blog |
| `navContacts` | Contacts | Contactos |
| `navHome` | Home | Início |
| `navSolutions` | Solutions | Soluções |
| `omdFullName` | Cognitive Service Demand Management | Gestão Cognitiva da Procura de Serviços |
| `omdProblem` | Modern service organizations face increasing complexity in managing incoming requests across multiple channels and domains. Traditional e-commerce, ticketing and support systems struggle with: inefficient allocation of requests to the right products, services or experts; high operational costs due to repeated handling and delays; lack of intelligent prioritization and routing; limited ability to u… | As organizações de serviços modernas enfrentam uma complexidade crescente na gestão de pedidos recebidos através de múltiplos canais e domínios. Os sistemas tradicionais de e-commerce, ticketing e suporte enfrentam dificuldades com: alocação ineficiente de pedidos aos produtos, serviços ou especialistas certos; custos operacionais elevados devido a tratamento repetido e atrasos; falta de priorizaç… |
| `omdSolution` | The OMD framework is a cross-domain cognitive service management platform that leverages AI to optimize how service requests are received, interpreted, routed, and resolved. At its core, the system integrates advanced Machine Learning, Deep Learning, Natural Language Processing, and optimization techniques to automate and enhance service operations. Use Case (Nimco — www.nm4y.com): a central real-… | A framework OMD é uma plataforma cross-domain de gestão cognitiva de serviços que utiliza IA para otimizar a forma como os pedidos são recebidos, interpretados, encaminhados e resolvidos. No seu núcleo, integra Machine Learning avançado, Deep Learning, Processamento de Linguagem Natural e técnicas de otimização para automatizar e melhorar as operações de serviço. Caso de uso (Nimco — www.nm4y.com)… |
| `ongoing` | Ongoing | Em Curso |
| `ourSolutions` | Our Solutions | As Nossas Soluções |
| `papersConferences` | Papers & Conferences | Publicações & Conferências |
| `partners` | Partners | Parceiros |
| `predictiveSystems` | Predictive Systems | Sistemas Preditivos |
| `problem` | Problem | Problema |
| `readMore` | Read More | Ler Mais |
| `sendMessage` | Send Message | Enviar Mensagem |
| `solAgents` | Autonomous Agent Systems | Sistemas de Agentes Autónomos |
| `solAgentsDesc` | Our Autonomous Agent Systems are designed to execute tasks independently while interacting intelligently with their environment and other digital tools. ⏎  ⏎ **What It Does** ⏎  ⏎ Agents act as intelligent intermediaries between users and external tools, APIs, or applications: ⏎ • Plan, execute, and adjust actions based on feedback and evolving conditions ⏎ • Operate across multiple systems and pl… | Os nossos Sistemas de Agentes Autónomos executam tarefas de forma independente, interagindo inteligentemente com o ambiente e ferramentas digitais. ⏎  ⏎ **O Que Faz** ⏎  ⏎ Os agentes atuam como intermediários inteligentes entre utilizadores e ferramentas externas, APIs ou aplicações: ⏎ • Planeiam, executam e ajustam ações com base em feedback ⏎ • Operam em múltiplos sistemas e plataformas simultan… |
| `solAgentsShort` | AI-powered systems that execute tasks independently, make informed decisions, and coordinate operations with minimal human intervention. | Sistemas com IA que executam tarefas de forma independente, tomam decisões informadas e coordenam operações com mínima intervenção humana. |
| `solAppstudio` | Appstudio | Appstudio |
| `solAppstudioDesc` | Appstudio is FTP's dedicated environment for designing, prototyping and delivering custom business applications at speed. Built around modular components and modern development practices, it allows our team to translate complex business requirements into functional digital products without the long timelines traditionally associated with bespoke software. ⏎  ⏎ From internal tools and dashboards to… | O Appstudio é o ambiente dedicado da FTP para conceber, prototipar e entregar aplicações de negócio personalizadas com rapidez. Construído em torno de componentes modulares e práticas modernas de desenvolvimento, permite à nossa equipa traduzir requisitos de negócio complexos em produtos digitais funcionais, sem os longos prazos tradicionalmente associados ao software à medida. ⏎  ⏎ Desde ferramen… |
| `solEcommerce` | E-commerce Recommendation System | Sistema de Recomendação E-commerce |
| `solEcommerceDesc` | Our Hybrid Explainable Recommendation System is designed to deliver not only highly relevant recommendations, but also clear and meaningful explanations behind each decision. ⏎  ⏎ In many systems, recommendations are presented as opaque outputs — users see what is suggested, but not why. This solution addresses that gap by combining advanced recommendation modelling with built-in explainability, m… | O nosso Sistema Híbrido de Recomendação Explicável foi concebido para fornecer não apenas recomendações altamente relevantes, mas também explicações claras por trás de cada decisão. ⏎  ⏎ Em muitos sistemas, as recomendações são apresentadas como resultados opacos. Esta solução aborda essa lacuna combinando modelação avançada de recomendação com explicabilidade integrada. ⏎  ⏎ **O Que Faz** ⏎  ⏎ O … |
| `solEcommerceShort` | A hybrid explainable recommendation system that delivers personalized suggestions with clear, evidence-based reasoning behind every result. | Um sistema híbrido de recomendação explicável que fornece sugestões personalizadas com raciocínio claro e baseado em evidências. |
| `solEmotion` | Multimodal Emotion Recognition | Reconhecimento Emocional Multimodal |
| `solEmotionDesc` | This system enhances customer experience and working conditions by enabling deeper understanding of human emotional responses in real-world interactions. It combines AI, audiovisual processing, and deep learning across multiple data modalities — voice, facial expressions, and spoken content — for accurate, context-aware emotion interpretation. ⏎  ⏎ **What It Does** ⏎  ⏎ The system captures and int… | Este sistema melhora a experiência do cliente e as condições de trabalho ao permitir uma compreensão mais profunda das respostas emocionais em interações reais. Combina IA, processamento audiovisual e deep learning em múltiplas modalidades — voz, expressões faciais e conteúdo falado. ⏎  ⏎ **O Que Faz** ⏎  ⏎ O sistema captura e interpreta sinais emocionais de múltiplas fontes simultaneamente: ⏎ • A… |
| `solEmotionShort` | A multimodal system that combines voice, facial expressions, and speech content to deliver accurate, context-aware emotion interpretation. | Um sistema multimodal que combina voz, expressões faciais e conteúdo de fala para interpretação emocional precisa e contextualizada. |
| `solErpAssistant` | ERP Virtual Assistant | Assistente Virtual ERP |
| `solErpAssistantDesc` | Our ERP Virtual Assistant is an intelligent conversational interface designed to simplify how businesses interact with their management systems. It bridges the gap between complex ERP data and everyday business operations. ⏎  ⏎ **What It Does** ⏎  ⏎ The assistant automates routine ERP tasks and provides actionable business insights: ⏎ • Generates invoices and financial documents automatically ⏎ • … | O nosso Assistente Virtual ERP é uma interface conversacional inteligente concebida para simplificar a forma como as empresas interagem com os seus sistemas de gestão. ⏎  ⏎ **O Que Faz** ⏎  ⏎ O assistente automatiza tarefas rotineiras de ERP e fornece insights acionáveis: ⏎ • Gera faturas e documentos financeiros automaticamente ⏎ • Produz relatórios periódicos e resumos de desempenho ⏎ • Entrega … |
| `solErpAssistantShort` | An intelligent assistant that automates ERP tasks and delivers AI-powered business insights. | Um assistente inteligente que automatiza tarefas ERP e fornece insights de negócio com IA. |
| `solRetopo` | Retopology Converter | Retopology Converter |
| `solRetopoDesc` | Retopology Converter is designed to transform high-poly models into optimized low-poly meshes while preserving essential detail and visual fidelity. ⏎  ⏎ In many 3D workflows, retopology is a time-consuming and manual process, often leading to inconsistent results. This solution addresses that challenge by combining intelligent automation with geometric optimization. ⏎  ⏎ **What It Does** ⏎  ⏎ The… | O Retopology Converter transforma modelos high-poly em malhas low-poly otimizadas preservando detalhe essencial e fidelidade visual. ⏎  ⏎ Em muitos workflows 3D, a retopologia é um processo manual e demorado. Esta solução combina automação inteligente com otimização geométrica. ⏎  ⏎ **O Que Faz** ⏎  ⏎ O sistema analisa a estrutura de uma malha 3D e gera automaticamente uma versão low-poly otimizad… |
| `solRetopoShort` | Transforms high-poly models into optimized low-poly meshes while preserving essential detail and visual fidelity. | Transforma modelos high-poly em malhas low-poly otimizadas preservando detalhe essencial e fidelidade visual. |
| `solTraining` | FTP Academy | FTP Academia |
| `solTrainingDesc` | The FTP Academy is an innovative learning platform designed to empower the professionals of tomorrow. Built on a strong foundation of practical learning and continuous development, the academy offers high-quality training programs across a wide range of technology fields. Whether you are taking your first steps in the digital world or you are an experienced professional looking to expand your expe… | A FTP Academia é uma plataforma de aprendizagem inovadora concebida para capacitar os profissionais do futuro. Construída sobre uma forte base de aprendizagem prática e desenvolvimento contínuo, a academia oferece programas de formação de alta qualidade em diversas áreas tecnológicas. Quer esteja a dar os primeiros passos no mundo digital ou seja um profissional experiente que procura expandir os … |
| `solution` | Solution | Solução |
| `solutionsHeroText` | Driving digital transformation through advanced AI and specialized software engineering. | Impulsionando a transformação digital através de IA avançada e engenharia de software especializada. |
| `solutionsHeroTitle` | Innovative Solutions & Professional Services | Soluções Inovadoras & Serviços Profissionais |
| `status` | Status | Estado |
| `subjectPartnership` | Partnership | Parceria |
| `subjectRD` | R&D Inquiry | Investigação & Desenvolvimento |
| `subjectSolutions` | Solutions | Soluções |
| `teamAndre` | André | André |
| `teamAndreQuote` | Limits shape vision. Direction transforms imagination into reality. | Os limites moldam a visão. A direção transforma a imaginação em realidade. |
| `teamAndreRole` | Technical Lead | Technical Lead |
| `teamAndreSpec` | FTP Academia & Executive Strategy | FTP Academia & Estratégia Executiva |
| `teamCouto` | Couto | Couto |
| `teamCoutoRole` | R&D Developer | R&D Developer |
| `teamCoutoSpec` | AI & ELFMO Project | IA & Projeto ELFMO |
| `teamCruz` | Cruz | Cruz |
| `teamCruzQuote` | Innovation is born when we turn recurring effort into permanent solutions. | A inovação nasce quando transformamos esforço recorrente em soluções permanentes. |
| `teamCruzRole` | R&D Developer | R&D Developer |
| `teamCruzSpec` | Computer Vision & E-commerce | Visão Computacional & E-commerce |
| `teamFabio` | Fábio | Fábio |
| `teamFabioQuote` | Companies that integrate applied AI don't react to the market — they anticipate it. | Empresas que integram IA aplicada não reagem ao mercado — antecipam-no. |
| `teamFabioRole` | Department Head | Chefe de Departamento |
| `teamFabioSpec` | Department Leadership & Strategy | Liderança & Estratégia de Departamento |
| `teamGaspar` | Gaspar | Gaspar |
| `teamGasparQuote` | When all think alike, then no one is thinking. | Quando todos pensam igual, então ninguém está a pensar. |
| `teamGasparRole` | R&D Developer | R&D Developer |
| `teamGasparSpec` | ERP Automation & EARS | Automação ERP & EARS |
| `teamIsabel` | Isabel | Isabel |
| `teamIsabelQuote` | From the chaos of ideas to the elegance of outcomes, turning them into flight! | Do caos das ideias à elegância dos resultados, transformando-os em voo! |
| `teamIsabelRole` | Project Manager | Project Manager |
| `teamIsabelSpec` | About Us, Blog & General Management | About Us, Blog & Gestão Geral |
| `teamMariana` | Mariana | Mariana |
| `teamMarianaQuote` | Blending a little bit of magic with a lot of intelligence to build the future. | Misturar um pouco de magia com muita inteligência para construir o futuro. |
| `teamMarianaRole` | R&D Developer | R&D Developer |
| `teamMarianaSpec` | 3D Graphics & EXPAI | Gráficos 3D & EXPAI |
| `teamTeixeira` | Teixeira | Teixeira |
| `teamTeixeiraQuote` | With AI, the limit is no longer time — it is imagination. | Com a IA, o limite deixou de ser o tempo e passou a ser a imaginação. |
| `teamTeixeiraRole` | R&D Developer | R&D Developer |
| `teamTeixeiraSpec` | AI & ELFMO Project | IA & Projeto ELFMO |
| `teamTiago` | Tiago | Tiago |
| `teamTiagoRole` | R&D Developer | R&D Developer |
| `teamTiagoSpec` | Technical Support & Development | Suporte Técnico & Desenvolvimento |
| `technologies` | Technologies | Tecnologias |
| `threeDGraphics` | 3D & Computer Graphics | 3D & Computação Gráfica |
| `trustedByClients` | Trusted by Leading Companies | Clientes que Confiam em Nós |
| `viewDetails` | View Details | Ver Detalhes |


---
*Exportado automaticamente a partir do código-fonte do site.*
