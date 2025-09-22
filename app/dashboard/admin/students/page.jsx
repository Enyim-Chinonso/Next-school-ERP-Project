"use client";
import React from "react";
import useGsapAnimations from "@/hooks/useGsapAnimations";

export default function StudentsPage() {
  useGsapAnimations();

  const students = [
    { name: "Chinaecherem Divine-favour", grade: "200 Level", attendance: "92%" },
    { name: "Onu Chinememma", grade: "200 Level", attendance: "90%" },
    { name: "Abonyi Peace", grade: "100 Level", attendance: "40%" },
    { name: "Onyinyechi Francess", grade: "500 Level", attendance: "98%" },
    { name: "Ikwueze Jane", grade: "300 Level", attendance: "66%" },
    { name: "Igwesi Peace", grade: "100 Level", attendance: "80%" },
    { name: "Cynthia Ukamaka", grade: "500 Level", attendance: "80%" },
    { name: "Eze Chibuike", grade: "Form 6", attendance: "78%" },
  ];

  return (
    <div>
      {/* Header */}
      <section className="mb-4 d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3">
        <h1 className="h4 mb-0">Students Management</h1>
        <button className="btn btn-success">+ Enroll Student</button>
      </section>

      {/* Students Table */}
      <section className="card shadow-sm dash-animate">
        <div className="card-body">
          <h3 className="h6 mb-3">All Students</h3>
          <div className="table-responsive">
            <table className="table table-hover table-sm align-middle">
              <thead className="table-light">
                <tr>
                  <th>Name</th>
                  <th>Grade</th>
                  <th>Attendance</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {students.map((s, i) => (
                  <tr key={i}>
                    <td>{s.name}</td>
                    <td>{s.grade}</td>
                    <td>{s.attendance}</td>
                    <td>
                      <button className="btn btn-sm btn-outline-primary me-2">
                        View
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
