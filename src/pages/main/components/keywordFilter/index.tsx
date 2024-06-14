import { Button } from '@/components';
import { SearchInfoType } from '@/consts/filter';
import { FilterType } from '@/types/gallery';
import useDebounce from '@/hooks/useDebounce';
import useGetSearchDatas from '../../hooks/useGetSearchDatas';
import { filterStore } from '@/stores/filter';
import useOutsideClick from '@/hooks/useOutsideClick';
import { useStore } from 'zustand';

import * as S from './styles';
import { useInput } from '@/hooks/useInput';
import { useEffect, useRef, useState } from 'react';

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
  const [inputFocus, setInputFocus] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [form, onChange, setForm] = useInput({ keyword: '' });
  const {
    filterValue: { category },
    onChange: setFilterValue,
  } = useStore(filterStore);
  const debouncedKeyword = useDebounce({ value: form.keyword });
  const { data } = useGetSearchDatas({ keyword: debouncedKeyword, category });
  useEffect(() => {
    if (debouncedKeyword && inputFocus) {
      setIsExpand(true);
    }

    return () => setIsExpand(false);
  }, [debouncedKeyword, inputFocus, setFilterValue, setIsExpand]);

  return (
    <S.Container>
      <S.SearchInupt
        ref={inputRef}
        type="text"
        placeholder="Search..."
        name="keyword"
        value={form.keyword}
        onChange={onChange}
        onFocus={() => setInputFocus(true)}
        onBlur={() => setInputFocus(false)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            setFilterValue({ keyword: form.keyword });
          }
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
          {data?.results.map((keyword, index) => (
            <S.SearchItem
              key={index}
              onMouseDown={() => {
                setForm({ keyword });
                setFilterValue({ keyword });
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
