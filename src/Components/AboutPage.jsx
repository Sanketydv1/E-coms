import React from "react";
import AboutUs from "./Components/Partials/AboutUs";
import Features from "./Components/Partials/Features";
import Banner from "./Components/Partials/Banner";
import Testimonials from "./Components/Partials/Testimonials";
import HeroSection from "./Components/Partials/HeroSection";

export default function AboutPage() {
  return (
    <>
      <HeroSection title="About Us" />
      <AboutUs />
      <Features />
      <Banner />
      <Testimonials />
    </>
  );
}
