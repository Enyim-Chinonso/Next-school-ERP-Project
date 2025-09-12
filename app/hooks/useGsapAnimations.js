// /app/hooks/useGsapAnimations.js
"use client";
import { useEffect } from "react";
import gsap from "gsap";
import Lenis from "@studio-freight/lenis";

export default function useGsapAnimations() {
  useEffect(() => {
    // ✅ Initialize Lenis (smooth scroll)
    const lenis = new Lenis({ duration: 1.2, smooth: true });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // ✅ Animate only if elements exist
    const els = gsap.utils.toArray(".dash-animate");
    if (els.length > 0) {
      gsap.from(els, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      });
    }

    // ✅ Cleanup on unmount
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);
}
