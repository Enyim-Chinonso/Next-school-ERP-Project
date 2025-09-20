export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-dark text-light text-center py-5 hero.section">
        <div className="container">
          <h1 className="display-4 fw-bold">About School ERP</h1>
          <p className="lead mt-3">
            Transforming Education Through Technology
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-6">
              <h2 className="fw-bold">Our Mission</h2>
              <p className="mt-3">
                To simplify school operations by providing an all-in-one ERP
                system that empowers administrators, teachers, parents, and
                students. We aim to reduce paperwork, automate processes, and
                ensure transparency across all school activities.
              </p>
            </div>
            <div className="col-md-6">
              <h2 className="fw-bold">Our Vision</h2>
              <p className="mt-3">
                To become the leading school management solution in Africa and
                beyond, making education smarter, more connected, and more
                efficient.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features/Focus Areas */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">What We Offer</h2>
          <div className="row">
            <div className="col-md-3 mb-4">
              <h5>📚 Student Management</h5>
              <p>Track attendance, performance, and profiles with ease.</p>
            </div>
            <div className="col-md-3 mb-4">
              <h5>👩‍🏫 Teacher Tools</h5>
              <p>Enable teachers to manage classes, grades, and lesson plans.</p>
            </div>
            <div className="col-md-3 mb-4">
              <h5>👨‍👩‍👧 Parent Portal</h5>
              <p>Keep parents engaged with real-time updates and reports.</p>
            </div>
            <div className="col-md-3 mb-4">
              <h5>⚙️ Admin Dashboard</h5>
              <p>Control school-wide data, analytics, and communication tools.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Our Impact</h2>
          <p className="lead">
            School ERP helps schools save valuable time, improve communication,
            reduce administrative errors, and create an environment where
            students can thrive academically.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-warning text-dark text-center py-5">
        <div className="container">
          <h2 className="fw-bold">Join Us in Transforming School Systems</h2>
          <p className="mt-3">
            Let’s build a future where schools run efficiently, parents stay
            connected, and students succeed.
          </p>
          <a href="/contact" className="btn btn-dark btn-lg mt-3">
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
