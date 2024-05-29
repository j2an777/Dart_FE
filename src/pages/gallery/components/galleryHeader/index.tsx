import * as S from './styles';
import GalleryLogo from '@/assets/images/galleryLogo.png';
import ReviewItem from '@/assets/images/review.svg';
import ChatItem from '@/assets/images/chat.svg';
import OutItem from '@/assets/images/out.svg';

const GalleryHeader = () => {
  return (
    <S.HeaderContainer>
      <S.MenuBlock>
        <S.Logo src={GalleryLogo} />
        <S.MenuBox>
          <img src={ReviewItem} />
          <img src={ChatItem} />
          <img src={OutItem} />
        </S.MenuBox>
      </S.MenuBlock>
      <S.CopyRight>
        &copy; 2024 Gallery from D'art.
      </S.CopyRight>
    </S.HeaderContainer>
  )
}

export default GalleryHeader