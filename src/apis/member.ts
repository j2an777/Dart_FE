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
  // FormData의 내용을 출력
  for (const [key, value] of formData.entries()) {
    if (key === 'profileImage' && value instanceof File) {
      console.log(`Key: ${key}, Filename: ${value.name}, Filetype: ${value.type}`);
    } else if (key === 'memberUpdateDto' && value instanceof Blob) {
      // Blob을 JSON 문자열로 변환하여 출력
      value.text().then((text) => {
        console.log(`Key: ${key}, Value: ${text}`);
      });
    } else {
      console.log(`Key: ${key}, Value: ${value}`);
    }
  }

  try {
    const response = await instance.put(`/members`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response?.data;
  } catch (error) {
    console.log('Error: ', error);
    throw error;
  }
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
