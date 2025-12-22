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

import foodApp from "../assets/food-app.webp"
import chatApp from "../assets/real-time-chatapp.png"
import jobBoardImage from "../assets/jobBoard.jpg"
import quizAppImage from "../assets/quizApp.jfif"


export const projects = [
  {
    id: "ai-job-portal",
    title: "AI Job Portal Application",
     img: jobBoardImage,
   
    shortDescription:
      "A full-stack AI-powered job portal for job seekers and employers.",
    longDescription:
      "An AI Job Portal application where users can search and apply for jobs, while employers can create and manage job listings. The platform includes resume building, sharing, and automated email notifications for job selection.",
    techStack: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Nodemailer",
      "JWT Authentication"
    ],
    features: [
      "User authentication for job seekers and employers",
      "Search and apply for jobs",
      "Employer can create and manage job postings",
      "AI-based resume builder",
      "Resume download and sharing",
      "Automated congratulation email sent on job selection",
      "Role-based access control (User / Employer)"
    ],
    role: "Full Stack Developer",
    github: "https://github.com/yourusername/ai-job-portal",
    live: "https://ai-job-portal.vercel.app"
  },

  {
    id: "lms-app",
    title: "Learning Management System (LMS)",
     img: quizAppImage,
    shortDescription:
      "A complete LMS platform for instructors and students.",
    longDescription:
      "A Learning Management System where instructors can add and remove courses, and students can register, learn, and track their progress. Includes secure authentication and OTP-based password recovery.",
    techStack: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Nodemailer",
      "JWT Authentication"
    ],
    features: [
      "Instructor can add, update, and delete courses",
      "Students can register and enroll in courses",
      "Course learning with progress tracking",
      "Visual progress bar for course completion",
      "Secure user authentication",
      "Forgot password functionality using OTP via email",
      "Role-based access (Instructor / Student)"
    ],
    role: "Full Stack Developer",
    github: "https://github.com/yourusername/lms-app",
    live: "https://lms-app.vercel.app"
  },

  {
    id: "real-time-chat-app",
    title: "Real-Time Chat Application",
     img: chatApp,
    shortDescription:
      "A real-time chat application with online status and authentication.",
    longDescription:
      "A real-time chat application that allows users to communicate instantly using Socket.IO. The app includes authentication, online/offline status, and smooth real-time messaging experience.",
    techStack: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "JWT Authentication"
    ],
    features: [
      "User authentication and authorization",
      "Real-time messaging using Socket.IO",
      "Online and offline user status",
      "One-to-one chat functionality",
      "Secure and scalable backend architecture"
    ],
    role: "Full Stack Developer",
    github: "https://github.com/yourusername/real-time-chat-app",
    live: "https://chat-app.vercel.app"
  },

  {
    id: "food-delivery-app",
    title: "Food Delivery Application",
    img: foodApp,
    shortDescription:
      "A full-stack food delivery platform with admin dashboard.",
    longDescription:
      "A food delivery application where users can browse food items, add them to cart, place orders, and track delivery status. Admin users can manage food items and update order delivery status.",
    techStack: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication"
    ],
    features: [
      "User authentication and authorization",
      "Browse food items and add to cart",
      "Place food orders securely",
      "Admin panel to add and manage food items",
      "Admin can view user orders",
      "Order tracking system (Out for delivery / Delivered)",
      "Real-time order status updates"
    ],
    role: "Full Stack Developer",
    github: "https://github.com/yourusername/food-delivery-app",
    live: "https://food-delivery-app.vercel.app"
  }
];
