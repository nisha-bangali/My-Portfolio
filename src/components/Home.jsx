
import React from "react";
import profileImage from "../assets/profile-img.png";

function Home() {
  return (
    <section
      id="home"
      className="pt-32 pb-20 md:mt-12 mt-6 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Side Text */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              I'm Nisha Bangali, <br />
              <span className="text-blue-500 text-3xl md:text-4xl">
                Full Stack Developer
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Motivated and detail-oriented Full Stack Developer skilled in
              building responsive, scalable, and user-centric applications.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="md:px-6 py-3 px-4 md:text-md text-sm rounded-lg bg-blue-500 text-white font-semibold shadow hover:bg-blue-600 transition"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-lg border-2 border-blue-500 text-blue-500 dark:text-blue-400 font-semibold hover:bg-blue-500 hover:text-white transition"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="flex-1 flex justify-center">
            <div className="w-70 h-70 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
              <img
                src={profileImage}
                alt="Nisha Bangali"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
