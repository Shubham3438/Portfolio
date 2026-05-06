import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import SkillsMarquee from "./SkillsMarquee";

const skills = ["Secure Systems", "Data Structures", "Full-stack Web", "Problem Solving", "Cybersecurity"];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const easeOut = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut as unknown as [number, number, number, number] } },
};

const letterAnim = {
  hidden: { opacity: 0, y: 60, rotateX: -40 },
  visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.6, ease: easeOut as unknown as [number, number, number, number] } },
};

const HeroSection = () => {
  const [currentSkill, setCurrentSkill] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const skill = skills[currentSkill];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting) {
      if (displayed.length < skill.length) {
        timeout = setTimeout(() => setDisplayed(skill.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setDeleting(true), 1500);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setDeleting(false);
        setCurrentSkill((prev) => (prev + 1) % skills.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, currentSkill]);

  const firstName = "Shubham";
  const lastName = "Kishor";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <SkillsMarquee />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-20" style={{ background: "radial-gradient(circle, hsl(160 100% 50% / 0.35), transparent 70%)" }} />

      <motion.div
        className="container relative z-10 px-4"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center md:text-left">
            <motion.div variants={fadeUp} className="inline-block mb-6 px-5 py-2 rounded-full border border-primary/30 bg-primary/5 font-mono text-xs text-primary tracking-[0.25em] uppercase">
              Open to internship & entry-level roles
            </motion.div>

            <div className="overflow-hidden mb-2">
              <motion.h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold leading-none flex justify-center md:justify-start flex-wrap" variants={container}>
                {firstName.split("").map((char, i) => (
                  <motion.span key={`f-${i}`} variants={letterAnim} className="inline-block">
                    {char}
                  </motion.span>
                ))}
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-6">
              <motion.h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold leading-none neon-text flex justify-center md:justify-start flex-wrap" variants={container}>
                {lastName.split("").map((char, i) => (
                  <motion.span key={`l-${i}`} variants={letterAnim} className="inline-block">
                    {char}
                  </motion.span>
                ))}
              </motion.h1>
            </div>

            <motion.p variants={fadeUp} className="text-lg md:text-xl text-muted-foreground mb-3 max-w-2xl mx-auto md:mx-0">
              Placement-ready software developer with a <span className="highlight-green font-semibold">security-first</span> mindset, building <span className="highlight-cyan font-semibold">reliable apps</span> and <span className="highlight-purple font-semibold">resilient systems</span> using <span className="highlight-green font-semibold">C++</span>, <span className="highlight-cyan font-semibold">Python</span>, and modern <span className="highlight-purple font-semibold">web technologies</span>.
            </motion.p>

            <motion.div variants={fadeUp} className="h-8 mb-10 font-mono text-primary text-lg">
              <span className="text-muted-foreground">&gt; </span>
              {displayed}
              <span className="animate-pulse ml-0.5 text-primary">|</span>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <motion.a
                href="#projects"
                className="neon-button"
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px hsl(160 100% 50% / 0.5)" }}
                whileTap={{ scale: 0.97 }}
              >
                View My Work
              </motion.a>
              <motion.a
                href="https://drive.google.com/file/d/1RS7LP9P26gwK3ko-7RTJBEsQ7jPjue9G/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="neon-button-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                Download CV
              </motion.a>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center md:justify-start gap-3 mt-8 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <span className="px-3 py-2 rounded-full border border-primary/20 bg-primary/5">Placement-ready</span>
              <span className="px-3 py-2 rounded-full border border-primary/20 bg-primary/5">Secure coding</span>
              <span className="px-3 py-2 rounded-full border border-primary/20 bg-primary/5">Web & Security</span>
            </motion.div>
          </div>

          {/* Right side - Profile image */}
          <motion.div variants={fadeUp} className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-72 h-96 md:w-80 md:h-[28rem] rounded-3xl overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img 
                  src="/profile.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-6 h-6" />
      </motion.a>
    </section>
  );
};

export default HeroSection;
