import { colors } from '@/styles/colorPalette';
import { LayoutMap } from '@/styles/layout';
import styled from '@emotion/styled';

export const Container = styled.div`
  background-color: ${colors.black100};
  ${LayoutMap.displayFlex}
  color: ${colors.white};
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
`;
