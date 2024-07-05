import { Button } from '@/components';
import { SearchInfoType } from '@/consts/filter';
import { CategoryValues } from '@/types/gallery';
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
}

const KeywordFilter = ({ buttons }: KeywordFilterProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [form, onChange, setForm] = useInput({ keyword: '', category: 'title' });
  const { isExpand, ref, setIsExpand } = useOutsideClick();
  const [inputFocus, setInputFocus] = useState<boolean>(false);
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
      <S.SeacchInputBox>
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
              setFilterValue({
                keyword: form.keyword,
                category: form.category as CategoryValues,
              });
            }
          }}
        />
        <S.SearchIcon
          value="search"
          onClick={() =>
            setFilterValue({
              keyword: form.keyword,
              category: form.category as CategoryValues,
            })
          }
        />
      </S.SeacchInputBox>

      <S.SeacchButtons>
        {buttons.map(({ label, value }) => {
          const buttonType = form.category === value ? 'RoundBlack' : 'reverseRoundBlack';
          return (
            <Button
              key={value}
              value={value}
              buttonType={buttonType}
              size="sm"
              children={label}
              onClick={() => setForm((prev) => ({ ...prev, category: value }))}
            />
          );
        })}
      </S.SeacchButtons>
      {isExpand && (
        <S.SearchContent ref={ref as React.RefObject<HTMLUListElement>}>
          {data?.results.length === 0 ? (
            <S.NoneSearchData typography="t6" color="gray400">
              결과 없음
            </S.NoneSearchData>
          ) : (
            data?.results.map((keyword, index) => {
              return (
                <S.SearchItem
                  key={index}
                  onMouseDown={() => {
                    setForm((prev) => ({ ...prev, keyword }));
                    setFilterValue({ keyword });
                    setIsExpand(false);
                  }}
                >
                  {keyword}
                </S.SearchItem>
              );
            })
          )}
        </S.SearchContent>
      )}
    </S.Container>
  );
};

export default KeywordFilter;
