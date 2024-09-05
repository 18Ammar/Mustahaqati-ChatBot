import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import { fetchUserProfile, saveToken, checkLoginStatus } from "../../../service/authApi";

export const useLogin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: async (response) => {
      const accessToken = response.access_token;
      await saveToken(accessToken);
      try {
        const userProfile = await fetchUserProfile(accessToken);
        console.log("User Profile:", userProfile);
        navigate("/chat");
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    },
    onError: (error) => {
      console.error("Login failed:", error);
    },
  });

  useEffect(() => {
    const checkStatus = async () => {
      const loggedIn = await checkLoginStatus();
      setIsLoggedIn(loggedIn);
    };
    checkStatus();
  }, []);

  const handleButtonClick = () => {
    if (isLoggedIn) {
      navigate("/chat");
    } else {
      login();
    }
  };

  return { isLoggedIn, handleButtonClick };
};
