import {
  Database,
  Globe,
  Server,
  Workflow,
  X,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import type { ProjectArchitecture } from '../../data/architecture'

interface ArchitectureModalProps {
  architecture: ProjectArchitecture
  open: boolean
  onClose: () => void
}

const nodeIcons = {
  frontend: Globe,
  backend: Server,
  database: Database,
}

export function ArchitectureModal({
  architecture,
  open,
  onClose,
}: ArchitectureModalProps) {
  const [selectedNodeId, setSelectedNodeId] = useState(
    architecture.nodes[0]?.id ?? '',
  )

  useEffect(() => {
    if (!open) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open, onClose])

  useEffect(() => {
    if (open) {
      setSelectedNodeId(
        architecture.nodes[0]?.id ?? '',
      )
    }
  }, [open, architecture])

  if (!open) return null

  const selectedNode =
    architecture.nodes.find(
      (node) => node.id === selectedNodeId,
    ) ?? architecture.nodes[0]

  if (!selectedNode) return null

  return createPortal(
    <div
      className="fixed inset-0 z-[10001] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="architecture-modal-title"
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close architecture"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-black/60 backdrop-blur-md"
      />

      {/* Modal */}
      <div className="relative z-10 flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] shadow-2xl">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-[var(--border)] px-6 py-5 sm:px-8">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <Workflow
                size={15}
                className="text-[var(--accent)]"
              />

              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--text-muted)]">
                Architecture
              </p>
            </div>

            <h3
              id="architecture-modal-title"
              className="text-2xl font-semibold tracking-tight"
            >
              System Architecture
            </h3>

            <p className="mt-1 text-sm text-[var(--text-secondary)]">
              Explore the components and decisions behind the system.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close architecture"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-muted)] transition-all duration-200 hover:border-[var(--border-hover)] hover:bg-[var(--surface-elevated)] hover:text-[var(--text-primary)]"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto px-6 py-6 sm:px-8 sm:py-8">
          {/* Architecture flow */}
          <div className="relative overflow-x-auto pb-3">
            <div className="flex min-w-[680px] items-center justify-center gap-3">
              {architecture.nodes.map((node, index) => {
                const Icon =
                  nodeIcons[
                    node.id as keyof typeof nodeIcons
                  ] ?? Server

                const isSelected =
                  selectedNode.id === node.id

                return (
                  <div
                    key={node.id}
                    className="flex items-center gap-3"
                  >
                    {/* Architecture node */}
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedNodeId(node.id)
                      }
                      aria-pressed={isSelected}
                      className={`group/node flex w-40 flex-col items-center rounded-2xl border p-5 text-center transition-all duration-300 ${
                        isSelected
                          ? 'border-[var(--accent)] bg-[var(--accent-soft)] shadow-[0_0_30px_var(--accent-soft)]'
                          : 'border-[var(--border)] bg-[var(--background)] hover:-translate-y-1 hover:border-[var(--border-hover)]'
                      }`}
                    >
                      <div
                        className={`mb-3 flex h-11 w-11 items-center justify-center rounded-xl border transition-colors duration-300 ${
                          isSelected
                            ? 'border-[var(--accent)] text-[var(--accent)]'
                            : 'border-[var(--border)] text-[var(--text-muted)] group-hover/node:text-[var(--text-primary)]'
                        }`}
                      >
                        <Icon size={20} />
                      </div>

                      <span className="text-sm font-semibold">
                        {node.title}
                      </span>

                      <span className="mt-1 text-xs text-[var(--text-muted)]">
                        {node.subtitle}
                      </span>
                    </button>

                    {/* Connection */}
                    {index <
                      architecture.nodes.length - 1 && (
                      <div className="relative flex w-20 shrink-0 flex-col items-center">
                        <div className="relative flex w-full items-center">
                          <div className="h-px w-full bg-[var(--border)]" />

                          <span className="absolute right-0 h-2 w-2 rotate-45 border-r border-t border-[var(--text-muted)]" />
                        </div>

                        <span className="absolute top-3 whitespace-nowrap text-[10px] font-medium text-[var(--text-muted)]">
                          {
                            architecture.connections[index]
                              ?.label
                          }
                        </span>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Selected component */}
          <div className="mt-8 border-t border-[var(--border)] pt-8">
            <div className="mb-8 flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-[var(--accent)]" />

              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--text-muted)]">
                Component details
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
              {/* Summary */}
              <div>
                <h4 className="text-2xl font-semibold tracking-tight">
                  {selectedNode.title}
                </h4>

                <p className="mt-1 text-sm font-medium text-[var(--accent)]">
                  {selectedNode.subtitle}
                </p>

                <p className="mt-5 text-sm leading-7 text-[var(--text-secondary)]">
                  {selectedNode.purpose}
                </p>

                {/* Technologies */}
                <div className="mt-6">
                  <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-[var(--text-muted)]">
                    Technologies
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {selectedNode.technology.map(
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

              {/* Details */}
              <div className="grid gap-8 sm:grid-cols-2">
                {/* Responsibilities */}
                <div>
                  <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-[var(--text-muted)]">
                    Responsibilities
                  </p>

                  <ul className="space-y-3">
                    {selectedNode.responsibilities.map(
                      (responsibility) => (
                        <li
                          key={responsibility}
                          className="flex items-start gap-3 text-sm leading-6 text-[var(--text-secondary)]"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />

                          <span>{responsibility}</span>
                        </li>
                      ),
                    )}
                  </ul>
                </div>

                {/* Key decisions */}
                <div>
                  <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-[var(--text-muted)]">
                    Key decisions
                  </p>

                  <ul className="space-y-3">
                    {selectedNode.decisions.map(
                      (decision) => (
                        <li
                          key={decision}
                          className="flex items-start gap-3 text-sm leading-6 text-[var(--text-secondary)]"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full border border-[var(--accent)]" />

                          <span>{decision}</span>
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}