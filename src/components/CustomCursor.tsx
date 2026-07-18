import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 420, damping: 34, mass: 0.35 });
  const springY = useSpring(y, { stiffness: 420, damping: 34, mass: 0.35 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    const move = (event: MouseEvent) => {
      x.set(event.clientX - 24);
      y.set(event.clientY - 24);
      const target = event.target as HTMLElement;
      setActive(Boolean(target.closest('a, button, input, select, textarea, .project-card')));
    };
    window.addEventListener('mousemove', move, { passive: true });
    return () => window.removeEventListener('mousemove', move);
  }, [x, y]);

  return <motion.div className={`custom-cursor ${active ? 'is-active' : ''}`} style={{ x: springX, y: springY }} />;
}
