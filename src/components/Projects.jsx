
import React from "react";
import { projects } from "../utils/Data";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12 relative">
          My Projects
          <span className="block w-16 h-1 bg-blue-500 mx-auto mt-3"></span>
        </h2>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition transform hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image */}
              <div className="h-48 w-full overflow-hidden">
              <Link to={`/projects/${project.id}`}>
                  <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                </Link>
              </div>

              {/* Details */}
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.shortDescription}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((techStack, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded text-xs font-medium"
                    >
                      {techStack}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 border border-blue-500 text-blue-500 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition cursor-pointer"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
