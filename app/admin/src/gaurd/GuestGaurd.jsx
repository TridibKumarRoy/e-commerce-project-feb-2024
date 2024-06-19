import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

const GuestGaurd = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && user) {
      navigate("/dashboard/products");
    }
  }, [user, isLoading]);


  if(isLoading) {
    return (
        <Loading />
    )
  }

  return <>{children}</>;
};

export default GuestGaurd;
