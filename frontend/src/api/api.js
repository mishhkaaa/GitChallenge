import axios from "axios";

const API_BASE = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

export const api = axios.create({
  baseURL: `${API_BASE}/api`,
});