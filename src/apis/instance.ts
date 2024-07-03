import axios from 'axios';
import { memberStore } from '@/stores/member';
// import { getNewToken } from './member';

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

instance.interceptors.request.use(async (config) => {
  const { accessToken } = memberStore.getState();
  if (accessToken) {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }
  return config;
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        // const response = await getNewToken();
        // const { accessToken } = response;
        // const { setToken } = memberStore.getState();
        // setToken(accessToken);
        // originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
        // return instance(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);

export default instance;
