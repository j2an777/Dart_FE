import { memberStore } from '@/stores/member';
import { alertStore } from '@/stores/modal';
import { NavigateOptions, To, useNavigate } from 'react-router-dom';

interface CustomNavigateOption extends NavigateOptions {
  hasAuth?: boolean;
}

const useCustomNavigate = () => {
  const baseNavigate = useNavigate();
  const isLogin = !!memberStore((state) => state.accessToken);
  const open = alertStore((state) => state.open);

  function customNavigate(to: number): void;
  function customNavigate(to: To, option?: CustomNavigateOption): void;
  function customNavigate(to: To | number, option?: CustomNavigateOption) {
    if (typeof to === 'number') {
      return baseNavigate(to);
    }
    if (option?.hasAuth && !isLogin) {
      open({
        title: '로그인 권장 서비스',
        description: '로그인 페이지로 이동하시겠습니까?',
        onClickButton: () => baseNavigate('/login'),
      });
    } else {
      baseNavigate(to, option);
    }
  }
  return customNavigate;
};

export default useCustomNavigate;
