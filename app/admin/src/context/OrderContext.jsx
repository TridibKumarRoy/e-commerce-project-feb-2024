import { createContext, useEffect, useState } from "react";
import { axiosInstance } from "../utils/axios";

export const OrderContext = createContext();

export default function OrderProvider({ children }) {
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    try {
      const { data } = await axiosInstance.get("/admin/orders");
      console.log(data);
      setOrders(data?.orders);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  return <OrderContext.Provider value={{orders}}>{children}</OrderContext.Provider>;
}
