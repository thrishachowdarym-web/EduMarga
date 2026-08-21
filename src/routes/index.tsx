import { useState, type FormEvent } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Eye, EyeOff, Loader2, Sparkles, BrainCircuit, Target, TrendingUp, GraduationCap } from "lucide-react";

import { NeuralBackground } from "@/components/NeuralBackground";
import { AuthError, emailPattern, login } from "@/lib/auth";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Student Login | EduMarga" },
      {
        name: "description",
        content:
          "Log in to EduMarga for personalized, AI-powered learning paths built for B.Tech and M.Tech students.",
      },
      { property: "og:title", content: "Login | EduMarga" },
      {
        property: "og:description",
        content:
          "Log in to EduMarga for personalized, AI-powered learning paths built for B.Tech and M.Tech students.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LoginPage,
});

const highlights = [
  { icon: BrainCircuit, label: "Skill-aware AI recommendations" },
  { icon: Target, label: "Career-goal driven roadmaps" },
  { icon: TrendingUp, label: "Performance-based adaptation" },
];

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const next: { email?: string; password?: string } = {};
    if (!email.trim()) next.email = "Email address is required.";
    else if (!emailPattern.test(email.trim()))
      next.email = "Enter a valid email address, e.g. student@gmail.com";
    if (!password) next.password = "Password cannot be empty.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError(null);
    if (!validate()) return;

    setLoading(true);
    try {
      await login({ email: email.trim(), password });
      navigate({ to: "/select-program" });
    } catch (error) {
      setFormError(
        error instanceof AuthError
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

      {/* Top-right Faculty Login button on standalone login page */}
      <div className="absolute top-5 right-5 z-20 sm:top-7 sm:right-8">
        <Link
          to="/faculty-login"
          className="group inline-flex items-center gap-2 rounded-full border border-primary/40 bg-card/60 px-4 py-2 text-xs font-semibold tracking-wide text-foreground backdrop-blur-md transition-all duration-200 hover:border-primary hover:bg-primary/20 hover:text-cyan hover:shadow-lg hover:shadow-primary/20 cursor-pointer"
        >
          <GraduationCap className="size-4 text-cyan transition-transform group-hover:scale-110" />
          <span>Faculty</span>
        </Link>
      </div>

      <div className="mx-auto grid min-h-screen w-full max-w-7xl items-center gap-14 px-6 py-14 lg:grid-cols-[1.05fr_minmax(0,26rem)] lg:gap-20 lg:px-10">
        <section className="animate-rise-in">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium tracking-widest text-primary-glow uppercase">
            <Sparkles className="size-3.5" />
            AI learning engine
          </span>

          <h1 className="mt-7 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="text-gradient-brand">EduMarga</span>
          </h1>

          <p className="mt-6 max-w-xl font-display text-2xl font-medium leading-snug text-foreground/90 sm:text-3xl">
            Your Personalized Learning Journey Starts Here.
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            AI-powered learning recommendations based on your skills, knowledge, interests,
            performance, and career goals.
          </p>

          <ul className="mt-10 grid gap-3 sm:grid-cols-3">
            {highlights.map(({ icon: Icon, label }) => (
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
              <h2 className="font-display text-3xl font-semibold tracking-tight">Join Now</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Start your personalized learning journey with AI.
              </p>

              <form onSubmit={onSubmit} noValidate className="mt-8 space-y-5">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground/90">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    placeholder="Enter your Gmail address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-invalid={Boolean(errors.email)}
                    className="w-full rounded-xl border border-input bg-secondary/40 px-4 py-3 text-sm outline-none transition-all duration-200 placeholder:text-muted-foreground/70 focus:border-primary/60 focus:bg-secondary/60 focus:ring-4 focus:ring-primary/20"
                  />
                  {errors.email ? (
                    <p className="text-xs text-destructive">{errors.email}</p>
                  ) : null}
                </div>

                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium text-foreground/90">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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

                <button
                  type="submit"
                  disabled={loading}
                  className="group relative w-full overflow-hidden rounded-xl px-5 py-3.5 font-display text-sm font-semibold tracking-wide text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5 disabled:translate-y-0 disabled:opacity-70"
                  style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-glow)" }}
                >
                  <span className="flex items-center justify-center gap-2">
                    {loading ? <Loader2 className="size-4 animate-spin" /> : null}
                    {loading ? "Logging in..." : "Login"}
                  </span>
                </button>
              </form>

              <p className="mt-7 text-center text-sm text-muted-foreground">
                New to EduMarga?{" "}
                <Link
                  to="/signup"
                  className="font-semibold text-gradient-brand transition-opacity hover:opacity-80"
                >
                  Join Now
                </Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
