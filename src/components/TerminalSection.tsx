import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const commands: Record<string, string> = {
  help: "Available commands: whoami, skills, contact, projects, clear",
  whoami: "Shubham Kishor — CSE Student | Software Developer | Cybersecurity Enthusiast",
  skills: "C++ • Python • Java • JavaScript • Nmap • Burp Suite • Wireshark • Metasploit",
  contact: "Email: shubhamkishor3438@gmail.com | Phone: 8521101757",
  projects: "1. Library Management System (C++)\n2. QR Code Generator (Python)\n3. Password Generator (Python)",
};

const TerminalSection = () => {
  const [history, setHistory] = useState<{ cmd: string; output: string }[]>([
    { cmd: "", output: 'Welcome to Shubham\'s terminal. Type "help" to get started.' },
  ]);
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (cmd === "clear") {
      setHistory([]);
    } else {
      const output = commands[cmd] || `Command not found: ${cmd}. Type "help" for available commands.`;
      setHistory((prev) => [...prev, { cmd: input, output }]);
    }
    setInput("");
  };

  return (
    <section className="py-24 relative">
      <div className="container px-4">
        <AnimatedSection>
          <p className="font-mono text-primary text-sm mb-2">&gt; interactive_mode</p>
          <h2 className="section-heading">
            Cyber <span className="neon-text">Terminal</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="mt-12 glass-card overflow-hidden max-w-2xl mx-auto neon-border">
            <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
              <div className="w-3 h-3 rounded-full bg-destructive/60" />
              <div className="w-3 h-3 rounded-full bg-accent/40" />
              <div className="w-3 h-3 rounded-full bg-primary/40" />
              <span className="ml-2 text-xs font-mono text-muted-foreground">shubham@portfolio:~$</span>
            </div>
            <div className="p-4 font-mono text-sm max-h-64 overflow-y-auto space-y-2">
              {history.map((h, i) => (
                <div key={i}>
                  {h.cmd && (
                    <p>
                      <span className="text-primary">$ </span>
                      <span className="text-foreground">{h.cmd}</span>
                    </p>
                  )}
                  <p className="text-muted-foreground whitespace-pre-wrap">{h.output}</p>
                </div>
              ))}
              <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <span className="text-primary">$ </span>
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-foreground caret-primary"
                  autoFocus
                  placeholder="Type a command..."
                />
              </form>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TerminalSection;
