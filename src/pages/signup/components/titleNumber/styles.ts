import { colors } from '@/styles/colorPalette';
import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  height: 75px;
  width: 55px;
  display: flex;
  align-items: end;
  justify-content: end;
  > p {
    z-index: var(--lower-zindex);
    margin: 0;
  }
`;

export const BackgroundBox = styled.div`
  position: absolute;
  background-color: ${colors.gray500};
  width: 40px;
  height: 40px;
  top: 0;
  left: 0;
`;
