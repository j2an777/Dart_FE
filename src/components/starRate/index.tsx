import getStarArray from '@/utils/getStarArray';
import { Icon } from '..';

import * as S from './styles';

interface StarRateProps {
  rate: number;
  disabled?: boolean;
}

const StarRate = ({ rate, disabled = false }: StarRateProps) => {
  const starArray = getStarArray(rate);
  return (
    <S.Container>
      {starArray.map((star, index) => {
        return <Icon key={index} size={30} $active={disabled} {...star} />;
      })}
    </S.Container>
  );
};

export default StarRate;
