import { motion } from "framer-motion";

const skills = [
  "C++", "Python", "Java", "JavaScript", "Nmap", "Burp Suite", "Wireshark",
  "Metasploit", "TryHackMe", "HackTheBox", "LeetCode", "HackerRank", "HackerEarth",
  "CodeChef", "Codeforces", "GeeksforGeeks", "CodeSignal", "OOP", "DSA", "Linux",
  "Git", "REST API", "SQL", "Networking", "Cryptography",
];

const platformAccent: Record<string, string> = {
  HackerRank: "text-[#2EC866] border-[#2EC866]/30 bg-[#2EC866]/10",
  HackerEarth: "text-[#1A6EAB] border-[#1A6EAB]/30 bg-[#1A6EAB]/10",
  CodeChef: "text-[#4F82F5] border-[#4F82F5]/30 bg-[#4F82F5]/10",
  Codeforces: "text-[#2E83F5] border-[#2E83F5]/30 bg-[#2E83F5]/10",
  GeeksforGeeks: "text-[#31A33D] border-[#31A33D]/30 bg-[#31A33D]/10",
  LeetCode: "text-[#FFA116] border-[#FFA116]/30 bg-[#FFA116]/10",
  TryHackMe: "text-[#FF6B6B] border-[#FF6B6B]/30 bg-[#FF6B6B]/10",
  HackTheBox: "text-[#7C4DFF] border-[#7C4DFF]/30 bg-[#7C4DFF]/10",
};

const SkillsMarquee = () => {
  const doubled = [...skills, ...skills];

  return (
    <div className="absolute inset-0 overflow-hidden opacity-[0.06] pointer-events-none">
      {[0, 1, 2, 3, 4, 5, 6].map((row) => (
        <motion.div
          key={row}
          className="flex gap-8 whitespace-nowrap py-3"
          animate={{ x: row % 2 === 0 ? [0, -1600] : [-1600, 0] }}
          transition={{ duration: 30 + row * 5, repeat: Infinity, ease: "linear" }}
        >
          {doubled.map((skill, i) => (
            <span
              key={`${row}-${i}`}
              className={`px-6 py-2 rounded-full border font-mono text-sm uppercase tracking-widest transition-all duration-300 ${
                platformAccent[skill] ?? "border-foreground/30 text-foreground bg-background/10"
              }`}
            >
              {skill}
            </span>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export default SkillsMarquee;
