import React from 'react';
import Fade from 'react-reveal/Fade';

interface AboutProps {
  data: MainData;
}

const About: React.FC<AboutProps> = ({ data }) => {
  if (!data) return null;

  const name = data.name;
  const profilepic = 'images/' + data.image;
  const bio = data.bio;
  const street = data.address.street;
  const city = data.address.city;
  const state = data.address.state;
  const phone = data.phone;
  const email = data.email;
  const resumeDownload = data.resumedownload;

  return (
    <section id="about">
      <Fade duration={1000}>
        <div className="row">
          <div className="three columns flex">
            <img className="profile-pic" src={profilepic} alt="My Pic" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>

            <p className="bio">{bio}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{name}</span>
                  <br />
                  <span>
                    {street}
                    <br />
                    {city} {state}
                  </span>
                  <br />
                  <span>{phone}</span>
                  <br />
                  <span>{email}</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href={resumeDownload} className="button">
                    <i className="fa fa-download"></i>Download Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default About;
