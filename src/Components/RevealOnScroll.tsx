import { useEffect } from 'react';

const RevealOnScroll = () => {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add('visible');
          io.unobserve(e.target);
        });
      },
      { threshold: 0.12 }
    );
    window._revealIo = io;

    const observeAll = () => {
      document
        .querySelectorAll<HTMLElement>('.reveal:not(.visible)')
        .forEach((el) => io.observe(el));
    };
    observeAll();

    const mo = new MutationObserver(observeAll);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
      window._revealIo = undefined;
    };
  }, []);

  return null;
};

export default RevealOnScroll;
