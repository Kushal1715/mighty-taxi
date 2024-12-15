import axios from 'axios';
import { refreshAccessToken } from './auth';

// Create Axios instance with interceptors
const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/', // Change to your API base URL
});

// Request interceptor to add the access token to headers
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle token expiration and refresh
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) { // Token expired
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem('refreshToken');
      if (refreshToken) {
        try {
          const newAccessToken = await refreshAccessToken(refreshToken);
          localStorage.setItem('accessToken', newAccessToken);
          originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
          return axiosInstance(originalRequest); // Retry the request with new token
        } catch (err) {
          console.error('Failed to refresh token', err);
        }
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
