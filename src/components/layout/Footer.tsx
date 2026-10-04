import {
  ArrowUp,
  ArrowUpRight,
  Code2,
} from 'lucide-react'
import { socialLinks } from '../../data/Social'

const navigation = [
  { label: 'Home', id: 'hero' },
  { label: 'Work', id: 'projects' },
  { label: 'Expertise', id: 'expertise' },
  { label: 'Problem Solving', id: 'dsa' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact', id: 'contact' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <footer className="border-t border-[var(--border)]">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 py-12 lg:flex-row lg:items-start lg:justify-between">
          {/* Identity */}
          <div className="max-w-sm">
            <button
              type="button"
              onClick={() => scrollToSection('hero')}
              className="text-left"
            >
              <p className="text-lg font-semibold tracking-tight">
                Prasanna T
              </p>

              <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
                Java Full-Stack Developer building reliable web
                applications, backend systems, and practical software
                solutions.
              </p>
            </button>

            <div className="mt-5 flex items-center gap-2 text-xs text-[var(--text-muted)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--success)]" />
              Available for opportunities
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-[var(--text-muted)]">
              Navigate
            </p>

            <nav className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3 lg:grid-cols-2">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-[var(--text-muted)]">
              Connect
            </p>

            <div className="flex flex-col items-start gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                >
                  {link.label}

                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-5 border-t border-[var(--border)] py-6 text-xs text-[var(--text-muted)] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span>© {currentYear} Prasanna T</span>

            <span
              aria-hidden="true"
              className="hidden text-[var(--border-hover)] sm:inline"
            >
              •
            </span>

            <span className="inline-flex items-center gap-1.5">
              <Code2 size={13} />
              Built with React
            </span>
          </div>

          <button
            type="button"
            onClick={() => scrollToSection('hero')}
            className="group inline-flex w-fit items-center gap-2 transition-colors hover:text-[var(--text-primary)]"
          >
            Back to top

            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] transition-all duration-200 group-hover:-translate-y-0.5 group-hover:border-[var(--border-hover)]">
              <ArrowUp size={14} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  )
}