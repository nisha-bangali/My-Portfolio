import { useState } from "react";
import { skills } from "../utility/Data"
import "../styles/skills.css"


function Skills() {
  const [filter, setFilter] = useState("all");

  const filteredSkills =
    filter === "all" ? skills : skills.filter((skill) => skill.category === filter);

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>

        {/* Filter Buttons */}
        <div className="skills-filter">
          {["all", "frontend", "backend", "tools"].map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? "active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div key={index} className="skill-item">
              <img src={skill.icon} alt={skill.name} />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;