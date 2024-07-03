import { colors } from '@/styles/colorPalette';
import { LayoutMap } from '@/styles/layout';
import styled from '@emotion/styled';

export const Container = styled.div`
  ${LayoutMap.displayFlex}
  flex-direction: column;
  justify-content: space-between;
  ${LayoutMap.absoluteCenter}
  padding: 35px;
  width: 600px;
  background-color: ${colors.white};
  border-radius: 10px;
  min-height: 300px;
  max-height: 600px;
  overflow-y: auto;
  overflow-x: hidden;

  .dsBox {
    margin: 20px 0 30px 0;
  }

  @media (max-width : 500px) {
    width : 90vw;
  }
`;

export const HeaderBox = styled.div`
  ${LayoutMap.displayFlex}
  justify-content: space-between;
  padding-bottom: 15px;
  width: 100%;
  border-bottom: 2px solid ${colors.gray100};
`;
