import React, { createContext, useState, useContext, useEffect } from "react";
import { fetchUserProfile } from "../service/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUserProfile = async () => {
      const token = localStorage.getItem("access_token");
      console.log("Access token " + token);
      if (token) {
        const profile = await fetchUserProfile(token);
        console.log("User profile " + JSON.stringify(profile));
        setUser(profile);
      }
    };
    loadUserProfile();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
