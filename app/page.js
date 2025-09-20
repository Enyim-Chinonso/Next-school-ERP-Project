"use client";

import React, { useEffect } from "react";
import HeroAnimated from "./components/HeroAnimated";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Lenis from "@studio-freight/lenis";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smooth: true });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (lenis) lenis.destroy();
    };
  }, []);

  return (
    <>
      <HeroAnimated />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}
