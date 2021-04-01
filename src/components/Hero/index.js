import React from "react";
import Typical from "react-typical";

import Header from "../Header";

const Hero = () => {
  return (
    <div className="hero">
      <Header />
      <div className="hero__content">
        <h1 className="hero__content__title">Hello, my name is <span className="hero__content__title--name">Kamil</span>.</h1>
        <p className="hero__content__text"> I'm a{' '}
          <Typical
            className="hero__content__text--typical"
            loop={Infinity}
            wrapper="b"
            steps={[
              'Web Developer 💻',
              800,
              'Diving instructor 🐟',
              800,
              'Musician 🎸',
              800
            ]}
          />
        </p>
      </div>
    </div>
  )
};

export default Hero;
