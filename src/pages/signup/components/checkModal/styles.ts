import { colors } from '@/styles/colorPalette';
import { LayoutMap } from '@/styles/layout';
import styled from '@emotion/styled';

export const Container = styled.div`
  ${LayoutMap.absoluteCenter}
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  min-height: 400px;
  height: fit-content;
  background-color: ${colors.black100};
  border: 2px solid ${colors.white};
  padding: 30px 40px;
`;
