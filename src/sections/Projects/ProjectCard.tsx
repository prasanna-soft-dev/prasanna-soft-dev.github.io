import {
  ArrowUpRight,
  ChevronDown,
  ExternalLink,
} from 'lucide-react'
import { useState } from 'react'
import type { Project } from '../../types/portfolio'
import { ArchitectureModal } from '../../components/ui/ArchitectureModal'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false)
  const [architectureOpen, setArchitectureOpen] = useState(false)

  const isLive = project.status === 'LIVE'
  const isUnderDevelopment =
    project.status === 'UNDER_DEVELOPMENT'

  const statusLabel =
    project.status === 'LIVE'
      ? 'Live'
      : project.status === 'UNDER_DEVELOPMENT'
        ? 'Under Development'
        : project.status === 'ARCHIVED'
          ? 'Archived'
          : 'Professional'

  const statusDotClass = isLive
    ? 'bg-[var(--success)]'
    : isUnderDevelopment
      ? 'bg-[var(--warning)]'
      : 'bg-[var(--text-muted)]'

  return (
    <article
      className={`group relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] transition-all duration-500 ${
        expanded
          ? 'border-[var(--border-hover)]'
          : 'hover:border-[var(--border-hover)]'
      }`}
    >
      {/* Subtle hover highlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-[var(--accent)] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-[0.06]"
      />

      <div className="relative p-6 sm:p-8 lg:p-10">
        {/* Header */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="mb-4 flex flex-wrap items-center gap-3">
              {/* Status */}
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-3 py-1.5 text-xs font-medium text-[var(--text-secondary)]">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${statusDotClass}`}
                />

                {statusLabel}
              </span>

              {/* Project type */}
              <span className="text-xs text-[var(--text-muted)]">
                Personal Project
              </span>
            </div>

            <h3 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
              {project.title}
            </h3>

            <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--text-secondary)]">
              {project.shortDescription}
            </p>
          </div>

          {/* Decorative arrow */}
          <div className="hidden shrink-0 sm:block">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-muted)] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-[var(--border-hover)] group-hover:text-[var(--text-primary)]">
              <ArrowUpRight size={20} />
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="mt-8 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-[var(--border)] bg-[var(--background)] px-3 py-1.5 text-xs text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Project actions */}
        {(project.liveUrl || project.githubUrl) && (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="live-demo-button inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
              >
                <ExternalLink size={15} />
                Live Demo
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background)] px-4 py-2.5 text-sm font-medium text-[var(--text-primary)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--border-hover)]"
              >
                <ArrowUpRight size={15} />
                GitHub
              </a>
            )}
          </div>
        )}

        {/* Divider */}
        <div className="my-8 h-px bg-[var(--border)]" />

        {/* Project summary */}
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-[var(--text-muted)]">
              What I'm building
            </p>

            <p className="text-sm leading-7 text-[var(--text-secondary)]">
              {project.description}
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-[var(--text-muted)]">
              Engineering focus
            </p>

            <ul className="space-y-3">
              {project.highlights.slice(0, 4).map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-3 text-sm text-[var(--text-secondary)]"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Expand button */}
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          aria-expanded={expanded}
          className="mt-8 flex w-full items-center justify-between rounded-2xl border border-[var(--border)] bg-[var(--background)] px-5 py-4 text-left transition-colors hover:border-[var(--border-hover)]"
        >
          <span className="text-sm font-medium">
            {expanded
              ? 'Hide engineering details'
              : 'Explore engineering details'}
          </span>

          <ChevronDown
            size={18}
            className={`text-[var(--text-muted)] transition-transform duration-300 ${
              expanded ? 'rotate-180' : ''
            }`}
          />
        </button>

        {/* Expanded content */}
        <div
          className={`grid transition-[grid-template-rows,opacity] duration-500 ${
            expanded
              ? 'grid-rows-[1fr] opacity-100'
              : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <div className="mt-6 grid gap-6 md:grid-cols-2">

              {/* Architecture */}
              {project.architectureData && (
                <div className="md:col-span-2">
                  <div className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--text-muted)]">
                          Architecture
                        </p>

                        <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                          Explore how the frontend, backend, and database interact.
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => setArchitectureOpen(true)}
                        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-sm font-medium text-[var(--text-primary)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--border-hover)] hover:bg-[var(--surface-elevated)]"
                      >
                        Explore architecture
                        <ArrowUpRight size={15} />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Current status */}
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6">
                <p className="mb-5 text-xs font-medium uppercase tracking-[0.18em] text-[var(--text-muted)]">
                  Current status
                </p>

                <div className="space-y-4">
                  {/* Phase */}
                  {project.phase && (
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-sm font-medium">
                        {project.phase}
                      </p>

                      {isUnderDevelopment &&
                        project.progress !== undefined && (
                          <span className="text-sm text-[var(--text-muted)]">
                            {project.progress}%
                          </span>
                        )}
                    </div>
                  )}

                  {/* Progress only for projects under development */}
                  {isUnderDevelopment &&
                    project.progress !== undefined && (
                      <div className="h-1.5 overflow-hidden rounded-full bg-[var(--surface-elevated)]">
                        <div
                          className="h-full rounded-full bg-[var(--accent)] transition-[width] duration-700"
                          style={{
                            width: `${project.progress}%`,
                          }}
                        />
                      </div>
                    )}

                  {/* Status description */}
                  {project.statusDescription && (
                    <p className="text-sm leading-6 text-[var(--text-secondary)]">
                      {project.statusDescription}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Architecture Modal */}
      {project.architectureData && (
        <ArchitectureModal
          architecture={project.architectureData}
          open={architectureOpen}
          onClose={() => setArchitectureOpen(false)}
        />
      )}
    </article>
  )
}