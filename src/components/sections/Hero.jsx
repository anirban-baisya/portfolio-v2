import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Library, Download, MapPin } from "lucide-react";
import { personalInfo, stats } from "@/data/portfolioData";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const socialLinks = [
  { icon: Github, href: personalInfo.profiles.github, label: "GitHub" },
  { icon: Linkedin, href: personalInfo.profiles.linkedin, label: "LinkedIn" },
  {
    icon: Library,
    href: personalInfo.profiles.stackoverflow,
    label: "Stack Overflow",
  },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-background"
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-brand-grid opacity-60 pointer-events-none" />

      {/* Glow blobs */}
      <motion.div
        className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(108,99,255,0.12) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,101,132,0.08) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="container mx-auto px-6 max-w-6xl relative z-10 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Availability pill */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-500/30 bg-brand-500/8 text-sm text-brand-400 font-semibold"
              style={{ fontFamily: "'Syne', sans-serif" }}>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Open to opportunities
              <MapPin size={13} className="text-brand-400/70" />
              {personalInfo.location}
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl font-bold leading-[1.0] mb-6 tracking-tight"
          >
            <span className="text-foreground">Anirban</span>
            <br />
            <span
              className="gradient-text"
              style={{
                backgroundImage: "linear-gradient(135deg, #6c63ff 0%, #ff6584 60%, #fbbf24 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Baisya
            </span>
          </motion.h1>

          {/* Role */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-muted-foreground font-medium mb-6"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            {personalInfo.title}{" "}
            <span className="text-brand-400">{personalInfo.subtitle}</span>
          </motion.p>

          {/* Summary */}
          <motion.p
            variants={itemVariants}
            className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-10"
          >
            {personalInfo.summary}
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 mb-14">
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-primary"
            >
              View Projects <ArrowRight size={16} />
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-outline"
            >
              Contact Me
            </button>
            <a
              href={personalInfo.profiles.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <Github size={15} /> GitHub
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-8 mb-10">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p
                  className="text-3xl font-bold text-foreground"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {stat.value}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5 tracking-wide">{stat.label}</p>
              </div>
            ))}
            <div className="h-10 w-px bg-border hidden sm:block" />
            {/* Social icons */}
            <div className="flex items-center gap-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-brand-500 hover:border-brand-500/40 transition-all duration-200"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={17} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span className="text-[10px] text-muted-foreground font-bold tracking-[0.18em] uppercase" style={{ fontFamily: "'Syne', sans-serif" }}>
          Scroll
        </span>
        <motion.div
          className="w-5 h-8 rounded-full border-2 border-border flex items-start justify-center pt-1.5"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-1 h-2 rounded-full bg-brand-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
