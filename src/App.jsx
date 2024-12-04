import React from "react";
import "./global.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CarouselCards from "./components/HomeCarousel/CarouselCards";
import Contacto from "./components/Registration/Contacto";
import HomePage from "./components/HomePage/Home";
import Details from "./components/Details/Details";
import AboutUs from "./components/AboutUs/AboutUs";

 const Home = () => {
    return (
      <>
        <Header />
        <HomePage />
        <Footer />
      </>
    );
  };

const Product = () => {
  return (
    <>
      <Header />
      <Details />
      <Footer />
    </>
  );
};



const AboutUsPage = () => {
  return (
    <>
      <Header />
      <AboutUs />
      <Footer />
    </>
  );
};

const AllProduct = () => {
  return (
    <>
      <Header />
      <CarouselCards />
      <Footer />
    </>
  );
};

const Contacto2 = () => {
  return (
    <>
      <Header />
      <Contacto />
      <Footer />
    </>
  );
};



function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Tipo-de-pinopsidas/:id" element={<Product />} />
          <Route path="/contacto" element={<Contacto2 />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/Tipo-de-pinopsidas" element={<AllProduct />} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;

