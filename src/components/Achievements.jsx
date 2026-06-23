import { useEffect, useRef, useState } from 'react';

const AWARDS = [
  {
    title: 'Outstanding Employee Award',
    issuer: 'Briswell VietNam Co., Ltd',
    date: 'Q1 2023',
    description: 'Recognized for exceptional dedication, high-quality deliverables, and technical contributions to enterprise ERP and CRM platforms.',
    image: '/images/briswell-award.png', // The user can place their image here
    icon: 'fas fa-award'
  }
];

export default function Achievements() {
  const sectionRef = useRef(null);
  const [imageError, setImageError] = useState({});

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

      const cards = el.querySelectorAll('.achievement-card');
      cards.forEach((card, index) => {
        card.classList.add('fade-in');
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
      });
    }

    return () => {
      if (el) {
        observer.unobserve(el);
        const cards = el.querySelectorAll('.achievement-card');
        cards.forEach(card => observer.unobserve(card));
      }
    };
  }, []);

  const handleImageError = (index) => {
    setImageError(prev => ({
      ...prev,
      [index]: true
    }));
  };

  return (
    <section id="achievements" className="achievements" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Achievements</h2>
          <p className="section-subtitle">Recognitions & Awards</p>
        </div>

        <div className="achievements-content">
          {AWARDS.map((award, idx) => (
            <div key={idx} className="achievement-card">
              <div className="achievement-visual">
                {imageError[idx] ? (
                  // Fallback: Stunning placeholder with gradient & gold elements
                  <div className="achievement-fallback">
                    <div className="medal-glow"></div>
                    <i className={`${award.icon} award-medal-icon`}></i>
                    <div className="fallback-badge">Briswell</div>
                  </div>
                ) : (
                  <img
                    src={award.image}
                    alt={award.title}
                    className="achievement-image"
                    onError={() => handleImageError(idx)}
                  />
                )}
              </div>
              <div className="achievement-info">
                <div className="achievement-badge">{award.date}</div>
                <h3>{award.title}</h3>
                <h4>{award.issuer}</h4>
                <p>{award.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
