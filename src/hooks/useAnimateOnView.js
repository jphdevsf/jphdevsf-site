import { useEffect } from "react"

/**
 * This function triggers animation on elements once they enter the viewport.
 * - Original animations by the tailwind-animations package (https://github.com/midudev/tailwind-animations/tree/main).
 * - Component author can prefix tailwind-animations utility classes with custom 'onview:' prefix which disables those animations on load.
 * - Once intersection observer detects these elements hitting the viewport, removes the onview: prefix, restoring the original classes and triggers animation.
 */
export function useAnimateOnView(pathname) {
  useEffect(() => {
    const elements = document.querySelectorAll("[class*='onview:']")

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return

          const el = entry.target

          // Find all classes starting with "onview:"
          const onviewClasses = [...el.classList].filter(cls => cls.startsWith("onview:"))

          onviewClasses.forEach(cls => {
            const animationClass = cls.replace("onview:", "")
            el.classList.remove(cls)
            el.classList.add(animationClass)
          })

          observer.unobserve(el)
        })
      },
      { threshold: 0.2 }
    )

    elements.forEach(el => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [pathname])
}
