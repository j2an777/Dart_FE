import { postCheckNickname, postEmailCode } from '@/apis/member';
import { alertStore } from '@/stores/modal';
import { AxoisErrorResponse } from '@/types/error';
import { ExtendedSignupForm } from '@/types/member';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useFormContext } from 'react-hook-form';

export type SignupCheckData = Record<'email' | 'nickname', string>;

interface usePostCheckEmailOrNicknameProps {
  value: 'email' | 'nickname';
}

const usePostCheckEmailOrNickname = ({ value }: usePostCheckEmailOrNicknameProps) => {
  const open = alertStore((state) => state.open);
  const { setValue } = useFormContext<ExtendedSignupForm>();
  return useMutation({
    mutationFn: (formData: SignupCheckData) => {
      if (value === 'email') {
        return postEmailCode(formData);
      } else {
        return postCheckNickname(formData);
      }
    },
    onSuccess: (_, formData) => {
      if (value === `nickname`) {
        return setValue('nickname', formData[value], { shouldValidate: true });
      }
    },
    onError: (error: AxiosError<AxoisErrorResponse>) => {
      const description = error.response?.data?.message;
      open({
        title: value === 'email' ? '이메일 인증 발송 실패' : '닉네임 인증 실패',
        description,
      });
    },
  });
};

export default usePostCheckEmailOrNickname;
