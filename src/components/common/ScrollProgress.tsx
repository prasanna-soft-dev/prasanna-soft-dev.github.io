import { useEffect, useState } from 'react'

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight

      if (documentHeight <= 0) {
        setProgress(0)
        return
      }

      const percentage = (scrollTop / documentHeight) * 100

      setProgress(Math.min(100, Math.max(0, percentage)))
    }

    updateProgress()

    window.addEventListener('scroll', updateProgress, {
      passive: true,
    })

    window.addEventListener('resize', updateProgress)

    return () => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[10000] h-[2px] w-full"
    >
      <div
        className="h-full bg-[var(--accent)] transition-[width] duration-100"
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  )
}