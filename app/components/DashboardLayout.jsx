// "use client";

// import { useEffect, useState } from "react";
// import gsap from "gsap";
// import Sidebar from "./Sidebar";
// import DashboardNavbar from "./DashboardNavbar";

// /**
//  * Provide a role-specific menu per page, but a good default helps.
//  */
// const defaultMenu = [
//   { href: "#", label: "Overview", icon: "bi-speedometer2" },
//   { href: "#", label: "Users", icon: "bi-people" },
//   { href: "#", label: "Classes", icon: "bi-book" },
//   { href: "#", label: "Reports", icon: "bi-graph-up" },
//   { href: "#", label: "Settings", icon: "bi-gear" },
// ];

// export default function DashboardLayout({ children, menu = defaultMenu }) {
//   const [collapsed, setCollapsed] = useState(false);

//   useEffect(() => {
//     gsap.from(".dashboard-main", {
//       opacity: 0,
//       y: 15,
//       duration: 0.4,
//       ease: "power2.out",
//     });
//   }, []);

//   return (
//     <>
//       {/* Desktop / Tablet Grid */}
//       <div className={`dashboard-grid`}>
//         <div className={`sidebar-col ${collapsed ? "collapsed" : ""} d-none d-md-block`}>
//           <Sidebar collapsed={collapsed} menu={menu} />
//         </div>

//       <div className="dashboard-main">
//           <DashboardNavbar onToggleSidebar={() => setCollapsed((v) => !v)} />
//           <div className="p-3 p-md-4">{children}</div>
//         </div>
//       </div>

//       {/* Mobile Offcanvas Sidebar */}
//       <div
//         className="offcanvas offcanvas-start"
//         tabIndex="-1"
//         id="mobileSidebar"
//         aria-labelledby="mobileSidebarLabel"
//       >
//         <div className="offcanvas-header">
//           <h5 className="offcanvas-title" id="mobileSidebarLabel">Menu</h5>
//           <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//         </div>
//         <div className="offcanvas-body p-0">
//           {/* Sidebar reused in offcanvas (not collapsed) */}
//           <Sidebar collapsed={false} menu={menu} />
//         </div>
//       </div>
//     </>
//   );
// }



"use client";

import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import DashboardNavbar from "./DashboardNavbar";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";

export default function DashboardLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  const menu = [
   { href: "#", label: "Overview", icon: "bi-speedometer2" },
   { href: "#", label: "Users", icon: "bi-people" },
   { href: "#", label: "Classes", icon: "bi-book" },
   { href: "#", label: "Reports", icon: "bi-graph-up" },
   { href: "#", label: "Settings", icon: "bi-gear" },
    ];
    
    // { href: "/dashboard", label: "Home", icon: "bi-house" },
    // { href: "/dashboard/features", label: "Features", icon: "bi-grid" },
    // { href: "/dashboard/about", label: "About", icon: "bi-info-circle" },
    // { href: "/dashboard/contact", label: "Contact", icon: "bi-envelope" },
    // { href: "/dashboard/login", label: "Login", icon: "bi-box-arrow-in-right" },
 

  useEffect(() => {
    // Initialize Lenis (smooth scrolling)
    const lenis = new Lenis({
      duration: 1.2, // smoothness speed
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth easing
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Animate page content with GSAP
    gsap.from("main", {
      opacity: 0,
      y: 30,
      duration: 0.6,
      ease: "power2.out",
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="d-flex">
      {/* Sidebar (desktop) */}
      <Sidebar collapsed={collapsed} menu={menu} />

      {/* Mobile offcanvas sidebar */}
      <div
        className="offcanvas offcanvas-start bg-dark text-white"
        tabIndex="-1"
        id="mobileSidebar"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Menu</h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <Sidebar collapsed={false} menu={menu} />
        </div>
      </div>

      {/* Page content */}
      <div className="flex-grow-1">
        <DashboardNavbar onToggleSidebar={() => setCollapsed(!collapsed)} />
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}
