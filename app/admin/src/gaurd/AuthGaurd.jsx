import React, { useContext, useEffect } from 'react'
import Loading from '../components/Loading';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const AuthGaurd = ({children}) => {
    const { user, isLoading } = useContext(AuthContext);
    const navigate = useNavigate();
  
    useEffect(() => {
      if (!isLoading && !user) {
        navigate("/auth/login");
      }
    }, [user, isLoading]);
  
  
    if(isLoading) {
      return (
          <Loading />
      )
    }
  
    return <>{children}</>;
}

export default AuthGaurd
