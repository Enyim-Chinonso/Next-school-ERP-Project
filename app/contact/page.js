export default function ContactPage() {
  return (
    <div className="container py-5">
      {/* Page Heading */}
      <h1 className="text-center mb-4 fw-bold">Contact Us</h1>
      <p className="text-center mb-5 text-muted">
        Have questions about our School ERP system? Get in touch with us.
      </p>

      <div className="row g-4">
        {/* Contact Form Section */}
        <div className="col-md-7">
          <div className="card shadow-sm p-4">
            <h5 className="fw-bold mb-3">Send us a Message</h5>
            <form>
              {/* Name */}
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-semibold">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Message */}
              <div className="mb-3">
                <label htmlFor="message" className="form-label fw-semibold">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-warning px-4">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Contact Info / Social Media Section */}
        <div className="col-md-5">
          <div className="card shadow-sm p-4">
            <h5 className="fw-bold mb-3">Contact Information</h5>
            <p className="mb-2">
              <i className="bi bi-envelope-fill me-2 text-dark"></i>
              enyimchinonso23@gmail.com
            </p>
            <p className="mb-2">
              <i className="bi bi-telephone-fill me-2 text-dark"></i>
              +234 810 811 1761
            </p>
            <p className="mb-4">
              <i className="bi bi-geo-alt-fill me-2 text-dark"></i>
              Ebonyi, Nigeria
            </p>

               {/* Socials */}
            <h6 className="fw-bold">Follow Us</h6>
            <div className="d-flex gap-3 mt-2">
              <a
                href="https://facebook.com/Chinonso Enyim"
                className="text-decoration-none text-primary fs-5">
                <i className="bi bi-facebook"></i>
              </a>

               <a href="https://github.com/Enyim-Chinonso" className="text-decoration-none text-dark fs-5">
                <i className="bi bi-github"></i>
              </a>

              <a href="https://wa.me/8108111761" className="text-decoration-none text-success fs-5">
                <i className="bi bi-whatsapp"></i>
              </a>

              <a href="#" className="text-decoration-none text-primary fs-5">
                <i className="bi bi-twitter"></i>
              </a>

               <a href="https://slack.com/Enyim Chinonso" className=" slack-icon text-decoration-none text-dark fs-5">
                <i className="bi bi-slack"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/chinonso-enyim-1435762a1/"
                className="text-decoration-none text-primary fs-5">
                <i className="bi bi-linkedin"></i>
              </a>

              

             

             


            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
