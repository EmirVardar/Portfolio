import { useEffect, useState } from 'react';

const words = [
  'dijital ortağınız',
  'web siteniz',
  'QR menünüz',
  'sosyal medyanız',
  'reklamınız',
  'markanız',
];

const TRANSITION_MS = 380;
const SWAP_GAP_MS = 150;
const DWELL_MS = 1450;
const EASING = 'cubic-bezier(0.2, 0.9, 0.25, 1)';

export default function RotatingWord() {
  const [index, setIndex] = useState(0);
  const [out, setOut] = useState(false);

  useEffect(() => {
    const timers = [];

    function cycle() {
      timers.push(
        setTimeout(() => {
          setOut(true);
          timers.push(
            setTimeout(() => {
              setIndex((i) => (i + 1) % words.length);
              timers.push(
                setTimeout(() => {
                  setOut(false);
                  cycle();
                }, SWAP_GAP_MS)
              );
            }, TRANSITION_MS)
          );
        }, DWELL_MS)
      );
    }

    cycle();
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <span
      className="inline-block font-serif italic font-medium text-teal-700"
      style={{
        opacity: out ? 0 : 1,
        transform: out ? 'translateY(14px) skewX(-4deg)' : 'translateY(0) skewX(0deg)',
        transition: `opacity ${TRANSITION_MS}ms ${EASING}, transform ${TRANSITION_MS}ms ${EASING}`,
        willChange: 'opacity, transform',
      }}
    >
      {words[index]}
    </span>
  );
}
