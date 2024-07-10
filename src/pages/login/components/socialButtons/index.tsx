import { Icon, Text } from '@/components';
import { useLocation } from 'react-router-dom';

import * as S from './styles';

const SocialButtons = () => {
  const location = useLocation();

  return (
    <S.Container>
      <Text typography="t4" color="white" bold="thin">
        다른 서비스로 로그인
      </Text>
      <S.Line />
      <S.sosialIconBox>
        <a href={`${import.meta.env.VITE_BASE_URL}/oauth2/authorization/kakao`}>
          <Icon
            value="kakao"
            onClick={() => sessionStorage.setItem('prev-path', location.pathname)}
          />
        </a>
        <a href={`${import.meta.env.VITE_BASE_URL}/oauth2/authorization/google`}>
          <Icon
            value="google"
            onClick={() => sessionStorage.setItem('prev-path', location.pathname)}
          />
        </a>
      </S.sosialIconBox>
    </S.Container>
  );
};

export default SocialButtons;
