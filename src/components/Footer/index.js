// == Module imports
import React from "react";

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__text">Made in Paris with React, 🧡  and ☕ <br /> Copyright {currentYear}</p>
    </footer>
  )
}

export default Footer;


