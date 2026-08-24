/* StratUp Storytelling V2 — homepage clarity layer.
   This file intentionally does not invent client names, logos, testimonials or results.
   Public proof is limited to verified or explicitly illustrative material. */

const _storytellingBaseHeader = renderHeaderLinks;
renderHeaderLinks = function(){
  _storytellingBaseHeader();
  const cta=document.querySelector('.header-actions .btn.primary');
  if(cta){
    cta.textContent=(state.lang==='es'?'Analiza tu empresa':'Analyze your company')+' ↗';
    cta.setAttribute('href',route('assessment'));
  }
};

home = function(){
  const es=state.lang==='es';
  setMeta(
    es?'Diagnóstico y arquitectura de crecimiento empresarial':'Business growth diagnosis and architecture',
    es?'Identifique qué está frenando el crecimiento, qué debe cambiar primero y cómo convertirlo en una arquitectura ejecutable.':'Identify what is constraining growth, what must change first, and how to turn it into an executable architecture.'
  );

  const audience=es?[
    ['01','Dirección ejecutiva','Empresas con crecimiento, transformación o complejidad que ya atraviesa varias áreas del negocio.'],
    ['02','Negocios con sistemas fragmentados','Organizaciones donde estrategia, revenue, datos, CRM, procesos y tecnología no están operando como un solo sistema.'],
    ['03','Equipos ante una decisión crítica','Direcciones que necesitan priorizar inversión, transformación, IA, revenue u operación con una lectura común.']
  ]:[
    ['01','Executive leadership','Businesses facing growth, transformation, or complexity that already spans multiple functions.'],
    ['02','Fragmented business systems','Organizations where strategy, revenue, data, CRM, processes, and technology are not operating as one system.'],
    ['03','Teams facing a critical decision','Leadership teams that need to prioritize investment, transformation, AI, revenue, or operations from a shared view.']
  ];

  const receives=es?[
    ['01','Diagnóstico ejecutivo','Una lectura estructurada de síntomas, causas, dependencias y restricciones que hoy limitan el avance.'],
    ['02','Mapa de prioridades','Qué debe resolverse primero, qué puede esperar y qué decisiones dependen unas de otras.'],
    ['03','Arquitectura de decisión','Las señales, métricas, owners y reglas que la dirección necesita para operar con mayor claridad.'],
    ['04','Roadmap ejecutable','Una secuencia de cambios con ownership, dependencias, criterios de medición y siguiente gate.']
  ]:[
    ['01','Executive diagnosis','A structured view of symptoms, causes, dependencies, and constraints limiting progress.'],
    ['02','Priority map','What should be solved first, what can wait, and which decisions depend on one another.'],
    ['03','Decision architecture','The signals, metrics, owners, and rules leadership needs to operate with greater clarity.'],
    ['04','Executable roadmap','A sequence of changes with ownership, dependencies, measurement criteria, and the next gate.']
  ];

  return `<section class="hero storytelling-hero"><div class="container hero-grid"><div class="hero-copy"><p class="eyebrow">STRATEGIC GROWTH ARCHITECTURE</p><h1 class="display">${es?'Encuentre qué está frenando el crecimiento y qué debe cambiar primero.':'Find what is constraining growth and what must change first.'}</h1><p class="lead">${es?'StratUp diagnostica cómo funciona realmente la empresa, conecta estrategia, revenue, datos, tecnología y operación, y convierte esa lectura en prioridades y una arquitectura ejecutable para la dirección.':'StratUp diagnoses how the business actually works, connects strategy, revenue, data, technology, and operations, and turns that reading into priorities and an executable architecture for leadership.'}</p><div class="actions"><a class="btn primary" href="${route('assessment')}">${es?'Analiza tu empresa':'Analyze your company'} ↗</a><a class="btn ghost" href="#what-you-get">${es?'Ver qué recibe la dirección':'See what leadership receives'} →</a></div><div class="hero-proofline"><b>${es?'24 preguntas · 6 dimensiones · resultado inmediato':'24 questions · 6 dimensions · immediate result'}</b><span>${es?'Sin reunión previa. Empiece con una lectura de su sistema.':'No meeting required. Start with a reading of your system.'}</span></div></div>${heroVisual()}</div><div class="container hero-trust"><span>${es?'Comprenda primero. Transforme después.':'Understand first. Transform next.'}</span><span>SCROLL ↓</span></div></section>

<section class="section audience-section"><div class="container"><div class="heading"><div><p class="eyebrow">WHO STRATUP IS FOR</p><h2 class="title">${es?'Trabajamos cuando el problema ya no pertenece a un solo departamento.':'We work when the problem no longer belongs to one department.'}</h2></div><p>${es?'No partimos de una herramienta ni de una campaña. Partimos de una decisión empresarial que necesita una lectura común entre áreas.':'We do not start with a tool or a campaign. We start with a business decision that needs a shared view across functions.'}</p></div><div class="audience-grid">${audience.map(a=>`<article class="audience-card"><span>${a[0]}</span><h3>${a[1]}</h3><p>${a[2]}</p></article>`).join('')}</div></div></section>

<section class="section dark" id="what-you-get"><div class="container"><div class="heading"><div><p class="eyebrow">WHAT THE CLIENT RECEIVES</p><h2 class="title">${es?'De la complejidad a una decisión que puede ejecutarse.':'From complexity to a decision that can be executed.'}</h2></div><p class="muted">${es?'El trabajo se configura según el diagnóstico. Estos son los tipos de outputs que la dirección puede recibir, no un paquete genérico predefinido.':'The work is configured around the diagnosis. These are the types of outputs leadership may receive, not a generic predefined package.'}</p></div><div class="deliverable-grid">${receives.map(r=>`<article class="deliverable-card"><span>${r[0]}</span><h3>${r[1]}</h3><p>${r[2]}</p></article>`).join('')}</div><div class="actions"><a class="btn primary" href="${route('assessment')}">${es?'Identificar mi principal brecha':'Identify my primary gap'} ↗</a><a class="btn ghost storytelling-dark-btn" href="${route('method')}">${es?'Ver metodología':'View methodology'} →</a></div></div></section>

<section class="section"><div class="container"><div class="heading"><div><p class="eyebrow">BUSINESS SIGNALS</p><h2 class="title">${es?'¿Qué está ocurriendo hoy en su empresa?':'What is happening in your business today?'}</h2></div><p>${es?'Reconozca primero la situación visible. Después validamos si la causa está realmente allí.':'Recognize the visible situation first. Then we validate whether the cause is actually there.'}</p></div><div class="signals">${DATA.situations.slice(0,6).map((s,i)=>`<a class="signal" href="${route('situation/'+s.slug)}"><span>0${i+1}</span><div><h3>${t(s.title)}</h3><p>${t(s.summary)}</p></div><span>↗</span></a>`).join('')}</div></div></section>

<section class="section alt"><div class="container"><div class="heading"><div><p class="eyebrow">EVIDENCE & CONFIDENTIALITY</p><h2 class="title">${es?'La credibilidad no se construye inventando logos.':'Credibility is not built by inventing logos.'}</h2></div><p>${es?'Cuando un engagement es confidencial, protegemos la identidad. Cuando un resultado puede publicarse, debe poder verificarse. Por eso diferenciamos claramente evidencia real de escenarios ilustrativos.':'When an engagement is confidential, we protect identity. When a result can be published, it must be verifiable. That is why we clearly separate real evidence from illustrative scenarios.'}</p></div><div class="evidence-grid">${DATA.outcomes.map(o=>`<a class="evidence-card" href="${route('outcome/'+o.slug)}"><span class="eyebrow">${es?'ESCENARIO ILUSTRATIVO':'ILLUSTRATIVE SCENARIO'}</span><h3>${t(o.title)}</h3><p>${es?'Vea cómo cambia la capacidad del sistema, sin presentar hipótesis como casos reales.':'See how system capability changes without presenting hypotheses as real client cases.'}</p><b>${es?'Ver escenario':'View scenario'} ↗</b></a>`).join('')}</div><div class="evidence-note">${es?'Nota de transparencia: no publicamos nombres de clientes, testimonios ni métricas que no puedan verificarse. Los casos anonimizados se incorporarán aquí únicamente cuando exista evidencia real suficiente para respaldarlos.':'Transparency note: we do not publish client names, testimonials, or metrics that cannot be verified. Anonymized cases will be added here only when sufficient real evidence exists to support them.'}</div></div></section>

<section class="section dark"><div class="container"><div class="heading"><div><p class="eyebrow">CAPABILITY SYSTEMS</p><h2 class="title">${es?'Las capacidades se conectan alrededor de la decisión empresarial.':'Capabilities connect around the business decision.'}</h2></div><p class="muted">${es?'Explore qué pregunta responde cada sistema y qué capacidad debe quedar instalada después de la intervención.':'Explore the question each system answers and the capability that should remain after the intervention.'}</p></div>${systemExplorer()}</div></section>

<section class="section"><div class="container"><div class="heading"><div><p class="eyebrow">SIGNAL → SYSTEM → SCALE</p><h2 class="title">${es?'Diagnosticar. Diseñar. Activar. Medir.':'Diagnose. Design. Activate. Measure.'}</h2></div><p>${es?'La metodología evita comenzar por soluciones antes de comprender restricciones, dependencias, ownership y capacidad de adopción.':'The methodology prevents starting with solutions before understanding constraints, dependencies, ownership, and adoption capacity.'}</p></div>${methodCards()}</div></section>

<section class="section alt"><div class="container"><div class="heading"><div><p class="eyebrow">EXECUTIVE KNOWLEDGE</p><h2 class="title">${es?'Vea cómo pensamos antes de contratar la firma.':'See how we think before engaging the firm.'}</h2></div><a class="btn" href="${route('insights')}">${es?'Ver todas las perspectivas':'View all insights'} →</a></div><div class="grid2">${DATA.insights.map(insightCard).join('')}</div></div></section>

<section class="section dark"><div class="container"><div class="heading"><div><p class="eyebrow">INTERACTIVE RESOURCES</p><h2 class="title">${es?'Herramientas para convertir una inquietud en una lectura más concreta.':'Tools for turning a concern into a more concrete reading.'}</h2></div><a class="btn ghost storytelling-dark-btn" href="${route('resources')}">${es?'Abrir centro de recursos':'Open resource center'} →</a></div><div class="resource-grid">${DATA.resources.slice(0,3).map(r=>resourceCard(r,true)).join('')}</div></div></section>

<section class="section assessment-band"><div class="container assessment-layout"><div><p class="eyebrow">BUSINESS GROWTH MATURITY ASSESSMENT</p><h2 class="title">${es?'Antes de invertir más, identifique la brecha que merece atención primero.':'Before investing more, identify the gap that deserves attention first.'}</h2><p class="muted">${es?'Responda 24 preguntas en seis dimensiones. Obtendrá una puntuación, un perfil de madurez y la dimensión prioritaria que conviene investigar antes de decidir la próxima inversión.':'Answer 24 questions across six dimensions. You will receive a score, a maturity profile, and the priority dimension worth investigating before the next investment decision.'}</p><ul class="assessment-points"><li>${es?'Resultado inmediato':'Immediate result'}</li><li>${es?'Sin reunión previa':'No meeting required'}</li><li>${es?'Diseñado para dirección':'Built for leadership'}</li></ul><div class="actions"><a class="btn primary" href="${route('assessment')}">${es?'Analiza tu empresa con el Assessment':'Analyze your company with the Assessment'} ↗</a></div></div>${scorePreview()}</div></section>`;
};

render();
