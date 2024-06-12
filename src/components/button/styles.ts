import styled from '@emotion/styled';
import { buttonTypeMap, buttonSizeMap, buttonActiveMap } from '@/styles/button';
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
  ${LayoutMap.displayFlex}
  justify-content: center;
  transition: all 0.3s ease;
  flex: 1;
  ${({ size = 'md' }) => buttonSizeMap[size]}
  ${({ buttonType = 'reverseRadius' }) => css`
    ${buttonTypeMap[buttonType]};
  `};
  ${({ buttonType = 'reverseRadius', $active = true }) =>
    $active ? `${buttonActiveMap[buttonType]}` : null};
  ${({ bold = 'thin' }) => bolderMap[bold]};
  ${({ fontSize }) =>
    fontSize
      ? css`
          font-size: ${fontSize}px;
        `
      : css``};
`;
