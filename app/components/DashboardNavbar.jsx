"use client";

export default function DashboardNavbar({ onToggleSidebar }) {
  return (
    <nav className="navbar bg-white border-bottom sticky-top">
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          {/* Desktop: collapse toggle */}
          <button
            className="btn btn-outline-primary me-2 d-none d-md-inline-flex"
            onClick={onToggleSidebar}
            aria-label="Toggle sidebar"
          >
            <i className="bi bi-layout-sidebar-inset-reverse"></i>
          </button>

          {/* Mobile view */}
          <button
            className="btn btn-outline-primary d-inline-flex d-md-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileSidebar"
            aria-controls="mobileSidebar"
            aria-label="Open menu"
          >
            <i className="bi bi-list"></i>
          </button>

          <span className="navbar-brand mb-0 h1 ms-2">Dashboard</span>
        </div>

        <div className="d-flex align-items-center">
          <i className="bi bi-bell me-3"></i>
          <div className="dropdown">
            <button className="btn btn-light dropdown-toggle" data-bs-toggle="dropdown">
              <i className="bi bi-person-circle me-1"></i> Profile
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li><a className="dropdown-item" href="#">Settings</a></li>
              <li><a className="dropdown-item" href="#">Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
