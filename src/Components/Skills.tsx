interface SkillsProps {
  skills: SkillGroup[];
}

const Skills = ({ skills }: SkillsProps) => {
  return (
    <section className="skills" id="skills">
      <div className="section-header reveal">
        <span className="section-number">02 — Skills</span>
        <h2>My toolkit</h2>
      </div>
      <div className="skills-grid">
        {skills.map((group, i) => {
          const delay = `reveal-delay-${Math.min(i % 4, 3)}`;
          return (
            <div key={group.category} className={`skill-group reveal ${delay}`}>
              <div className="skill-group-label">{group.category}</div>
              <ul className="skill-tags">
                {group.items.map((item) => (
                  <li key={item} className="skill-tag">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
