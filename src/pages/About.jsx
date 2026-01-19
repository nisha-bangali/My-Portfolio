

import React from "react";
import profileImg from "../assets/profile-img.png";

const About = () => {
  return (
    <>
      {/* <Seo
        title="Nisha Bangali Full Stack Developer (MERN Stack)"
        description="I build scalable, secure, and user-centric web applications with clean code, modern UI, and performance-focused architecture."
        keywords="MERN Stack Developer, React.js, Node.js, Express.js, and MongoDB"
      /> */}

      <main className="bg-white dark:bg-gray-900 transition-colors duration-300">

        {/* ===================== ABOUT HERO SECTION ===================== */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16 text-center">
          <img
            src={profileImg}
            loading="lazy"
            alt="profile-img"
            className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover mx-auto border-2 border-blue-500 dark:border-blue-400"
          />

          <article className="max-w-3xl mx-auto mt-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Nisha Bangali
            </h1>

            <h2 className="mt-4 text-lg sm:text-xl md:text-2xl font-semibold text-blue-600 dark:text-blue-400">
              Full Stack Developer (MERN Stack)
            </h2>

            <p className="mt-6 text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I build scalable, secure, and user-centric web applications with
              clean code, modern UI, and performance-focused architecture.
            </p>
          </article>
        </section>

        {/* ===================== ABOUT ME SECTION ===================== */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 flex flex-col md:flex-row gap-12 items-center">
          
          <article className="md:flex-1">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h3>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-5">
              I am <strong>Nisha Bangali</strong>, a passionate{" "}
              <strong>Full Stack Developer (MERN Stack)</strong> based in{" "}
              <strong>Indore, India</strong>, with hands-on experience in building
              scalable, secure, and user-centric web applications.
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-5">
              I have worked on real-world projects including{" "}
              <strong>job portals, learning management systems, and real-time chat applications</strong>.
              I enjoy turning complex problems into simple, elegant solutions.
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I am a quick learner, strong problem solver, and collaborative team
              player, eager to grow and contribute to impactful projects.
            </p>
          </article>

          <div className="md:flex-1 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
              alt="Coding Setup"
              loading="lazy"
              className="w-full max-w-sm sm:max-w-md rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* ===================== EXPERIENCE SECTION ===================== */}
        <section className="bg-gray-50 dark:bg-gray-800 py-16 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col-reverse md:flex-row gap-12 items-center">
            
            <article className="md:flex-1">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Professional Experience
              </h3>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-5">
                I worked as a <strong>Full Stack Developer Intern (MERN Stack)</strong> at{" "}
                <strong>VEPL Consultancy Pvt. Ltd.</strong>, gaining real-world
                experience in building scalable web applications.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-5">
                Key projects included a <strong>Job Portal Application</strong> and
                a <strong>Real-Time Chat Application</strong> using Socket.IO.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I worked on <strong>REST APIs, React UI, Tailwind CSS</strong>, and
                testing/debugging, following production-ready standards.
              </p>
            </article>

            <div className="md:flex-1 flex justify-center">
              <img
                src="https://png.pngtree.com/png-vector/20251029/ourmid/pngtree-website-design-wiz-responsive-across-all-devices-png-image_17858473.webp"
                loading="lazy"
                alt="experience img"
                className="w-full max-w-sm sm:max-w-md"
              />
            </div>
          </div>
        </section>

      </main>
    </>
  );
};

export default About;
