import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const api = axios.create({
  baseURL: API,
  headers: { "Content-Type": "application/json" },
  timeout: 15000,
});

export const submitIntake = (payload) => api.post("/intake", payload).then((r) => r.data);
export const requestPrimer = (payload) => api.post("/primer-leads", payload).then((r) => r.data);

// Helper to surface a clean error message from a FastAPI 422 response.
export const friendlyError = (err) => {
  const detail = err?.response?.data?.detail;
  if (Array.isArray(detail) && detail.length) {
    const first = detail[0];
    if (first?.msg) return first.msg.replace(/^Value error, /, "");
  }
  if (typeof detail === "string") return detail;
  return "Something went wrong. Please try again.";
};

export default api;
