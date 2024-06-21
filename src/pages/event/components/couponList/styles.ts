import { LayoutMap } from '@/styles/layout';
import styled from '@emotion/styled';
import { ComponentProps } from 'react';
import CouponLIst from '.';
import { css } from '@emotion/react';

type CouponLIstProps = ComponentProps<typeof CouponLIst>;

export const Container = styled.div<Pick<CouponLIstProps, 'orientation'>>`
  ${LayoutMap.displayFlex}
  width: 100%;
  ${({ orientation = 'horizontal' }) =>
    orientation === 'horizontal'
      ? css`
          flex-direction: row;
          justify-content: space-around;
        `
      : css`
          flex-direction: column;
          justify-content: center;
        `};
  flex-wrap: wrap;
  gap: 20px;
`;
