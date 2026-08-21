import { createFileRoute, Link } from "@tanstack/react-router";
import { NeuralBackground } from "@/components/NeuralBackground";

export const Route = createFileRoute("/forgot-password")({
  head: () => ({
    meta: [
      { title: "Forgot Password | LearnPath AI" },
      {
        name: "description",
        content: "Reset the password for your LearnPath AI learning account.",
      },
      { property: "og:title", content: "Forgot Password | LearnPath AI" },
      {
        property: "og:description",
        content: "Reset the password for your LearnPath AI learning account.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ForgotPasswordPlaceholder,
});

function ForgotPasswordPlaceholder() {
  return (
    <main className="relative flex min-h-screen items-center justify-center px-6 font-sans">
      <NeuralBackground />
      <div className="glass-card animate-rise-in max-w-md rounded-3xl p-10 text-center">
        <h1 className="font-display text-3xl font-semibold text-gradient-brand">Forgot Password</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Password recovery arrives with the authentication backend.
        </p>
        <Link
          to="/"
          className="mt-7 inline-flex rounded-xl border border-primary/40 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-primary/15"
        >
          Back to login
        </Link>
      </div>
    </main>
  );
}
