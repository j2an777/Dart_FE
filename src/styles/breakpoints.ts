import { css } from '@emotion/react';

export const breakpoints = {
  desktop: '1440px',
  tablet: '1024px',
  mobile: '500px',
};

export const mediaQueries = {
  desktop: (styles: string) => css`
    @media (max-width: ${breakpoints.tablet}) {
      ${styles}
    }
  `,
  tablet: (styles: string) => css`
    @media (max-width: ${breakpoints.tablet}) {
      ${styles}
    }
  `,
  mobile: (styles: string) => css`
    @media (max-width: ${breakpoints.mobile}) {
      ${styles}
    }
  `,
};

// 컨테이너 쿼리 함수

export const containerQuery = ({
  containerName,
  styles,
  breakpoints,
}: {
  containerName: string;
  styles: string;
  breakpoints: number;
}) => {
  return css`
    @container ${containerName} (max-width: ${breakpoints}px) {
      ${styles}
    }
  `;
};

export const containerQueries = {
  tablet: (containerName: string, styles: string) => css`
    @container ${containerName} (max-width: ${breakpoints.tablet}) {
      ${styles}
    }
  `,
  mobile: (containerName: string, styles: string) => css`
    @container ${containerName} (max-width: ${breakpoints.mobile}) {
      ${styles}
    }
  `,
};
