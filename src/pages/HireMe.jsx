import React from "react";

const HireMe = () => {
  return (
    <main className="bg-white dark:bg-gray-900 transition-colors duration-300">

      {/* ===================== HERO SECTION ===================== */}
      <section className="max-w-7xl mx-auto px-6 pt-28 pb-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Hire Me
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Looking for a skilled <strong>Full Stack Developer (MERN Stack)</strong> to build
          scalable, secure, and modern web applications? Let’s work together.
        </p>
      </section>

      {/* ===================== WHY HIRE ME ===================== */}
      <section className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Why Hire Me?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                MERN Stack Expertise
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Strong hands-on experience with React.js, Node.js, Express.js, and MongoDB
                to build complete full-stack solutions.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Clean & Scalable Code
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                I follow best practices, modular architecture, and performance-focused
                development for long-term scalability.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Real-World Experience
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Experience working on production-level applications such as job portals,
                LMS platforms, and real-time chat systems.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Responsive UI / UX
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Modern, mobile-first interfaces using Tailwind CSS with a focus on usability
                and accessibility.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Strong Problem Solver
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                I enjoy breaking down complex problems into simple, efficient, and elegant
                solutions.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Team-Friendly & Reliable
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Comfortable working independently or in teams, following agile workflows
                and clear communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== WHAT I CAN HELP WITH ===================== */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          What I Can Help You With
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <ul className="space-y-4 text-gray-700 dark:text-gray-300">
            <li>✔ Full Stack Web Application Development</li>
            <li>✔ RESTful API Design & Integration</li>
            <li>✔ Authentication & Authorization (JWT)</li>
            <li>✔ Responsive Frontend Development</li>
          </ul>

          <ul className="space-y-4 text-gray-700 dark:text-gray-300">
            <li>✔ Real-Time Applications (Socket.IO)</li>
            <li>✔ Dashboard & Admin Panel Development</li>
            <li>✔ Performance Optimization</li>
            <li>✔ Bug Fixing & Feature Enhancements</li>
          </ul>
        </div>
      </section>

    </main>
  );
};

export default HireMe;
