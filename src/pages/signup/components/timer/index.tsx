import useTimer from '@/hooks/useTimer';
import { Text } from '@/components';

import * as S from './styles';

interface TimerProps {
  type?: 'coupon';
  time?: number;
}

const Timer = ({ type, time = 300 }: TimerProps) => {
  const { hours, minutes, seconds } = useTimer({ time });
  switch (type) {
    case 'coupon':
      return (
        <Text typography="t7" color="red" bold="bold">
          {hours}시간 : {minutes}분 : {seconds}초
        </Text>
      );
    default:
      return (
        <S.Container>
          <Text typography="t6" color="gray400">
            {minutes} : {seconds}
          </Text>
        </S.Container>
      );
  }
};

export default Timer;
