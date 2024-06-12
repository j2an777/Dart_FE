import { Filter, GalleryList, PageButtons } from './components';

import * as S from './styles';

const MainPage = () => {
  return (
    <S.Container>
      <Filter />
      <GalleryList />
      <PageButtons />
    </S.Container>
  );
};

export default MainPage;
