import styled from '@emotion/styled';
import { buttonTypeMap, buttonSizeMap } from '@/styles/button';
import { bolderMap } from '@/styles/typography';
import { ButtonProp } from '.';
import { LayoutMap } from '@/styles/layout';
import { css } from '@emotion/react';

export const Container = styled.div`
  ${LayoutMap.displayFlex}
  width: fit-content;
  gap: 10px;
`;

export const Button = styled.button<ButtonProp>`
  display: flex;
  flex: 1;
  ${({ size = 'md' }) => buttonSizeMap[size]}
  ${({ buttonType = 'reverseRadius' }) => buttonTypeMap[buttonType]}
    ${({ bold = 'thin' }) => bolderMap[bold]};
  justify-content: center;
  align-items: center;
  ${({ color }) =>
    color
      ? css`
          color: ${color};
        `
      : css``};
  ${({ fontSize }) =>
    fontSize
      ? css`
          font-size: ${fontSize}px;
        `
      : css``};
`;
