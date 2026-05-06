import { Shield } from "lucide-react";

const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="container px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2 font-heading text-sm">
        <Shield className="w-4 h-4 text-primary" />
        <span className="text-muted-foreground">© 2026 Shubham Kishor. All rights reserved.</span>
      </div>
      <p className="font-mono text-xs text-muted-foreground">Built with passion & security in mind</p>
    </div>
  </footer>
);

export default Footer;
