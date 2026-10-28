"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  twinkle: number;
  phase: number;
  drift: number;
};

const STAR_COUNT = 125;
const DUST_COUNT = 20;
const FRAME_INTERVAL = 1000 / 30;

export default function UniverseBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d", { alpha: true });

    if (!canvas || !context) {
      return;
    }

    const drawingContext = context;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const stars: Particle[] = [];
    const dust: Particle[] = [];
    let width = 0;
    let height = 0;
    let animationFrame = 0;
    let previousFrame = 0;
    let elapsed = 0;
    let isPageVisible = document.visibilityState === "visible";

    const createParticle = (isDust: boolean): Particle => ({
      x: Math.random(),
      y: Math.random(),
      radius: isDust ? Math.random() * 1.2 + 0.4 : Math.random() * 1.25 + 0.3,
      alpha: Math.random() * 0.55 + 0.2,
      twinkle: Math.random() * 0.65 + 0.15,
      phase: Math.random() * Math.PI * 2,
      drift: isDust ? Math.random() * 5 + 2 : Math.random() * 1.1 + 0.25,
    });

    for (let index = 0; index < STAR_COUNT; index += 1) {
      stars.push(createParticle(false));
    }
    for (let index = 0; index < DUST_COUNT; index += 1) {
      dust.push(createParticle(true));
    }

    const resizeCanvas = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      draw(0);
    };

    const drawParticles = (particles: Particle[], time: number, move: boolean) => {
      particles.forEach((particle) => {
        if (move) {
          particle.y -= (particle.drift * time) / height;
          if (particle.y < -0.02) {
            particle.y = 1.02;
            particle.x = Math.random();
          }
        }

        const opacity =
          particle.alpha *
          (0.72 + Math.sin(elapsed * particle.twinkle + particle.phase) * 0.28);
        drawingContext.beginPath();
        drawingContext.arc(particle.x * width, particle.y * height, particle.radius, 0, Math.PI * 2);
        drawingContext.fillStyle = `rgba(228, 235, 255, ${opacity})`;
        drawingContext.fill();
      });
    };

    function draw(delta: number) {
      drawingContext.clearRect(0, 0, width, height);
      const move = !reducedMotion.matches && isPageVisible;
      elapsed += delta / 1000;
      drawParticles(stars, delta / 1000, move);
      drawParticles(dust, delta / 1000, move);
    }

    const animate = (timestamp: number) => {
      if (!isPageVisible || reducedMotion.matches) {
        return;
      }

      if (timestamp - previousFrame >= FRAME_INTERVAL) {
        const delta = Math.min(timestamp - previousFrame, 50);
        previousFrame = timestamp;
        draw(delta);
      }

      animationFrame = window.requestAnimationFrame(animate);
    };

    const startAnimation = () => {
      window.cancelAnimationFrame(animationFrame);
      previousFrame = 0;
      if (isPageVisible && !reducedMotion.matches) {
        animationFrame = window.requestAnimationFrame(animate);
      } else {
        draw(0);
      }
    };

    const handleVisibilityChange = () => {
      isPageVisible = document.visibilityState === "visible";
      startAnimation();
    };

    resizeCanvas();
    startAnimation();
    window.addEventListener("resize", resizeCanvas);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    reducedMotion.addEventListener("change", startAnimation);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resizeCanvas);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      reducedMotion.removeEventListener("change", startAnimation);
    };
  }, []);

  return <canvas aria-hidden="true" className="universe-canvas" ref={canvasRef} />;
}
