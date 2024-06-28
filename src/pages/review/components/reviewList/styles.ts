import { colors } from '@/styles/colorPalette';
import { LayoutMap } from '@/styles/layout';
import styled from '@emotion/styled';

export const Container = styled.div`
  ${LayoutMap.displayFlex}
  flex-direction: column;
  gap: 50px;
  align-items: flex-end;
  width: 100%;
  min-height: 500px;
  padding: 50px 80px;
  border-left: 2px solid ${colors.black};
  border-right: 2px solid ${colors.black};
  flex: 1;
`;
