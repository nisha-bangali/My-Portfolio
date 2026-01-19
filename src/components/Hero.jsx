
import React from "react";
import profileImage from "../assets/profile-img.png";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
       {/* <Seo
        title="Nisha Bangali | Full Stack Developer (MERN Stack)"
        description="Full Stack Developer (MERN Stack) skilled in building responsive, scalable, and user-centric applications | React.js | Node.js | MongoDB"
        keywords="Nisha Bangali, MERN Stack Developer, React Developer, Full Stack Developer, Node.js, MongoDB"
      /> */}
      <section
        id="home"
        className="pt-32 pb-20 md:mt-12 mt-6 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Left Side Text */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight transition-colors">
                I'm Nisha Bangali, <br />
                <span className="text-blue-500 dark:text-blue-400 text-3xl md:text-4xl">
                  Full Stack Developer
                </span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 transition-colors">
                Motivated and detail-oriented Full Stack Developer skilled in
                building responsive, scalable, and user-centric applications.
              </p>

              {/* Buttons */}
              <div className="flex gap-4 justify-center md:justify-start">
                <Link
                  to="/projects"
                  className="md:px-6 py-3 px-4 md:font-bold rounded-lg bg-blue-500 text-white shadow hover:bg-blue-600 transition"
                >
                  View My Work
                </Link>
                <Link
                  to="/hire-me"
                  className="px-6 py-3 font-bold rounded-lg border-2 border-blue-500 dark:border-blue-400 text-blue-500 dark:text-blue-400  hover:bg-blue-500 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition"
                >
                  Hire Me
                </Link>
              </div>
            </div>

            {/* Right Side Image */}
            <div className="flex-1 flex justify-center">
              <div className="w-70 h-70 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-blue-500 dark:border-blue-400 shadow-lg">
                <img
                  src={profileImage}
                  loading="lazy"
                  alt="Nisha Bangali"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
