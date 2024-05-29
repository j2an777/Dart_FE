import * as S from './styles';
import { useNavigate } from 'react-router-dom';
import StepZero from './components/stepZero';

const PostPage = () => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.Quit onClick={() => navigate(-1)}>나가기 아이콘</S.Quit>
      <StepZero />
    </S.Container>
  );
};

export default PostPage;
