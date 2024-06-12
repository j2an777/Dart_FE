import { Icon, Text } from '@/components';
import { DisplayInfoType, SortInfoType } from '@/consts/filter';
import { FilterType } from '@/types/gallery';

import * as S from './styles';
import { useState } from 'react';

interface ButtonBarProps {
  title: string;
  selected: string;
  keyPorp: 'display' | 'sort';
  onChange: (newValue: Partial<FilterType>) => void;
  buttons: SortInfoType[] | DisplayInfoType[];
}

const ButtonBar = ({ title, selected, keyPorp, onChange, buttons }: ButtonBarProps) => {
  const [position, setPosition] = useState<number>(keyPorp === 'display' ? -2 : 0);
  return (
    <S.Container>
      <S.TitleBox>
        <Text typography="t6" bold="regular">
          {title}
        </Text>
        {keyPorp === 'display' && (
          <Icon
            value="all"
            size={25}
            color={selected === 'all' ? 'black' : 'gray200'}
            onClick={() => {
              onChange({ [keyPorp]: 'all' });
              setPosition(-2);
            }}
            $active={!(selected === 'all')}
          />
        )}
      </S.TitleBox>
      <S.ButtonBox>
        {buttons.map(({ value, label }, index) => {
          return (
            <S.Button
              selected={selected === value}
              key={value}
              children={label}
              onClick={() => {
                onChange({ [keyPorp]: value });
                setPosition(index);
              }}
            />
          );
        })}
        <S.SelectedButton width={buttons.length} position={position} />
      </S.ButtonBox>
    </S.Container>
  );
};

export default ButtonBar;
