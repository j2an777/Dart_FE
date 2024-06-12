import { Button, Text } from '@/components';
import * as S from './styles';
import { CostInfoType } from '@/consts/filter';
import { FilterType } from '@/types/gallery';
interface CostFilterProps {
  title: string;
  selected: string;
  onChange: (newValue: Partial<FilterType>) => void;
  buttons: CostInfoType[];
}

const CostFilter = ({ buttons, onChange, selected, title }: CostFilterProps) => {
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
          return (
            <Button
              key={value}
              buttonType={buttonType}
              size="circle"
              children={label}
              onClick={() => onChange({ cost: value })}
            />
          );
        })}
      </S.ButtonBox>
    </S.Container>
  );
};

export default CostFilter;
