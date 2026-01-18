import React from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../utils/Data";
import Seo from "../seo/SEO";

const Projects = () => {
  return (
    <>
    <Seo 
      title="MERN Stack Developer Projects"
      description=" A collection of real-world projects showcasing my skills in MERN Stack, UI/UX design, and modern web development."
      keywords="MERN Stack Developer, React js, Node js, Express js, MongoDB"
      />
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            My Projects
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of real-world projects showcasing my skills in
            MERN Stack, UI/UX design, and modern web development.
          </p>
        </div>

        {/* Project Grid */}
        <div className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-8
        ">
          {projects.map((project, index) => (
            <ProjectCard
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default Projects;
