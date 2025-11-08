import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    ['link', { rel: 'icon', href: '/assets/favicon.ico' }],
    ['link', { rel: 'stylesheet', href: '/assets/styles/custom.css' }] 
  ],
  title: "Developer Docs",
  description: "Accessibility Documentation",
  base: '/',
  vite: {
    css: {
      preprocessorOptions: {
        css: {
          additionalData: `@import "./assets/styles/custom.css";`
        }
      }
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Accessibility', link: '/docs/docs/' },
      { text: 'Fullstack Learning', link: '/fullstack/frontend/' },
      //{ text: 'Examples', link: '/markdown-examples' }
    ],
    search: {
      provider: 'local'
    },
    sidebar: [
      {
        text: 'Accessibility Docs',
        items: [
          { text: 'Übersicht', link: '/docs/docs/' },
          { text: 'Wahrnehmbarkeit', link: '/docs/docs-perceivable.md' },
          { text: 'Bedienbarkeit', link: '/docs/docs-operable.md' },
          { text: 'Verständlichkeit', link: '/docs/docs-understandable.md' },
          { text: 'Robustheit', link: '/docs/docs-robust.md' },
          { text: 'WCAG Levels', link: '/docs/docs-levels.md' },
        ]
      },
      {
        text: 'Accessibility Techniken',
        items: [
          { text: 'Übersicht', link: '/docs/technics/' },
          { text: 'Aria-1', link: '/docs/technics/technics_aria-1.md' },
          { text: 'Aria-2', link: '/docs/technics/technics_aria-2.md' },
          { text: 'Aria-4', link: '/docs/technics/technics_aria-4.md' },
          { text: 'Aria-5', link: '/docs/technics/technics_aria-5.md' },
          { text: 'Aria-6', link: '/docs/technics/technics_aria-6.md' },
          { text: 'Aria-7', link: '/docs/technics/technics_aria-7.md' },
          { text: 'Aria-8', link: '/docs/technics/technics_aria-8.md' },
          { text: 'Aria-9', link: '/docs/technics/technics_aria-9.md' },
          { text: 'Aria-10', link: '/docs/technics/technics_aria-10.md' },
          { text: 'Aria-11', link: '/docs/technics/technics_aria-11.md' },
          { text: 'Aria-12', link: '/docs/technics/technics_aria-12.md' },
          { text: 'Aria-13', link: '/docs/technics/technics_aria-13.md' },
          { text: 'Aria-14', link: '/docs/technics/technics_aria-14.md' },
          { text: 'Aria-15', link: '/docs/technics/technics_aria-15.md' },
          { text: 'Aria-16', link: '/docs/technics/technics_aria-16.md' },
        ]
      },
      {
        text: 'Accessibility Basics',
        items: [
          { text: 'Basic Html Struktur', link: '/docs/basics/index.md' },
        ]
      },
      {
        text: 'Designing for Accessibility',
        items: [
          { text: 'Designing for Accessibility', link: '/docs/design/index.md' },
        ]
      },
      {
        text: 'Frontend Development',
        items: [
          { text: 'Frontend Übersicht', link: '/fullstack/frontend/' },
          { text: 'HTML & CSS', link: '/fullstack/frontend/html-css.md' },
          { text: 'JavaScript', link: '/fullstack/frontend/javascript.md' },
          { text: 'React.js', link: '/fullstack/frontend/react.md' },
          { text: 'Build Tools', link: '/fullstack/frontend/build-tools.md' },
        ]
      },
      {
        text: 'Backend Development',
        items: [
          { text: 'Backend Übersicht', link: '/fullstack/backend/' },
          { text: 'Node.js', link: '/fullstack/backend/nodejs.md' },
        ]
      },
      {
        text: 'Database Technologies',
        items: [
          { text: 'Database Übersicht', link: '/fullstack/database/' },
        ]
      },
      {
        text: 'DevOps & Deployment',
        items: [
          { text: 'DevOps Übersicht', link: '/fullstack/devops/' },
        ]
      },
      {
        text: 'Testing & QA',
        items: [
          { text: 'Testing Übersicht', link: '/fullstack/testing/' },
        ]
      },
      {
        text: 'Security',
        items: [
          { text: 'Security Übersicht', link: '/fullstack/security/' },
        ]
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/w3c/wcag' }
    ]
  }
})
