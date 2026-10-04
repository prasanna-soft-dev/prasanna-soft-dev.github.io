# Prasanna T — Modern Interactive Portfolio

## 1. Vision

Build a modern, elegant, interactive personal portfolio for a Backend Software Engineer.

The portfolio should communicate:

* Backend engineering expertise
* Real professional experience
* Personal engineering projects
* System-design thinking
* Problem-solving / DSA
* Engineering curiosity
* Clean UI and frontend implementation ability

The portfolio itself should demonstrate engineering quality.

### Design principle

> **Minimal at first glance. Interactive when explored.**

The site should feel:

* Elegant
* Modern
* Professional
* Technical
* Clean
* Fast
* Responsive
* User-friendly
* Slightly futuristic
* Never cluttered
* Never gimmicky

Animations and interactions should have a purpose.

---

# 2. Overall Experience

The portfolio should feel more like an interactive engineering product than a traditional developer resume website.

The user should be able to:

1. Understand who I am within a few seconds.
2. See my primary skills.
3. Explore my personal project.
4. Understand my professional experience.
5. Visit my LeetCode, GitHub and LinkedIn profiles.
6. Contact me directly through WhatsApp or email.
7. Explore deeper technical information if interested.

---

# 3. Design Language

## Visual style

Use a restrained modern design system.

### Characteristics

* Large typography
* Generous whitespace
* Subtle borders
* Soft surface separation
* Rounded but not excessively rounded components
* Minimal shadows
* Subtle gradients
* Fine grid/noise details where appropriate
* Strong typography hierarchy
* Smooth transitions
* Consistent spacing
* Consistent interaction patterns

Avoid:

* Excessive glassmorphism
* Excessive gradients
* Huge glowing text
* Excessive neon colors
* Excessive cards
* Excessive animations
* Random floating objects
* Generic developer illustrations
* Stock images
* "AI generated" looking UI

---

# 4. Color System

Use a theme-based design system rather than hardcoding colors throughout components.

Support:

* Dark theme
* Light theme

Primary theme should be dark because it fits the technical/engineering aesthetic.

### Color roles

```text
Background
Surface
Surface elevated
Border
Primary text
Secondary text
Muted text
Accent
Accent subtle
Success
Warning
Error
```

The accent should be used primarily for:

* Interactive elements
* Active navigation
* Focus states
* Important status indicators
* Selected items
* Small visual highlights

Do not use the accent as the background for everything.

---

# 5. Typography

Typography should communicate hierarchy immediately.

### Hero

Very large:

```text
Backend
Software Engineer
```

or an equivalent strong headline.

### Section heading

```text
Featured Work
Engineering Expertise
Experience
Problem Solving
Let's Connect
```

### Body

Short paragraphs with comfortable line height.

### Technical information

Use a slightly more technical style for:

* Technologies
* Architecture labels
* Project metadata
* Status indicators

Keep typography consistent across every section.

---

# 6. Global Navigation

## Desktop

Create a floating/sticky navigation bar.

Example:

```text
┌──────────────────────────────────────────────┐
│ PT       Work   Expertise   Experience   ●  │
└──────────────────────────────────────────────┘
```

Features:

* Sticky navigation
* Transparent/blurred initial state
* Becomes slightly more visible after scrolling
* Active section indicator
* Smooth scrolling
* Mobile navigation
* Theme toggle
* Contact shortcut

Do not make the navbar occupy excessive space.

---

# 7. Modern Navigation Interaction

Navigation should not simply jump between sections.

Implement:

### Scroll spy

As the user scrolls:

```text
Work
Expertise
Experience
Problem Solving
Contact
```

the active section changes automatically.

### Smooth scrolling

Navigation should smoothly move to sections.

### Active indicator

Use a subtle animated indicator underneath or beside the active navigation item.

### Mobile navigation

On mobile:

```text
☰
```

opens a clean navigation panel.

The panel should animate smoothly and close automatically after selecting a section.

---

# 8. Mouse Tracking

Implement subtle mouse tracking across the site.

## Cursor spotlight

A soft radial spotlight follows the mouse.

It should be extremely subtle.

Example concept:

```text
        mouse
          ↓
     soft light area
          ◯
```

The spotlight should reveal the background rather than dominate it.

### Important

Disable or reduce this behavior for:

* Touch devices
* Reduced-motion users

---

# 9. Cursor Interaction

Use a custom cursor enhancement on desktop.

Possible states:

```text
Normal
Hover link
Hover project
Hover interactive element
```

For example:

* Normal → small dot
* Interactive → subtle expansion
* Project → cursor may show "View"
* External link → subtle arrow

Do not completely replace the browser cursor if it harms usability.

The native cursor should remain usable/fallback-safe.

---

# 10. Page Intro / Loading

Avoid a long cinematic loading screen.

If an intro is used, it should be extremely short.

Possible idea:

```text
PT
```

followed by the page appearing.

Target:

```text
< 700ms perceived interaction
```

The site should remain usable even if animations are disabled.

---

# 11. Hero Section

The Hero is the first major experience.

## Content

```text
PRASANNA T

Backend Software Engineer

Java · Spring Boot · REST APIs · SQL

Building reliable backend systems
and exploring distributed systems,
system design and scalable architecture.

[ Explore my work ]
[ Contact me ]
```

Also display:

```text
● Available for opportunities
```

if appropriate.

---

# 12. Hero Interaction

The hero should contain subtle depth.

Possible interactions:

### Mouse parallax

Background elements move slightly based on mouse position.

Example:

```text
Mouse →
       background grid moves slightly
       decorative elements move slightly
       content remains stable
```

Do not move the actual text excessively.

### Animated grid

A very subtle grid or dot pattern can respond to the pointer.

### Accent glow

A soft local glow can follow the mouse.

### Scroll cue

At the bottom:

```text
↓ Scroll to explore
```

It should disappear naturally once the user starts scrolling.

---

# 13. Hero Quick Stats

Instead of generic skill percentages, show meaningful information.

Example:

```text
Java        Backend
Spring      APIs
SQL         Databases
DSA         Problem Solving
```

Potentially:

```text
1+ Years
Professional Experience
```

but only where accurate and appropriate.

Do not use fake metrics.

---

# 14. Featured Work

This is the most important section after the Hero.

The primary project:

# Live Incident & Operations Platform

Status:

```text
● Under Development
```

This is a personal project and can eventually contain:

* GitHub
* Live deployment
* Architecture
* Documentation
* Screenshots

---

# 15. Featured Project Card

The project should not be a generic card.

Use an interactive expandable project panel.

Initial state:

```text
LIVE INCIDENT & OPERATIONS PLATFORM

Under Development

Production-oriented incident management platform

Java
Spring Boot
Kafka
React
MySQL
WebSocket

Explore →
```

On interaction, expand into:

```text
Overview
Architecture
Features
Engineering Decisions
Technology
Development Progress
```

---

# 16. Project Hover Interaction

On desktop:

* Card follows pointer subtly
* Border responds to pointer position
* Accent follows pointer position
* Small tilt may be used

Important:

The tilt should be extremely small.

Approximately:

```text
1–3 degrees
```

Not:

```text
3D gaming card
```

The project should remain readable.

---

# 17. Project Spotlight Effect

When the pointer moves over the project:

```text
      pointer
         ↓
   ┌───────────────┐
   │               │
   │   PROJECT     │
   │               │
   └───────────────┘
```

A subtle radial highlight follows the pointer.

This interaction should be reused across selected interactive components so the site feels consistent.

---

# 18. Project Detail Page / Panel

The Incident Platform should eventually have a dedicated route or detailed project view.

Possible structure:

```text
Project Overview
        ↓
Problem
        ↓
Requirements
        ↓
Architecture
        ↓
Authentication
        ↓
Incident Lifecycle
        ↓
Notification Architecture
        ↓
Database Design
        ↓
Failure Handling
        ↓
Engineering Decisions
        ↓
Development Progress
```

This becomes the strongest technical showcase of the portfolio.

---

# 19. Architecture Visualization

This is an important differentiator.

Instead of simply writing:

```text
Spring Boot
Kafka
Redis
WebSocket
```

show an interactive architecture diagram.

Example:

```text
                ┌─────────────┐
                │   React     │
                └──────┬──────┘
                       │
                ┌──────▼──────┐
                │ API Gateway │
                └──────┬──────┘
                       │
        ┌──────────────┼──────────────┐
        ↓              ↓              ↓
      Auth         Incident       Notification
        │              │              │
        │              │           Kafka
        │              │              │
        └──────────────┼──────────────┘
                       ↓
                    MySQL
```

Nodes should be interactive.

Clicking a node can show:

```text
Purpose
Technology
Responsibilities
Key decisions
```

---

# 20. Engineering Expertise

Do not create a giant wall of 30+ technologies.

Group expertise into meaningful categories.

### Backend

```text
Java
Spring Boot
Spring MVC
Spring Data JPA
Spring Security
REST APIs
Hibernate
```

### Data

```text
MySQL
PostgreSQL
SQL
Database Design
Query Optimization
```

### Distributed Systems

```text
Kafka
Event-driven architecture
WebSocket
Transactional Outbox
API Gateway
Microservices
```

### Engineering

```text
Docker
Git
CI/CD
Swagger
Postman
Jira
```

---

# 21. Expertise Interaction

Each category should be expandable.

Example:

```text
Backend
────────────
Java
Spring Boot
REST APIs
Security

[Explore]
```

On click:

```text
Backend Engineering

Java
├── OOP
├── Collections
├── Streams
├── Concurrency
└── JVM fundamentals

Spring Boot
├── REST
├── Security
├── JPA
└── Dependency Injection
```

This demonstrates knowledge without overwhelming the initial page.

---

# 22. Professional Experience

This section should be below personal work.

Professional projects should NOT have GitHub/demo links because they were developed as part of employment.

Structure:

```text
Professional Experience

Software Developer
Dorustree

Selected Work

Education Management System
Sojern Travel Marketing Platform
Rig Lift Management System
```

---

# 23. Professional Project Interaction

Each professional project can expand.

Initial:

```text
Education Management System
Java · Spring Boot · MySQL

Expand →
```

Expanded:

```text
Role
Technology
Responsibilities
Modules
Engineering contributions
Impact
```

Do not claim publicly available source code.

Optional label:

```text
Professional project
Source code not publicly available
```

---

# 24. Experience Timeline

Use a vertical interactive timeline.

Example:

```text
2024
 │
 ├── B.E. Computer Science
 │
2025
 │
 ├── Software Development
 │
2026
 │
 ├── Backend Engineering
 │
 └── Personal Systems Project
```

Hover/clicking a timeline item reveals details.

Keep the timeline factual.

---

# 25. DSA / Problem Solving

Create a dedicated Problem Solving section.

The goal is not to claim that solving LeetCode makes someone a better engineer.

Instead demonstrate consistency and interest in algorithms.

Possible design:

```text
PROBLEM SOLVING

LeetCode

Data Structures
Algorithms
Pattern Recognition
Optimization

[ View LeetCode Profile ]
```

If live API integration is added later, display actual public profile data.

Do not hardcode numbers that can become outdated.

---

# 26. LeetCode Visualization

Potential future features:

* Problems solved
* Difficulty breakdown
* Recent activity
* Topic distribution
* Streak if publicly available

Visualize with clean charts.

Avoid turning the portfolio into a dashboard.

The visualization should remain secondary to the profile link.

---

# 27. Social Profiles

Provide direct links to:

```text
GitHub
LinkedIn
LeetCode
```

Each should have:

* Icon
* Name
* Short description
* External-link indicator

Example:

```text
GitHub
Explore my code →

LinkedIn
Connect professionally →

LeetCode
Explore my problem solving →
```

---

# 28. Contact Section

Make contacting me extremely easy.

Primary actions:

```text
WhatsApp
Email
LinkedIn
```

Potential layout:

```text
Let's talk.

Have an opportunity or want to discuss
backend engineering?

[ WhatsApp Me ]
[ Email Me ]

LinkedIn · GitHub · LeetCode
```

---

# 29. WhatsApp

Use a direct WhatsApp link.

Do not create an unnecessary contact form.

Optional predefined message:

```text
Hi Prasanna, I came across your portfolio and would like to discuss an opportunity.
```

The message should remain editable by the user.

---

# 30. Email

Use a `mailto:` action.

Possible predefined subject:

```text
Backend Engineering Opportunity
```

Do not require users to fill out a custom form.

---

# 31. Contact Microinteraction

When hovering a contact button:

```text
Email
  ↓
small arrow movement
```

WhatsApp:

```text
WhatsApp
    ↗
```

LinkedIn:

```text
LinkedIn
    ↗
```

Keep these interactions consistent.

---

# 32. Scroll Experience

Scrolling should feel smooth but natural.

Use:

* Section reveal
* Subtle fade
* Small translation
* Staggered appearance for groups
* Active navigation state
* Progress indicator where useful

Avoid:

* Long scroll-jacking
* Horizontal scrolling for the entire site
* Full-screen forced animations
* Animations that prevent immediate reading

---

# 33. Section Reveal

When a section enters the viewport:

```text
opacity: 0 → 1
translateY: 12px → 0
```

Keep animations around:

```text
300–600ms
```

with natural easing.

Respect:

```text
prefers-reduced-motion
```

---

# 34. Scroll Progress

A very thin progress indicator can appear near the top of the page.

Example:

```text
━━━━━━━━━━━━━━
```

It shows how far the user has explored.

Keep it extremely subtle.

---

# 35. Section Transitions

Sections should visually flow into each other.

Example:

```text
Hero
  ↓
Featured Work
  ↓
Expertise
  ↓
Problem Solving
  ↓
Experience
  ↓
Contact
```

Do not put a huge boxed container around every section.

Use whitespace and typography to establish hierarchy.

---

# 36. Interactive Background

Use one consistent background language throughout the site.

Possible elements:

* Fine grid
* Small dots
* Very subtle gradient
* Mouse spotlight

The background should not change completely between sections.

Consistency is more important than visual complexity.

---

# 37. Magnetic Buttons

Selected CTA buttons can have subtle magnetic behavior.

Example:

```text
          mouse
            ↓

      ┌─────────────┐
      │ Explore Work│
      └─────────────┘
```

The button moves slightly toward the cursor.

Limit this to:

* Hero CTA
* Important project CTA
* Contact CTA

Do not apply it to every button.

---

# 38. Interactive Tech Badges

Technology badges can respond to hover.

Example:

```text
[ Java ]

hover

[ Java ] ← subtle accent
     ↓
Backend language
```

The badge should not become oversized or distracting.

---

# 39. External Link Behavior

External links should clearly communicate that they leave the portfolio.

Use:

```text
LinkedIn ↗
GitHub ↗
LeetCode ↗
```

Open external profiles in a new tab.

---

# 40. Responsive Design

Desktop is not the only target.

Support:

```text
320px+
768px+
1024px+
1440px+
```

Mobile should feel intentionally designed, not like a compressed desktop page.

---

# 41. Mobile Interaction

On mobile:

Remove or reduce:

* Mouse tracking
* Cursor effects
* Magnetic buttons
* Heavy parallax

Keep:

* Tap interactions
* Expandable project cards
* Smooth navigation
* Section reveals
* Theme switching
* Clear CTA buttons

Touch targets should be comfortably tappable.

---

# 42. Accessibility

The portfolio must remain usable without animations.

Implement:

* Semantic HTML
* Keyboard navigation
* Visible focus states
* Accessible buttons
* Accessible links
* ARIA labels where necessary
* Reduced-motion support
* Sufficient color contrast
* Proper heading hierarchy

Never make an interaction depend exclusively on hover.

---

# 43. Performance

The portfolio should be fast.

Priorities:

1. Minimal JavaScript
2. Lazy-load non-critical content
3. Optimize images
4. Avoid unnecessary libraries
5. Avoid huge animation libraries where CSS is sufficient
6. Code splitting where useful
7. Avoid blocking resources
8. Optimize fonts
9. Keep animations GPU-friendly
10. Avoid continuous expensive mouse calculations

Mouse tracking should use:

```text
requestAnimationFrame
```

rather than causing excessive React state updates.

---

# 44. Animation Architecture

Animations should not be implemented randomly inside components.

Create reusable animation utilities/components.

Example:

```text
animations/
├── FadeIn
├── Reveal
├── Magnetic
├── MouseGlow
├── Parallax
└── Stagger
```

This keeps animation behavior consistent.

---

# 45. Component Architecture

Use reusable components.

```text
components/
├── common/
│   ├── Button
│   ├── Section
│   ├── Container
│   └── ExternalLink
│
├── navigation/
│   ├── Navbar
│   ├── MobileMenu
│   └── ScrollProgress
│
├── effects/
│   ├── MouseGlow
│   ├── Magnetic
│   ├── Reveal
│   └── Parallax
│
├── projects/
│   ├── ProjectCard
│   ├── ProjectDetails
│   └── ArchitectureDiagram
│
└── social/
    └── SocialLink
```

---

# 46. Data-Driven Portfolio

Portfolio information should live outside UI components.

Example:

```text
data/
├── projects.ts
├── experience.ts
├── skills.ts
├── social.ts
└── navigation.ts
```

This allows content to change without rewriting components.

---

# 47. Project Status System

Projects should have explicit statuses.

```text
LIVE
UNDER DEVELOPMENT
ARCHIVED
PROFESSIONAL
```

Each status should have a consistent visual treatment.

Example:

```text
● LIVE

● UNDER DEVELOPMENT

● PROFESSIONAL
```

---

# 48. Project Technology Display

Technology lists should be consistent everywhere.

Example:

```text
Java
Spring Boot
MySQL
Kafka
React
```

Use the same badge component throughout the portfolio.

---

# 49. Theme Switching

Support:

```text
Dark
Light
System
```

Potential UI:

```text
☾
```

Click:

```text
Dark
Light
System
```

Persist the preference.

---

# 50. Keyboard Experience

Add useful keyboard behavior where appropriate.

Examples:

```text
Esc
```

closes mobile/expanded overlays.

Potential future shortcut:

```text
/
```

focuses navigation/search if search is eventually introduced.

Do not add keyboard shortcuts merely for novelty.

---

# 51. Easter Eggs

Only add subtle engineering-themed easter eggs after the core portfolio is complete.

Potential examples:

```text
Konami-style interaction
```

or

```text
terminal-style hidden interaction
```

But these should never interfere with normal navigation.

---

# 52. Error / Empty States

Any dynamic information must have graceful fallbacks.

For example:

If LeetCode data cannot load:

```text
Problem-solving profile

View my LeetCode profile →
```

The portfolio must never show:

```text
undefined
NaN
Loading forever
```

---

# 53. SEO

Implement:

* Page title
* Meta description
* Open Graph metadata
* Twitter/X metadata
* Semantic headings
* Canonical URL
* Favicon
* Structured metadata where appropriate

Example title:

```text
Prasanna T — Backend Software Engineer
```

---

# 54. Deployment

The portfolio should eventually be deployed publicly.

Possible options:

```text
Vercel
Netlify
GitHub Pages
```

The final deployment should support:

* HTTPS
* Custom domain if available
* SPA routing
* Production build
* Environment configuration

---

# 55. Analytics

Analytics should be optional.

If implemented, use privacy-conscious analytics.

Track only useful events such as:

```text
Project opened
GitHub clicked
LinkedIn clicked
LeetCode clicked
WhatsApp clicked
Email clicked
```

Do not collect unnecessary personal information.

---

# 56. Content Rules

The portfolio must remain truthful.

Never invent:

* Experience
* Metrics
* Projects
* Technologies
* Client information
* Public deployments
* GitHub repositories
* Performance numbers

Professional projects should clearly remain professional work.

Personal projects should clearly be identified as personal projects.

---

# 57. Professional Experience Rules

Professional projects:

```text
Education Management System
Sojern Travel Marketing Platform
Rig Lift Management System
```

will be presented under:

```text
Professional Experience
```

They should not have:

```text
GitHub
Live Demo
Source Code
```

unless a genuinely public link exists.

---

# 58. Personal Project Rules

The Live Incident & Operations Platform is the primary personal project.

It should eventually support:

```text
GitHub
Live Demo
Architecture
Documentation
Screenshots
Technical decisions
Development progress
```

Until deployed:

```text
UNDER DEVELOPMENT
```

must be displayed honestly.

---

# 59. Overall Page Structure

Final initial structure:

```text
NAVBAR

        ↓

HERO
Introduction
Availability
Primary CTA
Secondary CTA

        ↓

FEATURED PROJECT
Live Incident & Operations Platform

        ↓

ENGINEERING EXPERTISE
Backend
Data
Distributed Systems
Engineering

        ↓

PROBLEM SOLVING
LeetCode

        ↓

PROFESSIONAL EXPERIENCE
Dorustree
Selected professional projects

        ↓

CONTACT
WhatsApp
Email
LinkedIn
GitHub

        ↓

FOOTER
```

---

# 60. Interaction Priority

Not every element needs animation.

Priority levels:

## Level 1 — Essential

Must implement:

* Smooth navigation
* Active navigation
* Responsive navigation
* Project expansion
* Theme switching
* External links
* Scroll reveal
* Mobile support

## Level 2 — Signature

Should implement:

* Mouse spotlight
* Cursor interaction
* Magnetic CTA
* Project hover interaction
* Interactive architecture diagram
* Scroll progress

## Level 3 — Advanced

Implement after the core site is stable:

* Parallax
* Interactive technology visualization
* LeetCode data visualization
* Project timeline animation
* Advanced architecture animation

## Level 4 — Optional

Only if they genuinely improve the experience:

* Easter eggs
* Hidden terminal
* Advanced cursor modes
* Experimental interactions

---

# 61. Consistency Rules

Every interactive element should follow the same principles.

### Hover

```text
200–300ms
```

### Section reveal

```text
300–600ms
```

### Major transition

```text
400–700ms
```

### Border interaction

Subtle.

### Accent

Used consistently.

### Radius

Use a small set of radius values.

### Spacing

Use a consistent spacing scale.

No one-off random values throughout the project.

---

# 62. What We Should NOT Build

Avoid turning the portfolio into:

* A gaming website
* A dashboard
* A resume PDF converted into HTML
* A collection of animations
* A generic Tailwind template
* A neon cyberpunk site
* A giant skill matrix
* A social-media clone
* An unnecessarily complex SPA
* A slow WebGL experiment

The goal is:

> **Elegant engineering product, not animation showcase.**

---

# 63. Technology Stack

Initial stack:

```text
React
TypeScript
Vite
Tailwind CSS
Lucide React
```

Add only when necessary:

```text
Framer Motion
```

or another animation solution if the interaction requirements justify it.

Do not install libraries simply because they are popular.

---

# 64. Development Philosophy

Build in this order:

```text
1. Foundation
2. Design system
3. Layout
4. Content
5. Interaction
6. Animation
7. Responsive design
8. Accessibility
9. Performance
10. Deployment
```

Do not start with fancy animations.

The structure and content must work first.

---

# 65. Final Experience Goal

When a recruiter opens the portfolio:

### First impression

```text
Clean
Professional
Modern
Easy to understand
```

### After interaction

```text
Interesting
Polished
Interactive
```

### After exploring the projects

```text
Technically substantial
Backend focused
Engineering minded
```

### Before leaving

The recruiter should have obvious paths to:

```text
LinkedIn
GitHub
LeetCode
WhatsApp
Email
Resume
```

---

# 66. Golden Rule

Every feature must answer at least one of these questions:

> Does this make the portfolio easier to understand?

> Does this demonstrate engineering ability?

> Does this improve navigation?

> Does this improve usability?

> Does this make the project more memorable without hurting usability?

If the answer is no, don't ad
