import os
import re
from playwright.sync_api import sync_playwright

html_en = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  @page {
    size: letter;
    margin: 15mm 18mm;
  }
  body {
    font-family: 'Segoe UI', Roboto, -apple-system, BlinkMacSystemFont, Arial, sans-serif;
    color: #202124;
    line-height: 1.38;
    font-size: 9.2pt;
    margin: 0;
    padding: 0;
  }
  .header {
    text-align: center;
    margin-bottom: 12px;
  }
  .name {
    font-size: 22pt;
    font-weight: 700;
    color: #1a73e8;
    margin-bottom: 2px;
    letter-spacing: -0.5px;
  }
  .title {
    font-size: 11pt;
    font-weight: 600;
    color: #3c4043;
    margin-bottom: 4px;
  }
  .contact {
    font-size: 9pt;
    color: #5f6368;
  }
  .contact a {
    color: #1a73e8;
    text-decoration: none;
  }
  .section-title {
    font-size: 11pt;
    font-weight: 700;
    color: #1a73e8;
    margin-top: 11px;
    margin-bottom: 2px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  .divider {
    border: none;
    border-top: 1px solid #70757a;
    margin-top: 0;
    margin-bottom: 6px;
  }
  .summary {
    text-align: justify;
    margin-bottom: 6px;
    color: #202124;
  }
  ul {
    margin: 2px 0 5px 16px;
    padding: 0;
  }
  li {
    margin-bottom: 3px;
  }
  .job-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-top: 7px;
    margin-bottom: 1px;
  }
  .job-title {
    font-weight: 700;
    font-size: 9.7pt;
    color: #202124;
  }
  .job-date {
    font-size: 8.8pt;
    font-style: italic;
    color: #5f6368;
  }
  .job-desc {
    color: #3c4043;
    margin-bottom: 3px;
    font-style: italic;
    font-size: 9pt;
  }
</style>
</head>
<body>

<div class="header">
  <div class="name">Alexis Pizarro Abarca</div>
  <div class="title">Senior Supply Chain Data Analyst | Information Systems Engineer</div>
  <div class="contact">
    Heredia, Costa Rica &nbsp;|&nbsp; alexpizarro3@gmail.com &nbsp;|&nbsp; <a href="https://www.linkedin.com/in/alexis-pizarro-abarca-9018826b/">LinkedIn</a> &nbsp;|&nbsp; <a href="https://github.com/alexpizarro3">GitHub</a> &nbsp;|&nbsp; alexispizarroportafolio.vercel.app
  </div>
</div>

<div class="section-title">Professional Summary</div>
<hr class="divider">
<div class="summary">
  Experienced Information Systems Engineer and Data Integration Specialist with over 12 years of progressive engineering leadership across supply chain operations, technical data infrastructure, and cross-functional project management. Proven expertise within the Google ecosystem, architecting scalable data workflows with PLX Scripts, BigQuery, and GoogleSQL, complemented by enterprise Microsoft Power BI development. Accomplished track record of leading digital transformation initiatives that deliver substantial operational efficiency and over $500K in documented cost savings. Expert in automating complex business workflows using Python RPA, Google Apps Script, and Power Automate. Actively leveraging Generative AI (Google Gemini, NotebookLM, Gems) to accelerate data workflows, improve analytical precision, and streamline delivery. Proven Agile Leader and Scrum Master facilitating ceremonies, unblocking technical hurdles, and driving high team velocity.
</div>

<div class="section-title">Technical Skills & Tooling</div>
<hr class="divider">
<ul>
  <li><strong>Google Data Stack & Warehousing:</strong> PLX Scripts, BigQuery, GoogleSQL, PostgreSQL, Microsoft SQL Server, Data Warehousing, Data Modeling, ETL/ELT pipeline design, and data governance.</li>
  <li><strong>BI & Advanced Visualization:</strong> Looker Studio & Enterprise Looker, Microsoft Power BI (Star Schema modeling, Advanced DAX, Power Query M code), PLX Dashboards, and Advanced Excel (Power Pivot, VBA).</li>
  <li><strong>Process Automation & Generative AI:</strong> Python (RPA automation with Selenium, PyAutoGUI, Pandas, NumPy), Google Apps Script, Power Automate, Google Gemini AI, NotebookLM, Veo, Gemini Gems, Prompt Engineering, and API integrations.</li>
  <li><strong>Project Management & Agile Administration:</strong> Buganizer (Issue Tracking & Component Management), TaskFlow Portfolios, Aurora (JIRA-like tool Administration), Scrum Master (Sprint planning, Backlog grooming, Daily standups, Retrospectives, Velocity optimization).</li>
</ul>

<div class="section-title">Professional Experience</div>
<hr class="divider">

<div class="job-header">
  <span class="job-title">Senior Supply Chain Reverse Data Analyst | Google (via Accenture)</span>
  <span class="job-date">Sept 2025 – Present</span>
</div>
<div class="job-desc">Leading reverse logistics data analytics, telemetry signal integration, and technical workflow orchestration within Google's technical infrastructure organization.</div>
<ul>
  <li><strong>RevFleet WS2 Onboarding:</strong> Spearheading efforts in asset signal sourcing, VRM (Vendor Relationship Management) signal integration, telemetry schema mapping, and Business Requirements Document (BRD) refinement with global cross-functional partners.</li>
  <li><strong>TaskFlow Implementation & Portfolio Management:</strong> Directing team-level planning, resource tracking, sprint deliverables, and execution governance through TaskFlow Portfolios, ensuring predictable on-time delivery across operational tracks.</li>
  <li><strong>Advanced Data Extraction:</strong> Designing, tuning, and executing advanced PLX Scripts and GoogleSQL queries across multi-terabyte datasets to optimize data extraction latency, asset recovery tracking, and reverse logistics data hygiene.</li>
  <li><strong>Executive BI Dashboards:</strong> Developing strategic Looker reports and PLX Dashboards to deliver real-time operational visibility into asset turnaround times, disposition cycles, and vendor performance metrics to empower senior leadership decision-making.</li>
  <li><strong>Leadership & Mentorship:</strong> Active contributor in the <strong>Mentoring & Training Mavens</strong> program, conducting technical coaching workshops in GoogleSQL, PLX optimization, and data analysis best practices.</li>
</ul>

<div class="job-header">
  <span class="job-title">Business Intelligence Data Analyst | B2S Núcleos Fintech</span>
  <span class="job-date">Dec 2024 – Sept 2025</span>
</div>
<div class="job-desc">Spearheaded the design and deployment of business intelligence architecture and analytics pipelines for regional fintech products.</div>
<ul>
  <li>Developed and deployed strategic enterprise BI solutions in Power BI, implementing dimensional star schema data models, row-level security (RLS), and custom DAX metrics for financial and portfolio performance monitoring.</li>
  <li>Integrated PostgreSQL databases via Power Query and custom SQL queries, establishing automated ETL refresh pipelines that eliminated manual consolidation and accelerated executive reporting turnaround by 40%.</li>
  <li>Utilized Python (Pandas, NumPy) for advanced financial analytics, cohort behavior segmentation, and credit portfolio metrics, providing actionable insights for executive stakeholders and risk committees.</li>
  <li>Applied Agile BI delivery frameworks, collaborating with product owners and engineers to prioritize analytical backlogs and deliver iterative reporting enhancements.</li>
</ul>

<div class="job-header">
  <span class="job-title">Lead Manufacturing Data Analyst | Pozuelo (Nutresa Group)</span>
  <span class="job-date">2018 – 2024</span>
</div>
<div class="job-desc">Led plant manufacturing analytics, master production scheduling, and digital transformation initiatives across multi-line operations.</div>
<ul>
  <li>Spearheaded digital transformation and production planning modernization, migrating legacy manual Excel KPI tracking into unified Power BI models, delivering <strong>over $500K+ in validated operational savings</strong>.</li>
  <li>Architected and implemented Python-based MRP (Material Requirements Planning) simulation algorithms and dynamic safety-stock models, reducing raw material stockouts and lifting On-Time In-Full (OTIF) service levels from 85% to 89%.</li>
  <li>Engineered, tested, and deployed more than 20 Python RPAs to automate repetitive SAP ERP data extractions, production order releases, SQL Server synchronizations, and automated discrepancy alerts via email and messaging.</li>
  <li>Led high-impact CAPEX capital expenditure projects for line modernization, developing detailed cost analysis models per process order to accurately track raw material scrap, line efficiencies (OEE), and labor variances.</li>
</ul>

<div class="job-header">
  <span class="job-title">System Information Coordinator | Pozuelo (Nutresa Group)</span>
  <span class="job-date">2012 – 2018</span>
</div>
<div class="job-desc">Directed plant-floor systems integration, manufacturing data acquisition, and operational reporting automation.</div>
<ul>
  <li>Led the end-to-end plant digital transformation, integrating real-time Shop Floor telemetry, PLC/SCADA systems, and SAP ERP into unified Microsoft SQL Server relational databases.</li>
  <li>Engineered custom real-time web applications and interactive forms using Google Apps Script and Google Workspace, eliminating paper-based logs across shift changes and quality audit points.</li>
  <li>Championed the plant "Paperless Initiative", implementing MES reporting solutions that reduced operational downtime, saved <strong>$150,000 annually</strong> in administrative overhead, and improved plant-wide OEE by 2%.</li>
</ul>

<div class="section-title">Key Strategic Achievements & Business Impact</div>
<hr class="divider">
<ul>
  <li><strong>$500K+ Cost Optimization:</strong> Transformed fragmented manufacturing data into predictive BI models, optimizing line changeover times and raw material consumption.</li>
  <li><strong>20+ Enterprise Automations:</strong> Built Python RPA and API automated workflows running 24/7, freeing hundreds of engineering hours annually and improving data fidelity.</li>
  <li><strong>Google Reverse Logistics Telemetry:</strong> Enhanced asset tracking fidelity and telemetry signal reliability across multiple vendor channels, establishing robust data pipelines for recovery operations.</li>
</ul>

<div class="section-title">Education & Professional Certifications</div>
<hr class="divider">
<ul>
  <li><strong>B.S. in Information Systems Engineering</strong> – Universidad Hispanoamericana <em>(Curriculum complete - Thesis Pending)</em></li>
  <li><strong>Google Cloud Platform Analytics Certification</strong> (2025)</li>
  <li><strong>Google Data Analytics Professional Certificate</strong> (2024)</li>
  <li><strong>Data Analyst with Power BI</strong> – DataCamp (2025)</li>
  <li><strong>EF SET English Certificate (B2-C1 High Proficiency)</strong></li>
  <li><strong>Data Visualization with Power BI</strong> – Great Learning (2023)</li>
  <li><strong>Azure Fundamentals</strong> – Great Learning (2023)</li>
</ul>

<div class="section-title">Languages</div>
<hr class="divider">
<ul>
  <li><strong>Spanish:</strong> Native Speaker</li>
  <li><strong>English:</strong> Advanced (B2–C1 Professional Working Proficiency)</li>
</ul>

</body>
</html>
"""

html_es = """<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<style>
  @page {
    size: letter;
    margin: 15mm 18mm;
  }
  body {
    font-family: 'Segoe UI', Roboto, -apple-system, BlinkMacSystemFont, Arial, sans-serif;
    color: #202124;
    line-height: 1.38;
    font-size: 9.2pt;
    margin: 0;
    padding: 0;
  }
  .header {
    text-align: center;
    margin-bottom: 12px;
  }
  .name {
    font-size: 22pt;
    font-weight: 700;
    color: #1a73e8;
    margin-bottom: 2px;
    letter-spacing: -0.5px;
  }
  .title {
    font-size: 11pt;
    font-weight: 600;
    color: #3c4043;
    margin-bottom: 4px;
  }
  .contact {
    font-size: 9pt;
    color: #5f6368;
  }
  .contact a {
    color: #1a73e8;
    text-decoration: none;
  }
  .section-title {
    font-size: 11pt;
    font-weight: 700;
    color: #1a73e8;
    margin-top: 11px;
    margin-bottom: 2px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  .divider {
    border: none;
    border-top: 1px solid #70757a;
    margin-top: 0;
    margin-bottom: 6px;
  }
  .summary {
    text-align: justify;
    margin-bottom: 6px;
    color: #202124;
  }
  ul {
    margin: 2px 0 5px 16px;
    padding: 0;
  }
  li {
    margin-bottom: 3px;
  }
  .job-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-top: 7px;
    margin-bottom: 1px;
  }
  .job-title {
    font-weight: 700;
    font-size: 9.7pt;
    color: #202124;
  }
  .job-date {
    font-size: 8.8pt;
    font-style: italic;
    color: #5f6368;
  }
  .job-desc {
    color: #3c4043;
    margin-bottom: 3px;
    font-style: italic;
    font-size: 9pt;
  }
</style>
</head>
<body>

<div class="header">
  <div class="name">Alexis Pizarro Abarca</div>
  <div class="title">Senior Supply Chain Data Analyst | Ingeniero en Sistemas de Información</div>
  <div class="contact">
    Heredia, Costa Rica &nbsp;|&nbsp; alexpizarro3@gmail.com &nbsp;|&nbsp; <a href="https://www.linkedin.com/in/alexis-pizarro-abarca-9018826b/">LinkedIn</a> &nbsp;|&nbsp; <a href="https://github.com/alexpizarro3">GitHub</a> &nbsp;|&nbsp; alexispizarroportafolio.vercel.app
  </div>
</div>

<div class="section-title">Resumen Profesional</div>
<hr class="divider">
<div class="summary">
  Ingeniero en Sistemas de Información y Especialista en Integración de Datos con más de 12 años de trayectoria técnica y de liderazgo en operaciones de supply chain, infraestructura de datos y gestión de proyectos multidisciplinarios. Amplia experiencia comprobada en el ecosistema de Google desarrollando flujos analíticos de alto rendimiento mediante PLX Scripts, BigQuery y GoogleSQL, combinada con un dominio experto de Microsoft Power BI y bases de datos relacionales. Historial comprobado en el diseño y ejecución de iniciativas de transformación digital que generan sustanciales incrementos en eficiencia operativa y ahorros documentados superiores a $500K+. Especialista en automatización de procesos complejos utilizando Python RPA, Google Apps Script y Power Automate. Pionero en el aprovechamiento de Inteligencia Artificial Generativa (Google Gemini, NotebookLM, Gems) para acelerar flujos de trabajo de datos, optimizar entregables y maximizar la precisión analítica. Liderazgo ágil activo como Scrum Master, facilitando ceremonias ágiles, eliminando bloqueos técnicos y maximizando la velocidad del equipo.
</div>

<div class="section-title">Habilidades Técnicas y Herramientas</div>
<hr class="divider">
<ul>
  <li><strong>Google Data Stack y Warehousing:</strong> PLX Scripts, BigQuery, GoogleSQL, PostgreSQL, Microsoft SQL Server, Arquitectura de Data Warehousing, Modelado de Datos, diseño de pipelines ETL/ELT y gobernanza de datos.</li>
  <li><strong>BI y Visualización Avanzada:</strong> Looker Studio & Enterprise Looker, Microsoft Power BI (Modelado en esquema estrella, DAX avanzado, Power Query M code), PLX Dashboards y Excel Avanzado (Power Pivot, VBA).</li>
  <li><strong>Automatización de Procesos e IA Generativa:</strong> Python (Automatización RPA con Selenium, PyAutoGUI, Pandas, NumPy), Google Apps Script, Power Automate, Google Gemini AI, NotebookLM, Veo, Gemini Gems, Ingeniería de Prompts e integración de APIs.</li>
  <li><strong>Gestión de Proyectos y Liderazgo Ágil:</strong> Buganizer (Issue Tracking y Gestión de Componentes), TaskFlow Portfolios, Aurora (Administración de plataforma estilo JIRA), Scrum Master (Sprint planning, Backlog refinement, Daily standups, Retrospectivas, Optimización de velocidad).</li>
</ul>

<div class="section-title">Experiencia Profesional</div>
<hr class="divider">

<div class="job-header">
  <span class="job-title">Senior Supply Chain Reverse Data Analyst | Google (vía Accenture)</span>
  <span class="job-date">Septiembre 2025 – Presente</span>
</div>
<div class="job-desc">Liderazgo en analítica de datos de logística inversa, integración de señales de telemetría y orquestación de flujos técnicos dentro de la infraestructura de Google.</div>
<ul>
  <li><strong>Onboarding RevFleet WS2:</strong> Liderazgo técnico en signal sourcing de activos, integración de señales VRM (Vendor Relationship Management), mapeo de telemetría y refinamiento de documentos de requerimientos de negocio (BRD) con equipos globales.</li>
  <li><strong>Implementación de TaskFlow y Gestión de Portafolio:</strong> Dirección de la planificación a nivel de equipo, seguimiento de recursos, entregables de sprint y gobernanza de ejecución mediante TaskFlow Portfolios, garantizando cumplimiento de hitos críticos.</li>
  <li><strong>Optimización de Extracción de Datos:</strong> Diseño, ajuste y ejecución de PLX Scripts avanzados y consultas en GoogleSQL sobre datasets multi-terabyte, reduciendo latencias de consulta y optimizando el rastreo y recuperación de activos.</li>
  <li><strong>Dashboards Ejecutivos de BI:</strong> Desarrollo y mantenimiento de reportes estratégicos en Looker y PLX Dashboards para brindar visibilidad en tiempo real sobre tiempos de ciclo, reacondicionamiento y métricas de cumplimiento de proveedores a la alta gerencia.</li>
  <li><strong>Liderazgo y Mentoría:</strong> Participante activo del programa <strong>Mentoring & Training Mavens</strong>, impartiendo talleres de formación técnica en GoogleSQL, optimización en PLX y mejores prácticas de ingeniería de datos.</li>
</ul>

<div class="job-header">
  <span class="job-title">Business Intelligence Data Analyst | B2S Núcleos Fintech</span>
  <span class="job-date">Diciembre 2024 – Septiembre 2025</span>
</div>
<div class="job-desc">Diseño e implementación de la arquitectura de business intelligence y pipelines analíticos para soluciones fintech regionales.</div>
<ul>
  <li>Desarrollo e implementación de soluciones estratégicas de BI en Power BI, modelando esquemas estrella dimensionales, seguridad a nivel de fila (RLS) y métricas DAX avanzadas para el monitoreo financiero de carteras en LATAM y EE.UU.</li>
  <li>Integración de bases de datos PostgreSQL mediante Power Query y consultas SQL optimizadas, construyendo pipelines automatizados de extracción ETL que eliminaron la consolidación manual y redujeron los tiempos de reporte en un 40%.</li>
  <li>Utilización de Python (Pandas, NumPy) para analítica financiera avanzada, segmentación de comportamiento de cohortes y métricas de riesgo crediticio, entregando insights estratégicos a comités directivos.</li>
  <li>Aplicación de metodologías ágiles de entrega de BI, colaborando directamente con Product Owners e ingenieros para priorizar requerimientos analíticos e iteraciones continuas.</li>
</ul>

<div class="job-header">
  <span class="job-title">Lead Manufacturing Data Analyst | Pozuelo (Grupo Nutresa)</span>
  <span class="job-date">2018 – 2024</span>
</div>
<div class="job-desc">Liderazgo de analítica de manufactura, programación maestra de producción y transformación digital en operaciones multi-planta.</div>
<ul>
  <li>Liderazgo de la modernización en planificación de producción y transformación digital, migrando sistemas legados en Excel a modelos centralizados en Power BI, generando <strong>ahorros operacionales validados superiores a $500K+</strong>.</li>
  <li>Diseño e implementación de modelos de simulación MRP (Material Requirements Planning) en Python y algoritmos dinámicos de stock de seguridad, minimizando agotados de materia prima y elevando el nivel de servicio OTIF del 85% al 89%.</li>
  <li>Desarrollo y despliegue de más de 20 RPAs en Python para automatizar la extracción de datos desde SAP ERP, liberación masiva de órdenes, sincronización con SQL Server y envío de alertas automáticas de anomalías vía email y mensajería.</li>
  <li>Liderazgo en proyectos de inversión de capital CAPEX para modernización de planta, desarrollando modelos analíticos de costo por orden de proceso para rastrear scrap de materias primas, eficiencia de máquinas (OEE) y variaciones de mano de obra.</li>
</ul>

<div class="job-header">
  <span class="job-title">Coordinador de Sistemas de Información | Pozuelo (Grupo Nutresa)</span>
  <span class="job-date">2012 – 2018</span>
</div>
<div class="job-desc">Dirección de la integración de sistemas en piso de planta, captura de datos operativos y automatización de reportes.</div>
<ul>
  <li>Liderazgo en la transformación digital integral de planta, conectando telemetría de piso, sistemas PLC/SCADA y el ERP SAP a bases de datos relacionales centralizadas en Microsoft SQL Server.</li>
  <li>Desarrollo de aplicaciones web a la medida y formularios en tiempo real con Google Apps Script y Google Workspace, digitalizando bitácoras de cambio de turno y puntos de inspección de calidad.</li>
  <li>Liderazgo de la iniciativa "Planta Sin Papel", implementando soluciones de captura y reportes MES que ahorraron <strong>$150,000 anuales</strong> en costos administrativos y elevaron el OEE global de planta en un 2%.</li>
</ul>

<div class="section-title">Logros Estratégicos e Impacto de Negocio</div>
<hr class="divider">
<ul>
  <li><strong>Optimización de Costos de +$500K:</strong> Transformación de datos dispersos de manufactura en modelos predictivos de BI, optimizando tiempos de set-up de línea y consumo de insumos.</li>
  <li><strong>+20 Automatizaciones Empresariales:</strong> Creación de RPAs en Python y flujos automáticos activos 24/7, liberando cientos de horas de ingeniería al año e incrementando la fidelidad de datos.</li>
  <li><strong>Telemetría de Logística Inversa en Google:</strong> Fortalecimiento de la trazabilidad de activos y fiabilidad de señales de telemetría a través de múltiples canales de proveedores para recuperación de infraestructura.</li>
</ul>

<div class="section-title">Educación y Certificaciones Profesionales</div>
<hr class="divider">
<ul>
  <li><strong>Bachillerato en Ingeniería en Sistemas de Información</strong> – Universidad Hispanoamericana <em>(Currículum completo - Tesis pendiente)</em></li>
  <li><strong>Certificación Google Cloud Platform Analytics</strong> (2025)</li>
  <li><strong>Certificado Profesional Google Data Analytics</strong> (2024)</li>
  <li><strong>Data Analyst with Power BI</strong> – DataCamp (2025)</li>
  <li><strong>Certificado de Inglés EF SET (B2-C1 Alta Competencia Profesional)</strong></li>
  <li><strong>Data Visualization with Power BI</strong> – Great Learning (2023)</li>
  <li><strong>Azure Fundamentals</strong> – Great Learning (2023)</li>
</ul>

<div class="section-title">Idiomas</div>
<hr class="divider">
<ul>
  <li><strong>Español:</strong> Nativo</li>
  <li><strong>Inglés:</strong> Avanzado (B2–C1 Competencia Laboral Profesional)</li>
</ul>

</body>
</html>
"""

with sync_playwright() as p:
    browser = p.chromium.launch()
    
    # EN PDF
    page = browser.new_page()
    page.set_content(html_en)
    en_path = os.path.abspath('public/cv/Compact_CV_Alexis_EN.pdf')
    page.pdf(path=en_path, format='Letter', print_background=True)
    page.close()

    # ES PDF
    page = browser.new_page()
    page.set_content(html_es)
    es_path = os.path.abspath('public/cv/Compact_CV_Alexis_ES.pdf')
    page.pdf(path=es_path, format='Letter', print_background=True)
    page.close()

    browser.close()

# Verify page count
with open('public/cv/Compact_CV_Alexis_EN.pdf', 'rb') as f:
    text = f.read().decode('latin-1')
    en_pages = len(re.findall(r'/Type\s*/Page\b', text))

with open('public/cv/Compact_CV_Alexis_ES.pdf', 'rb') as f:
    text = f.read().decode('latin-1')
    es_pages = len(re.findall(r'/Type\s*/Page\b', text))

print(f"Generated PDFs: EN has {en_pages} pages, ES has {es_pages} pages.")
