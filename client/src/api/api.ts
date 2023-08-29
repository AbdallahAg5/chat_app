import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
let tokenFromRedux = '';
const token: string = cookies.get('token');

export const setToken = (newToken: string) => {
  tokenFromRedux = newToken;
  return tokenFromRedux;
};

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
});

export default axiosClient;

axiosClient.interceptors.request.use((config) => {
  tokenFromRedux
    ? (config.headers.Authorization = `${tokenFromRedux}`)
    : token && (config.headers.Authorization = `${token}`);
  return config;
});
