"use client";
import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";

export default function SuperadminLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Sidebar
        role="superadmin"
        collapsed={collapsed}
        toggleSidebar={() => setCollapsed(!collapsed)}
      />

      {/* Main Content */}
      <main
        className="flex-grow-1 p-3"
        style={{
          minHeight: "100vh",
          background: "#f8f9fa",
          transition: "margin-left 0.25s ease",
        }}
      >
        {children}
      </main>
    </div>
  );
}
