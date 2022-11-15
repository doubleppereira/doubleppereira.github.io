import React from 'react';
import Fade from 'react-reveal/Fade';

interface FooterProps {
  data: MainData;
}

const SocialNetworks: React.FC<{ social: SocialNetwork[] }> = ({ social }) => (
  <>
    {social.map((network: SocialNetwork) => (
      <li key={network.name}>
        <a href={network.url}>
          <i className={network.className}></i>
        </a>
      </li>
    ))}
  </>
);

const Footer: React.FC<FooterProps> = ({ data }) => {
  if (!data) return null;

  return (
    <footer>
      <div className="row">
        <Fade bottom>
          <div className="twelve columns">
            <ul className="social-links">
              <SocialNetworks social={data.social} />
            </ul>

            <ul className="copyright">
              <li>&copy; Copyright 2022 Pedro Pereira</li>
              <li>
                Design by{' '}
                <a title="Styleshout" href="http://www.styleshout.com/">
                  Styleshout
                </a>
              </li>
            </ul>
          </div>
        </Fade>

        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
