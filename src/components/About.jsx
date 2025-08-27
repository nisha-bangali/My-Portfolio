
import React from "react";

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

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* About Text */}
          <div className="flex-1 text-lg leading-relaxed text-gray-700 dark:text-gray-300 space-y-4">
            <p>
              Hello! I'm <strong className="text-blue-500">Nisha Bangali</strong>, 
              a passionate Full Stack Developer currently pursuing{" "}
              <strong>BCA at Government Holkar Science College, Indore</strong>.
            </p>
            <p>
              I specialize in frontend and backend technologies including{" "}
              <strong>React.js, Node.js, Express.js, and MongoDB</strong>.
            </p>
            <p>
              Through self-learning and projects, I’ve built applications like{" "}
              <em className="italic">Job Board, Weather App, Blog App, Quiz App, and an AI Chatbot</em>.
            </p>
            <p>
              I enjoy solving problems, exploring new tools, and contributing to impactful
              solutions in web development.
            </p>

            <div className="mt-6">
              <a
                href="#"
                className="px-6 py-3 rounded-lg bg-blue-500 text-white font-semibold shadow hover:bg-blue-600 transition"
              >
                My Resume
              </a>
            </div>
          </div>

          {/* About Image */}
          <div className="flex-1 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Coding Setup"
              className="rounded-lg shadow-lg max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
