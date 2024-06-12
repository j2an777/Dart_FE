import { Text } from '@/components';
import { colors } from '@/styles/colorPalette';
import { LayoutMap } from '@/styles/layout';
import styled from '@emotion/styled';

export const Container = styled.div`
  ${LayoutMap.displayFlex}
  flex-direction: column;
  justify-content: center;
  position: relative;
  display: flex;
  height: 280px;
  align-self: center;
`;

export const Line = styled(Text)`
  position: absolute;
  ${LayoutMap.absoluteCenter}
  border: 1px solid ${colors.black};
  height: 100%;
  z-index: 1;
`;

export const ButtonBox = styled.div`
  ${LayoutMap.displayFlex}
  flex-direction: column;
  justify-content: center;
  background-color: ${colors.white};
  gap: 10px;
  height: 140px;
  z-index: 2;
`;
