import { postEmailVerify } from '@/apis/member';
import { useMutation } from '@tanstack/react-query';
import { UseFormSetValue } from 'react-hook-form';
import { ExtendedSignupForm } from '@/types/member';

const usePostEmailVerify = ({
  setValue,
}: {
  setValue: UseFormSetValue<ExtendedSignupForm>;
}) => {
  return useMutation({
    mutationFn: (formData: { code: string; email: string }) => postEmailVerify(formData),
    onSuccess: (_, formData) =>
      setValue('email', formData.email, { shouldValidate: true }),
  });
};

export default usePostEmailVerify;
