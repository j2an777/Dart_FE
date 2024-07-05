import { ButtonSize, ButtonType } from '@/styles/button';
import { BoldType } from '@/styles/typography';
import styled from '@emotion/styled';
import { buttonTypeMap, buttonSizeMap, buttonActiveMap } from '@/styles/button';
import { bolderMap } from '@/styles/typography';
import { LayoutMap } from '@/styles/layout';
import { css } from '@emotion/react';
import { ButtonHTMLAttributes } from 'react';

export interface ButtonProp extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: ButtonType;
  size?: ButtonSize;
  bold?: BoldType;
  fontSize?: number;
  $active?: boolean;
}

const Button = styled.button<ButtonProp>`
  ${LayoutMap.displayFlex}
  justify-content: center;
  transition: all 0.3s ease;
  ${({ size = 'md' }) => buttonSizeMap[size]}
  ${({ buttonType = 'reverseRadius' }) => css`
    ${buttonTypeMap[buttonType]};
  `};
  ${({ buttonType = 'reverseRadius', $active = true }) =>
    $active
      ? css`
          ${buttonActiveMap[buttonType]};
        `
      : null};
  ${({ bold = 'thin' }) => bolderMap[bold]};
  ${({ fontSize }) =>
    fontSize
      ? css`
          font-size: ${fontSize}px;
        `
      : css``};
`;

export default Button;
