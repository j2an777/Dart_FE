import { colors } from '@/styles/colorPalette';
import styled from '@emotion/styled';

export const Input = styled.input<{ width?: number; height?: number }>`
  line-height: 1;
  border: 2px solid ${colors.black};
  color: ${colors.black};
  padding: 20px;
  width: ${({ width = '100%' }) => `${width}px`};
  height: ${({ height = '100%' }) => `${height}px`};
`;
