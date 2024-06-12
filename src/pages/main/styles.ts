import { LayoutMap } from '@/styles/layout';
import styled from '@emotion/styled';

export const Container = styled.div`
  ${LayoutMap.displayFlex}
  align-items: flex-start;
  padding: 80px;
  gap: 40px; // 수정예정
  max-width: 1440px;
  margin: auto;
  justify-content: space-between;
  position: relative;
`;
