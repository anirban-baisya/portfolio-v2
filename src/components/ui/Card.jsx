import React from "react";
import { cn } from "@/lib/utils";

export function Card({ children, className, hover = true, ...props }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-card transition-all duration-300",
        hover && "hover:border-brand-500/30 hover:shadow-glow-sm hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className, ...props }) {
  return (
    <div className={cn("p-6 pb-0", className)} {...props}>
      {children}
    </div>
  );
}

export function CardContent({ children, className, ...props }) {
  return (
    <div className={cn("p-6", className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className, ...props }) {
  return (
    <div className={cn("p-6 pt-0 flex items-center", className)} {...props}>
      {children}
    </div>
  );
}
