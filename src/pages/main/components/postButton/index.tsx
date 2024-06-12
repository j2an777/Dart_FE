import { useNavigate } from 'react-router-dom';
import buttonimg from '@/assets/images/postButton.png';
import * as S from './styles';

const PostButton = () => {
  const navigate = useNavigate();
  return (
    <S.Container onClick={() => navigate('/post')}>
      <S.PostArrow value="postArrow" $active={false} />
      <S.BackgroundImage alt="버튼 백그라운드 이미지" src={buttonimg} />
    </S.Container>
  );
};

export default PostButton;
