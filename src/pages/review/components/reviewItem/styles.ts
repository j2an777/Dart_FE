import { Text } from '@/components';
import { containerQuery } from '@/styles/breakpoints';
import { LayoutMap } from '@/styles/layout';
import styled from '@emotion/styled';
import { reivewPageQuerySize } from '../../styles';

export const Container = styled.div`
  ${LayoutMap.displayFlex}
  width: 100%;

  container: reivew-item / inline-size;
`;

export const ContentText = styled(Text)`
  display: flex;
  padding: 0 20px;
  flex: 1;
  justify-content: center;
  word-wrap: break-word;
  overflow-wrap: break-word;
  word-break: break-all;

  ${containerQuery({
    containerName: 'reivew-item',
    breakpoints: reivewPageQuerySize.reivewItemTablet,
    styles: `
    padding: 0;
  `,
  })}
`;

export const StarRateBox = styled.div`
  ${containerQuery({
    containerName: 'reivew-item',
    breakpoints: reivewPageQuerySize.reivewItem,
    styles: `
    display: none;
    `,
  })}
`;

export const DateText = styled(Text)`
  ${containerQuery({
    containerName: 'reivew-item',
    breakpoints: reivewPageQuerySize.reivewItemTablet,
    styles: `
  display: none;
  `,
  })}
`;
