import { LayoutMap } from '@/styles/layout';
import styled from '@emotion/styled';

interface ContainerProps {
  isTotal?: boolean;
  isLast?: boolean;
}

export const Container = styled.div<ContainerProps>`
  ${LayoutMap.displayFlex}
  position: relative;
  justify-content: space-between;

  > p:nth-of-type(1) {
    flex: 1;
    padding-left: 10px;
  }
  padding-bottom: ${({ isLast, isTotal }) => (isLast ? 0 : isTotal ? '50px' : '20px')};
`;
