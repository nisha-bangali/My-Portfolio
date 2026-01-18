
import React from "react";
import resume from "../assets/resume.pdf"
import { Link } from "react-router-dom";

function About() {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12 relative">
          About Me
          <span className="block w-16 h-1 bg-blue-500 mx-auto mt-3"></span>
        </h2>

        <div className="flex flex-col md:flex-row items-start gap-12">
          {/* About Text */}
          <div className="flex-1 text-lg leading-relaxed text-gray-700 dark:text-gray-300 space-y-4">
            <p>
              I am <strong>Nisha Bangali</strong>, a passionate <strong>Full Stack Developer (MERN Stack)</strong> based in <strong>Indore, India</strong>, with hands-on experience in building scalable, secure, and user-centric web applications. I specialize in developing modern web solutions using <strong>React.js, Node.js, Express.js, and MongoDB</strong>, with a strong focus on clean code, performance optimization, and responsive design.
            </p>
            <p>
              Over the course of my development journey, I have worked on real-world <strong>full-stack projects</strong> including job portals, learning management systems, and real-time chat applications. I enjoy turning complex problems into simple, elegant solutions while following modern UI/UX and best development practices.
            </p>
             <div className="mt-6">
              <Link
                to="/about"
                className="px-6 py-3 rounded-lg border-2 border-blue-500 text-blue-500 font-semibold shadow hover:bg-blue-500 hover:text-white transition"
              >
                Read More
              </Link>
              <a
                href={resume}
                target="_blank"
                className="px-6 py-3  ml-4 rounded-lg bg-blue-500 text-white font-semibold shadow hover:bg-blue-600 transition"
              >
                My Resume
              </a>
            </div>
          </div>

          {/* About Image */}
          <div className="md:flex-1 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Coding Setup"
              loading="lazy"
              className="rounded-lg shadow-lg md:max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
