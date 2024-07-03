import { LayoutMap } from '@/styles/layout';
import styled from '@emotion/styled';

export const Container = styled.div`
  ${LayoutMap.pageLayout}
  padding-top: 80px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  height: fit-content;
  margin: auto;
  container: main-page / inline-size;
`;

export const ContentBox = styled.div`
  display: flex;
  position: relative;
  align-items: flex-start;
  width: 100%;
  justify-content: space-between;
`;

export const MainPageQuerySize = {
  mainPage: 1180,
  itemList: 860,
  gridList: 450,
};
