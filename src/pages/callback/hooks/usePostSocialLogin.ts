import { postSocialLogin } from '@/apis/member';
import useCustomNavigate from '@/hooks/useCustomNavigate';
import { memberStore } from '@/stores/member';
import { LoginResponse } from '@/types/member';
import { useMutation } from '@tanstack/react-query';

const usePostSocialLogin = (sessionId: string | null) => {
  const setMember = memberStore((state) => state.setMember);
  const navigate = useCustomNavigate();
  const prevPath = sessionStorage.getItem('prev-path');
  return useMutation({
    mutationKey: ['socialLogin', sessionId],
    mutationFn: () => postSocialLogin({ sessionId: sessionId as string }),
    onSuccess: (data: LoginResponse) => {
      setMember(data);
      navigate(prevPath as string);
    },
  });
};

export default usePostSocialLogin;
