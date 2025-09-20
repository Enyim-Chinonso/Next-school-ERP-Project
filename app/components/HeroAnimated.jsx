"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

//  HERO Section
export default function HeroAnimated() {
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([titleRef.current, textRef.current, ctaRef.current], {
        y: 40,
        opacity: 0,
      });

      gsap.timeline({ defaults: { ease: "power3.out" } })
        .to(titleRef.current, { y: 0, opacity: 1, duration: 0.8 })
        .to(textRef.current, { y: 0, opacity: 1, duration: 0.6 }, "-=0.3")
        .to(ctaRef.current, { y: 0, opacity: 1, duration: 0.6 }, "-=0.3");
    });
    return () => ctx.revert();
  }, []);

  return (
    <header
      className="d-flex align-items-center text-center text-white"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(rgba(0,0,50,.6), rgba(0,0,50,.6)), url('/school-bg.jpg') center/cover",
      }}
    >
      <div className="container">
        <h1 ref={titleRef} className="display-3 fw-bold mb-3">
          Welcome to my School ERP Management System
        </h1>
        <p ref={textRef} className="lead mb-4">
          One platform to manage Students, Teachers, Parents, and Administration with ease.
        </p>
        <div
          ref={ctaRef}
          className="d-flex flex-column flex-md-row justify-content-center gap-3"
        >
          <a href="/features" className="btn btn-outline-warning btn-lg px-4">
            Explore Features
          </a>
          <a href="/contact" className="btn btn-outline-light btn-lg px-4">
            Get in Touch
          </a>
        </div>
      </div>
    </header>
  );
}


