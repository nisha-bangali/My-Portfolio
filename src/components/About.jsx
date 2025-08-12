
// export default About;
import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/profile-img.png";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-20 px-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-hidden"
    >
      {/* Animated background circles */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute -top-40 -right-40 w-72 h-72 bg-pink-500 rounded-full blur-3xl"
      ></motion.div>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute -bottom-40 -left-40 w-72 h-72 bg-orange-500 rounded-full blur-3xl"
      ></motion.div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-extrabold text-white mb-4">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400">
              Me
            </span>
          </h1>
          <motion.div
            animate={{ width: ["0%", "80%", "60%"] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-1 bg-gradient-to-r from-pink-500 to-orange-500 mx-auto rounded-full"
          ></motion.div>
        </motion.div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative flex-shrink-0"
          >
            <motion.img
              src={profile}
              alt="Nisha Bangali"
              className="w-72 h-72 rounded-full object-cover border-4 border-pink-500/40 shadow-lg"
              animate={{
                y: [0, -10, 0],
                boxShadow: [
                  "0px 0px 20px rgba(236, 72, 153, 0.5)",
                  "0px 0px 40px rgba(251, 146, 60, 0.5)",
                  "0px 0px 20px rgba(236, 72, 153, 0.5)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 space-y-6"
          >
            <h2 className="text-3xl font-bold text-white">
              Hello, I'm Nisha Bangali
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a 20-year-old aspiring web developer from Dewas district,
              currently pursuing my Bachelor of Computer Applications (BCA) at
              Government Holkar Science College (DAVV University).
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Passionate about creating beautiful, functional websites, I'm a
              hardworking, self-motivated quick learner who thrives on turning
              ideas into digital reality.
            </p>

            {/* Education Card */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-gray-800/50 backdrop-blur-md p-6 rounded-xl border border-gray-700 hover:border-pink-500/40 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400 mb-3">
                Education
              </h3>
              <p className="text-gray-300">
                <span className="font-medium text-white">
                  Bachelor of Computer Applications (BCA)
                </span>
                <br />
                Government Holkar Science College
                <br />
                DAVV University, Indore
              </p>
            </motion.div>

            {/* Skills */}
            <div className="flex flex-wrap gap-3 pt-4">
              {[
                "HTML5",
                "CSS3",
                "JavaScript",
                "React",
                "Tailwind CSS",
                "Git",
              ].map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-gray-800 rounded-full text-sm font-medium text-white border border-gray-700 hover:bg-gradient-to-r hover:from-pink-500/30 hover:to-orange-500/30 transition-all duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            {/* Resume Button */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/resume.pdf"
              download
              className="inline-block px-6 py-3 mt-6 text-lg font-medium text-white bg-gradient-to-r from-pink-500 to-orange-400 rounded-full shadow-lg hover:shadow-pink-500/40 transition-all duration-300"
            >
              📄 Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
