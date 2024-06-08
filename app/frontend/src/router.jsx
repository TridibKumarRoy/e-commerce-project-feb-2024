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

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/orders" element={<MyOrders />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/community" element={<Community />} />
          <Route path="/community/:id" element={<PostDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
