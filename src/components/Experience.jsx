import { useState, useEffect, useRef } from 'react';

const EXPERIENCES = [
  {
    date: 'Jun 2024 - May 2026',
    title: 'Sub Lead - Fullstack Developer',
    company: 'Winads Digital Agency',
    coreRole: 'Co-led a 7-member engineering team and architected high-performance internal automation systems.',
    impact: [
      'Launched 3 core automation tools (Check Domain, Search, Proxy), eliminating 90% of manual SEO operations.',
      'Scaled backend systems using Go, Node.js, and Laravel to handle thousands of concurrent requests at 99% uptime.',
      'Mentored junior developers and established code review workflows, cutting incident resolution times to under 24 hours.'
    ]
  },
  {
    date: 'Jun 2023 - Jun 2024',
    title: 'Fullstack Developer',
    company: '45CM Vina',
    coreRole: 'Developed E-commerce solutions, ERP modules, and inventory management systems.',
    impact: [
      'Built and enhanced responsive E-commerce features using Laravel and ReactJS.',
      'Optimized and refactored a legacy Korean inventory platform (CodeIgniter 2), significantly improving UI/UX and query performance.'
    ]
  },
  {
    date: 'Apr 2021 - May 2023',
    title: 'PHP Developer',
    company: 'Briswell VietNam',
    coreRole: 'Engineered enterprise ERP/CRM software for the Japanese market.',
    impact: [
      'Built robust backend architectures using Laravel, CakePHP, MySQL, and PostgreSQL.',
      'Deployed and configured secure Linux web servers on AWS.',
      'Developed dynamic, interactive front-end interfaces utilizing Vue.js and jQuery.'
    ]
  },
  {
    date: 'Dec 2017 - Feb 2019',
    title: 'Web Developer',
    company: 'MQ Solutions JSC',
    coreRole: 'Developed healthcare web platforms using Node.js (Express) and MongoDB while handling initial UI/UX designs with AngularJS.',
    impact: []
  }
];

function TimelineItem({ exp }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <div className="timeline-date">{exp.date}</div>
        <h3>{exp.title}</h3>
        <h4>{exp.company}</h4>

        {exp.coreRole && (
          <p
            className="experience-core-role"
            style={{
              fontStyle: 'italic',
              color: 'var(--text-secondary)',
              marginBottom: isOpen ? '1rem' : '0.5rem',
              lineHeight: '1.6'
            }}
          >
            <strong>Core Role:</strong> {exp.coreRole}
          </p>
        )}

        {exp.impact && exp.impact.length > 0 && (
          <>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="experience-toggle-btn"
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--primary-color)',
                fontSize: '0.85rem',
                fontWeight: '600',
                cursor: 'pointer',
                padding: '4px 0',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'color 0.2s ease',
                outline: 'none',
                marginBottom: isOpen ? '0.75rem' : '0'
              }}
            >
              <span>{isOpen ? 'Hide key impacts' : 'View key impacts'}</span>
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                style={{
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s ease'
                }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div
              style={{
                maxHeight: isOpen ? '500px' : '0px',
                overflow: 'hidden',
                opacity: isOpen ? 1 : 0,
                transition: 'max-height 0.3s ease-out, opacity 0.3s ease-out'
              }}
            >
              <div style={{ padding: '0.25rem 0 0.5rem' }}>
                <h5 style={{ fontSize: '0.95rem', fontWeight: 'bold', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  Key Impact:
                </h5>
                <ul style={{ paddingLeft: '1.25rem', listStyle: 'disc' }}>
                  {exp.impact.map((pt, pIdx) => (
                    <li key={pIdx} style={{ color: 'var(--text-muted)', marginBottom: '0.25rem', lineHeight: '1.5' }}>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function Experience() {
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

      const items = el.querySelectorAll('.timeline-item');
      items.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'all 0.6s ease-out';

        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
        }, index * 200 + 100);

        observer.observe(item);
      });
    }

    return () => {
      if (el) {
        observer.unobserve(el);
        const items = el.querySelectorAll('.timeline-item');
        items.forEach(item => observer.unobserve(item));
      }
    };
  }, []);

  return (
    <section id="experience" className="experience" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">My professional journey</p>
        </div>
        <div className="timeline">
          {EXPERIENCES.map((exp, idx) => (
            <TimelineItem key={idx} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}