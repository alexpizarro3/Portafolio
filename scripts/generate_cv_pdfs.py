import os
from playwright.sync_api import sync_playwright

html_en = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  @page {
    size: letter;
    margin: 16mm 18mm;
  }
  body {
    font-family: 'Segoe UI', Roboto, -apple-system, BlinkMacSystemFont, Arial, sans-serif;
    color: #202124;
    line-height: 1.42;
    font-size: 9.5pt;
    margin: 0;
    padding: 0;
  }
  .header {
    text-align: center;
    margin-bottom: 14px;
  }
  .name {
    font-size: 22pt;
    font-weight: 700;
    color: #1a73e8;
    margin-bottom: 3px;
    letter-spacing: -0.5px;
  }
  .title {
    font-size: 11pt;
    font-weight: 600;
    color: #3c4043;
    margin-bottom: 5px;
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
    font-size: 12pt;
    font-weight: 700;
    color: #1a73e8;
    margin-top: 12px;
    margin-bottom: 3px;
  }
  .divider {
    border: none;
    border-top: 1px solid #70757a;
    margin-top: 0;
    margin-bottom: 7px;
  }
  .summary {
    text-align: justify;
    margin-bottom: 8px;
    color: #202124;
  }
  ul {
    margin: 3px 0 6px 16px;
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
    font-size: 10pt;
    color: #202124;
  }
  .job-date {
    font-size: 9pt;
    font-style: italic;
    color: #5f6368;
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
  Experienced Information Systems Engineer and Data Integration Specialist with a strong background in supply chain operations, technical infrastructure, and project management within the Google ecosystem. Expert in the Google Data Stack (PLX, BigQuery, GoogleSQL) and Microsoft Power BI. Proven track record in automating complex workflows using Python RPA and Power Automate, leading digital transformation initiatives that deliver significant cost savings and operational efficiency. Leveraging Generative AI (Google Gemini, NotebookLM, Gems) to accelerate data workflows and optimize complex project delivery, integrating AI tools to enhance analytical accuracy and operational efficiency. Active Scrum Master facilitating agile ceremonies and optimizing team velocity.
</div>

<div class="section-title">Technical Skills</div>
<hr class="divider">
<ul>
  <li><strong>Data Stack:</strong> PLX Scripts, BigQuery, GoogleSQL, PostgreSQL, SQL Server.</li>
  <li><strong>BI & Visualization:</strong> Looker, Power BI (Power Query/DAX), PLX Dashboards, Advanced Excel.</li>
  <li><strong>Automation & AI:</strong> Python (RPA), Google Apps Script, Power Automate, Google Gemini AI, NotebookLM, Veo, Gemini Gems.</li>
  <li><strong>Project Management Tools:</strong> Buganizer (Issue Tracking & Component Management), TaskFlow Portfolios, Aurora (JIRA-like tool Admin).</li>
  <li><strong>Agile Leadership & Tool Administration:</strong> Serving as Scrum Master, facilitating agile ceremonies and optimizing team velocity.</li>
</ul>

<div class="section-title">Professional Experience</div>
<hr class="divider">

<div class="job-header">
  <span class="job-title">Senior Supply Chain Reverse Data Analyst | Google (via Accenture)</span>
  <span class="job-date">Sept 2025 – Present</span>
</div>
<ul>
  <li><strong>RevFleet WS2 Onboarding:</strong> Leading efforts in asset signal sourcing, VRM (Vendor Relationship Management) signal integration, and Business Requirements Document (BRD) refinement.</li>
  <li><strong>TaskFlow Implementation:</strong> Managing team-level planning and execution through TaskFlow Portfolios.</li>
  <li>Optimizing data extraction using advanced PLX Scripts and GoogleSQL for Reverse Logistics.</li>
  <li>Building strategic Looker reports and PLX Dashboards to drive decision-making.</li>
  <li>Active participant in the <strong>Mentoring & Training Mavens</strong> program, focused on leadership and career growth.</li>
</ul>

<div class="job-header">
  <span class="job-title">Business Intelligence Data Analyst | B2S Núcleos Fintech</span>
  <span class="job-date">Dec 2024 – Sept 2025</span>
</div>
<ul>
  <li>Developed strategic BI solutions using Power BI and integrated PostgreSQL databases via Power Query.</li>
  <li>Utilized Python for data transformation and advanced analytics to deliver financial insights.</li>
</ul>

<div class="job-header">
  <span class="job-title">Lead Manufacturing Data Analyst | Pozuelo (Nutresa Group)</span>
  <span class="job-date">2018 – 2024</span>
</div>
<ul>
  <li>Led production planning and digital transformation, migrating legacy systems to Power BI, saving $500K+.</li>
  <li>Developed Python-based MRP simulations and 20+ Python RPAs for SAP data extraction and SQL interaction.</li>
</ul>

<div class="job-header">
  <span class="job-title">System Information Coordinator | Pozuelo (Nutresa Group)</span>
  <span class="job-date">2012 – 2018</span>
</div>
<ul>
  <li>Led plant digital transformation, integrating SAP and Shop Floor data using SQL Server and Python.</li>
  <li>Developed real-time web applications with Google Apps Script for digitization of critical processes.</li>
</ul>

<div class="section-title">Education & Certifications</div>
<hr class="divider">
<ul>
  <li><strong>B.S. in Information Systems Engineering</strong> – Universidad Hispanoamericana (Curriculum complete - Thesis Pending).</li>
  <li><strong>Google Cloud Platform Analytics Certification</strong> (2025).</li>
  <li><strong>Google Data Analytics Professional Certificate</strong> (2024).</li>
  <li><strong>Data Analyst with Power BI</strong> – DataCamp (2025).</li>
  <li><strong>EF SET English Certificate (B2-C1)</strong>.</li>
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
    margin: 16mm 18mm;
  }
  body {
    font-family: 'Segoe UI', Roboto, -apple-system, BlinkMacSystemFont, Arial, sans-serif;
    color: #202124;
    line-height: 1.42;
    font-size: 9.5pt;
    margin: 0;
    padding: 0;
  }
  .header {
    text-align: center;
    margin-bottom: 14px;
  }
  .name {
    font-size: 22pt;
    font-weight: 700;
    color: #1a73e8;
    margin-bottom: 3px;
    letter-spacing: -0.5px;
  }
  .title {
    font-size: 11pt;
    font-weight: 600;
    color: #3c4043;
    margin-bottom: 5px;
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
    font-size: 12pt;
    font-weight: 700;
    color: #1a73e8;
    margin-top: 12px;
    margin-bottom: 3px;
  }
  .divider {
    border: none;
    border-top: 1px solid #70757a;
    margin-top: 0;
    margin-bottom: 7px;
  }
  .summary {
    text-align: justify;
    margin-bottom: 8px;
    color: #202124;
  }
  ul {
    margin: 3px 0 6px 16px;
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
    font-size: 10pt;
    color: #202124;
  }
  .job-date {
    font-size: 9pt;
    font-style: italic;
    color: #5f6368;
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
  Ingeniero en Sistemas de Información y Especialista en Integración de Datos con sólida trayectoria en operaciones de supply chain, infraestructura técnica y gestión de proyectos dentro del ecosistema de Google. Experto en el Google Data Stack (PLX, BigQuery, GoogleSQL) y Microsoft Power BI. Historial comprobado en automatización de flujos de trabajo complejos mediante Python RPA y Power Automate, liderando iniciativas de transformación digital que generan ahorros sustanciales y máxima eficiencia operativa. Aprovechamiento de Inteligencia Artificial Generativa (Google Gemini, NotebookLM, Gems) para acelerar flujos de trabajo de datos y optimizar la entrega de proyectos complejos, integrando herramientas de IA para mejorar la precisión analítica y la eficiencia operativa. Scrum Master activo facilitando ceremonias ágiles y optimizando la velocidad del equipo.
</div>

<div class="section-title">Habilidades Técnicas</div>
<hr class="divider">
<ul>
  <li><strong>Data Stack:</strong> PLX Scripts, BigQuery, GoogleSQL, PostgreSQL, SQL Server.</li>
  <li><strong>BI & Visualización:</strong> Looker, Power BI (Power Query/DAX), PLX Dashboards, Excel Avanzado.</li>
  <li><strong>Automatización e IA:</strong> Python (RPA), Google Apps Script, Power Automate, Google Gemini AI, NotebookLM, Veo, Gemini Gems.</li>
  <li><strong>Herramientas de Gestión de Proyectos:</strong> Buganizer (Issue Tracking y Gestión de Componentes), TaskFlow Portfolios, Aurora (Admin de herramienta estilo JIRA).</li>
  <li><strong>Liderazgo Ágil y Administración:</strong> Desempeño como Scrum Master, facilitación de ceremonias ágiles y optimización de velocidad del equipo.</li>
</ul>

<div class="section-title">Experiencia Profesional</div>
<hr class="divider">

<div class="job-header">
  <span class="job-title">Senior Supply Chain Reverse Data Analyst | Google (vía Accenture)</span>
  <span class="job-date">Septiembre 2025 – Presente</span>
</div>
<ul>
  <li><strong>Onboarding RevFleet WS2:</strong> Liderazgo en signal sourcing de activos, integración de señales VRM (Vendor Relationship Management) y refinamiento de documentos de requerimientos de negocio (BRD).</li>
  <li><strong>Implementación de TaskFlow:</strong> Gestión de planificación y ejecución a nivel de equipo mediante TaskFlow Portfolios.</li>
  <li>Optimización de extracción de datos utilizando PLX Scripts avanzados y GoogleSQL para Reverse Logistics.</li>
  <li>Construcción de reportes estratégicos en Looker y PLX Dashboards para toma de decisiones.</li>
  <li>Participante activo en el programa de liderazgo y crecimiento profesional <strong>Mentoring & Training Mavens</strong>.</li>
</ul>

<div class="job-header">
  <span class="job-title">Business Intelligence Data Analyst | B2S Núcleos Fintech</span>
  <span class="job-date">Diciembre 2024 – Septiembre 2025</span>
</div>
<ul>
  <li>Desarrollo de soluciones estratégicas de BI en Power BI e integración de bases de datos PostgreSQL vía Power Query.</li>
  <li>Utilización de Python para transformación de datos y analítica avanzada para entregar insights financieros.</li>
</ul>

<div class="job-header">
  <span class="job-title">Lead Manufacturing Data Analyst | Pozuelo (Grupo Nutresa)</span>
  <span class="job-date">2018 – 2024</span>
</div>
<ul>
  <li>Liderazgo en planificación de producción y transformación digital, migrando sistemas legados a Power BI, ahorrando más de $500K+.</li>
  <li>Desarrollo de simulaciones MRP basadas en Python y más de 20 RPAs en Python para extracción de datos SAP e interacción con SQL.</li>
</ul>

<div class="job-header">
  <span class="job-title">Coordinador de Sistemas de Información | Pozuelo (Grupo Nutresa)</span>
  <span class="job-date">2012 – 2018</span>
</div>
<ul>
  <li>Liderazgo en transformación digital en planta, integrando datos de SAP y Shop Floor con SQL Server y Python.</li>
  <li>Desarrollo de aplicaciones web en tiempo real con Google Apps Script para digitalización de procesos críticos.</li>
</ul>

<div class="section-title">Educación y Certificaciones</div>
<hr class="divider">
<ul>
  <li><strong>Bachillerato en Ingeniería en Sistemas de Información</strong> – Universidad Hispanoamericana (Currículum completo - Tesis pendiente).</li>
  <li><strong>Certificación Google Cloud Platform Analytics</strong> (2025).</li>
  <li><strong>Certificado Profesional Google Data Analytics</strong> (2024).</li>
  <li><strong>Data Analyst with Power BI</strong> – DataCamp (2025).</li>
  <li><strong>Certificado de Inglés EF SET (B2-C1)</strong>.</li>
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
    print('EN PDF generated at:', en_path)
    page.close()

    # ES PDF
    page = browser.new_page()
    page.set_content(html_es)
    es_path = os.path.abspath('public/cv/Compact_CV_Alexis_ES.pdf')
    page.pdf(path=es_path, format='Letter', print_background=True)
    print('ES PDF generated at:', es_path)
    page.close()

    browser.close()
