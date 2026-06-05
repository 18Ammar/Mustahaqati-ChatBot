// import { useNavigate } from "react-router-dom";
// import { useGoogleLogin } from "@react-oauth/google";
// import { fetchUserProfile } from "../../../service/auth";
// import { loginApi } from "../../../api/authApi";
// import { useState } from "react";

// export const useLogin = () => {
//   const navigate = useNavigate();
//   const [logged, setLogged] = useState(false);
//   const login = useGoogleLogin({
//     onSuccess: async (response) => {
//       const accessToken = response.access_token;
//       try {
//         const userProfile = await fetchUserProfile(accessToken);
//         localStorage.setItem("access_token", accessToken);
//         setLogged(true);
//         loginApi(userProfile).then((res) => {
//           navigate("/chat");
//         }).catch((err) => {
//           console.error("Login API error:", err);
//         });
//       } catch (error) {
//         console.error("Error fetching user profile:", error);
//         localStorage.removeItem("access_token");
//       }
//     },
//     onError: (error) => {
//       console.error("Login failed:", error);
//     },
//   });

//   const isLoggedIn = async () => {
//     const accessToken = localStorage.getItem("access_token");
//     if (accessToken) {
//       try {
//         const profile = await fetchUserProfile(accessToken);
//         setLogged(true);
//       } catch (error) {
//         console.error("Token validation failed:", error);
//         localStorage.removeItem("access_token");
//         setLogged(false)
//       }
//     }
//     // setLogged(false);

//   };

//   const handleButtonClick = async () => {
//     if (logged) {
//       navigate("/chat");
//     } else {
//       login();
//     }
//   };
//   const check = async () => await isLoggedIn();
//   check();
//   return { logged, handleButtonClick };
// };
