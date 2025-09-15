"use client";
import React from "react";
import useGsapAnimations from "@/hooks/useGsapAnimations";

export default function ParentChildrenPage() {
  useGsapAnimations();

  const wards = [
    { id: 1, name: "Onu Chinememma", grade: "Grade 10", age: 15 },
    { id: 2, name: "Divine-favour Chinaecherem", grade: "Grade 8", age: 13 },
  ];

  return (
    <div>
      <h2 className="h5 mb-3">My Children</h2>
      <p className="text-muted small mb-4">
        Overview of your wards enrolled in the school system.
      </p>

      <div className="row g-3">
        {wards.map((child) => (
          <div key={child.id} className="col-12 col-md-6 dash-animate">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title mb-1">{child.name}</h5>
                <p className="text-muted small mb-2">{child.grade}</p>
                <p className="small">Age: {child.age}</p>
                <button className="btn btn-sm btn-outline-primary">
                  View Progress
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
