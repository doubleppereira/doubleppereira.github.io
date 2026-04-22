import { useEffect } from 'react';

const HOVER_SELECTORS = [
  'a',
  'button',
  '.exp-item',
  '.skill-item',
  '.project-card',
  '.testimonial-card',
  'input',
  'select',
];

const Cursor = () => {
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const dot = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    const spotlight = document.getElementById('spotlight');
    if (!dot || !ring || !spotlight) return;

    let mx = 0,
      my = 0,
      rx = 0,
      ry = 0;
    let rafId = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate(${mx - 4}px,${my - 4}px)`;
      spotlight.style.setProperty('--mx', mx + 'px');
      spotlight.style.setProperty('--my', my + 'px');
    };
    document.addEventListener('mousemove', onMove);

    const animRing = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.transform = `translate(${rx - 18}px,${ry - 18}px)`;
      rafId = requestAnimationFrame(animRing);
    };
    animRing();

    const onEnter = () => document.body.classList.add('hovering');
    const onLeave = () => document.body.classList.remove('hovering');
    const targets = document.querySelectorAll(HOVER_SELECTORS.join(','));
    targets.forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
      targets.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return (
    <>
      <div id="cursor-dot" />
      <div id="cursor-ring" />
      <div id="spotlight" />
    </>
  );
};

export default Cursor;
