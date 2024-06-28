import { LayoutMap } from '@/styles/layout';
import styled from '@emotion/styled';

export const GalleryListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  min-width: 820px;
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
