import { Icon, Text } from '@/components';
import { ButtonBar, CostFilter, KeywordFilter, PostButton } from '..';
import {
  costButtonInfo,
  displayButtonInfo,
  searchButtonInfo,
  sortButtonInfo,
} from '@/consts/filter';
import { filterStore } from '@/stores/filter';
import { pageStore } from '@/stores/page';

import * as S from './styles';
import { useEffect } from 'react';

const Filter = () => {
  const { filterValue, costArray, onChange, onNestingChange } = filterStore();
  const resetPageInfo = pageStore((state) => state.resetPageInfo);
  useEffect(() => {
    resetPageInfo();
  }, [filterValue, costArray]);
  return (
    <S.Container>
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
      <PostButton />
    </S.Container>
  );
};

export default Filter;
