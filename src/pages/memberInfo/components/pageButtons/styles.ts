import { Text } from '@/components';
import { colors } from '@/styles/colorPalette';
import { LayoutMap } from '@/styles/layout';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  display: flex;
  width: 300px;
  align-self: center;
`;

export const Line = styled(Text)`
  ${LayoutMap.absoluteCenter}
  border: 1px solid ${colors.black};
  width: 100%;
`;

export const ButtonBox = styled.div`
  ${LayoutMap.displayFlex}
  justify-content: center;
  background-color: ${colors.white};
  gap: 10px;
  width: 140px;
  z-index: 2;
`;
