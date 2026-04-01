import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Globe } from "lucide-react";
import { SectionWrapper, SectionHeader, fadeUpVariants } from "@/components/ui/SectionWrapper";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { personalInfo, achievements } from "@/data/portfolioData";

export function About() {
  const contactItems = [
    { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: Github, label: "GitHub", value: `github.com/${personalInfo.github}`, href: personalInfo.profiles.github },
    { icon: Linkedin, label: "LinkedIn", value: "anirban-baisya", href: personalInfo.profiles.linkedin },
  ];

  return (
    <SectionWrapper id="about">
      <SectionHeader
        label="About Me"
        title="Crafting experiences, shipping products"
        subtitle="Bridging the gap between beautiful UIs and scalable infrastructure."
      />

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Left: bio */}
        <motion.div variants={fadeUpVariants} className="space-y-5">
          <p className="text-muted-foreground leading-relaxed text-[15px]">
            {personalInfo.summary}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {["React.js", "Next.js", "React Native", "Docker", "AWS", "CI/CD"].map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>

          {/* Contact grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {contactItems.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl border border-border bg-card hover:border-brand-500/30 hover:bg-brand-500/5 transition-all duration-200 group"
              >
                <div className="w-8 h-8 rounded-lg bg-brand-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-500/20 transition-colors">
                  <Icon size={14} className="text-brand-400" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] text-muted-foreground font-bold tracking-widest uppercase mb-0.5" style={{ fontFamily: "'Syne', sans-serif" }}>{label}</p>
                  <p className="text-xs text-foreground truncate">{value}</p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right: achievements + languages */}
        <motion.div variants={fadeUpVariants} className="space-y-4">
          {achievements.map((a, i) => (
            <Card key={i}>
              <CardContent className="flex items-start gap-4 py-5">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: `${a.color}18`, border: `1px solid ${a.color}30` }}
                >
                  {a.icon}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mt-1">{a.text}</p>
              </CardContent>
            </Card>
          ))}

          {/* Languages */}
          <Card>
            <CardContent className="flex items-center gap-4 py-5">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0 bg-brand-500/10 border border-brand-500/20">
                🌐
              </div>
              <div>
                <p className="text-[10px] text-muted-foreground font-bold tracking-widest uppercase mb-2" style={{ fontFamily: "'Syne', sans-serif" }}>Languages</p>
                <div className="flex gap-2">
                  <Badge variant="success">English</Badge>
                  <Badge variant="sky">Hindi</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
