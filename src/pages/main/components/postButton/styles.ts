import { Icon } from '@/components';
import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
`;

export const PostArrow = styled(Icon)`
  position: absolute;
  animation: none;
  z-index: 0;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  &:hover {
    cursor: pointer;
  }
`;

export const BackgroundImage = styled.img`
  z-index: 1;
  width: fit-content;
  height: fit-content;
  cursor: pointer;
  @keyframes rotateInfinite {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  animation: rotateInfinite 3s linear infinite paused;

  &:hover {
    animation-play-state: running;
  }
`;
