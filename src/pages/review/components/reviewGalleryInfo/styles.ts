import { containerQuery } from '@/styles/breakpoints';
import { colors } from '@/styles/colorPalette';
import { LayoutMap } from '@/styles/layout';
import styled from '@emotion/styled';
import { ReivewPageQuerySize } from '../../styles';

export const Container = styled.div`
  ${LayoutMap.displayFlex}
  max-width: 700px;
  flex: 1;
  height: 100%;
  border-left: 2px solid ${colors.black};
  border-right: 2px solid ${colors.black};
  justify-content: space-around;

  ${containerQuery({
    breakpoints: ReivewPageQuerySize.galleryInfo,
    containerName: 'gallery-info',
    styles: `
      border-right: none;
    `,
  })}
  ${containerQuery({
    breakpoints: ReivewPageQuerySize.galleryInfoTablet,
    containerName: 'gallery-info',
    styles: `
      border-left: none;
      width: 100%
    `,
  })}
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const GalleryInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const Thumbnail = styled.img`
  width: 250px;
  height: 250px;

  ${containerQuery({
    breakpoints: ReivewPageQuerySize.galleryInfoMobile,
    containerName: 'gallery-info',
    styles: `
    width: 150px;
    height: 150px;
    `,
  })}
`;
