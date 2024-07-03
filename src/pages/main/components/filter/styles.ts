import { Icon } from '@/components';
import { containerQuery, mediaQueries } from '@/styles/breakpoints';
import { colors } from '@/styles/colorPalette';
import { LayoutMap } from '@/styles/layout';
import styled from '@emotion/styled';
import { MainPageQuerySize } from '../../styles';

export const Container = styled.div`
  width: fit-content;
  transition: all 1s ease;
  border-top: 1px solid ${colors.gray600};
`;

export const TitleBox = styled.div`
  ${LayoutMap.displayFlex}
  width: 100%;
  justify-content: space-between;
`;

export const PriceBox = styled.div`
  ${LayoutMap.displayFlex}
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 10px;
`;

export const PriceButtonBlock = styled.div`
  ${LayoutMap.displayFlex}
  width: 100%;
  gap: 15px;
`;

export const filterIcon = styled(Icon)`
  visibility: hidden;

  ${containerQuery({
    breakpoints: MainPageQuerySize.mainPage,
    containerName: 'main-page',
    styles: `
      visibility: visible;
      position: absolute;
      top: -40px;
    `,
  })}
`;

export const FilterBox = styled.div<{ isExpand: boolean }>`
  ${LayoutMap.displayFlex}
  gap: 30px;
  flex-direction: column;
  padding: 35px 20px 0 20px;

  min-width: 320px;
  position: relative;
  transition: all 0.25s ease;

  ${({ isExpand }) =>
    containerQuery({
      breakpoints: MainPageQuerySize.mainPage,
      containerName: 'main-page',
      styles: `      
    position: fixed;
    visibility: ${isExpand ? 'visible' : 'hidden'};
    transform: ${isExpand ? 'translateX(0)' : 'translateX(-120%)'};
    background-color: ${colors.white};
    z-index: var(--high-zindex);
    height: 100%;
    top: 0;
  `,
    })}
`;
