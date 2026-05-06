import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const education = [
  { title: "B.Tech – Computer Science Engineering", place: "Lovely Professional University", detail: "CGPA: 6.41", year: "2023 – 2027" },
  { title: "Class 12 (Intermediate)", place: "Senior Secondary", detail: "70.8%", year: "2022" },
  { title: "Class 10 (Matriculation)", place: "Secondary School", detail: "74.2%", year: "2020" },
];

const EducationSection = () => (
  <section id="education" className="py-24 relative">
    <div className="container px-4">
      <AnimatedSection>
        <p className="font-mono text-primary text-sm mb-2 tracking-[0.2em] uppercase">Education</p>
        <h2 className="section-heading">
          Academic <span className="neon-text italic">Background</span>
        </h2>
      </AnimatedSection>

      <div className="mt-12 max-w-3xl mx-auto relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

        <div className="space-y-8">
          {education.map((e, i) => (
            <AnimatedSection key={e.title} delay={i * 0.15}>
              <motion.div
                className="relative pl-20 group"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3 }}
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-[26px] top-6 w-4 h-4 rounded-full border-2 border-primary bg-background z-10"
                  whileHover={{ scale: 1.5, boxShadow: "0 0 15px hsl(160 100% 50% / 0.5)" }}
                />

                <div className="glass-card p-6 group-hover:border-primary/30 transition-colors">
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-primary" />
                      <span className="font-mono text-xs text-primary font-semibold">{e.detail}</span>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">{e.year}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg">{e.title}</h3>
                  <p className="text-sm text-muted-foreground">{e.place}</p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default EducationSection;
