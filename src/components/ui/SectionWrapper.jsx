import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export const fadeUpVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function SectionWrapper({ id, children, className, altBg = false }) {
  return (
    <section
      id={id}
      className={cn(
        "py-24 relative overflow-hidden",
        altBg ? "bg-muted/30" : "bg-background",
        className
      )}
    >
      <motion.div
        className="container mx-auto px-6 max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {children}
      </motion.div>
    </section>
  );
}

export function SectionHeader({ label, title, subtitle }) {
  return (
    <motion.div variants={fadeUpVariants} className="mb-14">
      <p className="section-label">{label}</p>
      <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-base leading-relaxed max-w-xl">{subtitle}</p>
      )}
      <div className="mt-5 w-12 h-1 rounded-full bg-gradient-to-r from-brand-500 to-rose-400" />
    </motion.div>
  );
}
