import React, { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/layouts/Header/Header";
import { Footer } from "./components/layouts/Footer/Footer";
import { Home } from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Error404 } from './components/layouts/Error404/Error404';
import LoginSignUp from './components/User/LoginSignUp';
import ProductDetails from './components/layouts/Product/ProductDetails';
import { AuthContext, useAuth } from './store/store';


function App() {

  const product = {
    name: "BMW z4 v8",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: [{ url: "https://www.bmwofdayton.com/static/dealer-20050/BMW-M850i-engine.jpg" }],
    price: 100000,
    ratings: 4.5,
    category: 'Electronics',
    stock: 10,
    numberOfReviews: 5,
    reviews: ['Great product!', 'Fast shipping', 'Excellent quality'],
    _id: "fkfasfhuus8fu"
  }


  const { isloggedIn, getAllProducts } = useAuth();
  console.log("is logged in", isloggedIn);

  //* getting all products
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getAllProducts();
        setAllProducts(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [getAllProducts]);
  // console.log("all product", allProducts);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home products={allProducts} />} />
          <Route path="/login" element={<LoginSignUp />} />

          <Route path="/product/:id" element={<ProductDetails
            name={product.name}
            description={product.description}
            price={product.price}
            ratings={product.ratings}
            imageUrl={product.image[0].url}
            category={product.category}
            stock={product.stock}
            numberOfReviews={product.numberOfReviews}
            reviews={product.reviews}
          />} />


          <Route path="*" element={<Error404 />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;