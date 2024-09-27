import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function Testimonials() {
  let options = {
    responsive: {
      0: { items: 1.5 },
      720: { items: 2.2 },
      1000: { items: 3.2 },
      1920: { items: 4.2 },
    },
    dots:false,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
  };

  return (
    <>
      <div class="container-fluid testimonial py-3">
        <div class="container pb-5">
          <div
            class="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "800px" }}
          >
            <h1 class="display-5 text-capitalize mb-3">
              Our Clients<span class="text-primary"> Riviews</span>
            </h1>
            <p class="mb-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet
              nemo expedita asperiores commodi accusantium at cum harum,
              excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam
              quia distinctio,
            </p>
          </div>
          <div class="testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
            <OwlCarousel
              {...options}
              className="owl-theme"
            >
              <div class="testimonial-item">
                <div class="testimonial-quote">
                  <i class="fa fa-quote-right fa-2x"></i>
                </div>
                <div class="testimonial-inner p-4">
                  <img src="img/testimonial-1.jpg" class="img-fluid" alt="" />
                  <div class="ms-4">
                    <h4>Person Name</h4>
                    <p>Profession</p>
                    <div class="d-flex text-primary">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star text-body"></i>
                    </div>
                  </div>
                </div>
                <div class="border-top rounded-bottom p-4">
                  <p class="mb-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quam soluta neque ab repudiandae reprehenderit ipsum eos
                    cumque esse repellendus impedit.
                  </p>
                </div>
              </div>
              <div class="testimonial-item">
                <div class="testimonial-quote">
                  <i class="fa fa-quote-right fa-2x"></i>
                </div>
                <div class="testimonial-inner p-4">
                  <img src="img/testimonial-2.jpg" class="img-fluid" alt="" />
                  <div class="ms-4">
                    <h4>Person Name</h4>
                    <p>Profession</p>
                    <div class="d-flex text-primary">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star text-body"></i>
                      <i class="fas fa-star text-body"></i>
                    </div>
                  </div>
                </div>
                <div class="border-top rounded-bottom p-4">
                  <p class="mb-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quam soluta neque ab repudiandae reprehenderit ipsum eos
                    cumque esse repellendus impedit.
                  </p>
                </div>
              </div>
              <div class="testimonial-item">
                <div class="testimonial-quote">
                  <i class="fa fa-quote-right fa-2x"></i>
                </div>
                <div class="testimonial-inner p-4">
                  <img src="img/testimonial-3.jpg" class="img-fluid" alt="" />
                  <div class="ms-4">
                    <h4>Person Name</h4>
                    <p>Profession</p>
                    <div class="d-flex text-primary">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star text-body"></i>
                      <i class="fas fa-star text-body"></i>
                      <i class="fas fa-star text-body"></i>
                    </div>
                  </div>
                </div>
                <div class="border-top rounded-bottom p-4">
                  <p class="mb-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quam soluta neque ab repudiandae reprehenderit ipsum eos
                    cumque esse repellendus impedit.
                  </p>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </>
  );
}
