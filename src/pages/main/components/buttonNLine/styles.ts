import { Text } from '@/components';
import { containerQuery, mediaQueries } from '@/styles/breakpoints';
import { colors } from '@/styles/colorPalette';
import { LayoutMap } from '@/styles/layout';
import styled from '@emotion/styled';
import { MainPageQuerySize } from '../../styles';

export const Container = styled.div`
  ${LayoutMap.displayFlex}
  align-items: flex-end;
  justify-content: space-between;

  div:first-of-type {
    padding-left: 80px;
  }

  ${containerQuery({
    breakpoints: MainPageQuerySize.disableFilter,
    containerName: 'main-page',
    styles: `
    div:first-of-type {
      padding-top: 40px;
      > img {
        width: 80px;
        height: 80px;
      }
      padding-left: 0;
    }
    `,
  })}
`;

export const Line = styled.div`
  display: flex;
  width: 320px;
  border-bottom: 1px solid ${colors.black};
  justify-content: flex-end;

  ${mediaQueries.mobile(`
    display: none;
  `)}
`;

export const BottomText = styled(Text)`
  position: absolute;
  transform: translateY(-10px);
  background-color: white;
  padding-left: 40px;
`;
