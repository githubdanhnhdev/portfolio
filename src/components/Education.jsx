import { useEffect, useRef } from 'react';

export default function Education() {
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

      const cards = el.querySelectorAll('.education-card');
      cards.forEach((card, index) => {
        card.classList.add('fade-in');
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
      });
    }

    return () => {
      if (el) {
        observer.unobserve(el);
        const cards = el.querySelectorAll('.education-card');
        cards.forEach(card => observer.unobserve(card));
      }
    };
  }, []);

  return (
    <section id="education" className="education" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">My academic background</p>
        </div>
        <div className="education-content">
          <div className="education-card">
            <div className="education-icon">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <div className="education-info">
              <h3>Web Application Programming</h3>
              <h4>FPT Polytechnic College</h4>
              <div className="education-details">
                <span className="date">Jan 2018 - Jan 2021</span>
                <span className="gpa">GPA: 3.24</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}