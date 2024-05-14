import axios from "axios";

const baseURL = "http://localhost:5000/api/v1";

export const axiosInstance = axios.create({
  baseURL,
});

const token = window.localStorage.getItem("token");
axiosInstance.defaults.headers.common["Authorization"] = token;
