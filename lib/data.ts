import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import BeatTheHeatImg from "@/public/BeatTheHeat.png";
import focus_timer from "@/public/focus_timer.png"
import oops from "@/public/Oops.png"
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Verizon",
    location: "Chennai, India",
    description:
      "As a Full-Stack Software Engineer, I led the development and enhancement of software solutions in a Spring Boot microservices architecture, focusing on both front-end and back-end aspects. On the back-end, I spearheaded the creation and optimization of RESTful APIs using reactive Java programming and enhanced the efficiency and robustness of existing endpoints with Spring WebFlux. On the front-end, I developed responsive interfaces using ReactJS, Redux, and Saga.js, improving user engagement through innovative design and seamless user experiences. ",
    icon: React.createElement(CgWorkAlt),
    date: "2022-2023",
  },
  {
    title: "Research Intern",
    location: "Hyderabad, India",
    description:
      "I specialized in optimizing machine learning algorithms and enhancing model performance. I improved the YOLO Object Detection algorithm by integrating new recognition capabilities and leveraging Python and CUDA for better performance. Additionally, I advanced the Social-LSTM project by curating and refining datasets, which resulted in improved model training and accuracy.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 June",
  },
] as const;

export const projectsData = [
  {
    title: "BotBazaar",
    description:
      "I worked as a full-stack developer on this project. BotBazaar is a robotic rental platform connecting Owners.",
      tags: ["React", "Redux", "MongoDB", "Tailwind", "NodeJS" ],
      imageUrl: oops,
  },
  {
    title: "FocusPal",
    description:
      "Cross Platform mobile Application useful to have focus timers, set remainders, deadlines for tasks, how many focus sessions you had for each task and many other features.",
    tags: ["React", "TypeScript", "Expo", "Tailwind", "FireBase"],
    imageUrl: focus_timer,
  },
  {
    title: "Sensor Network",
    description:
      "In colloboration with the healthy cities lab created a web application that visualizes the sensor information across the Bloomington.",
    tags: ["React", "Chart.js", "Mapbox", "TailwindCSS", "map-box", "neon serverless database"],
    imageUrl: BeatTheHeatImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;