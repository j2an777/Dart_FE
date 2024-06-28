import { buttonTypeMap } from '@/styles/button';
import { colors } from '@/styles/colorPalette';
import { LayoutMap } from '@/styles/layout';
import styled from '@emotion/styled';

export const Container = styled.div`
  ${LayoutMap.displayFlex}
  position: relative;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  gap: 10px;
`;

export const TitleBox = styled.div`
  ${LayoutMap.displayFlex}
  width: 100%;
  gap: 10px;
`;

export const ButtonBox = styled.div`
  position: relative;
  ${LayoutMap.displayFlex}
  border: 1px solid ${colors.black};
  width: 100%;
  padding: 2px;
  border-radius: 30px;
  overflow: hidden;
  > div {
    flex: 1;
  }
`;

export const Button = styled.div<{ selected?: boolean }>`
  ${LayoutMap.displayFlex}
  justify-content: center;
  color: ${({ selected }) => (selected ? `${colors.white}` : `${colors.black}`)};
  font-size: 12px;
  flex: 1;
  height: 30px;
  cursor: pointer;
  z-index: var(--middle-zindex);
  animation: 0.5s forwards;
`;
export const SelectedButton = styled.div<{ width: number; position: number }>`
  position: absolute;
  ${LayoutMap.displayFlex}
  justify-content: center;
  ${buttonTypeMap['RoundBlack']}
  font-size: 12px;
  width: ${({ width }) => `calc((100% - 4px)/${width})`};
  height: 30px;
  z-index: var(--lower-zindex);
  transform: ${({ position }) => `translateX(${100 * position}%)`};
  transition: all 0.3s ease-in-out;
`;
