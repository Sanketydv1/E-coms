import React from "react";
import HeroSection from "./Components/HeroSection";
import Testimonials from "./Components/Testimonials";
import Features from "./Components/Features";
import Banner from "./Components/Banner";

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
