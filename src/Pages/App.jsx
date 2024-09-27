import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import FeaturesPage from "./FeaturesPage";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ShopPage from "./ShopPage";
import TestimonialsPage from "./TestimonialsPage";
import Error404Page from "./Components/Error404Page";
import ContactUsPage from "./ContactUsPage";

import AdminHome from "./Admin/Home/AdminHome";
import AdminMainCategory from "./Admin/Maincategory/AdminMainCategory";
import AdminCreateMainCategory from "./Admin/Maincategory/AdminCreateMainCategory";

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
          <Route path="/contactus" element={<ContactUsPage />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminHome />} />
          <Route path="/admin/maincategory" element={<AdminMainCategory />} />
          <Route path="/admin/maincategory/create" element={<AdminCreateMainCategory />} />

          <Route path="/*" element={<Error404Page />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
