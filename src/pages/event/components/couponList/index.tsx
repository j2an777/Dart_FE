import { Skeleton } from '@/components';
import * as S from './styles';

const CouponList = ({
  orientation = 'horizontal',
}: {
  orientation?: 'horizontal' | 'vertical';
}) => {
  return (
    <S.Container orientation={orientation}>
      <Skeleton width={300} height={350} />
      <Skeleton width={300} height={350} />
      <Skeleton width={300} height={350} />
      <Skeleton width={300} height={350} />
    </S.Container>
  );
};

export default CouponList;
