import { createContext, useEffect, useState } from "react";
import { axiosInstance } from "../utils/axios";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(null)

  const getCartItem = async () => {
    try {
      const { data } = await axiosInstance("/getcart");
      console.log(data);
      setCartItems(data?.cart?.items)
      setTotal(data?.cart?.total)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCartItem()
  }, []);
  return (
    <CartContext.Provider value={{ cartItems, setCartItems, getCartItem, total }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
