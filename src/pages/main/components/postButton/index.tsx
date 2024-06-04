import { Icon } from '@/components';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';

const PostButton = () => {
  const navigate = useNavigate();
  return (
    <S.Container onClick={() => navigate('/post')}>
      <S.PostArrow value="postArrow" $active={false} />
      <Icon value="postButton" />
    </S.Container>
  );
};

export default PostButton;
