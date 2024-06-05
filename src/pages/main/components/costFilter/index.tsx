import { Button, Text } from '@/components';
import * as S from './styles';
import { CostInfoType } from '@/consts/filter';
import { FilterType } from '@/types/gallery';
interface CoastFilterProps {
  title: string;
  selected: string;
  onChange: (newValue: Partial<FilterType>) => void;
  buttons: CostInfoType[];
}

const CoastFilter = ({ buttons, onChange, selected, title }: CoastFilterProps) => {
  return (
    <S.Container>
      <Text typography="t6" bold="regular">
        {title}
      </Text>
      <S.ButtonBox>
        {buttons.map(({ value, label }) => {
          const buttonType =
            selected === 'all'
              ? 'circle'
              : selected === value
                ? 'circle'
                : 'reverseCircle';
          const color =
            selected === 'all' ? 'white' : selected === value ? 'white' : 'black';
          return (
            <Button
              key={value}
              buttonType={buttonType}
              size="circle"
              children={label}
              color={color}
              onClick={() => onChange({ cost: value })}
            />
          );
        })}
      </S.ButtonBox>
    </S.Container>
  );
};

export default CoastFilter;
