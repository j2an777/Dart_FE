import { Icon, Text } from '@/components';
import { containerQuery } from '@/styles/breakpoints';
import { colors } from '@/styles/colorPalette';
import { LayoutMap } from '@/styles/layout';
import styled from '@emotion/styled';
import { ReivewPageQuerySize } from '../../styles';

export const Container = styled.div`
  position: relative;
  ${LayoutMap.displayFlex}
  flex-direction: column;
  width: 100%;
  border-left: 2px solid ${colors.black};
  border-right: 2px solid ${colors.black};

  container: gallery-info / inline-size;
`;

export const CancelIcon = styled(Icon)`
  align-self: flex-end;
  margin: 10px 20px 10px 20px;
`;

export const InfoBox = styled.div`
  ${LayoutMap.displayFlex}
  height: 350px;
  width: 100%;

  ${containerQuery({
    breakpoints: ReivewPageQuerySize.galleryInfoTablet,
    containerName: 'gallery-info',
    styles: `
      flex-direction: column;
    `,
  })}
`;

export const Line = styled.div`
  width: 100vw;
  min-width: 1440px;
  border-top: 2px solid ${colors.black};
`;

export const Title = styled(Text)`
  ${LayoutMap.displayFlex}
  width: 200px;
  justify-content: center;
  align-self: flex-start;
  padding: 10px 0;
  border-bottom: 2px solid ${colors.black};

  ${containerQuery({
    breakpoints: ReivewPageQuerySize.galleryInfoTablet,
    containerName: 'gallery-info',
    styles: `
      flex-direction: column;
      align-self: center;
      width: 100%;
    `,
  })}
`;
