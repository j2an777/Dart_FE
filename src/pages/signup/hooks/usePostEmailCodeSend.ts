import { postEmailCode } from '@/apis/member';
import { alertStore } from '@/stores/modal';
import { AxoisErrorResponse } from '@/types/error';
import { SignupFormData } from '@/types/member';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

const usePostEmailCodeSend = () => {
  const open = alertStore((state) => state.open);
  return useMutation({
    mutationFn: (formData: Pick<SignupFormData, 'email'>) => postEmailCode(formData),
    onSuccess: () => {},
    onError: (error: AxiosError<AxoisErrorResponse>) => {
      const description = error.response?.data?.message;
      open({
        title: '이메일 인증 발송 실패',
        description,
      });
    },
  });
};

export default usePostEmailCodeSend;
