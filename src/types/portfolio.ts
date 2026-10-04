import type { ProjectArchitecture } from '../data/architecture'
export type ProjectStatus =
  | 'LIVE'
  | 'UNDER_DEVELOPMENT'
  | 'ARCHIVED'
  | 'PROFESSIONAL'

export interface Project {
  id: string
  title: string
  shortDescription: string
  description: string
  status: ProjectStatus
  technologies: string[]
  highlights: string[]
  architecture: string[]
  architectureData?: ProjectArchitecture
  liveUrl?: string
  githubUrl?: string
  phase?: string
  progress?: number
  statusDescription?: string
}