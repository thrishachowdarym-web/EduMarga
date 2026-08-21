import { useState, type FormEvent } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import {
  Eye,
  EyeOff,
  Loader2,
  Sparkles,
  GraduationCap,
  Users,
  LineChart,
  Award,
  CheckCircle2,
} from "lucide-react";

import { NeuralBackground } from "@/components/NeuralBackground";
import {
  facultyLogin,
  FacultyAuthError,
  validateFacultyEmail,
  validateFacultyPassword,
} from "@/lib/facultyAuth";

export const Route = createFileRoute("/faculty-login")({
  head: () => ({
    meta: [
      { title: "Faculty Login | EduMarga" },
      {
        name: "description",
        content:
          "Faculty Login portal for EduMarga. Empower teaching and student mentorship with AI-powered analytics.",
      },
      { property: "og:title", content: "Faculty Login | EduMarga" },
      {
        property: "og:description",
        content:
          "Faculty Login portal for EduMarga. Empower teaching and student mentorship with AI-powered analytics.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FacultyLoginPage,
});

const facultyHighlights = [
  { icon: Users, label: "Student cohort analytics & insights" },
  { icon: LineChart, label: "Curriculum roadmap alignment" },
  { icon: Award, label: "AI-assisted mentorship & guidance" },
];

function FacultyLoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const next: { email?: string; password?: string } = {};

    const emailErr = validateFacultyEmail(email);
    if (emailErr) {
      next.email = emailErr;
    }

    const passwordErr = validateFacultyPassword(password);
    if (passwordErr) {
      next.password = passwordErr;
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError(null);
    setSuccessMessage(null);

    if (!validate()) {
      return;
    }

    setLoading(true);
    try {
      const result = await facultyLogin({ email: email.trim(), password });
      setSuccessMessage(result.message || "Faculty login details are valid.");

      // Navigate to placeholder faculty dashboard after showing feedback
      setTimeout(() => {
        navigate({ to: "/faculty-dashboard" });
      }, 700);
    } catch (error) {
      setFormError(
        error instanceof FacultyAuthError
          ? error.message
          : "Something went wrong while signing in. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden font-sans text-foreground">
      <NeuralBackground />

      {/* Top navigation link to Student Login */}
      <div className="absolute top-5 right-5 z-20 sm:top-7 sm:right-8">
        <Link
          to="/"
          className="group inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card/60 px-4 py-2 text-xs font-semibold tracking-wide text-foreground backdrop-blur-md transition-all duration-200 hover:border-primary/60 hover:bg-primary/20 hover:text-cyan hover:shadow-lg hover:shadow-primary/20 cursor-pointer"
        >
          <span>Student Login</span>
        </Link>
      </div>

      <div className="mx-auto grid min-h-screen w-full max-w-7xl items-center gap-14 px-6 py-14 lg:grid-cols-[1.05fr_minmax(0,26rem)] lg:gap-20 lg:px-10">
        <section className="animate-rise-in">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium tracking-widest text-primary-glow uppercase">
            <GraduationCap className="size-3.5" />
            Faculty Portal
          </span>

          <h1 className="mt-7 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="text-gradient-brand">EduMarga</span>
          </h1>

          <p className="mt-6 max-w-xl font-display text-2xl font-medium leading-snug text-foreground/90 sm:text-3xl">
            Empower Faculty. Guide Future Innovators.
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Access real-time student performance insights, AI-driven curriculum benchmarks, and personalized mentoring tools.
          </p>

          <ul className="mt-10 grid gap-3 sm:grid-cols-3">
            {facultyHighlights.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="glass-card flex items-start gap-3 rounded-2xl p-4 transition-transform duration-300 hover:-translate-y-1"
              >
                <Icon className="mt-0.5 size-5 shrink-0 text-cyan" />
                <span className="text-sm leading-snug text-foreground/85">{label}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="animate-rise-in [animation-delay:150ms]">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-px rounded-[calc(var(--radius)+1rem)] opacity-60"
              style={{ background: "var(--gradient-brand)", filter: "blur(2px)" }}
            />
            <div
              aria-hidden
              className="absolute -inset-16 -z-10 rounded-full opacity-25 blur-3xl"
              style={{ background: "var(--gradient-brand)" }}
            />
            <div
              className="glass-card relative rounded-[calc(var(--radius)+1rem)] p-7 sm:p-9"
              style={{ background: "var(--card-surface)" }}
            >
              <div className="flex items-center justify-between">
                <h2 className="font-display text-3xl font-semibold tracking-tight">
                  Faculty Login
                </h2>
                <span className="rounded-lg border border-primary/30 bg-primary/10 px-2.5 py-1 text-[11px] font-medium tracking-wide text-cyan uppercase">
                  Educator
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Sign in with your Gmail address to access faculty tools.
              </p>

              <form onSubmit={onSubmit} noValidate className="mt-8 space-y-5">
                <div className="space-y-2">
                  <label htmlFor="faculty-email" className="text-sm font-medium text-foreground/90">
                    Email Address
                  </label>
                  <input
                    id="faculty-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    placeholder="Enter your Gmail address"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) {
                        setErrors((prev) => ({ ...prev, email: undefined }));
                      }
                    }}
                    aria-invalid={Boolean(errors.email)}
                    className="w-full rounded-xl border border-input bg-secondary/40 px-4 py-3 text-sm outline-none transition-all duration-200 placeholder:text-muted-foreground/70 focus:border-primary/60 focus:bg-secondary/60 focus:ring-4 focus:ring-primary/20"
                  />
                  {errors.email ? (
                    <p className="text-xs text-destructive">{errors.email}</p>
                  ) : null}
                </div>

                <div className="space-y-2">
                  <label htmlFor="faculty-password" className="text-sm font-medium text-foreground/90">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="faculty-password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        if (errors.password) {
                          setErrors((prev) => ({ ...prev, password: undefined }));
                        }
                      }}
                      aria-invalid={Boolean(errors.password)}
                      className="w-full rounded-xl border border-input bg-secondary/40 px-4 py-3 pr-12 text-sm outline-none transition-all duration-200 placeholder:text-muted-foreground/70 focus:border-primary/60 focus:bg-secondary/60 focus:ring-4 focus:ring-primary/20"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                      className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg p-2 text-muted-foreground transition-colors hover:text-cyan"
                    >
                      {showPassword ? <EyeOff className="size-4.5" /> : <Eye className="size-4.5" />}
                    </button>
                  </div>
                  {errors.password ? (
                    <p className="text-xs text-destructive">{errors.password}</p>
                  ) : null}
                </div>

                <div className="flex justify-end">
                  <Link
                    to="/forgot-password"
                    className="text-xs font-medium text-cyan transition-opacity hover:opacity-80"
                  >
                    Forgot Password?
                  </Link>
                </div>

                {formError ? (
                  <p
                    role="alert"
                    className="rounded-xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-xs text-destructive"
                  >
                    {formError}
                  </p>
                ) : null}

                {successMessage ? (
                  <p
                    role="status"
                    className="flex items-center gap-2 rounded-xl border border-cyan/40 bg-cyan/10 px-4 py-3 text-xs font-medium text-cyan"
                  >
                    <CheckCircle2 className="size-4 shrink-0" />
                    {successMessage}
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={loading}
                  className="group relative w-full overflow-hidden rounded-xl px-5 py-3.5 font-display text-sm font-semibold tracking-wide text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5 disabled:translate-y-0 disabled:opacity-70"
                  style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-glow)" }}
                >
                  <span className="flex items-center justify-center gap-2">
                    {loading ? <Loader2 className="size-4 animate-spin" /> : null}
                    {loading ? "Verifying..." : "Faculty Login"}
                  </span>
                </button>
              </form>

              <div className="mt-7 flex flex-col items-center gap-2 text-center text-sm text-muted-foreground">
                <p>
                  Are you a student?{" "}
                  <Link
                    to="/"
                    className="font-semibold text-gradient-brand transition-opacity hover:opacity-80"
                  >
                    Student Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
