// import React, { createContext, useState, useContext, useEffect } from "react";
// import { fetchUserProfile } from "../service/auth";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const loadUserProfile = async () => {
//       const token = localStorage.getItem("access_token");
//       if (token) {
//         const profile = await fetchUserProfile(token);
//         setUser(profile);
//       }
//     };
//     loadUserProfile();
//   }, []);

//   return (
//     <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
