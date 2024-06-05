import { colors } from '@/styles/colorPalette';
import { LayoutMap } from '@/styles/layout';
import styled from '@emotion/styled';

export const Container = styled.div`
  ${LayoutMap.displayFlex}
  position: relative;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  gap: 10px;
`;

export const TitleBox = styled.div`
  ${LayoutMap.displayFlex}
  width: 100%;
  gap: 10px;
`;

export const ButtonBox = styled.div`
  ${LayoutMap.displayFlex}
  border: 1px solid ${colors.black};
  width: 100%;
  padding: 2px;
  border-radius: 30px;
  > div {
    flex: 1;
  }
`;
