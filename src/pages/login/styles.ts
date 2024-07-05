import { colors } from '@/styles/colorPalette';
import { LayoutMap } from '@/styles/layout';
import styled from '@emotion/styled';

export const Container = styled.div`
  ${LayoutMap.displayFlex}
  ${LayoutMap.pageLayout}
  color: ${colors.white};
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  background-color: ${colors.black100};
`;
