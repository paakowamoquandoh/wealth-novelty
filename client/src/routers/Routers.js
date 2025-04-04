import React from "react";
import {  Routes, Route, Navigate } from "react-router-dom";
import CarListing from "../webpages/CarListing";
import CarDetails from "../webpages/CarDetails";
// import AboutUs from "../webpages/AboutUs";
import BlogDetails from "../webpages/BlogDetails";
import NotFound from "../webpages/NotFound";
import Contact from "../webpages/Contact";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import BuyCarDetails from "../webpages/BuyCarDetails";
import Hotel from "../pages/hotel/Hotel";
import List from "../pages/list/List";
import Homepage from "../webpages/Homepage";
import Rentals from "../pages/rental/Rental";
import PaymentSection from "../webpages/PaymentSection";


const Routers = () => {
  return (
 
    <Routes>
    <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Homepage/>}/>
        <Route path="/rental" element={<Rentals/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      <Route path="/cars" element={<CarListing />} />
      <Route path="/cars/:slug" element={<CarDetails />} />
      {/* <Route path="/carforrent/:slug" element={<CarForRent />} /> */}
      {/* <Route path="/blogs" element={<AboutUs />} /> */}
      <Route path="/payment" element={<PaymentSection />} />
      <Route path="/blogs/:slug" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/buycardetails/:slug" element={<BuyCarDetails/>}/>
    </Routes>
  );
};

export default Routers;
