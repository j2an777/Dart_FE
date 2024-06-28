import useCustomNavigate from '@/hooks/useCustomNavigate';
import * as S from './styles';

const LoginModal = () => {
  const navigate = useCustomNavigate();
  return (
    <S.Container>
      <button onClick={() => navigate('/login')}>클릭해봐</button>
    </S.Container>
  );
};

export default LoginModal;
