import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Library, Copy, Check, Send } from "lucide-react";
import { SectionWrapper, SectionHeader, fadeUpVariants } from "@/components/ui/SectionWrapper";
import { Card, CardContent } from "@/components/ui/Card";
import { personalInfo } from "@/data/portfolioData";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href:`https://mail.google.com/mail/?view=cm&to=${personalInfo.email}&su=${encodeURIComponent("Let's Work Together")}&body=${encodeURIComponent(`Hi ${personalInfo.name},`)}` ,
    color: "#6c63ff",
  },
  {
    icon: Phone,
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
    color: "#43e97b",
  },
  {
    icon: Github,
    label: "GitHub",
    value: `github.com/${personalInfo.github}`,
    href: personalInfo.profiles.github,
    color: "#f0eeff",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/anirban-baisya",
    href: personalInfo.profiles.linkedin,
    color: "#38bdf8",
  },
  {
    icon: Library,
    label: "Stack Overflow",
    value: "anirban-baisya",
    href: personalInfo.profiles.stackoverflow,
    color: "#ff6584",
  },
];

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    });
  };

  return (
    <SectionWrapper id="contact" altBg>
      <SectionHeader
        label="Let's Connect"
        title="Open to new opportunities"
        subtitle="Whether you have a role, a project, or just want to say hello — reach out!"
      />

      {/* CTA Banner */}
      <motion.div
        variants={fadeUpVariants}
        className="relative rounded-2xl overflow-hidden border border-brand-500/20 bg-gradient-to-br from-brand-500/10 via-transparent to-rose-500/10 p-8 md:p-12 text-center mb-10"
      >
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(108,99,255,0.12) 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(255,101,132,0.1) 0%, transparent 70%)" }} />

        <div className="relative z-10">
          <h3
            className="text-3xl md:text-4xl font-bold text-foreground mb-3"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Let's build something{" "}
            <span style={{
              backgroundImage: "linear-gradient(135deg, #6c63ff, #ff6584)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              great together
            </span>
          </h3>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8 text-[15px] leading-relaxed">
            I'm currently available for freelance work, full-time roles, and interesting collaborations.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={`https://mail.google.com/mail/?view=cm&to=${personalInfo.email}&su=${encodeURIComponent("Let's Work Together")}&body=${encodeURIComponent(`Hi ${personalInfo.name},`)}`} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <Send size={15} /> Send an Email
            </a>
            <button onClick={copyEmail} className="btn-outline">
              {copied ? <Check size={15} className="text-emerald-400" /> : <Copy size={15} />}
              {copied ? "Copied!" : "Copy Email"}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Contact cards grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {contactLinks.map((link, i) => (
          <motion.div key={link.label} variants={fadeUpVariants} custom={i}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-2xl border border-border bg-card hover:border-brand-500/30 hover:-translate-y-1 hover:shadow-glow-sm transition-all duration-300 group"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                style={{ background: `${link.color}15`, border: `1px solid ${link.color}30` }}
              >
                <link.icon size={18} style={{ color: link.color }} />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] text-muted-foreground font-bold tracking-widest uppercase mb-1" style={{ fontFamily: "'Syne', sans-serif" }}>
                  {link.label}
                </p>
                <p className="text-sm text-foreground truncate font-medium">{link.value}</p>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
