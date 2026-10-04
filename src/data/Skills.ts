export interface SkillGroup {
  id: string
  title: string
  description: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'backend',
    title: 'Backend Engineering',
    description:
      'Building reliable APIs and business logic with a focus on clean architecture, validation, security, and maintainability.',
    skills: [
      'Java',
      'Spring Boot',
      'Spring MVC',
      'Spring Data JPA',
      'Hibernate',
      'REST APIs',
      'Spring Security',
      'JWT',
      'Transaction Management',
      'Exception Handling',
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    description:
      'Developing responsive interfaces and integrating frontend applications with backend services and APIs.',
    skills: [
      'React',
      'JavaScript',
      'HTML',
      'CSS',
      'API Integration',
      'Frontend-Backend Integration',
    ],
  },
  {
    id: 'data',
    title: 'Data & Persistence',
    description:
      'Designing relational data models and improving database access through query optimization and indexing.',
    skills: [
      'MySQL',
      'PostgreSQL',
      'SQL',
      'Database Design',
      'Query Optimization',
      'Indexing',
      'JPA',
      'Hibernate',
    ],
  },
  {
    id: 'architecture',
    title: 'Architecture & Distributed Systems',
    description:
      'Working with service-oriented architectures and exploring patterns for reliable communication between distributed components.',
    skills: [
      'Microservices',
      'API Gateway',
      'Distributed Systems',
      'Event-Driven Architecture',
      'Apache Kafka',
      'WebSocket',
      'Transactional Outbox',
    ],
  },
  {
    id: 'engineering',
    title: 'Engineering Practices',
    description:
      'Applying software engineering fundamentals to write maintainable code and solve problems systematically.',
    skills: [
      'OOP',
      'Data Structures',
      'Algorithms',
      'SOLID Principles',
      'Design Patterns',
      'Multithreading Concepts',
      'Debugging',
      'Production Support',
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Workflow',
    description:
      'Using modern development tools to build, test, debug, document, and collaborate on software projects.',
    skills: [
      'Git',
      'Linux',
      'IntelliJ IDEA',
      'VS Code',
      'Postman',
      'Swagger',
      'Jira',
      'Docker',
      'Cursor',
      'GitHub Copilot',
    ],
  },
]