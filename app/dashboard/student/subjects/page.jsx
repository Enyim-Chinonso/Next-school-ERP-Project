// /app/dashboard/student/subjects/page.jsx
"use client";
import React from "react";
import useGsapAnimations from "@/hooks/useGsapAnimations";

export default function StudentSubjectsPage() {
  useGsapAnimations();

  const subjects = [
    { title: "Mathematics", instructor: "Mr. A. Okafor", schedule: "Mon, Wed • 09:00" },
    { title: "Biology", instructor: "Mrs. E. Nwosu", schedule: "Tue, Thu • 11:00" },
    { title: "English", instructor: "Ms. T. Ibe", schedule: "Fri • 10:00" },
  ];

  return (
    <>
      <section className="mb-4 dash-animate d-flex justify-content-between align-items-center">
      {/* <section className="dash-animate"> */}
        <h1 className="h5 mb-0">Subjects</h1>
        <button className="btn btn-outline-primary">Browse Catalog</button>
      </section>

      <section className="row g-3">
        {subjects.map((s, idx) => (
          <div key={idx} className="col-12 col-md-6 dash-animate">
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="mb-1">{s.title}</h5>
                  <div className="small text-muted">Instructor: {s.instructor}</div>
                  <div className="small text-muted">Schedule: {s.schedule}</div>
                </div>
                <div className="mt-3 d-flex gap-2">
                  <button className="btn btn-sm btn-primary">Open</button>
                  <button className="btn btn-sm btn-outline-secondary">Materials</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}



