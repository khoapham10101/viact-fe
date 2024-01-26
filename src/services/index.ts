import axios, { AxiosInstance } from "axios";
import { TOKEN_STORAGE_KEY } from "constants/common";

const baseURL = process.env.REACT_APP_API_URL;

const axiosRequest: AxiosInstance = axios.create({
  baseURL,
  headers: {
    //
  },
  timeout: 30000,
});

axiosRequest.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem(TOKEN_STORAGE_KEY);
    if (config.headers) {
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosRequest.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    // if (error.response.status === 401) {
    //   //
    // }
    return Promise.reject(error);
  },
);
export default axiosRequest;
