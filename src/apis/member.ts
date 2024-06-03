import { LoginFormData, SignupFormData } from '@/types/member';
import instance from './instance';

export const postSignup = async (formData: SignupFormData) => {
  const response = await instance.post('/api/signup', formData);
  return response?.data;
};

export const postLogin = async (formData: LoginFormData) => {
  const response = await instance.post('/api/login', formData);
  return response?.data;
};

export const getMemberInfo = async (nickname?: string) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await instance.get(`/api/members?nickname=${nickname}`);
  return response?.data as { nickname: string };
};
