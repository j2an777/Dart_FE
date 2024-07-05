import { colors } from '@/styles/colorPalette';
import { LayoutMap } from '@/styles/layout';
import styled from '@emotion/styled';

export const Container = styled.div`
  ${LayoutMap.displayFlex}
  position: relative;
  width: 100%;
  margin-top: 50px;
  justify-content: space-between;
  gap: 20px;
`;

export const Line = styled.div`
  flex: 1;
  height: 2px;
  background-color: ${colors.white};
`;

export const sosialIconBox = styled.div`
  display: flex;
  gap: 20px;
`;
