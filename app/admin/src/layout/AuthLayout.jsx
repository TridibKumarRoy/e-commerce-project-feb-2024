import React from "react";
import { Outlet } from "react-router-dom";
import GuestGaurd from "../gaurd/GuestGaurd";

const AuthLayout = () => {
  return (
    <div>
      <GuestGaurd>
        <Outlet />
      </GuestGaurd>
    </div>
  );
};

export default AuthLayout;
