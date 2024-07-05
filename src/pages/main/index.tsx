import { CategoryPortal, GalleryInfoPortal } from '@/components';
import { ButtonNLine, Filter, GalleryList } from './components';

import * as S from './styles';

const MainPage = () => {
  return (
    <S.Container>
      <S.ContentBox>
        <Filter />
        <GalleryList />
      </S.ContentBox>
      <ButtonNLine />
      <GalleryInfoPortal />
      <CategoryPortal />
    </S.Container>
  );
};

export default MainPage;
