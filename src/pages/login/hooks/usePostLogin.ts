import { postLogin } from '@/apis/member';
import useCustomNavigate from '@/hooks/useCustomNavigate';
import { memberStore } from '@/stores/member';
import { LoginFormData } from '@/types/member';
import { useMutation } from '@tanstack/react-query';

const usePostLogin = () => {
  const setMember = memberStore((state) => state.setMember);
  const navigate = useCustomNavigate();
  return useMutation({
    mutationFn: (formData: LoginFormData) => postLogin(formData),
    onSuccess: (data) => {
      setMember(data);
      navigate(-1);
    },
  });
};
// error의 des
export default usePostLogin;
