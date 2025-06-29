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
    others?: string[]
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
      '/dynavest7.png',
    ],
    externalLinks: {
      github: 'https://github.com/LI-YONG-QI/dynavest',
      twitter: 'https://x.com/dynavest_ai',
      others: [
        'https://ethglobal.com/showcase/dynavest-8noha',
        'https://devfolio.co/projects/dynavest-8580',
        'https://smaller-guidance-918670.framer.app/',
      ],
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
    company: 'Hong Wang Tech',
    title: 'Blockchain Engineer',
    start: '2023',
    end: 'Present',
    link: 'https://www.hongwangtec.com/',
    id: 'work1',
  },
  {
    company: 'DynaVest',
    title: 'CTO',
    start: '2024',
    end: 'Present',
    link: 'https://dynavest.ai/',
    id: 'work3',
  },
  {
    company: 'River',
    title: 'Smart Contract Engineer',
    start: '2024 / 09',
    end: '2024 / 11',
    link: 'https://app.river.inc/',
    id: 'work2',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Aave V3 Notes',
    description: 'Aave mechanism research and analysis  ',
    link: '/blog/aave',
    uid: 'blog-1',
  },
  {
    title: 'Uniswap V3 Notes',
    description: 'Uniswap mechanism research and analysis',
    link: '/blog/uniswap',
    uid: 'blog-2',
  },
  {
    title: 'Morpho Notes',
    description: 'Morpho mechanism research and analysis',
    link: '/blog/morpho',
    uid: 'blog-3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/LI-YONG-QI',
  },
  {
    label: 'Twitter',
    link: 'https://x.com/ShileXe',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/yong-qi-li-879b1a246',
  },
]

export const EMAIL = 'chifox.eth@gmail.com'
