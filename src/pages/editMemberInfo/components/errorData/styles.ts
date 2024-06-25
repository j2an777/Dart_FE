import { Text } from '@/components';
import { LayoutMap } from '@/styles/layout';
import styled from '@emotion/styled';

export const Container = styled.div`
  ${LayoutMap.displayFlex}
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 400px;
  gap : 50px;
`;

export const TextBox = styled.div`
  ${LayoutMap.displayFlex}
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 100%;
`;

export const Description = styled(Text)`
  text-align: center;
`;
