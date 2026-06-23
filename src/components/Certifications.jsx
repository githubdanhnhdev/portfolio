import { useEffect, useRef } from 'react';

const CERTS = [
  {
    icon: 'fas fa-language',
    title: 'English Proficiency - TOEIC',
    desc: 'Score: 670/990',
    date: 'Mar 2024'
  },
  {
    icon: 'fas fa-server',
    title: 'Complete CyberSoft Professional Back-End NodeJs Programming Course',
    desc: null,
    date: 'Jan 2021'
  },
  {
    icon: 'fas fa-laptop-code',
    title: 'Complete CyberSoft Professional Front-End Programming Course',
    desc: null,
    date: 'Jan 2020'
  }
];

export default function Certifications() {
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

      const cards = el.querySelectorAll('.cert-card');
      cards.forEach((card, index) => {
        card.classList.add('fade-in');
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
      });
    }

    return () => {
      if (el) {
        observer.unobserve(el);
        const cards = el.querySelectorAll('.cert-card');
        cards.forEach(card => observer.unobserve(card));
      }
    };
  }, []);

  return (
    <section id="certifications" className="certifications" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">My professional achievements</p>
        </div>
        <div className="certifications-grid">
          {CERTS.map((cert, idx) => (
            <div key={idx} className="cert-card">
              <div className="cert-icon">
                <i className={cert.icon}></i>
              </div>
              <h3>{cert.title}</h3>
              {cert.desc && <p>{cert.desc}</p>}
              <span className="cert-date">{cert.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}