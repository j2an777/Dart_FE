import { Icon, Text } from '@/components';
import { pageStore } from '@/stores/page';
import getVisiblePage from '@/utils/getPage';

import * as S from './styles';

const PageButtons = () => {
  const {
    nextPage,
    pageInfo: { isDone, isFirst, pageIndex },
    prevPage,
  } = pageStore();
  return (
    <S.Container>
      <S.ButtonBox>
        <Icon
          value="minus"
          size={15}
          onClick={prevPage}
          $active={!isFirst}
          color={isFirst ? 'gray300' : 'black'}
        />
        <Text typography="t3" bold="regular" children={getVisiblePage(pageIndex + 1)} />
        <Icon
          value="plus"
          size={15}
          onClick={nextPage}
          $active={!isDone}
          color={isDone ? 'gray300' : 'black'}
        />
      </S.ButtonBox>
      <S.Line />
    </S.Container>
  );
};

export default PageButtons;
