import * as S from './styles';
import { useNavigate } from 'react-router-dom';
import StepZero from './components/stepZero';
import StepOne from './components/stepOne';
import StepTwo from './components/stepTwo';
import { Icon } from '@/components';

const PostPage = () => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.Block>
        <S.Quit onClick={() => navigate(-1)}>
          <Icon value="cancel" />
        </S.Quit>
        <StepZero />
        <StepOne />
        <StepTwo />
      </S.Block>
    </S.Container>
  );
};

export default PostPage;
