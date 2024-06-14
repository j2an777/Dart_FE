import { LayoutMap } from '@/styles/layout';
import styled from '@emotion/styled';

export const Container = styled.div`
  ${LayoutMap.displayFlex}
  width: 1440px;
  height: calc(100vh - 80px);
  flex-direction: column;
  padding: 0 80px;
  margin: auto;

  > div:last-of-type {
    position: absolute;
    bottom: 20px;
  }
`;
