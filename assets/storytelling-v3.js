/* StratUp Storytelling V3 — plain-language homepage clarity.
   Representative scenarios below are explicitly illustrative and must not be presented as verified client results. */

const _storytellingV3Header = renderHeaderLinks;
renderHeaderLinks = function(){
  _storytellingV3Header();
  const cta=document.querySelector('.header-actions .btn.primary');
  if(cta){
    cta.textContent=(state.lang==='es'?'Analiza tu empresa':'Analyze your company')+' ↗';
    cta.setAttribute('href',route('assessment'));
  }
};

home = function(){
  const es=state.lang==='es';
  setMeta(
    es?'Entienda qué frena el crecimiento y qué debe corregir primero':'Understand what is slowing growth and what to fix first',
    es?'StratUp analiza estrategia, ventas, datos, procesos y tecnología para encontrar dónde se pierde crecimiento y convertirlo en prioridades y un plan ejecutable.':'StratUp analyzes strategy, sales, data, processes and technology to find where growth is being lost and turn it into priorities and an executable plan.'
  );

  const audience=es?[
    ['01','Empresas que están creciendo, pero con demasiada fricción','Cuando cada nueva etapa exige más reuniones, más personas, más seguimiento manual o más herramientas.'],
    ['02','Direcciones que no saben qué problema resolver primero','Cuando hay muchas iniciativas, pero no existe claridad sobre cuál está frenando realmente el crecimiento.'],
    ['03','Empresas con áreas desconectadas','Cuando ventas, marketing, datos, CRM, procesos y tecnología trabajan bien por separado, pero mal como sistema.'],
    ['04','Equipos que deben decidir dónde invertir','Cuando la empresa necesita priorizar transformación, IA, revenue, operación o tecnología sin aumentar complejidad innecesaria.']
  ]:[
    ['01','Companies growing with too much friction','When each new stage requires more meetings, people, manual follow-up or tools.'],
    ['02','Leadership teams unsure what to fix first','When there are many initiatives but little clarity on what is actually constraining growth.'],
    ['03','Businesses with disconnected functions','When sales, marketing, data, CRM, processes and technology work separately but not as one system.'],
    ['04','Teams deciding where to invest','When the business must prioritize transformation, AI, revenue, operations or technology without adding unnecessary complexity.']
  ];

  const receives=es?[
    ['01','Diagnóstico ejecutivo','Qué está frenando hoy el crecimiento, dónde aparece el problema y dónde puede estar la causa real.'],
    ['02','Mapa de prioridades','Qué debe corregirse primero, qué puede esperar y qué iniciativas no deberían recibir más inversión todavía.'],
    ['03','Sistema de decisión','Qué información necesita la dirección, quién debe decidir y qué acción debe activarse cuando una señal cambia.'],
    ['04','Roadmap ejecutable','Una secuencia clara de cambios, responsables, dependencias y criterios para saber si cada etapa funcionó.']
  ]:[
    ['01','Executive diagnosis','What is constraining growth today, where the problem appears and where the real cause may be.'],
    ['02','Priority map','What should be fixed first, what can wait and which initiatives should not receive more investment yet.'],
    ['03','Decision system','What leadership needs to know, who decides and what action should be triggered when a signal changes.'],
    ['04','Executable roadmap','A clear sequence of changes, owners, dependencies and criteria for knowing whether each stage worked.']
  ];

  const cases=es?[
    {
      region:'NORTEAMÉRICA · SERVICIOS PROFESIONALES',
      title:'Mucho pipeline, poca previsibilidad comercial.',
      context:'La empresa generaba oportunidades, pero cada equipo utilizaba criterios distintos para calificar, avanzar y pronosticar ventas. El CRM almacenaba información, pero no ayudaba a dirigir la operación.',
      intervention:'Se rediseñaron etapas comerciales, criterios de oportunidad, reglas de seguimiento, ownership y una vista ejecutiva común para pipeline y forecast.',
      result:'El resultado esperado del escenario es una operación comercial con definiciones compartidas, menos ambigüedad y mayor claridad sobre qué oportunidades requieren acción.'
    },
    {
      region:'EUROPA · HOSPITALITY',
      title:'La inversión aumentaba, pero no estaba claro dónde se perdía el valor.',
      context:'Adquisición, reservas, CRM y revenue se analizaban por separado. La dirección podía ver resultados por canal, pero no el recorrido completo desde la demanda hasta la reserva y la recurrencia.',
      intervention:'Se conectaron fuentes de demanda, funnel de reserva, CRM, señales de revenue y puntos de fuga para construir una lectura única del sistema comercial.',
      result:'El resultado esperado del escenario es identificar con mayor precisión dónde priorizar inversión, qué fricciones corregir y qué métricas deben gobernar la siguiente decisión.'
    },
    {
      region:'LATAM · SERVICIOS FINANCIEROS',
      title:'La transformación tenía proyectos, pero no una prioridad común.',
      context:'Existían iniciativas de automatización, CRM, datos e IA en distintas áreas, pero sin una secuencia compartida ni criterios claros para decidir qué activar primero.',
      intervention:'Se evaluaron restricciones, dependencias, impacto esperado, readiness de datos y capacidad de adopción para ordenar las iniciativas dentro de un roadmap común.',
      result:'El resultado esperado del escenario es concentrar recursos en las iniciativas con mayor capacidad de cambiar el negocio y evitar automatizar procesos que todavía no están bien diseñados.'
    }
  ]:[
    {
      region:'NORTH AMERICA · PROFESSIONAL SERVICES',
      title:'Plenty of pipeline, little commercial predictability.',
      context:'The company generated opportunities, but teams used different criteria to qualify, advance and forecast sales. The CRM stored information but did not direct the operation.',
      intervention:'Commercial stages, opportunity criteria, follow-up rules, ownership and a shared executive pipeline and forecast view were redesigned.',
      result:'The expected result of the scenario is a commercial operation with shared definitions, less ambiguity and clearer action on priority opportunities.'
    },
    {
      region:'EUROPE · HOSPITALITY',
      title:'Investment was increasing, but it was unclear where value was being lost.',
      context:'Acquisition, bookings, CRM and revenue were analyzed separately. Leadership could see channel results but not the full path from demand to booking and repeat value.',
      intervention:'Demand sources, booking funnel, CRM, revenue signals and leakage points were connected into a single commercial view.',
      result:'The expected result is clearer prioritization of investment, friction and the metrics that should govern the next decision.'
    },
    {
      region:'LATAM · FINANCIAL SERVICES',
      title:'Transformation had projects, but no shared priority.',
      context:'Automation, CRM, data and AI initiatives existed across functions without a shared sequence or criteria for what should be activated first.',
      intervention:'Constraints, dependencies, expected impact, data readiness and adoption capability were assessed to sequence initiatives into a common roadmap.',
      result:'The expected result is to concentrate resources on initiatives most likely to change business performance and avoid automating poorly designed processes.'
    }
  ];

  return `<section class="hero storytelling-hero v3"><div class="container hero-grid"><div class="hero-copy"><p class="eyebrow">STRATEGIC GROWTH ARCHITECTURE</p><h1 class="display">${es?'Entendemos qué está frenando su empresa y le mostramos qué debe corregir primero.':'We identify what is holding your business back and show what to fix first.'}</h1><p class="lead">${es?'StratUp analiza estrategia, ventas, datos, procesos y tecnología como un solo sistema. Encontramos dónde se está perdiendo crecimiento y lo convertimos en prioridades, decisiones y un plan que su equipo puede ejecutar.':'StratUp analyzes strategy, sales, data, processes and technology as one system. We find where growth is being lost and turn it into priorities, decisions and a plan your team can execute.'}</p><div class="actions"><a class="btn primary" href="${route('assessment')}">${es?'Analiza tu empresa':'Analyze your company'} ↗</a><a class="btn ghost" href="#what-you-get-v3">${es?'Ver qué recibe su empresa':'See what your company receives'} →</a></div><div class="hero-proofline"><b>${es?'24 preguntas · 6 áreas del negocio · resultado inmediato':'24 questions · 6 business areas · immediate result'}</b><span>${es?'Empiece con una lectura clara antes de invertir en otra solución.':'Start with a clear reading before investing in another solution.'}</span></div></div>${heroVisual()}</div><div class="container hero-trust"><span>${es?'Comprenda primero. Transforme después.':'Understand first. Transform next.'}</span><span>SCROLL ↓</span></div></section>

<section class="section audience-section v3-audience"><div class="container"><div class="heading"><div><p class="eyebrow">${es?'PARA QUIÉN ES STRATUP':'WHO STRATUP IS FOR'}</p><h2 class="title">${es?'StratUp es para empresas que necesitan claridad antes de seguir invirtiendo.':'StratUp is for companies that need clarity before investing further.'}</h2></div><p>${es?'No necesita saber qué servicio contratar. Basta con que exista un problema de crecimiento, operación o decisión que la empresa todavía no logra explicar con claridad.':'You do not need to know which service to buy. It is enough that there is a growth, operating or decision problem the business still cannot explain clearly.'}</p></div><div class="audience-grid v3-four">${audience.map(a=>`<article class="audience-card"><span>${a[0]}</span><h3>${a[1]}</h3><p>${a[2]}</p></article>`).join('')}</div></div></section>

<section class="section dark" id="what-you-get-v3"><div class="container"><div class="heading"><div><p class="eyebrow">${es?'QUÉ RECIBE SU EMPRESA':'WHAT YOUR COMPANY RECEIVES'}</p><h2 class="title">${es?'No entregamos solo recomendaciones. Dejamos claridad para decidir y ejecutar.':'We do not deliver recommendations only. We leave clarity to decide and execute.'}</h2></div><p class="muted">${es?'El alcance cambia según el diagnóstico, pero el cliente debe poder ver con claridad qué problema existe, qué debe cambiar y cuál es la siguiente decisión.':'Scope changes with the diagnosis, but the client should clearly see what the problem is, what must change and what decision comes next.'}</p></div><div class="deliverable-grid">${receives.map(r=>`<article class="deliverable-card"><span>${r[0]}</span><h3>${r[1]}</h3><p>${r[2]}</p></article>`).join('')}</div><div class="actions"><a class="btn primary" href="${route('assessment')}">${es?'Identificar mi principal brecha':'Identify my main gap'} ↗</a></div></div></section>

<section class="section"><div class="container"><div class="heading"><div><p class="eyebrow">${es?'ASÍ SE VE UNA INTERVENCIÓN':'WHAT AN INTERVENTION LOOKS LIKE'}</p><h2 class="title">${es?'Tres escenarios para entender, en términos concretos, qué hace StratUp.':'Three scenarios that show, in concrete terms, what StratUp does.'}</h2></div><p>${es?'Son escenarios representativos e ilustrativos para explicar el tipo de trabajo. No son testimonios ni resultados verificados de clientes identificables.':'These are representative illustrative scenarios explaining the type of work. They are not testimonials or verified results from identifiable clients.'}</p></div><div class="case-grid">${cases.map((c,i)=>`<article class="case-card"><div class="case-top"><span>0${i+1}</span><b>${c.region}</b></div><h3>${c.title}</h3><div class="case-part"><strong>${es?'CONTEXTO':'CONTEXT'}</strong><p>${c.context}</p></div><div class="case-part"><strong>${es?'INTERVENCIÓN':'INTERVENTION'}</strong><p>${c.intervention}</p></div><div class="case-part result"><strong>${es?'RESULTADO DEL ESCENARIO':'SCENARIO RESULT'}</strong><p>${c.result}</p></div></article>`).join('')}</div></div></section>

<section class="section alt"><div class="container"><div class="heading"><div><p class="eyebrow">${es?'PROBLEMAS QUE PODEMOS AYUDAR A ACLARAR':'PROBLEMS WE HELP CLARIFY'}</p><h2 class="title">${es?'Comience por lo que está ocurriendo, no por el nombre de una solución.':'Start with what is happening, not the name of a solution.'}</h2></div><p>${es?'Si reconoce una de estas situaciones, StratUp puede ayudar a encontrar la causa, priorizar qué cambiar y estructurar el siguiente paso.':'If you recognize one of these situations, StratUp can help identify the cause, prioritize what to change and structure the next step.'}</p></div><div class="signals">${DATA.situations.slice(0,6).map((s,i)=>`<a class="signal" href="${route('situation/'+s.slug)}"><span>0${i+1}</span><div><h3>${t(s.title)}</h3><p>${t(s.summary)}</p></div><span>↗</span></a>`).join('')}</div></div></section>

<section class="section dark"><div class="container"><div class="heading"><div><p class="eyebrow">${es?'CÓMO LO HACEMOS':'HOW WE DO IT'}</p><h2 class="title">${es?'Primero encontramos la causa. Después diseñamos el cambio.':'First we find the cause. Then we design the change.'}</h2></div><p class="muted">${es?'No comenzamos vendiendo software, campañas o automatizaciones. Comenzamos entendiendo qué decisión necesita mejorar y qué está impidiendo que ocurra.':'We do not begin by selling software, campaigns or automation. We begin by understanding which decision must improve and what is preventing it.'}</p></div>${methodCards()}</div></section>

<section class="section"><div class="container"><div class="heading"><div><p class="eyebrow">${es?'CAPACIDADES':'CAPABILITIES'}</p><h2 class="title">${es?'Cinco formas de intervenir sobre el mismo sistema empresarial.':'Five ways to intervene in the same business system.'}</h2></div><p>${es?'No son servicios aislados. Se combinan según lo que revele el diagnóstico.':'They are not isolated services. They are combined according to what the diagnosis reveals.'}</p></div><div class="grid3">${DATA.capabilities.map(capCard).join('')}</div></div></section>

<section class="section alt"><div class="container"><div class="heading"><div><p class="eyebrow">${es?'PERSPECTIVAS EJECUTIVAS':'EXECUTIVE INSIGHTS'}</p><h2 class="title">${es?'Vea cómo pensamos antes de contratar la firma.':'See how we think before engaging the firm.'}</h2></div><a class="btn" href="${route('insights')}">${es?'Ver perspectivas':'View insights'} →</a></div><div class="grid2">${DATA.insights.map(insightCard).join('')}</div></div></section>

<section class="section dark"><div class="container"><div class="heading"><div><p class="eyebrow">${es?'HERRAMIENTAS INTERACTIVAS':'INTERACTIVE TOOLS'}</p><h2 class="title">${es?'Empiece por una pregunta concreta.':'Start with a concrete question.'}</h2></div><a class="btn ghost storytelling-dark-btn" href="${route('resources')}">${es?'Abrir recursos':'Open resources'} →</a></div><div class="resource-grid">${DATA.resources.slice(0,3).map(r=>resourceCard(r,true)).join('')}</div></div></section>

<section class="section assessment-band"><div class="container assessment-layout"><div><p class="eyebrow">BUSINESS GROWTH MATURITY ASSESSMENT</p><h2 class="title">${es?'Descubra qué parte de su empresa merece atención primero.':'Discover which part of your business deserves attention first.'}</h2><p class="muted">${es?'Responda 24 preguntas sobre estrategia, revenue, datos, IA, operación y gobernanza. Obtendrá una lectura inmediata de su madurez y la dimensión que conviene investigar primero.':'Answer 24 questions about strategy, revenue, data, AI, operations and governance. You will receive an immediate maturity reading and the dimension worth investigating first.'}</p><ul class="assessment-points"><li>${es?'Resultado inmediato':'Immediate result'}</li><li>${es?'Sin reunión previa':'No meeting required'}</li><li>${es?'Sin compromiso comercial':'No commercial commitment'}</li></ul><div class="actions"><a class="btn primary" href="${route('assessment')}">${es?'Analiza tu empresa con el Assessment':'Analyze your company with the Assessment'} ↗</a></div></div>${scorePreview()}</div></section>`;
};

render();
