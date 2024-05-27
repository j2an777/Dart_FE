import { css } from '@emotion/react';
import { colors } from './colorPalette';

export const buttonSizeMap = {
  small: css`
    font-size: 12px;
    width: 80px;
    height: 30px;
  `,
  medium: css`
    font-size: 24px;
    width: 150px;
    height: 50px;
  `,
  large: css`
    font-size: 32px;
    width: 280px;
    height: 80px;
  `,
  full: css``,
};

export const buttonColorMap = {
  black: css`
    background-color: black;
    color: ${colors.white};
  `,
};

export type ButtonColor = keyof typeof buttonColorMap;
export type ButtonSize = keyof typeof buttonSizeMap;
