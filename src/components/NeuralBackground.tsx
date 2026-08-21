import { useEffect, useRef } from "react";

type Node = { x: number; y: number; vx: number; vy: number; z: number };

export function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let nodes: Node[] = [];
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round(Math.min(110, Math.max(38, (w * h) / 16000)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        z: Math.random() * 0.8 + 0.35,
      }));
    };

    const pointer = { x: -9999, y: -9999 };
    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      const isLight = typeof document !== "undefined" && document.documentElement.classList.contains("light");
      if (!isLight) {
        // Remove AI-generated sparkles / canvas nodes in Dark Mode
        raf = requestAnimationFrame(draw);
        return;
      }

      for (const n of nodes) {
        n.x += n.vx * n.z;
        n.y += n.vy * n.z;
        if (n.x < -30) n.x = w + 30;
        if (n.x > w + 30) n.x = -30;
        if (n.y < -30) n.y = h + 30;
        if (n.y > h + 30) n.y = -30;

        const dx = n.x - pointer.x;
        const dy = n.y - pointer.y;
        const d = Math.hypot(dx, dy);
        if (d < 140 && d > 0.01) {
          n.x += (dx / d) * 0.7;
          n.y += (dy / d) * 0.7;
        }
      }

      const col1 = "168, 85, 247";
      const col2 = "34, 211, 238";
      const dotCol1 = "rgba(196, 132, 252, 0.9)";
      const dotCol2 = "rgba(34, 211, 238, 0.95)";
      const shadowCol1 = "rgba(168,85,247,0.9)";
      const shadowCol2 = "rgba(34,211,238,0.9)";

      const maxDist = Math.min(170, Math.max(110, w / 9));
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]!;
          const b = nodes[j]!;
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist > maxDist) continue;
          const alpha = (1 - dist / maxDist) * 0.4;
          const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
          grad.addColorStop(0, `rgba(${col1}, ${alpha})`);
          grad.addColorStop(1, `rgba(${col2}, ${alpha})`);
          ctx.strokeStyle = grad;
          ctx.lineWidth = 0.7;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      for (const n of nodes) {
        const r = 1.1 + n.z * 1.6;
        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fillStyle = n.z > 0.85 ? dotCol2 : dotCol1;
        ctx.shadowBlur = 14 * n.z;
        ctx.shadowColor = n.z > 0.85 ? shadowCol2 : shadowCol1;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerleave", onLeave);
    if (reduced) draw(), cancelAnimationFrame(raf);
    else raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
      {/* Visual background animations rendered in Light Mode; removed in Dark Mode */}
      <div className="hidden light:block absolute inset-0">
        <div className="absolute -left-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-primary/25 blur-[140px] animate-float-slow" />
        <div className="absolute -bottom-52 -right-32 h-[34rem] w-[34rem] rounded-full bg-cyan/20 blur-[150px] animate-drift" />
        <div className="absolute left-1/2 top-1/3 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-primary-glow/15 blur-[160px] animate-float-slow" />
        <div className="absolute left-1/2 top-1/2 h-[46rem] w-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/15 animate-spin-slow" />
        <div className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan/10 animate-spin-slow" />
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(1 0 0 / 0.08) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.08) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse at center, black 20%, transparent 75%)",
            transform: "perspective(700px) rotateX(58deg) translateY(28%) scale(1.6)",
            transformOrigin: "center bottom",
          }}
        />
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      </div>
    </div>
  );
}
