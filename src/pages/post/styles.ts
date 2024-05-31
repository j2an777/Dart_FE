import { LayoutMap } from '@/styles/layout';
import styled from '@emotion/styled';

export const Container = styled.div`
  ${LayoutMap.pageLayout}
  display: flex;
  justify-content: center;
  align-items: start;
`;

export const Block = styled.div`
  max-width: 1440px;
  outline: 2px solid black;
`;

export const Quit = styled.div`
  display: flex;
  justify-content: end;
  padding: 5px 10px;
  border-bottom: 2px solid black;
`;
