"use client";
import { useEffect } from "react";
import gsap from "gsap";

export default function CTA() {
  useEffect(() => {
    gsap.from(".cta-box", {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      ease: "back.out(1.7)",
    });
  }, []);

  return (
    <section className="py-5 text-white text-center"  style={{ backgroundColor: "rgb(30,58,138)"  }} >
      <div className="container">
        <div className="cta-box p-5 rounded-4 shadow-lg">
          <h2 className="fw-bold mb-3">Ready to Modernize Your School?</h2>
          <p className="mb-4">
            Get started today and see how our ERP can transform your institution.
          </p>
          <a href="/login" className="btn btn-warning btn-lg px-4">
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
