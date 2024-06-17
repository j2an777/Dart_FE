import { colors } from '@/styles/colorPalette';
import { LayoutMap } from '@/styles/layout';
import styled from '@emotion/styled';

export const Container = styled.div`
  ${LayoutMap.absoluteCenter}
  min-width: 400px;
  width: fit-content;
  min-height: 200px;
  height: fit-content;
  background-color: ${colors.black100};
  border: 2px solid ${colors.white};
  padding: 30px 40px;
`;
