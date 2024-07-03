import { Icon, Text } from '@/components';
import * as S from './styles';
import { Timer } from '@/pages/signup/components';
import getRemainingTime from '@/utils/getRemainingTime';
import { PriorityCoupon as PriorityCouponProps } from '@/types/coupon';
import usePostPriorityCoupon from '../../hooks/usePostPriorityCoupon';

const PriorityCoupon = ({
  couponType,
  endDate,
  hasCoupon,
  isFinished,
  priorityCouponId,
  startDate,
  stock,
  title,
}: PriorityCouponProps) => {
  const { mutate: postCoupon } = usePostPriorityCoupon(priorityCouponId);
  const time = getRemainingTime({
    startDate: new Date(`${startDate}T00:00:00Z`),
    endDate: new Date(`${endDate}T00:00:00Z`),
  });
  return (
    <S.Container>
      <Text typography="t0" bold="bold">
        {couponType}%
      </Text>
      <S.DescBox>
        <Text typography="t6">{title}</Text>
        <S.TimerBlock>
          <Icon value="watch" size={15} color="red" />
          <Timer type="coupon" time={time} />
        </S.TimerBlock>
        <S.IssueButton
          size="smMd"
          bold="bold"
          disabled={hasCoupon || isFinished}
          onClick={() => postCoupon()}
        >
          {isFinished ? '마감된 쿠폰' : '발급 받기'}
        </S.IssueButton>
        <Text typography="t6" color="gray400">
          선착순 {stock}명
        </Text>
      </S.DescBox>
    </S.Container>
  );
};

export default PriorityCoupon;
