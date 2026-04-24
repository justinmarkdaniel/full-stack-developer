import { useEffect, useRef, useState } from "react";
import { Send, Sparkles, X } from "lucide-react";
import { cn } from "@/lib/utils";

type Role = "bot" | "user";
interface Message {
  id: number;
  role: Role;
  text: string;
}

const GREETING: Message = {
  id: 0,
  role: "bot",
  text: "Hi — I'm a mock AI assistant. Ask me about Justin's work, stack, or agentic AI projects.",
};

const SUGGESTIONS = [
  "What do you build?",
  "Tell me about RAG",
  "How can I hire you?",
];

function mockReply(input: string): string {
  const q = input.toLowerCase();

  if (/(hire|contact|email|reach|available)/.test(q))
    return "Justin's open to remote AI engineering roles. Hit the \"Get in Touch\" button up top — or scroll to the contact section.";
  if (/(project|portfolio|work|built|shipped)/.test(q))
    return "Recent work: an Agent SDK + MCP SEO platform, a RAG keyword tool with pgvector, AI evals pipelines, and a negative-news NLP filter. Scroll to the projects section for the full list.";
  if (/(rag|retrieval|vector|embedding|pgvector)/.test(q))
    return "RAG setups here lean on pgvector for semantic search over Postgres, with embeddings generated via OpenAI or local models. Happy to go deeper on chunking strategy or eval setups.";
  if (/(agent|agentic|mcp|tool.?use)/.test(q))
    return "Agentic systems are the core focus — Agent SDK for orchestration, MCP for tool interoperability, and structured evals to catch regressions before production.";
  if (/(stack|tech|tools|language)/.test(q))
    return "Python + TypeScript for the core, LangChain/LangGraph where it earns its weight, Supabase + pgvector for storage, AWS for infra. Evals and observability from day one.";
  if (/(ml|machine learning|model|fine.?tun)/.test(q))
    return "Production ML here means applied LLM engineering — prompt design, evals, fine-tuning when it pays off, and classical NLP (sentiment, embeddings) where it's the right tool.";
  if (/(cost|price|rate|budget)/.test(q))
    return "Rates depend on scope and engagement length. Best to start a conversation via the contact form — happy to scope it properly.";
  if (/(hello|hi|hey|yo)/.test(q))
    return "Hey — glad you dropped by. Ask me anything about the portfolio, the stack, or how to get in touch.";
  if (/(who|about|justin)/.test(q))
    return "Justin's a Senior AI Engineer focused on agentic systems and LLM applications. Full production depth across TypeScript, Python, AWS, and applied AI.";

  return "Good question. Quick note — I'm a mock bot for this portfolio, so my range is limited. Try asking about projects, RAG, agentic systems, or how to get in touch.";
}

const AIChatbot = () => {
  const [open, setOpen] = useState(false);
  const [launcherVisible, setLauncherVisible] = useState(false);
  const [launcherTyped, setLauncherTyped] = useState(false);
  const [launcherDots, setLauncherDots] = useState(".");
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const show = setTimeout(() => setLauncherVisible(true), 5000);
    const typed = setTimeout(() => setLauncherTyped(true), 7200);
    return () => {
      clearTimeout(show);
      clearTimeout(typed);
    };
  }, []);

  useEffect(() => {
    if (launcherTyped || !launcherVisible) return;
    const frames = [".", "..", "..."];
    let i = 0;
    const id = setInterval(() => {
      i = (i + 1) % frames.length;
      setLauncherDots(frames[i]);
    }, 420);
    return () => clearInterval(id);
  }, [launcherVisible, launcherTyped]);

  useEffect(() => {
    if (!open) return;
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, open, thinking]);

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 160);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || thinking) return;
    const userMsg: Message = { id: Date.now(), role: "user", text: trimmed };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setThinking(true);
    const delay = 650 + Math.min(trimmed.length * 15, 900);
    setTimeout(() => {
      const reply: Message = {
        id: Date.now() + 1,
        role: "bot",
        text: mockReply(trimmed),
      };
      setMessages((m) => [...m, reply]);
      setThinking(false);
    }, delay);
  };

  return (
    <div className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-50 font-sans">
      {/* Panel */}
      {open && (
        <div
          role="dialog"
          aria-label="AI assistant chat"
          className="mb-3 w-[calc(100vw-2.5rem)] max-w-[360px] h-[520px] max-h-[calc(100vh-7rem)] flex flex-col rounded-2xl border border-border/80 card-gradient backdrop-blur-sm shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7),0_0_40px_-10px_hsl(180_100%_50%_/_0.25)] animate-chat-pop-in overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-border/60 bg-card/30">
            <div className="flex items-center gap-2.5">
              <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 border border-primary/30">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="absolute -bottom-0.5 -right-0.5 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-foreground leading-tight">
                  AI Assistant
                </span>
                <span className="text-[10px] font-mono text-muted-foreground leading-tight uppercase tracking-wider">
                  Mock · Online
                </span>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="p-1.5 rounded-md text-muted-foreground hover:text-primary hover:bg-secondary/60 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            aria-live="polite"
            className="flex-1 overflow-y-auto px-4 py-4 space-y-3 scrollbar-thin"
          >
            {messages.map((m) => (
              <MessageBubble key={m.id} role={m.role} text={m.text} />
            ))}
            {thinking && <TypingBubble />}

            {messages.length === 1 && !thinking && (
              <div className="pt-1 flex flex-wrap gap-1.5">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="text-[11px] font-mono text-muted-foreground bg-secondary/50 hover:bg-secondary hover:text-primary border border-border hover:border-primary/50 rounded-full px-2.5 py-1 transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 px-3 py-3 border-t border-border/60 bg-card/40"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything…"
              className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none px-1"
            />
            <button
              type="submit"
              disabled={!input.trim() || thinking}
              aria-label="Send message"
              className={cn(
                "flex items-center justify-center w-8 h-8 rounded-md transition-all",
                input.trim() && !thinking
                  ? "bg-primary text-primary-foreground hover:shadow-[0_0_18px_hsl(180_100%_50%_/_0.5)]"
                  : "bg-secondary/60 text-muted-foreground cursor-not-allowed",
              )}
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}

      {/* Launcher bar */}
      {!open && launcherVisible && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Open AI chat"
          aria-expanded={false}
          className={cn(
            "group relative flex items-center gap-3 pl-3 pr-5 py-2.5 rounded-full ml-auto",
            "card-gradient border border-primary/30 backdrop-blur-sm",
            "shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6),0_0_25px_-5px_hsl(180_100%_50%_/_0.35)]",
            "hover:border-primary/60 hover:shadow-[0_15px_40px_-10px_rgba(0,0,0,0.7),0_0_40px_-5px_hsl(180_100%_50%_/_0.6)]",
            "hover:-translate-y-0.5 transition-all duration-300",
            "animate-chat-bar-intro",
            launcherTyped && "animate-chat-nudge",
          )}
        >
          <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-primary/15 border border-primary/40 shrink-0">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="absolute -bottom-0.5 -right-0.5 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
          </div>
          <div className="flex flex-col items-start text-left">
            <span className="text-[10px] font-mono uppercase tracking-wider text-primary/80 leading-tight">
              AI Assistant
            </span>
            <span className="text-sm text-foreground font-medium leading-tight min-w-[2.5rem]">
              {launcherTyped ? "hey…" : launcherDots}
            </span>
          </div>
        </button>
      )}
    </div>
  );
};

const MessageBubble = ({ role, text }: { role: Role; text: string }) => {
  const isBot = role === "bot";
  return (
    <div className={cn("flex", isBot ? "justify-start" : "justify-end")}>
      <div
        className={cn(
          "max-w-[85%] px-3.5 py-2.5 text-sm leading-relaxed rounded-2xl",
          isBot
            ? "bg-secondary/60 text-foreground border border-border/60 rounded-bl-sm"
            : "bg-primary/90 text-primary-foreground rounded-br-sm",
        )}
      >
        {text}
      </div>
    </div>
  );
};

const TypingBubble = () => (
  <div className="flex justify-start">
    <div className="px-3.5 py-3 rounded-2xl rounded-bl-sm bg-secondary/60 border border-border/60">
      <div className="flex items-center gap-1">
        <span className="chat-dot w-1.5 h-1.5 rounded-full bg-muted-foreground" style={{ animationDelay: "0ms" }} />
        <span className="chat-dot w-1.5 h-1.5 rounded-full bg-muted-foreground" style={{ animationDelay: "150ms" }} />
        <span className="chat-dot w-1.5 h-1.5 rounded-full bg-muted-foreground" style={{ animationDelay: "300ms" }} />
      </div>
    </div>
  </div>
);

export default AIChatbot;
