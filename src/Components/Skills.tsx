interface SkillsProps {
  skills: Skill[];
}

const Skills = ({ skills }: SkillsProps) => {
  return (
    <section className="skills" id="skills">
      <div className="section-header reveal">
        <span className="section-number">02 — Skills</span>
        <h2>My toolkit</h2>
      </div>
      <div className="skills-grid">
        {skills.map((s, i) => {
          const pct = parseInt(s.level, 10);
          const delay = `reveal-delay-${Math.min(i % 4, 3)}`;
          return (
            <div key={s.name} className={`skill-item reveal ${delay}`}>
              <div className="skill-top">
                <span className="skill-name">{s.name}</span>
                <span className="skill-pct">{s.level}</span>
              </div>
              <div className="skill-bar">
                <div className="skill-fill" data-pct={pct} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
