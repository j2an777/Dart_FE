import { LayoutMap } from '@/styles/layout';
import styled from '@emotion/styled';
import { Text } from '..';

export const Container = styled.div`
  ${LayoutMap.displayFlex}
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const TextBox = styled.div`
  ${LayoutMap.displayFlex}
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 100%;
`;

export const Description = styled(Text)`
  position: absolute;
  bottom: 10px;
`;
