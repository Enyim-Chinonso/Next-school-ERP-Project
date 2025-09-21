"use client";
import React, { useState } from "react";

export default function TeacherAttendancePage() {
  const initialStudents = [
    { id: 1, name: "Onu Chinememma", present: true },
    { id: 2, name: "Chinaecherem Divine-favour", present: true },
    { id: 3, name: "Cynthia Ukamaka", present: true },
    { id: 4, name: "Riya Singh", present: true },
    { id: 5, name: "Abonyi Peace", present: false },
    { id: 6, name: "Onyinyechi Francess", present: true },
    { id: 7, name: "Ikwueze Jane", present: false },
  ];

  const [students, setStudents] = useState(initialStudents);

  // Toggle attendance
  const toggleAttendance = (id) => {
    setStudents((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, present: !s.present } : s
      )
    );
  };

  // Submit records
  const handleSubmit = () => {
    console.log("Attendance records:", students);
    alert(" Attendance submitted successfully!");
  };

  return (
    <div>
      <h2 className="h5 mb-3">Attendance</h2>
      <p className="text-muted small mb-4">
        Mark attendance for today’s class and submit when done.
      </p>

      <div className="table-responsive">
        <table className="table table-hover table-sm align-middle">
          <thead className="table-light">
            <tr>
              <th>Student</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr key={s.id}>
                <td>{s.name}</td>
                <td>
                  <button
                    className={`btn btn-sm ${
                      s.present ? "btn-success" : "btn-outline-secondary"
                    }`}
                    onClick={() => toggleAttendance(s.id)}
                  >
                    {s.present ? "Present" : "Absent"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-3">
        <button className="btn btn-primary" onClick={handleSubmit}>
          Submit Attendance
        </button>
      </div>
    </div>
  );
}
