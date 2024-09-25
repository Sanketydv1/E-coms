import React from "react";
import HeroSection from "./Components/HeroSection";
import Testimonials from "./Components/Testimonials";
import Features from "./Components/Features";
import Banner from "./Components/Banner";

export default function TestimonialsPage() {
  return (
    <>
      <HeroSection title="Testimonials Section" />
      <Testimonials />
      <Features />
      <Banner />
    </>
  );
}
