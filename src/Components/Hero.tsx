import { useEffect, useRef } from 'react';

interface HeroProps {
  main: MainData;
}

const Hero = ({ main }: HeroProps) => {
  const rootRef = useRef<HTMLElement | null>(null);
  const [firstName, ...rest] = main.name.split(' ');
  const lastName = rest.join(' ');
  const photo = `images/${main.image}`;

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const els = root.querySelectorAll<HTMLElement>('.hero-anim');
    const timers: number[] = [];
    els.forEach((el, i) => {
      const t = window.setTimeout(() => {
        el.classList.add('visible');
        el.style.setProperty('opacity', '1', 'important');
        el.style.setProperty('transform', 'translateY(0)', 'important');
      }, 150 + i * 180);
      timers.push(t);
    });
    return () => timers.forEach((t) => window.clearTimeout(t));
  }, []);

  return (
    <section className="hero" id="home" ref={rootRef}>
      <div className="hero-content">
        <div className="hero-label hero-anim">Portfolio — 2026</div>
        <h1 className="hero-name hero-anim">
          {firstName}
          <br />
          <em>{lastName}</em>
        </h1>
        <p className="hero-tagline hero-anim">{main.description}</p>
        <div className="hero-available hero-anim">
          <span className="dot-pulse" />
          Available for new projects
        </div>
        <div className="hero-actions hero-anim">
          <a href="#booking" className="btn btn-primary">
            Book a call ↗
          </a>
          <a href="#experience" className="btn btn-outline">
            See my work
          </a>
          <a
            href={main.resumedownload}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            Download CV ↓
          </a>
        </div>
      </div>
      <div className="hero-photo-wrap hero-anim">
        <img className="hero-photo" src={photo} alt={main.name} />
      </div>
      <div className="hero-scroll hero-anim">
        <div className="hero-scroll-line" />
        Scroll
      </div>
    </section>
  );
};

export default Hero;
