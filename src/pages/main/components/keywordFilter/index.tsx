import { Button } from '@/components';
import { SearchInfoType } from '@/consts/filter';

import * as S from './styles';
import { FilterType } from '@/types/gallery';

interface KeywordFilterProps {
  buttons: SearchInfoType[];
  selected: string;
  onChange: (newValue: Partial<FilterType>) => void;
}

const KeywordFilter = ({ buttons, onChange, selected }: KeywordFilterProps) => {
  return (
    <S.Container>
      <S.SearchInupt type="text" placeholder="Search..." />
      <S.SeacchButtonBlock>
        {buttons.map(({ label, value }) => {
          const buttonType = selected === value ? 'RoundBlack' : 'reverseRoundBlack';
          return (
            <Button
              key={value}
              value={value}
              buttonType={buttonType}
              size="sm"
              children={label}
              onClick={() => onChange({ category: value })}
            />
          );
        })}
      </S.SeacchButtonBlock>
    </S.Container>
  );
};

export default KeywordFilter;
