import { Button } from '@/components';
import { SearchInfoType } from '@/consts/filter';
import { CategoryValues } from '@/types/gallery';
import useDebounce from '@/hooks/useDebounce';
import useGetSearchDatas from '../../hooks/useGetSearchDatas';
import { filterStore } from '@/stores/filter';
import useOutsideClick from '@/hooks/useOutsideClick';
import { useStore } from 'zustand';
import { useInput } from '@/hooks/useInput';
import { useEffect, useRef, useState } from 'react';

import * as S from './styles';

interface KeywordFilterProps {
  buttons: SearchInfoType[];
}

const KeywordFilter = ({ buttons }: KeywordFilterProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { setIsExpand, isExpand, ref } = useOutsideClick();
  const [inputFocus, setInputFocus] = useState<boolean>(false);
  const [form, onChange, setForm] = useInput({ keyword: '', category: 'title' });
  const debouncedKeyword = useDebounce({ value: form.keyword });
  const { onChange: setFilterValue } = useStore(filterStore);
  const { data } = useGetSearchDatas({
    keyword: debouncedKeyword,
    category: form.category as 'title' | 'hashtag' | 'author',
  });
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
              bold="regular"
              children={label}
              onClick={() => setForm((prev) => ({ ...prev, category: value }))}
            />
          );
        })}
      </S.SeacchButtons>
      {isExpand && data?.result.length !== 0 && (
        <S.SearchContent ref={ref as React.RefObject<HTMLUListElement>}>
          {data?.result.map((keyword, index) => {
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
          })}
        </S.SearchContent>
      )}
    </S.Container>
  );
};

export default KeywordFilter;
