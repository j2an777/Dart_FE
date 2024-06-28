import { css } from '@emotion/react';

export const colorPalette = css`
  :root {
    --red: #900202;
    --gray50: #fafafa;
    --gray100: #eeeeee;
    --gray200: #cbcbcb;
    --gray300: #c1c1c1;
    --gray400: #aaaaaa;
    --gray500: #616161;
    --gray600: #484545;
    --black: #000000;
    --black100: #252525;
    --white: #ffffff;
    --green: #70a076;
    --red50: #fd5d5d;
    --purple: #a331e9;
    --pink: #f931cd;
    --cyan: #39e99f;
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
  black100: 'var(--black100)',
  white: 'var(--white)',
  green: 'var(--green)',
  red50: 'var(--red50)',
  purple: 'var(--purple)',
  pink: 'var(--pink)',
  cyan: 'var(--cyan)',
};

export type Colors = keyof typeof colors;
