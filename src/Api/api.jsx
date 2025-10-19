import axios from "axios";

export const API_BASE_URL = "https://5dbddf6dfd40.ngrok-free.app/"; 

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
