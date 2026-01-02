"use client"

import { toast } from "sonner"

// Re-export toast for convenience
export { toast }

// Simple hook that returns the toast function
export function useToast() {
  return {
    toast,
  }
}
