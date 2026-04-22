import { useEffect, useState } from 'react';
import { GithubIcon, LinkedInIcon } from './Icons';

interface NavProps {
  main: MainData;
}

const Nav = ({ main }: NavProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkedin = main.social.find((s) => s.name === 'linkedin')?.url;

  return (
    <nav className={`site-nav${scrolled ? ' scrolled' : ''}`}>
      <a className="nav-logo" href="#home">
        PP
      </a>
      <ul className="nav-links">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#booking">Book a call</a>
        </li>
      </ul>
      <div className="nav-icons">
        <a
          className="nav-icon"
          href={main.github}
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <GithubIcon />
        </a>
        {linkedin && (
          <a
            className="nav-icon"
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <LinkedInIcon />
          </a>
        )}
        <a
          className="nav-icon nav-cv"
          href={main.resumedownload}
          target="_blank"
          rel="noopener noreferrer"
          title="Download CV"
        >
          CV ↓
        </a>
      </div>
    </nav>
  );
};

export default Nav;
