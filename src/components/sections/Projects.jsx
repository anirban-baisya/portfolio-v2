import React from "react";
import { motion } from "framer-motion";
import { Library, Github, CheckCircle2 } from "lucide-react";
import { SectionWrapper, SectionHeader, fadeUpVariants } from "@/components/ui/SectionWrapper";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { projects } from "@/data/portfolioData";

export function Projects() {
  return (
    <SectionWrapper id="projects" altBg>
      <SectionHeader
        label="Portfolio"
        title="Featured Projects"
        subtitle="Handpicked projects showcasing full-stack and DevOps capabilities."
      />

      <div className="grid gap-6">
        {projects.map((project, i) => (
          <motion.div key={i} variants={fadeUpVariants}>
            <Card className="overflow-hidden">
              {/* Top accent */}
              <div
                className="h-1 w-full"
                style={{
                  background: `linear-gradient(90deg, ${project.color}, #ff6584)`,
                }}
              />
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-5">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                      style={{
                        background: `${project.color}15`,
                        border: `1px solid ${project.color}30`,
                      }}
                    >
                      {project.icon}
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-bold tracking-widest uppercase mb-1" style={{ fontFamily: "'Syne', sans-serif" }}>
                        {project.subtitle}
                      </p>
                      <h3 className="text-xl font-bold text-foreground" style={{ fontFamily: "'Syne', sans-serif" }}>
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline text-xs px-4 py-2"
                    >
                      <Github size={13} /> Code
                    </a>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="mb-5 space-y-2.5">
                  {project.highlights.map((h, j) => (
                    <div key={j} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground">{h}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                  {project.tech.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
