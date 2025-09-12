"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation"; // ✅ router for logout redirect
import gsap from "gsap";
import Lenis from "@studio-freight/lenis";

export default function Sidebar({ role = "superadmin", collapsed, toggleSidebar }) {
  const pathname = usePathname();
  const router = useRouter(); // ✅ initialize router
  const [isMobile, setIsMobile] = useState(false);
  const [show, setShow] = useState(false);

  // --- Lenis for smooth scrolling ---
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  // --- detect mobile viewport ---
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // --- GSAP animation for sidebar (mobile only) ---
  useEffect(() => {
    if (isMobile && show) {
      gsap.fromTo(
        ".mobile-sidebar",
        { x: -260, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.35, ease: "power3.out" }
      );
    }
  }, [show, isMobile]);

  // Role-based links
  const links = {
    superadmin: [
      { label: "Overview", path: "/dashboard/superadmin/overview" },
      { label: "Schools", path: "/dashboard/superadmin/schools" },
      { label: "Users", path: "/dashboard/superadmin/users" },
      { label: "Settings", path: "/dashboard/superadmin/settings" },
    ],
    admin: [
      { label: "Overview", path: "/dashboard/admin" },
      { label: "Teachers", path: "/dashboard/admin/teachers" },
      { label: "Students", path: "/dashboard/admin/students" },
      { label: "Finance", path: "/dashboard/admin/finance" },
    ],
    teacher: [
      { label: "My Classes", path: "/dashboard/teacher/classes" },
      { label: "Attendance", path: "/dashboard/teacher/attendance" },
      { label: "Grades", path: "/dashboard/teacher/grades" },
    ],
    student: [
      { label: "Subjects", path: "/dashboard/student/subjects" },
      { label: "Results", path: "/dashboard/student/results" },
      { label: "Attendance", path: "/dashboard/student/attendance" },
    ],
    parent: [
      { label: "Children", path: "/dashboard/parent/children" },
      { label: "Reports", path: "/dashboard/parent/reports" },
    ],
  };

  const items = links[role] || [];

  // ✅ Logout handler
  const handleLogout = () => {
    // Clear tokens, cookies, or auth context here
    console.log("Logging out...");

    // Redirect to login page
    router.push("/login");
  };

  // ---------------- MOBILE ----------------
  if (isMobile) {
    return (
      <>
        {/* Mobile Toggle Button */}
        <button
          className="btn btn-outline-primary d-md-none m-2"
          onClick={() => setShow(true)}
        >
          ☰ Menu
        </button>

        {show && (
          <>
            {/* Backdrop */}
            <div
              onClick={() => setShow(false)}
              className="position-fixed top-0 start-0 w-100 h-100"
              style={{ zIndex: 1040, background: "rgba(0,0,0,0.45)" }}
            />

            {/* Sidebar */}
            <div
              className="mobile-sidebar position-fixed top-0 start-0 vh-100 bg-dark text-light d-flex flex-column p-3 shadow"
              style={{ width: 260, zIndex: 1045 }}
            >
              <div className="d-flex align-items-center justify-content-between mb-4">
                <span className="fw-bold fs-5">SchoolERP</span>
                <button
                  className="btn btn-sm btn-outline-light"
                  onClick={() => setShow(false)}
                >
                  ✕
                </button>
              </div>

              <ul className="nav flex-column">
                {items.map((item) => (
                  <li key={item.path} className="nav-item mb-2">
                    <Link
                      href={item.path}
                      className={`nav-link rounded py-2 px-3 ${
                        pathname === item.path
                          ? "active bg-primary text-white"
                          : "text-light"
                      }`}
                      onClick={() => setShow(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                {/* ✅ Logout button with handler */}
                <button onClick={handleLogout} className="btn btn-danger w-100">
                  Logout
                </button>
                <div className="small text-muted text-center mt-2">v1.0</div>
              </div>
            </div>
          </>
        )}
      </>
    );
  }

  // ---------------- DESKTOP ----------------
  return (
    <aside
      className="bg-dark text-light d-flex flex-column shadow-sm"
      style={{
        width: collapsed ? 72 : 240,
        minHeight: "100vh",
        transition: "width 0.25s ease",
      }}
    >
      {/* Brand + Toggle */}
      <div className="d-flex align-items-center justify-content-between p-3 border-bottom border-secondary">
        <span className="fw-bold" style={{ whiteSpace: "nowrap" }}>
          {collapsed ? "SE" : "SchoolERP"}
        </span>
        <button
          className="btn btn-sm btn-outline-light d-none d-md-inline"
          onClick={toggleSidebar}
        >
          {collapsed ? "»" : "«"}
        </button>
      </div>

      {/* Nav Links */}
      <nav className="p-2 flex-grow-1">
        <ul className="nav flex-column">
          {items.map((item) => (
            <li key={item.path} className="nav-item mb-1">
              <Link
                href={item.path}
                className={`nav-link d-flex align-items-center rounded py-2 px-3 ${
                  pathname === item.path
                    ? "active bg-primary text-white"
                    : "text-light"
                }`}
                style={{
                  transition: "background 0.2s ease, color 0.2s ease",
                  gap: 12,
                }}
              >
                <span
                  style={{
                    width: 14,
                    height: 14,
                    background: "#9aa4bd",
                    borderRadius: 3,
                    flexShrink: 0,
                  }}
                />
                {!collapsed && <span>{item.label}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-3 border-top border-secondary">
        {!collapsed && (
          <>
            {/* ✅ Logout button with handler */}
            <button onClick={handleLogout} className="btn btn-danger w-100 mb-2">
              Logout
            </button>
            <div className="small text-muted">v1.0</div>
          </>
        )}
      </div>
    </aside>
  );
}
