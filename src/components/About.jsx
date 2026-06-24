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
                I'm a <strong>Backend-focused Fullstack Developer</strong> with <strong>5+ years of experience</strong> building robust CRM, ERP, and automation systems for enterprise clients.
              </p>
              <p style={{
                fontSize: '1.15rem',
                lineHeight: '1.8',
                color: 'var(--text-secondary)',
                marginBottom: '1.5rem'
              }}>
                My core stack is <strong>PHP Laravel</strong>, where I design high-performance backends and scalable enterprise architectures. I possess a strong adaptability to deliver high-quality results in <strong>Node.js</strong> and <strong>Golang</strong> environments, supporting microservices and high-concurrency systems. Practical proficiency in <strong>Vue.js &amp; ReactJS</strong> for end-to-end full-stack delivery.
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
                "I thrive on continuous learning and building high-impact systems. Looking for a stable, growth-oriented environment where I can commit long-term and drive architectural excellence."
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
                <h4 style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--primary-color)', marginBottom: '0.25rem' }}>5+</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', fontWeight: '500' }}>Years of Experience</p>
              </div>
              <div className="stat-item" style={{ textAlign: 'center' }}>
                <h4 style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--accent-color)', marginBottom: '0.25rem' }}>Laravel / Node </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', fontWeight: '500' }}>Core Stack</p>
              </div>
              <div className="stat-item" style={{ textAlign: 'center' }}>
                <h4 style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--secondary-color)', marginBottom: '0.25rem' }}>Full-Stack</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', fontWeight: '500' }}>End-to-End Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}