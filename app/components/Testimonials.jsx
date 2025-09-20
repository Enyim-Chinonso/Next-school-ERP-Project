"use client";
import { useEffect } from "react";
import gsap from "gsap";

export default function Testimonials() {
  useEffect(() => {
    gsap.from(".testimonial-card", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: { trigger: ".testimonial-card", start: "top 85%" },
    });
  }, []);

  const reviews = [
    {
      name: "Rev Fr Dr Mgbodile",
      role: "Principal (CIC)",
      text: "This ERP transformed how we manage teachers, students and parents. Very professional.",
    },
    {
      name: "Prof. Chidozie Abanokwu",
      role: "Teacher",
      text: "Attendance and grading are now seamless courtesy of this ERP. The animations make it fun too!",
    },
    {
      name: "Dr Chiekpezie Orji",
      role: "Parent",
      text: "I can easily track my child’s performance. Highly recommend this software system and its developer.",
    },
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container text-center">
        <h2 className="fw-bold mb-4">What Our Clients Say</h2>
        <div className="row g-4">
          {reviews.map((r, i) => (
            <div key={i} className="col-md-4 testimonial-card">
              <div className="card shadow border-0 h-100 p-4">
                <p className="text-muted mb-3">“{r.text}”</p>
                <h6 className="mb-0">{r.name}</h6>
                <small className="text-muted">{r.role}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
