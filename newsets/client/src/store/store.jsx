import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();  //*the global store

export const AuthProvider = ({ children }) => {

  //* Function to check if the token cookie exists
  const isTokenCookieExists = () => {
    return document.cookie.split(';').some((cookie) => cookie.trim().startsWith('token='));
  };

  //* Retrieve token from cookie if it exists
  const storedToken = getCookie("token");

  //* Initialize token state with the value from the cookie, if available
  const [token, setTokenState] = useState(isTokenCookieExists() ? storedToken : null);

  //!user data
  const [user, setUser] = useState("");

  //* Function to set the token state and store it in a cookie
  const setTokenAndCookie = (newToken) => {
    setTokenState(newToken);
    if (newToken) {
      setCookie("token", newToken, 7); // Set the token to expire in 7 days
    } else {
      clearTokenCookie(); // Clear the token cookie if newToken is null
    }
  };

  //* Function to remove the token from state and delete the token cookie
  const removeTokenAndCookie = () => {
    setTokenState(null); // Remove token from state    123abcABC@  tridibroy3012004@gmail.com
    removeCookie("token"); // Delete token cookie
  };

  let isloggedIn = !!token;

  
  
  //todo: fetching all data from server
  



  //! product api 🏍️
  //* get all products --1
  const getAllProducts = async (keyword = "", currentPage = 1, price = [0, 25000], category, ratings = 0) => {
    try {
      let link = `http://localhost:5000/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}`;
      
      if (category) {
        link = `http://localhost:5000/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&ratings[gte]=${ratings}`;
      }
      
      const response = await fetch(link, {
        method: "GET",
        headers: { Authorization: `${ token }` },
      })
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      if (response.ok) {
        const res_data = await response.json();
        // console.log("products from server: ", res_data.product);
        // return res_data;
        const allProducts = res_data.product
        return allProducts;
      }
    } catch (error) {
      console.error(error);
    }
  }
  //* get all products --1 ends
  
  //* Get All Products For Admin 2
  const getAdminProduct =  async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/v1/products`, {
        method: "GET",
        headers: { Authorization: `${token}` },
      })
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      if (response.ok) {
        const res_data = await response.json();
        // console.log("products from server: ", res_data.product);
        // return res_data;
        const allProductsAdmin = res_data.product
        return allProductsAdmin;
      }

    } catch (error) {
      console.error(error);
    }
  };
  //* Get All Products For Admin --2 ends

  //* Create Product --3
  const createProduct = async (productData) => {   //!not correct//
    try {
     
      const config = {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`
        },
        body: JSON.stringify(productData),
        Authorization: `${token}`
      };


      const response = await fetch(`http://localhost:5000/api/v1/admin/product/new`, config);

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      if (response.ok) {
        const res_data = await response.json();
        // console.log("products from server: ", res_data.product);
        // return res_data;
        return res_data.product;
      }

      
    } catch (error) {
      console.error('Error creating product:', error);
      throw error;
    }
  };
  //* Create Product --3 ends
      
  //* Update Product --4
  const updateProduct = async (id, productData) => {
    try {
      const config = {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`
        },
        body: JSON.stringify(productData)
      };

      const response = await fetch(`http://localhost:5000/api/v1/admin/product/${id}`, config);

      if (!response.ok) {
        throw new Error('Failed to update product');
      }

      const data = await response.json();
      return data.success;
    } catch (error) {
      console.error('Error updating product:', error);
      throw error;
    }
  };
  //* Update Product --4 ends

  //* Delete Product --5
  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/v1/admin/product/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `${token}`
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete product');
      }

      const data = await response.json();
      return data.success;
    } catch (error) {
      console.error('Error deleting product:', error);
      throw error;
    }
  };
  //* Delete Product --5 ends

  //* Get Products Details --6
  const getProductDetails = async (id) => {
    try {
      const config = {
        method: 'GET',
        headers: {  Authorization: `${token}` },
      };

      const response = await fetch(`http://localhost:5000/api/v1/product/${id}`, config);

      if (!response.ok) {
        throw new Error('Failed to fetch product details');
      }

      const data = await response.json();
      return data.product;
    } catch (error) {
      console.error('Error fetching product details:', error);
      throw error;
    }
  };
  //* Get Products Details --6 ends

  //* NEW REVIEW --7
  const newReview = async (reviewData) => {
    try {
      const config = {
        method: 'PUT',
        headers: { "Content-Type": "application/json", Authorization: `${token}` },
        body: JSON.stringify(reviewData)
      };

      const response = await fetch(`http://localhost:5000/api/v1/review`, config);

      if (!response.ok) {
        throw new Error('Failed to submit review');
      }

      const data = await response.json();
      return data.success;
    } catch (error) {
      console.error('Error submitting review:', error);
      throw error;
    }
  };
  //* NEW REVIEW --7 ends

  //* Get All Reviews of a Product --8
  const getAllReviews = async (id) => {
    try {
      const config = {
        method: 'GET',
        headers: {  Authorization: `${token}` }
      };

      const response = await fetch(`/api/v1/reviews?id=${id}`, config);

      if (!response.ok) {
        throw new Error('Failed to fetch reviews');
      }

      const data = await response.json();
      return data.reviews;
    } catch (error) {
      console.error('Error fetching reviews:', error);
      throw error;
    }
  };
  //* Get All Reviews of a Product --8 ends

  //* Delete Review --9
  const deleteReview = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/v1/review/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `${token}`
        },
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete review');
      }
      
      const data = await response.json();
      return data.reviews;
      
    } catch (error) {
      console.error('Error deleting review:', error);
      throw error;
    }
  }
    //* Delete Review --9 ends
  //! product api ends 🏍️

//!User api 👨🏻‍⚖️
  //! JWT AUTHENTICATION -- currently lagged in user data--1
  const userAuthentication = async () => {
    if (!token) {
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/v1/me", {
        method: "GET",
        headers: { Authorization: `${ token }` },
      })
      if (response.ok) {
        const res_data = await response.json();
        setUser(res_data.user);
        // console.log("user data from server: ", res_data.user);
      }

    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    userAuthentication();
  },[])
  //! JWT AUTHENTICATION  ENDS HERE

  //* Update Profile --2
  const updateUser = async (id, userData) => {
    try {
      const config = {
        method: 'PUT',
        headers: { "Content-Type": "application/json", Authorization: `${token}` },
        body: JSON.stringify(userData)
      };

      const response = await fetch(`/api/v1/admin/user/${id}`, config);

      if (!response.ok) {
        throw new Error('Failed to update user');
      }

      const data = await response.json();
      return data.success;
    } catch (error) {
      console.error('Error updating user:', error);
      throw error;
    }
  };
  //* Update Profile ends --2

  //!User api ends 👨🏻‍⚖️

  //todo ends here

  return (
    <AuthContext.Provider value={{ token, setToken: setTokenAndCookie, isloggedIn, removeTokenAndCookie, user, getAllProducts, getAdminProduct, createProduct, updateProduct, deleteProduct, getProductDetails, newReview, getAllReviews }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};


//* Function to set a cookie
const setCookie = (name, value, days) => {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
};

//* Function to get a cookie
const getCookie = (name) => {
  const cookies = document.cookie.split(";").map(cookie => cookie.trim());
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split("=");
    if (cookieName === name) {
      return cookieValue;
    }
  }
  return null;
};


//* Function to clear the token cookie
const clearTokenCookie = () => {
  document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
};

//* Function to remove a cookie
const removeCookie = (name) => {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
};