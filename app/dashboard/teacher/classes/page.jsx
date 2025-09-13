"use client";
import React from "react";

export default function TeacherClassesPage() {
  const classes = [
    { name: "Math - JSS2", students: 30 },
    { name: "Physics - SS1", students: 25 },
    { name: "Chemistry - SS2", students: 28 },
  ];

  return (
    <div>
      <h2 className="h5 mb-3">My Classes</h2>
      <div className="table-responsive">
        <table className="table table-hover table-sm align-middle">
          <thead className="table-light">
            <tr>
              <th>Class</th>
              <th>No. of Students</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((c, i) => (
              <tr key={i}>
                <td>{c.name}</td>
                <td>{c.students}</td>
                <td>
                  <button className="btn btn-sm btn-outline-primary me-2">View</button>
                  <button className="btn btn-sm btn-outline-success">Assignments</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
