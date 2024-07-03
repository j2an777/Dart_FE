import { css } from '@emotion/react';

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
