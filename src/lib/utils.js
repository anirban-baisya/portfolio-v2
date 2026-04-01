//cn() helper for merging Tailwind classes safely. (ex: cn("p-6 pb-0", className))
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
