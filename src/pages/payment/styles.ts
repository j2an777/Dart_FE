import { LayoutMap } from '@/styles/layout';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  max-width: 1440px;
  width: 100%;
  margin: 40px auto;
  gap: 55px;
  ${LayoutMap.pageLayout}
`;

export const LeftBox = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
`;

export const RightBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
