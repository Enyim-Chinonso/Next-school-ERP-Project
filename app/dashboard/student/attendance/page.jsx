"use client";
import React from "react";
import useGsapAnimations from "@/hooks/useGsapAnimations";

export default function StudentAttendancePage() {
  useGsapAnimations();

  const history = [
    { date: "2025-09-01", status: "Present" },
    { date: "2025-09-02", status: "Present" },
    { date: "2025-09-03", status: "Absent" },
    { date: "2025-09-04", status: "Present" },
  ];

  return (
    <div>
      <section className="mb-4 d-flex justify-content-between align-items-center">
        <h1 className="h5 mb-0">Attendance</h1>
        <div className="text-end">
          <div className="small text-muted">Attendance rate</div>
          <div className="h5 fw-bold">94%</div>
        </div>
      </section>

      <section className="card shadow-sm dash-animate">
        <div className="card-body">
          <h3 className="h6 mb-3">Recent Attendance</h3>
          <div className="table-responsive">
            <table className="table table-sm">
              <thead className="table-light">
                <tr>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {history.map((h, i) => (
                  <tr key={i}>
                    <td>{h.date}</td>
                    <td>
                      <span className={`badge ${h.status === "Present" ? "bg-success" : "bg-danger"}`}>
                        {h.status}
                      </span>
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
