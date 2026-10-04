import type { Project } from '../types/portfolio'
import { dsaTrackerArchitecture } from './architecture'

export const projects: Project[] = [
  {
    id: 'dsa-tracker',
    title: 'DSA Tracker',

    shortDescription:
      'A personal problem-solving tracker built to organize DSA practice, company-wise preparation, and progress in one place.',

    description:
      'A full-stack application built to replace a spreadsheet-based DSA workflow with a dedicated web application for tracking problems, topics, companies, difficulty, and solving status.',

    status: 'LIVE',

    technologies: [
      'Java',
      'Spring Boot',
      'React',
      'MySQL',
      'REST APIs',
    ],

    highlights: [
      'Personal DSA problem tracking',
      'Company-wise problem organization',
      'Topic and difficulty classification',
      'Problem-solving status tracking',
      'Full-stack React and Spring Boot application',
      'Phase 1 completed and deployed',
    ],

    architecture: [
      'React frontend',
      'REST API layer',
      'Spring Boot backend',
      'MySQL database',
    ],

    architectureData: dsaTrackerArchitecture,

    liveUrl:
      'https://developer-platform-qausl5rlb-zero-one4.vercel.app/',

    githubUrl:
      'https://github.com/prasanna-soft-dev/developer-platform',

    phase: 'Phase 1 — Complete',
    progress: 100,

    statusDescription:
      'Phase 1 is complete and the application is deployed. Phase 2 focuses on intelligent problem suggestions and automatic problem-solving time tracking.',
  },

  {
    id: 'live-incident-platform',
    title: 'Live Incident & Operations Platform',

    shortDescription:
      'A production-oriented incident management platform designed around real-time operations, notifications, authentication, and reliable event processing.',

    description:
      'A microservice-based incident management platform inspired by modern incident operations tools. The system manages incidents from creation through investigation, assignment, resolution, and release readiness while supporting real-time updates and event-driven notifications.',

    status: 'UNDER_DEVELOPMENT',

    technologies: [
      'Java',
      'Spring Boot',
      'React',
      'Microservices',
      'MySQL',
      'WebSocket',
      'Kafka',
      'JWT',
      'OAuth2',
    ],

    highlights: [
      'Incident lifecycle management',
      'Role-based access control',
      'Real-time incident and notification updates',
      'Event-driven notification processing',
      'Transactional Outbox pattern',
      'Audit logging and operational visibility',
    ],

    architecture: [
      'React frontend',
      'Microservice-based Spring Boot backend',
      'REST APIs for service communication',
      'MySQL persistence',
      'WebSocket for real-time incident and notification updates',
      'Kafka for asynchronous notification processing',
      'Transactional Outbox for reliable event publishing',
    ],

    phase: 'Phase 1 — Foundation',
    progress: 70,

    statusDescription:
      'The platform is being developed incrementally, with core architecture, service boundaries, authentication, persistence, and foundational infrastructure being established in Phase 1.',
  },
]