import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { useEffect, useState, useMemo } from "react";
import {
  Map,
  Code2,
  CheckCircle2,
  Circle,
  BookOpen,
  Video,
  Dumbbell,
  Terminal,
  Lightbulb,
  ListChecks,
  Sparkles,
  ExternalLink,
  X,
} from "lucide-react";

import { NeuralBackground } from "@/components/NeuralBackground";
import { webDevelopmentRoadmap, type RoadmapStep } from "@/data/web-development-roadmap";
import { aiMlRoadmap } from "@/data/ai-ml-roadmap";
import { dataScienceRoadmap } from "@/data/data-science-roadmap";
import { cyberSecurityRoadmap, cyberSecurityShortNotes } from "@/data/cyber-security-roadmap";
import { appDevelopmentRoadmap } from "@/data/app-development-roadmap";
import { mechanicalRoadmap } from "@/data/mechanical-roadmap";
import { electricalRoadmap } from "@/data/electrical-roadmap";
import { eceRoadmap } from "@/data/ece-roadmap";
import { civilRoadmap } from "@/data/civil-roadmap";
import { softwareEngineeringRoadmap } from "@/data/software-engineering-roadmap";
import { mtechRoadmaps } from "@/data/mtech-roadmaps";

const mtechTrackNames: Record<string, string> = {
  "mtech-cse": "M.Tech Computer Science & Engineering",
  "mtech-aiml": "M.Tech Artificial Intelligence & Machine Learning",
  "mtech-datascience": "M.Tech Data Science & Engineering",
  "mtech-cybersecurity": "M.Tech Cyber Security",
  "mtech-softwareeng": "M.Tech Software Engineering",
  "mtech-cloud": "M.Tech Cloud Computing",
  "mtech-networks": "M.Tech Computer Networks",
  "mtech-it": "M.Tech Information Technology",
  "mtech-architecture": "M.Tech Computer Architecture",
  "mtech-iot": "M.Tech Internet of Things",
  "mtech-vlsi": "M.Tech VLSI Design",
  "mtech-embedded": "M.Tech Embedded Systems",
  "mtech-ece": "M.Tech Electronics & Communication",
  "mtech-powersystems": "M.Tech Power Systems",
  "mtech-powerelectronics": "M.Tech Power Electronics",
  "mtech-controlsystems": "M.Tech Control Systems",
  "mtech-electrical": "M.Tech Electrical Engineering",
  "mtech-mechanical": "M.Tech Mechanical Engineering",
  "mtech-thermal": "M.Tech Thermal Engineering",
  "mtech-manufacturing": "M.Tech Manufacturing Engineering",
  "mtech-structural": "M.Tech Structural Engineering",
  "mtech-transportation": "M.Tech Transportation Engineering",
  "mtech-civil": "M.Tech Civil Engineering",
};

export const Route = createFileRoute("/roadmap/$track")({
  head: ({ params }) => {
    const label =
      mtechTrackNames[params.track] ||
      (params.track === "ai-ml"
        ? "AI & Machine Learning"
        : params.track === "web-development"
          ? "Web Development"
          : params.track === "data-science"
            ? "Data Science"
            : params.track
                .split("-")
                .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                .join(" "));
    const title = `${label} Roadmap | LearnPath AI`;
    const description =
      "Step-by-step roadmap with topics, free resources, videos, practice, compilers and project ideas.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: RoadmapPage,
});

function RoadmapPage() {
  const { track } = useParams({ from: "/roadmap/$track" });
  const label = track
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  if (track === "web-development") {
    return <RoadmapView track="web-development" steps={webDevelopmentRoadmap} floatingSet="web" />;
  }
  if (track === "ai-ml") {
    return <RoadmapView track="ai-ml" steps={aiMlRoadmap} floatingSet="ai" />;
  }
  if (track === "data-science") {
    return <RoadmapView track="data-science" steps={dataScienceRoadmap} floatingSet="data" />;
  }
  if (track === "cyber-security") {
    return (
      <RoadmapView
        track="cyber-security"
        steps={cyberSecurityRoadmap}
        floatingSet="data"
        notes={cyberSecurityShortNotes}
      />
    );
  }
  if (track === "app-development") {
    return <RoadmapView track="app-development" steps={appDevelopmentRoadmap} floatingSet="app" />;
  }
  if (track === "mechanical") {
    return <RoadmapView track="mechanical" steps={mechanicalRoadmap} floatingSet="app" />;
  }
  if (track === "electrical") {
    return <RoadmapView track="electrical" steps={electricalRoadmap} floatingSet="ai" />;
  }
  if (track === "ece") {
    return <RoadmapView track="ece" steps={eceRoadmap} floatingSet="ai" />;
  }
  if (track === "civil") {
    return <RoadmapView track="civil" steps={civilRoadmap} floatingSet="data" />;
  }
  if (track === "software-engineering") {
    return <RoadmapView track="software-engineering" steps={softwareEngineeringRoadmap} floatingSet="app" />;
  }
  if (track.startsWith("mtech-")) {
    const steps = mtechRoadmaps[track];
    if (steps) {
      const isSoftware = [
        "mtech-cse", "mtech-aiml", "mtech-datascience", "mtech-cybersecurity",
        "mtech-softwareeng", "mtech-cloud", "mtech-networks", "mtech-it",
        "mtech-architecture", "mtech-iot"
      ].includes(track);
      const set = isSoftware ? "web" : "app";
      return <RoadmapView track={track} steps={steps} floatingSet={set} />;
    }
  }


  return <ComingSoon label={label} />;
}

function ComingSoon({ label }: { label: string }) {
  return (
    <main className="relative flex min-h-screen items-center justify-center px-6 font-sans">
      <NeuralBackground />
      <div className="glass-card animate-rise-in max-w-md rounded-3xl p-10 text-center">
        <span className="mx-auto flex size-14 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-cyan">
          <Map className="size-7" />
        </span>
        <h1 className="mt-6 font-display text-3xl font-semibold text-gradient-brand">{label} Roadmap</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Your personalized AI roadmap is being prepared. The full experience is coming next.
        </p>
        <Link
          to="/software-specialization"
          className="mt-7 inline-flex rounded-xl border border-primary/40 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-primary/15"
        >
          <span className="inline-flex items-center gap-2">
            <Code2 className="size-4" />
            Back to Software Specialization
          </span>
        </Link>
      </div>
    </main>
  );
}

function resolveResourceUrl(stepTitle: string, stepId: string, label: string, currentUrl: string): string {
  const cleanTitle = stepTitle.toLowerCase();
  const cleanId = stepId.toLowerCase();
  const cleanUrl = currentUrl.trim();

  const isW3Schools = cleanUrl.includes("w3schools.com") && 
    (cleanUrl === "https://www.w3schools.com" || cleanUrl === "https://www.w3schools.com/" || cleanUrl.endsWith("w3schools.com/index.html"));

  const isYouTube = cleanUrl.includes("youtube.com") && 
    (cleanUrl === "https://www.youtube.com" || cleanUrl === "https://www.youtube.com/" || cleanUrl.endsWith("youtube.com/feed/trending") || cleanUrl.includes("youtube.com/channel") || cleanUrl.includes("youtube.com/user"));

  if (!isW3Schools && !isYouTube) {
    return currentUrl;
  }

  if (isW3Schools) {
    if (cleanTitle.includes("html") || cleanId.includes("html")) return "https://www.w3schools.com/html/";
    if (cleanTitle.includes("css") || cleanId.includes("css")) return "https://www.w3schools.com/css/";
    if (cleanTitle.includes("javascript") || cleanId.includes("javascript") || cleanTitle.includes("js") || cleanId.includes("js")) return "https://www.w3schools.com/js/";
    if (cleanTitle.includes("react") || cleanId.includes("react")) return "https://www.w3schools.com/react/";
    if (cleanTitle.includes("python") || cleanId.includes("python")) return "https://www.w3schools.com/python/";
    if (cleanTitle.includes("java") || cleanId.includes("java")) {
      if (cleanTitle.includes("javascript") || cleanId.includes("javascript")) return "https://www.w3schools.com/js/";
      return "https://www.w3schools.com/java/";
    }
    if (cleanTitle.includes("sql") || cleanId.includes("sql") || cleanTitle.includes("dbms") || cleanId.includes("dbms") || cleanTitle.includes("database") || cleanId.includes("database")) return "https://www.w3schools.com/sql/";
    if (cleanTitle.includes("c++") || cleanId.includes("cpp")) return "https://www.w3schools.com/cpp/";
    if (cleanTitle.includes("c ") || cleanTitle.startsWith("c ") || cleanId === "c" || cleanTitle.includes("programming in c")) return "https://www.w3schools.com/c/";
    if (cleanTitle.includes("node") || cleanId.includes("node")) return "https://www.w3schools.com/nodejs/";
    if (cleanTitle.includes("git") || cleanId.includes("git")) return "https://www.w3schools.com/git/";
    if (cleanTitle.includes("linux") || cleanId.includes("linux")) return "https://www.w3schools.com/linux/";
    if (cleanTitle.includes("cybersecurity") || cleanId.includes("cybersecurity") || cleanTitle.includes("cyber") || cleanId.includes("cyber")) return "https://www.w3schools.com/cybersecurity/";
    if (cleanTitle.includes("datascience") || cleanId.includes("datascience") || cleanTitle.includes("data science") || cleanId.includes("data-science")) return "https://www.w3schools.com/datascience/";
    if (cleanTitle.includes("cloud") || cleanId.includes("cloud")) return "https://www.w3schools.com/aws/";
    if (cleanTitle.includes("dsa") || cleanId.includes("dsa") || cleanTitle.includes("data structures") || cleanId.includes("data-structures") || cleanTitle.includes("algorithms") || cleanId.includes("algorithms")) return "https://www.w3schools.com/dsa/";
    if (cleanTitle.includes("bootstrap") || cleanId.includes("bootstrap")) return "https://www.w3schools.com/bootstrap/";
    if (cleanTitle.includes("php") || cleanId.includes("php")) return "https://www.w3schools.com/php/";
    if (cleanTitle.includes("angular") || cleanId.includes("angular")) return "https://www.w3schools.com/angular/";
    if (cleanTitle.includes("typescript") || cleanId.includes("typescript")) return "https://www.w3schools.com/typescript/";
    return "https://www.w3schools.com/tutorials/index.php";
  }

  if (isYouTube) {
    if (cleanTitle.includes("math") || cleanId.includes("math") || cleanTitle.includes("calculus") || cleanTitle.includes("algebra")) {
      return "https://www.youtube.com/watch?v=3d6DsjIBzJ4";
    }
    if (cleanTitle.includes("graphics") || cleanTitle.includes("drawing") || cleanId.includes("graphics") || cleanId.includes("drawing")) {
      return "https://www.youtube.com/watch?v=pQN-pnXPaVg";
    }
    if (cleanTitle.includes("physics") || cleanId.includes("physics")) {
      return "https://www.youtube.com/watch?v=g978Yk73b18";
    }
    if (cleanTitle.includes("chemistry") || cleanId.includes("chemistry")) {
      return "https://www.youtube.com/watch?v=f-nE5X4u8i0";
    }
    if (cleanTitle.includes("html") || cleanId.includes("html")) return "https://www.youtube.com/watch?v=pQN-pnXPaVg";
    if (cleanTitle.includes("css") || cleanId.includes("css")) return "https://www.youtube.com/watch?v=OXGznpKZ_sA";
    if (cleanTitle.includes("javascript") || cleanId.includes("javascript") || cleanTitle.includes("js") || cleanId.includes("js")) return "https://www.youtube.com/watch?v=PkZNo7MFNFg";
    if (cleanTitle.includes("react") || cleanId.includes("react")) return "https://www.youtube.com/watch?v=bMknfKXIFA8";
    if (cleanTitle.includes("node") || cleanId.includes("node")) return "https://www.youtube.com/watch?v=Oe421EPjeBE";
    if (cleanTitle.includes("sql") || cleanId.includes("sql") || cleanTitle.includes("dbms") || cleanId.includes("dbms") || cleanTitle.includes("database") || cleanId.includes("database")) return "https://www.youtube.com/watch?v=HXV3zeQKqGY";
    if (cleanTitle.includes("python") || cleanId.includes("python")) return "https://www.youtube.com/watch?v=rfscVS0vtbw";
    if (cleanTitle.includes("java") || cleanId.includes("java")) {
      if (cleanTitle.includes("javascript") || cleanId.includes("javascript")) return "https://www.youtube.com/watch?v=PkZNo7MFNFg";
      return "https://www.youtube.com/watch?v=A74TOX803D0";
    }
    if (cleanTitle.includes("c++") || cleanId.includes("cpp")) return "https://www.youtube.com/watch?v=vLnPwxZdW4Y";
    if (cleanTitle.includes("c ") || cleanTitle.startsWith("c ") || cleanId === "c" || cleanTitle.includes("programming in c")) return "https://www.youtube.com/watch?v=irqbmMNs2Bo";
    if (cleanTitle.includes("git") || cleanId.includes("git")) return "https://www.youtube.com/watch?v=apGV9Ad7XY0";
    if (cleanTitle.includes("linux") || cleanId.includes("linux")) return "https://www.youtube.com/watch?v=sWbUDq4S6Y8";
    if (cleanTitle.includes("cybersecurity") || cleanId.includes("cybersecurity") || cleanTitle.includes("cyber") || cleanId.includes("cyber")) return "https://www.youtube.com/watch?v=3Kq1MIfTWCE";
    if (cleanTitle.includes("datascience") || cleanId.includes("datascience") || cleanTitle.includes("data science") || cleanId.includes("data-science")) return "https://www.youtube.com/watch?v=ua-CiDNNj30";
    if (cleanTitle.includes("cloud") || cleanId.includes("cloud")) return "https://www.youtube.com/watch?v=M91vGQ4f2UM";
    if (cleanTitle.includes("dsa") || cleanId.includes("dsa") || cleanTitle.includes("data structures") || cleanId.includes("data-structures") || cleanTitle.includes("algorithms") || cleanId.includes("algorithms")) return "https://www.youtube.com/watch?v=RBSGKlAboiM";
    if (cleanTitle.includes("networks") || cleanId.includes("networks") || cleanTitle.includes("networking")) return "https://www.youtube.com/watch?v=IPvYjXCsTg8";
    if (cleanTitle.includes("operating systems") || cleanTitle.includes("operating system") || cleanId.includes("os") || cleanTitle.includes(" os ")) return "https://www.youtube.com/watch?v=2obqyGJGC1o";
    if (cleanTitle.includes("architecture") || cleanId.includes("architecture")) return "https://www.youtube.com/watch?v=0Ure4G8S_L8";
    if (cleanTitle.includes("software engineering") || cleanTitle.includes("software development") || cleanId.includes("software")) return "https://www.youtube.com/watch?v=v9ejT8FO-7I";
    if (cleanTitle.includes("iot") || cleanId.includes("iot") || cleanTitle.includes("internet of things")) return "https://www.youtube.com/watch?v=h0gWfVCSGQQ";

    if (cleanTitle.includes("vlsi") || cleanId.includes("vlsi")) return "https://www.youtube.com/watch?v=GrY53Z00Q_g";
    if (cleanTitle.includes("embedded") || cleanId.includes("embedded")) return "https://www.youtube.com/watch?v=48S43DphV2E";
    if (cleanTitle.includes("control") || cleanId.includes("control")) return "https://www.youtube.com/watch?v=oBc_BHxw78s";
    if (cleanTitle.includes("signal") || cleanId.includes("signal") || cleanTitle.includes("dsp")) return "https://www.youtube.com/watch?v=PkZNo7MFNFg";
    if (cleanTitle.includes("antenna") || cleanId.includes("antenna")) return "https://www.youtube.com/watch?v=5V2E7zMh4Lg";

    if (cleanTitle.includes("power system") || cleanTitle.includes("power systems") || cleanId.includes("power")) return "https://www.youtube.com/watch?v=Q40o8_E7w8Q";
    if (cleanTitle.includes("power electronics") || cleanId.includes("powerelectronics")) return "https://www.youtube.com/watch?v=1AuYirvyAtg";
    if (cleanTitle.includes("electrical") || cleanId.includes("electrical")) return "https://www.youtube.com/watch?v=1dF_4G95L3c";
    
    if (cleanTitle.includes("thermodynamics") || cleanId.includes("thermodynamics")) return "https://www.youtube.com/watch?v=aG478W6tMok";
    if (cleanTitle.includes("strength of materials") || cleanId.includes("strength")) return "https://www.youtube.com/watch?v=A11H4L1lJg0";
    if (cleanTitle.includes("fluid mechanics") || cleanId.includes("fluid")) return "https://www.youtube.com/watch?v=FaQPL1S2Bf0";
    if (cleanTitle.includes("mechanical") || cleanId.includes("mechanical")) return "https://www.youtube.com/watch?v=aG478W6tMok";
    if (cleanTitle.includes("cad") || cleanId.includes("cad") || cleanTitle.includes("solidworks") || cleanTitle.includes("ansys")) return "https://www.youtube.com/watch?v=w062eJv98s4";
    if (cleanTitle.includes("thermal") || cleanId.includes("thermal")) return "https://www.youtube.com/watch?v=5d9tH8yY3b0";
    if (cleanTitle.includes("manufacturing") || cleanId.includes("manufacturing") || cleanTitle.includes("machining")) return "https://www.youtube.com/watch?v=1e0hWd9g_zY";

    if (cleanTitle.includes("structural") || cleanId.includes("structural")) return "https://www.youtube.com/watch?v=F7sV3lRjVes";
    if (cleanTitle.includes("concrete") || cleanId.includes("concrete")) return "https://www.youtube.com/watch?v=vV06_5jM9Xo";
    if (cleanTitle.includes("geotechnical") || cleanId.includes("geotechnical") || cleanTitle.includes("soil")) return "https://www.youtube.com/watch?v=aV2d3E4H5I0";
    if (cleanTitle.includes("transportation") || cleanId.includes("transportation") || cleanTitle.includes("pavement") || cleanTitle.includes("traffic")) return "https://www.youtube.com/watch?v=wXhXbN9y4X4";
    if (cleanTitle.includes("civil") || cleanId.includes("civil")) return "https://www.youtube.com/watch?v=aV2d3E4H5I0";

    if (cleanTitle.includes("research") || cleanId.includes("research") || cleanTitle.includes("thesis") || cleanTitle.includes("dissertation")) {
      return "https://www.youtube.com/watch?v=Tt08KmFfIYQ";
    }
    if (cleanTitle.includes("interview") || cleanId.includes("interview") || cleanTitle.includes("portfolio")) {
      return "https://www.youtube.com/watch?v=Tt08KmFfIYQ";
    }

    return "https://www.youtube.com/watch?v=rfscVS0vtbw";
  }

  return currentUrl;
}

function RoadmapView({
  track,
  steps,
  floatingSet,
  notes,
}: {
  track: string;
  steps: RoadmapStep[];
  floatingSet: "web" | "ai" | "data" | "app";
  notes?: { title: string; points: string[] }[];
}) {
  const storageKey = `learnpath:${track}:completed`;
  const [completed, setCompleted] = useState<string[]>([]);
  const [openId, setOpenId] = useState<string | null>(null);
  const [personalizing, setPersonalizing] = useState(false);

  const isMtech = track.startsWith("mtech-");
  const isHardware = ["mechanical", "electrical", "ece", "civil"].includes(track);
  const backTo = isMtech
    ? ("/mtech-specialization" as const)
    : isHardware
      ? ("/hardware-specialization" as const)
      : ("/software-specialization" as const);
  const backLabel = isMtech
    ? "Back to M.Tech Specialization"
    : isHardware
      ? "Back to Hardware Specialization"
      : "Back to Software Specialization";

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(storageKey);
      if (raw) setCompleted(JSON.parse(raw) as string[]);
    } catch {
      /* ignore */
    }
  }, [storageKey]);

  const persist = (next: string[]) => {
    setCompleted(next);
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(next));
    } catch {
      /* ignore */
    }
  };

  const toggle = (id: string) =>
    persist(completed.includes(id) ? completed.filter((s) => s !== id) : [...completed, id]);

  const resolvedSteps = useMemo(() => {
    return steps.map((step) => ({
      ...step,
      resources: step.resources?.map((r) => ({
        ...r,
        url: resolveResourceUrl(step.title, step.id, r.label, r.url),
      })) ?? [],
      videos: step.videos?.map((v) => ({
        ...v,
        url: resolveResourceUrl(step.title, step.id, v.label, v.url),
      })) ?? [],
      practice: step.practice?.map((p) => ({
        ...p,
        url: resolveResourceUrl(step.title, step.id, p.label, p.url),
      })) ?? [],
      compiler: step.compiler ? {
        ...step.compiler,
        url: resolveResourceUrl(step.title, step.id, step.compiler.label, step.compiler.url),
      } : step.compiler,
    }));
  }, [steps]);

  const percent = Math.round((completed.length / resolvedSteps.length) * 100);
  const openStep = resolvedSteps.find((s) => s.id === openId) ?? null;

  return (
    <main className="relative min-h-screen overflow-hidden font-sans text-foreground">
      <NeuralBackground />
      <FloatingIcons set={floatingSet} />

      <div className="mx-auto w-full max-w-5xl px-6 py-16">
        <header className="animate-rise-in text-center">
          {(() => {
            const isAi = track === "ai-ml";
            const isData = track === "data-science";
            const isCyber = track === "cyber-security";
            const isApp = track === "app-development";
            const isSe = track === "software-engineering";
            const isMech = track === "mechanical";
            const isElec = track === "electrical";
            const isEce = track === "ece";
            const isCivil = track === "civil";
            const isMtech = track.startsWith("mtech-");
            const mtechName = mtechTrackNames[track] || "";
            
            const stepNum = isMtech ? 3 : (isMech || isElec || isEce || isCivil ? 4 : isAi ? 5 : isData ? 6 : isCyber ? 7 : isApp ? 8 : isSe ? 9 : 4);
            
            const badge = isMtech
              ? `${mtechName} Roadmap`
              : (isMech
                ? "Mechanical Engineering Roadmap"
                : isElec
                  ? "Electrical Engineering Roadmap"
                  : isEce
                    ? "Electronics & Comm. (ECE) Roadmap"
                    : isCivil
                      ? "Civil Engineering Roadmap"
                      : isSe
                        ? "Software Engineering Roadmap"
                        : isCyber
                          ? "Cyber Security Roadmap"
                          : isAi
                            ? "AI & ML Roadmap"
                            : isData
                              ? "Data Science Roadmap"
                              : isApp
                                ? "App Development Roadmap"
                                : "Web Development Roadmap");
            const heading = isMtech
              ? `${mtechName} Roadmap`
              : (isMech
                ? "Mechanical Engineering Roadmap"
                : isElec
                  ? "Electrical Engineering Roadmap"
                  : isEce
                    ? "Electronics & Communication Engineering Roadmap"
                    : isCivil
                      ? "Civil Engineering Roadmap"
                      : isSe
                        ? "Software Engineering Roadmap"
                        : isCyber
                          ? "Cyber Security Roadmap"
                          : isAi
                            ? "AI & Machine Learning Roadmap"
                            : isData
                              ? "Data Science Roadmap"
                              : isApp
                                ? "App Development Roadmap"
                                : "Web Development Roadmap");
            return (
              <>
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium tracking-widest text-primary-glow uppercase">
                  <Map className="size-3.5" />
                  Step {stepNum} — {badge}
                </span>
                <h1 className="mt-7 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
                  <span className="text-gradient-brand">{heading}</span>
                </h1>
              </>
            );
          })()}
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Follow the path step by step. Tap any node to open topics, free resources, practice and projects.
          </p>

          <button
            type="button"
            onClick={() => setPersonalizing((v) => !v)}
            className="mt-7 inline-flex items-center gap-2 rounded-xl px-5 py-3 font-display text-sm font-semibold tracking-wide text-primary-foreground transition-transform duration-200 hover:scale-[1.03]"
            style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-glow)" }}
          >
            <Sparkles className="size-4" />
            Personalize My Roadmap 🤖
          </button>

          {personalizing ? (
            <div className="glass-card animate-rise-in mx-auto mt-5 max-w-lg rounded-2xl p-5 text-left text-sm text-foreground/80">
              <p className="font-display font-semibold text-cyan">AI personalization</p>
              <p className="mt-2 leading-relaxed">
                Based on your progress ({completed.length}/{resolvedSteps.length} steps done), LearnPath AI will re-order and
                re-weight this roadmap using your skills, performance and career goals. Connect the AI service to
                generate a fully adaptive path.
              </p>
            </div>
          ) : null}
        </header>

        {/* progress bar */}
        <section className="glass-card animate-rise-in mt-12 rounded-2xl p-6">
          <div className="flex items-center justify-between text-sm">
            <span className="font-display font-semibold">Roadmap Completion</span>
            <span className="text-cyan">
              {completed.length}/{resolvedSteps.length} · {percent}%
            </span>
          </div>
          <div
            className="mt-4 h-3 w-full overflow-hidden rounded-full border border-primary/20 bg-primary/10"
            role="progressbar"
            aria-valuenow={percent}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Roadmap completion"
          >
            <div
              className="h-full rounded-full transition-[width] duration-700 ease-out"
              style={{ width: `${percent}%`, background: "var(--gradient-brand)", boxShadow: "var(--shadow-glow)" }}
            />
          </div>
        </section>

        {/* roadmap steps */}
        <ol className="relative mt-14 space-y-6">
          <span
            aria-hidden
            className="pointer-events-none absolute left-6 top-4 bottom-4 w-px sm:left-1/2"
            style={{ background: "var(--gradient-brand)", opacity: 0.35 }}
          />
          {resolvedSteps.map((step, index) => {
            const done = completed.includes(step.id);
            return (
              <li
                key={step.id}
                className="animate-rise-in relative pl-16 sm:pl-0"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <span
                  aria-hidden
                  className="absolute left-6 top-8 z-10 -translate-x-1/2 rounded-full p-1 sm:left-1/2"
                  style={{ background: "var(--timeline-node-bg)" }}
                >
                  <span
                    className="block size-3 rounded-full"
                    style={{
                      background: done ? "var(--gradient-brand)" : "var(--timeline-dot-inactive)",
                      boxShadow: done ? "var(--shadow-glow)" : "none",
                    }}
                  />
                </span>

                <div className={`sm:w-[calc(50%-2.5rem)] ${index % 2 === 0 ? "" : "sm:ml-auto"}`}>
                  <button
                    type="button"
                    onClick={() => setOpenId(step.id)}
                    className="group relative block w-full overflow-hidden rounded-[calc(var(--radius)+0.5rem)] text-left"
                  >
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -inset-px rounded-[calc(var(--radius)+0.5rem)] opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100"
                      style={{ background: "var(--gradient-brand)", filter: "blur(3px)" }}
                    />
                    <div
                      className="glass-card relative rounded-[calc(var(--radius)+0.5rem)] p-6 transition-transform duration-300 group-hover:-translate-y-1"
                      style={{ background: "var(--card-surface)" }}
                    >
                      <div className="flex items-start gap-4">
                        <span className="text-3xl leading-none" aria-hidden>
                          {step.emoji}
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="text-xs tracking-widest text-muted-foreground uppercase">
                            Step {index + 1}
                          </p>
                          <h2 className="mt-1 font-display text-lg font-bold tracking-tight">
                            <span className="text-gradient-brand">{step.title}</span>
                          </h2>
                          <p className="mt-2 text-sm leading-relaxed text-foreground/75">{step.tagline}</p>
                        </div>
                        {done ? (
                          <CheckCircle2 className="size-5 shrink-0 text-cyan" />
                        ) : (
                          <Circle className="size-5 shrink-0 text-muted-foreground" />
                        )}
                      </div>
                    </div>
                  </button>
                </div>
              </li>
            );
          })}
        </ol>

        {notes && notes.length > 0 ? (
          <section className="mt-16">
            <h2 className="text-center font-display text-2xl font-bold tracking-tight">
              <span className="text-gradient-brand">Short Notes & Study Plan</span>
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {notes.map((note) => (
                <div key={note.title} className="glass-card animate-rise-in rounded-2xl p-6">
                  <p className="font-display text-sm font-semibold text-cyan">{note.title}</p>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-foreground/75">
                    {note.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span aria-hidden className="text-cyan">
                          •
                        </span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        ) : null}


        <p className="mt-14 text-center text-xs text-muted-foreground">
          <Link to={backTo} className="font-medium text-cyan transition-opacity hover:opacity-80">
            {backLabel}
          </Link>
        </p>
      </div>

      {openStep ? (
        <StepDetail
          step={openStep}
          done={completed.includes(openStep.id)}
          onToggle={() => toggle(openStep.id)}
          onClose={() => setOpenId(null)}
        />
      ) : null}
    </main>
  );
}

function StepDetail({
  step,
  done,
  onToggle,
  onClose,
}: {
  step: RoadmapStep;
  done: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-6">
      <button
        type="button"
        aria-label="Close details"
        onClick={onClose}
        className="absolute inset-0 bg-background/70 backdrop-blur-sm"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`${step.title} details`}
        className="glass-card animate-rise-in relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl p-7 sm:rounded-3xl"
        style={{ background: "var(--card-surface-96)" }}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl leading-none" aria-hidden>
              {step.emoji}
            </span>
            <div>
              <h3 className="font-display text-2xl font-bold tracking-tight">
                <span className="text-gradient-brand">{step.title}</span>
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{step.tagline}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded-xl border border-primary/30 p-2 text-foreground/70 transition-colors hover:bg-primary/15"
          >
            <X className="size-4" />
          </button>
        </div>

        <Section icon={ListChecks} title="Topics to learn">
          <ul className="flex flex-wrap gap-2">
            {step.topics.map((t) => (
              <li
                key={t}
                className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 text-xs text-foreground/85"
              >
                {t}
              </li>
            ))}
          </ul>
        </Section>

        <Section icon={BookOpen} title="Free learning resources">
          <LinkList items={step.resources} />
        </Section>

        <Section icon={Video} title="Video resources">
          <LinkList items={step.videos} />
        </Section>

        <Section icon={Dumbbell} title="Practice exercises">
          <LinkList items={step.practice} />
        </Section>

        <Section icon={Terminal} title="Online compiler">
          <LinkList items={[step.compiler]} />
        </Section>

        <Section icon={Lightbulb} title="Project ideas">
          <ul className="space-y-2 text-sm text-foreground/80">
            {step.projects.map((p) => (
              <li key={p} className="flex gap-2">
                <span className="text-cyan">•</span>
                {p}
              </li>
            ))}
          </ul>
        </Section>

        <button
          type="button"
          onClick={onToggle}
          className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 font-display text-sm font-semibold tracking-wide transition-transform duration-200 hover:scale-[1.01] ${
            done ? "border border-primary/40 text-foreground" : "text-primary-foreground"
          }`}
          style={
            done ? undefined : { background: "var(--gradient-brand)", boxShadow: "var(--shadow-glow)" }
          }
        >
          <CheckCircle2 className="size-4" />
          {done ? "Completed — mark as pending" : "Mark as Completed"}
        </button>
      </div>
    </div>
  );
}

function Section({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof BookOpen;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-7">
      <h4 className="flex items-center gap-2 font-display text-sm font-semibold tracking-wide text-cyan">
        <Icon className="size-4" />
        {title}
      </h4>
      <div className="mt-3">{children}</div>
    </section>
  );
}

function LinkList({ items }: { items: { label: string; url: string }[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item.url}>
          <a
            href={item.url}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-xl border border-primary/25 bg-primary/5 px-3.5 py-2 text-sm text-foreground/85 transition-colors hover:bg-primary/15"
          >
            <ExternalLink className="size-3.5 text-cyan" />
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

function FloatingIcons({ set }: { set: "web" | "ai" | "data" | "app" }) {
  const items =
    set === "ai"
      ? [
          { emoji: "🧠", className: "left-[6%] top-[18%]", delay: "0s" },
          { emoji: "🤖", className: "right-[8%] top-[12%]", delay: "1.2s" },
          { emoji: "📊", className: "left-[10%] bottom-[16%]", delay: "2.1s" },
          { emoji: "⚙️", className: "right-[10%] bottom-[22%]", delay: "0.7s" },
          { emoji: "✨", className: "left-[46%] top-[6%]", delay: "1.8s" },
          { emoji: "🔮", className: "left-[8%] top-[48%]", delay: "0.5s" },
          { emoji: "📈", className: "right-[6%] top-[52%]", delay: "1.5s" },
          { emoji: "🐍", className: "left-[44%] bottom-[8%]", delay: "2.4s" },
        ]
      : set === "data"
        ? [
            { emoji: "📊", className: "left-[6%] top-[18%]", delay: "0s" },
            { emoji: "📈", className: "right-[8%] top-[12%]", delay: "1.2s" },
            { emoji: "🧹", className: "left-[10%] bottom-[16%]", delay: "2.1s" },
            { emoji: "🗄️", className: "right-[10%] bottom-[22%]", delay: "0.7s" },
            { emoji: "✨", className: "left-[46%] top-[6%]", delay: "1.8s" },
            { emoji: "🧮", className: "left-[8%] top-[48%]", delay: "0.5s" },
            { emoji: "🐼", className: "right-[6%] top-[52%]", delay: "1.5s" },
            { emoji: "🔍", className: "left-[44%] bottom-[8%]", delay: "2.4s" },
          ]
      : set === "app"
        ? [
            { emoji: "📱", className: "left-[6%] top-[18%]", delay: "0s" },
            { emoji: "🤖", className: "right-[8%] top-[12%]", delay: "1.2s" },
            { emoji: "☕", className: "left-[10%] bottom-[16%]", delay: "2.1s" },
            { emoji: "🎨", className: "right-[10%] bottom-[22%]", delay: "0.7s" },
            { emoji: "🚀", className: "left-[46%] top-[6%]", delay: "1.8s" },
            { emoji: "🧪", className: "left-[8%] top-[48%]", delay: "0.5s" },
            { emoji: "🌐", className: "right-[6%] top-[52%]", delay: "1.5s" },
            { emoji: "📲", className: "left-[44%] bottom-[8%]", delay: "2.4s" },
          ]
        : [
            { emoji: "🧠", className: "left-[6%] top-[18%]", delay: "0s" },
            { emoji: "🎓", className: "right-[8%] top-[12%]", delay: "1.2s" },
            { emoji: "📚", className: "left-[10%] bottom-[16%]", delay: "2.1s" },
            { emoji: "💻", className: "right-[10%] bottom-[22%]", delay: "0.7s" },
            { emoji: "⌨️", className: "left-[46%] top-[6%]", delay: "1.8s" },
          ];
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 hidden lg:block">
      {items.map((i) => (
        <span
          key={i.emoji}
          className={`absolute animate-float-slow text-5xl opacity-20 blur-[1px] ${i.className}`}
          style={{ animationDelay: i.delay }}
        >
          {i.emoji}
        </span>
      ))}
    </div>
  );
}
