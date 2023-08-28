import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const token = cookies.get('token');

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
});

export default axiosClient;

axiosClient.interceptors.request.use((config) => {
  token ? (config.headers.Authorization = `Bearer ${token}`) : null;
  return config;
});
