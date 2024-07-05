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
import { useEffect } from 'react';
import { categoryModalStore } from '@/stores/modal';

import * as S from './styles';

const Filter = () => {
  const { filterValue, costArray, onChange, onNestingChange, onReset } = filterStore();
  const open = categoryModalStore((state) => state.open);
  const resetPageInfo = pageStore((state) => state.resetPageInfo);
  useEffect(() => {
    resetPageInfo();
  }, [filterValue, costArray]);
  useEffect(() => {
    return () => onReset();
  }, []);
  return (
    <S.Container className="filter-container">
      <S.FilterBox>
        <S.TitleBox>
          <Text typography="t6" bold="bold">
            FILTER
          </Text>
          <Icon value="filter" $active={false} />
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
      <S.filterIcon value="showFilter" size={25} onClick={open} />
    </S.Container>
  );
};

export default Filter;
