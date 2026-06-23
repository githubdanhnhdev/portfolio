import { useState, useEffect, useRef } from 'react';

// countapi.xyz — free counter API with CORS support
// Each unique namespace/key is a separate counter
const COUNTER_API = 'https://api.countapi.xyz/hit/portfolio-danhnhdev/pageviews';

function easeOutQuart(t) {
  return 1 - Math.pow(1 - t, 4);
}

function useCountUp(target, duration = 1800) {
  const [count, setCount] = useState(0);
  const startRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!target || target <= 0) return;
    startRef.current = null;

    const step = (timestamp) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(easeOutQuart(progress) * target));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target, duration]);

  return count;
}

export default function VisitorCounter() {
  const [total, setTotal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const animatedTotal = useCountUp(total);

  useEffect(() => {
    fetch(COUNTER_API)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (data && typeof data.value === 'number') {
          setTotal(data.value);
        } else {
          setError(true);
        }
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="visitor-counter visitor-counter--loading">
        <div className="visitor-pulse" />
        <span className="visitor-label">Loading visitors...</span>
      </div>
    );
  }

  if (error || total === null) {
    return (
      <div className="visitor-counter visitor-counter--error">
        <div className="visitor-dot visitor-dot--offline" />
        <div className="visitor-stats">
          <div className="visitor-stat">
            <i className="fas fa-eye" />
            <span className="visitor-number">—</span>
            <span className="visitor-label">total views</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="visitor-counter">
      <div className="visitor-dot" />
      <div className="visitor-stats">
        <div className="visitor-stat">
          <i className="fas fa-eye" />
          <span className="visitor-number">{animatedTotal.toLocaleString()}</span>
          <span className="visitor-label">total views</span>
        </div>
      </div>
    </div>
  );
}
