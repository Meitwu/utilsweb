import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "asuns-utils-docs",
  description: "简单易用",
  themeConfig: {
    logo: "/logo.svg",
    outline: {
      label: "目录",
      level: "deep"
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/api-examples' }
    ],
    search: {
      provider: 'local'
    },
    sidebar: [
      {
        text: "介绍",
        // collapsed: false,
        items: [
          { 
            text: "快速开始",
            link: "/guide/guide"
          }
        ]
      },
      {
        text: 'Utils',
        items: [
          { text: 'is', link: 'content/markdown-is' },
          { text: 'date', link: 'content/markdown-date.md' }
        ]
      },
      {
        text: 'interview',
        items: [
          { text: 'react', link: 'content/interview/markdown-react' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
})
