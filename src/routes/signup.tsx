import { createFileRoute, Link } from "@tanstack/react-router";
import { NeuralBackground } from "@/components/NeuralBackground";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Sign Up | LearnPath AI" },
      {
        name: "description",
        content: "Create your LearnPath AI account and unlock AI-personalized learning paths.",
      },
      { property: "og:title", content: "Sign Up | LearnPath AI" },
      {
        property: "og:description",
        content: "Create your LearnPath AI account and unlock AI-personalized learning paths.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SignUpPlaceholder,
});

function SignUpPlaceholder() {
  return (
    <main className="relative flex min-h-screen items-center justify-center px-6 font-sans">
      <NeuralBackground />
      <div className="glass-card animate-rise-in max-w-md rounded-3xl p-10 text-center">
        <h1 className="font-display text-3xl font-semibold text-gradient-brand">Sign Up</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          The registration experience is coming next.
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
