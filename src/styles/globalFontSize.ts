import { css } from '@emotion/react';
import { mediaQueries } from './breakpoints';

export const globalFontSize = css`
  ${mediaQueries.mobile(`
    font-size: 12px;
  `)}
`;
