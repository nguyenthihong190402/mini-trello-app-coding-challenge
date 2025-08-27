import axios from "axios";

const instant = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

instant.interceptors.request.use({
  function(config) {
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      config.headers.Authorization = "Bearer " + authToken;
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  },
});

instant.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem("authToken");
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);
export default instant;
