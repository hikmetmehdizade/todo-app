import axios from 'axios';

const BASE_URL = ' http://localhost:4000/v1';

const http = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

http.interceptors.request.use(
  (config) => {
    if (config.url) {
      config.headers = {
        ...config.headers,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      };
      return config;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return error;
  }
);

export default http;
