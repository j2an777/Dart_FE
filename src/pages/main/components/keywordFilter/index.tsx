import { Button } from '@/components';
import { SearchInfoType } from '@/consts/filter';

import * as S from './styles';
import { FilterType } from '@/types/gallery';
import { useInput } from '@/hooks/useInput';
import useDebounce from '@/hooks/useDebounce';
import { useEffect, useState } from 'react';
import useGetSearchDatas from '../../hooks/useGetSearchDatas';
import { filterStore } from '@/stores/filter';

interface KeywordFilterProps {
  buttons: SearchInfoType[];
  selected: string;
  onChange: (newValue: Partial<FilterType>) => void;
}

const KeywordFilter = ({
  buttons,
  onChange: setCategory,
  selected,
}: KeywordFilterProps) => {
  const [isExpand, setIsExpand] = useState<boolean>(false);
  const [form, onChange] = useInput({ keyword: '' });
  const { category } = filterStore((state) => state.filterValue);
  const keyword = useDebounce({ value: form.keyword });
  const { data } = useGetSearchDatas({ keyword, category });
  console.log(data);
  useEffect(() => {
    if (keyword) setIsExpand(true);
    return () => setIsExpand(false);
  }, [keyword, setCategory]);
  return (
    <S.Container>
      <S.SearchInupt
        type="text"
        placeholder="Search..."
        name="keyword"
        value={form.keyword}
        onChange={onChange}
      />
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
              onClick={() => setCategory({ category: value })}
            />
          );
        })}
      </S.SeacchButtonBlock>
      {isExpand && <S.SeacchContent>안녕?</S.SeacchContent>}
    </S.Container>
  );
};

export default KeywordFilter;
