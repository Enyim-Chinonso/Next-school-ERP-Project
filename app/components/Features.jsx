"use client";
import { useEffect } from "react";
import gsap from "gsap"; 


export default function Features() {
  useEffect(() => {
    gsap.from(".feature-card", {
      opacity: 0,
      y: 60,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: { trigger: ".feature-card", start: "top 80%" },
    });
  }, []);

  return (
    <section className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="fw-bold mb-3">Why Choose School ERP?</h2>
        <p className="text-muted mb-5">
          Powerful, secure and designed to simplify school operations.
        </p>

        <div className="row g-4">
          {[
            {
              icon: "bi-person-badge",
              color: "primary",
              title: "Role Management",
              text: "Assign roles like Admin, Teacher, Parent, and Student with full control.",
            },
            {
              icon: "bi-calendar-check",
              color: "success",
              title: "Attendance Tracking",
              text: "Monitor and record student attendance with a few clicks.",
            },
            {
              icon: "bi-bar-chart-line",
              color: "warning",
              title: "Performance Reports",
              text: "Generate academic and financial reports instantly.",
            },
          ].map((f, i) => (
            <div key={i} className="col-md-4 feature-card">
              <div className="card shadow border-0 h-100 p-4">
                <div
                  className={`d-inline-flex align-items-center justify-content-center bg-${f.color} bg-opacity-10 text-${f.color} rounded-circle mb-3`}
                  style={{ width: "70px", height: "70px", fontSize: "2rem" }}
                >
                  <i className={`bi ${f.icon}`}></i>
                </div>
                <h5>{f.title}</h5>
                <p className="text-muted">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
