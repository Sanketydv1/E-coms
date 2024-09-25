import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      {/* <!-- Topbar Start --> */}
      <div class="container-fluid topbar bg-secondary  w-100">
        <div class="container">
          <div class="row gx-0 align-items-center" style={{ height: "45px" }}>
            <div class="col-lg-8 text-center text-lg-start mb-lg-0">
              <div class="d-flex flex-wrap">
                <Link
                  to="tel:+917088549708"
                  class="text-light me-4 d-none d-xl-block"
                >
                  <i class="fas fa-phone-alt text-light me-2"></i>+917088549708{" "}
                </Link>
                <Link
                  to="mailto:sanketkumar1919@gmail.com"
                  class="text-light me-4"
                >
                  <i class="fas fa-envelope text-light me-2"></i>{" "}
                  sanketkumar1919@gmail.com{" "}
                </Link>
                <Link to="http://wa.me/+917088549708" class="text-light me-4">
                  <i class="fa fa-whatsapp text-light me-2"></i>+917088549708{" "}
                </Link>
              </div>
            </div>
            <div class="col-lg-4 text-center text-lg-end d-none d-xl-block">
              <div class="d-flex align-items-center justify-content-end">
                <a
                  href="#"
                  class="btn btn-light btn-sm-square rounded-circle me-3"
                >
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  class="btn btn-light btn-sm-square rounded-circle me-3"
                >
                  <i class="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  class="btn btn-light btn-sm-square rounded-circle me-3"
                >
                  <i class="fab fa-instagram"></i>
                </a>
                <a
                  href="#"
                  class="btn btn-light btn-sm-square rounded-circle me-0"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Topbar End --> */}

      {/* <!-- Navbar & Hero Start --> */}
      <div class="container-fluid nav-bar sticky-top px-0 px-lg-4 py-2 py-lg-0">
        <div class="container">
          <nav class="navbar navbar-expand-lg navbar-light">
            <Link to="/" class="navbar-brand p-0">
              <h1 class="display-6 text-primary">
                <i class="fas fa-shopping-cart me-3"></i>
                DCMart
              </h1>
              {/* <!-- <img src="img/logo.png" alt="Logo"> --> */}
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span class="fa fa-bars"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
              <div class="navbar-nav mx-auto py-0">
                <Link to="/" class="nav-item nav-link active"> Home </Link>
                <Link to="about" class="nav-item nav-link"> About </Link>
                <Link to="shop" class="nav-item nav-link"> shop </Link>
                <Link to="features" class="nav-item nav-link"> Features </Link>
                <Link to="testimonials" class="nav-item nav-link"> Testimonials </Link>
                {/* <Link to="contactus" class="nav-item nav-link"> ContactUs </Link> */}
                

                {/* <div class="nav-item dropdown">
                  <a
                    href="#"
                    class="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Pages
                  </a>
                  <div class="dropdown-menu m-0">
                    <a href="feature.html" class="dropdown-item">
                      Our Feature
                    </a>
                    <a href="cars.html" class="dropdown-item">
                      Our Cars
                    </a>
                    <a href="team.html" class="dropdown-item">
                      Our Team
                    </a>
                    <a href="testimonial.html" class="dropdown-item">
                      Testimonial
                    </a>
                    <a href="404.html" class="dropdown-item">
                      404 Page
                    </a>
                  </div>
                </div> */}
                <Link to="contactus" class="nav-item nav-link"> Contact </Link>
              </div>
              <Link to="#" class="btn btn-primary rounded-pill py-2 px-4"> Login </Link>
            </div>
          </nav>
        </div>
      </div>
      {/* <!-- Navbar & Hero End --> */}
    </>
  );
}
