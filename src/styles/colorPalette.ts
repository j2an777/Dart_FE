import { css } from '@emotion/react';

export const colorPalette = css`
  :root {
    --red: #900202;
    --gray50: #fafafa;
    --gray100: #eeeeee;
    --gray200: #cbcbcb;
    --gray300: #c1c1c1;
    --gray400: #aaaaaa;
    --gray500: #606060;
    --gray600: #484545;
    --black: #000000;
    --white: #ffffff;
  }
`;

export const colors = {
  red: 'var(--red)',
  gray50: 'var(--gray50)',
  gray100: 'var(--gray100)',
  gray200: 'var(--gray200)',
  gray300: 'var(--gray300)',
  gray400: 'var(--gray400)',
  gray500: 'var(--gray500)',
  gray600: 'var(--gray600)',
  black: 'var(--black)',
  white: 'var(--white)',
};

export type Colors = keyof typeof colors;
