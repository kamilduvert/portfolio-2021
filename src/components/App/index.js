import { useEffect } from 'react';
import { withRouter } from 'react-router-dom'
import ReactGA from "react-ga";

import Hero from "../Hero";
import About from "../About";
import Projects from "../Projects";
import Contact from "../Contact";
import Footer from "../Footer";

const TRACKING_ID = process.env.REACT_APP_GA_TRAKING_ID;
ReactGA.initialize(TRACKING_ID);

const App = () => {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  })

  return (
    <div className="app">
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default withRouter(App);
