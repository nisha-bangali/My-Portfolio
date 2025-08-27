
import { useState } from "react";
import { skills } from "../utils/Data";

function Skills() {
  const [filter, setFilter] = useState("all");

  const filteredSkills =
    filter === "all" ? skills : skills.filter((skill) => skill.category === filter);

  return (
    <section
      id="skills"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12 relative">
          My Skills
          <span className="block w-16 h-1 bg-blue-500 mx-auto mt-3"></span>
        </h2>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-2 md:gap-4 flex-wrap mb-10">
          {["all", "frontend", "backend", "tools"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg border-2 font-semibold transition 
              ${
                filter === cat
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-transparent text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="flex flex-wrap justify-center md:gap-6 sm:gap-4 gap-2">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="md:w-40 w-30 flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition transform hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-16 h-16 mb-3"
              />
              <p className="font-medium text-gray-800 dark:text-gray-200">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
