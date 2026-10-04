import { ArrowUpRight } from 'lucide-react'
import { Section } from '../../components/common/Section'
import { Reveal } from '../../components/common/Reveal'
import { skillGroups } from '../../data/Skills'

export function Expertise() {
  return (
    <Section id="expertise">
      {/* Section heading */}
      <Reveal>
        <div className="mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
            Engineering Expertise
          </p>

          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              The technologies behind
              <br className="hidden sm:block" />
              the systems I build.
            </h2>

            <p className="max-w-md text-sm leading-6 text-[var(--text-muted)]">
              A practical toolkit built around backend engineering,
              full-stack development, databases, and distributed
              system fundamentals.
            </p>
          </div>
        </div>
      </Reveal>

      {/* Expertise cards */}
      <div className="grid gap-px overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--border)] sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <Reveal
            key={group.id}
            delay={index * 70}
            className="h-full"
          >
            <article className="group relative h-full bg-[var(--surface)] p-6 transition-colors duration-300 hover:bg-[var(--surface-elevated)] sm:p-7">
              <div className="mb-8 flex items-start justify-between">
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--text-muted)]">
                  {group.id}
                </span>

                <ArrowUpRight
                  size={17}
                  className="text-[var(--text-muted)] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--text-primary)]"
                />
              </div>

              <h3 className="text-xl font-semibold tracking-tight">
                {group.title}
              </h3>

              <p className="mt-3 min-h-[72px] text-sm leading-6 text-[var(--text-secondary)]">
                {group.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[var(--border)] bg-[var(--background)] px-3 py-1.5 text-xs text-[var(--text-secondary)] transition-colors duration-200 group-hover:border-[var(--border-hover)] group-hover:text-[var(--text-primary)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}