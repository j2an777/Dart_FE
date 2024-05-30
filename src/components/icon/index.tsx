import { MouseEvent } from 'react';
import { Colors, colors } from '@/styles/colorPalette';

import * as S from './styles';

export type IconValues = 'cancel' | 'check';

interface IconProps {
  value: IconValues;
  $rotate?: boolean;
  $active?: boolean;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
  size?: number;
  color?: Colors;
}

const Icon = ({ value, $active = true, color = 'black', ...props }: IconProps) => {
  return (
    <S.Container value={value} $active={$active} {...props}>
      {renderIcon(value, color)}
    </S.Container>
  );
};

const renderIcon = (value: IconValues, color: Colors) => {
  switch (value) {
    case 'cancel':
      return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M7.86939 7.19881H7.99345L13.204 0.751282H15.4258L9.30172 8.25128L15.4258 15.7513H13.204L7.98217 9.40105H7.85811L2.63631 15.7513H0.425781L6.66262 8.25128L0.425781 0.751282H2.67014L7.86939 7.19881Z"
            fill={colors[color]}
          />
        </svg>
      );
    case 'check':
      return (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
          <path
            d="M11.2502 20.2123L6.91268 15.8748C6.67896 15.6411 6.36196 15.5098 6.03143 15.5098C5.7009 15.5098 5.3839 15.6411 5.15018 15.8748C4.91646 16.1085 4.78516 16.4255 4.78516 16.756C4.78516 16.9197 4.81739 17.0818 4.88002 17.233C4.94265 17.3842 5.03445 17.5216 5.15018 17.6373L10.3752 22.8623C10.8627 23.3498 11.6502 23.3498 12.1377 22.8623L25.3627 9.63729C25.5964 9.40357 25.7277 9.08657 25.7277 8.75604C25.7277 8.42551 25.5964 8.10851 25.3627 7.87479C25.129 7.64107 24.812 7.50977 24.4814 7.50977C24.1509 7.50977 23.8339 7.64107 23.6002 7.87479L11.2502 20.2123Z"
            fill={colors[color]}
          />
        </svg>
      );
  }
};

export default Icon;
