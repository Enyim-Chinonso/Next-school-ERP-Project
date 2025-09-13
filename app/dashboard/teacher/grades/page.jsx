"use client";
import React, { useState } from "react";

export default function TeacherGradesPage() {
  // Sample student list (later can be fetched from DB/API)
  const initialStudents = [
    { id: 1, name: "John Doe", grade: "" },
    { id: 2, name: "Jane Smith", grade: "" },
    { id: 3, name: "Michael Johnson", grade: "" },
    { id: 4, name: "Mary Adams", grade: "" },
  ];

  const [students, setStudents] = useState(initialStudents);

  // Update grade input
  const handleGradeChange = (id, value) => {
    setStudents((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, grade: value } : s
      )
    );
  };

  // Submit grades
  const handleSubmit = () => {
    console.log("Grades submitted:", students);
    alert("✅ Grades submitted successfully!");
  };

  return (
    <div>
      <h2 className="h5 mb-3">Grades</h2>
      <p className="text-muted small mb-4">
        Enter and submit student grades for this course.
      </p>

      <div className="table-responsive">
        <table className="table table-hover table-sm align-middle">
          <thead className="table-light">
            <tr>
              <th>Student</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr key={s.id}>
                <td>{s.name}</td>
                <td style={{ maxWidth: "120px" }}>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    placeholder="Enter grade"
                    value={s.grade}
                    onChange={(e) =>
                      handleGradeChange(s.id, e.target.value)
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-3">
        <button
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit Grades
        </button>
      </div>
    </div>
  );
}
