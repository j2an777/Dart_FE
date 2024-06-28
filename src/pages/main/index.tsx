import { GalleryInfoPortal, PageButtons } from '@/components';
import { Filter, GalleryList } from './components';

import * as S from './styles';

const MainPage = () => {
  return (
    <S.Container>
      <S.Line>
        <S.BottomText typography="t7" bold="regular">
          EXHIBITIONS
        </S.BottomText>
      </S.Line>
      <Filter />
      <GalleryList />
      <PageButtons orientation="vertical" numberSize="t3" />
      <GalleryInfoPortal />
    </S.Container>
  );
};

export default MainPage;
