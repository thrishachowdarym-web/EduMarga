import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { User, Mail, GraduationCap, Award, BookOpen, Calendar, CheckCircle2, ArrowRight } from "lucide-react";
import { NeuralBackground } from "@/components/NeuralBackground";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "My Profile | LearnPath AI" },
      {
        name: "description",
        content: "View your student profile, enrolled programs, learning streaks, and certifications on LearnPath AI.",
      },
    ],
  }),
  component: ProfilePage,
});

type StoredUser = {
  name?: string;
  email?: string;
  role?: string;
};

function ProfilePage() {
  const [userProfile, setUserProfile] = useState<StoredUser>({
    name: "Learner",
    email: "student@gmail.com",
    role: "student",
  });

  useEffect(() => {
    try {
      const stored = localStorage.getItem("learnpath:user");
      if (stored) {
        const parsed = JSON.parse(stored);
        setUserProfile(parsed);
      }
    } catch (e) {
      console.error("Failed to load user profile:", e);
    }
  }, []);

  const isFaculty = userProfile.role === "faculty";
  const displayName = userProfile.name || (isFaculty ? "Faculty Member" : "Student");
  const displayEmail = userProfile.email || "student@gmail.com";
  const displayProgram = isFaculty
    ? "Department of Computer Science & Engineering"
    : "B.Tech Computer Science & Artificial Intelligence";
  const displayYear = isFaculty ? "Faculty Advisor / Professor" : "3rd Year (Semester 5)";

  const skills = [
    "Python",
    "React & TypeScript",
    "Machine Learning",
    "Data Structures & Algorithms",
    "Database Management",
    "Deep Learning",
  ];

  return (
    <main className="relative min-h-screen overflow-hidden font-sans text-foreground">
      <NeuralBackground />

      <div className="mx-auto flex min-h-screen w-full max-w-4xl flex-col items-center justify-center px-6 py-20">
        <div
          className="glass-card animate-rise-in relative w-full rounded-[calc(var(--radius)+1rem)] p-8 sm:p-10 shadow-2xl"
          style={{ background: "var(--card-surface-94)" }}
        >
          {/* Header Banner & Avatar */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b border-primary/10 pb-8">
            <div
              className="flex size-24 shrink-0 items-center justify-center rounded-3xl border-2 border-primary/40 bg-primary/15 text-cyan shadow-lg"
              style={{ boxShadow: "var(--icon-glow)" }}
            >
              <User className="size-12" />
            </div>

            <div className="flex-1 text-center sm:text-left">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
                <h1 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  {displayName}
                </h1>
                <span className="rounded-full border border-cyan/30 bg-cyan/10 px-3 py-0.5 text-xs font-semibold text-cyan">
                  {isFaculty ? "Faculty Member" : "Active Student"}
                </span>
              </div>

              <p className="mt-1 text-sm text-muted-foreground flex items-center justify-center sm:justify-start gap-1.5">
                <Mail className="size-3.5" />
                {displayEmail}
              </p>

              <div className="mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-foreground/80">
                <span className="flex items-center gap-1.5 rounded-lg bg-secondary/30 px-2.5 py-1 border border-primary/10">
                  <GraduationCap className="size-3.5 text-cyan" />
                  {displayProgram}
                </span>
                <span className="flex items-center gap-1.5 rounded-lg bg-secondary/30 px-2.5 py-1 border border-primary/10">
                  <Calendar className="size-3.5 text-primary-glow" />
                  {displayYear}
                </span>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-3 py-6 border-b border-primary/10 text-center">
            <div className="rounded-xl bg-secondary/20 p-3 border border-primary/5">
              <span className="text-xl font-bold text-gradient-brand sm:text-2xl">28</span>
              <p className="text-[11px] text-muted-foreground mt-0.5">Steps Mastered</p>
            </div>
            <div className="rounded-xl bg-secondary/20 p-3 border border-primary/5">
              <span className="text-xl font-bold text-cyan sm:text-2xl">14 Days</span>
              <p className="text-[11px] text-muted-foreground mt-0.5">Learning Streak</p>
            </div>
            <div className="rounded-xl bg-secondary/20 p-3 border border-primary/5">
              <span className="text-xl font-bold text-primary-glow sm:text-2xl">6</span>
              <p className="text-[11px] text-muted-foreground mt-0.5">Badges Earned</p>
            </div>
          </div>

          {/* Skills / Interests */}
          <div className="mt-6">
            <h2 className="text-sm font-semibold text-foreground flex items-center gap-1.5">
              <Award className="size-4 text-cyan" />
              Verified Skills & Focus Areas
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-primary/20 bg-secondary/30 px-3 py-1.5 text-xs text-foreground/90 transition-colors hover:border-primary/50"
                >
                  <CheckCircle2 className="size-3 text-cyan" />
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-primary/10">
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 rounded-xl border border-primary/40 px-4 py-2 text-xs font-medium text-foreground transition-all hover:bg-primary/15"
            >
              <BookOpen className="size-3.5 text-cyan" />
              View Enrolled Courses
            </Link>

            <Link
              to="/select-program"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 font-display text-xs font-semibold tracking-wide text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5"
              style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-glow)" }}
            >
              <span>Continue Learning</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
