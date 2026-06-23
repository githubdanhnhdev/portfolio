import { useEffect, useRef } from 'react';

const CONTACT_ITEMS = [
  {
    icon: 'fas fa-envelope',
    title: 'Email',
    content: 'danhnh.dev@gmail.com',
    link: 'mailto:danhnh.dev@gmail.com'
  },
  {
    icon: 'fas fa-phone',
    title: 'Phone',
    content: '+84 797456369',
    link: 'tel:+84797456369'
  },
  {
    icon: 'fas fa-map-marker-alt',
    title: 'Location',
    content: 'Ho Chi Minh City, Vietnam',
    link: null
  }
];

export default function Contact() {
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

      const cards = el.querySelectorAll('.contact-card');
      cards.forEach((card, index) => {
        card.classList.add('fade-in');
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
      });
    }

    return () => {
      if (el) {
        observer.unobserve(el);
        const cards = el.querySelectorAll('.contact-card');
        cards.forEach(card => observer.unobserve(card));
      }
    };
  }, []);

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let's connect and discuss opportunities</p>
        </div>
        
        <div className="contact-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          maxWidth: '900px',
          margin: '3rem auto 0',
          width: '100%'
        }}>
          {CONTACT_ITEMS.map((item, idx) => {
            const CardContent = (
              <>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'rgba(59, 130, 246, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                  color: 'var(--primary-color)',
                  fontSize: '1.5rem',
                  transition: 'var(--transition-normal)'
                }} className="contact-icon-wrapper">
                  <i className={item.icon}></i>
                </div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', wordBreak: 'break-all' }}>{item.content}</p>
              </>
            );

            const cardStyle = {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              padding: '2.5rem 1.5rem',
              background: 'var(--bg-card)',
              borderRadius: '20px',
              border: '1px solid var(--border-color)',
              transition: 'var(--transition-normal)',
              boxShadow: 'var(--shadow-md)',
              textDecoration: 'none',
              cursor: item.link ? 'pointer' : 'default'
            };

            return item.link ? (
              <a 
                key={idx} 
                href={item.link}
                className="contact-card" 
                style={cardStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.borderColor = 'var(--primary-color)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(59, 130, 246, 0.15)';
                  const iconWrap = e.currentTarget.querySelector('.contact-icon-wrapper');
                  if (iconWrap) {
                    iconWrap.style.background = 'var(--primary-color)';
                    iconWrap.style.color = 'white';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                  const iconWrap = e.currentTarget.querySelector('.contact-icon-wrapper');
                  if (iconWrap) {
                    iconWrap.style.background = 'rgba(59, 130, 246, 0.1)';
                    iconWrap.style.color = 'var(--primary-color)';
                  }
                }}
              >
                {CardContent}
              </a>
            ) : (
              <div 
                key={idx} 
                className="contact-card" 
                style={cardStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.borderColor = 'var(--primary-color)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(59, 130, 246, 0.15)';
                  const iconWrap = e.currentTarget.querySelector('.contact-icon-wrapper');
                  if (iconWrap) {
                    iconWrap.style.background = 'var(--primary-color)';
                    iconWrap.style.color = 'white';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                  const iconWrap = e.currentTarget.querySelector('.contact-icon-wrapper');
                  if (iconWrap) {
                    iconWrap.style.background = 'rgba(59, 130, 246, 0.1)';
                    iconWrap.style.color = 'var(--primary-color)';
                  }
                }}
              >
                {CardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}