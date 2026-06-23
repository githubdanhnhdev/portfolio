import { useState, useEffect } from 'react';
import VisitorCounter from './VisitorCounter';

const FLOATING_ICONS = [
  { className: 'fab fa-php', speed: 0.1 },
  { className: 'fab fa-laravel', speed: 0.13 },
  { className: 'fab fa-node-js', speed: 0.16 },
  { className: 'fab fa-vuejs', speed: 0.19 },
  { className: 'fab fa-js', speed: 0.22 },
  { className: 'fas fa-code', speed: 0.25 }, // TypeScript
  { className: 'fab fa-docker', speed: 0.12 },
  { className: 'fab fa-aws', speed: 0.15 },
  { className: 'fas fa-database', speed: 0.18 }, // PostgreSQL
  { className: 'fas fa-cubes', speed: 0.21 }, // Redis
  { className: 'fas fa-brain', speed: 0.24 }, // OpenAI / AI
  { className: 'fas fa-leaf', speed: 0.27 } // MongoDB
];

export default function Hero() {
  const [typingText, setTypingText] = useState('');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Typewriter animation
    const text = "Hi, I'm";
    let index = 0;
    const timer = setTimeout(() => {
      const typeInterval = setInterval(() => {
        if (index < text.length) {
          setTypingText(text.slice(0, index + 1));
          index++;
        } else {
          clearInterval(typeInterval);
        }
      }, 150);
      return () => clearInterval(typeInterval);
    }, 500);

    // Scroll parallax event listener
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollDown = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Parallax offsets
  const contentTranslate = scrollY * 0.3;

  // Orbit parameters
  const N = FLOATING_ICONS.length;
  const R = 64; // Orbit radius as a percentage of avatar container (300px)
  const startAngle = -Math.PI / 2; // Start from the top (-90 deg)

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div
          className="hero-content"
          style={{ transform: `translateY(${contentTranslate}px)` }}
        >
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="typing-animation">{typingText}</span>
              <span className="name-highlight">Nguyen Huu Danh</span>
            </h1>
            <h2 className="hero-subtitle">Backend &amp; Full-Stack Developer</h2>
            <p className="hero-description">
              Passionate Backend &amp; Full-Stack Developer with expertise in PHP (Laravel), Node.js, Vue.js, databases, and AWS infrastructure.
              Skilled in designing scalable architectures, AI integrations, and automation systems. Aspiring Technical Lead.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">Get In Touch</a>
              <a href="#projects" className="btn btn-secondary">View Projects</a>
            </div>
            <VisitorCounter />
          </div>
          <div className="hero-image">
            <div className="avatar-container">
              <div className="avatar">
                <i className="fas fa-user"></i>
              </div>
              <div className="floating-icons">
                {FLOATING_ICONS.map((icon, idx) => {
                  const angle = startAngle + (2 * Math.PI * idx) / N;
                  const x = R * Math.cos(angle);
                  const y = R * Math.sin(angle);
                  const translate = scrollY * icon.speed;

                  // Stagger the 3s keyframe animation delay evenly
                  const delay = -((idx * 3.0) / N);

                  const style = {
                    position: 'absolute',
                    left: `${50 + x}%`,
                    top: `${50 + y}%`,
                    transform: `translate(-50%, -50%) translateY(${translate}px)`,
                    transition: 'transform 0.1s ease-out',
                    zIndex: 5
                  };

                  return (
                    <span key={idx} style={style}>
                      <i
                        className={icon.className}
                        style={{
                          animationDelay: `${delay}s`,
                          animationDuration: '3s',
                          position: 'static'
                        }}
                      />
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-down" onClick={handleScrollDown}>
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
    </section>
  );
}