import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./layout/Dashboard";
import AuthLayout from "./layout/AuthLayout";
import Login from "./pages/auth/Login";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import Services from "./pages/Services";
import AddService from "./pages/AddService";
import Orders from "./pages/Orders";
import ServiceReq from "./pages/ServiceReq";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard/products" />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="products/:id" element={<AddProduct />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:id" element={<AddService />} />
          <Route path="add-services" element={<AddService />} />
          <Route path="order" element={<Orders />} />
          <Route path="service-req" element={<ServiceReq />} />
        </Route>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
