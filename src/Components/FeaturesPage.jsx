import React from "react";
import HeroSection from "./Partials/HeroSection";
import Testimonials from "./Partials/Testimonials";
import Features from "./Partials/Features";
import Banner from "./Partials/Banner";

export default function featuresPage() {
  return (
    <>
      <HeroSection title="Features Section" />
      <Features />
      <Banner />
      <Testimonials />
    </>
  );
}
