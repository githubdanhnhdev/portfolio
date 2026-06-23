import { useEffect, useState } from 'react';

export default function Notification({ message, type, onClose }) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    // Slide in
    const inTimer = setTimeout(() => setActive(true), 50);

    // Auto-close after 5 seconds
    const closeTimer = setTimeout(() => {
      setActive(false);
      setTimeout(onClose, 300); // Wait for transition out
    }, 5000);

    return () => {
      clearTimeout(inTimer);
      clearTimeout(closeTimer);
    };
  }, [onClose]);

  const handleClose = () => {
    setActive(false);
    setTimeout(onClose, 300);
  };

  const bg = type === 'success' ? '#10B981' : type === 'error' ? '#EF4444' : '#3B82F6';

  return (
    <div
      style={{
        position: 'fixed',
        top: '100px',
        right: '20px',
        background: bg,
        color: 'white',
        padding: '1rem 1.5rem',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        zIndex: 9999,
        maxWidth: '400px',
        fontFamily: 'var(--font-primary)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        transform: active ? 'translateX(0)' : 'translateX(120%)',
        transition: 'transform 0.3s ease-out'
      }}
    >
      <span style={{ fontSize: '1.25rem', fontWeight: 'bold', lineHeight: 1 }}>
        {type === 'success' ? '✓' : type === 'error' ? '✗' : 'ℹ'}
      </span>
      <span style={{ fontSize: '0.9rem', flex: 1, fontWeight: '500' }}>{message}</span>
      <button
        onClick={handleClose}
        style={{
          background: 'none',
          border: 'none',
          color: 'white',
          fontSize: '1.4rem',
          cursor: 'pointer',
          padding: '0 0.25rem',
          lineHeight: 1,
          opacity: 0.8
        }}
      >
        ×
      </button>
    </div>
  );
}