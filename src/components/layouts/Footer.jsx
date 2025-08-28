import React from "react";

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 border-t border-gray-200 dark:border-gray-700 py-10 text-center">
      <div className="container mx-auto px-6 flex flex-col items-center gap-6">
<div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
  {/* Brand */}
  <div className="footer-brand">
    <h2 className="text-2xl font-bold text-blue-500">Nisha Bangali</h2>
    <p className="text-gray-600 dark:text-gray-400">
      Full Stack Developer | Passionate Learner
    </p>
  </div>

  {/* Links */}
  <div className="flex flex-wrap justify-center gap-4 mr-5">
    {["Home", "About", "Skills", "Services", "Projects", "Contact"].map(
      (link, index) => (
        <a
          key={index}
          href={`#${link.toLowerCase()}`}
          className="text-gray-700 dark:text-gray-300 font-medium hover:text-blue-500 dark:hover:text-blue-400 transition"
        >
          {link}
        </a>
      )
    )}
  </div>

  {/* Social Icons */}
  <div className="flex gap-5 text-2xl">
    <a
      href="https://github.com/nisha-bangali"
      target="_blank"
      rel="noreferrer"
      className="hover:text-blue-500 dark:hover:text-blue-400 transition"
    >
      <i className="fab fa-github"></i>
    </a>
    <a
      href="https://www.linkedin.com/in/nisha-bangali-826737332"
      target="_blank"
      rel="noreferrer"
      className="hover:text-blue-500 dark:hover:text-blue-400 transition"
    >
      <i className="fab fa-linkedin"></i>
    </a>
  </div>
</div>


        {/* Bottom Note */}
        <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          <p>© 2025 Nisha Bangali. Built with ❤️ using React.js</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
