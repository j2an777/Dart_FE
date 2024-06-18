import { colors } from '@/styles/colorPalette';
import { LayoutMap } from '@/styles/layout';
import styled from '@emotion/styled';

export const Container = styled.div`
  ${LayoutMap.displayFlex}
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  width: fit-content;
  height: fit-content;
  cursor: pointer;
  padding: 10px;
  border-radius: 8px;
  :hover {
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.35);
  }
`;

export const Thumbnail = styled.img`
  border: 5px solid ${colors.black};
  width: 240px;
  height: 240px;
  transition: filter 0.5s ease;
  :hover {
    filter: grayscale(100%);
  }
`;
