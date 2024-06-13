import { Button } from '@/components';
import { SearchInfoType } from '@/consts/filter';
import { FilterType } from '@/types/gallery';
import useDebounce from '@/hooks/useDebounce';
import useGetSearchDatas from '../../hooks/useGetSearchDatas';
import { filterStore } from '@/stores/filter';
import useOutsideClick from '@/hooks/useOutsideClick';
import { useStore } from 'zustand';

import * as S from './styles';

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
  const { isExpand, ref, setIsExpand } = useOutsideClick();
  const {
    filterValue: { category, keyword },
    onChange,
  } = useStore(filterStore);
  const debouncedKeyword = useDebounce({ value: keyword });
  const { data } = useGetSearchDatas({ keyword: debouncedKeyword, category });
  return (
    <S.Container>
      <S.SearchInupt
        type="text"
        placeholder="Search..."
        name="keyword"
        value={keyword}
        onChange={(e) => {
          onChange({ keyword: e.target.value });
        }}
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
      {isExpand && (
        <S.SearchContent ref={ref as React.RefObject<HTMLUListElement>}>
          {data.results.map((keyword, index) => (
            <S.SearchItem
              key={index}
              onMouseDown={() => {
                onChange({ keyword });
                setIsExpand(false);
              }}
            >
              {keyword}
            </S.SearchItem>
          ))}
        </S.SearchContent>
      )}
    </S.Container>
  );
};

export default KeywordFilter;
