import axios from 'axios';
import { notification } from 'antd';

// Create an instance of axios with the base URL
export const api = axios.create({
  baseURL: 'http://localhost:3001'
});

// Custom error handler for all APIs
const errorHandler = (error) => {
  const statusCode = error.response?.status;

  if (error.code === 'ERR_CANCELED') {
    // Handle canceled requests, e.g., show a notification
    // notification.error('Request canceled');
    return Promise.resolve();
  }

  // Log errors for status codes other than 401
  if (statusCode && statusCode !== 401) {
    console.error(error);
  }

  return Promise.reject(error);
};

// Register the custom error handler to the "api" axios instance
api.interceptors.response.use(
  undefined,
  (error) => errorHandler(error)
);
