import { Icon } from '@/components';
import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
`;

export const PostArrow = styled(Icon)`
  position: absolute;
  animation: none;
  z-index: 1;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  &:hover {
    cursor: pointer;
  }
`;
