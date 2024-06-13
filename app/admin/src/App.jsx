import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./layout/Dashboard";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
