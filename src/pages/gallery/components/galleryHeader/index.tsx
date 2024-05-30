import * as S from './styles';
import GalleryLogo from '@/assets/images/galleryLogo.png';
import { Icon } from '@/components';
import { alertStore } from '@/stores/alert';
import ReviewModal from '../reviewModal';
import { Link } from 'react-router-dom';

const GalleryHeader = () => {
  const open = alertStore((state) => state.open);

  const onHandleToggle = () => {
    open({
      title: '후기 등록하기',
      description: <ReviewModal />,
      buttonLabel: '등록',
      onClickButton: () => {
        // api 요청 함수 호출구문
      },
    })
  };

  return (
    <S.HeaderContainer>
      <S.MenuBlock>
        <Link to='/'>
          <S.Logo src={GalleryLogo} />
        </Link>
        <S.MenuBox>
          <Icon value='review' size={30} onClick={onHandleToggle} strokeColor='white'/>
          <Icon value='chat' size={30} />
          <Icon value='out' size={30} />
        </S.MenuBox>
      </S.MenuBlock>
      <S.CopyRight>
        &copy; 2024 Gallery from D'art.
      </S.CopyRight>
    </S.HeaderContainer>
  )
}

export default GalleryHeader