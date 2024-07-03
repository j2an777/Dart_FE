import { Button } from '@/components';
import { colors } from '@/styles/colorPalette';
import { LayoutMap } from '@/styles/layout';
import styled from '@emotion/styled';

export const Container = styled.div`
  ${LayoutMap.pageLayout}
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: calc(100vh - 80px);

  gap: 50px;
`;

export const InfoBox = styled.div`
  ${LayoutMap.displayFlex}
`;

export const InfoButton = styled(Button)<{ selected: boolean }>`
  color: ${({ selected }) => (selected ? `${colors.black}` : `${colors.gray400}`)};
  padding: 0;
`;

export const eventPageQuerySize = {
  priorityBox: 570,
  priorityBoxMobile: 410,
};
