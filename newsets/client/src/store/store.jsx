import { createContext, useContext, useState } from "react";



export const AuthContext = createContext();  //*the global store

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  
  let isloggedIn = !!token;
  
  //todo: storing token in cookie
  // const storeToken = (token) => {
  //   localStorage.setItem("token", token);
  // };

    return (
      <AuthContext.Provider value={{ token, setToken, isloggedIn }}>
        {children}
      </AuthContext.Provider>
    );
};


export const useAuth = () => {
  return useContext(AuthContext);
};
