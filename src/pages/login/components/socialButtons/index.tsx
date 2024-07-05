import { Icon, Text } from '@/components';

import * as S from './styles';
import { alertStore } from '@/stores/modal';

const SocialButtons = () => {
  const open = alertStore((state) => state.open);
  return (
    <S.Container>
      <Text typography="t4" color="white" bold="thin">
        다른 서비스로 로그인
      </Text>
      <S.Line />
      <S.sosialIconBox>
        <Icon
          value="kakao"
          onClick={() =>
            open({
              title: '미구현 서비스',
              buttonLabel: '확인',
              description: '구현 예정 서비스입니다',
            })
          }
        />
        <Icon
          value="google"
          onClick={() =>
            open({
              title: '미구현 서비스',
              buttonLabel: '확인',
              description: '구현 예정 서비스입니다',
            })
          }
        />
      </S.sosialIconBox>
    </S.Container>
  );
};

export default SocialButtons;
