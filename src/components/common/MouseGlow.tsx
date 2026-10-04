import { useEffect, useRef } from 'react'

export function MouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const glow = glowRef.current

    if (!glow) {
      return
    }

    const handleMouseMove = (event: MouseEvent) => {
      glow.style.left = `${event.clientX}px`
      glow.style.top = `${event.clientY}px`
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed z-[9999] h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)] opacity-10 blur-3xl"
      style={{
        left: '-400px',
        top: '-400px',
      }}
    />
  )
}