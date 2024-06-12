import { LayoutMap } from '@/styles/layout';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const TextBox = styled.div`
  ${LayoutMap.displayFlex}
  gap: 10px;
  align-items: flex-end;
`;
