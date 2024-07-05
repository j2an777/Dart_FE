import { colors } from '@/styles/colorPalette';
import { LayoutMap } from '@/styles/layout';
import styled from '@emotion/styled';

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

export const Thumbnail = styled.div`
  box-sizing: border-box;
  border: 5px solid ${colors.black};
  transition: filter 0.5s ease;
  width: 100%;
  max-width: 240px;
  height: auto;
  aspect-ratio: 1 / 1;
`;
