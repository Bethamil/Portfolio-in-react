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
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  drupal,
  java,
  php,
  python,
  kotlin,
  kubernetes,
  springboot,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "tech",
    title: "Tech",
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
  {
    title: "Drupal Developer",
    icon: creator,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },
  {
    name: "Java",
    icon: java
  },
  { 
    name: "PHP",
    icon: php,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Kotlin",
    icon: kotlin,
  },
  {
    name: "spring-boot",
    icon: springboot,
  },
  {
    name: "Drupal",
    icon: drupal,
  },
];

const aboutMe = ` I have extensive experience as a full-stack software engineer, 
proficient in multiple programming languages like Java, Kotlin, PHP, Python, and 
JavaScript. My expertise includes frameworks such as React, Next.js, Spring Boot, 
and Drupal. I leverage this diverse skill set to create comprehensive solutions 
across various tech stacks. Additionally, I am well-versed in Kubernetes and Docker, 
contributing to effective web development and container orchestration.
`;

const techStackIntro =  `I've curated a set of technologies that form the backbone of my web 
development approach. Each element is chosen deliberately to enhance performance, scalability, 
and user experience. Below, you'll find the list of tools and frameworks I rely on to create 
functional and efficient apps.`;

const contactText = `Feel free to connect with me via LinkedIn for any inquiries or professional 
engagements. You can reach out to me by sending a message or connecting directly through 
my LinkedIn profile. I look forward to engaging with you!`;

const linkedinUrl = `https://www.linkedin.com/in/emiel-bloem-01239261/`;

export { services, technologies, aboutMe, techStackIntro, contactText, linkedinUrl};