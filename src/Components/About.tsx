interface AboutProps {
  main: MainData;
  workCount: number;
  projectCount: number;
}

const YEARS_EXPERIENCE = 14;

const About = ({ main, workCount, projectCount }: AboutProps) => {
  return (
    <section className="about" id="about">
      <div className="about-left reveal">
        <div className="section-number">01 — About</div>
        <h2>
          Building things
          <br />
          that <em>matter.</em>
        </h2>
      </div>
      <div className="about-right">
        <p className="reveal reveal-delay-1">{main.bio}</p>
        <div className="about-stats reveal reveal-delay-2">
          <div>
            <div className="stat-num">{YEARS_EXPERIENCE}+</div>
            <div className="stat-label">Years experience</div>
          </div>
          <div>
            <div className="stat-num">{workCount}</div>
            <div className="stat-label">Companies</div>
          </div>
          <div>
            <div className="stat-num">{projectCount}+</div>
            <div className="stat-label">Projects shipped</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
