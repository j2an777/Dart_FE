import { colors } from '@/styles/colorPalette';
import { LayoutMap } from '@/styles/layout';
import styled from '@emotion/styled';

export const Container = styled.div`
  ${LayoutMap.absoluteCenter}
  display: flex;
  flex-direction: column;
  width: 550px;
  height: 700px;
  padding: 35px;
  border-radius: 10px;
  gap: 20px;
  background-color: ${colors.white};
  overflow: hidden;
`;

export const HeaderBox = styled.div`
  ${LayoutMap.displayFlex}
  justify-content: space-between;
  padding-bottom: 15px;
  width: 100%;
  border-bottom: 2px solid ${colors.gray100};
`;

export const ScrollBox = styled.div`
  ${LayoutMap.flexBoxScrollbar}
  ${LayoutMap.noneScrollbar}
`;
