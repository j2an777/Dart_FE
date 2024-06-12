import { colors } from '@/styles/colorPalette';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import defaultImage from '@/assets/images/defaultUser.png';

interface CircleProps {
  size: number;
  border?: boolean;
  profileImage?: string | null;
}

const Circle = styled.div<CircleProps>(
  { borderRadius: '100%' },
  ({ border = false }) =>
    border
      ? css`
          border: 3px solid ${colors.gray100};
        `
      : null,
  ({ size }) => css`
    display: block;
    width: ${size}px;
    height: ${size}px;
  `,
  ({ profileImage }) => css`
    background-image: url(${profileImage ? profileImage : defaultImage});
    background-size: cover;
    background-position: center;
  `,
);

export default Circle;
