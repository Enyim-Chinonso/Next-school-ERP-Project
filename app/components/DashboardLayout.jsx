"use client";

import React, { useEffect, useRef, useState } from "react";
import Sidebar from "./Sidebar";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";

export default function DashboardLayout({
  children,
  role = "superadmin",
  pageTitle = "Dashboard",
}) {
  const [collapsed, setCollapsed] = useState(false);
  const lenisRef = useRef(null);
  const rafRef = useRef(null);
  const contentRef = useRef(null);

  // Initialize Lenis
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

  // Animate content on sub-page change
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
      {/* Sidebar */}
      <Sidebar
        role={role}
        collapsed={collapsed}
        toggleSidebar={() => setCollapsed(!collapsed)}
      />

      {/* Main content */}
      <div className="flex-grow-1 d-flex flex-column">
        {/* Page Title Header */}
        <header className="p-3 border-bottom bg-white shadow-sm d-flex align-items-center justify-content-between">
          <h2 className="h5 mb-0">{pageTitle}</h2>
         
        </header>

        {/* Content Area */}
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
