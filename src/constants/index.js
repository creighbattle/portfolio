import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

import amazon from "../assets/company/amazon.jpeg";
import hcl from "../assets/company/hcl.jpeg";
import stockton from "../assets/company/stockton.png";
import bakery from "../assets/bakery.png";
import netflix from "../assets/netflix.png";
import barbershop from "../assets/barbershop-template.png";
import storybook from "../assets/story-book-imgs.png";

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
    title: "React Native Developer",
    icon: mobile,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
];

const experiences = [
  {
    title: "Software Developer Engineer",
    company_name: "Amazon",
    icon: amazon,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Collaborating with project managers and other team members to plan an create high quality solutions",
      "Participating in code reviews and providing constructive feedback to other developers",
      "Modifying existing Angular UI",
      "Working with Amazon tools like Step Functions, Lambdas, etc",
    ],
  },
  {
    title: "Full Stack Developer, Data Engineer",
    company_name: "HCL Technologies / Merck Pharmaceutical",
    icon: hcl,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Using ETL tools to implement data pipeline",
    ],
  },
  {
    title: "Student",
    company_name: "Stockton University",
    icon: stockton,
    iconBg: "#E6DEDD",
    date: "Aug 2015 - May 2020",
    points: ["Studying various software developemnt languages / topics"],
  },
];

const testimonials = [{}];

const projects = [
  {
    name: "Barbershop Template",
    description:
      "Full stack web application that utilizes NextJS, TailwindCSS, Firebase, & DigitalOcean.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: barbershop,
    //source_code_link: "https://github.com/creighbattle/BakeryDemo",
    page: "https://cbscreationsllc.vercel.app/",
  },
  {
    name: "My Story Book App",
    description:
      "A full stack Expo/React-native mobile application that allows users to capture their day by journaling & uploading videos/images. It's purpose serves to capture your life's story.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: storybook,
    //source_code_link: "https://github.com/creighbattle/Netflix-Clone",
    page: "https://apps.apple.com/us/app/story-book/id6446295304",
  },
  {
    name: "Bakery Design",
    description:
      "A Frontend application showing off the basics of HTML, CSS, and Javascript.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: bakery,
    //source_code_link: "https://github.com/creighbattle/Netflix-Clone",
    page: "https://creighbattle.github.io/BakeryDemo/",
  },
];

export { services, technologies, testimonials, experiences, projects };
