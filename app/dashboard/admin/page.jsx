"use client";

import React from "react";
import useGsapAnimations from "@/hooks/useGsapAnimations";

export default function AdminPage() {
  useGsapAnimations();

  const stats = [
    { label: "Teachers", value: 32, color: "primary" },
    { label: "Students", value: 842, color: "success" },
    { label: "Finance Reports", value: 12, color: "warning" },
  ];

  return (
    <>
      {/* Header (always visible, not animated) */}
      <section className="mb-4 d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3">
        <div>
          <h1 className="h4 mb-1">Admin Overview</h1>
          <p className="text-muted small">School administration dashboard</p>
        </div>
        <button className="btn btn-primary">+ Add Teacher</button>
      </section>

      {/* Stats (animated) */}
      <section className="row g-3 mb-4">
        {stats.map((s) => (
          <div key={s.label} className="col-12 col-md-4 dash-animate">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                  <div className="text-muted small">{s.label}</div>
                  <div className="h4 fw-bold mt-1">{s.value}</div>
                </div>
                <span
                  className={`badge bg-${s.color} rounded-pill p-3`}
                  style={{ fontSize: "0.9rem" }}
                >
                  ●
                </span>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Teachers List (animated) */}
      <section className="card shadow-sm dash-animate">
        <div className="card-body">
          <h3 className="h6 mb-3">Recent Teachers</h3>
          <div className="table-responsive">
            <table className="table table-hover table-sm align-middle">
              <thead className="table-light">
                <tr>
                  <th>Name</th>
                  <th>Subject</th>
                  <th>Classes</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Chike Obi</td>
                  <td>Mathematics</td>
                  <td>5</td>
                  <td>
                    <button className="btn btn-sm btn-outline-primary me-2">
                      Manage
                    </button>
                    <button className="btn btn-sm btn-outline-danger">
                      Remove
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Abanokwu Chigozie</td>
                  <td>English</td>
                  <td>3</td>
                  <td>
                    <button className="btn btn-sm btn-outline-primary me-2">
                      Manage
                    </button>
                    <button className="btn btn-sm btn-outline-danger">
                      Remove
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
