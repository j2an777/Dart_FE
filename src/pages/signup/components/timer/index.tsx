import useTimer from '@/hooks/useTimer';

import * as S from './styles';
import { Text } from '@/components';

const Timer = () => {
  const { minutes, seconds } = useTimer({});
  return (
    <S.Container>
      <Text typography="t6" color="gray400">
        {minutes} : {seconds}
      </Text>
    </S.Container>
  );
};

export default Timer;
