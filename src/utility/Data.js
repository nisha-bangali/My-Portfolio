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

export const projects = [
  {
    title: "Weather App",
    desc: "Real-time weather updates by city name, responsive UI.",
    tags: ["JavaScript", "OpenWeather API", "CSS"],
  //   img: "https://thumbs.dreamstime.com/b/hand-holding-smartphone-displaying-weather-app-rainy-forecast-raindrops-falling-blurred-background-technology-368785470.jpg",
  // },
  img: weatherImage
  },
  {
    title: "AI Chatbot",
    desc: "Interactive chatbot with simple conversational logic.",
    tags: ["JavaScript", "HTML", "CSS"],
    img: "https://www.shutterstock.com/image-vector/abstract-digital-businessman-tablet-uses-600nw-2357272619.jpg",
  },
  {
    title: "Job Board Application",
    desc: "Job listings with search & filter, clean responsive UI.",
    tags: ["React.js", "REST API", "Responsive"],
    img: "https://www.theladders.com/wp-content/uploads/Best-Job-Board-Apps-for-Job-Seekers-in-2025-800x420.jpg",
  },
  {
    title: "Quiz Application",
    desc: "Timer-based quiz app with score calculation and DB integration.",
    tags: ["Node.js", "Express.js", "MongoDB", "EJS"],
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBR0UopMuxdjunhfhDQMWLNDurSYsxZTCZmQ&s",
  },
];