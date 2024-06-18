import { createContext, useEffect, useState } from "react";
import { axiosInstance } from "../utils/axios";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getUser = async () => {
    try {
      setIsLoading(true);
      const { data } = await axiosInstance.get("/me");
      console.log(data);
      setUser(data?.user);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    window.sessionStorage.removeItem("token");
    axiosInstance.defaults.headers.common["Authorization"] = null;
    setUser(null);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, isLoading, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}
