import { faBook, faCode, faGears, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons"

export default [
  {
    title: {
      en: 'Frontend'
    },
    icon: faGears,
    iconWidth: '22px',
    items: [
      'React',
      'Vite',
      'Webpack',
      'jQuery',
      'Pug',
      'SASS'
    ]
  },
  {
    title: {
      en: 'Backend'
    },
    icon: faCode,
    items: [
      'Node.js',
      'Next.js',
      'Express',
      'Spring',
      'Wordpress',
      'Prisma',
      'MySQL'
    ]
  },
  {
    title: {
      en: 'Tools',
      it: 'Strumenti'
    },
    icon: faScrewdriverWrench,
    items: [
      'Docker',
      'Git/GitLab',
      'npm/yarn/pnpm',
      'Maven',
      'Typescript',
      'VS Code',
    ]
  },
  {
    title: {
      en: 'Concepts',
      it: 'Concetti'
    },
    icon: faBook,
    items: [
      'API REST',
      'MVC',
      'HTTP',
      'SSH',
      'Sanification',
      'Authentication',
    ]
  },
]