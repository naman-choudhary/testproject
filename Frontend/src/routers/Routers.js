import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Signin from "../pages/Signin";
import ForgotPassword from "../pages/ForgotPassword";
import AllOrders from "../pages/AllOrders";
import Orders from "../pages/Orders";
import AddProduct from "../pages/AddProduct";
import Cart from "../pages/Cart";

const Routers = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cars" element={<CarListing />} />
      <Route path="/cars/:slug" element={<CarDetails />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blogs/:slug" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      
      <Route path="/signin" element={<Signin />} />
      <Route path="/reset-password" element={<ForgotPassword />} />

      <Route path="/cart" element={<Cart />} />
      <Route path="/my-orders" element={<Orders/>}/>
      <Route path="/owner/add-product" element={<AddProduct/>}/>
      <Route path="/owner/all-orders" element={<AllOrders/>}/>
    </Routes>
  );
};

export default Routers;