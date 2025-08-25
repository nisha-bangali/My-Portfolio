import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Brand */}
        <div className="footer-brand">
          <h2>Nisha Bangali</h2>
          <p>Full Stack Developer | Passionate Learner</p>
        </div>

        {/* Footer Links */}
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="footer-socials">
          <a href="https://github.com/nisha-bangali" target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/nisha-bangali-826737332" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>

        {/* Bottom Note */}
        <div className="footer-bottom">
          <p>© 2025 Nisha Bangali. Built with ❤️ using React.js</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
