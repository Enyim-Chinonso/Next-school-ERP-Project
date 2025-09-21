"use client";
import React from "react";
// import useGsapAnimations from "../../../hooks/useGsapAnimations";
import useGsapAnimations from "@/hooks/useGsapAnimations";


export default function SchoolsPage() {
  useGsapAnimations();

  const schools = [
    { name: "Bright Future Academy", location: "Abuja", students: 250 },
    { name: "EBSU Staff Nursery/Primary School", location: "Abakaliki", students: 200 },
    { name: "College of the Immaculate Conception (CIC)", location: "Enugu", students: 600 },
    { name: "Queens' School Enugu", location: "Enugu", students: 700 },
    { name: "Holy Rosary College", location: "Enugu", students: 400 },
    { name: "Hope High British College", location: "Abakaliki", students: 300 },
    { name: "Federal Government College", location: "Okposi", students: 500 },
    { name: "Ebonyi State University", location: "Abakaliki", students: 1000 },
    { name: "University of Nigeria", location: "Nsukka", students: 2000 },
    { name: "Enugu State University of Science and Technology", location: "Agbani", students: 1000 },
  ];

  return (
    <>
      {/* Header */}
      <section className="mb-4 d-flex justify-content-between align-items-center">
        <h1 className="h4 mb-0">Schools Management</h1>
        <button className="btn btn-warning">+ Add School</button>
      </section>

      {/* Schools Table */}
      <section className="card shadow-sm dash-animate">
        <div className="card-body">
          <h3 className="h6 mb-3">Registered Schools</h3>
          <div className="table-responsive">
            <table className="table table-hover table-sm align-middle">
              <thead className="table-light">
                <tr>
                  <th>Name</th>
                  <th>Location</th>
                  <th>Students</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {schools.map((s) => (
                  <tr key={s.name}>
                    <td>{s.name}</td>
                    <td>{s.location}</td>
                    <td>{s.students}</td>
                    <td>
                      <button className="btn btn-sm btn-outline-primary me-2">
                        Manage
                      </button>
                      <button className="btn btn-sm btn-outline-danger">
                        Disable
                      </button>
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
