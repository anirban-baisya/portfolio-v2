import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { cn } from "@/lib/utils";
import { personalInfo } from "@/data/portfolioData";

const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "github", label: "GitHub" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const SECTION_IDS = NAV_LINKS.map((l) => l.id);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useScrollSpy(SECTION_IDS);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm"
            : "bg-transparent",
        )}
      >
        <div className="container mx-auto px-6 max-w-6xl h-16 flex items-center gap-6">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 mr-auto cursor-pointer group"
          >
            <span
              className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center text-white text-sm font-bold"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              AB
            </span>
            <span
              className="text-foreground font-bold text-base hidden sm:block group-hover:text-brand-500 transition-colors"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Anirban Baisya
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse-slow hidden sm:block" />
          </button>

          {/* Desktop links */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={cn(
                  "nav-link text-xs",
                  activeId === link.id && "active",
                )}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href={`https://mail.google.com/mail/?view=cm&to=${personalInfo.email}&su=${encodeURIComponent("Let's Work Together")}&body=${encodeURIComponent(`Hi ${personalInfo.name},`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex btn-primary text-xs px-4 py-2"
            >
              Hire Me
            </a>
            {/* Mobile burger */}
            <motion.button
              className="lg:hidden w-10 h-10 rounded-xl border border-border bg-card flex items-center justify-center cursor-pointer text-foreground"
              onClick={() => setMenuOpen((p) => !p)}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-40 bg-background/95 backdrop-blur-xl border-b border-border shadow-xl lg:hidden"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => scrollTo(link.id)}
                  className={cn(
                    "text-left py-3 px-4 rounded-xl text-sm font-semibold border-b border-border/50 last:border-0 transition-colors",
                    activeId === link.id
                      ? "text-brand-500"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {link.label}
                </motion.button>
              ))}
              <a
                href={`https://mail.google.com/mail/?view=cm&to=${personalInfo.email}&su=${encodeURIComponent("Let's Work Together")}&body=${encodeURIComponent(`Hi ${personalInfo.name},`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-2 justify-center"
                onClick={() => setMenuOpen(false)}
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
