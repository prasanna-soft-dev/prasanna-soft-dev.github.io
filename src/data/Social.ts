export interface SocialLink {
  label: string
  href: string
  external?: boolean
}

export const socialLinks: SocialLink[] = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/prasannart/',
    external: true,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/prasanna-soft-dev',
    external: true,
  },
  {
    label: 'LeetCode',
    href: 'https://leetcode.com/u/Prasanna1863/',
    external: true,
  },
]