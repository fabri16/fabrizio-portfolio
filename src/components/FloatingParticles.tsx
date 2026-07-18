const particles = [
  { x: '7%', y: '16%', size: 10, color: '#89A8FF', delay: '0s', duration: '15s' },
  { x: '18%', y: '72%', size: 7, color: '#F2A65A', delay: '-4s', duration: '18s' },
  { x: '31%', y: '35%', size: 8, color: '#7BDCB5', delay: '-8s', duration: '17s' },
  { x: '46%', y: '82%', size: 12, color: '#A98BFF', delay: '-2s', duration: '21s' },
  { x: '58%', y: '18%', size: 6, color: '#FF8DA1', delay: '-6s', duration: '16s' },
  { x: '69%', y: '59%', size: 9, color: '#89A8FF', delay: '-10s', duration: '19s' },
  { x: '82%', y: '27%', size: 11, color: '#F4C95D', delay: '-3s', duration: '22s' },
  { x: '92%', y: '77%', size: 7, color: '#7BDCB5', delay: '-12s', duration: '18s' },
  { x: '12%', y: '44%', size: 5, color: '#A98BFF', delay: '-7s', duration: '20s' },
  { x: '76%', y: '88%', size: 6, color: '#FF8DA1', delay: '-5s', duration: '17s' }
];

export function FloatingParticles() {
  return (
    <div className="floating-particles" aria-hidden="true">
      {particles.map((particle, index) => (
        <i
          key={index}
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            animationDelay: particle.delay,
            animationDuration: particle.duration
          }}
        />
      ))}
    </div>
  );
}
