import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function sliceByDot(paragraph: string) {
  // Split by the dot, keeping track of segments
  let parts = paragraph.split(".")

  if (parts.length < 10) {
    // Less than 4 dots, return the whole paragraph as is
    return { before: paragraph, after: "" }
  }

  // Get the first 4 segments and join them back with dots
  let before = parts.slice(0, 2).join(".") + "."
  // Get the rest and join back
  let after = parts.slice(2, 5).join(".") + "."

  return { before, after }
}
