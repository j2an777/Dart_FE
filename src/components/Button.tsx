import styled from '@emotion/styled';
import { Colors } from '@/styles/colorPalette';
import { ButtonType, ButtonSize, buttonTypeMap, buttonSizeMap } from '@/styles/button';
import { BoldType, bolderMap } from '@/styles/typography';

interface ButtonProp {
  width?: string;
  buttonType?: ButtonType;
  size?: ButtonSize;
  bold?: BoldType;
  hover?: Colors;
  resize?: string;
}

const Button = styled.button<ButtonProp>`
  display: flex;
  ${({ size = 'md' }) => buttonSizeMap[size]}
  ${({ buttonType = 'reverseRadius' }) => buttonTypeMap[buttonType]}
  ${({ bold = 'thin' }) => bolderMap[bold]};
  justify-content: center;
  align-items: center;
`;

export default Button;
