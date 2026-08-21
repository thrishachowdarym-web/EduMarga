import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Sparkles, ArrowRight, CheckCircle2, TrendingUp, Code2, BrainCircuit, Globe } from "lucide-react";
import { NeuralBackground } from "@/components/NeuralBackground";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "My Courses | LearnPath AI" },
      {
        name: "description",
        content: "Track your active roadmaps, course progress, and specialized study tracks on LearnPath AI.",
      },
    ],
  }),
  component: CoursesPage,
});

const enrolledCourses = [
  {
    id: "web-development",
    title: "Full-Stack Web Development",
    icon: Globe,
    category: "B.Tech Specialization",
    progress: 75,
    totalSteps: 12,
    completedSteps: 9,
    to: "/roadmap/web-development" as const,
  },
  {
    id: "ai-ml",
    title: "Artificial Intelligence & Machine Learning",
    icon: BrainCircuit,
    category: "B.Tech Specialization",
    progress: 45,
    totalSteps: 14,
    completedSteps: 6,
    to: "/roadmap/ai-ml" as const,
  },
  {
    id: "data-science",
    title: "Data Science & Big Data Engineering",
    icon: TrendingUp,
    category: "Specialized Track",
    progress: 30,
    totalSteps: 10,
    completedSteps: 3,
    to: "/roadmap/data-science" as const,
  },
  {
    id: "mtech-aiml",
    title: "M.Tech Advanced AI & Deep Learning",
    icon: Code2,
    category: "M.Tech Curriculum",
    progress: 15,
    totalSteps: 16,
    completedSteps: 2,
    to: "/roadmap/mtech-aiml" as const,
  },
];

function CoursesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden font-sans text-foreground">
      <NeuralBackground />

      <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-6 py-20">
        <header className="animate-rise-in text-center sm:text-left mb-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium tracking-widest text-primary-glow uppercase">
            <Sparkles className="size-3.5" />
            Learning Dashboard
          </span>

          <h1 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="text-gradient-brand">My Active Courses & Roadmaps</span>
          </h1>

          <p className="mt-2 text-sm text-muted-foreground">
            Continue learning your personalized roadmap or explore new technical paths.
          </p>
        </header>

        <div className="grid gap-5 sm:grid-cols-2">
          {enrolledCourses.map((course, index) => {
            const Icon = course.icon;
            return (
              <div
                key={course.id}
                className="glass-card animate-rise-in group relative flex flex-col justify-between rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
                style={{ animationDelay: `${index * 100}ms`, background: "var(--card-surface-94)" }}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex size-11 items-center justify-center rounded-xl border border-primary/30 bg-primary/15 text-cyan">
                      <Icon className="size-5" />
                    </span>
                    <span className="text-[11px] font-medium tracking-wide text-muted-foreground uppercase">
                      {course.category}
                    </span>
                  </div>

                  <h2 className="mt-4 font-display text-lg font-bold tracking-tight text-foreground group-hover:text-cyan transition-colors">
                    {course.title}
                  </h2>

                  <div className="mt-4 space-y-1.5">
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Progress</span>
                      <span className="font-semibold text-cyan">{course.progress}%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-secondary/60">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${course.progress}%`,
                          background: "var(--gradient-brand)",
                        }}
                      />
                    </div>
                    <p className="text-[11px] text-muted-foreground">
                      {course.completedSteps} of {course.totalSteps} steps completed
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-primary/10 flex justify-end">
                  <Link
                    to={course.to}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan transition-transform group-hover:translate-x-1"
                  >
                    <span>Continue Roadmap</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/select-program"
            className="inline-flex items-center gap-2 rounded-xl border border-primary/40 px-5 py-2.5 text-xs font-medium text-foreground transition-all hover:bg-primary/20"
          >
            <BookOpen className="size-4 text-cyan" />
            Explore Additional Degree Roadmaps
          </Link>
        </div>
      </div>
    </main>
  );
}
