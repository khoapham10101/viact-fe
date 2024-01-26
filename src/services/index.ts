import axios, { AxiosInstance } from "axios";
import { TOKEN_STORAGE_KEY } from "constants/common";
import { PATH } from "constants/path";

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
    if (error.response.data.statusCode === 401) {
      localStorage.removeItem(TOKEN_STORAGE_KEY);
      window.location.href = PATH.login;
    }
    return Promise.reject(error);
  },
);
export default axiosRequest;
