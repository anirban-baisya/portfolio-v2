import React from "react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

const links = [
  { icon: Github, href: personalInfo.profiles.github, label: "GitHub" },
  { icon: Linkedin, href: personalInfo.profiles.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `https://mail.google.com/mail/?view=cm&to=${personalInfo.email}&su=${encodeURIComponent("Let's Work Together")}&body=${encodeURIComponent(`Hi ${personalInfo.name},`)}`, label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/20 py-10">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p
          className="text-sm text-muted-foreground flex items-center gap-1.5"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          Built with <Heart size={13} className="text-rose-400 fill-rose-400" /> by Anirban Baisya · {new Date().getFullYear()}
        </p>
        <div className="flex items-center gap-2">
          {links.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 rounded-lg border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-brand-500 hover:border-brand-500/40 transition-all duration-200"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
