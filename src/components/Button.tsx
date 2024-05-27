import styled from '@emotion/styled';
import { Colors } from '@/styles/colorPalette';
import { ButtonColor, ButtonSize, buttonColorMap, buttonSizeMap } from '@/styles/button';
import { BoldType, bolderMap } from '@/styles/typography';

interface ButtonProp {
  width?: string;
  buttonType?: ButtonColor;
  size?: ButtonSize;
  bold?: BoldType;
  hover?: Colors;
  resize?: string;
}

const Button = styled.button<ButtonProp>`
  display: flex;
  ${({ size = 'medium' }) => buttonSizeMap[size]}
  ${({ buttonType = 'black' }) => buttonColorMap[buttonType]}
  ${({ bold = 'semibold' }) => bolderMap[bold]};
  justify-content: center;
  align-items: center;
`;

export default Button;
