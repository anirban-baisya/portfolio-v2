import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper, SectionHeader, fadeUpVariants } from "@/components/ui/SectionWrapper";
import { skills } from "@/data/portfolioData";

const ALL_KEY = "All";

export function Skills() {
  const [active, setActive] = useState(ALL_KEY);

  const categories = [ALL_KEY, ...Object.keys(skills)];

  const displayedSkills =
    active === ALL_KEY
      ? Object.entries(skills).flatMap(([cat, { items }]) =>
          items.map((s) => ({ skill: s, cat }))
        )
      : (skills[active]?.items || []).map((s) => ({ skill: s, cat: active }));

  return (
    <SectionWrapper id="skills" altBg>
      <SectionHeader
        label="Expertise"
        title="Skills & Technologies"
        subtitle="A diverse toolkit spanning frontend, DevOps, and cloud infrastructure."
      />

      {/* Category tabs */}
      <motion.div variants={fadeUpVariants} className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => {
          const isActive = active === cat;
          const color = cat === ALL_KEY ? "#6c63ff" : skills[cat]?.color;
          return (
            <motion.button
              key={cat}
              onClick={() => setActive(cat)}
              className="px-4 py-2 rounded-full text-xs font-bold border transition-all duration-200 cursor-pointer"
              style={{
                fontFamily: "'Syne', sans-serif",
                letterSpacing: "0.04em",
                background: isActive ? color : "transparent",
                borderColor: isActive ? color : "var(--border, #e2e8f0)",
                color: isActive ? "#fff" : "var(--muted-foreground)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          );
        })}
      </motion.div>

      {/* Skills grid */}
      <motion.div variants={fadeUpVariants}>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="flex flex-wrap gap-3"
          >
            {displayedSkills.map(({ skill, cat }, i) => {
              const { color, bg, border } = skills[cat] || {
                color: "#6c63ff",
                bg: "rgba(108,99,255,0.1)",
                border: "rgba(108,99,255,0.25)",
              };
              return (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.025, duration: 0.3 }}
                  whileHover={{ y: -4, scale: 1.05 }}
                  className="px-4 py-2 rounded-full text-sm font-semibold cursor-default border"
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    color,
                    background: bg,
                    borderColor: border,
                  }}
                >
                  {skill}
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </SectionWrapper>
  );
}
