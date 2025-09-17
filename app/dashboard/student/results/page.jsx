// /app/dashboard/student/results/page.jsx
"use client";
import React from "react";
import useGsapAnimations from "@/hooks/useGsapAnimations";

export default function StudentResultsPage() {
  useGsapAnimations();

  const results = [
    { course: "Mathematics", score: 55, grade: "c" },
    { course: "Biology", score: 45, grade: "D" },
    { course: "English language", score: 62, grade: "B" },
    { course: "Computer science", score: 78, grade: "A" },
  ];

  return (
    <>
      <section className="mb-4 dash-animate d-flex justify-content-between align-items-center">
        <h1 className="h5 mb-0">Results</h1>
        <button className="btn btn-outline-primary">Download Transcript</button>
      </section>

      <section className="card shadow-sm dash-animate">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover table-sm align-middle">
              <thead className="table-light">
                <tr>
                  <th>Course</th>
                  <th>Score</th>
                  <th>Grade</th>
                  <th className="text-end">Actions</th>
                </tr>
              </thead>
              <tbody>
                {results.map((r, i) => (
                  <tr key={i}>
                    <td>{r.course}</td>
                    <td>{r.score}</td>
                    <td><strong>{r.grade}</strong></td>
                    <td className="text-end">
                      <button className="btn btn-sm btn-outline-primary">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
