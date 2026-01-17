export const motionVariants = {
  slideFromTop: {
    initial: { opacity: 0, y: -50 },
    animate: delay => ({
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.35 }
    })
  },
  slideFromRight: {
    initial: { opacity: 0, x: 100 },
    animate: delay => ({
      opacity: 1,
      x: 0,
      transition: { delay, duration: 0.35 }
    })
  },
  slideFromBottom: {
    initial: { opacity: 0, y: 50 },
    animate: delay => ({
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.35 }
    })
  },
  slideFromLeft: {
    initial: { opacity: 0, x: -100 },
    animate: delay => ({
      opacity: 1,
      x: 0,
      transition: { delay, duration: 0.35 }
    })
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: delay => ({
      opacity: 1,
      transition: { delay, duration: 0.35 }
    })
  }
}
