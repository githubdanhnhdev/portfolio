import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
// import Skills from './components/Skills';
// import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Notification from './components/Notification';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const [notification, setNotification] = useState(null); // { message, type }

  // Page load fade-in
  useEffect(() => {
    document.body.style.opacity = '0';
    const timer = setTimeout(() => {
      document.body.style.transition = 'opacity 0.5s ease';
      document.body.style.opacity = '1';
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const showNotification = (message, type = 'info') => {
    setNotification({ message, type });
  };

  const closeNotification = () => {
    setNotification(null);
  };

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        {/* <Skills /> */}
        {/* <Certifications /> */}
        <Achievements />
        <Education />
        <Contact onNotify={showNotification} />
      </main>
      <Footer />
      <ScrollToTop />
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={closeNotification}
        />
      )}
    </>
  );
}