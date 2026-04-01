import React from "react";
import { cn } from "@/lib/utils";

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  asChild = false,
  ...props
}) {
  const variants = {
    primary: "btn-primary",
    outline: "btn-outline",
    ghost: "inline-flex items-center gap-2 px-4 py-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200 text-sm font-semibold cursor-pointer",
    icon: "inline-flex items-center justify-center w-10 h-10 rounded-xl border border-border bg-card hover:border-brand-500/40 hover:text-brand-500 transition-all duration-200 cursor-pointer",
  };

  const sizes = {
    sm: "text-xs px-4 py-2",
    md: "",
    lg: "text-base px-8 py-4",
  };

  const Tag = asChild ? "span" : "button";

  return (
    <Tag
      className={cn(variants[variant], size !== "md" && sizes[size], className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
