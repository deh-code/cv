import { faBook, faCode, faGears, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons"

export default [
  {
    title: {
      en: 'Frameworks',
      it: 'Frameworks'
    },
    icon: faGears,
    iconWidth: '22px',
    items: [
      'Node.js',
      'Express',
      'Next.js',
      'React',
    ]
  },
  {
    title: {
      en: 'Tools',
      it: 'Strumenti'
    },
    icon: faScrewdriverWrench,
    items: [
      'npm/yarn/pnpm',
      'MySQL',
      'Docker',
      'Git/GitLab',
      'VS Code'
    ]
  },
  {
    title: {
      en: 'Program Langs',
      it: 'Ling. Programm.'
    },
    icon: faCode,
    items: [
      'Javascript',
      'Typescript',
      'Python',
      'HTML',
      'CSS/SASS',
      'Pug'
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
      'Auth',
      'Sanification',
      'HTTP',
      'SSH'
    ]
  },
]