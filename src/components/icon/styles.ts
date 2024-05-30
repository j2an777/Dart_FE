import styled from '@emotion/styled';
import { HTMLAttributes } from 'react';
import { IconValues } from '.';
import { css } from '@emotion/react';
import { Colors } from '@/styles/colorPalette';

interface IconContainerProps extends HTMLAttributes<HTMLDivElement> {
  $rotate?: boolean;
  size?: number;
  color?: Colors;
  $active?: boolean;
  value: IconValues;
}

export const Container = styled.div<IconContainerProps>`
  display : flex;
  justify-content: center;
  align-items: center;
  width: ${({ size }) => (size ? `${size}px` : 'fit-content')};
  height: ${({ size }) => (size ? `${size}px` : 'fit-content')};
  svg {
    width : 100%;
    height : 100%;
  }
  ${({ $rotate }) =>
    $rotate
      ? css`
          transform: rotate(180deg);
        `
      : css`
          transform: rotate(0deg);
        `};
  transition: all 0.3s ease;
  ${({ $active }) =>
    $active
      ? css`
          &:hover {
            transform: scale(1.1);
            cursor: pointer;
          }
          &:active {
            transform: scale(0.9);
          }
        `
      : null}
`;
