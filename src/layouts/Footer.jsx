import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.footer
      className="relative bg-gray-900/70 backdrop-blur-md py-12 border-t border-gray-700 p-4"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

          {/* Brand Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold text-white mb-4">Your Brand</h3>
            <p className="text-sm leading-relaxed text-gray-300">
              A brief description of your company or portfolio. We build amazing products that
              solve real-world problems with creativity and passion.
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#home" className="hover:text-white transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors duration-200">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-6 text-gray-400">
              {/* Twitter */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:text-white transition-transform duration-200 transform hover:scale-125"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.34-1.6.57-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.49-1.75.85-2.73 1.04-.78-.83-1.89-1.35-3.13-1.35-2.36 0-4.28 1.92-4.28 4.28 0 .34.04.67.11.99-3.56-.18-6.73-1.89-8.85-4.48-.37.64-.58 1.39-.58 2.19 0 1.48.75 2.79 1.88 3.56-.69-.02-1.34-.21-1.91-.53-.01.01-.01.02-.01.03 0 2.08 1.48 3.82 3.44 4.21-.36.1-.74.15-1.13.15-.27 0-.54-.03-.8-.08.55 1.71 2.14 2.96 4.02 2.99-1.47 1.15-3.33 1.84-5.36 1.84-.35 0-.7-.02-1.04-.06 1.9 1.22 4.15 1.92 6.57 1.92 7.88 0 12.21-6.53 12.21-12.22 0-.19-.01-.39-.01-.58.84-.61 1.56-1.37 2.14-2.24z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-white transition-transform duration-200 transform hover:scale-125"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.23 0H1.77C.79 0 0 .79 0 1.77v20.46C0 23.21.79 24 1.77 24h20.46c.98 0 1.77-.79 1.77-1.77V1.77c0-.98-.79-1.77-1.77-1.77zM7.05 20.23H3.84V9.29h3.21v10.94zM5.44 7.9c-1.07 0-1.94-.87-1.94-1.94s.87-1.94 1.94-1.94 1.94.87 1.94 1.94c0 1.07-.87 1.94-1.94 1.94zm15.65 12.33h-3.21v-5.3c0-1.27-.03-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.81v5.39h-3.21V9.29h3.08v1.39c.42-.8 1.44-1.74 3.03-1.74 3.24 0 3.84 2.13 3.84 4.9v6.38z" />
                </svg>
              </a>
              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-white transition-transform duration-200 transform hover:scale-125"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.836 2.809 1.305 3.492.997.107-.775.418-1.305.762-1.606-2.665-.3-5.466-1.332-5.466-5.93 0-1.312.467-2.383 1.236-3.221-.124-.301-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.875.118 3.176.77.838 1.233 1.909 1.233 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.191.694.802.576C20.56 21.8 24 17.302 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-4">Subscribe to Our Newsletter</h4>
            <form className="flex flex-col sm:flex-row gap-3 ">
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email for newsletter"
                className="flex-grow px-4 py-2 rounded-lg bg-gray-800 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-gradient-to-r from-pink-500 to-orange-500 text-white font-bold rounded-lg hover:from-pink-600 hover:to-orange-600 transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500 select-none">
          <p>© {new Date().getFullYear()} Your Brand. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
