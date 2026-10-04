export interface ExperienceProject {
  id: string
  title: string
  role: string
  period: string
  description: string
  responsibilities: string[]
  technologies: string[]
}

export const experienceProjects: ExperienceProject[] = [
  {
    id: 'education-management',
    title: 'Education Management System',
    role: 'Java Full-Stack Developer',
    period: 'Jul 2025 — Jan 2026',
    description:
      'Enterprise education management application supporting core academic, staff, finance, examination, admission, and task workflows.',
    responsibilities: [
      'Developed and maintained 20+ REST APIs using Java, Spring Boot, Spring Data JPA, and MySQL.',
      'Implemented DTO-based request handling, validation, standardized responses, and global exception handling.',
      'Worked on authentication, authorization, transaction-safe business logic, and database query optimization.',
      'Contributed to React frontend integration and resolved frontend-backend integration issues.',
      'Participated in code reviews, debugging, sprint planning, and production support.',
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'Spring Data JPA',
      'MySQL',
      'React',
      'REST APIs',
      'JWT',
    ],
  },
  {
    id: 'rig-lift',
    title: 'Rig Lift Management System',
    role: 'Java Full-Stack Developer',
    period: 'Oct 2025 — Nov 2025',
    description:
      'Industrial planning application focused on lift calculations, constraint validation, and pre-lift planning checks.',
    responsibilities: [
      'Developed backend business logic for lift planning and pre-lift validation.',
      'Implemented weight calculations, constraint checks, and planning validations.',
      'Built REST APIs and handled business-rule validation and exception scenarios.',
      'Worked with React integration and debugging across frontend and backend layers.',
      'Applied targeted performance improvements to backend operations.',
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'REST APIs',
      'MySQL',
      'React',
    ],
  },
]