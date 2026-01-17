"use client"
import { motion } from "framer-motion"
import { isValidElement } from "react"
import { motionVariants } from "@/lib/motionVariants"

export function Motion({ children, variants = "slideFromBottom", delay = 0.2 }) {
  if (!isValidElement(children)) return children

  const MotionChild = motion.create(children.type)
  const variant = motionVariants[variants] || motionVariants.slideFromBottom

  return (
    <MotionChild
      {...children.props}
      initial={variant.initial}
      whileInView={variant.animate(delay)}
      viewport={{ once: true, amount: 0.25 }}
    />
  )
}
