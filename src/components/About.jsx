import { useEffect, useRef } from 'react';

export default function About() {
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

      const items = el.querySelectorAll('.about-card, .stat-item');
      items.forEach((item, index) => {
        item.classList.add('fade-in');
        item.style.transitionDelay = `${index * 0.15}s`;
        observer.observe(item);
      });
    }

    return () => {
      if (el) {
        observer.unobserve(el);
        const items = el.querySelectorAll('.about-card, .stat-item');
        items.forEach(item => observer.unobserve(item));
      }
    };
  }, []);

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>
        <div className="about-content" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="about-card" style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: '20px',
            padding: '2.5rem',
            boxShadow: 'var(--shadow-lg)',
            transition: 'var(--transition-normal)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div className="about-card-glow" style={{
              position: 'absolute',
              top: '-50%',
              left: '-50%',
              width: '200%',
              height: '200%',
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 60%)',
              pointerEvents: 'none'
            }}></div>
            <div className="about-text" style={{ position: 'relative', zIndex: 1 }}>
              <p style={{
                fontSize: '1.15rem',
                lineHeight: '1.8',
                color: 'var(--text-primary)',
                marginBottom: '1.5rem',
                fontWeight: '400'
              }}>
                I am a results-driven <strong>Fullstack Developer</strong> with a strong focus on Backend development and <strong>6 years of experience</strong> crafting robust CRM, ERP, and advanced automation systems.
              </p>
              <p style={{
                fontSize: '1.15rem',
                lineHeight: '1.8',
                color: 'var(--text-secondary)',
                marginBottom: '1.5rem'
              }}>
                My core expertise lies in the <strong>PHP Laravel</strong> and <strong>Node.js</strong> ecosystems, where I architect high-performance backends, scalable microservices, and event-driven architectures. To complement my backend skills, I bring solid experience in <strong>Vue.js</strong>, enabling me to build functional frontends and deliver complete full-stack solutions.
              </p>
              <p style={{
                fontSize: '1.15rem',
                lineHeight: '1.8',
                color: 'var(--text-secondary)',
                marginBottom: '1.5rem'
              }}>
                I can effectively read and write <strong>technical documentation in English</strong>. While my speaking skills are currently limited, I am proactively practicing every day to improve my verbal communication.
              </p>
              <p style={{
                fontSize: '1.15rem',
                lineHeight: '1.8',
                color: 'var(--text-muted)',
                fontStyle: 'italic',
                borderLeft: '4px solid var(--primary-color)',
                paddingLeft: '1.25rem',
                marginTop: '1.75rem'
              }}>
                "Having consistently focused on building high-impact systems, I am currently seeking a stable, forward-thinking environment where I can commit long-term, drive architectural excellence, and grow together with the company."
              </p>
            </div>

            {/* Quick stats highlights */}
            <div className="about-stats" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem',
              marginTop: '2.5rem',
              borderTop: '1px solid var(--border-color)',
              paddingTop: '2rem',
              position: 'relative',
              zIndex: 1
            }}>
              <div className="stat-item" style={{ textAlign: 'center' }}>
                <h4 style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--primary-color)', marginBottom: '0.25rem' }}>6</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', fontWeight: '500' }}>Years of Experience</p>
              </div>
              <div className="stat-item" style={{ textAlign: 'center' }}>
                <h4 style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--accent-color)', marginBottom: '0.25rem' }}>Laravel & Node</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', fontWeight: '500' }}>Core Specialization</p>
              </div>
              <div className="stat-item" style={{ textAlign: 'center' }}>
                <h4 style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--secondary-color)', marginBottom: '0.25rem' }}>Long-term</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', fontWeight: '500' }}>Growth & Commitment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}