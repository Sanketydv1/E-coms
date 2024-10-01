import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      {/* <!-- Topbar Start --> */}
      <div className="container-fluid topbar bg-secondary  w-100">
        <div className="container">
          <div className="row gx-0 align-items-center" style={{ height: "45px" }}>
            <div className="col-lg-8 text-center text-lg-start mb-lg-0">
              <div className="d-flex flex-wrap">
                <Link
                  to="tel:+917088549708"
                  className="text-light me-4 d-none d-xl-block"
                >
                  <i className="fas fa-phone-alt text-light me-2"></i>+917088549708{" "}
                </Link>
                <Link
                  to="mailto:sanketkumar1919@gmail.com"
                  className="text-light me-4"
                >
                  <i className="fas fa-envelope text-light me-2"></i>{" "}
                  sanketkumar1919@gmail.com{" "}
                </Link>
                <Link to="http://wa.me/+917088549708" className="text-light me-4">
                  <i className="fa fa-whatsapp text-light me-2"></i>+917088549708{" "}
                </Link>
              </div>
            </div>
            <div className="col-lg-4 text-center text-lg-end d-none d-xl-block">
              <div className="d-flex align-items-center justify-content-end">
                <a
                  href="#"
                  className="btn btn-light btn-sm-square rounded-circle me-3"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="btn btn-light btn-sm-square rounded-circle me-3"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="btn btn-light btn-sm-square rounded-circle me-3"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="#"
                  className="btn btn-light btn-sm-square rounded-circle me-0"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Topbar End --> */}

      {/* <!-- Navbar & Hero Start --> */}
      <div className="container-fluid nav-bar sticky-top px-0 px-lg-4 py-2 py-lg-0">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Link to="/" className="navbar-brand p-0">
              <h1 className="display-6 text-primary">
                <i className="fas fa-shopping-cart me-3"></i>
                DCMart
              </h1>
              {/* <!-- <img src="img/logo.png" alt="Logo"> --> */}
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="fa fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav mx-auto py-0">
                <Link to="/" className="nav-item nav-link"> Home </Link>
                <Link to="about" className="nav-item nav-link"> About </Link>
                <Link to="shop" className="nav-item nav-link"> shop </Link>
                <Link to="features" className="nav-item nav-link"> Features </Link>
                <Link to="testimonials" className="nav-item nav-link"> Testimonials </Link>
                <Link to="admin" className="nav-item nav-link"> Admin </Link>
                <Link to="contactus" className="nav-item nav-link"> Contact </Link> </div>


              {/* <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Pages
                  </a>
                  <div className="dropdown-menu m-0">
                    <a href="feature.html" className="dropdown-item">
                      Our Feature
                    </a>
                    <a href="cars.html" className="dropdown-item">
                      Our Cars
                    </a>
                    <a href="team.html" className="dropdown-item">
                      Our Team
                    </a>
                    <a href="testimonial.html" className="dropdown-item">
                      Testimonial
                    </a>
                    <a href="404.html" className="dropdown-item">
                      404 Page
                    </a>
                  </div>
                </div> */}
              <Link to="#" className="btn btn-primary rounded-pill py-2 px-4"> Login </Link>
            </div>
          </nav>
        </div>
      </div>
      {/* <!-- Navbar & Hero End --> */}
    </>
  );
}
