import styled from '@emotion/styled';
import { ComponentProps } from 'react';
import { css } from '@emotion/react';
import Icon from '.';

type IconProps = ComponentProps<typeof Icon>;

type IconContainerProps = Omit<IconProps, 'value' | 'strokeColor' | 'fillColor'>;

export const Container = styled.div<IconContainerProps>`
  width: ${({ size }) => (size ? `${size}px` : 'fit-content')};
  height: ${({ size }) => (size ? `${size}px` : 'fit-content')};
  svg {
    width: 100%;
    height: 100%;
  }
  ${({ $rotate }) =>
    $rotate
      ? css`
          transform: scaleX(-1);
        `
      : css`
          transform: rotate(0deg);
        `};
  transition: all 0.3s ease;
  ${({ $active }) =>
    $active
      ? css`
          &:hover {
            transform: scale(1.05);
            cursor: pointer;
          }
          &:active {
            transform: scale(0.95);
          }
        `
      : null};
`;
