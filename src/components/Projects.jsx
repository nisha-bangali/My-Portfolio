
import React from "react";
import { projects } from "../utils/Data";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";

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
          {projects.slice(0, 3).map((project, index) => (
            <ProjectCard project={project} index={index} />
          ))}
        </div>
        <button className="bg-blue-500 px-6 py-3 my-8 mx-130 font-bold text-white hover:bg-blue-600 rounded-xl duration-300 transition-all">
          <Link to="/projects">View All</Link>
          </button>
      </div>
    </section>
  );
} 

export default Projects;
