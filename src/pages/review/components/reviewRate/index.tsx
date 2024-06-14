import { StarRate, Text } from '@/components';

import * as S from './styles';

interface ReviewRateProps {
  rate: number;
  title: string;
}

const ReviewRate = ({ title, rate }: ReviewRateProps) => {
  return (
    <S.Container>
      <S.TextBox>
        <Text typography="t6" color="gray300" bold="regular">
          {title}
        </Text>
        <Text typography="t4">{rate}</Text>
        <Text typography="t6" color="gray300" bold="regular">
          / 5
        </Text>
      </S.TextBox>
      <StarRate rate={rate} />
    </S.Container>
  );
};

export default ReviewRate;
