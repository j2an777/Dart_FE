import { Icon, Text } from '@/components';
import { ButtonBar, CostFilter, KeywordFilter } from '..';
import {
  costButtonInfo,
  displayButtonInfo,
  searchButtonInfo,
  sortButtonInfo,
} from '@/consts/filter';
import { filterStore } from '@/stores/filter';
import { pageStore } from '@/stores/page';
import useOutsideClick from '@/hooks/useOutsideClick';
import { useEffect } from 'react';

import * as S from './styles';

const Filter = () => {
  const { filterValue, costArray, onChange, onNestingChange, onReset } = filterStore();
  const { ref, isExpand, onToggle, excludeRef } = useOutsideClick();
  const resetPageInfo = pageStore((state) => state.resetPageInfo);
  useEffect(() => {
    resetPageInfo();
  }, [filterValue, costArray]);
  useEffect(() => {
    return () => onReset();
  }, []);
  return (
    <S.Container className="filter-container">
      <S.FilterBox isExpand={isExpand} ref={ref as React.RefObject<HTMLDivElement>}>
        <S.TitleBox>
          <Text typography="t6" bold="bold">
            FILTER
          </Text>
          <Icon
            value={isExpand ? 'cancel' : 'filter'}
            $active={isExpand}
            onClick={onToggle}
          />
        </S.TitleBox>
        <KeywordFilter buttons={searchButtonInfo} />
        <CostFilter
          buttons={costButtonInfo}
          title="비용"
          selected={filterValue.cost}
          onChange={onNestingChange}
        />
        <ButtonBar
          buttons={displayButtonInfo}
          keyPorp="display"
          title="전시상태"
          selected={filterValue.display}
          onChange={onChange}
        />
        <ButtonBar
          buttons={sortButtonInfo}
          keyPorp="sort"
          title="정렬"
          selected={filterValue.sort}
          onChange={onChange}
        />
      </S.FilterBox>
      <S.filterIcon
        value="showFilter"
        size={25}
        ref={excludeRef as React.RefObject<HTMLDivElement>}
        onClick={onToggle}
      />
    </S.Container>
  );
};

export default Filter;
