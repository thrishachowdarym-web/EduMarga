import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Code2, Globe, BrainCircuit, BarChart3, ShieldCheck, Smartphone, Cog, ArrowRight, Loader2 } from "lucide-react";

import { NeuralBackground } from "@/components/NeuralBackground";

export const Route = createFileRoute("/software-specialization")({
  head: () => ({
    meta: [
      { title: "Software Specialization | LearnPath AI" },
      {
        name: "description",
        content:
          "Pick your Software specialization — Web Development, AI/ML, Data Science, Cyber Security, App Development or Software Engineering.",
      },
      { property: "og:title", content: "Software Specialization | LearnPath AI" },
      {
        property: "og:description",
        content:
          "Pick your Software specialization — Web Development, AI/ML, Data Science, Cyber Security, App Development or Software Engineering.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SoftwareSpecializationPage,
});

type TrackId =
  | "web-development"
  | "ai-ml"
  | "data-science"
  | "cyber-security"
  | "app-development"
  | "software-engineering";

type Track = {
  id: TrackId;
  emoji: string;
  title: string;
  icon: typeof Globe;
  description: string;
  cta: string;
};

const tracks: Track[] = [
  {
    id: "web-development",
    emoji: "🌐",
    title: "Web Development",
    icon: Globe,
    description: "Frontend, backend, APIs and modern web frameworks.",
    cta: "Start Roadmap",
  },
  {
    id: "ai-ml",
    emoji: "🤖",
    title: "AI & Machine Learning",
    icon: BrainCircuit,
    description: "Models, NLP, computer vision and intelligent systems.",
    cta: "Start Roadmap",
  },
  {
    id: "data-science",
    emoji: "📊",
    title: "Data Science",
    icon: BarChart3,
    description: "Analytics, visualization, statistics and big data pipelines.",
    cta: "Start Roadmap",
  },
  {
    id: "cyber-security",
    emoji: "🔐",
    title: "Cyber Security",
    icon: ShieldCheck,
    description: "Ethical hacking, network security and threat defense.",
    cta: "Start Roadmap",
  },
  {
    id: "app-development",
    emoji: "📱",
    title: "App Development",
    icon: Smartphone,
    description: "Mobile-first design with Android, iOS and cross-platform.",
    cta: "Start Roadmap",
  },
  {
    id: "software-engineering",
    emoji: "⚙️",
    title: "Software Engineering",
    icon: Cog,
    description: "Architecture, testing, DevOps and scalable systems.",
    cta: "Start Roadmap",
  },
];

const trackNames: Record<TrackId, string> = {
  "web-development": "Web Development",
  "ai-ml": "AI & Machine Learning",
  "data-science": "Data Science",
  "cyber-security": "Cyber Security",
  "app-development": "App Development",
  "software-engineering": "Software Engineering",
};

function SoftwareSpecializationPage() {
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
            <Code2 className="size-3.5" />
            Step 3 — Software Specialization
          </span>

          <h1 className="mt-7 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-gradient-brand">Choose Your Software Path</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Select a specialization to generate your personalized AI learning roadmap.
          </p>
        </header>

        <div className="mt-14 grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
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
                  className="glass-card relative flex h-full flex-col rounded-[calc(var(--radius)+0.5rem)] p-7"
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
