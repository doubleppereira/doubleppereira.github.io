import { useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import './App.css';
import Cursor from './Components/Cursor';
import Nav from './Components/Nav';
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Testimonials from './Components/Testimonials';
import Booking from './Components/Booking';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import RevealOnScroll from './Components/RevealOnScroll';

const GA_TRACKING_ID = 'UA-110570651-1';

const loadResumeData = async (): Promise<ResumeData> => {
  const res = await fetch('./resumeData.json', { cache: 'no-cache' });
  if (!res.ok) throw new Error(`resumeData fetch failed: ${res.status}`);
  return res.json();
};

const App = () => {
  const [data, setData] = useState<ResumeData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    ReactGA.initialize(GA_TRACKING_ID);
    ReactGA.pageview(window.location.pathname);
    loadResumeData()
      .then(setData)
      .catch((e: unknown) => {
        setError(e instanceof Error ? e.message : 'Failed to load data');
      });
  }, []);

  if (error) {
    return (
      <div style={{ padding: 48 }}>
        <p>Something went wrong loading content.</p>
      </div>
    );
  }

  if (!data) return null;

  const { main, resume, portfolio, testimonials } = data;

  return (
    <div className="App">
      <Cursor />
      <Nav main={main} />
      <Hero main={main} />
      <div className="section-divider" />
      <About
        main={main}
        workCount={resume.work.length}
        projectCount={portfolio.projects.length}
      />
      <div className="section-divider" />
      <Skills skills={resume.skills} />
      <div className="section-divider" />
      <Experience work={resume.work} />
      <div className="section-divider" />
      <Projects projects={portfolio.projects} />
      <div className="section-divider" />
      <Testimonials testimonials={testimonials} />
      <div className="section-divider" />
      <Booking
        calUsername={main.calUsername}
        calEvent={main.calEvent ?? '30min'}
      />
      <Contact main={main} />
      <Footer main={main} />
      <RevealOnScroll />
    </div>
  );
};

export default App;
