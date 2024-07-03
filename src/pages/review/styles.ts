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

export const ReivewPageQuerySize = {
  galleryInfo: 960,
  galleryInfoTablet: 770,
  galleryInfoMobile: 550,
};
