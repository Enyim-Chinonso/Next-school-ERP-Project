"use client";
import React from "react";
import useGsapAnimations from "@/hooks/useGsapAnimations";

export default function TeachersPage() {
  useGsapAnimations();

  const teachers = [
    { name: "Chike Obi", subject: "Mathematics", classes: 5 },
    { name: "Wole Soyinka", subject: "Biology", classes: 3 },
    { name: "Chinua Achebe", subject: "Literature", classes: 4 },
    { name: "Enyim Chinonso", subject: "Computer science", classes: 6 },
    { name: "Abanokwu Chigozie", subject: "English Language", classes: 6 },
    { name: "Ezeali Daniel", subject: "Algorithm", classes: 4 },
  ];

  return (
    <div>
      {/* Header */}
      <section className="mb-4 d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3">
        <h1 className="h4 mb-0">Teachers Management</h1>
        <button className="btn btn-primary">+ Add Teacher</button>
      </section>

      {/* Teachers Table */}
      <section className="card shadow-sm dash-animate">
        <div className="card-body">
          <h3 className="h6 mb-3">All Teachers</h3>
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
                {teachers.map((t, i) => (
                  <tr key={i}>
                    <td>{t.name}</td>
                    <td>{t.subject}</td>
                    <td>{t.classes}</td>
                    <td>
                      <button className="btn btn-sm btn-outline-primary me-2">
                        Manage
                      </button>
                      <button className="btn btn-sm btn-outline-danger">
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
