import React, { useState, useEffect } from "react";
import "../styles/header.css";

function Header({ toggleTheme, isDark }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on scroll or resize
  useEffect(() => {
    const handleResize = () => setMenuOpen(false);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          {/* Logo */}
          <div className="logo">Nisha<span>Bangali</span></div>

          {/* Navigation Links */}
          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
            <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
            <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
                      {/* Theme Toggle */}
          <div className="theme-toggle" onClick={toggleTheme}>
            {isDark ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
          </div>
          </ul>



          {/* Hamburger for Mobile */}
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <i className="fas fa-bars"></i>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
