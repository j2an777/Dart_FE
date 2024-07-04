import { css } from '@emotion/react';

export const typographyMap = {
  t0: css`
    font-size: 56px;
  `,
  t1: css`
    font-size: 2.25rem;
  `,
  t2: css`
    font-size: 32px;
  `,
  t3: css`
    font-size: 28px;
  `,
  t4: css`
    font-size: 1.5rem;
  `,
  t5: css`
    font-size: 20px;
  `,
  t6: css`
    font-size: 16px;
  `,
  t7: css`
    font-size: 14px;
  `,
  t8: css`
    font-size: 12px;
  `,
};

export const bolderMap = {
  thin: css`
    font-weight: 100;
  `,
  regular: css`
    font-weight: 400;
  `,
  medium: css`
    font-weight: 500;
  `,
  semibold: css`
    font-weight: 600;
  `,
  bold: css`
    font-weight: 700;
  `,
};

export type Typograph = keyof typeof typographyMap;
export type BoldType = keyof typeof bolderMap;
