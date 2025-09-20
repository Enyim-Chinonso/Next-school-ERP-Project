"use client";
import React from "react";
import useGsapAnimations from "@/hooks/useGsapAnimations";

export default function ParentReportsPage() {
  useGsapAnimations();

  const reports = [
    {
      child: "Onu Chinememma",
      term: "First Term 2025",
      grade: "A",
      attendance: "96%",
    },
    {
      child: "Divine-favour Chinecherem",
      term: "First Term 2025",
      grade: "B+",
      attendance: "89%",
    },
  ];

  return (
    <div>
      <h2 className="h5 mb-3">Reports</h2>
      <p className="text-muted small mb-4">
        Academic performance and attendance reports for your wards.
      </p>

      <div className="table-responsive dash-animate">
        <table className="table table-bordered table-hover align-middle">
          <thead className="table-light">
            <tr>
              <th>Child</th>
              <th>Term</th>
              <th>Grade</th>
              <th>Attendance</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((r, i) => (
              <tr key={i}>
                <td>{r.child}</td>
                <td>{r.term}</td>
                <td>
                  <span className="badge bg-primary">{r.grade}</span>
                </td>
                <td>{r.attendance}</td>
                <td>
                  <button className="btn btn-sm btn-outline-secondary">
                    Download PDF
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
