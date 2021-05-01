// == Module imports
import React, { useState, useRef } from "react";
import axios from "axios";

// == Local imports
import useAnimateOnScroll from '../../utils/useAnimateOnScroll';

const Contact = () => {

  const aboutRef = useRef(null);
  useAnimateOnScroll(aboutRef, 0, 80);

  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://formspree.io/f/xyylgaaj",
      data: new FormData(form)
    })
      .then(r => {
        handleServerResponse(true, "Merci pour votre message, je reviens vers vous très bientôt ! 🚀 ", form);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };

  return (
    <section className="contact" id="contact">
      <div ref={aboutRef}>
        <h2 className="contact__title">
          Let's talk
        </h2>
        <div className="container">
          <p className="contact__text">You can reach out for job opportunities, travel ideas, chat about code or simply to say Hi! ✌ </p>
          <div className="contact__container">
            <div className="contact__icons">
              <a href="https://github.com/kamilduvert" target="_blank" rel="noreferrer"><i className="fab fa-github" /></a>
              <a href="https://www.linkedin.com/in/kamil-duvert/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin" /></a>
              <a href="https://twitter.com/KDuvert" target="_blank" rel="noreferrer"><i className="fab fa-twitter" /></a>
            </div>
            <form
              className="contact__form"
              onSubmit={handleOnSubmit}>
              <div className="contact__form__group">
                <label
                  className="contact__form__item"
                  htmlFor="email"
                >
                  Email
              </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="david-gilmour@pinkfloyd.com"
                  required />
              </div>
              <div className="contact__form__group">
                <label
                  className="contact__form__item"
                  htmlFor="message"
                >
                  Message
              </label>
                <textarea
                  id="message"
                  name="message"
                  row="5"
                  cols="15"
                  placeholder="You rock bro!"
                >
                </textarea>
              </div>
              <button
                className="contact__form__btn"
                type="submit"
                disabled={serverState.submitting}
              >
                Send
              </button>
              {serverState.status && (
                <p className={!serverState.status.ok ? "errorMsg" : "contact__form__confirmation"}>
                  {serverState.status.msg}
                </p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact;

