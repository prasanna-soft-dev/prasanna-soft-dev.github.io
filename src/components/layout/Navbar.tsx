import { Menu, Moon, Sun, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import { useTheme } from '../../hooks/useTheme'

const navigation = [
  { label: 'Home', id: 'hero' },
  { label: 'Work', id: 'projects' },
  { label: 'Expertise', id: 'expertise' },
  { label: 'Problem Solving', id: 'dsa' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact', id: 'contact' },
]



export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
    

  const { theme, toggleTheme } = useTheme()

  const activeSection = useScrollSpy(
    navigation.map((item) => item.id),
  )

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])



  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    })

    setMobileOpen(false)
  }

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-5 sm:px-6 lg:px-8">
          {/* Logo */}
          <button
            type="button"
            onClick={() => scrollToSection('hero')}
            className="group flex items-center gap-2"
            aria-label="Go to homepage"
          >
            <span className="text-lg font-semibold tracking-tight">
              PT
            </span>

            <span className="hidden text-sm text-[var(--text-muted)] transition-colors group-hover:text-[var(--text-secondary)] sm:block">
              Prasanna T
            </span>
          </button>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navigation.map((item) => {
              const isActive = activeSection === item.id

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className={`relative rounded-full px-3 py-2 text-sm transition-colors ${
                    isActive
                      ? 'text-[var(--text-primary)]'
                      : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {item.label}

                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[var(--accent)]" />
                  )}
                </button>
              )
            })}
          </div>

          {/* Desktop actions */}
          <div className="hidden items-center gap-2 md:flex">
            <button
                type="button"
                onClick={toggleTheme}
                aria-label={`Switch to ${
                    theme === 'dark' ? 'light' : 'dark'
                } theme`}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-secondary)] transition-colors hover:border-[var(--border-hover)] hover:text-[var(--text-primary)]"
                >
                {theme === 'dark' ? (
                    <Sun size={17} />
                ) : (
                    <Moon size={17} />
                )}
            </button>

            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="rounded-full bg-[var(--text-primary)] px-4 py-2 text-sm font-medium text-[var(--background)] transition-opacity hover:opacity-85"
            >
              Let's talk
            </button>
          </div>

          {/* Mobile actions */}
          <div className="flex items-center gap-2 md:hidden">
            <button
                type="button"
                onClick={toggleTheme}
                className="flex h-9 w-9 items-center justify-center rounded-full text-[var(--text-muted)]"
                aria-label={`Switch to ${
                    theme === 'dark' ? 'light' : 'dark'
                } theme`}
                >
                {theme === 'dark' ? (
                    <Sun size={18} />
                ) : (
                    <Moon size={18} />
                )}
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen((value) => !value)}
              className="flex h-9 w-9 items-center justify-center rounded-full text-[var(--text-primary)]"
              aria-label={
                mobileOpen
                  ? 'Close navigation menu'
                  : 'Open navigation menu'
              }
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[var(--background)] pt-20 md:hidden">
          <div className="mx-auto flex h-full max-w-[1200px] flex-col px-5 py-8">
            <div className="flex flex-col">
              {navigation.map((item, index) => {
                const isActive = activeSection === item.id

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                    className="flex items-center justify-between border-b border-[var(--border)] py-5 text-left"
                  >
                    <span
                      className={`text-2xl font-medium ${
                        isActive
                          ? 'text-[var(--text-primary)]'
                          : 'text-[var(--text-muted)]'
                      }`}
                    >
                      {item.label}
                    </span>

                    <span className="text-sm text-[var(--text-muted)]">
                      0{index + 1}
                    </span>
                  </button>
                )
              })}
            </div>

            <div className="mt-auto">
              <p className="mb-3 text-sm text-[var(--text-muted)]">
                Available for opportunities
              </p>

              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className="w-full rounded-full bg-[var(--text-primary)] py-3 text-sm font-medium text-[var(--background)]"
              >
                Let's talk
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}