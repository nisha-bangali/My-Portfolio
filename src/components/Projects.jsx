import React from "react";
import "../styles/project.css";
import { projects } from "../utility/Data";

function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-container">
          {projects.map((project, index) => (
            <div className="card project-item" key={index}>
              <div className="project-image">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="project-details">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="btn btn-outline">
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

