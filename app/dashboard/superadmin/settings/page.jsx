"use client";
import React from "react";
// import useGsapAnimations from "../../../hooks/useGsapAnimations";
import useGsapAnimations from "@/hooks/useGsapAnimations";


export default function SettingsPage() {
  useGsapAnimations();

  return (
    <>
      {/* Header */}
      <section className="mb-4 dash-animate">
        <h1 className="h4 mb-1">System Settings</h1>
        <p className="text-muted small">Control system-wide configurations</p>
      </section>

      {/* Settings Form */}
      <section className="card shadow-sm dash-animate">
        <div className="card-body">
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">System Name</label>
              <input
                type="text"
                className="form-control"
                defaultValue="SchoolERP"
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Support Email</label>
              <input
                type="email"
                className="form-control"
                defaultValue="support@schoolerp.com"
              />
            </div>
            <div className="col-12">
              <label className="form-label">About</label>
              <textarea
                className="form-control"
                rows="3"
                defaultValue="Central ERP for Schools"
              ></textarea>
            </div>
            <div className="col-12">
              <button className="btn btn-warning">Save Changes</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}


