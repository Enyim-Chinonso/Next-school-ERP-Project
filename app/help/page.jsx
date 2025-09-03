"use client";
import { useState } from "react";

export default function HelpPage() {
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Simulate sending help request
    setTimeout(() => {
      setSubmitted(false);
      alert("✅ Your request has been submitted. Our support team will reach out soon!");
    }, 1500);
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light px-3">
      <div className="card shadow-lg border-0 rounded-4" style={{ maxWidth: "500px", width: "100%" }}>
        <div className="card-body p-4 p-md-5">
          {/* Title */}
          <h1 className="h4 text-center fw-bold text-dark mb-2">Need Help?</h1>
          <p className="text-center text-muted small mb-4">
            Submit your issue or question below and our support team will assist you.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="query" className="form-label fw-semibold">
                Describe Your Issue
              </label>
              <textarea
                id="query"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="e.g. I can't reset my password..."
                className="form-control rounded-3"
                rows="4"
                required
              />
            </div>

            <button
              type="submit"
              disabled={submitted}
              className="btn btn-warning w-100 rounded-3 fw-semibold"
            >
              {submitted ? "Submitting..." : "Submit Request"}
            </button>
          </form>

          {/* Back to login */}
          <div className="text-center mt-4">
            <a href="/login" className="text-decoration-none text-warning fw-semibold">
              ← Back to Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
