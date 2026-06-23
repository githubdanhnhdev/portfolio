import { useState, useEffect, useRef } from 'react';

const HITS_URL =
  'https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fgithubdanhnhdev%2Fportfolio&title=Views&edge_flat=false';

// Easing function for smooth count animation
function easeOutQuart(t) {
  return 1 - Math.pow(1 - t, 4);
}

function useCountUp(target, duration = 1800) {
  const [count, setCount] = useState(0);
  const startRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!target || target === 0) return;

    const step = (timestamp) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuart(progress);
      setCount(Math.floor(easedProgress * target));
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
  const [todayCount, setTodayCount] = useState(null);
  const [totalCount, setTotalCount] = useState(null);
  const [loading, setLoading] = useState(true);

  const animatedToday = useCountUp(todayCount);
  const animatedTotal = useCountUp(totalCount);

  useEffect(() => {
    // Fetch the SVG badge and parse today/total counts from the text
    fetch(HITS_URL)
      .then((res) => res.text())
      .then((svgText) => {
        // The SVG contains text nodes like "today" count and "total" count
        // hits.seeyoufarm returns: "N / M" where N=today, M=total
        const matches = [...svgText.matchAll(/>(\d+)<\/text>/g)];
        const numbers = matches
          .map((m) => parseInt(m[1], 10))
          .filter((n) => !isNaN(n));

        if (numbers.length >= 2) {
          setTodayCount(numbers[numbers.length - 2]);
          setTotalCount(numbers[numbers.length - 1]);
        } else if (numbers.length === 1) {
          setTotalCount(numbers[0]);
        }
      })
      .catch(() => {
        // Silently fail — no error shown to user
      })
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

  if (totalCount === null) return null;

  return (
    <div className="visitor-counter">
      <div className="visitor-dot" />
      <div className="visitor-stats">
        {todayCount !== null && (
          <div className="visitor-stat">
            <i className="fas fa-eye" />
            <span className="visitor-number">{animatedToday.toLocaleString()}</span>
            <span className="visitor-label">today</span>
          </div>
        )}
        {todayCount !== null && <div className="visitor-divider" />}
        <div className="visitor-stat">
          <i className="fas fa-users" />
          <span className="visitor-number">{animatedTotal.toLocaleString()}</span>
          <span className="visitor-label">total views</span>
        </div>
      </div>
    </div>
  );
}
