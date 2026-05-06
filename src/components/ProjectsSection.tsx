import { BookOpen, QrCode, Lock, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    icon: BookOpen,
    title: "Library Management System",
    tech: ["C++", "OOP", "File Handling"],
    problem: "Manual library tracking made borrowing and returns slow and error-prone.",
    solution: "Built a console-based system using inheritance and polymorphism with file persistence and book catalog management.",
    impact: "Improved workflow reliability and reduced manual tracking effort for library operations.",
    github: "https://github.com/Shubham3438/Library-Management-System",
    color: "160 100% 50%",
  },
  {
    icon: QrCode,
    title: "QR Code Generator",
    tech: ["Python", "qrcode", "PIL"],
    problem: "Teams needed a fast way to generate shareable QR codes from text and links.",
    solution: "Developed a Python tool that generates customizable QR codes and exports them as PNG images.",
    impact: "Enabled quick asset generation for secure sharing and project demos.",
    github: "https://github.com/Shubham3438/QR-Code-Generator-Python",
    color: "190 100% 50%",
  },
  {
    icon: Lock,
    title: "Password Generator",
    tech: ["Python", "random", "string"],
    problem: "Weak passwords are a common security risk for personal accounts.",
    solution: "Created a password generator with configurable strength, character sets, and secure output.",
    impact: "Delivered a reusable tool that supports strong credential creation for secure practices.",
    github: "https://github.com/Shubham3438/Password-Generator-Python-",
    color: "270 100% 65%",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24 relative">
    <div className="container px-4">
      <AnimatedSection>
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <p className="font-mono text-primary text-sm mb-2 tracking-[0.2em] uppercase">Portfolio</p>
            <h2 className="section-heading">
              Featured <span className="neon-text italic">Projects</span>
            </h2>
          </div>
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {projects.map((p, i) => (
          <AnimatedSection key={p.title} delay={i * 0.15}>
            <motion.div
              className="glass-card overflow-hidden h-full flex flex-col group relative"
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, hsl(${p.color}), hsl(${p.color} / 0.3))` }} />

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4">
                  <motion.div
                    className="p-3 rounded-xl bg-primary/10"
                    style={{ boxShadow: `0 0 20px hsl(${p.color} / 0.2)` }}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <p.icon className="w-6 h-6" style={{ color: `hsl(${p.color})` }} />
                  </motion.div>
                  <div className="flex gap-2">
                    <motion.a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-muted/50 text-muted-foreground hover:text-primary transition-colors"
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-muted/50 text-muted-foreground hover:text-primary transition-colors"
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>

                <h3 className="font-heading font-bold text-xl mb-3">{p.title}</h3>

                <div className="space-y-3 flex-1">
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.solution}</p>
                  <div className="rounded-2xl border border-border p-4 bg-background/80">
                    <p className="text-xs uppercase tracking-[0.3em] text-primary font-mono mb-2">Impact</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.impact}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-border">
                  {p.tech.map((t) => (
                    <span key={t} className="px-3 py-1 text-xs font-mono rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
