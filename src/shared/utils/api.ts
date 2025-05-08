import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const get = (url: string, params = {}) => api.get(url, { params });
export const post = (url: string, data = {}) => api.post(url, data);
export const put = (url: string, data = {}) => api.put(url, data);
export const del = (url: string) => api.delete(url);

export default api;
