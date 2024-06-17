import { EmailVerify, LoginFormData, Member, PutFormData, SignupFormData } from '@/types/member';
import instance from './instance';
import { GalleriesData } from '@/types/gallery';

export const postSignup = async (formData: SignupFormData) => {
  const response = await instance.post('/api/signup', formData);
  return response?.data;
};

export const postEmailCode = async (formData: { email: string }) => {
  const response = await instance.post(`/api/email/send`, formData);
  return response?.data;
};

export const postEmailVerify = async (formData: EmailVerify) => {
  const response = await instance.post(`/api/email/verify`, formData);
  return response?.data;
};

export const postCheckNickname = async (formData: { nickname: string }) => {
  const response = await instance.post(`/api/nickname/check`, formData);
  return response?.data;
};

export const postLogin = async (formData: LoginFormData) => {
  const response = await instance.post(`/api/login`, formData);
  return response?.data as { accessToken: string };
};

export const getMemberInfo = async (nickname?: string) => {
  const response = await instance.get(`/api/members?nickname=${nickname}`);
  return response?.data as Member;
};

export const putMemberEditInfo = async (formData: PutFormData) => {
  const response = await instance.put(`/api/members`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response?.data;
};

export const getMypage = async (nickname: string, page: number, size: number) => {
  const response = await instance.get('/api/mypage', {
    params: {
      nickname,
      page,
      size,
    },
  });
  return response?.data as GalleriesData;
};

export const getNewToken = async () => {
  const response = await instance.get('/api/reissue');
  return response?.data;
};
