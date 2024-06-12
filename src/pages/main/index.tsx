import { PageButtons } from '@/components';
import { Filter, GalleryList } from './components';

import * as S from './styles';

const MainPage = () => {
  return (
    <S.Container>
      <Filter />
      <GalleryList />
      <PageButtons orientation="vertical" numberSize="t3" />
    </S.Container>
  );
};

export default MainPage;
