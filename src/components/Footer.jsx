const TECH_STACK = [
  { name: 'React', icon: 'fab fa-react', color: '#61DAFB', url: 'https://react.dev' },
  { name: 'CSS', icon: 'fab fa-css3-alt', color: '#38BDF8', url: 'https://tailwindcss.com' },
  { name: 'Vite', icon: 'fas fa-bolt', color: '#A78BFA', url: 'https://vite.dev' },
  { name: 'Vercel', icon: 'fas fa-triangle', color: '#FFFFFF', url: 'https://vercel.com' },
  { name: 'Cloudflare', icon: 'fas fa-shield-halved', color: '#F6821F', url: 'https://cloudflare.com' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">

          <p>&copy; {new Date().getFullYear()} Nguyen Huu Danh. All rights reserved.</p>

          <div className="footer-built-with">
            <span className="footer-built-label">Built with</span>
            <div className="footer-tech-stack">
              {TECH_STACK.map((tech) => (
                <a
                  key={tech.name}
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-tech-badge"
                  style={{ '--tech-color': tech.color }}
                >
                  <i className={tech.icon} />
                  <span>{tech.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="social-links">
            <a href="https://www.linkedin.com/in/danh-nguyen-796409385" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/githubdanhnhdev" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}