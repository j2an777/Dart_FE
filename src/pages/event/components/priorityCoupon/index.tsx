import { Icon, Text } from '@/components';
import * as S from './styles';

const PriorityCoupon = () => {
  return (
    <S.Container>
      <Text typography="t0" bold="bold">
        30%
      </Text>
      <S.DescBox>
        <Text typography="t6">모든 전시 20% 할인 쿠폰</Text>
        <S.TimerBlock>
          <Icon value="watch" size={15} color="red" />
          <Text typography="t7" color="red" bold="bold">
            23시간 : 05분 : 42초
          </Text>
        </S.TimerBlock>
        <S.IssueButton size="smMd" bold="bold">
          발급 받기{' '}
        </S.IssueButton>
        <Text typography="t6" color="gray400">
          30개 남음
        </Text>
      </S.DescBox>
    </S.Container>
  );
};

export default PriorityCoupon;
