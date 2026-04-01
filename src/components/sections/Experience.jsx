import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, CheckCircle2 } from "lucide-react";
import { SectionWrapper, SectionHeader, fadeUpVariants } from "@/components/ui/SectionWrapper";
import { Badge } from "@/components/ui/Badge";
import { workHistory } from "@/data/portfolioData";

export function Experience() {
  const [active, setActive] = useState(0);
  const job = workHistory[active];

  return (
    <SectionWrapper id="experience">
      <SectionHeader
        label="Work History"
        title="Experience"
        subtitle="Building products at scale across frontend and DevOps."
      />

      <motion.div variants={fadeUpVariants}>
        <div className="grid md:grid-cols-[260px_1fr] rounded-2xl border border-border overflow-hidden bg-card">
          {/* Sidebar */}
          <div className="border-b md:border-b-0 md:border-r border-border p-2 flex md:flex-col gap-1">
            {workHistory.map((j, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="w-full text-left rounded-xl px-4 py-4 transition-all duration-200 cursor-pointer relative group"
                style={{
                  background: active === i ? `${j.color}12` : "transparent",
                  borderLeft: active === i ? `3px solid ${j.color}` : "3px solid transparent",
                }}
              >
                <p
                  className="font-bold text-sm mb-1 transition-colors"
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    color: active === i ? j.color : "var(--muted-foreground)",
                  }}
                >
                  {j.company}
                </p>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <CalendarDays size={10} />
                  {j.start} – {j.end}
                </p>
              </button>
            ))}
          </div>

          {/* Content panel */}
          <div className="p-6 md:p-8 min-h-[320px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-2xl">{job.logo}</span>
                      <h3
                        className="text-xl font-bold text-foreground"
                        style={{ fontFamily: "'Syne', sans-serif" }}
                      >
                        {job.role}
                      </h3>
                    </div>
                    <p className="text-sm font-semibold" style={{ color: job.color }}>
                      {job.company}
                    </p>
                  </div>
                  <Badge variant="secondary">
                    <CalendarDays size={11} className="mr-1" />
                    {job.start} – {job.end}
                  </Badge>
                </div>

                <ul className="space-y-4 mb-6">
                  {job.responsibilities.map((r, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 size={16} className="text-brand-400 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground leading-relaxed">{r}</p>
                    </motion.li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
                  {job.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
