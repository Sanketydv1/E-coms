import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function ProductSlider() {
  let options = {
    responsive: {
      0: { items: 1.5 },
      720: { items: 2.2 },
      1000: { items: 3.2 },
      1920: { items: 4.2 },
    },
    dots: false,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
  };

  return (
    <>
      {/* <!-- Car categories Start --> */}
      <div class="container-fluid categories py-3">
        <div class="container pb-5">
          <div
            class="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "800px" }}
          >
            <h1 class="display-5 text-capitalize mb-3">
              Vehicle <span class="text-primary">Categories</span>
            </h1>
            <p class="mb-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet
              nemo expedita asperiores commodi accusantium at cum harum,
              excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam
              quia distinctio,
            </p>
          </div>
          <div class="categories-carousel wow fadeInUp" data-wow-delay="0.1s">
            <OwlCarousel {...options} className="owl-theme">
              <div class="categories-item p-4">
                <div class="categories-item-inner">
                  <div class="categories-img rounded-top">
                    <img
                      src="img/car-1.png"
                      class="img-fluid w-100 rounded-top"
                      alt=""
                    />
                  </div>
                  <div class="categories-content rounded-bottom p-4">
                    <h4>Mercedes Benz R3</h4>
                    <div class="categories-review mb-4">
                      <div class="me-3">4.5 Review</div>
                      <div class="d-flex justify-content-center text-secondary">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star text-body"></i>
                      </div>
                    </div>
                    <div class="mb-4">
                      <h4 class="bg-white text-primary rounded-pill py-2 px-4 mb-0">
                        $99:00/Day
                      </h4>
                    </div>
                    <div class="row gy-2 gx-0 text-center mb-4">
                      <div class="col-4 border-end border-white">
                        <i class="fa fa-users text-dark"></i>{" "}
                        <span class="text-body ms-1">4 Seat</span>
                      </div>
                      <div class="col-4 border-end border-white">
                        <i class="fa fa-car text-dark"></i>{" "}
                        <span class="text-body ms-1">AT/MT</span>
                      </div>
                      <div class="col-4">
                        <i class="fa fa-gas-pump text-dark"></i>{" "}
                        <span class="text-body ms-1">Petrol</span>
                      </div>
                      <div class="col-4 border-end border-white">
                        <i class="fa fa-car text-dark"></i>{" "}
                        <span class="text-body ms-1">2015</span>
                      </div>
                      <div class="col-4 border-end border-white">
                        <i class="fa fa-cogs text-dark"></i>{" "}
                        <span class="text-body ms-1">AUTO</span>
                      </div>
                      <div class="col-4">
                        <i class="fa fa-road text-dark"></i>{" "}
                        <span class="text-body ms-1">27K</span>
                      </div>
                    </div>
                    <a
                      href="#"
                      class="btn btn-primary rounded-pill d-flex justify-content-center py-3"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
      {/* <!-- Car categories End --> */}
    </>
  );
}
