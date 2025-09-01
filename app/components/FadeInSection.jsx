"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FadeInSection({ children, y = 40, duration = 0.8 }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;

    gsap.fromTo(
      el,
      { autoAlpha: 0, y },
      {
        autoAlpha: 1,
        y: 0,
        duration,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%", // when section enters viewport
          toggleActions: "play none none reverse",
        },
      }
    );
  }, [y, duration]);

  return (
    <div ref={sectionRef}>
      {children}
    </div>
  );
}
