import React, { useEffect, useRef } from 'react';

export default function FloatingParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const isMobile = window.innerWidth < 768;

    // Helper to draw a delicate rose petal
    const drawPetal = (ctx, x, y, size, angle, opacity) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.beginPath();
      ctx.moveTo(0, -size);
      ctx.bezierCurveTo(size * 0.8, -size * 0.6, size * 0.9, size * 0.5, 0, size);
      ctx.bezierCurveTo(-size * 0.9, size * 0.5, -size * 0.8, -size * 0.6, 0, -size);
      ctx.closePath();
      
      const gradient = ctx.createLinearGradient(0, -size, 0, size);
      gradient.addColorStop(0, `rgba(255, 220, 230, ${opacity * 0.9})`);
      gradient.addColorStop(0.6, `rgba(243, 166, 185, ${opacity * 0.75})`);
      gradient.addColorStop(1, `rgba(232, 93, 122, ${opacity * 0.4})`);
      
      ctx.fillStyle = gradient;
      ctx.shadowBlur = 6;
      ctx.shadowColor = `rgba(232, 93, 122, ${opacity * 0.3})`;
      ctx.fill();
      ctx.restore();
    };

    // Helper to draw a tiny subtle heart
    const drawHeart = (ctx, x, y, size, opacity) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.beginPath();
      const topCurveHeight = size * 0.3;
      ctx.moveTo(0, topCurveHeight);
      // top left curve
      ctx.bezierCurveTo(-size / 2, -topCurveHeight, -size, topCurveHeight / 3, 0, size);
      // top right curve
      ctx.bezierCurveTo(size, topCurveHeight / 3, size / 2, -topCurveHeight, 0, topCurveHeight);
      ctx.closePath();
      ctx.fillStyle = `rgba(232, 93, 122, ${opacity})`;
      ctx.shadowBlur = 4;
      ctx.shadowColor = `rgba(243, 166, 185, ${opacity * 0.5})`;
      ctx.fill();
      ctx.restore();
    };

    // Helper to draw delicate faint ring
    const drawRing = (ctx, x, y, radius, opacity) => {
      ctx.save();
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(243, 166, 185, ${opacity * 0.4})`;
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.restore();
    };

    // Initialize decorative elements
    // 1. Petals
    const petalCount = isMobile ? 6 : 14;
    const petals = Array.from({ length: petalCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 8 + 6,
      angle: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.008,
      speedY: Math.random() * 0.35 + 0.18, // Slow fall
      speedX: (Math.random() - 0.5) * 0.25,
      wobble: Math.random() * Math.PI * 2,
      wobbleSpeed: Math.random() * 0.015 + 0.005,
      opacity: Math.random() * 0.35 + 0.2,
    }));

    // 2. Tiny Hearts
    const heartCount = isMobile ? 4 : 8;
    const hearts = Array.from({ length: heartCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 5 + 4,
      speedY: -(Math.random() * 0.25 + 0.1), // Gentle float up
      speedX: (Math.random() - 0.5) * 0.15,
      wobble: Math.random() * Math.PI * 2,
      wobbleSpeed: Math.random() * 0.012 + 0.004,
      opacity: Math.random() * 0.3 + 0.15,
    }));

    // 3. Small glowing particles
    const particleCount = isMobile ? 18 : 34;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.8 + 0.8,
      speedY: -(Math.random() * 0.2 + 0.08),
      speedX: (Math.random() - 0.5) * 0.2,
      opacity: Math.random() * 0.45 + 0.2,
      isWhite: Math.random() > 0.4,
    }));

    // 4. Faint circular rings
    const ringCount = isMobile ? 2 : 4;
    const rings = Array.from({ length: ringCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 35 + 25,
      speedY: (Math.random() - 0.5) * 0.08,
      opacity: Math.random() * 0.2 + 0.1,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render faint rings
      rings.forEach((r) => {
        r.y += r.speedY;
        if (r.y < -50) r.y = height + 50;
        if (r.y > height + 50) r.y = -50;
        drawRing(ctx, r.x, r.y, r.radius, r.opacity);
      });

      // Render particles
      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.isWhite
          ? `rgba(255, 255, 255, ${p.opacity})`
          : `rgba(243, 166, 185, ${p.opacity})`;
        ctx.shadowBlur = 6;
        ctx.shadowColor = `rgba(255, 240, 245, ${p.opacity * 0.7})`;
        ctx.fill();
      });

      // Render hearts
      hearts.forEach((h) => {
        h.y += h.speedY;
        h.wobble += h.wobbleSpeed;
        h.x += h.speedX + Math.sin(h.wobble) * 0.2;

        if (h.y < -20) {
          h.y = height + 20;
          h.x = Math.random() * width;
        }
        if (h.x < -20) h.x = width + 20;
        if (h.x > width + 20) h.x = -20;

        drawHeart(ctx, h.x, h.y, h.size, h.opacity);
      });

      // Render petals
      petals.forEach((pt) => {
        pt.y += pt.speedY;
        pt.wobble += pt.wobbleSpeed;
        pt.angle += pt.rotationSpeed;
        pt.x += pt.speedX + Math.cos(pt.wobble) * 0.35;

        if (pt.y > height + 25) {
          pt.y = -25;
          pt.x = Math.random() * width;
        }
        if (pt.x < -25) pt.x = width + 25;
        if (pt.x > width + 25) pt.x = -25;

        drawPetal(ctx, pt.x, pt.y, pt.size, pt.angle, pt.opacity);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-90"
      style={{ willChange: 'transform' }}
    />
  );
}
