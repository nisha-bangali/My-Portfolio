

// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// const Navbar = () => {
//   const [activeLink, setActiveLink] = useState('Home');
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const navLinks = ['Home', 'About', 'Skills', 'Services', 'Projects'];

//   return (
//     <motion.nav 
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="w-full py-6 px-4 sm:px-8 lg:px-16 xl:px-24 flex justify-between items-center bg-transparent"
//     >
//       {/* Logo */}
//       <motion.div 
//         whileHover={{ scale: 1.05 }}
//         className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent"
//       >
//         Portfolio
//       </motion.div>

//       {/* Desktop Navigation */}
//       <div className="hidden md:flex items-center gap-8">
//         <ul className="flex items-center gap-6 text-lg">
//           {navLinks.map((link) => (
//             <motion.li
//               key={link}
//               whileHover={{ y: -2 }}
//               whileTap={{ scale: 0.95 }}
//               className={`relative px-2 py-1 cursor-pointer ${
//                 activeLink === link ? 'text-white' : 'text-gray-300 hover:text-white'
//               }`}
//               onClick={() => setActiveLink(link)}
//             >
//               {link}
//               {activeLink === link && (
//                 <motion.div
//                   layoutId="navUnderline"
//                   className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-pink-500 to-orange-500"
//                   transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
//                 />
//               )}
//             </motion.li>
//           ))}
//         </ul>

//         {/* Contact Button */}
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="bg-gradient-to-r from-pink-500 to-orange-500 px-6 py-2 rounded-full text-white font-medium shadow-lg hover:shadow-pink-500/30 transition-all"
//         >
//           Contact Me
//         </motion.button>
//       </div>

//       {/* Mobile Menu Button */}
//       <button 
//         className="md:hidden text-white focus:outline-none z-50"
//         onClick={() => setIsMenuOpen(!isMenuOpen)}
//       >
//         <div className="w-8 flex flex-col gap-1.5">
//           <span className={`h-0.5 bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
//           <span className={`h-0.5 bg-white transition-all ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
//           <span className={`h-0.5 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
//         </div>
//       </button>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <motion.div 
//           initial={{ opacity: 0, x: '100%' }}
//           animate={{ opacity: 1, x: 0 }}
//           exit={{ opacity: 0, x: '100%' }}
//           transition={{ type: 'spring', bounce: 0.1 }}
//           className="fixed inset-0 bg-gray-900/95 backdrop-blur-md z-40 flex flex-col items-center justify-center gap-12 md:hidden"
//         >
//           {navLinks.map((link) => (
//             <motion.div
//               key={link}
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.1 * navLinks.indexOf(link) }}
//               className={`text-2xl ${activeLink === link ? 'text-white' : 'text-gray-400'}`}
//               onClick={() => {
//                 setActiveLink(link);
//                 setIsMenuOpen(false);
//               }}
//             >
//               {link}
//             </motion.div>
//           ))}
//           <motion.button
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.6 }}
//             className="bg-gradient-to-r from-pink-500 to-orange-500 px-8 py-3 rounded-full text-white font-medium text-xl mt-4"
//           >
//             Contact Me
//           </motion.button>
//         </motion.div>
//       )}
//     </motion.nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll"

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skill", href: "#skills" },
  { label: "Service", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-50 backdrop-blur-md bg-gray-900/40 shadow-lg px-6 sm:px-12 lg:px-20 py-4 flex justify-between items-center border-b border-white/10"
    >
      {/* Logo */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent tracking-wide cursor-pointer"
      >
        Portfolio
      </motion.div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        <ul className="flex items-center gap-6 text-lg font-medium">
          {navLinks.map((link) => (
            <motion.li
              key={link}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-2 py-1 cursor-pointer transition-all duration-300 ${
                activeLink === link
                  ? "text-white"
                  : "text-gray-300 hover:text-white"
              }`}
              onClick={() => setActiveLink(link)}
            >
            
             <AnchorLink href={link.href} className={`relative px-2 py-1 cursor-pointer transition-all duration-300 ${
                activeLink === link
                  ? "text-white"
                  : "text-gray-300 hover:text-white"
              }`} offset={50}>{link.label}</AnchorLink>
              {activeLink === link && (
                <motion.div
                  layoutId="navUnderline"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.li>
          ))}
        </ul>

        {/* Contact Button */}
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 12px rgba(236,72,153,0.5)" }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-pink-500 to-orange-500 px-6 py-2 rounded-full text-white font-medium shadow-lg hover:shadow-pink-500/40 transition-all"
        >
          Contact Me
        </motion.button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden focus:outline-none z-50 text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className="w-8 flex flex-col gap-1.5">
          <span
            className={`h-0.5 bg-white rounded transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`h-0.5 bg-white rounded transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`h-0.5 bg-white rounded transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </div>
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-gray-900/95 backdrop-blur-lg flex flex-col items-center justify-center gap-10 md:hidden"
          >
            {navLinks.map((link) => (
              <motion.div
                key={link}
                whileHover={{ scale: 1.1 }}
                className={`text-2xl font-medium tracking-wide ${
                  activeLink === link ? "text-white" : "text-gray-400 hover:text-white"
                }`}
                onClick={() => {
                  setActiveLink(link);
                  setIsMenuOpen(false);
                }}
              >
                {link}
              </motion.div>
            ))}

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(236,72,153,0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-pink-500 to-orange-500 px-8 py-3 rounded-full text-white font-medium text-lg shadow-lg hover:shadow-pink-500/40 transition-all mt-4"
            >
              Contact Me
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
