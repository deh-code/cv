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
      "TypeORM",
      "Drizzle",
      "Strapi",
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
      "VS Code",
    ],
  },
  {
    title: {
      en: "Cloud",
      it: "Cloud",
    },
    icon: faBook,
    items: [
      'AWS',
      'Hetzner',
    ],
  },
];
