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
  position: relative;
  height: 660px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div:first-of-type {
    display: flex; // 이 div를 Flex 컨테이너로 만듭니다.
    align-items: flex-start; // 이제 이 속성이 div의 자식들에게 적용됩니다.
    height: 100%; // 필요한 경우 너비를 조정할 수 있습니다.
  }
`;

export const MainPageQuerySize = {
  mainPage: 1180,
  itemList: 860,
  gridList: 450,
};
