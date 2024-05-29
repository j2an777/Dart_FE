import { Button } from '@/components';

import * as S from './styles';
import { useNavigate } from 'react-router-dom';

const SignupButtons = ({ page }: { page: string | null }) => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <Button
        size="lg"
        buttonType="rectangleGray"
        bold="regular"
        onClick={() => navigate(-1)}
      >
        {page === '1' ? '취소' : '이전'}
      </Button>
      {page === '1' ? (
        <Button
          size="lg"
          buttonType="rectangleWhite"
          bold="regular"
          onClick={() => navigate('/signup?page=2')}
        >
          다음
        </Button>
      ) : (
        <Button size="lg" buttonType="rectangleWhite" bold="regular" type="submit">
          완료
        </Button>
      )}
    </S.Container>
  );
};

export default SignupButtons;
