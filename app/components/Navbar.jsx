 "use client";

 import Link from "next/link";
// import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar fixed-top">
      <div className="container">
        {/* Brand/Logo */}
        <Link className="navbar-brand fw-bold" href="/">
          School ERP
        </Link>

        {/* Toggler for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" href="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="/features">
                Features
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="/contact">
                Contact
              </Link>
            </li>

            <li className="nav-item ms-lg-2">
              {/* Use btn-login so your custom CSS takes effect */}
              <Link className="btn btn-login" href="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}



// "use client";

// export default function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark custom-navbar fixed-top">
//       <div className="container">
//         {/* Brand */}
//         <a className="navbar-brand" href="#">
//           School ERP
//         </a>

//         {/* Toggler */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Links */}
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item">
//               <a className="nav-link" href="#">
//                 Home
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">
//                 Features
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">
//                 Pricing
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="btn btn-login" href="#">
//                 Login
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }
