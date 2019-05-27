const transitionDuration = 300
const transitionDelay = 350

export const pageFade = {
  initial: {
    opacity: 0,
    filter: 'blur(100px)'
  },
  enter: {
    opacity: 1,
    transition: { duration: transitionDuration },
    delay: transitionDelay,
    beforeChildren: true,
    filter: 'blur(0px)'
  },
  exit: {
    opacity: 0,
    transition: { duration: transitionDuration },
    filter: 'blur(100px)'
  }
}
