"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

/**
 * HeroAnimated: fades/slides in the heading, paragraph, and buttons
 * once on page load. We use refs + gsap.timeline for a clean sequence.
 */
export default function HeroAnimated() {
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // gsap.context scopes selectors to this component; easy cleanup on unmount
    const ctx = gsap.context(() => {
      // Initial state
      gsap.set([titleRef.current, textRef.current, ctaRef.current], {
        y: 20,
        opacity: 0,
      });

      // Timeline entrance
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
      tl.to(titleRef.current, { y: 0, opacity: 1, duration: 0.6 })
        .to(textRef.current, { y: 0, opacity: 1, duration: 0.5 }, "-=0.2")
        .to(ctaRef.current, { y: 0, opacity: 1, duration: 0.5 }, "-=0.2");
    });

    return () => ctx.revert(); // clean up
  }, []);

  return (
    <header
      className="bg-light text-dark text-center d-flex align-items-start"
      style={{ minHeight: "100vh", paddingTop: "80px" }}
    >
      <div className="container">
        <h1 ref={titleRef} className="display-4 fw-bold">
          Welcome to School ERP
        </h1>

        <p ref={textRef} className="lead mt-2">
          Manage Students, Teachers, Parents, and Admin operations all in one place.
        </p>

        <div
          ref={ctaRef}
          className="d-flex flex-column flex-md-row justify-content-center gap-3 mt-5"
        >
          <a href="/features" className="btn btn-outline-warning btn-lg">
            Explore Features
          </a>
          <a href="/contact" className="btn btn-outline-dark btn-lg">
            Get in Touch
          </a>
        </div>
      </div>
    </header>
  );
}
