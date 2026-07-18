import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

type ScrollWriteProps = {
  children: string;
  className?: string;
  from?: string;
  to?: string;
};

export function ScrollWrite({
  children,
  className = '',
  from = 'rgba(13,18,32,.2)',
  to = 'rgba(13,18,32,1)'
}: ScrollWriteProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 92%', 'start 38%']
  });

  return (
    <span ref={ref} className={`scroll-write ${className}`} aria-label={children}>
      {children.split('').map((character, index, characters) => {
        const total = Math.max(characters.length - 1, 1);
        const start = (index / total) * 0.82;
        const end = Math.min(start + 0.18, 1);
        return (
          <ScrollCharacter
            key={`${character}-${index}`}
            character={character}
            progress={scrollYProgress}
            range={[start, end]}
            from={from}
            to={to}
          />
        );
      })}
    </span>
  );
}

function ScrollCharacter({
  character,
  progress,
  range,
  from,
  to
}: {
  character: string;
  progress: ReturnType<typeof useScroll>['scrollYProgress'];
  range: [number, number];
  from: string;
  to: string;
}) {
  const color = useTransform(progress, range, [from, to]);
  return (
    <motion.span aria-hidden="true" style={{ color }}>
      {character === ' ' ? '\u00A0' : character}
    </motion.span>
  );
}
