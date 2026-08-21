import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { GraduationCap, Cpu, Code2, ArrowRight, Loader2 } from "lucide-react";

import { NeuralBackground } from "@/components/NeuralBackground";

export const Route = createFileRoute("/branch-selection")({
  head: () => ({
    meta: [
      { title: "Select Your Branch | LearnPath AI" },
      {
        name: "description",
        content: "Choose your B.Tech pathway — Software or Hardware — to build a personalized learning roadmap.",
      },
      { property: "og:title", content: "Select Your Branch | LearnPath AI" },
      {
        property: "og:description",
        content: "Choose your B.Tech pathway — Software or Hardware — to build a personalized learning roadmap.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BranchSelectionPage,
});

type Pathway = "software" | "hardware";

const pathways: {
  id: Pathway;
  title: string;
  icon: typeof Code2;
  description: string;
  cta: string;
  to: "/software-specialization" | "/hardware-specialization";
}[] = [
  {
    id: "software",
    title: "Software",
    icon: Code2,
    description: "Programming, Web Development, AI/ML, Data Science and Cyber Security.",
    cta: "Continue with Software",
    to: "/software-specialization",
  },
  {
    id: "hardware",
    title: "Hardware",
    icon: Cpu,
    description: "Electronics, Embedded Systems, VLSI, IoT and Robotics.",
    cta: "Continue with Hardware",
    to: "/hardware-specialization",
  },
];

function BranchSelectionPage() {
  const navigate = useNavigate();
  const [pending, setPending] = useState<Pathway | null>(null);

  const select = (
    pathway: Pathway,
    to: "/software-specialization" | "/hardware-specialization",
  ) => {
    setPending(pathway);
    // brief delay lets the loading state + glow animation play before navigation
    window.setTimeout(() => navigate({ to }), 420);
  };

  return (
    <main className="relative min-h-screen overflow-hidden font-sans text-foreground">
      <NeuralBackground />

      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center px-6 py-16">
        <header className="animate-rise-in text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium tracking-widest text-primary-glow uppercase">
            <GraduationCap className="size-3.5" />
            Step 2 — Your Pathway
          </span>

          <h1 className="mt-7 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-gradient-brand">Choose Your Branch</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Select your B.Tech pathway to build a personalized roadmap.
          </p>
        </header>

        <div className="mt-14 grid w-full gap-7 sm:grid-cols-2 lg:gap-9">
          {pathways.map(({ id, title, icon: Icon, description, cta, to }, index) => {
            const isActive = pending === id;
            const isDimmed = pending !== null && pending !== id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => select(id, to)}
                disabled={pending !== null}
                aria-label={cta}
                style={{ animationDelay: `${index * 120}ms` }}
                className={`group relative animate-rise-in overflow-hidden rounded-[calc(var(--radius)+1rem)] text-left transition-all duration-500 ${
                  isDimmed ? "scale-[0.98] opacity-50" : "opacity-100"
                } ${isActive ? "scale-[1.01]" : ""}`}
              >
                {/* glowing border */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -inset-px rounded-[calc(var(--radius)+1rem)] opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100"
                  style={{ background: "var(--gradient-brand)", filter: "blur(3px)" }}
                />
                {/* ambient glow on hover */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -inset-24 -z-10 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
                  style={{ background: "var(--gradient-brand)" }}
                />

                <div
                  className="glass-card relative h-full rounded-[calc(var(--radius)+1rem)] p-8 sm:p-10"
                  style={{ background: "var(--card-surface)" }}
                >
                  <div className="flex items-start justify-between">
                    <span
                      className="flex size-16 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-cyan transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3"
                      style={{ boxShadow: "var(--icon-glow)" }}
                    >
                      <Icon className="size-8" />
                    </span>
                    <span className="font-display text-sm font-semibold tracking-widest text-muted-foreground uppercase">
                      {title}
                    </span>
                  </div>

                  <h2 className="mt-8 font-display text-3xl font-bold tracking-tight">
                    <span className="text-gradient-brand">{title}</span>
                  </h2>

                  <p className="mt-4 max-w-xs text-sm leading-relaxed text-foreground/80 sm:text-base">
                    {description}
                  </p>

                  <div className="mt-9 flex items-center gap-2.5">
                    <span
                      className="inline-flex items-center gap-2 rounded-xl px-5 py-3 font-display text-sm font-semibold tracking-wide text-primary-foreground transition-transform duration-200 group-hover:translate-x-1"
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
          <Link to="/select-program" className="font-medium text-cyan transition-opacity hover:opacity-80">
            Back
          </Link>
        </p>
      </div>
    </main>
  );
}
