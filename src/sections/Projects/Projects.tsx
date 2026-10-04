import { Section } from '../../components/common/Section'
import { projects } from '../../data/Projects'
import { ProjectCard } from './ProjectCard'
import { Reveal } from '../../components/common/Reveal'

export function Projects() {
  return (
    <Section id="projects">
      <div className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
        <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
            Featured Work
            </p>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Building beyond the portfolio.
            </h2>
        </div>

        <p className="max-w-md text-sm leading-6 text-[var(--text-muted)]">
            Personal engineering projects built to solve real problems,
            explore system design, and turn ideas into working software.
        </p>
        </div>

      <div className="space-y-6">
        {projects.map((project, index) => (
            <Reveal
            key={project.id}
            delay={index * 100}
            >
            <ProjectCard project={project} />
            </Reveal>
        ))}
        </div>
    </Section>
  )
}