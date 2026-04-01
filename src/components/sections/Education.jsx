import React from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import { SectionWrapper, SectionHeader, fadeUpVariants } from "@/components/ui/SectionWrapper";
import { Badge } from "@/components/ui/Badge";
import { education } from "@/data/portfolioData";

export function Education() {
  return (
    <SectionWrapper id="education" altBg>
      <SectionHeader
        label="Academic Background"
        title="Education"
        subtitle="The foundation of continuous learning and growth."
      />

      <motion.div variants={fadeUpVariants} className="relative pl-8">
        {/* Timeline line */}
        <div className="absolute left-3 top-3 bottom-3 w-px bg-gradient-to-b from-brand-500 via-brand-500/30 to-transparent" />

        <div className="space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div
                className="absolute -left-8 top-5 w-3.5 h-3.5 rounded-full border-2 border-brand-500 flex items-center justify-center"
                style={{
                  background: i === 0 ? "#6c63ff" : "var(--card)",
                  boxShadow: i === 0 ? "0 0 12px rgba(108,99,255,0.6)" : "none",
                }}
              />

              <div className="rounded-2xl border border-border bg-card p-5 hover:border-brand-500/30 hover:shadow-glow-sm transition-all duration-300 group">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{edu.icon}</span>
                    <div>
                      <h3
                        className="font-bold text-base text-foreground group-hover:text-brand-400 transition-colors"
                        style={{ fontFamily: "'Syne', sans-serif" }}
                      >
                        {edu.institution}
                      </h3>
                      <p className="text-sm text-brand-400 font-semibold mt-0.5">{edu.degree}</p>
                      <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin size={11} /> {edu.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={11} /> {edu.start} – {edu.end}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Badge variant="success" className="flex-shrink-0">
                    {edu.score}
                  </Badge>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
