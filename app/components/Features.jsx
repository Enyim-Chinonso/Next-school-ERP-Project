"use client";
import { useEffect } from "react";
import gsap from "gsap";

export default function Features() {
  useEffect(() => {
    // GSAP fade-in + stagger animation
    gsap.from(".feature-card", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.3,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="pt-1 bg-light">
      <div className="container text-center">
        <h2 className="mb-4 fw-bold">Why Choose Our School ERP?</h2>
        <p className="text-muted mb-5">
          Manage your entire school in one platform — secure, modern, and reliable.
        </p>

        <div className="row">
          <div className="col-md-4 mb-4 feature-card">
            <div className="card shadow border-0 h-100">
              <div className="card-body">
                <i className="bi bi-person-badge fs-1 text-primary"></i>
                <h5 className="mt-3">Role Management</h5>
                <p className="text-muted">
                  Assign roles like Admin, Teacher, Parent, and Student with full control.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4 feature-card">
            <div className="card shadow border-0 h-100">
              <div className="card-body">
                <i className="bi bi-calendar-check fs-1 text-success"></i>
                <h5 className="mt-3">Attendance Tracking</h5>
                <p className="text-muted">
                  Monitor and record student attendance with just a few clicks.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4 feature-card">
            <div className="card shadow border-0 h-100">
              <div className="card-body">
                <i className="bi bi-bar-chart-line fs-1 text-warning"></i>
                <h5 className="mt-3">Performance Reports</h5>
                <p className="text-muted">
                  Generate insightful academic and financial reports instantly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

 