"use client";
import React from "react";
import useGsapAnimations from "@/hooks/useGsapAnimations";

export default function FinancePage() {
  useGsapAnimations();

  const reports = [
    { title: "January Fees", amount: "₦1,200,000", status: "Completed" },
    { title: "February Fees", amount: "₦980,000", status: "Pending" },
    { title: "March Fees", amount: "₦1,450,000", status: "Completed" },
  ];

  return (
    <div>
      {/* Header */}
      <section className="mb-4 d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3">
        <h1 className="h4 mb-0">Finance Reports</h1>
        <button className="btn btn-warning">+ New Report</button>
      </section>

      {/* Reports Table */}
      <section className="card shadow-sm dash-animate">
        <div className="card-body">
          <h3 className="h6 mb-3">Recent Reports</h3>
          <div className="table-responsive">
            <table className="table table-hover table-sm align-middle">
              <thead className="table-light">
                <tr>
                  <th>Title</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {reports.map((r, i) => (
                  <tr key={i}>
                    <td>{r.title}</td>
                    <td>{r.amount}</td>
                    <td>
                      <span
                        className={`badge ${
                          r.status === "Completed"
                            ? "bg-success"
                            : "bg-warning text-dark"
                        }`}
                      >
                        {r.status}
                      </span>
                    </td>
                    <td>
                      <button className="btn btn-sm btn-outline-primary me-2">
                        View
                      </button>
                      <button className="btn btn-sm btn-outline-danger">
                        Delete
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
