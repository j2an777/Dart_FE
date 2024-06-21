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

export const ThumbnailBox = styled.div`
  position: relative;
  width: 240px;
  height: 240px;
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  border: 5px solid ${colors.black};
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;
