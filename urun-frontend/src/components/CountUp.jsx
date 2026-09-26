import { useEffect, useState } from 'react';
import useReveal from '../hooks/useReveal';

export default function CountUp({ target, suffix = '', duration = 1200 }) {
  const [ref, visible] = useReveal(0.4);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!visible) return;
    let start;
    let frame;

    function step(ts) {
      if (start === undefined) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(step);
    }

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [visible, target, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {value}
      {suffix}
    </span>
  );
}
