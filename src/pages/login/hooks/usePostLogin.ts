import { postLogin } from '@/apis/member';
import useCustomNavigate from '@/hooks/useCustomNavigate';
import { memberStore } from '@/stores/member';
import { LoginFormData } from '@/types/member';
import { useMutation } from '@tanstack/react-query';

const usePostLogin = () => {
  const {setMember, setToken} = memberStore();
  const navigate = useCustomNavigate();
  return useMutation({
    mutationFn: (formData: LoginFormData) => postLogin(formData),
    onSuccess: (data) => {
      const { accessToken, ...auth} = data;
      setMember(auth);
      setToken(accessToken)
      navigate(-1);
    },
  });
};
// error의 des
export default usePostLogin;
