import { useState, useEffect } from 'react'

export function useWindowResize () {
  const [width, setWidth] = useState(window.innerWidth)
  const [isResizing, setIsResizing] = useState(false)

  const listener = () => {
    setWidth(window.innerWidth)
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
