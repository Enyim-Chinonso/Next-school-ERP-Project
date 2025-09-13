"use client";
import React from "react";

export default function TeacherAssignmentsPage() {
  const assignments = [
    { title: "Algebra Homework", class: "JSS2", due: "2025-09-20" },
    { title: "Physics Practical", class: "SS1", due: "2025-09-22" },
  ];

  return (
    <div>
      <h2 className="h5 mb-3">Assignments</h2>
      <div className="table-responsive">
        <table className="table table-hover table-sm align-middle">
          <thead className="table-light">
            <tr>
              <th>Title</th>
              <th>Class</th>
              <th>Due Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((a, i) => (
              <tr key={i}>
                <td>{a.title}</td>
                <td>{a.class}</td>
                <td>{a.due}</td>
                <td>
                  <button className="btn btn-sm btn-outline-primary me-2">Edit</button>
                  <button className="btn btn-sm btn-outline-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
