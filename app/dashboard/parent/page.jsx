"use client";
import React from "react";
import useGsapAnimations from "@/hooks/useGsapAnimations";

export default function ParentOverviewPage() {
  useGsapAnimations();

  const wards = [
    { name: "Chinememma Onu", grade: "Grade 10", attendance: "95%" },
    { name: "Divine-favour Chinecherem", grade: "Grade 8", attendance: "89%" },
  ];

  const notifications = [
    { title: "Parent-Teacher Meeting (PTA)", date: "2025-09-26" },
    { title: "Fee Payment Reminder", date: "2025-09-25" },
  ];

  return (
    <>
      {/* Header */}
      <section className="mb-4">
        <h1 className="h4">Welcome, Parent</h1>
        <p className="text-muted small">
          Here’s an overview of your wards’ academic progress and important updates.
        </p>
      </section>

      {/* Wards Overview */}
      <section className="row g-3 mb-4">
        {wards.map((w, i) => (
          <div key={i} className="col-12 col-md-6 dash-animate">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title mb-1">{w.name}</h5>
                <p className="text-muted small">{w.grade}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="badge bg-success">Attendance: {w.attendance}</span>
                  <button className="btn btn-sm btn-outline-primary">View Details</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Notifications */}
      <section className="card shadow-sm dash-animate">
        <div className="card-body">
          <h3 className="h6 mb-3">Notifications</h3>
          <ul className="list-group list-group-flush">
            {notifications.map((n, i) => (
              <li key={i} className="list-group-item d-flex justify-content-between align-items-center">
                <span>{n.title}</span>
                <span className="small text-muted">{n.date}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
