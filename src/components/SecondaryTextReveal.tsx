import { useEffect } from 'react';

export function SecondaryTextReveal() {
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>(
      'main p:not(.form-note), main .education-item > span, main .contact-links a, main .skill-list span'
    ));

    targets.forEach((element, index) => {
      element.classList.add('secondary-reveal');
      element.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 55}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -5% 0px' }
    );

    targets.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return null;
}
