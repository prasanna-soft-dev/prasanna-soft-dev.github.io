import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { Section } from '../../components/common/Section'
import { MagneticButton } from '../../components/common/MagneticButton'

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <Section id="hero" className="relative overflow-hidden !pt-32 sm:!pt-40 lg:!pt-44">
      {/* Background detail */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-[var(--accent)] opacity-[0.06] blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div className="flex min-h-[70vh] items-center">
        <div className="w-full">
          {/* Availability */}
          <div className="mb-8 flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-[var(--success)] shadow-[0_0_12px_var(--success)]"
            />

            <span className="text-sm font-medium text-[var(--text-secondary)]">
              Available for opportunities
            </span>
          </div>

          {/* Name */}
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--text-secondary)]">
            Prasanna T
            </p>

          {/* Main heading */}
          <h1 className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[88px]">
            Java Full-Stack
            <br />
            <span className="text-[var(--text-muted)]">
              Developer.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-base leading-7 text-[var(--text-secondary)] sm:text-lg sm:leading-8">
            Building reliable web applications and backend systems
            with{' '}
            <span className="text-[var(--text-primary)]">
              Java, Spring Boot, React, and SQL
            </span>
            . Experienced across education, industrial planning,
            and marketing applications.
          </p>

          {/* Actions */}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <MagneticButton
                type="button"
                onClick={() => scrollToSection('projects')}
                className="group items-center justify-center gap-2 rounded-full bg-[var(--text-primary)] px-6 py-3.5 text-sm font-medium text-[var(--background)] hover:gap-3 hover:opacity-90"
                >
                Explore my work

                <ArrowUpRight
                    size={17}
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
            </MagneticButton>

           <MagneticButton
                type="button"
                onClick={() => scrollToSection('contact')}
                className="items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 py-3.5 text-sm font-medium text-[var(--text-primary)] hover:border-[var(--border-hover)] hover:bg-[var(--surface-elevated)]"
                >
                Let's talk
            </MagneticButton>
          </div>

          {/* Tech line */}
          <div className="mt-16 border-t border-[var(--border)] pt-6">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[var(--text-muted)]">
              <span>Java</span>
              <span className="text-[var(--border-hover)]">•</span>
              <span>Spring Boot</span>
              <span className="text-[var(--border-hover)]">•</span>
              <span>React</span>
              <span className="text-[var(--border-hover)]">•</span>
              <span>REST APIs</span>
              <span className="text-[var(--border-hover)]">•</span>
              <span>SQL</span>
            </div>
          </div>

          {/* Scroll indicator */}
          <button
            type="button"
            onClick={() => scrollToSection('projects')}
            className="mt-14 hidden items-center gap-3 text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)] sm:flex"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)]">
              <ArrowDown size={15} />
            </span>

            Scroll to explore
          </button>
        </div>
      </div>
    </Section>
  )
}