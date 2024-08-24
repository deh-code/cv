import {
  faBook,
  faCode,
  faGears,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";

export default [
  {
    title: {
      en: "Frontend",
    },
    icon: faGears,
    iconWidth: "22px",
    items: [
      "React",
      "Vite",
      "Webpack",
      "jQuery",
      "Pug",
      "SASS",
      "Javascript",
      "CSS",
      "HTML",
    ],
  },
  {
    title: {
      en: "Backend",
    },
    icon: faCode,
    items: [
      "Node.js",
      "Next.js",
      "Express",
      "Fastify",
      "Spring",
      "Wordpress",
      "Prisma",
      "MySQL",
      "MongoDB",
    ],
  },
  {
    title: {
      en: "Tools",
      it: "Strumenti",
    },
    icon: faScrewdriverWrench,
    items: [
      "Docker",
      "Git/GitLab",
      "npm",
      "yarn",
      "pnpm",
      "Maven",
      "Typescript",
      "Jest",
      "SSH",
      "Debugging",
      "VS Code",
    ],
  },
  {
    title: {
      en: "Concepts",
      it: "Concetti",
    },
    icon: faBook,
    items: [
      "API REST",
      "MVC",
      "HTTP",
      "Sanification",
      "Authentication",
      "Unit Test",
      "E2E Test",
      "Software Design",
      "Performance optimization",
    ],
  },
];
