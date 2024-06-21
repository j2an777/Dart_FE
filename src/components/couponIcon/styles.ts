import styled from '@emotion/styled';
import Icon from '../icon';
import Text from '../Text';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

export const CouponSvg = styled.svg``;

export const Percentage = styled(Text)`
  position: absolute;
  top: 45px;
  span {
    font-size: 30px;
  }
`;

export const Title = styled(Text)`
  position: absolute;
  top: 110px;
`;

export const StyledIcon = styled(Icon)`
  position: absolute;
  top: 230px;
`;
