import { Award } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const certs = [
  { title: "Privacy & Security in Online Social Media", issuer: "NPTEL", link: "https://drive.google.com/file/d/14OcX1-Q6hmaETArdXyN7mPqs5DEQ8l-c/view?usp=sharing", color: "160 100% 50%" },
  { title: "Prompt Engineering & AI", issuer: "Infosys Springboard", link: "https://drive.google.com/drive/folders/1lR1rgp4fj7x6Q_3pt6jb4QwGsssD-iRw", color: "190 100% 50%" },
  { title: "Digital Transformation", issuer: "Simplilearn", link: "https://drive.google.com/file/d/1FnlV-Oy4N9U8cwT2ikwnB0tlTDZ-dH9D/view?usp=sharing", color: "270 100% 65%" },
];

const CertificationsSection = () => (
  <section id="certifications" className="py-24 relative">
    <div className="container px-4">
      <AnimatedSection>
        <p className="font-mono text-primary text-sm mb-2 tracking-[0.2em] uppercase">Achievements</p>
        <h2 className="section-heading">
          <span className="neon-text italic">Certifications</span>
        </h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {certs.map((c, i) => (
          <AnimatedSection key={c.title} delay={i * 0.12}>
            <motion.a
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-8 text-center h-full block cursor-pointer"
              whileHover={{ y: -6, boxShadow: `0 0 40px hsl(${c.color} / 0.15)`, borderColor: `hsl(${c.color} / 0.3)` }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="inline-flex p-4 rounded-2xl mb-5"
                style={{ backgroundColor: `hsl(${c.color} / 0.1)`, boxShadow: `0 0 20px hsl(${c.color} / 0.15)` }}
                whileHover={{ rotate: 10, scale: 1.1 }}
              >
                <Award className="w-8 h-8" style={{ color: `hsl(${c.color})` }} />
              </motion.div>
              <h3 className="font-heading font-semibold mb-2">{c.title}</h3>
              <p className="text-sm font-mono text-muted-foreground">{c.issuer}</p>
            </motion.a>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsSection;
