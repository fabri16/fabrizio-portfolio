import { useEffect, useRef } from 'react';

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;

    let requestId: number;
    let mouseX = -100;
    let mouseY = -100;
    let currentX = -100;
    let currentY = -100;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX - 24;
      mouseY = e.clientY - 24;

      const target = e.target as HTMLElement | null;
      if (cursorRef.current && target) {
        const tagName = target.tagName;
        const isInteractive = 
          tagName === 'A' || 
          tagName === 'BUTTON' || 
          tagName === 'INPUT' || 
          tagName === 'SELECT' || 
          tagName === 'TEXTAREA' ||
          target.closest('.project-card, .project-open, .process-trigger');

        if (isInteractive) {
          cursorRef.current.classList.add('is-active');
        } else {
          cursorRef.current.classList.remove('is-active');
        }
      }
    };

    const updatePosition = () => {
      currentX += (mouseX - currentX) * 0.16;
      currentY += (mouseY - currentY) * 0.16;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }
      requestId = requestAnimationFrame(updatePosition);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    requestId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(requestId);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 9999 }} />;
}
