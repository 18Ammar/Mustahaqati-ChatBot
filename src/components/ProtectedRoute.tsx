// import React from "react";
// import { Navigate } from "react-router-dom";
// import { fetchUserProfile } from "../service/auth";

// const ProtectedRoute = ({ children }) => {
//   const [isLoggedIn, setIsLoggedIn] = React.useState(null); // Start with null to indicate loading

//   React.useEffect(() => {
//     const checkStatus = async () => {
//       const access_token = localStorage.getItem('access_token');
//       if (access_token) {
//         const userProfile = await fetchUserProfile(access_token);
//         if (userProfile) {
//           setIsLoggedIn(true);
//         } else {
//           localStorage.removeItem('access_token');
//           setIsLoggedIn(false);
//         }
//       } else {
//         setIsLoggedIn(false); 
//       }
//     };
//     checkStatus();
//   }, []);

//   if (isLoggedIn === null) {
//     return <div>Loading...</div>; 
//   }

//   return isLoggedIn ? children : <Navigate to="/" />;
// };

// export default ProtectedRoute;
