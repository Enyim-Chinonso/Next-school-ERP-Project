"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Sidebar
 * - Props:
 *   - collapsed (boolean): shrinks width + hides labels on md+ screens
 *   - menu (array): [{ href, label, icon }]
 */
export default function Sidebar({ collapsed = false, menu = [] }) {
  const listRef = useRef(null);

  useEffect(() => {
    // Animate the menu items on mount
    const ctx = gsap.context(() => {
      gsap.from(".sidebar .nav-item", {
        x: -12,
        opacity: 0,
        duration: 0.3,
        stagger: 0.05,
        ease: "power2.out",
      });
    }, listRef);
    return () => ctx.revert();
  }, []);

  return (
    <aside className={`sidebar bg-dark text-white ${collapsed ? "is-collapsed" : ""}`}>
      {/* Brand area */}
      <div className="brand px-3 d-flex align-items-center">
        <i className="bi bi-mortarboard-fill me-2"></i>
        <span className="brand-text">School ERP</span>
      </div>

      {/* Menu */}
      <nav ref={listRef} className="mt-2">
        <ul className="nav flex-column">
          {menu.map((item) => (
            <li key={item.href} className="nav-item">
              <Link href={item.href} className="nav-link d-flex align-items-center">
                <i className={`bi ${item.icon} me-2`}></i>
                <span className="label">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
