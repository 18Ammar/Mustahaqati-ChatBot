import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const checkStatus = async () => {
      const access_token = localStorage.getItem("token");
      if(access_token) {
        console.log(access_token)
        setIsLoggedIn(true);
        setLoading(false);
      }
      else{
        setIsLoggedIn(false);
        setLoading(false);
      }
    };
    checkStatus();
  }, []);

  if (loading) {
    return <div style={{ color: "black" }}>Loading...</div>;
  }

  return isLoggedIn ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
