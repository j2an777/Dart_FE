import { EditFormData, LoginFormData, SignupFormData } from '@/types/member';
import instance from './instance';

export const postSignup = async (formData: SignupFormData) => {
  const response = await instance.post('/api/signup', formData);
  return response?.data;
};

export const postLogin = async (formData: LoginFormData) => {
  const response = await instance.post(
    `${import.meta.env.VITE_DEV_URL}api/login`,
    formData,
  );
  return response?.data;
};

export const getMemberInfo = async (nickname?: string) => {
  const response = await instance.get(
    `${import.meta.env.VITE_DEV_URL}api/members?nickname=${nickname}`,
  );
  return response?.data as { nickname: string };
};

export const getGalleryInfo = async () => {
  const response = await instance.get(`/api/galleries`);
  return response?.data;
};

export const putMemberEditInfo = async (formData: EditFormData) => {
  const response = await instance.put('/api/members', formData);
  return response?.data;
};
