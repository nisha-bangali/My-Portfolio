import React from "react";
import "../styles/home.css";
import profileImage from "../assets/profile-img.png"

function Home() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          {/* Left Side Text */}
          <div className="hero-text">
            <h1>
              I'm Nisha Bangali,<br />
              <span>Full Stack Developer</span>
            </h1>
            <p>
              Motivated and detail-oriented Full Stack Developer skilled in
              building responsive, scalable, and user-centric applications.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn btn-outline">
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="hero-image">
            <img
              src={profileImage}
              alt="Nisha Bangali"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
