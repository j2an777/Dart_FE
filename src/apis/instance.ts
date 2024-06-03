import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(async (config) => {
  const access = localStorage.getItem('accessToken');
  if (access) {
    config.headers['Authorization'] = `Bearer ${access}`;
  }
  return config;
});

export default instance;
