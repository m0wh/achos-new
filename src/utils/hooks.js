import { useState, useEffect } from 'react'

let defaultWidth

if (typeof window !== `undefined`) {
  defaultWidth = window.innerWidth
}

export function useWindowResize () {
  const [width, setWidth] = useState({ windowWidth: defaultWidth })
  const [isResizing, setIsResizing] = useState(false)

  const listener = () => {
    setWidth({ windowWidth: window.innerWidth })
    setIsResizing(true)
    setTimeout(() => setIsResizing(false), 1000)
  }

  useEffect(() => {
    window.addEventListener('resize', listener)
    return () => {
      window.removeEventListener('resize', listener)
    }
  }, [])

  return {
    width,
    isResizing
  }
}
