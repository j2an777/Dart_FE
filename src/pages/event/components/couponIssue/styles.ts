import { mediaQueries } from '@/styles/breakpoints';
import { colors } from '@/styles/colorPalette';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${colors.black};
`;

export const PriorityBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 30px;

  container: priority-box / inline-size;
`;

export const CouponBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 30px;
  padding: 0px 40px;

  ${mediaQueries.mobile('padding: 0;')}
`;
