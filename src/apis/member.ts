import { LoginFormData, SignupFormData } from '@/types/member';
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
  return response.data;
};

export const putMemberEditInfo = async (formData: FormData) => {
  const response = await instance.put(
    `${import.meta.env.VITE_DEV_URL}api/members`, 
    formData
  );
  return response?.data;
};
