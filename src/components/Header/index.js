// == Module imports
import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Header = () => {

  // toggle dropdown menu
  const [dropdown, setDropdown] = useState(false);
  const toggleDropdown = () => setDropdown(!dropdown);

  // Change background when scrolling down
  const [plainHeader, setPlainHeader] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
  })

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setPlainHeader(true);
    } else {
      setPlainHeader(false);
    }
  };

  return (
    <header className={plainHeader ? 'header header--active' : 'header'}>
      <h1
        className="header__logo"
        onClick={() => { scroll.scrollToTop() }}
      >
        <i className="fab fa-octopus-deploy fa-bounce" /> KD
        </h1>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link
              className="nav__link"
              activeClass="nav__link--active"
              to="about"
              spy
              smooth={true}
              duration={800}
            >About
          </Link>
          </li>
          <li className="nav__item">
            <Link
              className="nav__link"
              activeClass="nav__link--active"
              to="projects"
              spy
              smooth={true}
              duration={800}
            >Projects
          </Link>
          </li>
          <li className="nav__item">
            <Link
              className="nav__link"
              activeClass="nav__link--active"
              to="contact"
              spy
              smooth={true}
              duration={800}
            >Contact
          </Link>
          </li>
        </ul>
      </nav>

      {/* icon change from bars to cross on click */}
      <i className={dropdown ? "fas fa-times dropdown__icon" : "fas fa-bars dropdown__icon"} onClick={toggleDropdown}></i>

      {/* dropdown menu mobile */}
      <nav className={dropdown ? 'dropdown__nav dropdown__nav--active' : 'dropdown__nav'}>

        <ul className='dropdown__nav__list' onClick={toggleDropdown}
        >
          <li className='dropdown__nav__item'>
          <Link
              className="nav__link"
              activeClass="nav__link--active"
              to="about"
              spy
              smooth={true}
              duration={800}
              onClick={toggleDropdown}
            >About
          </Link>
          </li>
          <li className="dropdown__nav__item">
            <Link
              className="nav__link"
              activeClass="nav__link--active"
              to="projects"
              spy
              smooth={true}
              duration={800}
              onClick={toggleDropdown}
            >Projects
          </Link>
          </li>
          <li className="dropdown__nav__item">
            <Link
              className="nav__link"
              activeClass="nav__link--active"
              to="contact"
              spy
              smooth={true}
              duration={800}
              onClick={toggleDropdown}
            >Contact
          </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;




