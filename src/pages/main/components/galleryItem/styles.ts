import { containerQuery } from '@/styles/breakpoints';
import { colors } from '@/styles/colorPalette';
import { LayoutMap } from '@/styles/layout';
import styled from '@emotion/styled';
import { MainPageQuerySize } from '../../styles';

export const Container = styled.div`
  position: relative;
  ${LayoutMap.displayFlex}
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  width: fit-content;
  height: fit-content;
  cursor: pointer;
  padding: 10px;
  border-radius: 8px;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  }
`;

export const Thumbnail = styled.img`
  box-sizing: border-box;
  border: 5px solid ${colors.black};
  width: 240px;
  height: 240px;
  transition: filter 0.5s ease;
  :hover {
    filter: grayscale(100%);
  }
  ${containerQuery({
    breakpoints: MainPageQuerySize.itemList,
    containerName: 'item-list',
    styles: `
    width: 120px;
    height: 120px;
    `,
  })}
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
`;
