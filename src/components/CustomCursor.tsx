import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 420, damping: 34, mass: 0.35 });
  const springY = useSpring(y, { stiffness: 420, damping: 34, mass: 0.35 });

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    const move = (event: MouseEvent) => {
      x.set(event.clientX - 24);
      y.set(event.clientY - 24);
      const target = event.target as HTMLElement;
      if (cursorRef.current) {
        const isInteractive = Boolean(target.closest('a, button, input, select, textarea, .project-card'));
        if (isInteractive) {
          cursorRef.current.classList.add('is-active');
        } else {
          cursorRef.current.classList.remove('is-active');
        }
      }
    };
    window.addEventListener('mousemove', move, { passive: true });
    return () => window.removeEventListener('mousemove', move);
  }, [x, y]);

  return <motion.div ref={cursorRef} className="custom-cursor" style={{ x: springX, y: springY }} />;
}

