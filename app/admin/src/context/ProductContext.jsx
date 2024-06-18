import { createContext, useEffect, useState } from "react";
import { axiosInstance } from "../utils/axios";

export const ProductContext = createContext();

export default function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const { data } = await axiosInstance.get("/products");
      console.log(data);
      setProducts(data?.product);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return <ProductContext.Provider value={{products}}>{children}</ProductContext.Provider>;
}
