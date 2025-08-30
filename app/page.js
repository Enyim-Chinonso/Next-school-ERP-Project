import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      {/* Navbar stays fixed at the top */}
      <Navbar />

      {/* Hero Section */}
      <header
        className="bg-light text-dark text-center d-flex align-items-start"
        style={{
           minHeight: "60vh", 
          paddingTop: "50px",     
         
        }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold">Welcome to School ERP</h1>
          <p className="lead">
            Manage Students, Teachers, Parents, and Admin operations all in one
            place.
          </p>
          <a href="/features" className="btn btn-primary btn-lg mt-3 me-3">
            Explore Features
          </a>
          <a href="/contact" className="btn btn-outline-dark btn-lg mt-3">
            Get in Touch
          </a>
        </div>
      </header>
    </>
  );
}
