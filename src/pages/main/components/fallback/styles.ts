import { colors } from '@/styles/colorPalette';
import { LayoutMap } from '@/styles/layout';
import styled from '@emotion/styled';

export const GalleryListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  flex: 1;
  min-width: 700px;
  grid-column-gap: 20px;
  grid-row-gap: 30px;
  place-items: flex-end;
`;

export const SkeletonItemContainer = styled.div`
  ${LayoutMap.displayFlex}
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  width: fit-content;
  height: fit-content;
`;

export const Skeleton = styled.div<{ width: number; height: number }>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};

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
