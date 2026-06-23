import { useEffect, useRef } from 'react';

const SKILL_CATEGORIES = [
  {
    title: 'Backend & Architecture',
    skills: [
      { icon: 'fab fa-php', name: 'PHP' },
      { icon: 'fab fa-laravel', name: 'Laravel' },
      { icon: 'fab fa-node-js', name: 'Node.js' },
      { icon: 'fas fa-network-wired', name: 'RESTful APIs' },
      { icon: 'fas fa-wave-square', name: 'Event-driven' },
      { icon: 'fas fa-cubes', name: 'SOLID Principles' }
    ]
  },
  {
    title: 'Frontend',
    skills: [
      { icon: 'fab fa-vuejs', name: 'Vue.js' },
      { icon: 'fas fa-code', name: 'TypeScript' },
      { icon: 'fas fa-shapes', name: 'Naive UI' },
      { icon: 'fab fa-css3-alt', name: 'Tailwind CSS' }
    ]
  },
  {
    title: 'Databases & Caching',
    skills: [
      { icon: 'fas fa-database', name: 'MySQL' },
      { icon: 'fas fa-database', name: 'PostgreSQL' },
      { icon: 'fas fa-leaf', name: 'MongoDB' },
      { icon: 'fas fa-server', name: 'Redis' },
      { icon: 'fas fa-search', name: 'Elasticsearch' }
    ]
  },
  {
    title: 'AI & Integrations',
    skills: [
      { icon: 'fas fa-search', name: 'Algolia (Search.io)' },
      { icon: 'fas fa-key', name: 'Keyword Tool API' },
      { icon: 'fas fa-brain', name: 'OpenAI API' },
      { icon: 'fas fa-globe', name: 'REST Web Services' }
    ]
  },
  {
    title: 'Messaging & Automation',
    skills: [
      { icon: 'fas fa-tasks', name: 'Queues & Horizon' },
      { icon: 'fas fa-paper-plane', name: 'Webhooks' },
      { icon: 'fas fa-fire', name: 'Firebase' }
    ]
  },
  {
    title: 'Infrastructure & Tools',
    skills: [
      { icon: 'fab fa-docker', name: 'Docker' },
      { icon: 'fab fa-aws', name: 'AWS (EC2/RDS/S3)' },
      { icon: 'fab fa-git-alt', name: 'Git' },
      { icon: 'fas fa-terminal', name: 'MobaXterm' },
      { icon: 'fas fa-briefcase', name: 'Odoo' },
      { icon: 'fas fa-magic', name: 'Cursor / AI IDE' }
    ]
  },
  {
    title: 'Processes & Testing',
    skills: [
      { icon: 'fas fa-users', name: 'Agile & Scrum' },
      { icon: 'fas fa-columns', name: 'Kanban' },
      { icon: 'fas fa-vial', name: 'PHPUnit Testing' },
      { icon: 'fas fa-vials', name: 'Go Testing' }
    ]
  }
];

export default function Skills() {
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
      { threshold: 0.05, rootMargin: '0px 0px -50px 0px' }
    );

    const el = sectionRef.current;
    if (el) {
      el.classList.add('fade-in');
      observer.observe(el);

      const items = el.querySelectorAll('.skill-item, .skills-category');
      items.forEach((item, index) => {
        item.classList.add('fade-in');
        item.style.transitionDelay = `${index * 0.03}s`;
        observer.observe(item);
      });
    }

    return () => {
      if (el) {
        observer.unobserve(el);
        const items = el.querySelectorAll('.skill-item, .skills-category');
        items.forEach(item => observer.unobserve(item));
      }
    };
  }, []);

  const handleMouseEnter = (e) => {
    const icon = e.currentTarget.querySelector('i');
    if (icon) {
      icon.style.animation = 'pulse 0.6s ease-in-out';
    }
  };

  const handleMouseLeave = (e) => {
    const icon = e.currentTarget.querySelector('i');
    if (icon) {
      icon.style.animation = '';
    }
  };

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">Technologies and methodologies I work with</p>
        </div>
        <div 
          className="skills-content" 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '2.5rem', 
            marginTop: '3rem' 
          }}
        >
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div 
              key={idx} 
              className="skills-category" 
              style={{ 
                marginTop: 0,
                background: 'rgba(30, 41, 59, 0.4)',
                border: '1px solid var(--border-color)',
                borderRadius: '12px',
                padding: '1.5rem'
              }}
            >
              <h3 
                style={{ 
                  borderBottom: '1px solid var(--border-color)', 
                  paddingBottom: '0.75rem', 
                  marginBottom: '1.25rem', 
                  color: 'var(--primary-color)',
                  fontSize: '1.25rem',
                  fontWeight: 'var(--font-weight-bold)'
                }}
              >
                {cat.title}
              </h3>
              <div className="skills-grid">
                {cat.skills.map((skill, sIdx) => (
                  <div 
                    key={sIdx} 
                    className="skill-item"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <i className={skill.icon}></i>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}