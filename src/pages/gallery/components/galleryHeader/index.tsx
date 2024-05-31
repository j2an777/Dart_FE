import * as S from './styles';
import GalleryLogo from '@/assets/images/galleryLogo.png';
import { Icon } from '@/components';
import { alertStore } from '@/stores/alert';
import ReviewModal from '../reviewModal';
import { useNavigate } from 'react-router-dom';

const GalleryHeader = () => {
  const open = alertStore((state) => state.open);
  const navigate = useNavigate();

  const onHandleToggle = (name: string) => {
    if (name === 'review') {
      open({
        title: '후기 등록하기',
        description: <ReviewModal />,
        buttonLabel: '등록',
        onClickButton: () => {
          // api 요청 함수 호출구문
        },
      })
    } else if (name === 'chat') {
      // 여기에 채팅창 열어지는 함수 호출 구문 작성
    } else if (name === 'out'){
      open({
        title: '전시관 나가기',
        description: '전시관에서 나가시겠습니까?',
        buttonLabel: '확인',
        onClickButton: () => {
          navigate(-1);
        },
      })
    } else {
      open({
        title: '전시관 나가기',
        description: '전시관에서 나가시겠습니까?',
        buttonLabel: '확인',
        onClickButton: () => {
          navigate('/intro');
        },
      })
    }
  };

  return (
    <S.HeaderContainer>
      <S.MenuBlock>
        <S.Logo src={GalleryLogo} onClick={() => onHandleToggle('toMain')}/>
        <S.MenuBox>
          <Icon value='review' size={30} onClick={() => onHandleToggle('review')} strokeColor='white'/>
          <Icon value='chat' size={30} onClick={() => onHandleToggle('chqt')}/>
          <Icon value='out' size={30} onClick={() => onHandleToggle('out')}/>
        </S.MenuBox>
      </S.MenuBlock>
      <S.CopyRight>
        &copy; 2024 Gallery from D'art.
      </S.CopyRight>
    </S.HeaderContainer>
  )
}

export default GalleryHeader