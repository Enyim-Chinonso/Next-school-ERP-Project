"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

// map each role to its dashboard route
const ROLE_ROUTES = {
  superadmin : "/dashboard/superadmin",
  admin: "/admin",
  teacher: "/teacher",
  student: "/student",
  parent: "/parent",
};

export default function LoginPage() {
  const router = useRouter();

  // form state
  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);

  // simple validation helpers
  const [touched, setTouched] = useState({ role: false, username: false, password: false });
  const [formError, setFormError] = useState("");

  const invalid = {
    role: touched.role && !role,
    username: touched.username && !username.trim(),
    password: touched.password && !password,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // basic required-field checks
    if (!role || !username.trim() || !password) {
      setTouched({ role: true, username: true, password: true });
      setFormError("Please fill in all required fields.");
      return;
    }

    setFormError("");

    // stub “auth”
    // here you would call your API then redirect by role
    const target = ROLE_ROUTES[role];
    if (target) router.push(target);
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light py-5">
      <div className="card shadow-lg rounded-4" style={{ maxWidth: 480, width: "100%" }}>
        <div className="card-body p-4 p-md-5">
          {/* Header */}
          <h1 className="h3 text-center fw-bold mb-1">School ERP Login</h1>
          <p className="text-center text-muted mb-4">Access your account</p>

          {/* Form-level error */}
          {formError && <div className="alert alert-warning py-2">{formError}</div>}

          <form noValidate onSubmit={handleSubmit}>
            {/* Role */}
            <div className="mb-3">
              <label htmlFor="role" className="form-label">Role</label>
              <select
                id="role"
                className={`form-select ${invalid.role ? "is-invalid" : ""}`}
                value={role}
                onChange={(e) => setRole(e.target.value)}
                onBlur={() => setTouched((t) => ({ ...t, role: true }))}
                required
              >
                <option value="">-- Choose role --</option>
                <option value="superadmin">Super Admin</option>
                <option value="admin">Admin</option>
                <option value="teacher">Teacher</option>
                <option value="student">Student</option>
                <option value="parent">Parent</option>
              </select>
              <div className="invalid-feedback">Please select your role.</div>
            </div>

            {/* Username / ID */}
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Email or User ID</label>
              <input
                id="username"
                type="text"
                className={`form-control ${invalid.username ? "is-invalid" : ""}`}
                placeholder="Enter your email or ID"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onBlur={() => setTouched((t) => ({ ...t, username: true }))}
                required
                autoComplete="username"
              />
              <div className="invalid-feedback">This field is required.</div>
            </div>

            {/* Password with eye toggle */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <div className="input-group">
                <input
                  id="password"
                  type={showPwd ? "text" : "password"}
                  className={`form-control ${invalid.password ? "is-invalid" : ""}`}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onBlur={() => setTouched((t) => ({ ...t, password: true }))}
                  required
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setShowPwd((v) => !v)}
                  aria-label={showPwd ? "Hide password" : "Show password"}
                >
                  <i className={`bi ${showPwd ? "bi-eye-slash" : "bi-eye"}`} />
                </button>
                <div className="invalid-feedback">Password is required.</div>
              </div>
            </div>

            {/* Remember + Help */}
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="remember" />
                <label className="form-check-label" htmlFor="remember">Remember me</label>
              </div>
              <Link href="/forgot-password" className="small link-dark text-decoration-none">
                Forgot password?
              </Link>
            </div>

            {/* Submit */}
            <button type="submit" className="btn btn-warning w-100 py-2">
              <i className="bi bi-box-arrow-in-right me-2" />
              Login
            </button>
          </form>

          {/* Footer Links */}
          <div className="text-center mt-3">
            <Link href="/help" className="small link-secondary text-decoration-none">
              Need help?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
