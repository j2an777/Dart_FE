import { LayoutMap } from '@/styles/layout';
import { typographyMap } from '@/styles/typography';
import styled from '@emotion/styled';

export const Container = styled.form`
  display: flex;
  justify-content: center;
  align-items: start;
  max-width: 1440px;
  width: 100%;
  margin: 40px auto;
  gap: 50px;
  ${LayoutMap.pageLayout}
  ${typographyMap.t5}
`;

export const LeftBox = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

export const RightBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 410px;
`;
