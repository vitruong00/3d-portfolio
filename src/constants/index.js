import {
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  figma,
  threejs,
  python,
  mvc,
  csharp,
  pcs,
  tamu,
  globalSearch,
  music,
  shirt,
  deepLearning,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "mvc",
    icon: mvc,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "csharp",
    icon: csharp,
  },
];

const experiences = [
  {
    title: "Software Engineer I",
    company_name: "PCS Software Inc",
    icon: pcs,
    iconBg: "white",
    date: "Jan 2023 - Present",
    points: [
      "Full-stack engineer in a web-based application Prime Express which help to reduce deadhead mileage and maximizes network savings and profitability for shippers and their private fleets.",
      "Technologies used: C#, .Net and ASP.Net MVC Framework, React.js, Typescript, HTML/CSS, PostgreSQL.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "PCS Software Inc",
    icon: pcs,
    iconBg: "white",
    date: "May 2022 - Dec 2022",
    points: [
      "Developed an end-to-end Global Search engine for trucks, trailers, drivers, and loads in a web-based application Prime Express.",
      "Wrote unit tests to ensure coding quality of frontend using Jest and React Testing Library",
      "Implemented an advanced, dynamic, and real-time map to show routes and estimating time arrivals for any truck, driver, trailer, or load using Here API.",
      "Built and redesigned a user interface for expanding/collapsing functionality across multiple items.",
      "Resolved bugs on existing components in frontend.",
      "Technologies used: C#, .Net and ASP.Net MVC Framework to implement REST API, and React.js, Typescript, Fluent UI, CSS to develop, refactor, and fix frontend.",
    ],
  },
  {
    title: "Teacher Assistant",
    company_name: "Texas A&M University",
    icon: tamu,
    iconBg: "white",
    date: "Aug 2021 - May 2022",
    points: [
      "Collaborated with other teaching assistants to assist 200+ students with technical skills and projects in Python language.",
      "Conducted weekly office hours and created study guides to help students in all materials relating to engineering labs and lectures.",
    ],
  },
];

const projects = [
  {
    name: "Global Search",
    description:
      "Allow users to search for drivers, trucks, trailers, and loads across the entire application. The search will provide the real-time updates of the assets including routes, status, ETA, etc.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "c#",
        color: "green-text-gradient",
      },
      {
        name: ".net",
        color: "pink-text-gradient",
      },
      {
        name: "sql",
        color: "green-text-gradient",
      },
      {
        name: "html/css",
        color: "pink-text-gradient",
      },
    ],
    image: globalSearch,
    source_code_link: "https://github.com/",
  },
  {
    name: "Music Collaboration App",
    description:
      "Web application that allow users to make music together in a quick, real-time, and simple way.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "socket.io",
        color: "white",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: music,
    source_code_link: "https://github.com/harmonyhub22/hhub",
  },
  {
    name: "Clothes Picker",
    description:
      "Web application that utilize the power of AI to help users customize their desired clothes.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "blue-text-gradient",
      },
      {
        name: "openAI",
        color: "green-text-gradient",
      },
      {
        name: "framer motion",
        color: "pink-text-gradient",
      },
    ],
    image: shirt,
    source_code_link: "https://github.com/vitruong00/3d-clothing-web",
  },
  {
    name: "Seq2Seq Model for Characters Prediction",
    description:
      "Utilizing Machine and Deep Learning to build a LSTM model to predict sequence of characters.",
    tags: [
      {
        name: "machine learning",
        color: "blue-text-gradient",
      },
      {
        name: "deep learning",
        color: "blue-text-gradient",
      },
      {
        name: "lstm",
        color: "blue-text-gradient",
      },
      {
        name: "nlp",
        color: "green-text-gradient",
      },
      {
        name: "seqtoseq",
        color: "pink-text-gradient",
      },
    ],
    image: deepLearning,
    source_code_link:
      "https://drive.google.com/file/d/1SP6PaxoqqtDaqG7S4c_mF9Y2hRwkb9PC/view?usp=sharing",
  },
];

export { services, technologies, experiences, projects };
