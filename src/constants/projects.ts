import { Project } from "@/models/project";
import exampleImage from "../../public/assets/images/tautin-1.png";

export const PROJECTS: Project[] = [
  {
    title: "Urbania",
    slug: "urbania",
    description: "A peer-to-peer e-commerce platform for selling and buying vintage and preloved clothes. This is the revamped project of Fashionpedia with some advanced technologies and techniques implemented, such as gRPC, Kafka, and Redis.",
    techStack: ["NestJS", "SpringBoot", "PostgreSQL", "Kafka", "Redis", "NextJS", "TailwindCSS"],
    year: "2024",
    demo: "https://urbania.my.id/",
    github: "https://github.com/ilhamelhamdi/urbania",
    role: "Fullstack Developer",
    images: [{
      src: exampleImage,
      height: 400,
      width: 400,
      alt: "Urbania",
    },]
  },
  {
    title: "Tautin",
    slug: "tautin",
    description: "Link shortener with fully customizable URLs. Simplify your long links in the easiest way.",
    techStack: ["NestJS", "NextJS", "TailwindCSS", "PostgreSQL"],
    year: "2024",
    demo: "https://tautin.link/",
    github: "https://github.com/ilhamelhamdi/tautin",
    role: "Fullstack Developer",
    images: [{
      src: exampleImage,
      height: 400,
      width: 400,
      alt: "Tautin",
    },]
  },
  {
    title: "Fashionpedia",
    slug: "fashionpedia",
    description: "A marketplace for those who love selling and buying thrifted clothes. This is the first project that implemented microservice style architecture. I built a service for managing listing and order.",
    techStack: ["SpringBoot", "PostgreSQL", "HTML", "CSS", "Javascript"],
    year: "2024",
    demo: "https://fashionpedia.my.id/",
    github: "https://github.com/Fashionpedia-A2",
    role: "Fullstack Developer",
    collaborator: [
      { name: "Fredo", github: "https://github.com/Frmeta" },
      { name: "Nabil", github: "https://github.com/Nabilcodes" },
      { name: "Rafi", github: "https://github.com/RafGhan" },
      { name: "Sefriano", github: "https://github.com/riorio805" },
    ],
    images: [{
      src: exampleImage,
      height: 400,
      width: 400,
      alt: "Fashionpedia",
    },]
  },
  {
    title: "Bukoo",
    slug: "bukoo",
    description: "A website for sharing and discussing all about books.",
    techStack: ["Django", "HTML", "CSS", "JavaScript"],
    year: "2023",
    github: "https://github.com/B03-PBP-2023/bukoo",
    demo: "https://bukoo.azurewebsites.net/",
    role: "Fullstack Developer",
    collaborator: [
      { name: "Sekar", github: "https://github.com/arumasekar" },
      { name: "Fayya", github: "https://github.com/fayyazheva" },
      { name: "Asadilhaq", github: "https://github.com/FBK15" },
      { name: "Muzaki", github: "https://github.com/muzakiahmdz" },
    ],
    images: [{
      src: exampleImage,
      height: 400,
      width: 400,
      alt: "Bukoo",
    },]
  },
  {
    title: "Bukoo Mobile",
    slug: "bukoo-mobile",
    description: "A mobile version of the book community platform, Bukoo.",
    techStack: ["Flutter"],
    year: "2023",
    github: "https://github.com/B03-PBP-2023/bukoo-mobile",
    demo: "https://install.appcenter.ms/orgs/bukoo/apps/bukoo/distribution_groups/public",
    role: "Frontend Developer",
    collaborator: [
      { name: "Sekar", github: "https://github.com/arumasekar" },
      { name: "Fayya", github: "https://github.com/fayyazheva" },
      { name: "Asadilhaq", github: "https://github.com/FBK15" },
      { name: "Muzaki", github: "https://github.com/muzakiahmdz" },
    ],
    images: [{
      src: exampleImage,
      height: 400,
      width: 400,
      alt: "Bukoo Mobile",
    },]
  },
  {
    title: "BETIS 2023 Website",
    slug: "betis-2023-website",
    description: "A website providing free guidance services for prospective students to prepare for university admission. In this project, I took on the role of Frontend Developer to build the About page.",
    techStack: ["NextJS", "TailwindCSS"],
    demo: "https://betis2023.vercel.app/",
    github: "https://github.com/BETIS-Fasilkom-UI/BETIS23-FE",
    role: "Frontend Developer",
    year: "2023",
    images: [{
      src: exampleImage,
      height: 400,
      width: 400,
      alt: "BETIS Fasilkom UI 2023's Website",
    },]
  },
  {
    title: "Satset MOOC",
    slug: "satset-mooc",
    description: "An open online course website. Create your own courses with lectures and interactive quizzes as Instructor. Enroll verified courses and take lectures and quizzes as a Student.This project is a final project collaboration at Software Engineering Academy COMPFEST 14. I took part in the Frontend side.",
    techStack: ["ReactJS", "TailwindCSS"],
    year: "2022",
    demo: "https://satset-mooc.vercel.app/",
    github: "https://github.com/ilhamelhamdi/frontend-satset",
    role: "Frontend Developer",
    collaborator: [
      {name: "Fathoni", github: "https://github.com/githubnyathoni"},
      {name: "Evan", github: "https://github.com/evan-aurelrius"},
      {name: "Adnan", github: "https://github.com/alfa000"},
    ],
    images: [{
      src: exampleImage,
      height: 400,
      width: 400,
      alt: "Satset MOOC",
    },]
  },
]