import { Icon, Text } from '@/components';
import { pageStore } from '@/stores/page';
import getVisiblePage from '@/utils/getPage';

import * as S from './styles';
import { Typograph } from '@/styles/typography';
import { useEffect } from 'react';

export interface PageButtonsProps {
  orientation?: 'horizontal' | 'vertical';
  numberSize?: Typograph;
}

const PageButtons = ({
  orientation = 'horizontal',
  numberSize = 't4',
}: PageButtonsProps) => {
  const {
    nextPage,
    pageInfo: { isDone, isFirst, pageIndex },
    prevPage,
    resetPageInfo,
  } = pageStore();

  useEffect(() => {
    return () => {
      console.log('hi');
      resetPageInfo();
    };
  }, [resetPageInfo]);
  return (
    <S.Container orientation={orientation}>
      <S.ButtonBox orientation={orientation}>
        <Icon
          value="minus"
          size={15}
          onClick={prevPage}
          $active={!isFirst}
          color={isFirst ? 'gray300' : 'black'}
        />
        <Text
          typography={numberSize}
          bold="regular"
          children={getVisiblePage(pageIndex + 1)}
        />
        <Icon
          value="plus"
          size={15}
          onClick={nextPage}
          $active={!isDone}
          color={isDone ? 'gray300' : 'black'}
        />
      </S.ButtonBox>
      <S.Line orientation={orientation} />
    </S.Container>
  );
};

export default PageButtons;
