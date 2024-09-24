import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection(props) {
  return (
    <>
      <div class="container-fluid bg-breadcrumb">
        <div class="container text-center py-5" style={{ maxWidth: "900px" }}>
          <h4
            class="text-white display-4 mb-4 wow fadeInDown"
            data-wow-delay="0.1s"
          >
            {props.title}
          </h4>
          <ol
            class="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown"
            data-wow-delay="0.3s"
          >
            <li class="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li class="breadcrumb-item active text-light">{props.title}</li>
          </ol>
        </div>
      </div>
    </>
  );
}
