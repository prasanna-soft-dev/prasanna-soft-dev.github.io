export interface ArchitectureNode {
  id: string
  title: string
  subtitle: string
  technology: string[]
  purpose: string
  responsibilities: string[]
  decisions: string[]
}

export interface ArchitectureConnection {
  from: string
  to: string
  label: string
}

export interface ProjectArchitecture {
  nodes: ArchitectureNode[]
  connections: ArchitectureConnection[]
}

export const dsaTrackerArchitecture: ProjectArchitecture = {
  nodes: [
    {
      id: 'frontend',
      title: 'React',
      subtitle: 'Frontend',
      technology: ['React', 'JavaScript', 'HTML', 'CSS'],
      purpose:
        'Provides the user interface for managing and reviewing DSA problems.',
      responsibilities: [
        'Problem tracking interface',
        'Company-wise organization',
        'Topic and difficulty filtering',
        'Problem status management',
      ],
      decisions: [
        'React keeps the UI separate from backend business logic.',
        'The frontend communicates with the backend through REST APIs.',
      ],
    },

    {
      id: 'backend',
      title: 'Spring Boot',
      subtitle: 'REST API',
      technology: [
        'Java',
        'Spring Boot',
        'Spring Data JPA',
      ],
      purpose:
        'Handles application business logic and exposes REST APIs to the frontend.',
      responsibilities: [
        'Problem management',
        'Company and topic relationships',
        'Request validation',
        'Business logic',
        'Persistence coordination',
      ],
      decisions: [
        'REST APIs provide a clear frontend-backend boundary.',
        'DTO-based API communication keeps persistence models separate from API contracts.',
      ],
    },

    {
      id: 'database',
      title: 'MySQL',
      subtitle: 'Database',
      technology: ['MySQL', 'SQL'],
      purpose:
        'Persists problems, companies, topics, difficulty, links, and solving status.',
      responsibilities: [
        'Problem persistence',
        'Company persistence',
        'Topic persistence',
        'Relational data management',
      ],
      decisions: [
        'A relational database fits the structured relationships between problems, companies, and topics.',
        'Unique constraints help prevent duplicate company and topic entries.',
      ],
    },
  ],

  connections: [
    {
      from: 'frontend',
      to: 'backend',
      label: 'REST / JSON',
    },
    {
      from: 'backend',
      to: 'database',
      label: 'JPA / SQL',
    },
  ],
}