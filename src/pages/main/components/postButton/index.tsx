import buttonimg from '@/assets/images/postButton.png';
import useCustomNavigate from '@/hooks/useCustomNavigate';
import * as S from './styles';

const PostButton = () => {
  const navigate = useCustomNavigate();
  return (
    <S.Container onClick={() => navigate('/post', { replace: true, hasAuth: true })}>
      <S.PostArrow value="postArrow" $active={false} />
      <S.BackgroundImage alt="버튼 백그라운드 이미지" src={buttonimg} />
    </S.Container>
  );
};

export default PostButton;
