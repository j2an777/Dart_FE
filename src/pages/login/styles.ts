import { colors } from '@/styles/colorPalette';
import { LayoutMap } from '@/styles/layout';
import styled from '@emotion/styled';

export const Container = styled.div`
  background-color: ${colors.black100};
  ${LayoutMap.displayFlex}
  color: ${colors.white};
  justify-content: center;
  height: 100vh;
  overflow: hidden;
`;
