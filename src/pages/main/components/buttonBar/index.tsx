import { Button, Icon, Text } from '@/components';
import { DisplayInfoType, SortInfoType } from '@/consts/filter';
import { FilterType } from '@/types/gallery';

import * as S from './styles';

interface ButtonBarProps {
  title: string;
  selected: string;
  keyPorp: 'display' | 'sort';
  onChange: (newValue: Partial<FilterType>) => void;
  buttons: SortInfoType[] | DisplayInfoType[];
}

const ButtonBar = ({ title, selected, keyPorp, onChange, buttons }: ButtonBarProps) => {
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
            onClick={() => onChange({ [keyPorp]: 'all' })}
            $active={!(selected === 'all')}
          />
        )}
      </S.TitleBox>
      <S.ButtonBox>
        {buttons.map(({ value, label }) => {
          const buttonType = selected === value ? 'RoundBlack' : 'onlyText';
          const color = selected === value ? 'white' : 'black';
          return (
            <Button
              key={value}
              buttonType={buttonType}
              size="xs"
              children={label}
              color={color}
              onClick={() => onChange({ [keyPorp]: value })}
            />
          );
        })}
      </S.ButtonBox>
    </S.Container>
  );
};

export default ButtonBar;
