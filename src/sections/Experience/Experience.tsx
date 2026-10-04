import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { Section } from '../../components/common/Section'
import { Reveal } from '../../components/common/Reveal'
import { experienceProjects } from '../../data/Experience'

export function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>(
    experienceProjects[0]?.id ?? null,
  )

  const toggleProject = (id: string) => {
    setExpandedId((current) => (current === id ? null : id))
  }

  return (
    <Section id="experience">
      {/* Section heading */}
      <Reveal>
        <div className="mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
            Professional Experience
          </p>

          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                Building software
                <br className="hidden sm:block" />
                in the real world.
              </h2>
            </div>

            <div className="max-w-md">
              <p className="text-sm leading-6 text-[var(--text-muted)]">
                Experience across enterprise applications, backend
                systems, frontend integration, and production
                troubleshooting.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Company header */}
      <Reveal delay={100}>
        <div className="mb-8 flex flex-col gap-2 border-b border-[var(--border)] pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xl font-semibold">
              Dorustree
            </p>

            <p className="mt-1 text-sm text-[var(--text-muted)]">
              Software Developer Trainee
            </p>
          </div>

          <p className="text-sm text-[var(--text-muted)]">
            Jun 2025 — Jun 2026
          </p>
        </div>
      </Reveal>

      {/* Experience timeline */}
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute bottom-6 left-[7px] top-6 hidden w-px bg-[var(--border)] sm:block"
        />

        <div className="space-y-5">
          {experienceProjects.map((project, index) => {
            const expanded = expandedId === project.id

            return (
              <Reveal
                key={project.id}
                delay={index * 100}
              >
                <article className="relative sm:pl-10">
                  {/* Timeline dot */}
                  <span
                    aria-hidden="true"
                    className={`absolute left-0 top-7 hidden h-[15px] w-[15px] rounded-full border-4 border-[var(--background)] sm:block ${
                      expanded
                        ? 'bg-[var(--accent)]'
                        : 'bg-[var(--border-hover)]'
                    }`}
                  />

                  <div
                    className={`rounded-3xl border bg-[var(--surface)] transition-all duration-300 ${
                      expanded
                        ? 'border-[var(--border-hover)]'
                        : 'border-[var(--border)] hover:border-[var(--border-hover)]'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleProject(project.id)}
                      aria-expanded={expanded}
                      className="w-full p-6 text-left sm:p-7"
                    >
                      <div className="flex items-start justify-between gap-5">
                        <div>
                          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                            <span className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--accent)]">
                              Project {index + 1}
                            </span>

                            <span className="text-xs text-[var(--text-muted)]">
                              {project.period}
                            </span>
                          </div>

                          <h3 className="mt-3 text-xl font-semibold tracking-tight sm:text-2xl">
                            {project.title}
                          </h3>

                          <p className="mt-1 text-sm text-[var(--text-muted)]">
                            {project.role}
                          </p>
                        </div>

                        <span
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-muted)] transition-transform duration-300 ${
                            expanded ? 'rotate-180' : ''
                          }`}
                        >
                          <ChevronDown size={17} />
                        </span>
                      </div>

                      <p className="mt-5 max-w-3xl text-sm leading-6 text-[var(--text-secondary)]">
                        {project.description}
                      </p>
                    </button>

                    <div
                      className={`grid transition-[grid-template-rows,opacity] duration-400 ${
                        expanded
                          ? 'grid-rows-[1fr] opacity-100'
                          : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="border-t border-[var(--border)] px-6 pb-7 pt-6 sm:px-7">
                          <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">
                            <div>
                              <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-[var(--text-muted)]">
                                Contributions
                              </p>

                              <ul className="space-y-3">
                                {project.responsibilities.map(
                                  (responsibility) => (
                                    <li
                                      key={responsibility}
                                      className="flex items-start gap-3 text-sm leading-6 text-[var(--text-secondary)]"
                                    >
                                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                                      <span>{responsibility}</span>
                                    </li>
                                  ),
                                )}
                              </ul>
                            </div>

                            <div>
                              <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-[var(--text-muted)]">
                                Technologies
                              </p>

                              <div className="flex flex-wrap gap-2">
                                {project.technologies.map(
                                  (technology) => (
                                    <span
                                      key={technology}
                                      className="rounded-full border border-[var(--border)] bg-[var(--background)] px-3 py-1.5 text-xs text-[var(--text-secondary)]"
                                    >
                                      {technology}
                                    </span>
                                  ),
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </Section>
  )
}