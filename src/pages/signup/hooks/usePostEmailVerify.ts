import { postEmailVerify } from '@/apis/member';
import { ExtendedSignupForm } from '@/types/member';
import { useMutation } from '@tanstack/react-query';
import { useFormContext } from 'react-hook-form';

const usePostEmailVerify = () => {
  const { setValue } = useFormContext<ExtendedSignupForm>();
  return useMutation({
    mutationFn: (formData: { code: string; email: string }) => postEmailVerify(formData),
    onSuccess: (_, formData) =>
      setValue('email', formData.email, { shouldValidate: true }),
  });
};

export default usePostEmailVerify;
