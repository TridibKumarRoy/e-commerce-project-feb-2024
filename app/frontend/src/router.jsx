import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import NotFound from "./pages/NotFound";
import MainLayout from "./layout/main";
import Product from "./pages/Product";
import Services from "./pages/Services";
import SingleProduct from "./pages/SingleProduct";
import Register from "./pages/auth/Register";
import ContactUs from "./pages/ContactUs";
import MyProfile from "./pages/MyProfile";
import MyOrders from "./pages/MyOrders";
import Cart from "./pages/Cart";
import Community from "./pages/Community";
import PostDetails from "./pages/PostDetails";
import AboutUs from "./pages/AboutUs";
import SingleService from "./pages/SingleService";
import ThankYou from "./pages/ThankYou";
import ServiceReq from "./pages/ServiceReq";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/products" element={<Product />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/service/:id" element={<SingleService />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/orders" element={<MyOrders />} />
          <Route path="/service-req" element={<ServiceReq />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/community" element={<Community />} />
          <Route path="/community/:id" element={<PostDetails />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
