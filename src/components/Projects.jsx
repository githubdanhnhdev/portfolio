import { useEffect, useRef } from 'react';

const PROJECTS = [
  {
    icon: 'fas fa-globe',
    title: 'System Check Domain',
    date: 'Jun 2024 - Apr 2026',
    customer: 'Vietnamese',
    teamSize: '6',
    desc: 'An internal web system designed for marketing and SEO operations. Key features include monitoring domain rankings on Google Search, verifying domain ownership, checking domain accessibility across 8 major network providers / ISPs, and continuously capturing/recording the domain access processes. The system architecture consists of an Admin panel, a core API service, and a background Automation Tool.',
    responsibilities: [
      'Core Fullstack Development: Built high-throughput core engines to track Google SERP rankings for 3,000+ keywords and automated daily accessibility checks for 23,000+ domains across 8 major ISPs (generating 200,000+ automated video/screenshot logs daily), reducing manual testing efforts by 90%.',
      'Third-Party Integrations: Integrated SEO APIs (keywordtool.io, searchapi.io) and OpenAI SDK for intelligent data processing.',
      'Infrastructure & Monitoring: Set up Zabbix to monitor 4G proxy usage and integrated Telegram Bot SDK for real-time system alerts.',
      'Maintenance: Resolved ad-hoc critical incidents within 24 hours and delivered bi-weekly progress reports to stakeholders.',
      'Vibe Coding: Leveraged Vibe Coding methodologies utilizing Cursor/Antigravity to accelerate frontend UI development (Vue.js, Naive UI) and Laravel API boilerplate by 40%, saving approximately [2-3 weeks] of initial setup time and optimizing engineering focus toward database tuning and queue management.'
    ],
    tags: ['Vue 3', 'NaiveUI', 'Laravel', 'MySQL', 'Elasticsearch', 'Redis', 'Go', 'Fiber', 'gRPC', 'Node.js', 'NestJS', 'MongoDB', 'Puppeteer', 'FFmpeg', 'Zabbix'],
    link: 'https://domain.longtu.club/',
    secondaryLinks: [
      { label: 'Check Automation Engine', link: 'http://160.19.158.249:33004/health' },
      { label: 'Record Automation Engine', link: 'http://160.19.158.216:33005/health' }
    ]
  },
  {
    icon: 'fas fa-search',
    title: 'Search Tool',
    date: 'May 2025 - Sep 2025',
    customer: 'Vietnamese',
    teamSize: '2',
    desc: 'A highly distributed system focused on task automation, specifically engineered to automatically execute Google keyword searches and anchor text searches. The architecture ensures high scalability across multiple background workers, featuring advanced anti-bot capabilities to seamlessly bypass Google\'s strict CAPTCHAs and extract Search Engine Results Page (SERP) data without human intervention.',
    responsibilities: [
      'High-Performance API: Developed a fast RESTful API core using Go (Fiber) to orchestrate and schedule thousands of concurrent domain ranking and anchor text search tasks.',
      'Core Search Engine: Designed the primary automation workers utilizing Node.js/NestJS to mimic human behaviors, utilizing dynamic proxy rotation and intelligent browser fingerprint profiling to achieve a [90%+] successful CAPTCHA bypass rate at scale.',
      'Data Pipelines: Engineered secure webhook callbacks to reliably extract, verify, and sync the exact domain SERP rankings and anchor text data back to central databases.'
    ],
    tags: ['Go', 'Fiber', 'gRPC', 'Node.js', 'NestJS', 'Puppeteer', 'MySQL', 'MongoDB', 'Redis', 'Docker'],
    link: 'https://search-api.longtu.club',
    secondaryLinks: [
      { label: 'Worker Service', link: 'http://160.19.158.217:33004/health' }
    ]
  },
  {
    icon: 'fas fa-shield-alt',
    title: 'Proxy Tool',
    date: 'May 2025 - Jul 2025',
    customer: 'Vietnamese',
    teamSize: '2',
    desc: 'A specialized microservice designed for automated proxy rotation, health monitoring, and IP distribution. The platform securely manages thousands of proxies simultaneously, employing intelligent rotation algorithms and real-time health checks to ensure uninterrupted operations across multiple distributed background automation tools.',
    responsibilities: [
      'Project Setup: Initialized the project structure with Node.js and NestJS, and Dockerized the entire application for deployment.',
      'Rotation Engine: Developed the core proxy distribution logic to assign working IPs to client tools, managing [200+] concurrent proxy rotations and completely eliminating rate limits and IP bans for scraping workers.',
      'Health Checks (Cron): Built background cron tasks executing every [30 seconds] to continuously verify proxy health, automatically filtering and disabling dead/blocked IPs to maintain an active pool with [98%+] availability.',
      '3rd-Party Syncing: Handled auto bulk proxy imports from external providers (e.g., ZingProxy, KiotProxy).',
      'Core APIs: Built fast RESTful APIs supporting CRUD operations, dynamic pagination, and detailed filtering, leveraging NestJS and MongoDB indexing to achieve an ultra-low latency of under 20ms per proxy distribution request.'
    ],
    tags: ['Go', 'Fiber', 'gRPC', 'Node.js', 'NestJS', 'MongoDB', 'Typegoose', 'Swagger', 'Docker'],
    link: 'http://65.19.178.20:51006/health'
  },
  {
    icon: 'fas fa-shopping-bag',
    title: '45CM (45cm.com)',
    date: 'Jun 2023 - May 2024',
    customer: 'Korean',
    teamSize: '6',
    desc: '45cm is a website that buys and sells used items. Customers will be the ones who post products for sale or search for the products they want to buy.',
    responsibilities: [
      'API & Payments: Built backend CRUD APIs for product management and integrated local payment gateways (ZaloPay, VNPay).',
      'Search System: Synced product data from MySQL to Elasticsearch to handle fast searches for large inventories.',
      'Frontend & Notifications: Configured OneSignal for push notifications and ran Lighthouse audits to fix frontend performance issues.'
    ],
    tags: ['Laravel', 'Elasticsearch', 'ReactJs', 'MySQL', 'MongoDB', 'Redis'],
    link: 'https://www.facebook.com/45cmvn'
  }
];

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const el = sectionRef.current;
    if (el) {
      el.classList.add('fade-in');
      observer.observe(el);

      const cards = el.querySelectorAll('.project-card');
      cards.forEach((card, index) => {
        card.classList.add('fade-in');
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
      });
    }

    return () => {
      if (el) {
        observer.unobserve(el);
        const cards = el.querySelectorAll('.project-card');
        cards.forEach(card => observer.unobserve(card));
      }
    };
  }, []);

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">Some of my notable work</p>
        </div>
        <div className="projects-grid">
          {PROJECTS.map((proj, idx) => (
            <div key={idx} className="project-card">
              <div className="project-image">
                <i className={proj.icon}></i>
              </div>
              <div className="project-content">
                <h3 style={{ fontSize: '1.4rem', fontWeight: 'var(--font-weight-bold)', marginBottom: '0.5rem' }}>
                  {proj.title}
                </h3>

                {/* Project Metadata */}
                <div className="project-metadata" style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: '0.5rem 0.75rem',
                  fontSize: '0.85rem',
                  color: 'var(--primary-color)',
                  fontWeight: 'var(--font-weight-semibold)',
                  marginBottom: '1rem'
                }}>
                  <span><i className="fas fa-calendar-alt" style={{ marginRight: '4px' }}></i> {proj.date}</span>
                  <span style={{ color: 'var(--border-color)' }}>|</span>
                  <span><i className="fas fa-user" style={{ marginRight: '4px' }}></i> Client: {proj.customer}</span>
                  <span style={{ color: 'var(--border-color)' }}>|</span>
                  <span><i className="fas fa-users" style={{ marginRight: '4px' }}></i> Team: {proj.teamSize}</span>
                </div>

                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '0.95rem' }}>
                  {proj.desc}
                </p>

                {/* Key Responsibilities */}
                <div className="project-responsibilities" style={{ marginTop: '1.25rem', marginBottom: '1.5rem' }}>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                    Key Responsibilities:
                  </h4>
                  <ul style={{ paddingLeft: '1.2rem', listStyleType: 'disc' }}>
                    {proj.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.4rem', lineHeight: '1.5' }}>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies used */}
                <div className="project-tags">
                  {proj.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="tag">{tag}</span>
                  ))}
                </div>

                {/* Live Demo & Action Links */}
                <div className="project-links" style={{ marginTop: '1.5rem', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '0.85rem',
                      padding: '8px 16px',
                      textDecoration: 'none'
                    }}
                  >
                    <i className="fas fa-external-link-alt" style={{ fontSize: '0.75rem' }}></i>
                    Live Demo
                  </a>
                  {proj.secondaryLinks && proj.secondaryLinks.map((secLink, sIdx) => (
                    <a
                      key={sIdx}
                      href={secLink.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '0.85rem',
                        padding: '8px 16px',
                        textDecoration: 'none'
                      }}
                    >
                      <i className={
                        secLink.label.toLowerCase().includes('engine') ? 'fas fa-cogs' :
                          secLink.label.toLowerCase().includes('worker') ? 'fas fa-server' :
                            secLink.label.toLowerCase().includes('core') ? 'fas fa-sync-alt' : 'fas fa-terminal'
                      } style={{ fontSize: '0.75rem' }}></i>
                      {secLink.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}