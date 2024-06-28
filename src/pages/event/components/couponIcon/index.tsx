import { Colors } from '@/styles/colorPalette';
import { Icon } from '@/components';

import * as S from './styles';

interface CouponIconProps {
  title: string;
  couponType: number;
  fill?: Colors;
  hasCoupon?: boolean;
  couponId?: number;
  isPriority?: boolean;
  icon?: 'download' | 'circleCheck';
  onClick?: () => void;
}

const CouponIcon = ({
  title,
  fill = 'black',
  couponType,
  hasCoupon,
  couponId,
  isPriority,
  icon = 'circleCheck',
  onClick = () => {},
}: CouponIconProps) => {
  return (
    <S.Container>
      <Icon value="couponBackground" color={fill} $active={false} />
      <S.Percentage typography="t0" bold="bold" color="white">
        {couponType}
        <span>%</span>
      </S.Percentage>
      <S.Title typography="t1" bold="bold" color="white">
        {title}
      </S.Title>
      <S.StyledIcon value={icon} onClick={onClick} $active={!hasCoupon} />
    </S.Container>
  );
};

export default CouponIcon;
