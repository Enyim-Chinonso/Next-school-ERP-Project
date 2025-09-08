export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container text-center">
        {/* Navigation Links */}
        <ul className="list-inline mb-3 ">
          <li className="list-inline-item">
            <a href="/" className="text-warning text-decoration-none me-3">
              Home
            </a>
          </li>
          <li className="list-inline-item">
            <a
              href="/features"
              className="text-warning text-decoration-none me-3"
            >
              Features
            </a>
          </li>
          <li className="list-inline-item">
            <a href="/about" className="text-warning text-decoration-none me-3">
              About
            </a>
          </li>
          <li className="list-inline-item">
            <a
              href="/contact"
              className="text-warning text-decoration-none me-3"
            >
              Contact
            </a>
          </li>
          <li className="list-inline-item">
            <a href="/login" className="text-warning text-decoration-none">
              Login
            </a>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="mb-3">
          <a
            href="https://facebook.com/Chinonso Enyim"
            className="text-primary me-3"
          >
            <i className="bi bi-facebook"></i>
          </a>

          <a
            href="https://wa.me/8108111761"
            className="text-decoration-none text-success me-3 fs-5"
          >
            <i className="bi bi-whatsapp"></i>
          </a>

          <a
            href="https://github.com/Enyim-Chinonso"
            className="text-decoration-none text-white me-3 fs-5"
          >
            <i className="bi bi-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/chinonso-enyim-1435762a1/"
            className="text-primary me-3"
          >
            <i className="bi bi-linkedin"></i>
          </a>

          <a
            href="https://slack.com/Enyim Chinonso"
            className=" slack-icon text-decoration-none text-dark me-3 fs-5"
          >
            <i className="bi bi-slack"></i>
          </a>

          <a href="/contact" className="text-primary me-3">
            <i className="bi bi-twitter"></i>
          </a>
        </div>

        {/* Copyright */}
        <p className="mb-0">
          &copy; {new Date().getFullYear()} School ERP. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
