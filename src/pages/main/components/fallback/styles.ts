import { containerQuery, mediaQueries } from '@/styles/breakpoints';
import { LayoutMap } from '@/styles/layout';
import styled from '@emotion/styled';
import { MainPageQuerySize } from '../../styles';
import Skeleton from '@/components/Skeleton';

export const GalleryListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  grid-row-gap: 30px;
  place-items: center;

  container: grid-list / inline-size;

  ${mediaQueries.mobile(`
  grid-template-columns: repeat(2, 1fr);
`)}

  @container (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr); /* 컨테이너 너비가 500px 이상일 때 */
  }
`;

export const SkeletonItemContainer = styled.div`
  ${LayoutMap.displayFlex}
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  width: fit-content;
  height: fit-content;
`;
