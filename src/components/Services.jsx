
import React from "react";

function Services() {
  return (
    <section
      id="services"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12 relative">
          My Services
          <span className="block w-16 h-1 bg-blue-500 mx-auto mt-3"></span>
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Web Development */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center transition transform hover:-translate-y-1 hover:shadow-xl">
            <div className="text-4xl text-blue-500 mb-4">
              <i className="fas fa-laptop-code"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
              Web Development
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Custom web applications built with modern technologies,
              responsive design, and optimal performance.
            </p>
          </div>

          {/* Responsive Design */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center transition transform hover:-translate-y-1 hover:shadow-xl">
            <div className="text-4xl text-blue-500 mb-4">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
              Responsive Design
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Websites that work seamlessly across all devices,
              from desktops to smartphones.
            </p>
          </div>

          {/* Backend Development */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center transition transform hover:-translate-y-1 hover:shadow-xl">
            <div className="text-4xl text-blue-500 mb-4">
              <i className="fas fa-server"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
              Backend Development
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Robust server-side solutions, RESTful APIs, and database
              design for your applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
