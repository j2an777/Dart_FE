import { containerQuery } from '@/styles/breakpoints';
import { colors } from '@/styles/colorPalette';
import { LayoutMap } from '@/styles/layout';
import styled from '@emotion/styled';
import { reivewPageQuerySize } from '../../styles';
import { ReviewRate } from '..';

export const Container = styled.div`
  ${LayoutMap.displayFlex}
  max-width: 700px;
  width: 100%;
  height: 100%;
  border-left: 2px solid ${colors.black};
  border-right: 2px solid ${colors.black};

  justify-content: space-around;

  ${containerQuery({
    breakpoints: reivewPageQuerySize.galleryInfo,
    containerName: 'gallery-info',
    styles: `
      border-right: none;
    `,
  })}
  ${containerQuery({
    breakpoints: reivewPageQuerySize.galleryInfoTablet,
    containerName: 'gallery-info',
    styles: `
      border-left: none;
      width: 100%
      padding: 0 20px;
    `,
  })}
  ${containerQuery({
    breakpoints: reivewPageQuerySize.gridCange,
    containerName: 'gallery-info',
    styles: `
      flex-direction: column;
      padding: 10px;
      gap: 10px;
    `,
  })}
`;

export const InfoBlock = styled.div`
  display: flex;
  width: fit-content;
  flex-direction: column;
  gap: 10px;
`;

export const GalleryInfoBox = styled.div`
  display: flex;
  flex-direction: column;

  gap: 50px;

  ${containerQuery({
    breakpoints: reivewPageQuerySize.gridCange,
    containerName: 'gallery-info',
    styles: `
      flex-direction: row;
      width: 100%;  
      gap: 0;
      justify-content: space-around;
    `,
  })}

  ${containerQuery({
    breakpoints: reivewPageQuerySize.hideRate,
    containerName: 'gallery-info',
    styles: `
      > div:last-of-type {
        display: none;
      }
    `,
  })}
`;

export const Thumbnail = styled.img`
  width: 100%;
  max-width: 250px;
  height: auto;
  aspect-ratio: 1 / 1;
`;
