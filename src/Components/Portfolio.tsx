import React from 'react';
import Zoom from 'react-medium-image-zoom';
import Fade from 'react-reveal/Fade';

interface PortfolioProps {
  data: Portfolio;
}

const Portfolio: React.FC<PortfolioProps> = ({ data }) => {
  if (!data) return null;

  const projects = data.projects.map((projects, index) => {
    let projectImage = 'images/portfolio/' + projects.image;

    return (
      <div key={index} className="columns portfolio-item">
        <div className="item-wrap">
          <Zoom>
            <img alt={projects.title} src={projectImage} />
          </Zoom>
          <div style={{ textAlign: 'center' }}>
            <a href={projects.url} rel="noreferrer" target="_blank">
              {projects.title}
            </a>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section id="portfolio">
      <Fade left duration={1000} distance="40px">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>

            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {projects}
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Portfolio;
