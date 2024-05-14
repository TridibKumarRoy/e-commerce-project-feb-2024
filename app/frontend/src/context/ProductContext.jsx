import { createContext, useEffect, useState } from "react";
import { axiosInstance } from "../utils/axios";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [services, setServices] = useState([]);
  const [productTotalPage, setProductTotalPage] = useState(1);

  const getProducts = async (page) => {
    try {
      const { data } = await axiosInstance(`/products?page=${page || 1}`);
      setProducts(data.product);
      console.log(data);
      setProductTotalPage(Math.ceil(data?.productCount / 6));
    } catch (error) {
      console.log(error);
    }
  };

  const getServices = async () => {
    try {
      const { data } = await axiosInstance("/admin/services");
      setServices(data?.services);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
    getServices();
  }, []);

  return (
    <ProductContext.Provider
      value={{ products, services, setProducts, getProducts, productTotalPage }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
