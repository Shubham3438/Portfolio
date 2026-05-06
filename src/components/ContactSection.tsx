import { Mail, Phone, Linkedin, Github, Download, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import AnimatedSection from "./AnimatedSection";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  // Initialize EmailJS - Replace with your public key
  useEffect(() => {
    emailjs.init("YOUR_PUBLIC_KEY_HERE");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await emailjs.send(
        "YOUR_SERVICE_ID_HERE", // Replace with your service ID
        "YOUR_TEMPLATE_ID_HERE", // Replace with your template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "shubhamkishor3438@gmail.com",
        }
      );

      if (response.status === 200) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
  <section id="contact" className="py-24 relative">
    <div className="container px-4">
      <AnimatedSection>
        <p className="font-mono text-primary text-sm mb-2 tracking-[0.2em] uppercase">Contact</p>
        <h2 className="section-heading">
          Let's <span className="neon-text italic">Connect</span>
        </h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-12 mt-12">
        <AnimatedSection delay={0.1}>
          <div className="glass-card p-8">
            <h3 className="text-xl font-heading font-semibold mb-6">Get In Touch</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm open to internship and early-career roles in software engineering, web development, and cybersecurity. Reach out if you want a placement-ready developer who values secure, maintainable solutions.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-sm">shubhamkishor3438@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-sm">+91 8521101757</span>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/in/shubham3438/", label: "LinkedIn" },
                { icon: Github, href: "https://github.com/Shubham3438", label: "GitHub" },
              ].map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg glass-card border border-border text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <s.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="glass-card p-8">
            <h3 className="text-xl font-heading font-semibold mb-6">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                />
              </div>
              {status && (
                <p className={`text-sm ${status.includes("successfully") ? "text-green-500" : "text-red-500"}`}>
                  {status}
                </p>
              )}
              <motion.button
                type="submit"
                disabled={loading}
                className="neon-button w-full inline-flex items-center justify-center gap-2 disabled:opacity-50"
                whileHover={{ scale: 1.02, boxShadow: "0 0 40px hsl(160 100% 50% / 0.5)" }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-4 h-4" /> {loading ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
  );
};

export default ContactSection;
