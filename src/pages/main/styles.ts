import { containerQuery } from '@/styles/breakpoints';
import { LayoutMap } from '@/styles/layout';
import styled from '@emotion/styled';

export const MainPageQuerySize = {
  disableFilter: 1140,
  smallThumbnail: 795,
  twoRow: 475,
  thumbnail: 239,
};

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
  gap: 30px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  > div:first-of-type {
    display: flex;
    align-items: flex-start;
    height: 100%;
  }

  container: main-list / inline-size;

  ${containerQuery({
    breakpoints: MainPageQuerySize.twoRow,
    containerName: 'main-page',
    styles: `
    gap: 0;
    `,
  })}
`;
