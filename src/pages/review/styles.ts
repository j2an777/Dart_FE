import { LayoutMap } from '@/styles/layout';
import styled from '@emotion/styled';

export const Container = styled.div`
  ${LayoutMap.displayFlex}
  ${LayoutMap.pageLayout}
  max-width: 1440px;
  height: calc(100vh - 80px);
  flex-direction: column;
  margin: auto;
`;

export const reivewPageQuerySize = {
  galleryInfo: 905,
  galleryInfoTablet: 770,
  galleryInfoMobile: 550,
  reivewItem: 865,
  reivewItemTablet: 410,
  gridCange: 450,
  hideRate: 370,
};
