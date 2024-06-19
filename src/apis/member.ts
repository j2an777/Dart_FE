import {
  EmailVerify,
  LoginFormData,
  Member,
  PutFormData,
  SignupFormData,
} from '@/types/member';
import instance from './instance';
import { GalleriesData } from '@/types/gallery';

export const postSignup = async (formData: SignupFormData) => {
  const response = await instance.post('/signup', formData);
  return response?.data;
};

export const postEmailCode = async (formData: { email: string }) => {
  const response = await instance.post(`/email/send`, formData);
  return response?.data;
};

export const postEmailVerify = async (formData: EmailVerify) => {
  const response = await instance.post(`/email/verify`, formData);
  return response?.data;
};

export const postCheckNickname = async (formData: { nickname: string }) => {
  const response = await instance.post(`/nickname/check`, formData);
  return response?.data;
};

export const postLogin = async (formData: LoginFormData) => {
  const response = await instance.post(`/login`, formData);
  return response?.data as { accessToken: string };
};

export const getMemberInfo = async (nickname?: string) => {
  const response = await instance.get(`/members?nickname=${nickname}`);
  return response?.data as Member;
};

export const putMemberEditInfo = async (formData: PutFormData) => {
  const response = await instance.put(`/members`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response?.data;
};

export const getMypage = async (nickname: string, page: number, size: number) => {
  const response = await instance.get('/mypage', {
    params: {
      nickname,
      page,
      size,
    },
  });
  return response?.data as GalleriesData;
};

export const getNewToken = async () => {
  const response = await instance.get('/reissue');
  return response?.data;
};
