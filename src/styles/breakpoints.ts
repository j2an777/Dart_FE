import { css } from '@emotion/react';

export const breakpoints = {
  desktop: '1440px',
  tablet: '1024px',
  mobile: '500px',
};

export const mediaQueries = {
  desktop: (styles: string) => css`
    @media (min-width: ${breakpoints.tablet}) {
      ${styles}
    }
  `,
  tablet: (styles: string) => css`
    @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
      ${styles}
    }
  `,
  mobile: (styles: string) => css`
    @media (max-width: ${breakpoints.mobile}) {
      ${styles}
    }
  `,
};

export const containerQueries = {
  desktop: (containerName: string, styles: string) => css`
    @container ${containerName} (min-width: ${breakpoints.tablet}) {
      ${styles}
    }
  `,
  tablet: (containerName: string, styles: string) => css`
    @container ${containerName} (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
      ${styles}
    }
  `,
  mobile: (containerName: string, styles: string) => css`
    @container ${containerName} (max-width: ${breakpoints.mobile}) {
      ${styles}
    }
  `,
};