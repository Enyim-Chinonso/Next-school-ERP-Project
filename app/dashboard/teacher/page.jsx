"use client";
import React from "react";

export default function TeacherOverviewPage() {
  const stats = [
    { label: "Classes", value: 6, color: "primary" },
    { label: "Students", value: 180, color: "success" },
    { label: "Assignments", value: 24, color: "warning" },
  ];

  return (
    <div>
      {/* Header */}
      <section className="mb-4 d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3">
        <div>
          <h1 className="h4 mb-1">Teacher Overview</h1>
          <p className="text-muted small">Quick stats about your teaching work</p>
        </div>
        <button className="btn btn-primary">+ New Assignment</button>
      </section>

      {/* Stats */}
      <section className="row g-3 mb-4">
        {stats.map((s) => (
          <div key={s.label} className="col-12 col-md-4">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <div className="text-muted small">{s.label}</div>
                <div className="h4 fw-bold">{s.value}</div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
