import { postLogin } from '@/apis/member';
import useCustomNavigate from '@/hooks/useCustomNavigate';
import { memberStore } from '@/stores/member';
import { alertStore } from '@/stores/modal';
import { AxoisErrorResponse } from '@/types/error';
import { LoginFormData } from '@/types/member';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

const usePostLogin = () => {
  const setMember = memberStore((state) => state.setMember);
  const open = alertStore((state) => state.open);
  const navigate = useCustomNavigate();
  return useMutation({
    mutationFn: (formData: LoginFormData) => postLogin(formData),
    onSuccess: (data) => {
      setMember(data);
      navigate(-1);
    },
    onError: (error: AxiosError<AxoisErrorResponse>) => {
      const description = error.response?.data?.message;
      open({
        title: '로그인 에러',
        description,
      });
    },
  });
};
// error의 des
export default usePostLogin;
