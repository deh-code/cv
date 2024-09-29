import { faFirefoxBrowser } from "@fortawesome/free-brands-svg-icons";
import {
  faBook,
  faScrewdriverWrench,
  faServer,
} from "@fortawesome/free-solid-svg-icons";

export default [
  {
    title: {
      en: "Frontend",
    },
    icon: faFirefoxBrowser,
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
    icon: faServer,
    items: [
      "Node.js",
      "Next.js",
      "Express",
      "Fastify",
      "Prisma",
      "MySQL",
      "PostgreSQL",
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
      "Typescript",
      "Jest",
      "Vitest",
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
