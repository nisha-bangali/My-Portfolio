

import React, { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";

function Header() {
   const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on resize
  useEffect(() => {
    const handleResize = () => setMenuOpen(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-md z-50 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <nav className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            Nisha<span className="text-blue-500">Bangali</span>
          </div>

          {/* Desktop Nav */}
          <ul
            className={`md:flex md:items-center md:gap-6 absolute md:static left-0 top-full w-full md:w-auto bg-white dark:bg-gray-900 shadow-md md:shadow-none transition-all duration-300 ease-in-out ${
              menuOpen ? "flex flex-col p-6" : "hidden"
            }`}
          >
            {["home", "about", "skills", "services", "projects", "contact"].map(
              (item) => (
                <li key={item} className="my-2 md:my-0">
                  <a
                    href={`#${item}`}
                    onClick={() => setMenuOpen(false)}
                    className="block text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 font-medium transition-colors duration-300"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                </li>
              )
            )}

            {/* Theme Toggle */}
            <button onClick={toggleTheme} className="text-center w-10">
            {theme === "dark" ? (
              <i className="fas fa-sun text-blue-800"></i>
            ) : (
              <i className="fas fa-moon text-blue-500"></i>
            )}
          </button>
          </ul>

          {/* Mobile Hamburger */}
          <div
            className="md:hidden cursor-pointer text-2xl text-gray-800 dark:text-gray-200"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className="fas fa-bars"></i>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;

