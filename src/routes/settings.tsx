import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Settings, Sun, Moon, Volume2, Bell, Check, Sparkles, Shield, User } from "lucide-react";
import { NeuralBackground } from "@/components/NeuralBackground";
import { useTheme, type ThemeMode } from "@/lib/theme";

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "Settings | LearnPath AI" },
      {
        name: "description",
        content: "Configure theme preferences, voice narration, notifications, and account preferences on LearnPath AI.",
      },
    ],
  }),
  component: SettingsPage,
});

function SettingsPage() {
  const { theme, setThemeMode } = useTheme();
  const [saved, setSaved] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [dailyReminders, setDailyReminders] = useState(true);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <main className="relative min-h-screen overflow-hidden font-sans text-foreground">
      <NeuralBackground />

      <div className="mx-auto flex min-h-screen w-full max-w-3xl flex-col justify-center px-6 py-20">
        <div
          className="glass-card animate-rise-in relative w-full rounded-[calc(var(--radius)+1rem)] p-8 sm:p-10 shadow-2xl"
          style={{ background: "var(--card-surface-94)" }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-primary/10 pb-6">
            <span className="flex size-12 items-center justify-center rounded-2xl border border-primary/30 bg-primary/15 text-cyan">
              <Settings className="size-6" />
            </span>
            <div>
              <h1 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                <span className="text-gradient-brand">Platform Settings</span>
              </h1>
              <p className="text-xs text-muted-foreground mt-0.5">
                Customize your visual theme and learning interface preferences.
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-7">
            {/* Theme Preference Section */}
            <section className="space-y-3">
              <h2 className="text-sm font-semibold text-foreground flex items-center gap-2">
                <Sparkles className="size-4 text-cyan" />
                Theme Mode
              </h2>
              <p className="text-xs text-muted-foreground">
                Choose between dark and light appearance. Your selection is automatically saved.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => setThemeMode("dark")}
                  className={`flex items-center justify-center gap-2.5 rounded-2xl border p-4 text-xs font-semibold transition-all cursor-pointer ${
                    theme === "dark"
                      ? "border-primary bg-primary/20 text-cyan shadow-md shadow-primary/20"
                      : "border-primary/20 bg-secondary/30 text-foreground/80 hover:bg-primary/10"
                  }`}
                >
                  <Moon className="size-4 text-cyan" />
                  <span>Dark Mode (Default)</span>
                  {theme === "dark" && <Check className="size-3.5 ml-1 text-cyan" />}
                </button>

                <button
                  type="button"
                  onClick={() => setThemeMode("light")}
                  className={`flex items-center justify-center gap-2.5 rounded-2xl border p-4 text-xs font-semibold transition-all cursor-pointer ${
                    theme === "light"
                      ? "border-primary bg-primary/20 text-cyan shadow-md shadow-primary/20"
                      : "border-primary/20 bg-secondary/30 text-foreground/80 hover:bg-primary/10"
                  }`}
                >
                  <Sun className="size-4 text-amber-300" />
                  <span>Light Mode</span>
                  {theme === "light" && <Check className="size-3.5 ml-1 text-cyan" />}
                </button>
              </div>
            </section>

            {/* Voice & Assistant Settings */}
            <section className="space-y-3 pt-4 border-t border-primary/10">
              <h2 className="text-sm font-semibold text-foreground flex items-center gap-2">
                <Volume2 className="size-4 text-cyan" />
                Copilot Voice & Audio
              </h2>
              <div className="flex items-center justify-between rounded-2xl bg-secondary/20 p-4 border border-primary/5">
                <div>
                  <p className="text-xs font-medium text-foreground">AI Voice Narration</p>
                  <p className="text-[11px] text-muted-foreground">
                    Automatically speak responses from the LearnPath Copilot.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setVoiceEnabled((v) => !v)}
                  className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                    voiceEnabled ? "bg-cyan" : "bg-muted"
                  }`}
                >
                  <span
                    className={`inline-block size-5 transform rounded-full bg-background shadow ring-0 transition duration-200 ease-in-out ${
                      voiceEnabled ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
            </section>

            {/* Notifications */}
            <section className="space-y-3 pt-4 border-t border-primary/10">
              <h2 className="text-sm font-semibold text-foreground flex items-center gap-2">
                <Bell className="size-4 text-cyan" />
                Study Notifications
              </h2>
              <div className="flex items-center justify-between rounded-2xl bg-secondary/20 p-4 border border-primary/5">
                <div>
                  <p className="text-xs font-medium text-foreground">Daily Study Reminders</p>
                  <p className="text-[11px] text-muted-foreground">
                    Receive reminders for your scheduled roadmap topics and tasks.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setDailyReminders((r) => !r)}
                  className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                    dailyReminders ? "bg-cyan" : "bg-muted"
                  }`}
                >
                  <span
                    className={`inline-block size-5 transform rounded-full bg-background shadow ring-0 transition duration-200 ease-in-out ${
                      dailyReminders ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
            </section>
          </div>

          {/* Save Button */}
          <div className="mt-8 pt-6 border-t border-primary/10 flex items-center justify-between">
            {saved ? (
              <span className="text-xs text-cyan font-medium flex items-center gap-1.5 animate-pulse">
                <Check className="size-3.5" />
                Preferences saved successfully!
              </span>
            ) : (
              <span className="text-xs text-muted-foreground">Changes apply immediately</span>
            )}

            <button
              type="button"
              onClick={handleSave}
              className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 font-display text-xs font-semibold tracking-wide text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5 cursor-pointer"
              style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-glow)" }}
            >
              <Check className="size-3.5" />
              Save Preferences
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
