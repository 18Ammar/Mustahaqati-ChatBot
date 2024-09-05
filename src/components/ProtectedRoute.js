import React from "react";
import { Navigate } from "react-router-dom";
import { checkLoginStatus } from "../service/authApi";

const ProtectedRoute = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const checkStatus = async () => {
      const loggedIn = await checkLoginStatus();
      console.log(loggedIn);
      setIsLoggedIn(loggedIn);
      setLoading(false);
    };
    checkStatus();
  }, []);

  if (loading) {
    return <div style={{ color: "black" }}>Loading...</div>;
  }

  return isLoggedIn ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
