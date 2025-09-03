"use client";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Backend API placeholder
    setTimeout(() => {
      setLoading(false);
      setMessage("✅ If this email is registered, a reset link has been sent.");
    }, 2000);
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light px-3">
      <div className="card shadow-lg border-0 rounded-4" style={{ maxWidth: "420px", width: "100%" }}>
        <div className="card-body p-4 p-md-5">
          {/* Title */}
          <h1 className="h4 text-center fw-bold text-dark mb-2">Forgot Password?</h1>
          <p className="text-center text-muted small mb-4">
            Enter your registered email to receive a password reset link.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-semibold">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="form-control rounded-3"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn btn-warning w-100 rounded-3 fw-semibold"
            >
              {loading ? "Sending..." : "Send Reset Link"}
            </button>
          </form>

          {/* Success message */}
          {message && (
            <div className="alert alert-success text-center mt-3 py-2 small mb-0">
              {message}
            </div>
          )}

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
