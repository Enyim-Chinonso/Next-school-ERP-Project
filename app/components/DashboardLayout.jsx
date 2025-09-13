"use client";

import React, { useEffect, useRef, useState } from "react";
import Sidebar from "./Sidebar";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";

export default function DashboardLayout({
  children,
  role = "superadmin",
  pageTitle = "Dashboard", // ✅ Dynamic title
}) {
  const [collapsed, setCollapsed] = useState(false);
  const lenisRef = useRef(null);
  const rafRef = useRef(null);
  const contentRef = useRef(null); // ✅ Scoped GSAP animations

  // ✅ Initialize Lenis once
  useEffect(() => {
    lenisRef.current = new Lenis({ duration: 1.2, smooth: true });

    function raf(time) {
      lenisRef.current.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    }
    rafRef.current = requestAnimationFrame(raf);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (lenisRef.current) lenisRef.current.destroy();
    };
  }, []);

  // ✅ Animate content on sub-page change
  useEffect(() => {
    if (!contentRef.current) return;
    const entryTween = gsap.from(contentRef.current.children, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.05,
      ease: "power3.out",
    });

    return () => entryTween.kill();
  }, [children]);

  return (
    <div className="d-flex min-vh-100">
      {/* Sidebar (collapsible & role-based) */}
      <Sidebar
        role={role}
        collapsed={collapsed}
        toggleSidebar={() => setCollapsed(!collapsed)}
      />

      {/* Main content */}
      <div className="flex-grow-1 d-flex flex-column">
        {/* Topbar */}
        <header className="d-flex align-items-center justify-content-between p-3 border-bottom bg-white shadow-sm">
          {/* Sidebar toggle button (now for both mobile + desktop) */}
          <button
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            aria-expanded={!collapsed}
            className="btn btn-outline-secondary me-2"
            onClick={() => setCollapsed(!collapsed)}
          >
            ☰
          </button>

          {/* Dynamic Page Title */}
          <h2 className="h5 mb-0">{pageTitle}</h2>

          {/* Profile / role indicator + Logout button */}
          <div className="d-flex align-items-center gap-3">
            <span className="text-muted small">{role.toUpperCase()}</span>
            <div
              className="rounded-circle bg-secondary"
              style={{ width: 36, height: 36 }}
            ></div>
            <button
              className="btn btn-sm btn-outline-danger"
              onClick={() => {
                // 🔑 Add your logout logic here
                console.log("Logging out...");
              }}
            >
              Logout
            </button>
          </div>
        </header>

        {/* Content area (critical for sub-pages) */}
        <main
          ref={contentRef}
          className="p-4 flex-grow-1 bg-light"
          style={{ overflowX: "hidden" }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
