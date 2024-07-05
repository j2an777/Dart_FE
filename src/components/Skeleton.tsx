import { colors } from '@/styles/colorPalette';
import styled from '@emotion/styled';

const Skeleton = styled.div<{ width?: number; height?: number; full?: boolean }>`
  ${({ width }) => `width: ${width}px`};
  ${({ height }) => `height: ${height}px`};
  ${({ full }) => full && `width: 100%; height: 100%;`};

  @-webkit-keyframes skeleton-gradient {
    0% {
      background-color: ${colors.gray300};
    }

    50% {
      background-color: ${colors.gray100};
    }

    100% {
      background-color: ${colors.gray300};
    }
  }

  @keyframes skeleton-gradient {
    0% {
      background-color: ${colors.gray300};
    }

    50% {
      background-color: ${colors.gray100};
    }

    100% {
      background-color: ${colors.gray300};
    }
  }
  -webkit-animation: skeleton-gradient 1.8s infinite ease-in-out;
  animation: skeleton-gradient 3.8s infinite ease-in-out;
`;

export default Skeleton;
