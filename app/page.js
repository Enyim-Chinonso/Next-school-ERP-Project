// import Navbar from "./components/Navbar";

import HeroAnimated from "./components/HeroAnimated";
import FadeInSection from "./components/FadeInSection";


export default function Home() {
  return (
    <>
      {/* Navbar stays fixed at the top */}
      {/* <Navbar /> */}

      {/* Hero Section */}

      <HeroAnimated />

      
      <FadeInSection>
        <section id="features" className="py-5 bg-light">
          <div className="container text-center">
            <h2 className="mb-4">Features</h2>
            <p>All-in-one platform for school management.</p>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section id="about" className="py-5">
          <div className="container text-center">
            <h2 className="mb-4">About Us</h2>
            <p>We help schools run smoothly with technology.</p>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section id="contact" className="py-5 bg-light">
          <div className="container text-center">
            <h2 className="mb-4">Contact</h2>
            <p>Reach out to us anytime.</p>
          </div>
        </section>
      </FadeInSection>


      {/* <header
        className="bg-light text-dark text-center d-flex align-items-start"
        style={{
          //  minHeight: "60vh", 
           minHeight: "100vh", 
          // paddingTop: "50px",     
          paddingTop: "80px",     
         
        }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold">Welcome to School ERP</h1>
          <p className="lead">
            Manage Students, Teachers, Parents, and Admin operations all in one
            place.
          </p>
          <div className="d-flex flex-column flex-md-row justify-content-center gap-3 mt-5">
          <a href="/features" className="btn btn-outline-warning btn-lg">
            Explore Features
          </a>
          <a href="/contact" className="btn btn-outline-dark btn-lg">
            Get in Touch
          </a>

          </div>
          
        </div>
      </header> */}
    </>
  );
}


