import { colors } from '@/styles/colorPalette';
import { LayoutMap } from '@/styles/layout';
import styled from '@emotion/styled';

export const Container = styled.div`
  ${LayoutMap.displayFlex}
  flex-direction: column;
  justify-content: space-between;
  ${LayoutMap.absoluteCenter}
  padding: 35px;
  width: fit-content;
  max-width: 600px;
  min-width: 400px;
  background-color: ${colors.white};
  border-radius: 10px;
  min-height: 300px;
`;

export const HeaderBox = styled.div`
  ${LayoutMap.displayFlex}
  justify-content: space-between;
  padding-bottom: 15px;
  width: 100%;
  border-bottom: 2px solid ${colors.gray100};
`;
