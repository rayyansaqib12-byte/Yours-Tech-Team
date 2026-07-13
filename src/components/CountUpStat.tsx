import { useEffect, useState, useRef } from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface CountUpStatProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

export function CountUpStat({ end, duration = 2, suffix = '', prefix = '', decimals = 0 }: CountUpStatProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    // Counting up is a motion effect, not decoration. Under reduced motion we never start
    // the observer and render `end` directly (see `value` below) — no animation, no state.
    if (reduceMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const startTime = Date.now();
          const endTime = startTime + duration * 1000;

          const updateCount = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / (endTime - startTime), 1);
            
            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(easeOutQuart * end);

            if (progress < 1) {
              requestAnimationFrame(updateCount);
            }
          };

          requestAnimationFrame(updateCount);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated, reduceMotion]);

  const value = reduceMotion ? end : count;

  return (
    <div ref={ref}>
      <motion.span
        initial={reduceMotion ? false : { opacity: 0, scale: 0.5 }}
        animate={hasAnimated || reduceMotion ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        {prefix}{value.toFixed(decimals)}{suffix}
      </motion.span>
    </div>
  );
}
