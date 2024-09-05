import axios from "axios";

// const BASE_URL = "/api";

export async function fetchUserProfile(accessToken) {
  try {
    const response = await axios.get(
      "https://www.googleapis.com/oauth2/v3/userinfo",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch user profile:", error);
    throw error;
  }
}

export async function validateToken(accessToken) {
  try {
    const response = await fetch(
      `https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=${accessToken}`
    );
    if (response.ok) {
      return true;
    } else {
      throw new Error("Invalid token");
    }
  } catch (error) {
    console.error("Token validation failed:", error);
    throw error;
  }
}

export async function saveToken(accessToken) {
  try {
    // await axios.post(
    //   `${BASE_URL}/setToken`,
    //   { token: accessToken },
    //   {
    //     withCredentials: true,
    //   }
    // );
    localStorage.setItem("access_token", accessToken);
    console.log("Token saved");
  } catch (error) {
    console.error("Failed to save token:", error);
    throw error;
  }
}

export async function checkLoginStatus() {
  // try {
  //   // const response = await axios.get(`${BASE_URL}/checkToken`, {
  //   //   withCredentials: true,
  //   // });
  //   // return response.data.isLoggedIn;
  //   console.log("Login status checked ");

  //   return true;
  // } catch (error) {
  //   console.error("Error checking login status:", error);
  //   return false;
  // }
  return true; // Placeholder for actual implementation
}