import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const Dashboard = () => {
  return (
    <div class="wrapper">
      <Sidebar />

      <div class="main-panel">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
