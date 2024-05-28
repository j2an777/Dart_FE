import { MouseEvent } from 'react';
import { Colors, colors } from '@/styles/colorPalette';

import * as S from './styles';

export type IconValues = 'cancel';

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
  }
};

export default Icon;
