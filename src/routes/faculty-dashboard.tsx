import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, GraduationCap, ArrowLeft, BookOpen, Users, Sparkles } from "lucide-react";
import { NeuralBackground } from "@/components/NeuralBackground";

export const Route = createFileRoute("/faculty-dashboard")({
  head: () => ({
    meta: [
      { title: "Faculty Dashboard | LearnPath AI" },
      {
        name: "description",
        content: "Faculty Dashboard placeholder for LearnPath AI.",
      },
      { property: "og:title", content: "Faculty Dashboard | LearnPath AI" },
      {
        property: "og:description",
        content: "Faculty Dashboard placeholder for LearnPath AI.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FacultyDashboardPage,
});

function FacultyDashboardPage() {
  return (
    <main className="relative min-h-screen overflow-hidden font-sans text-foreground">
      <NeuralBackground />

      <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center justify-center px-6 py-16">
        <div className="glass-card animate-rise-in relative w-full max-w-2xl rounded-[calc(var(--radius)+1rem)] p-8 sm:p-12 text-center"
          style={{ background: "var(--card-surface)" }}
        >
          <div className="mx-auto flex size-16 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-cyan"
            style={{ boxShadow: "var(--icon-glow)" }}
          >
            <GraduationCap className="size-8" />
          </div>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-cyan/40 bg-cyan/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-cyan">
            <CheckCircle2 className="size-3.5" />
            Faculty login successful.
          </div>

          <h1 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="text-gradient-brand">Faculty Dashboard</span>
          </h1>

          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
            Welcome to the faculty portal. Full educator capabilities, student cohort analytics, and AI curriculum controls will be available when connected to the backend API.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 text-left">
            <div className="glass-card rounded-xl p-4 border border-white/10 bg-white/5">
              <div className="flex items-center gap-2 text-cyan font-semibold text-sm">
                <Users className="size-4" />
                <span>Cohort Overview</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                Track student learning progress and milestones across specialized branches.
              </p>
            </div>
            <div className="glass-card rounded-xl p-4 border border-white/10 bg-white/5">
              <div className="flex items-center gap-2 text-primary-glow font-semibold text-sm">
                <BookOpen className="size-4" />
                <span>Curriculum Roadmaps</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                Review and align AI-generated topic recommendations with university syllabus.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/faculty-login"
              className="inline-flex items-center gap-2 rounded-xl border border-primary/40 px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-primary/15"
            >
              <ArrowLeft className="size-4" />
              Back to Faculty Login
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 font-display text-sm font-semibold tracking-wide text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5"
              style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-glow)" }}
            >
              <Sparkles className="size-4" />
              Student Portal
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
