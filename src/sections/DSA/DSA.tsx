import { ArrowUpRight, Code2 } from 'lucide-react'
import { Section } from '../../components/common/Section'
import { Reveal } from '../../components/common/Reveal'
import { dsaStats, dsaTopics } from '../../data/dsa'

export function DSA() {
  return (
    <Section id="dsa">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        {/* Left */}
        <Reveal>
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
              Problem Solving
            </p>

            <h2 className="max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Thinking through problems,
              <br className="hidden sm:block" />
              one pattern at a time.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-[var(--text-secondary)]">
              I regularly practice data structures and algorithms to
              strengthen problem decomposition, pattern recognition,
              and writing efficient solutions in Java.
            </p>

            <a
              href="https://leetcode.com/u/Prasanna1863/"
              target="_blank"
              rel="noreferrer"
              className="group mt-8 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-sm font-medium transition-all duration-200 hover:border-[var(--border-hover)] hover:bg-[var(--surface-elevated)]"
            >
              <Code2 size={17} />

              View LeetCode Profile

              <ArrowUpRight
                size={16}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </Reveal>

        {/* Right */}
        <Reveal delay={150}>
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
            {/* Stats */}
            <div className="grid gap-px overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--border)] sm:grid-cols-3">
              {dsaStats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[var(--background)] p-5"
                >
                  <p className="text-xs uppercase tracking-[0.15em] text-[var(--text-muted)]">
                    {stat.label}
                  </p>

                  <p className="mt-2 text-sm font-medium text-[var(--text-primary)]">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Topics */}
            <div className="mt-8">
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.18em] text-[var(--text-muted)]">
                Patterns & Topics
              </p>

              <div className="flex flex-wrap gap-2">
                {dsaTopics.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-full border border-[var(--border)] bg-[var(--background)] px-3 py-1.5 text-xs text-[var(--text-secondary)] transition-colors duration-200 hover:border-[var(--border-hover)] hover:text-[var(--text-primary)]"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            {/* Philosophy */}
            <div className="mt-8 border-t border-[var(--border)] pt-6">
              <p className="text-sm leading-7 text-[var(--text-secondary)]">
                The goal is not simply to solve more problems. I focus
                on understanding the underlying pattern, starting with
                a straightforward approach, then improving it through
                complexity analysis and edge-case reasoning.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}