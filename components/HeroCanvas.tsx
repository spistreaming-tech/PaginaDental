"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import {
  useScroll,
  useTransform,
  useMotionValueEvent,
  motion,
} from "framer-motion";

const TOTAL_FRAMES = 120;

export default function HeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(0);
  const [loadedCount, setLoadedCount] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, TOTAL_FRAMES - 1]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const img = imagesRef.current[index];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Cover fit, centered
    const scale = Math.min(
      canvas.width / img.naturalWidth,
      canvas.height / img.naturalHeight
    );
    const x = (canvas.width - img.naturalWidth * scale) / 2;
    const y = (canvas.height - img.naturalHeight * scale) / 2;
    ctx.drawImage(img, x, y, img.naturalWidth * scale, img.naturalHeight * scale);

    // Vignette overlay
    const grad = ctx.createRadialGradient(
      canvas.width / 2,
      canvas.height / 2,
      0,
      canvas.width / 2,
      canvas.height / 2,
      Math.max(canvas.width, canvas.height) * 0.7
    );
    grad.addColorStop(0, "rgba(0,0,0,0)");
    grad.addColorStop(1, "rgba(0,0,0,0.45)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  useMotionValueEvent(frameIndex, "change", (v) => {
    const idx = Math.round(v);
    currentFrameRef.current = idx;
    drawFrame(idx);
  });

  // Load all frames on mount
  useEffect(() => {
    const imgs: HTMLImageElement[] = Array.from({ length: TOTAL_FRAMES }, (_, i) => {
      const img = new Image();
      img.src = `/frames-dental/${i + 1}.jpg`;
      img.onload = () => {
        setLoadedCount((c) => c + 1);
        if (i === 0) {
          // Draw frame 0 as soon as first image is ready
          drawFrame(0);
        }
      };
      return img;
    });
    imagesRef.current = imgs;

    // Fallback: try to draw frame 0 after 300ms in case onload already fired
    const timer = setTimeout(() => {
      drawFrame(0);
    }, 300);

    return () => clearTimeout(timer);
  }, [drawFrame]);

  // Resize observer — keep canvas dimensions matching the sticky container
  useEffect(() => {
    const sticky = stickyRef.current;
    const canvas = canvasRef.current;
    if (!sticky || !canvas) return;

    const observer = new ResizeObserver(() => {
      canvas.width = sticky.offsetWidth;
      canvas.height = sticky.offsetHeight;
      drawFrame(currentFrameRef.current);
    });

    observer.observe(sticky);

    // Set initial size
    canvas.width = sticky.offsetWidth;
    canvas.height = sticky.offsetHeight;

    return () => observer.disconnect();
  }, [drawFrame]);

  const isLoading = loadedCount < TOTAL_FRAMES;
  const loadingProgress = (loadedCount / TOTAL_FRAMES) * 100;

  return (
    <div ref={containerRef} style={{ position: "relative", height: "700vh" }}>
      {/* Sticky window */}
      <div
        ref={stickyRef}
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          width: "100%",
          overflow: "hidden",
          backgroundColor: "#0D1117",
        }}
      >
        {/* Canvas */}
        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            display: "block",
          }}
        />

        {/* Title overlay */}
        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
            opacity: titleOpacity,
          }}
        >
          <div style={{ textAlign: "center", padding: "0 24px" }}>
            {/* Label */}
            <p
              style={{
                fontFamily: '"DM Sans", system-ui, sans-serif',
                fontSize: "12px",
                letterSpacing: "0.25em",
                color: "#00B4D8",
                textTransform: "uppercase",
                marginBottom: "20px",
                fontWeight: 500,
              }}
            >
              Clínica Dental Premium
            </p>

            {/* Main title */}
            <h1
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: "clamp(2.5rem, 7vw, 4.5rem)",
                color: "#ffffff",
                textAlign: "center",
                maxWidth: "56rem",
                lineHeight: 1.1,
                fontWeight: 700,
                margin: "0 auto",
                textShadow: "0 2px 40px rgba(0,0,0,0.5)",
              }}
            >
              Tu sonrisa perfecta<br />empieza aquí.
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontFamily: '"DM Sans", system-ui, sans-serif',
                fontSize: "1.125rem",
                color: "rgba(255,255,255,0.7)",
                marginTop: "20px",
                fontWeight: 300,
              }}
            >
              Ortodoncia invisible · Blanqueamiento · Implantes
            </p>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          style={{
            position: "absolute",
            bottom: "2rem",
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            opacity: titleOpacity,
            pointerEvents: "none",
          }}
        >
          <motion.p
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            style={{
              fontFamily: '"DM Sans", system-ui, sans-serif',
              fontSize: "0.875rem",
              color: "rgba(255,255,255,0.35)",
              letterSpacing: "0.05em",
            }}
          >
            Scroll para descubrir ↓
          </motion.p>
        </motion.div>

        {/* Loading bar */}
        {isLoading && (
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "2px",
              backgroundColor: "rgba(255,255,255,0.08)",
            }}
          >
            <div
              style={{
                height: "100%",
                backgroundColor: "#00B4D8",
                width: `${loadingProgress}%`,
                transition: "width 0.2s ease",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
