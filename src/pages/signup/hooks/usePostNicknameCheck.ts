import { postCheckNickname } from '@/apis/member';
import { alertStore } from '@/stores/modal';
import { AxoisErrorResponse } from '@/types/error';
import { ExtendedSignupForm, SignupFormData } from '@/types/member';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { UseFormSetValue } from 'react-hook-form';

const usePostNicknameCheck = ({
  setValue,
}: {
  setValue: UseFormSetValue<ExtendedSignupForm>;
}) => {
  const open = alertStore((state) => state.open);
  return useMutation({
    mutationFn: (formData: Pick<SignupFormData, 'nickname'>) =>
      postCheckNickname(formData),
    onSuccess: (formData) =>
      setValue('nickname', formData.nickname, { shouldValidate: true }),
    onError: (error: AxiosError<AxoisErrorResponse>) => {
      const description = error.response?.data?.message;
      open({
        title: '닉네임 인증 실패',
        description,
      });
    },
  });
};

export default usePostNicknameCheck;
