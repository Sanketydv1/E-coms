import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Partials/Navbar";
import Footer from "./Partials/Footer";
import FeaturesPage from "./FeaturesPage";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ShopPage from "./ShopPage";
import TestimonialsPage from "./TestimonialsPage";
import Error404Page from "./Partials/Error404Page";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/*" element={<Error404Page />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
