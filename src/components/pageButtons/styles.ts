import { Text } from '@/components';
import { colors } from '@/styles/colorPalette';
import { LayoutMap } from '@/styles/layout';
import styled from '@emotion/styled';
import { PageButtonsProps } from '.';
import { css } from '@emotion/react';

export const Container = styled.div<Pick<PageButtonsProps, 'orientation'>>`
  ${LayoutMap.displayFlex}
  justify-content: center;
  position: relative;
  ${({ orientation }) =>
    orientation === 'horizontal' ? 'width: 300px;' : 'height: 300px;'}
`;

export const Line = styled(Text)<Pick<PageButtonsProps, 'orientation'>>`
  ${LayoutMap.absoluteCenter}
  border: 1px solid ${colors.black};
  z-index: var(--lower-zindex);
  ${({ orientation }) =>
    orientation === 'horizontal' ? 'width: 100%;' : 'height: 100%;'}
`;

export const ButtonBox = styled.div<Pick<PageButtonsProps, 'orientation'>>`
  ${LayoutMap.displayFlex}
  justify-content: center;
  background-color: ${colors.white};
  gap: 10px;
  z-index: var(--middle-zindex);

  ${({ orientation }) =>
    orientation === 'horizontal'
      ? 'width: 140px'
      : css`
          flex-direction: column;
          height: 140px;
        `}
`;
