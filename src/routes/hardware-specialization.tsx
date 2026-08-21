import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Cpu, Wrench, Zap, Building, ArrowRight, Loader2 } from "lucide-react";

import { NeuralBackground } from "@/components/NeuralBackground";

export const Route = createFileRoute("/hardware-specialization")({
  head: () => ({
    meta: [
      { title: "Hardware Specialization | LearnPath AI" },
      {
        name: "description",
        content:
          "Pick your Hardware specialization — Mechanical, Electrical, Electronics & Communication (ECE), or Civil Engineering.",
      },
      { property: "og:title", content: "Hardware Specialization | LearnPath AI" },
      {
        property: "og:description",
        content:
          "Pick your Hardware specialization — Mechanical, Electrical, Electronics & Communication (ECE), or Civil Engineering.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HardwareSpecializationPage,
});

type TrackId = "mechanical" | "electrical" | "ece" | "civil";

type Track = {
  id: TrackId;
  emoji: string;
  title: string;
  icon: typeof Cpu;
  description: string;
  cta: string;
};

const tracks: Track[] = [
  {
    id: "mechanical",
    emoji: "📐",
    title: "Mechanical Engineering",
    icon: Wrench,
    description: "Thermodynamics, Strength of Materials, CAD/CAM, FEA simulation and Robotics.",
    cta: "Start Roadmap",
  },
  {
    id: "electrical",
    emoji: "⚡",
    title: "Electrical Engineering",
    icon: Zap,
    description: "Network Analysis, Electric Machines, Power Systems, Control and Power Electronics.",
    cta: "Start Roadmap",
  },
  {
    id: "ece",
    emoji: "📟",
    title: "Electronics & Comm. (ECE)",
    icon: Cpu,
    description: "Semiconductor Devices, Digital System Design, VLSI Circuits, Embedded Systems and IoT.",
    cta: "Start Roadmap",
  },
  {
    id: "civil",
    emoji: "🏗️",
    title: "Civil Engineering",
    icon: Building,
    description: "Engineering Mechanics, Surveying, Structural Analysis, Soil Mechanics and concrete design.",
    cta: "Start Roadmap",
  },
];

const trackNames: Record<TrackId, string> = {
  mechanical: "Mechanical Engineering",
  electrical: "Electrical Engineering",
  ece: "Electronics & Communication Engineering",
  civil: "Civil Engineering",
};

function HardwareSpecializationPage() {
  const navigate = useNavigate();
  const [pending, setPending] = useState<TrackId | null>(null);

  const select = (id: TrackId) => {
    setPending(id);
    window.setTimeout(() => navigate({ to: "/roadmap/$track", params: { track: id } }), 420);
  };

  return (
    <main className="relative min-h-screen overflow-hidden font-sans text-foreground">
      <NeuralBackground />

      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center px-6 py-16">
        <header className="animate-rise-in text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium tracking-widest text-primary-glow uppercase">
            <Cpu className="size-3.5" />
            Step 3 — Hardware Specialization
          </span>

          <h1 className="mt-7 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-gradient-brand">Choose Your Hardware Path</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Select your core engineering branch to generate your personalized AI study roadmap.
          </p>
        </header>

        <div className="mt-14 grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {tracks.map(({ id, emoji, title, icon: Icon, description, cta }, index) => {
            const isActive = pending === id;
            const isDimmed = pending !== null && pending !== id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => select(id)}
                disabled={pending !== null}
                aria-label={`${cta} — ${trackNames[id]}`}
                style={{ animationDelay: `${index * 90}ms` }}
                className={`group relative animate-rise-in overflow-hidden rounded-[calc(var(--radius)+0.5rem)] text-left transition-all duration-500 ${
                  isDimmed ? "scale-[0.98] opacity-50" : "opacity-100"
                } ${isActive ? "scale-[1.02]" : ""}`}
              >
                {/* glowing border */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -inset-px rounded-[calc(var(--radius)+0.5rem)] opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100"
                  style={{ background: "var(--gradient-brand)", filter: "blur(3px)" }}
                />
                {/* ambient glow on hover */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -inset-16 -z-10 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
                  style={{ background: "var(--gradient-brand)" }}
                />

                <div
                  className="glass-card relative flex h-full flex-col rounded-[calc(var(--radius)+0.5rem)] p-6"
                  style={{ background: "var(--card-surface)" }}
                >
                  <div className="flex items-start justify-between">
                    <span
                      className="flex size-14 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-cyan transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3"
                      style={{ boxShadow: "var(--icon-glow)" }}
                    >
                      <Icon className="size-7" />
                    </span>
                    <span className="text-3xl leading-none" aria-hidden>
                      {emoji}
                    </span>
                  </div>

                  <h2 className="mt-6 font-display text-xl font-bold tracking-tight">
                    <span className="text-gradient-brand">{title}</span>
                  </h2>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/75">
                    {description}
                  </p>

                  <div className="mt-6 flex items-center gap-2.5">
                    <span
                      className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 font-display text-sm font-semibold tracking-wide text-primary-foreground transition-transform duration-200 group-hover:translate-x-1"
                      style={{
                        background: "var(--gradient-brand)",
                        boxShadow: "var(--shadow-glow)",
                      }}
                    >
                      {isActive ? (
                        <Loader2 className="size-4 animate-spin" />
                      ) : (
                        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                      )}
                      <span>{isActive ? "Loading..." : cta}</span>
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <p className="mt-12 text-center text-xs text-muted-foreground">
          <Link to="/branch-selection" className="font-medium text-cyan transition-opacity hover:opacity-80">
            Back
          </Link>
        </p>
      </div>
    </main>
  );
}
