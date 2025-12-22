import React from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../utils/Data";

function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Project not found
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 transition-colors">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Back Button */}
        <Link
          to="/"
          className="inline-block mb-6 text-blue-500 hover:underline"
        >
          ← Back to Projects
        </Link>

        {/* Image */}
        <div className="w-full h-[350px] rounded-xl overflow-hidden shadow-lg mb-8">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {project.title}
        </h1>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
          {project.longDescription}
        </p>

        {/* Tech Stack */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
            Features
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
          >
            GitHub Code
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Live Demo
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetails;
