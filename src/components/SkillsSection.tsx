import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const skillGroups = [
  {
    title: "Programming",
    icon: "</>",
    items: ["C", "C++", "Java", "Python", "JavaScript"],
    proficiency: [85, 90, 80, 85, 75],
  },
  {
    title: "Cybersecurity",
    icon: "🛡",
    items: ["Nmap", "Burp Suite", "Wireshark", "Metasploit"],
    proficiency: [80, 75, 85, 70],
  },
  {
    title: "Placement Skills",
    icon: "🚀",
    items: ["DSA", "Secure Coding", "System Design", "Problem Solving"],
    proficiency: [85, 80, 75, 90],
  },
  {
    title: "Platforms",
    icon: "🖥",
    items: ["TryHackMe", "HackTheBox", "LeetCode", "HackerRank"],
    proficiency: [85, 80, 90, 85],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-24 relative">
    <div className="container px-4">
      <AnimatedSection>
        <p className="font-mono text-primary text-sm mb-2 tracking-[0.2em] uppercase">Skills</p>
        <h2 className="section-heading">
          Technical <span className="neon-text italic">Arsenal</span>
        </h2>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {skillGroups.map((group, gi) => (
          <AnimatedSection key={group.title} delay={gi * 0.1}>
            <div className="glass-card p-6 h-full">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{group.icon}</span>
                <h3 className="font-heading font-bold text-lg">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, si) => (
                  <motion.div
                    key={skill}
                    className="flex-1 min-w-[200px]"
                    whileHover={{
                      scale: 1.02,
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: gi * 0.1 + si * 0.05, duration: 0.4 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-muted/60 border border-border text-sm font-mono text-secondary-foreground">
                        {skill}
                      </span>
                      <span className="text-xs text-muted-foreground font-mono">{group.proficiency[si]}%</span>
                    </div>
                    <div className="w-full bg-muted/30 rounded-full h-2">
                      <motion.div
                        className="bg-primary h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${group.proficiency[si]}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: gi * 0.1 + si * 0.05 + 0.2, duration: 1, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
