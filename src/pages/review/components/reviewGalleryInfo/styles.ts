import { colors } from '@/styles/colorPalette';
import { LayoutMap } from '@/styles/layout';
import styled from '@emotion/styled';

export const Container = styled.div`
  ${LayoutMap.displayFlex}
  max-width: 760px;
  flex: 1;
  height: 100%;
  border-left: 2px solid ${colors.black};
  border-right: 2px solid ${colors.black};
  gap: 80px;
  justify-content: center;
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 200px;
`;

export const GalleryInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
