export const skills = [
  { name: "React.js", category: "frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "HTML5", category: "frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", category: "frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", category: "frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Node.js", category: "backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express", category: "backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "MongoDB", category: "backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "GitHub", category: "tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "VS Code", category: "tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Postman", category: "tools", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
];

import weatherImage from "../assets/weatherAppCover.webp"
import aiChatbotImage from "../assets/aiChatBot.webp"
import jobBoardImage from "../assets/jobBoard.jpg"
import quizAppImage from "../assets/quizApp.jfif"

export const projects = [
  {
    title: "Weather App",
    desc: "Real-time weather updates by city name, responsive UI.",
    tags: ["JavaScript", "OpenWeather API", "CSS"],
    img: weatherImage,
  },
  {
    title: "AI Chatbot",
    desc: "Interactive chatbot with simple conversational logic.",
    tags: ["JavaScript", "HTML", "CSS"],
    img: aiChatbotImage,
  },
  {
    title: "Job Board Application",
    desc: "Job listings with search & filter, clean responsive UI.",
    tags: ["React.js", "REST API", "Responsive"],
    img: jobBoardImage,
  },
  {
    title: "Quiz Application",
    desc: "Timer-based quiz app with score calculation and DB integration.",
    tags: ["Node.js", "Express.js", "MongoDB", "EJS"],
    img: quizAppImage,
  },
];