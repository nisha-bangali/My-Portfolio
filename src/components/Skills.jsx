import React from "react";
import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Frontend Development",
    skills: [
      { name: "HTML & CSS", icon: "🎨", level: 95 },
      { name: "JavaScript (ES6+)", icon: "📜", level: 90 },
      { name: "React", icon: "⚛️", level: 85 },
      { name: "Tailwind CSS", icon: "💨", level: 95 },
      { name: "Next.js", icon: "🚀", level: 75 },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", icon: "🟢", level: 80 },
      { name: "Express.js", icon: "⚡", level: 75 },
    ],
  },
  {
    category: "Databases & Tools",
    skills: [
      { name: "MongoDB", icon: "🍃", level: 65 },
      { name: "Git & GitHub", icon: "🐙", level: 90 },
      { name: "Figma", icon: "🖌️", level: 80 },
    ],
  },
];

// Progress Bar Component
const ProgressBar = ({ level }) => {
  return (
    <div className="relative h-2 rounded-full mt-2 overflow-hidden bg-gray-800/50">
      <motion.div
        className="absolute top-0 left-0 h-full bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 rounded-full shadow-lg"
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.8 }}
      />
    </div>
  );
};

const SkillsPage = () => {
  return (
    <section
      id="skills"
      className="relative min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
    >
      {/* Background floating shape */}
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute -top-32 -left-32 w-72 h-72 bg-pink-500/20 blur-3xl rounded-full"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto text-center mb-14"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
          My Skills & Expertise
        </h1>
        <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
          A snapshot of my technical expertise — from crafting pixel-perfect UIs to building optimized back-end solutions.
        </p>
      </motion.div>

      {/* Skill Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {skillsData.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="bg-gray-800/40 backdrop-blur-md border border-gray-700/50 p-6 rounded-2xl hover:border-pink-500/40 hover:shadow-lg hover:shadow-pink-500/10 transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold mb-6 text-white border-b border-gray-700 pb-2">
              {category.category}
            </h3>

            <div className="space-y-6">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-lg font-medium text-gray-200 flex items-center">
                      <span className="mr-2 text-xl">{skill.icon}</span>
                      {skill.name}
                    </span>
                    <span className="text-sm text-gray-400">{skill.level}%</span>
                  </div>
                  <ProgressBar level={skill.level} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsPage;
