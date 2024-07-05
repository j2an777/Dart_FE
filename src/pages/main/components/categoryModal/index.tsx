import { Dimmed, Icon, Text } from '@/components';
import { ButtonBar, CostFilter, KeywordFilter } from '..';
import {
  costButtonInfo,
  displayButtonInfo,
  searchButtonInfo,
  sortButtonInfo,
} from '@/consts/filter';
import { pageStore } from '@/stores/page';
import { filterStore } from '@/stores/filter';
import { useEffect } from 'react';

import * as S from '../filter/styles';

interface CategoryModalProps {
  close: () => void;
}

const CategoryModal = ({ close }: CategoryModalProps) => {
  const { filterValue, costArray, onChange, onNestingChange, onReset } = filterStore();
  const resetPageInfo = pageStore((state) => state.resetPageInfo);

  useEffect(() => {
    resetPageInfo();
  }, [filterValue, costArray]);

  return (
    <Dimmed>
      <S.ModalContainer
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        exit={{ x: -100, opacity: 0 }}
      >
        <S.FilterBox>
          <S.TitleBox>
            <Text typography="t6" bold="bold">
              FILTER
            </Text>
            <Icon value="cancel" onClick={close} />
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
      </S.ModalContainer>
    </Dimmed>
  );
};

export default CategoryModal;
