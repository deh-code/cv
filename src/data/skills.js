import { faFirefoxBrowser } from "@fortawesome/free-brands-svg-icons";
import { faBook, faServer, faSitemap } from "@fortawesome/free-solid-svg-icons";

export default [
  {
    title: {
      en: "Frontend",
    },
    icon: faFirefoxBrowser,
    iconWidth: "22px",
    items: [
      "Next.js",
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
      en: "DevOps & Architectures",
      it: "DevOps & Architetture",
    },
    icon: faSitemap,
    items: ["Docker", "Git/GitLab", "SSH", "AWS", "Hetzner"],
  },
  {
    title: {
      en: "Various",
      it: "Vari",
    },
    icon: faBook,
    items: ["npm", "yarn", "pnpm", "Typescript", "Jest", "Vitest", "VS Code"],
  },
];
