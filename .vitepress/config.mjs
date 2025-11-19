import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    ['link', { rel: 'icon', href: '/assets/favicon.ico' }],
    ['link', { rel: 'stylesheet', href: '/assets/styles/custom.css' }] 
  ],
  title: "Developer Docs",
  description: "Fullstack Documentation",
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
      { text: 'Fullstack Learning', link: '/fullstack/frontend/' },
      //{ text: 'Examples', link: '/markdown-examples' }
    ],
    search: {
      provider: 'local'
    },
    sidebar: [
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
