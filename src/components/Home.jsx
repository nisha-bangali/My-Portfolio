import React from "react";
import profile from "../assets/profile-img.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen mt-16 flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"></div>

      {/* Animated Background Blobs */}
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-10 left-10 w-72 h-72 bg-pink-500/30 blur-3xl rounded-full"
      ></motion.div>
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-10 right-10 w-96 h-96 bg-orange-500/20 blur-3xl rounded-full"
      ></motion.div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Floating Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8 relative group"
        >
          <motion.img
            src={profile}
            alt="Nisha Bangali"
            className="w-64 h-64 rounded-full object-cover border-4 border-pink-500/30 shadow-lg"
            animate={{
              y: [0, -10, 0],
              boxShadow: [
                "0px 0px 20px rgba(236,72,153,0.4)",
                "0px 0px 40px rgba(251,146,60,0.4)",
                "0px 0px 20px rgba(236,72,153,0.4)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight"
        >
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
            Nisha Bangali
          </span>
        </motion.h1>

        {/* Typing Animation for Role */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg sm:text-xl text-gray-300 mb-6 font-mono"
        >
          <span className="border-r-2 border-pink-400 pr-1 animate-typing overflow-hidden whitespace-nowrap">
            Web Developer | Full Stack Developer
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I craft beautiful and responsive websites that blend creativity with
          functionality. Let’s turn your ideas into a stunning online
          experience.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 12px rgba(236,72,153,0.6)" }}
            href="#contact"
            className="bg-gradient-to-r from-pink-500 to-orange-500 px-8 py-3 rounded-full font-medium text-white shadow-lg transition-all duration-300"
          >
            🚀 Connect with me
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="/resume.pdf"
            download
            className="border-2 border-gray-400/30 px-8 py-3 rounded-full font-medium text-white hover:border-pink-500 hover:bg-pink-500/10 transition-all duration-300"
          >
            📄 My Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
