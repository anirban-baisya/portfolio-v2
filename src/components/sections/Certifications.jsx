import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { SectionWrapper, SectionHeader, fadeUpVariants } from "@/components/ui/SectionWrapper";
import { Card, CardContent } from "@/components/ui/Card";
import { certifications } from "@/data/portfolioData";

export function Certifications() {
  return (
    <SectionWrapper id="certifications">
      <SectionHeader
        label="Credentials"
        title="Certifications"
        subtitle="Formal recognition of skills and expertise."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {certifications.map((cert, i) => (
          <motion.div
            key={i}
            variants={fadeUpVariants}
            custom={i}
            whileHover={{ y: -6 }}
          >
            <Card className="h-full">
              <CardContent className="flex flex-col gap-3 p-5 h-full">
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-2xl">
                  {cert.icon}
                </div>
                <div className="flex-1">
                  <h4
                    className="font-bold text-sm text-foreground leading-snug mb-1"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {cert.name}
                  </h4>
                  <p className="text-xs text-brand-400 font-semibold mb-1">{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground">{cert.date}</p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold mt-auto pt-2 border-t border-border">
                  <Award size={12} />
                  Verified
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
