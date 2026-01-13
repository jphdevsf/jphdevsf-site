// src/components/providers/AnimateOnViewProvider.jsx
"use client"

import { usePathname } from "next/navigation"
import { useAnimateOnView } from "@/hooks/useAnimateOnView"

export default function AnimateOnViewProvider() {
  const pathname = usePathname()
  useAnimateOnView(pathname) // call hook directly at top level

  return null
}
