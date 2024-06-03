import { buttonSizeMap, buttonTypeMap } from '@/styles/button';
import { colors } from '@/styles/colorPalette';
import { LayoutMap } from '@/styles/layout';
import { typographyMap } from '@/styles/typography';
import styled from '@emotion/styled';

export const Container = styled.div`
  ${LayoutMap.pageLayout}
  display: flex;
  justify-content: center;
  align-items: start;
  margin-bottom: 50px;
`;

export const Box = styled.div`
  max-width: 1440px;
  outline: 2px solid black;
`;

export const Quit = styled.div`
  display: flex;
  justify-content: end;
  padding: 5px 10px;
  border-bottom: 2px solid black;
`;

export const Block = styled.div`
  ${LayoutMap.displayFlex}
  justify-content: center;
  height: 80px;
  border-top: solid 2px ${colors.black};
`;

export const Submit = styled.button`
  ${buttonSizeMap.smMd}
  ${buttonTypeMap.reverseRadius}
`;

export const InputBox = styled.input<{ width?: number; height?: number }>`
  line-height: 1;
  border: 2px solid ${colors.black};
  color: ${colors.black};
  padding: 20px;
  ${typographyMap.t6};
  width: ${({ width = '100%' }) => `${width}px`};
  height: ${({ height = '100%' }) => `${height}px`};
`;

export const TextBox = styled.textarea<{ width?: number; height?: number }>`
  line-height: 1;
  border: 2px solid ${colors.black};
  color: ${colors.black};
  padding: 20px;
  width: ${({ width = '100%' }) => `${width}px`};
  height: ${({ height = '100%' }) => `${height}px`};
  resize: none;
  overflow: auto;
`;
