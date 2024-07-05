import { colors } from '@/styles/colorPalette';
import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  display: flex;
  height: 75px;
  width: 55px;
  align-items: end;
  justify-content: end;

  > p {
    z-index: var(--lower-zindex);
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
