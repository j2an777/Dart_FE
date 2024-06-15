import { postSignup } from '@/apis/member';
import useCustomNavigate from '@/hooks/useCustomNavigate';
import { alertStore } from '@/stores/modal';
import { AxoisErrorResponse } from '@/types/error';
import { SignupFormData } from '@/types/member';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

const usePostSingup = ({ reset }: { reset: () => void }) => {
  const open = alertStore((state) => state.open);
  const navigate = useCustomNavigate();
  return useMutation({
    mutationFn: (formData: SignupFormData) => postSignup(formData),
    onSuccess: () => {
      reset();
      open({
        title: '회원가입 완료',
        description: '로그인 페이지로 이동하시겠습니까?',
        onClickButton: () => {
          navigate('/login');
        },
      });
    },
    onError: (error: AxiosError<AxoisErrorResponse>) => {
      const description = error.response?.data?.message;
      open({
        title: '회원가입 실패',
        description,
      });
    },
  });
};
// error의 des
export default usePostSingup;
