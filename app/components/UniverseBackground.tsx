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
  parallax: number;
  color: "white" | "purple" | "cyan";
};

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
    const starCount = window.innerWidth <= 650 ? 64 : 105;
    const dustCount = window.innerWidth <= 650 ? 10 : 18;
    let width = 0;
    let height = 0;
    let animationFrame = 0;
    let previousFrame = 0;
    let elapsed = 0;
    let isPageVisible = document.visibilityState === "visible";
    let isLightTheme = document.documentElement.dataset.theme === "light";
    let pointerX = 0.5;
    let pointerY = 0.5;
    let hasPointer = false;

    const createParticle = (isDust: boolean): Particle => ({
      x: Math.random(),
      y: Math.random(),
      radius: isDust ? Math.random() * 1.2 + 0.4 : Math.random() * 1.25 + 0.3,
      alpha: Math.random() * 0.55 + 0.2,
      twinkle: Math.random() * 0.65 + 0.15,
      phase: Math.random() * Math.PI * 2,
      drift: isDust ? Math.random() * 5 + 2 : Math.random() * 1.1 + 0.25,
      parallax: Math.random() * 0.8 + 0.2,
      color: isDust ? "white" : (["white", "purple", "cyan"] as const)[Math.floor(Math.random() * 3)],
    });

    for (let index = 0; index < starCount; index += 1) {
      stars.push(createParticle(false));
    }
    for (let index = 0; index < dustCount; index += 1) {
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

    const getPosition = (particle: Particle) => {
      const pointerOffsetX = hasPointer ? (pointerX - 0.5) * 22 * particle.parallax : 0;
      const pointerOffsetY = hasPointer ? (pointerY - 0.5) * 22 * particle.parallax : 0;
      return {
        x: particle.x * width + pointerOffsetX,
        y: particle.y * height + pointerOffsetY,
      };
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
          (isLightTheme ? 0.48 : 1) *
          (0.72 + Math.sin(elapsed * particle.twinkle + particle.phase) * 0.28);
        const { x, y } = getPosition(particle);
        const color =
          particle.color === "purple"
            ? isLightTheme
              ? "121, 82, 214"
              : "167, 139, 250"
            : particle.color === "cyan"
              ? isLightTheme
                ? "0, 127, 156"
                : "72, 221, 245"
              : isLightTheme
                ? "92, 102, 127"
                : "229, 236, 255";
        drawingContext.beginPath();
        drawingContext.arc(x, y, particle.radius, 0, Math.PI * 2);
        drawingContext.fillStyle = `rgba(${color}, ${opacity})`;
        drawingContext.fill();
      });
    };

    const drawConnections = () => {
      const maxDistance = width < 650 ? 75 : 105;
      for (let first = 0; first < stars.length; first += 1) {
        const firstPosition = getPosition(stars[first]);
        for (let second = first + 1; second < stars.length; second += 1) {
          const secondPosition = getPosition(stars[second]);
          const distance = Math.hypot(
            firstPosition.x - secondPosition.x,
            firstPosition.y - secondPosition.y,
          );
          if (distance > maxDistance) {
            continue;
          }

          const opacity = (1 - distance / maxDistance) * (isLightTheme ? 0.055 : 0.12);
          drawingContext.beginPath();
          drawingContext.moveTo(firstPosition.x, firstPosition.y);
          drawingContext.lineTo(secondPosition.x, secondPosition.y);
          drawingContext.strokeStyle = `rgba(${isLightTheme ? "121, 82, 214" : "167, 139, 250"}, ${opacity})`;
          drawingContext.lineWidth = 0.6;
          drawingContext.stroke();
        }
      }
    };

    function draw(delta: number) {
      drawingContext.clearRect(0, 0, width, height);
      const move = !reducedMotion.matches && isPageVisible;
      elapsed += delta / 1000;
      drawConnections();
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

    const handlePointerMove = (event: PointerEvent) => {
      pointerX = event.clientX / width;
      pointerY = event.clientY / height;
      hasPointer = true;
    };

    const handlePointerLeave = () => {
      hasPointer = false;
    };

    const themeObserver = new MutationObserver(() => {
      isLightTheme = document.documentElement.dataset.theme === "light";
      draw(0);
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    resizeCanvas();
    startAnimation();
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    reducedMotion.addEventListener("change", startAnimation);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      reducedMotion.removeEventListener("change", startAnimation);
      themeObserver.disconnect();
    };
  }, []);

  return <canvas aria-hidden="true" className="universe-canvas" ref={canvasRef} />;
}
