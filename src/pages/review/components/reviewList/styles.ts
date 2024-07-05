import { colors } from '@/styles/colorPalette';
import { LayoutMap } from '@/styles/layout';
import styled from '@emotion/styled';

export const Container = styled.div`
  ${LayoutMap.displayFlex}
  flex-direction: column;
  border-left: 2px solid ${colors.black};
  border-right: 2px solid ${colors.black};
  width: 100%;
  height: 100%;
  padding-top: 50px;
`;

export const ListBox = styled.div`
  ${LayoutMap.displayFlex}
  flex-direction: column;
  width: 100%;
  gap: 50px;
  flex: 1;
  ${LayoutMap.pageLayout};
`;
