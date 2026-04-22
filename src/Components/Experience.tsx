import { useState } from 'react';

interface ExperienceProps {
  work: Work[];
}

const INITIAL_COUNT = 5;

const Experience = ({ work }: ExperienceProps) => {
  const [showAll, setShowAll] = useState(false);
  const items = showAll ? work : work.slice(0, INITIAL_COUNT);

  return (
    <section className="experience" id="experience">
      <div className="section-header reveal">
        <span className="section-number">03 — Experience</span>
        <h2>Where I've worked</h2>
      </div>
      <div className="exp-list">
        {items.map((w, i) => {
          const delay = i < 3 ? `reveal-delay-${i}` : '';
          return (
            <div key={`${w.company}-${w.years}`} className={`exp-item reveal ${delay}`}>
              <div className="exp-date">{w.years}</div>
              <div className="exp-content">
                <div className="exp-role">{w.title}</div>
                <div className="exp-company">{w.company}</div>
                <div className="exp-desc">{w.description}</div>
              </div>
              <div className="exp-arrow">↗</div>
            </div>
          );
        })}
      </div>
      {work.length > INITIAL_COUNT && (
        <button
          className="exp-show-more"
          onClick={() => setShowAll((v) => !v)}
          type="button"
        >
          <span />
          {showAll ? 'Show less' : `Show all ${work.length} positions`}
          <span />
        </button>
      )}
    </section>
  );
};

export default Experience;
