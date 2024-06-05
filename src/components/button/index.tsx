import { ButtonSize, ButtonType } from '@/styles/button';
import { BoldType } from '@/styles/typography';
import { Colors } from '@/styles/colorPalette';

import * as S from './styles';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

export interface ButtonProp extends ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string;
  buttonType?: ButtonType;
  size?: ButtonSize;
  bold?: BoldType;
  hover?: Colors;
  resize?: string;
  leftContent?: React.ReactNode;
  color?: Colors;
  fontSize?: number;
}

const Button = ({ leftContent, ...props }: PropsWithChildren<ButtonProp>) => {
  return (
    <S.Container>
      {leftContent}
      <S.Button {...props} />
    </S.Container>
  );
};

export default Button;
