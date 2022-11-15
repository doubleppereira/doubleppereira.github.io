import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';
import Testimonials from './Components/Testimonials';

const App: React.FC = () => {
  const [resumeData, setResumeData] = useState<ResumeData>();

  const getResumeData = () => {
    $.ajax({
      url: './resumeData.json',
      dataType: 'json',
      cache: false,
      success: (data: ResumeData) => {
        setResumeData(data);
      },
      error: (_xhr, _status, err) => {
        console.log(err);
        alert(err);
      },
    });
  };

  useEffect(() => {
    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);
    getResumeData();
  }, []);

  return (
    <div className="App">
      <Header data={resumeData?.main!} />
      <About data={resumeData?.main!} />
      <Resume data={resumeData?.resume!} />
      <Portfolio data={resumeData?.portfolio!} />
      <Testimonials data={resumeData?.testimonials!} />
      <Contact data={resumeData?.main!} />
      <Footer data={resumeData?.main!} />
    </div>
  );
};

export default App;
