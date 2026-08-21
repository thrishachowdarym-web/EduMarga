import { useCallback, useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Sparkles, Send, Mic, Volume2, VolumeX, X, HelpCircle, Loader2 } from "lucide-react";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
  isError?: boolean;
};

const API_ENDPOINT = "https://ai-tutor-gsmu.onrender.com/api/ai/chat";

const SUGGESTIONS = [
  { label: "🤖 Simplify Concept", prompt: "Explain the current topic in simple terms with an analogy." },
  { label: "📝 Quiz Me", prompt: "Give me a quick 3-question multiple-choice quiz on my current study track." },
  { label: "⏱️ Study Tips", prompt: "Suggest some effective study tips and time management hacks for these topics." },
  { label: "💡 Project Ideas", prompt: "Suggest a creative project idea related to my current roadmap steps." },
];

export function AIChatWidget() {
  const [open, setOpen] = useState(false);
  const [voiceOn, setVoiceOn] = useState(true);
  const [input, setInput] = useState("");
  const [listening, setListening] = useState(false);
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm your **LearnPath Copilot** 🚀. I'm here to help you navigate your roadmaps, simplify complex concepts, practice with quizzes, or suggest study tips. What are we studying today?",
    },
  ]);

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const recognitionRef = useRef<any>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const messagesRef = useRef(messages);
  messagesRef.current = messages;
  const voiceRef = useRef(voiceOn);
  voiceRef.current = voiceOn;

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, open, loading]);

  const speak = useCallback((reply: string, audio?: string) => {
    if (!voiceRef.current || typeof window === "undefined") return;
    if (audio) {
      try {
        const src = audio.startsWith("data:") ? audio : `data:audio/mpeg;base64,${audio}`;
        audioRef.current?.pause();
        const el = new Audio(src);
        audioRef.current = el;
        void el.play();
        return;
      } catch {
      }
    }
    if ("speechSynthesis" in window) {
      const plain = reply.replace(/[*_`#>]/g, "");
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(new SpeechSynthesisUtterance(plain));
    }
  }, []);

  const sendMessage = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || loading) return;

      const history = messagesRef.current;
      setMessages([...history, { role: "user", content: trimmed }]);
      setInput("");
      setLoading(true);

      try {
        const res = await fetch(API_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: trimmed,
          }),
        });
        if (!res.ok) throw new Error(`Request failed (${res.status})`);
        const data: { reply?: string; audio?: string } = await res.json();
        const reply = data.reply ?? "I couldn't generate a response.";
        setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
        speak(reply, data.audio);
      } catch (err) {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            isError: true,
            content: `⚠️ Couldn't reach the Copilot service. ${
              err instanceof Error ? err.message : "Please try again."
            }`,
          },
        ]);
      } finally {
        setLoading(false);
      }
    },
    [loading, speak],
  );

  const toggleMic = useCallback(() => {
    if (typeof window === "undefined") return;
    const SR =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          isError: true,
          content: "⚠️ Speech recognition isn't supported in this browser.",
        },
      ]);
      return;
    }
    if (listening) {
      recognitionRef.current?.stop();
      return;
    }
    const recognition = new SR();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.continuous = false;
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript as string;
      void sendMessage(transcript);
    };
    recognition.onerror = () => setListening(false);
    recognition.onend = () => setListening(false);
    recognitionRef.current = recognition;
    setListening(true);
    recognition.start();
  }, [listening, sendMessage]);

  const toggleVoice = () => {
    setVoiceOn((v) => {
      if (v && typeof window !== "undefined") {
        window.speechSynthesis?.cancel();
        audioRef.current?.pause();
      }
      return !v;
    });
  };

  return (
    <>
      <div
        className={`fixed bottom-24 right-6 z-[9999] w-[380px] max-w-[calc(100vw-2rem)] origin-bottom-right transition-all duration-300 ${
          open
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-3 scale-95 opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="flex h-[530px] max-h-[70vh] flex-col overflow-hidden rounded-2xl border border-primary/20 bg-card shadow-2xl"
          style={{ background: "var(--card-surface-96)" }}>
          
          <header className="flex items-center gap-2 border-b border-primary/10 px-4 py-3 text-primary-foreground"
            style={{ background: "var(--gradient-brand)" }}>
            <h2 className="flex-1 text-sm font-semibold flex items-center gap-2">
              <img
                src="https://img.freepik.com/premium-vector/chat-bot-icon-virtual-smart-assistant-bot-sign-design-robot-head-with-speech-bubble-circle_418020-468.jpg"
                alt="Chatbot"
                className="size-5 rounded-full object-cover robot-avatar dark:hue-rotate-[295deg] dark:saturate-110"
              />
              LearnPath Copilot
            </h2>
            <button
              type="button"
              onClick={toggleVoice}
              aria-label={voiceOn ? "Disable voice output" : "Enable voice output"}
              className="rounded-md p-1.5 transition-colors hover:bg-primary-foreground/15 text-primary-foreground"
            >
              {voiceOn ? <Volume2 className="size-4" /> : <VolumeX className="size-4 text-muted-foreground" />}
            </button>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="rounded-md p-1.5 transition-colors hover:bg-primary-foreground/15 text-primary-foreground"
            >
              <X className="size-4" />
            </button>
          </header>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-background/50 px-4 py-4 scrollbar-thin">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "rounded-br-sm text-primary-foreground"
                      : m.isError
                        ? "rounded-bl-sm bg-destructive/10 text-destructive border border-destructive/20"
                        : "rounded-bl-sm bg-secondary/30 text-foreground border border-primary/5"
                  }`}
                  style={m.role === "user" ? { background: "var(--gradient-brand)" } : undefined}
                >
                  {m.role === "user" ? (
                    <p className="whitespace-pre-wrap">{m.content}</p>
                  ) : (
                    <div className="prose prose-sm max-w-none break-words text-foreground/90 [&_code]:rounded [&_code]:bg-primary/10 [&_code]:px-1 [&_code]:py-0.5 [&_code]:text-cyan [&_li]:my-0.5 [&_ol]:list-decimal [&_ol]:pl-5 [&_p]:my-1 [&_pre]:overflow-x-auto [&_pre]:rounded-md [&_pre]:bg-secondary/40 [&_pre]:p-2.5 [&_strong]:font-semibold [&_ul]:list-disc [&_ul]:pl-5">
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>{m.content}</ReactMarkdown>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-sm bg-secondary/30 border border-primary/5 px-3.5 py-2 text-sm text-muted-foreground flex items-center gap-1.5">
                  <Loader2 className="size-3.5 animate-spin text-cyan" />
                  Analyzing topic…
                </div>
              </div>
            )}
          </div>

          <div className="flex gap-2 px-3 pb-2 pt-1 overflow-x-auto scrollbar-none scroll-smooth">
            {SUGGESTIONS.map((s) => (
              <button
                key={s.label}
                type="button"
                onClick={() => void sendMessage(s.prompt)}
                disabled={loading}
                className="shrink-0 text-[11px] bg-secondary/30 hover:bg-primary/15 border border-primary/10 hover:border-cyan text-foreground/80 hover:text-cyan rounded-full px-2.5 py-1 transition-all cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
              >
                {s.label}
              </button>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              void sendMessage(input);
            }}
            className="flex items-center gap-2 border-t border-primary/10 bg-card px-3 py-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask Copilot a question..."
              className="h-10 flex-1 rounded-full border border-input bg-secondary/40 px-4 text-xs text-foreground outline-none focus:border-primary/60 focus:bg-secondary/60 focus:ring-2 focus:ring-primary/20"
            />
            <button
              type="button"
              onClick={toggleMic}
              aria-label={listening ? "Stop recording" : "Start voice input"}
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-input text-base transition-colors cursor-pointer ${
                listening ? "animate-pulse bg-destructive text-destructive-foreground" : "bg-background hover:bg-accent"
              }`}
            >
              <Mic className="size-4" />
            </button>
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50 cursor-pointer"
              style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-glow)" }}
            >
              <Send className="size-4" />
            </button>
          </form>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close Copilot" : "Open Copilot"}
        className="fixed bottom-6 right-6 z-[9999] flex h-14 w-14 items-center justify-center rounded-full shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer overflow-hidden text-primary-foreground"
        style={{
          background: "var(--gradient-brand)",
          boxShadow: "var(--shadow-glow)",
        }}
      >
        {open ? (
          <X className="size-6" />
        ) : (
          <img
            src="https://img.freepik.com/premium-vector/chat-bot-icon-virtual-smart-assistant-bot-sign-design-robot-head-with-speech-bubble-circle_418020-468.jpg"
            alt="Chatbot"
            className="h-full w-full rounded-full object-cover robot-avatar dark:hue-rotate-[295deg] dark:saturate-110"
          />
        )}
      </button>
    </>
  );
}

export default AIChatWidget;
