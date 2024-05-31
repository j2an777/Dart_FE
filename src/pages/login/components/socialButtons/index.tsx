import { Icon, Text } from '@/components';

import * as S from './styles';

const SocialButtons = () => {
  return (
    <S.Container>
      <Text typography="t4" color="white" bold="thin">
        다른 서비스로 로그인
      </Text>
      <S.Line />
      <S.sosialIconBox>
        <Icon value="kakao" />
        <Icon value="google" />
      </S.sosialIconBox>
    </S.Container>
  );
};

export default SocialButtons;
