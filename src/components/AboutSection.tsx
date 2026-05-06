import { Shield, Code, Terminal } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "./AnimatedSection";

const CountUp = ({ target, label }: { target: string; label: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const isNumber = !isNaN(Number(target));

  return (
    <div ref={ref} className="text-center">
      <motion.div
        className="text-3xl font-heading font-bold neon-text"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, type: "spring" }}
      >
        {isNumber ? (inView ? target : "0") : target}
      </motion.div>
      <p className="text-xs font-mono text-muted-foreground mt-1 uppercase tracking-wider">{label}</p>
    </div>
  );
};

const cards = [
  { icon: Code, title: "Software Developer", desc: "Building efficient solutions with C++, Python, Java, and JavaScript" },
  { icon: Shield, title: "Security Enthusiast", desc: "Implementing secure development practices and ethical hacking principles" },
  { icon: Terminal, title: "Career-ready Learner", desc: "Solving problems daily on LeetCode, HackerRank, TryHackMe, and HackTheBox" },
];

const AboutSection = () => (
  <section id="about" className="py-24 relative">
    <div className="container px-4">
      <AnimatedSection>
        <p className="font-mono text-primary text-sm mb-2 tracking-[0.2em] uppercase">&gt; about_me</p>
        <h2 className="section-heading">
          Who I <span className="neon-text">Am</span>
        </h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <AnimatedSection delay={0.1}>
          <div className="glass-card p-8 h-full">
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a Computer Science Engineering student at Lovely Professional University with a strong focus on <span className="highlight-green font-semibold">secure software development</span> and <span className="highlight-cyan font-semibold">placement readiness</span>. I am actively seeking internship and early-career opportunities in <span className="highlight-purple font-semibold">software engineering</span>, <span className="highlight-green font-semibold">web development</span>, and <span className="highlight-cyan font-semibold">cybersecurity</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              My work blends practical programming with <span className="highlight-green font-semibold">security-first thinking</span>. I build clean, efficient solutions while making sure they stay <span className="highlight-purple font-semibold">robust under real-world conditions</span>.
            </p>

            <div className="grid gap-3 sm:grid-cols-2 mb-8">
              {[
                "Security-first coding",
                "Data structures & algorithms",
                "Project-driven learning",
                "Team collaboration",
              ].map((item) => (
                <div key={item} className="rounded-3xl border border-primary/10 bg-primary/5 px-4 py-3 text-sm text-muted-foreground">
                  {item}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
              <CountUp target="5+" label="Languages" />
              <CountUp target="4+" label="Security Tools" />
              <CountUp target="3" label="Projects" />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="space-y-4">
            {cards.map((item, i) => (
              <motion.div
                key={item.title}
                className="glass-card p-6 flex items-start gap-4 cursor-default"
                whileHover={{
                  scale: 1.02,
                  borderColor: "hsl(160 100% 50% / 0.4)",
                  boxShadow: "0 0 30px hsl(160 100% 50% / 0.15)",
                }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                custom={i}
              >
                <motion.div
                  className="p-3 rounded-lg bg-primary/10 neon-border"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  <item.icon className="w-5 h-5 text-primary" />
                </motion.div>
                <div>
                  <h3 className="font-heading font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default AboutSection;
