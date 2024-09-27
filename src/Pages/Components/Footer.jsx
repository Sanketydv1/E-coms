import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      {/* <!-- Footer Start --> */}
      <div class="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
        <div class="container py-5">
          <div class="row g-5">
            <div class="col-md-6 col-xl-4">
              <div class="footer-item d-flex flex-column">
                <div class="footer-item">
                  <h4 class="text-white mb-4">About DC-Mart</h4>
                  <p class="mb-3">
                    Dolor amet sit justo amet elitr clita ipsum elitr est.Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit
                    consectetur adipiscing elit.
                  </p>
                </div>
                <div class="position-relative">
                  <input
                    class="form-control rounded-pill w-100 py-3 ps-4 pe-5"
                    type="text"
                    placeholder="Enter your email"
                  />
                  <button
                    type="button"
                    class="btn btn-secondary rounded-pill position-absolute top-0 end-0 py-2 mt-2 me-2"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-6 col-xl-2">
              <div class="footer-item d-flex flex-column">
                <h4 class="text-white mb-4">Menu</h4>
                <Link to="/">
                  <i class="fas fa-angle-right me-2"></i> Home
                </Link>
                <Link to="/about">
                  <i class="fas fa-angle-right me-2"></i> About
                </Link>
                <Link to="/shop">
                  <i class="fas fa-angle-right me-2"></i> Shop
                </Link>
                <Link to="/features">
                  <i class="fas fa-angle-right me-2"></i> Features
                </Link>
                <Link to="/contactus">
                  <i class="fas fa-angle-right me-2"></i> ContactUs
                </Link>
              </div>
            </div>
            <div class="col-md-6 col-lg-6 col-xl-2">
              <div class="footer-item d-flex flex-column">
                <h4 class="text-white mb-4">Policies</h4>
                
                <Link to="#">
                  <i class="fas fa-angle-right me-2"></i> Refund Policy
                </Link>
                <Link to="#">
                  <i class="fas fa-angle-right me-2"></i> Privacy Policy
                </Link>
                <Link to="#">
                  <i class="fas fa-angle-right me-2"></i> Terms & Conditions
                </Link>
              </div>
            </div>
            
            <div class="col-md-6 col-lg-6 col-xl-3">
              <div class="footer-item d-flex flex-column">
                <h4 class="text-white mb-4">Contact Info</h4>
                <a href="#">
                  <i class="fa fa-map-marker me-2"></i> A-52 Sector-126
                  Noida
                </a>
                <a href="mailto:sanketkumar1919@gmail.com">
                  <i class="fas fa-envelope me-2"></i>sanketkumar1919@gmail.com
                </a>
                <a href="tel:+917088549708">
                  <i class="fas fa-phone me-2"></i> +917088529708
                </a>
                <a href="http://wa.me/+917088549708" class="mb-3">
                  <i class="fa fa-whatsapp me-2"></i> +917088549708
                </a>
                <div class="d-flex">
                  <a
                    class="btn btn-secondary btn-md-square rounded-circle me-3"
                    href=""
                  >
                    <i class="fab fa-facebook-f text-white"></i>
                  </a>
                  <a
                    class="btn btn-secondary btn-md-square rounded-circle me-3"
                    href=""
                  >
                    <i class="fab fa-twitter text-white"></i>
                  </a>
                  <a
                    class="btn btn-secondary btn-md-square rounded-circle me-3"
                    href=""
                  >
                    <i class="fab fa-instagram text-white"></i>
                  </a>
                  <a
                    class="btn btn-secondary btn-md-square rounded-circle me-0"
                    href=""
                  >
                    <i class="fab fa-linkedin-in text-white"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Footer End --> */}
    </>
  );
}
