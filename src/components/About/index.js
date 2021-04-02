// == Module imports
import React, { useRef } from 'react';

// == Local imports
import profilePic from '../../assets/images/kamil-profile.jpg';
import useAnimateOnScroll from '../../utils/useAnimateOnScroll';

const About = () => {

  const aboutRef = useRef(null);
  useAnimateOnScroll(aboutRef, 0, 80);

  return (
    <section className="about" id="about">
      <div ref={aboutRef}>
        <h2 className="about__title">
          About me
        </h2>
        <div className="container">
          <h3 className="about__subtitle">
            "Jack of all trades, master of none"
          </h3>
          <div className="about__content">
            <img className="about__content__image" src={profilePic} alt="profile-kamil" />
            <div>
              <p>
                I'm a 34 year-old French <span className="--bold">Fullstack Web Developer </span>based in Paris. After a few years working as a Marketing Consultant I decided to pursue my dream adventure. I worked as a diving instructor and resort manager for 5 years all around the world: Philippines, Maldives, Oman, Mexico, Honduras, Australia, Indonesia...
            Today I'm on a new journey. I focus on writing simple and functional code to create intuitive applications.
            <br />
            The rest of the time, I enjoy coffee, playing the guitar and taking underwater pictures.
            </p>
            </div>
          </div>
          <h3 className="about__subtitle">
            Stack
          </h3>
          <div className="about__content">
            <p className="about__content__text">
              <span className="--bold">Front-end</span> HTML, CSS, ES6 Javascript, SCSS, React, Redux, Axios, Leaflet, Gsap. <br />
              <span className="--bold">Back-end</span> Node.js, Express, PostgreSQL, Sequelize, Firebase, JWT, Heroku, MongoDB.
            </p>
          </div>
          <h3 className="about__subtitle">
            Education
      </h3>
          <ul>
            <li className="about__content__descr">
              <p className="about__content__text">
                <span className="--bold">2021 </span>
                <span> Web Developer Professional Certification (Bac+2) - Ecole O'Clock </span>
              </p>
            </li>
            <li className="about__content__descr">
              <p className="about__content__text">
                <span className="--bold">2010 </span>
                <span> Master's Degree in Marketing & Strategy (Bac+5) - Université Paris Dauphine</span>
              </p>
            </li>
          </ul>
        </div>

      </div>
    </section>
  )
}

export default About;
