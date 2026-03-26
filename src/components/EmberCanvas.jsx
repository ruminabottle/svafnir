import { useEffect, useRef } from 'react';

const COLORS = [
  { r: 201, g: 168, b: 76 },
  { r: 180, g: 150, b: 60 },
  { r: 74, g: 124, b: 89 },
  { r: 107, g: 155, b: 122 },
  { r: 160, g: 140, b: 60 },
];

export default function EmberCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animFrame;
    let particles = [];
    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 20 : 45;
    const glowSize = isMobile ? 8 : 15;
    const glowOpacity = 0.3;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function rand(min, max) {
      return Math.random() * (max - min) + min;
    }

    function createParticle(spreadY) {
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      return {
        x: rand(0, canvas.width),
        y: spreadY ? rand(0, canvas.height) : rand(canvas.height * 0.3, canvas.height + 50),
        size: rand(1, 3.5),
        speedY: rand(0.15, 0.6),
        speedX: rand(-0.3, 0.3),
        opacity: rand(0.2, 0.8),
        fadeDir: Math.random() > 0.5 ? 1 : -1,
        color,
        wobble: rand(0, Math.PI * 2),
        wobbleSpeed: rand(0.01, 0.03),
        wobbleAmp: rand(0.2, 0.8),
      };
    }

    function draw(p) {
      ctx.save();
      const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size + glowSize);
      g.addColorStop(0, `rgba(${p.color.r},${p.color.g},${p.color.b},${p.opacity * glowOpacity})`);
      g.addColorStop(0.4, `rgba(${p.color.r},${p.color.g},${p.color.b},${p.opacity * 0.1})`);
      g.addColorStop(1, `rgba(${p.color.r},${p.color.g},${p.color.b},0)`);
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size + glowSize, 0, Math.PI * 2);
      ctx.fill();

      const g2 = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
      g2.addColorStop(0, `rgba(${Math.min(p.color.r + 60, 255)},${Math.min(p.color.g + 40, 255)},${p.color.b},${p.opacity})`);
      g2.addColorStop(1, `rgba(${p.color.r},${p.color.g},${p.color.b},${p.opacity * 0.6})`);
      ctx.fillStyle = g2;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    function update() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.y -= p.speedY;
        p.wobble += p.wobbleSpeed;
        p.x += p.speedX + Math.sin(p.wobble) * p.wobbleAmp;
        p.opacity += 0.003 * p.fadeDir;
        if (p.opacity >= 0.8) p.fadeDir = -1;
        if (p.opacity <= 0.1) p.fadeDir = 1;
        if (p.y < -20 || p.x < -20 || p.x > canvas.width + 20) {
          particles[i] = createParticle(false);
          particles[i].y = canvas.height + rand(10, 50);
        }
        draw(p);
      }
      animFrame = requestAnimationFrame(update);
    }

    resize();
    particles = Array.from({ length: count }, () => createParticle(true));
    update();

    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 200);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}
