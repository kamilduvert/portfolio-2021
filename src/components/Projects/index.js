// == Module imports
import React, { useRef } from 'react';

// == Local imports
import useAnimateOnScroll from '../../utils/useAnimateOnScroll';
import project1 from '../../assets/images/project-orizons.png';
import project2 from '../../assets/images/project-rock.png';
import project3 from '../../assets/images/project-ebpp.png';
import project4 from '../../assets/images/project-portfolio.jpg';


const About = () => {

  const aboutRef = useRef(null);
  useAnimateOnScroll(aboutRef, 0, 80);

  const projects = [
    {
      id: 1,
      title: "O'rizons : Your Digital Notebook",
      description: '"Save your memories and share your adventures step by step"',
      stack: 'React.js, Redux, SCSS, Leaflet.js, Node.js, Express, PostgreSQL, Sqitch, JWT, Firebase, Heroku',
      image: project1,
      link: 'https://github.com/kamilduvert/orizons'
    },
    {
      id: 2,
      title: "Rock, Paper & Scissors Game",
      description: '"A simple but classic game! If the player wins, he/she gains 1 point. If the computer wins, the player loses one point."',
      stack: 'React.js, React-Router, SCSS',
      image: project2,
      link: 'https://github.com/kamilduvert/rock-paper-scissors'
    },
    {
      id: 3,
      title: "Landing Page",
      description: '"Rework of an Indonesian NGO homepage. Responsive and Mobile-first"',
      stack: 'HTML, CSS (Javascript only for menu)',
      image: project3,
      link: 'https://github.com/kamilduvert/ebpp'
    },
    {
      id: 4,
      title: "Professional Porfolio",
      description: '"My own Web Developer Portfolio responsive website"',
      stack: 'React.js, SCSS, FormSpree, Gsap animations',
      image: project4,
      link: 'https://github.com/kamilduvert'
    },
  ]

  return (
    <section className="projects" id="projects">
      <div ref={aboutRef}>
        <h2 className="projects__title">
          Projects
        </h2>
        <div className="container projects__cards">
          {projects.map((project) => (
              <article
              key={project.id}
              className="projects__card"
              >
              <img src={project.image} alt={project.title} className="projects__card__img" />
              <div className="projects__card__overlay">
                <h4 className="projects__card__title">{project.title}</h4>
                <p className="projects__card__descr">{project.description}</p>
                <p className="projects__card__descr">{project.stack}</p>
                <a className="projects__card__cta" href={project.link} target="_blank" rel="noreferrer">View more</a>
              </div>


            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About;
