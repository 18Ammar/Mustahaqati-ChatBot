import axios from "axios";

const apiWithoutInterceptor = axios.create({
  baseURL: `${
    process.env.NODE_ENV === "production"
      ? "https://api"
      : "https://api"
  }`,
  headers: {
    "Content-Type": "application/json",
  },
});

const apiWithInterceptor = axios.create({
  baseURL: `${
    process.env.NODE_ENV === "production"
      ? "https://api"
      : "https://api"
  }`,
  headers: {
    "Content-Type": "application/json",
  },
});

apiWithInterceptor.interceptors.request.use((config) => {
    const token = localStorage.getItem("token").replace(/['"]+/g, "");
    if (token) {
      if (!config.headers) config.headers = {};
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
  
  apiWithInterceptor.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        localStorage.removeItem("token");
        window.location.href = "/";
      }
      return Promise.reject(error);
    }
  );
  

  
export {
    apiWithInterceptor,
    apiWithoutInterceptor,
  };
  