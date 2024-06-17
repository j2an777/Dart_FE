import { postEmailVerify } from '@/apis/member';
import { ExtendedSignupForm } from '@/types/member';
import { useMutation } from '@tanstack/react-query';
import { UseFormSetValue } from 'react-hook-form';

const usePostEmailVerify = ({
  setValue,
}: {
  setValue: UseFormSetValue<ExtendedSignupForm>;
}) => {
  return useMutation({
    mutationFn: (formData: { code: string; email: string }) => postEmailVerify(formData),
    onSuccess: (formData) => setValue('email', formData.email, { shouldValidate: true }),
  });
};

export default usePostEmailVerify;
