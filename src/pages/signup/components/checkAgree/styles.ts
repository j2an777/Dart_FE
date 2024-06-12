import { LayoutMap } from '@/styles/layout';
import styled from '@emotion/styled';

interface ContainerProps {
  isTotal?: boolean;
  isLast?: boolean;
}

export const Container = styled.div<ContainerProps>`
  ${LayoutMap.displayFlex}
  position: relative;
  gap: 20px;
  > button {
    position: absolute;
    right: 0;
  }
  padding-bottom: ${({ isLast, isTotal }) => (isLast ? 0 : isTotal ? '50px' : '20px')};
`;
