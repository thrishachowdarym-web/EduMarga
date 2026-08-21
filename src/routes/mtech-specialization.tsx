import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import {
  BrainCircuit,
  Cpu,
  ArrowRight,
  Loader2,
  Code,
  BarChart3,
  ShieldCheck,
  Cloud,
  Network,
  Database,
  Settings,
  Radio,
  Zap,
  Wrench,
  Flame,
  Building2,
  Activity,
  Award
} from "lucide-react";

import { NeuralBackground } from "@/components/NeuralBackground";

export const Route = createFileRoute("/mtech-specialization")({
  head: () => ({
    meta: [
      { title: "M.Tech Specialization | LearnPath AI" },
      {
        name: "description",
        content: "Choose your M.Tech specialization — Software or Hardware/Core Engineering.",
      },
      { property: "og:title", content: "M.Tech Specialization | LearnPath AI" },
      {
        property: "og:description",
        content: "Choose your M.Tech specialization — Software or Hardware/Core Engineering.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MtechSpecializationPage,
});

type TabId = "software" | "hardware";

type MTechTrack = {
  id: string;
  emoji: string;
  title: string;
  description: string;
  icon: typeof Cpu;
};

const softwareSpecializations: MTechTrack[] = [
  { id: "mtech-cse", emoji: "💻", title: "Computer Science & Eng.", description: "Advanced Algorithms, Systems, and Distributed Computing architectures.", icon: Code },
  { id: "mtech-aiml", emoji: "🤖", title: "AI & Machine Learning", description: "Deep Learning, Transformers, NLP, and reinforcement learning models.", icon: BrainCircuit },
  { id: "mtech-datascience", emoji: "📊", title: "Data Science & Eng.", description: "Big Data systems, predictive modeling, statistical learning, and analytics.", icon: BarChart3 },
  { id: "mtech-cybersecurity", emoji: "🔐", title: "Cyber Security", description: "Vulnerability analysis, threat intelligence, advanced cryptography, and security audits.", icon: ShieldCheck },
  { id: "mtech-softwareeng", emoji: "📐", title: "Software Engineering", description: "Formal verification, clean code standards, microservices, and SDLC models.", icon: Award },
  { id: "mtech-cloud", emoji: "☁️", title: "Cloud Computing", description: "Virtualization, distributed consensus (Raft/Paxos), and kubernetes clustering.", icon: Cloud },
  { id: "mtech-networks", emoji: "🌐", title: "Computer Networks", description: "Software Defined Networking (SDN), network routing, and high-speed protocols.", icon: Network },
  { id: "mtech-it", emoji: "📡", title: "Information Technology", description: "Enterprise applications, information retrieval pipelines, and secure data flow.", icon: Database },
  { id: "mtech-architecture", emoji: "🔌", title: "Computer Architecture", description: "Superscalar execution, branch prediction models, and hardware descriptions.", icon: Settings },
  { id: "mtech-iot", emoji: "📡", title: "Internet of Things", description: "Sensor networks, low-power protocols (MQTT/CoAP), and edge computing.", icon: Radio },
];

const hardwareSpecializations: MTechTrack[] = [
  { id: "mtech-vlsi", emoji: "⚡", title: "VLSI Design", description: "CMOS layout design, static timing analysis (STA), and ASIC synthesis.", icon: Cpu },
  { id: "mtech-embedded", emoji: "📟", title: "Embedded Systems", description: "RTOS programming, ARM Cortex drivers, and communication protocol bridges.", icon: Cpu },
  { id: "mtech-ece", emoji: "📡", title: "Electronics & Comm. (ECE)", description: "Multirate DSP, information theory, RF communications, and antenna models.", icon: Radio },
  { id: "mtech-powersystems", emoji: "🏭", title: "Power Systems", description: "Newton-Raphson load flow, grid stability simulations, and fault analysis.", icon: Zap },
  { id: "mtech-powerelectronics", emoji: "🔋", title: "Power Electronics", description: "Switching converter designs, soft-switching, and Altium PCB layouts.", icon: Activity },
  { id: "mtech-controlsystems", emoji: "🎛️", title: "Control Systems", description: "State feedback, dynamic observers, LQR tracking, and robotics kinematics.", icon: Settings },
  { id: "mtech-electrical", emoji: "⚡", title: "Electrical Engineering", description: "Machine dynamics, grid transience, and high-voltage grid calculations.", icon: Zap },
  { id: "mtech-mechanical", emoji: "📐", title: "Mechanical Engineering", description: "Continuum mechanics, modal vibrations, FEA stress models, and robotics.", icon: Wrench },
  { id: "mtech-thermal", emoji: "🔥", title: "Thermal Engineering", description: "Boundary layer flow, transient heat conduction, and Fluent CFD models.", icon: Flame },
  { id: "mtech-manufacturing", emoji: "⚙️", title: "Manufacturing Eng.", description: "Subtractive mechanics, CNC G-coding, and statistical quality audits.", icon: Settings },
  { id: "mtech-structural", emoji: "🌉", title: "Structural Engineering", description: "RCC yield lines, response spectra wind/seismic checks, and STAAD models.", icon: Building2 },
  { id: "mtech-transportation", emoji: "🛣️", title: "Transportation Eng.", description: "Pavement stresses, traffic signals, and QGIS spatial mapping layouts.", icon: Building2 },
  { id: "mtech-civil", emoji: "🏗️", title: "Civil Engineering", description: "Soil mechanics, construction management scheduling, and structural loading.", icon: Building2 },
];

function MtechSpecializationPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabId>("software");
  const [pending, setPending] = useState<string | null>(null);

  const select = (id: string) => {
    setPending(id);
    window.setTimeout(() => navigate({ to: "/roadmap/$track", params: { track: id } }), 420);
  };

  const tracks = activeTab === "software" ? softwareSpecializations : hardwareSpecializations;

  return (
    <main className="relative min-h-screen overflow-hidden font-sans text-foreground">
      <NeuralBackground />

      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center px-6 py-16">
        <header className="animate-rise-in text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium tracking-widest text-primary-glow uppercase">
            <BrainCircuit className="size-3.5" />
            Step 2 — M.Tech Specialization
          </span>

          <h1 className="mt-7 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-gradient-brand">Select M.Tech Program</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Choose your specialization to generate your advanced, research-oriented learning roadmap.
          </p>

          {/* Tabs */}
          <div className="mt-10 inline-flex rounded-xl p-1 bg-secondary/30 border border-primary/15">
            <button
              type="button"
              onClick={() => setActiveTab("software")}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "software" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Software & Computing
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("hardware")}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "hardware" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Hardware & Core Engineering
            </button>
          </div>
        </header>

        <div className="mt-14 grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {tracks.map(({ id, emoji, title, icon: Icon, description }, index) => {
            const isActive = pending === id;
            const isDimmed = pending !== null && pending !== id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => select(id)}
                disabled={pending !== null}
                style={{ animationDelay: `${index * 80}ms` }}
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
                      <span>{isActive ? "Generating..." : "Start Roadmap"}</span>
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <p className="mt-12 text-center text-xs text-muted-foreground">
          <Link to="/select-program" className="font-medium text-cyan transition-opacity hover:opacity-80">
            Back to Select Program
          </Link>
        </p>
      </div>
    </main>
  );
}
