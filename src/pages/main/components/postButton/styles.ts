import { Icon } from '@/components';
import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
  transition: all 0.3s ease;
  cursor: pointer;

  :active {
    transform: scale(0.9);
  }
`;

export const PostArrow = styled(Icon)`
  position: absolute;
  animation: none;
  z-index: 0;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const BackgroundImage = styled.img`
  z-index: var(--lower-zindex);
  width: fit-content;
  height: fit-content;
  pointer-events: none;
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
