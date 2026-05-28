import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "AI Fluency Playbook",
  description: "A Playbook for the Modern Professional",
  base: '/ai-fluency-playbook/',
  appearance: 'dark',

  themeConfig: {

    // ── TOP NAV ──────────────────────────────────────────────────
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Start Here', link: '/start-here' },
      {
        text: 'Parts',
        items: [
          { text: 'Part 1: What is AI?', link: '/chapter-1-1' },
          { text: 'Part 2: Evolution & Ethics', link: '/chapter-2-1' },
          { text: 'Part 3: Interacting with AI', link: '/chapter-3-1' },
          { text: 'Part 4: Advanced AI Fluency', link: '/chapter-4-1' },
        ]
      },
      { text: 'About', link: '/about' },
    ],

    // ── SIDEBAR ──────────────────────────────────────────────────
    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Start Here', link: '/start-here' },
        ]
      },
      {
        text: 'Part 1: What is AI?',
        collapsed: false,
        items: [
          { text: '1.1 Meet Your Capable Intern', link: '/chapter-1-1' },
          { text: '1.2 The Language of AI', link: '/chapter-1-2' },
          { text: '1.3 The Capabilities Sandbox', link: '/chapter-1-3' },
        ]
      },
      {
        text: 'Part 2: Evolution & Ethics',
        collapsed: true,
        items: [
          { text: '2.1 The Three Eras of AI', link: '/chapter-2-1' },
          { text: '2.2 Ethical Usage & Guardrails', link: '/chapter-2-2' },
          { text: '2.3 AI in the Real World', link: '/chapter-2-3' },
        ]
      },
      {
        text: 'Part 3: Interacting with AI',
        collapsed: true,
        items: [
          { text: '3.1 Searching vs Prompting', link: '/chapter-3-1' },
          { text: '3.2 The 4Cs Framework (Context & Clarity)', link: '/chapter-3-2' },
          { text: '3.3 The 4Cs Framework (Constraint & Content)', link: '/chapter-3-3' },
          { text: '3.4 Departmental Plug-and-Play', link: '/chapter-3-4' },
        ]
      },
      {
        text: 'Part 4: Advanced AI Fluency',
        collapsed: true,
        items: [
          { text: '4.1 How LLMs Actually Work', link: '/chapter-4-1' },
          { text: '4.2 The Big Four Model Matrix', link: '/chapter-4-2' },
          { text: '4.3 Enterprise Considerations', link: '/chapter-4-3' },
          { text: '4.4 The Historical Deep Dive', link: '/chapter-4-4' },
          { text: '4.5 The Evolution to AGI and Future Directions', link: '/chapter-4-5' },
        ]
      },
      {
        text: 'More',
        items: [
          { text: 'About', link: '/about' },
        ]
      },
    ],

    // ── SOCIAL + SEARCH + FOOTER ─────────────────────────────────
    socialLinks: [
      { icon: 'github', link: 'https://github.com/MahAbram/ai-fluency-playbook' }
    ],

    search: {
      provider: 'local'
    },

    outline: {
      level: [2, 3],
      label: 'On this page'
    },

    footer: {
      message: 'Released under CC BY 4.0.',
      copyright: 'Copyright © 2025 MahAbram'
    }
  }
})
