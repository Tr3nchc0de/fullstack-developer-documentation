import { defineConfig } from 'vitepress'
import fs from 'fs'
import path from 'path'

// https://vitepress.dev/reference/site-config
function getJavaScriptFilesSidebar() {
  const dirPath = path.resolve(process.cwd(), 'fullstack/frontend/javascript')
  if (!fs.existsSync(dirPath)) return []
  return fs.readdirSync(dirPath)
    .filter(file => file.endsWith('.md'))
    .map(file => ({
      text: file.replace('.md', ''),
      link: `/fullstack/frontend/javascript/${file}`
    }))
}

function getHtmlFilesSidebar() {
  const dirPath = path.resolve(process.cwd(), 'fullstack/frontend/html')
  if (!fs.existsSync(dirPath)) return []
  return fs.readdirSync(dirPath)
    .filter(file => file.endsWith('.md'))
    .map(file => ({
      text: file.replace('.md', ''),
      link: `/fullstack/frontend/html/${file}`
    }))
}

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
          { text: 'HTML & CSS',collapsed: true, link: '/fullstack/frontend/html.md', items: getHtmlFilesSidebar() },
          { text: 'JavaScript',collapsed: true, link: '/fullstack/frontend/javascript.md', items: getJavaScriptFilesSidebar() },
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
