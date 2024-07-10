import {
  EditFormData,
  EmailVerify,
  LoginFormData,
  LoginResponse,
  Member,
  SignupFormData,
} from '@/types/member';
import instance from './instance';
import { GalleriesData } from '@/types/gallery';
import { memberStore } from '@/stores/member';

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
  return response?.data as LoginResponse;
};

export const postSocialLogin = async (sessionId: { sessionId: string }) => {
  const response = await instance.post(`/login/social`, {
    params: { sessionId },
  });
  return response?.data as LoginResponse;
};

export const postLogout = async () => {
  const response = await instance.post(`/logout`);
  return response?.data;
};

export const getMemberInfo = async (nickname?: string) => {
  const response = await instance.get(`/members`, {
    params: {
      nickname,
    },
  });
  return response?.data as Member;
};

export const putMemberEditInfo = async (formData: EditFormData) => {
  const { introduce, profileImage, nickname } = formData;
  const data = new FormData();
  const member = {
    nickname,
    introduce,
  };
  if (profileImage) data.append('profileImage', profileImage);
  data.append(
    'memberUpdateDto',
    new Blob([JSON.stringify(member)], { type: 'application/json' }),
  );

  const response = await instance.post(`/members`, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
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
  const { accessToken } = response.data as { accessToken: string };
  memberStore.getState().setToken(accessToken);
  return response?.data as { accessToken: string };
};
