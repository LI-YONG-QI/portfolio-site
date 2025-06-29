export type Project = {
  title: string
  shortDescription: string
  description: string
  link: string
  id: string
  logo: string
  images?: string[]
  externalLinks?: {
    github?: string
    twitter?: string
    discord?: string
    telegram?: string
    medium?: string
  }
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    id: 'dynavest',
    title: 'DynaVest',
    shortDescription:
      'DynaVest – The AI-powered gateway to effortless and optimized DeFi yield portfolio across chains and protocols.',
    description:
      'DynaVest – The AI-powered gateway to effortless and optimized DeFi yield portfolio across chains and protocols. \n\n Our mission is to be the go-to AI portfolio manager for DeFi—making yield strategies accessible to everyone, regardless of experience. By leveraging AI and NLP, we simplify cross-chain, multi-protocol investing and optimize risk and returns. ',
    link: 'https://smaller-guidance-918670.framer.app/',
    logo: '/dynavest.png',
    images: [
      '/dynavest1.jpeg',
      '/dynavest2.png',
      '/dynavest3.png',
      '/dynavest4.png',
      '/dynavest5.png',
      '/dynavest6.png',
    ],
    externalLinks: {
      github: 'https://github.com/LI-YONG-QI/dynavest',
      twitter: 'https://x.com/dynavest_ai',
    },
  },

  {
    id: 'fuse',
    title: 'Fuse',
    shortDescription:
      'Fuse is a multi-chain deployment management tool specifically designed for Foundry. Developers can use Fuse to create deployment scripts that are easy to maintain and highly readable',
    description:
      'Fuse is a multi-chain deployment management tool specifically designed for Foundry. Developers can use Fuse to create deployment scripts that are easy to maintain and highly readable',
    link: 'https://github.com/LI-YONG-QI/fuse',
    logo: 'https://i.imgur.com/QZeRpCx.png',
    externalLinks: {
      github: 'https://github.com/LI-YONG-QI/fuse',
    },
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Reglazed Studio',
    title: 'CEO',
    start: '2024',
    end: 'Present',
    link: 'https://ibelick.com',
    id: 'work1',
  },
  {
    company: 'Freelance',
    title: 'Design Engineer',
    start: '2022',
    end: '2024',
    link: 'https://ibelick.com',
    id: 'work2',
  },
  {
    company: 'Freelance',
    title: 'Front-end Developer',
    start: '2017',
    end: 'Present',
    link: 'https://ibelick.com',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description:
      'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/ibelick',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/ibelick',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/ibelick',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/ibelick',
  },
]

export const EMAIL = 'your@email.com'
