import React from "react";
import { cn } from "@/lib/utils";

export function Badge({ children, variant = "default", className, style }) {
  const variants = {
    default: "bg-brand-500/10 text-brand-500 border-brand-500/25",
    secondary: "bg-muted text-muted-foreground border-border",
    outline: "bg-transparent text-foreground border-border",
    success: "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
    rose: "bg-rose-500/10 text-rose-400 border-rose-500/25",
    sky: "bg-sky-500/10 text-sky-400 border-sky-500/25",
    amber: "bg-amber-500/10 text-amber-400 border-amber-500/25",
  };

  return (
    <span
      className={cn(
        "tag-base border font-semibold tracking-wide",
        variants[variant] || variants.default,
        className
      )}
      style={style}
    >
      {children}
    </span>
  );
}
