import GalleryHeader from './components/galleryHeader';
import GalleryMain from './components/galleryMain';
import * as S from './styles';


const GalleryPage = () => {
  return (
    <S.Container>
      <GalleryHeader />
      <GalleryMain />
    </S.Container>
  )
}

export default GalleryPage