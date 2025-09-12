"use client";
import React from "react";
// import useGsapAnimations from "../../../hooks/useGsapAnimations";
import useGsapAnimations from "@/hooks/useGsapAnimations";


export default function OverviewPage() {
  useGsapAnimations();

  const stats = [
    { label: "Schools", value: 12, color: "primary" },
    { label: "Total Users", value: 1248, color: "success" },
    { label: "Active Sessions", value: 89, color: "warning" },
  ];

  return (
    <>
      {/* Header */}
      <section className="mb-4 dash-animate d-flex justify-content-between align-items-center">
        <div>
          <h1 className="h4 mb-1">Super Admin Overview</h1>
          <p className="text-muted small">System health and controls</p>
        </div>
        <button className="btn btn-warning">+ New School</button>
      </section>

      {/* Stats */}
      <section className="row g-3 mb-4">
        {stats.map((s) => (
          <div key={s.label} className="col-md-4 dash-animate">
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

      {/* Recent Schools */}
      <section className="card shadow-sm dash-animate">
        <div className="card-body">
          <h3 className="h6 mb-3">Recent Schools</h3>
          <div className="table-responsive">
            <table className="table table-hover table-sm align-middle">
              <thead className="table-light">
                <tr>
                  <th>Name</th>
                  <th>Location</th>
                  <th>Students</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Bright Future Academy</td>
                  <td>Abuja</td>
                  <td>420</td>
                  <td>
                    <button className="btn btn-sm btn-outline-primary me-2">
                      Manage
                    </button>
                    <button className="btn btn-sm btn-outline-danger">
                      Disable
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Greenfield High</td>
                  <td>Lagos</td>
                  <td>310</td>
                  <td>
                    <button className="btn btn-sm btn-outline-primary me-2">
                      Manage
                    </button>
                    <button className="btn btn-sm btn-outline-danger">
                      Disable
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




