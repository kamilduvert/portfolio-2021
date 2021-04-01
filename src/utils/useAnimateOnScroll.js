// Package Imports
import { useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * -- animateOnScroll --
 * This function is used to nicely animate things when scrolling
 * @param {Object} ref - reference the object to nimate
 * @param {Integer} x - movement on x
 * @param {Integer} y - movement on y
 */
const useAnimateOnScroll = (ref, x, y) => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const el = ref.current
    gsap.from(el, {
      duration: 3,
      opacity: 0,
      x,
      y,
      ease: "power4.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none none",
      }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useAnimateOnScroll;
