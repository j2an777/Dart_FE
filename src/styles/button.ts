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
    background-color: ${colors.black};
    color: ${colors.white};
  `,
  reverseGray: css`
    background-color: ${colors.white};
    border: 2px solid ${colors.gray500};
    color: ${colors.gray500};
    border-radius: 10px;
  `,
};

export type ButtonColor = keyof typeof buttonColorMap;
export type ButtonSize = keyof typeof buttonSizeMap;
