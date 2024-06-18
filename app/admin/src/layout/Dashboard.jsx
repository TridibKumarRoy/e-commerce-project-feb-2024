import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import AuthGaurd from "../gaurd/AuthGaurd";

const Dashboard = () => {
  return (
    <AuthGaurd>
      <div class="wrapper">
        <Sidebar />

        <div class="main-panel">
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      </div>
    </AuthGaurd>
  );
};

export default Dashboard;
