import React from "react";
import "../styles/about.css";

function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          
          {/* About Text */}
          <div className="about-text">
            <p>
              Hello! I'm <strong>Nisha Bangali</strong>, a passionate Full Stack
              Developer currently pursuing <strong>BCA at Government Holkar Science College, Indore</strong>.
            </p>
            <p>
              I specialize in frontend and backend technologies including{" "}
              <strong>React.js, Node.js, Express.js, and MongoDB</strong>.
            </p>
            <p>
              Through self-learning and projects, I’ve built applications like{" "}
              <em>Job Board, Weather App, Blog App, Quiz App, and an AI Chatbot</em>.
            </p>
            <p>
              I enjoy solving problems, exploring new tools, and contributing to impactful
              solutions in web development.
            </p>
            <div className="about-buttons">
              <a href="#" className="btn btn-primary">
                My Resume
              </a>
            </div>
          </div>

          {/* About Image */}
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Coding Setup"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
