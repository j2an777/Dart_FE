import { CategoryPortal, GalleryInfoPortal } from '@/components';
import { ButtonNLine, Filter, GalleryList } from './components';
import { Navigate } from 'react-router-dom';

import * as S from './styles';

const MainPage = () => {
  const invited = JSON.parse(localStorage.getItem('invited') as string);
  if (!invited) return <Navigate to={'/intro'} />;

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
