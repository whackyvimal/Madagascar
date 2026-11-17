import { useEffect, useState, type CSSProperties } from "react";

type Particle = { id: number; left: number; size: number; dur: number; delay: number; drift: number; kind: "petal" | "glow"; top: number };

/** Floating petals and soft light motes. Generated after mount to keep SSR markup stable. */
export function AmbientParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const count = window.innerWidth < 640 ? 14 : 24;
    setParticles(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        kind: i % 3 === 0 ? "glow" : "petal",
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 6 + Math.random() * 10,
        dur: 14 + Math.random() * 16,
        delay: -Math.random() * 30,
        drift: (Math.random() - 0.5) * 160,
      })),
    );
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {particles.map((p) =>
        p.kind === "petal" ? (
          <span
            key={p.id}
            className="animate-petal absolute top-0 block rounded-[60%_0_60%_0] bg-rose/70"
            style={
              {
                left: `${p.left}%`,
                width: p.size,
                height: p.size * 1.3,
                "--dur": `${p.dur}s`,
                "--drift": `${p.drift}px`,
                animationDelay: `${p.delay}s`,
              } as CSSProperties
            }
          />
        ) : (
          <span
            key={p.id}
            className="animate-glow-float bg-sun absolute block rounded-full"
            style={
              {
                left: `${p.left}%`,
                top: `${p.top}%`,
                width: p.size * 3,
                height: p.size * 3,
                "--dur": `${p.dur / 3}s`,
                animationDelay: `${p.delay / 5}s`,
              } as CSSProperties
            }
          />
        ),
      )}
    </div>
  );
}
