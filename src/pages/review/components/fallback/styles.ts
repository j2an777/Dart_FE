import { colors } from '@/styles/colorPalette';
import { LayoutMap } from '@/styles/layout';
import styled from '@emotion/styled';

export const ReviewInfoFallbackContainer = styled.div`
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

export const ReviewListFallbackContainer = styled.div`
  ${LayoutMap.displayFlex}
  flex-direction: column;
  gap: 50px;
  align-items: flex-end;
  width: 100%;
  min-height: 500px;
  padding: 50px 80px;
  border-left: 2px solid ${colors.black};
  border-right: 2px solid ${colors.black};
  flex: 1;
`;

export const ReviewItemBox = styled.div`
  ${LayoutMap.displayFlex}
  width: 100%;
  gap: 40px;
`;
