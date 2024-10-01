import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import { fetchUserProfile } from "../../../service/auth";
import { loginApi } from "../../../api/authApi";
import { useLocalStorage } from "@mantine/hooks";
export const useLogin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [tokenLocalStorage, setTokenLocalStorage] = useLocalStorage({ key: 'token', defaultValue: localStorage.getItem('token')?.replace(/['"]+/g, "") });

  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: async (response) => {
      const accessToken = response.access_token;
      try {
        const userProfile = await fetchUserProfile(accessToken);
        loginApi(userProfile).then((res) => {
          try {
            setTokenLocalStorage(res.data.token);
            console.log("User Profile:", userProfile);
            setIsLoggedIn(true);
          } catch (err) {
            console.error("Error while log in:", err);

          }
        });

      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    },
    onError: (error) => {
      console.error("Login failed:", error);
    },
  });


  const handleButtonClick = () => {
    if (isLoggedIn) {
      navigate("/chat");
    } else {
      login();
    }
  };

  return { isLoggedIn, handleButtonClick };
};
