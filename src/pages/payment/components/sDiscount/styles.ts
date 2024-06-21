import { Text } from '@/components';
import { buttonTypeMap } from '@/styles/button';
import { colors } from '@/styles/colorPalette';
import { typographyMap } from '@/styles/typography';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;

export const Box = styled.div`
  display: flex;
  padding: 20px 40px;
  gap: 20px;
`;

export const Title = styled(Text)`
  padding-bottom: 20px;
  border-bottom: 2px solid ${colors.black};
`;

export const CouponBlock = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  width: 570px;
  color: ${colors.gray500};
  background-color: ${colors.gray100};
  ${typographyMap.t6}
`;

export const Button = styled.button`
  ${buttonTypeMap.rectangleBlack}
  padding: 20px 40px;
`;
