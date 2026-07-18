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
    offset: ['start 92%', 'start 45%']
  });

  const words = children.split(' ');

  return (
    <span ref={ref} className={`scroll-write ${className}`} aria-label={children}>
      {words.map((word, index) => {
        const total = Math.max(words.length - 1, 1);
        const start = (index / total) * 0.85;
        const end = Math.min(start + 0.15, 1);
        return (
          <ScrollWord
            key={`${word}-${index}`}
            word={word}
            progress={scrollYProgress}
            range={[start, end]}
            from={from}
            to={to}
            isLast={index === words.length - 1}
          />
        );
      })}
    </span>
  );
}

function ScrollWord({
  word,
  progress,
  range,
  from,
  to,
  isLast
}: {
  word: string;
  progress: ReturnType<typeof useScroll>['scrollYProgress'];
  range: [number, number];
  from: string;
  to: string;
  isLast: boolean;
}) {
  const color = useTransform(progress, range, [from, to]);
  return (
    <motion.span aria-hidden="true" style={{ color }} className="inline-block">
      {word}
      {!isLast && '\u00A0'}
    </motion.span>
  );
}

