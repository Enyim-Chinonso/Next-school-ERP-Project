// import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      {/* Navbar stays fixed at the top */}
      {/* <Navbar /> */}

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
          <div className="d-flex flex-column flex-md-row justify-content-center gap-3 mt-5">
          <a href="/features" className="btn btn-outline-warning btn-lg">
            Explore Features
          </a>
          <a href="/contact" className="btn btn-outline-dark btn-lg">
            Get in Touch
          </a>

          </div>
          
        </div>
      </header>
    </>
  );
}


// export default function HomePage() {
//   return (
//     <header
//       className="hero text-light text-center d-flex align-items-start"
//       style={{
//         minHeight: "60vh",
//         paddingTop: "40px", // keeps hero closer to navbar
//       }}
//     >
//       <div className="container mt-5">
//         <h1 className="display-4 fw-bold">Welcome to School ERP</h1>
//         <p className="lead">
//  Manage Students, Teachers, Parents, and Admin operations all in one place.
//  </p>
//         <a href="#" className="btn btn-warning btn-lg mt-3">
//           Explore features
//         </a>

//         <a href="/contact" className="btn btn-outline-dark btn-lg mt-3">
//              Get in Touch
//         </a>
//       </div>
//     </header>
//   );
// }
