import "./Skills.css";
import { skills } from "../../../data/skills";

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">

        <div className="skills-grid">

          {/* Introduction */}
          <div className="skills-intro">
            <p className="skills-label">Skills</p>

            <h2>Technical Capabilities and Tools</h2>

            <p>
              Proficiency across languages, frameworks, and platforms
              essential for modern data and AI work. Continuously
              developing skills through hands-on projects and learning.
            </p>
          </div>

          {/* Skill Categories */}
          {skills.map((group) => (
            <div className="skill-card" key={group.category}>

              <h3>{group.category}</h3>

              <div className="skill-list">
                {group.items.map((skill) => (
                  <span className="skill-item" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;