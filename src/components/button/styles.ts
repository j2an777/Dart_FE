import styled from '@emotion/styled';
import { buttonTypeMap, buttonSizeMap } from '@/styles/button';
import { bolderMap } from '@/styles/typography';
import { ButtonProp } from '.';
import { LayoutMap } from '@/styles/layout';

export const Container = styled.div`
  ${LayoutMap.displayFlex}
  width: fit-content;
  gap: 10px;
`;

export const Button = styled.button<ButtonProp>`
  display: flex;
  ${({ size = 'md' }) => buttonSizeMap[size]}
  ${({ buttonType = 'reverseRadius' }) => buttonTypeMap[buttonType]}
  ${({ bold = 'thin' }) => bolderMap[bold]};
  justify-content: center;
  align-items: center;
`;
