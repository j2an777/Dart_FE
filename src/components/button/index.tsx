import { ButtonSize, ButtonType } from '@/styles/button';
import { BoldType } from '@/styles/typography';

import * as S from './styles';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

export interface ButtonProp extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: ButtonType;
  size?: ButtonSize;
  bold?: BoldType;
  leftContent?: React.ReactNode;
  fontSize?: number;
  $active?: boolean;
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
