import { LayoutMap } from '@/styles/layout';
import styled from '@emotion/styled';

export const Container = styled.div`
  ${LayoutMap.displayFlex}
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 10px;
`;

export const ButtonBox = styled.div`
  ${LayoutMap.displayFlex}
  width: 100%;
  gap: 15px;
`;
