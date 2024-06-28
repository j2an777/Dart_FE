import { colors } from '@/styles/colorPalette';
import { LayoutMap } from '@/styles/layout';
import styled from '@emotion/styled';

export const CouponIssueFallbackContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const PriorityBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 30px;
`;

export const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${colors.black};
`;

export const CouponBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 30px;
  padding: 0px 40px;
`;

export const ListBox = styled.div`
  ${LayoutMap.displayFlex}
  width: 100%;
  min-height: 400px;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 20px;
`;
