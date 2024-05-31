import { colors } from '@/styles/colorPalette';
import { LayoutMap } from '@/styles/layout';
import styled from '@emotion/styled';

export const Container = styled.div`
  height: 80px;
  width: 100%;
  background-color: ${colors.gray50};
  ${LayoutMap.displayFlex}
  ${LayoutMap.pageLayout}
  justify-content: center;
  position : fixed;
  top : 0;
  left : 0;
  z-index : 5;
`;

export const MaxWidthWrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  ${LayoutMap.displayFlex}
  justify-content: space-between;
`;

export const MainLogo = styled.img`
  width: fit-content;
  height: fit-content;
  cursor: pointer;
`;

export const ButtonBox = styled.div`
  ${LayoutMap.displayFlex}
  gap: 60px;
`;
