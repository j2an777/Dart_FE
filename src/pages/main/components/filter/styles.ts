import { colors } from '@/styles/colorPalette';
import { LayoutMap } from '@/styles/layout';
import styled from '@emotion/styled';

export const Container = styled.div`
  ${LayoutMap.displayFlex}
  gap: 30px;
  flex-direction: column;
  padding: 35px 20px 0 20px;
  border-top: 1px solid ${colors.gray600};
  min-width: 320px;
  height: 100%;
  position: relative;

  > :last-of-type {
    position: absolute;
    bottom: 0;
  }
`;

export const TitleBox = styled.div`
  ${LayoutMap.displayFlex}
  width: 100%;
  justify-content: space-between;
`;

export const PriceBox = styled.div`
  ${LayoutMap.displayFlex}
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 10px;
`;

export const PriceButtonBlock = styled.div`
  ${LayoutMap.displayFlex}
  width: 100%;
  gap: 15px;
`;
