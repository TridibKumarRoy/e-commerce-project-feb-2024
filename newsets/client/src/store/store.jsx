import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();  //*the global store

export const AuthProvider = ({ children }) => {

  //! Function to check if the token cookie exists
  const isTokenCookieExists = () => {
    return document.cookie.split(';').some((cookie) => cookie.trim().startsWith('token='));
  };

  //* Retrieve token from cookie if it exists
  const storedToken = getCookie("token");

  //* Initialize token state with the value from the cookie, if available
  // const [token, setTokenState] = useState(storedToken || null);
  const [token, setTokenState] = useState(isTokenCookieExists() ? 'your_default_token_value' : null);

  // //* Function to set the token state and store it in a cookie
  // const setTokenAndCookie = (newToken) => {
  //   setTokenState(newToken);
  //   setCookie("token", newToken, 7); // Set the token to expire in 7 days
  // };

  //! Function to set the token state and store it in a cookie
  const setTokenAndCookie = (newToken) => {
    setTokenState(newToken);
    if (newToken) {
      setCookie("token", newToken, 7); // Set the token to expire in 7 days
    } else {
      clearTokenCookie(); // Clear the token cookie if newToken is null
    }
  };

  //! Function to remove the token from state and delete the token cookie
  const removeTokenAndCookie = () => {
    setTokenState(null); // Remove token from state    123abcABC@  tridibroy3012004@gmail.com
    removeCookie("token"); // Delete token cookie
  };



  let isloggedIn = !!token;

  return (
    <AuthContext.Provider value={{ token, setToken: setTokenAndCookie, isloggedIn, removeTokenAndCookie }}>
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


//! Function to clear the token cookie
const clearTokenCookie = () => {
  document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
};

//! Function to remove a cookie
const removeCookie = (name) => {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
};