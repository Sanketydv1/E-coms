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
      <div className="container-fluid categories py-3">
        <div className="container pb-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "800px" }}
          >
            <h1 className="display-5 text-capitalize mb-3">
              Vehicle <span className="text-primary">Categories</span>
            </h1>
            <p className="mb-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet
              nemo expedita asperiores commodi accusantium at cum harum,
              excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam
              quia distinctio,
            </p>
          </div>
          <div className="categories-carousel wow fadeInUp" data-wow-delay="0.1s">
            <OwlCarousel {...options} classNameName="owl-theme">
              <div className="categories-item p-4">
                <div className="categories-item-inner">
                  <div className="categories-img rounded-top">
                    <img
                      src="img/car-1.png"
                      className="img-fluid w-100 rounded-top"
                      alt=""
                    />
                  </div>
                  <div className="categories-content rounded-bottom p-4">
                    <h4>Mercedes Benz R3</h4>
                    <div className="categories-review mb-4">
                      <div className="me-3">4.5 Review</div>
                      <div className="d-flex justify-content-center text-secondary">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star text-body"></i>
                      </div>
                    </div>
                    <div className="mb-4">
                      <h4 className="bg-white text-primary rounded-pill py-2 px-4 mb-0">
                        $99:00/Day
                      </h4>
                    </div>
                    <div className="row gy-2 gx-0 text-center mb-4">
                      <div className="col-4 border-end border-white">
                        <i className="fa fa-users text-dark"></i>{" "}
                        <span className="text-body ms-1">4 Seat</span>
                      </div>
                      <div className="col-4 border-end border-white">
                        <i className="fa fa-car text-dark"></i>{" "}
                        <span className="text-body ms-1">AT/MT</span>
                      </div>
                      <div className="col-4">
                        <i className="fa fa-gas-pump text-dark"></i>{" "}
                        <span className="text-body ms-1">Petrol</span>
                      </div>
                      <div className="col-4 border-end border-white">
                        <i className="fa fa-car text-dark"></i>{" "}
                        <span className="text-body ms-1">2015</span>
                      </div>
                      <div className="col-4 border-end border-white">
                        <i className="fa fa-cogs text-dark"></i>{" "}
                        <span className="text-body ms-1">AUTO</span>
                      </div>
                      <div className="col-4">
                        <i className="fa fa-road text-dark"></i>{" "}
                        <span className="text-body ms-1">27K</span>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="btn btn-primary rounded-pill d-flex justify-content-center py-3"
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
