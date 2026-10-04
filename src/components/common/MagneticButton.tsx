import {
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type ReactNode,
  useEffect,
  useRef,
} from 'react'

interface MagneticButtonProps {
  children: ReactNode
  strength?: number
  className?: string
  href?: string
  onClick?: () => void
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
  target?: AnchorHTMLAttributes<HTMLAnchorElement>['target']
  rel?: AnchorHTMLAttributes<HTMLAnchorElement>['rel']
}

export function MagneticButton({
  children,
  strength = 0.25,
  className = '',
  href,
  onClick,
  type = 'button',
  target,
  rel,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const button = buttonRef.current
    if (!button) return

    const isTouchDevice = window.matchMedia(
      '(hover: none), (pointer: coarse)',
    ).matches

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (isTouchDevice || reducedMotion) {
      return
    }

    const handleMouseMove = (event: MouseEvent) => {
      const rect = button.getBoundingClientRect()

      const x = event.clientX - (rect.left + rect.width / 2)
      const y = event.clientY - (rect.top + rect.height / 2)

      button.style.transform = `translate(${x * strength}px, ${y * strength}px)`
    }

    const handleMouseLeave = () => {
      button.style.transform = 'translate(0, 0)'
    }

    button.addEventListener('mousemove', handleMouseMove)
    button.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      button.removeEventListener('mousemove', handleMouseMove)
      button.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [strength])

  const classes = `inline-flex transition-transform duration-200 ease-out ${className}`

  if (href) {
    return (
      <a
        ref={buttonRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        className={classes}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      ref={buttonRef as React.RefObject<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      className={classes}
    >
      {children}
    </button>
  )
}