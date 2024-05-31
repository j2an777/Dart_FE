import { css } from '@emotion/react';
import { colors } from './colorPalette';

export const buttonSizeMap = {
  xxs: css`
    font-size: 12px;
    width: 70px;
    height: 20px;
  `,
  xs: css`
    font-size: 16px;
    width: 80px;
    height: 30px;
  `,
  sm: css`
    font-size: 12px;
    width: 80px;
    height: 35px;
  `,
  ls: css`
    font-size: 12px;
    width: 120px;
    height: 40px;
  `,
  smMd: css`
    font-size: 16px;
    width: 120px;
    height: 50px;
  `,
  md: css`
    font-size: 24px;
    width: 150px;
    height: 50px;
  `,
  mdlg: css`
    font-size: 24px;
    width: 150px;
    height: 60px;
  `,
  lg: css`
    font-size: 32px;
    width: 280px;
    height: 80px;
  `,
  full: css`
    font-size: 16px;
    width: 100%;
    height: 44px;
  `,
  fit: css`
    font-size: 16px;
    width: fit-content;
    height: fit-content;
  `,
};

export const buttonTypeMap = {
  rectangleBlack: css`
    background-color: ${colors.black};
    color: ${colors.white};
  `,
  rectangleGray: css`
    background-color: ${colors.gray200};
    color: ${colors.gray500};
  `,
  rectangleWhite: css`
    background-color: ${colors.white};
    color: ${colors.black};
  `,
  reverseRectangleGray: css`
    background-color: ${colors.white};
    border: 2px solid ${colors.gray100};
    color: ${colors.gray500};
  `,
  reverseRectangleWhite: css`
    background-color: inherit;
    border: 1px solid ${colors.white};
    color: ${colors.white};
  `,
  RoundBlack: css`
    background-color: ${colors.black};
    border: 1px solid ${colors.black};
    color: ${colors.white};
    border-radius: 30px;
  `,
  reverseRoundBlack: css`
    background-color: inherit;
    border: 1px solid ${colors.black};
    color: ${colors.white};
    border-radius: 30px;
  `,
  reverseRounDash: css`
    background-color: ${colors.white};
    border: 1px dashed ${colors.black};
    color: ${colors.gray500};
    border-radius: 30px;
  `,
  reverseRadius: css`
    background-color: ${colors.white};
    border: 2px solid ${colors.gray500};
    color: ${colors.gray500};
    border-radius: 10px;
  `,
  onlyText: css`
    background-color: inherit;
    color: ${colors.white};
  `,
};

export type ButtonType = keyof typeof buttonTypeMap;
export type ButtonSize = keyof typeof buttonSizeMap;
