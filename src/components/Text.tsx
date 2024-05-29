import styled from '@emotion/styled';
import { BoldType, Typograph, bolderMap, typographyMap } from '@/styles/typography';
import { Colors, colors } from '@/styles/colorPalette';
import { css } from '@emotion/react';

interface TextProps {
  typography?: Typograph;
  bold?: BoldType;
  color?: Colors;
  ellipsis?: number;
  clickable?: boolean;
}

const Text = styled.p<TextProps>`
  ${({ typography = 't3' }) => typographyMap[typography]};
  ${({ bold = 'semibold' }) => bolderMap[bold]};
  color: ${({ color = 'black' }) => colors[color]};
  line-height: normal;
  ${({ ellipsis }) => css`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: ${ellipsis}px;
  `}
  ${({ clickable = false }) =>
    clickable
      ? css`
          cursor: pointer;
        `
      : null};
`;

export default Text;
